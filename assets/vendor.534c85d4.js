var $f=Object.defineProperty;var Vl=Object.getOwnPropertySymbols;var Kf=Object.prototype.hasOwnProperty,Qf=Object.prototype.propertyIsEnumerable;var Gl=(i,e,t)=>e in i?$f(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t,Wl=(i,e)=>{for(var t in e||(e={}))Kf.call(e,t)&&Gl(i,t,e[t]);if(Vl)for(var t of Vl(e))Qf.call(e,t)&&Gl(i,t,e[t]);return i};function Lo(i,e){const t=Object.create(null),n=i.split(",");for(let r=0;r<n.length;r++)t[n[r]]=!0;return e?r=>!!t[r.toLowerCase()]:r=>!!t[r]}const ed="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",td=Lo(ed);function ql(i){return!!i||i===""}function es(i){if(Ie(i)){const e={};for(let t=0;t<i.length;t++){const n=i[t],r=st(n)?rd(n):es(n);if(r)for(const s in r)e[s]=r[s]}return e}else{if(st(i))return i;if(mt(i))return i}}const nd=/;(?![^(]*\))/g,id=/:(.+)/;function rd(i){const e={};return i.split(nd).forEach(t=>{if(t){const n=t.split(id);n.length>1&&(e[n[0].trim()]=n[1].trim())}}),e}function ts(i){let e="";if(st(i))e=i;else if(Ie(i))for(let t=0;t<i.length;t++){const n=ts(i[t]);n&&(e+=n+" ")}else if(mt(i))for(const t in i)i[t]&&(e+=t+" ");return e.trim()}function CM(i){if(!i)return null;let{class:e,style:t}=i;return e&&!st(e)&&(i.class=ts(e)),t&&(i.style=es(t)),i}const qe={},fi=[],Vt=()=>{},sd=()=>!1,od=/^on[^a-z]/,ns=i=>od.test(i),Co=i=>i.startsWith("onUpdate:"),pt=Object.assign,jl=(i,e)=>{const t=i.indexOf(e);t>-1&&i.splice(t,1)},ad=Object.prototype.hasOwnProperty,Oe=(i,e)=>ad.call(i,e),Ie=Array.isArray,dr=i=>is(i)==="[object Map]",ld=i=>is(i)==="[object Set]",De=i=>typeof i=="function",st=i=>typeof i=="string",Ro=i=>typeof i=="symbol",mt=i=>i!==null&&typeof i=="object",Xl=i=>mt(i)&&De(i.then)&&De(i.catch),cd=Object.prototype.toString,is=i=>cd.call(i),ud=i=>is(i).slice(8,-1),hd=i=>is(i)==="[object Object]",Po=i=>st(i)&&i!=="NaN"&&i[0]!=="-"&&""+parseInt(i,10)===i,rs=Lo(",key,ref,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ss=i=>{const e=Object.create(null);return t=>e[t]||(e[t]=i(t))},fd=/-(\w)/g,Yt=ss(i=>i.replace(fd,(e,t)=>t?t.toUpperCase():"")),dd=/\B([A-Z])/g,di=ss(i=>i.replace(dd,"-$1").toLowerCase()),os=ss(i=>i.charAt(0).toUpperCase()+i.slice(1)),Io=ss(i=>i?`on${os(i)}`:""),pr=(i,e)=>!Object.is(i,e),Do=(i,e)=>{for(let t=0;t<i.length;t++)i[t](e)},as=(i,e,t)=>{Object.defineProperty(i,e,{configurable:!0,enumerable:!1,value:t})},pd=i=>{const e=parseFloat(i);return isNaN(e)?i:e};let Yl;const md=()=>Yl||(Yl=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let Yn;const ls=[];class gd{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&Yn&&(this.parent=Yn,this.index=(Yn.scopes||(Yn.scopes=[])).push(this)-1)}run(e){if(this.active)try{return this.on(),e()}finally{this.off()}}on(){this.active&&(ls.push(this),Yn=this)}off(){this.active&&(ls.pop(),Yn=ls[ls.length-1])}stop(e){if(this.active){if(this.effects.forEach(t=>t.stop()),this.cleanups.forEach(t=>t()),this.scopes&&this.scopes.forEach(t=>t.stop(!0)),this.parent&&!e){const t=this.parent.scopes.pop();t&&t!==this&&(this.parent.scopes[this.index]=t,t.index=this.index)}this.active=!1}}}function xd(i,e){e=e||Yn,e&&e.active&&e.effects.push(i)}const No=i=>{const e=new Set(i);return e.w=0,e.n=0,e},Zl=i=>(i.w&bn)>0,Jl=i=>(i.n&bn)>0,yd=({deps:i})=>{if(i.length)for(let e=0;e<i.length;e++)i[e].w|=bn},_d=i=>{const{deps:e}=i;if(e.length){let t=0;for(let n=0;n<e.length;n++){const r=e[n];Zl(r)&&!Jl(r)?r.delete(i):e[t++]=r,r.w&=~bn,r.n&=~bn}e.length=t}},Fo=new WeakMap;let mr=0,bn=1;const Bo=30,gr=[];let Zn;const Jn=Symbol(""),Oo=Symbol("");class zo{constructor(e,t=null,n){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],xd(this,n)}run(){if(!this.active)return this.fn();if(!gr.includes(this))try{return gr.push(Zn=this),vd(),bn=1<<++mr,mr<=Bo?yd(this):$l(this),this.fn()}finally{mr<=Bo&&_d(this),bn=1<<--mr,$n(),gr.pop();const e=gr.length;Zn=e>0?gr[e-1]:void 0}}stop(){this.active&&($l(this),this.onStop&&this.onStop(),this.active=!1)}}function $l(i){const{deps:e}=i;if(e.length){for(let t=0;t<e.length;t++)e[t].delete(i);e.length=0}}let pi=!0;const Uo=[];function mi(){Uo.push(pi),pi=!1}function vd(){Uo.push(pi),pi=!0}function $n(){const i=Uo.pop();pi=i===void 0?!0:i}function Ct(i,e,t){if(!Kl())return;let n=Fo.get(i);n||Fo.set(i,n=new Map);let r=n.get(t);r||n.set(t,r=No()),Ql(r)}function Kl(){return pi&&Zn!==void 0}function Ql(i,e){let t=!1;mr<=Bo?Jl(i)||(i.n|=bn,t=!Zl(i)):t=!i.has(Zn),t&&(i.add(Zn),Zn.deps.push(i))}function an(i,e,t,n,r,s){const o=Fo.get(i);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(t==="length"&&Ie(i))o.forEach((l,c)=>{(c==="length"||c>=n)&&a.push(l)});else switch(t!==void 0&&a.push(o.get(t)),e){case"add":Ie(i)?Po(t)&&a.push(o.get("length")):(a.push(o.get(Jn)),dr(i)&&a.push(o.get(Oo)));break;case"delete":Ie(i)||(a.push(o.get(Jn)),dr(i)&&a.push(o.get(Oo)));break;case"set":dr(i)&&a.push(o.get(Jn));break}if(a.length===1)a[0]&&Ho(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);Ho(No(l))}}function Ho(i,e){for(const t of Ie(i)?i:[...i])(t!==Zn||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const bd=Lo("__proto__,__v_isRef,__isVue"),ec=new Set(Object.getOwnPropertyNames(Symbol).map(i=>Symbol[i]).filter(Ro)),Md=ko(),wd=ko(!1,!0),Sd=ko(!0),tc=Td();function Td(){const i={};return["includes","indexOf","lastIndexOf"].forEach(e=>{i[e]=function(...t){const n=Ue(this);for(let s=0,o=this.length;s<o;s++)Ct(n,"get",s+"");const r=n[e](...t);return r===-1||r===!1?n[e](...t.map(Ue)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{i[e]=function(...t){mi();const n=Ue(this)[e].apply(this,t);return $n(),n}}),i}function ko(i=!1,e=!1){return function(n,r,s){if(r==="__v_isReactive")return!i;if(r==="__v_isReadonly")return i;if(r==="__v_raw"&&s===(i?e?kd:uc:e?cc:lc).get(n))return n;const o=Ie(n);if(!i&&o&&Oe(tc,r))return Reflect.get(tc,r,s);const a=Reflect.get(n,r,s);return(Ro(r)?ec.has(r):bd(r))||(i||Ct(n,"get",r),e)?a:Tt(a)?!o||!Po(r)?a.value:a:mt(a)?i?hc(a):Wo(a):a}}const Ed=nc(),Ad=nc(!0);function nc(i=!1){return function(t,n,r,s){let o=t[n];if(!i&&(r=Ue(r),o=Ue(o),!Ie(t)&&Tt(o)&&!Tt(r)))return o.value=r,!0;const a=Ie(t)&&Po(n)?Number(n)<t.length:Oe(t,n),l=Reflect.set(t,n,r,s);return t===Ue(s)&&(a?pr(r,o)&&an(t,"set",n,r):an(t,"add",n,r)),l}}function Ld(i,e){const t=Oe(i,e);i[e];const n=Reflect.deleteProperty(i,e);return n&&t&&an(i,"delete",e,void 0),n}function Cd(i,e){const t=Reflect.has(i,e);return(!Ro(e)||!ec.has(e))&&Ct(i,"has",e),t}function Rd(i){return Ct(i,"iterate",Ie(i)?"length":Jn),Reflect.ownKeys(i)}const ic={get:Md,set:Ed,deleteProperty:Ld,has:Cd,ownKeys:Rd},Pd={get:Sd,set(i,e){return!0},deleteProperty(i,e){return!0}},Id=pt({},ic,{get:wd,set:Ad}),Vo=i=>i,cs=i=>Reflect.getPrototypeOf(i);function us(i,e,t=!1,n=!1){i=i.__v_raw;const r=Ue(i),s=Ue(e);e!==s&&!t&&Ct(r,"get",e),!t&&Ct(r,"get",s);const{has:o}=cs(r),a=n?Vo:t?jo:xr;if(o.call(r,e))return a(i.get(e));if(o.call(r,s))return a(i.get(s));i!==r&&i.get(e)}function hs(i,e=!1){const t=this.__v_raw,n=Ue(t),r=Ue(i);return i!==r&&!e&&Ct(n,"has",i),!e&&Ct(n,"has",r),i===r?t.has(i):t.has(i)||t.has(r)}function fs(i,e=!1){return i=i.__v_raw,!e&&Ct(Ue(i),"iterate",Jn),Reflect.get(i,"size",i)}function rc(i){i=Ue(i);const e=Ue(this);return cs(e).has.call(e,i)||(e.add(i),an(e,"add",i,i)),this}function sc(i,e){e=Ue(e);const t=Ue(this),{has:n,get:r}=cs(t);let s=n.call(t,i);s||(i=Ue(i),s=n.call(t,i));const o=r.call(t,i);return t.set(i,e),s?pr(e,o)&&an(t,"set",i,e):an(t,"add",i,e),this}function oc(i){const e=Ue(this),{has:t,get:n}=cs(e);let r=t.call(e,i);r||(i=Ue(i),r=t.call(e,i)),n&&n.call(e,i);const s=e.delete(i);return r&&an(e,"delete",i,void 0),s}function ac(){const i=Ue(this),e=i.size!==0,t=i.clear();return e&&an(i,"clear",void 0,void 0),t}function ds(i,e){return function(n,r){const s=this,o=s.__v_raw,a=Ue(o),l=e?Vo:i?jo:xr;return!i&&Ct(a,"iterate",Jn),o.forEach((c,u)=>n.call(r,l(c),l(u),s))}}function ps(i,e,t){return function(...n){const r=this.__v_raw,s=Ue(r),o=dr(s),a=i==="entries"||i===Symbol.iterator&&o,l=i==="keys"&&o,c=r[i](...n),u=t?Vo:e?jo:xr;return!e&&Ct(s,"iterate",l?Oo:Jn),{next(){const{value:h,done:f}=c.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function Mn(i){return function(...e){return i==="delete"?!1:this}}function Dd(){const i={get(s){return us(this,s)},get size(){return fs(this)},has:hs,add:rc,set:sc,delete:oc,clear:ac,forEach:ds(!1,!1)},e={get(s){return us(this,s,!1,!0)},get size(){return fs(this)},has:hs,add:rc,set:sc,delete:oc,clear:ac,forEach:ds(!1,!0)},t={get(s){return us(this,s,!0)},get size(){return fs(this,!0)},has(s){return hs.call(this,s,!0)},add:Mn("add"),set:Mn("set"),delete:Mn("delete"),clear:Mn("clear"),forEach:ds(!0,!1)},n={get(s){return us(this,s,!0,!0)},get size(){return fs(this,!0)},has(s){return hs.call(this,s,!0)},add:Mn("add"),set:Mn("set"),delete:Mn("delete"),clear:Mn("clear"),forEach:ds(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{i[s]=ps(s,!1,!1),t[s]=ps(s,!0,!1),e[s]=ps(s,!1,!0),n[s]=ps(s,!0,!0)}),[i,t,e,n]}const[Nd,Fd,Bd,Od]=Dd();function Go(i,e){const t=e?i?Od:Bd:i?Fd:Nd;return(n,r,s)=>r==="__v_isReactive"?!i:r==="__v_isReadonly"?i:r==="__v_raw"?n:Reflect.get(Oe(t,r)&&r in n?t:n,r,s)}const zd={get:Go(!1,!1)},Ud={get:Go(!1,!0)},Hd={get:Go(!0,!1)},lc=new WeakMap,cc=new WeakMap,uc=new WeakMap,kd=new WeakMap;function Vd(i){switch(i){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Gd(i){return i.__v_skip||!Object.isExtensible(i)?0:Vd(ud(i))}function Wo(i){return i&&i.__v_isReadonly?i:qo(i,!1,ic,zd,lc)}function Wd(i){return qo(i,!1,Id,Ud,cc)}function hc(i){return qo(i,!0,Pd,Hd,uc)}function qo(i,e,t,n,r){if(!mt(i)||i.__v_raw&&!(e&&i.__v_isReactive))return i;const s=r.get(i);if(s)return s;const o=Gd(i);if(o===0)return i;const a=new Proxy(i,o===2?n:t);return r.set(i,a),a}function gi(i){return fc(i)?gi(i.__v_raw):!!(i&&i.__v_isReactive)}function fc(i){return!!(i&&i.__v_isReadonly)}function dc(i){return gi(i)||fc(i)}function Ue(i){const e=i&&i.__v_raw;return e?Ue(e):i}function pc(i){return as(i,"__v_skip",!0),i}const xr=i=>mt(i)?Wo(i):i,jo=i=>mt(i)?hc(i):i;function mc(i){Kl()&&(i=Ue(i),i.dep||(i.dep=No()),Ql(i.dep))}function gc(i,e){i=Ue(i),i.dep&&Ho(i.dep)}function Tt(i){return Boolean(i&&i.__v_isRef===!0)}function RM(i){return qd(i,!1)}function qd(i,e){return Tt(i)?i:new jd(i,e)}class jd{constructor(e,t){this._shallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:Ue(e),this._value=t?e:xr(e)}get value(){return mc(this),this._value}set value(e){e=this._shallow?e:Ue(e),pr(e,this._rawValue)&&(this._rawValue=e,this._value=this._shallow?e:xr(e),gc(this))}}function Xd(i){return Tt(i)?i.value:i}const Yd={get:(i,e,t)=>Xd(Reflect.get(i,e,t)),set:(i,e,t,n)=>{const r=i[e];return Tt(r)&&!Tt(t)?(r.value=t,!0):Reflect.set(i,e,t,n)}};function xc(i){return gi(i)?i:new Proxy(i,Yd)}class Zd{constructor(e,t,n){this._setter=t,this.dep=void 0,this._dirty=!0,this.__v_isRef=!0,this.effect=new zo(e,()=>{this._dirty||(this._dirty=!0,gc(this))}),this.__v_isReadonly=n}get value(){const e=Ue(this);return mc(e),e._dirty&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function Jd(i,e){let t,n;const r=De(i);return r?(t=i,n=Vt):(t=i.get,n=i.set),new Zd(t,n,r||!n)}Promise.resolve();function $d(i,e,...t){const n=i.vnode.props||qe;let r=t;const s=e.startsWith("update:"),o=s&&e.slice(7);if(o&&o in n){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:f}=n[u]||qe;f?r=t.map(m=>m.trim()):h&&(r=t.map(pd))}let a,l=n[a=Io(e)]||n[a=Io(Yt(e))];!l&&s&&(l=n[a=Io(di(e))]),l&&Bt(l,i,6,r);const c=n[a+"Once"];if(c){if(!i.emitted)i.emitted={};else if(i.emitted[a])return;i.emitted[a]=!0,Bt(c,i,6,r)}}function yc(i,e,t=!1){const n=e.emitsCache,r=n.get(i);if(r!==void 0)return r;const s=i.emits;let o={},a=!1;if(!De(i)){const l=c=>{const u=yc(c,e,!0);u&&(a=!0,pt(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),i.extends&&l(i.extends),i.mixins&&i.mixins.forEach(l)}return!s&&!a?(n.set(i,null),null):(Ie(s)?s.forEach(l=>o[l]=null):pt(o,s),n.set(i,o),o)}function Xo(i,e){return!i||!ns(e)?!1:(e=e.slice(2).replace(/Once$/,""),Oe(i,e[0].toLowerCase()+e.slice(1))||Oe(i,di(e))||Oe(i,e))}let Gt=null,_c=null;function ms(i){const e=Gt;return Gt=i,_c=i&&i.type.__scopeId||null,e}function Kd(i,e=Gt,t){if(!e||i._n)return i;const n=(...r)=>{n._d&&jc(-1);const s=ms(e),o=i(...r);return ms(s),n._d&&jc(1),o};return n._n=!0,n._c=!0,n._d=!0,n}function Yo(i){const{type:e,vnode:t,proxy:n,withProxy:r,props:s,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:h,data:f,setupState:m,ctx:x,inheritAttrs:y}=i;let v,p;const g=ms(i);try{if(t.shapeFlag&4){const b=r||n;v=Kt(u.call(b,b,h,s,m,f,x)),p=l}else{const b=e;v=Kt(b.length>1?b(s,{attrs:l,slots:a,emit:c}):b(s,null)),p=e.props?l:Qd(l)}}catch(b){yr.length=0,Ss(b,i,1),v=cn($t)}let A=v;if(p&&y!==!1){const b=Object.keys(p),{shapeFlag:E}=A;b.length&&E&(1|6)&&(o&&b.some(Co)&&(p=ep(p,o)),A=xi(A,p))}return t.dirs&&(A.dirs=A.dirs?A.dirs.concat(t.dirs):t.dirs),t.transition&&(A.transition=t.transition),v=A,ms(g),v}const Qd=i=>{let e;for(const t in i)(t==="class"||t==="style"||ns(t))&&((e||(e={}))[t]=i[t]);return e},ep=(i,e)=>{const t={};for(const n in i)(!Co(n)||!(n.slice(9)in e))&&(t[n]=i[n]);return t};function tp(i,e,t){const{props:n,children:r,component:s}=i,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return n?vc(n,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==n[f]&&!Xo(c,f))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:n===o?!1:n?o?vc(n,o,c):!0:!!o;return!1}function vc(i,e,t){const n=Object.keys(e);if(n.length!==Object.keys(i).length)return!0;for(let r=0;r<n.length;r++){const s=n[r];if(e[s]!==i[s]&&!Xo(t,s))return!0}return!1}function np({vnode:i,parent:e},t){for(;e&&e.subTree===i;)(i=e.vnode).el=t,e=e.parent}const ip=i=>i.__isSuspense;function rp(i,e){e&&e.pendingBranch?Ie(i)?e.effects.push(...i):e.effects.push(i):om(i)}function sp(i,e){if(lt){let t=lt.provides;const n=lt.parent&&lt.parent.provides;n===t&&(t=lt.provides=Object.create(n)),t[i]=e}}function Zo(i,e,t=!1){const n=lt||Gt;if(n){const r=n.parent==null?n.vnode.appContext&&n.vnode.appContext.provides:n.parent.provides;if(r&&i in r)return r[i];if(arguments.length>1)return t&&De(e)?e.call(n.proxy):e}}function op(){const i={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Tc(()=>{i.isMounted=!0}),Ec(()=>{i.isUnmounting=!0}),i}const Ft=[Function,Array],ap={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Ft,onEnter:Ft,onAfterEnter:Ft,onEnterCancelled:Ft,onBeforeLeave:Ft,onLeave:Ft,onAfterLeave:Ft,onLeaveCancelled:Ft,onBeforeAppear:Ft,onAppear:Ft,onAfterAppear:Ft,onAppearCancelled:Ft},setup(i,{slots:e}){const t=Yp(),n=op();let r;return()=>{const s=e.default&&wc(e.default(),!0);if(!s||!s.length)return;const o=Ue(i),{mode:a}=o,l=s[0];if(n.isLeaving)return $o(l);const c=Mc(l);if(!c)return $o(l);const u=Jo(c,o,n,t);Ko(c,u);const h=t.subTree,f=h&&Mc(h);let m=!1;const{getTransitionKey:x}=c.type;if(x){const y=x();r===void 0?r=y:y!==r&&(r=y,m=!0)}if(f&&f.type!==$t&&(!ti(c,f)||m)){const y=Jo(f,o,n,t);if(Ko(f,y),a==="out-in")return n.isLeaving=!0,y.afterLeave=()=>{n.isLeaving=!1,t.update()},$o(l);a==="in-out"&&c.type!==$t&&(y.delayLeave=(v,p,g)=>{const A=bc(n,f);A[String(f.key)]=f,v._leaveCb=()=>{p(),v._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=g})}return l}}},lp=ap;function bc(i,e){const{leavingVNodes:t}=i;let n=t.get(e.type);return n||(n=Object.create(null),t.set(e.type,n)),n}function Jo(i,e,t,n){const{appear:r,mode:s,persisted:o=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:h,onLeave:f,onAfterLeave:m,onLeaveCancelled:x,onBeforeAppear:y,onAppear:v,onAfterAppear:p,onAppearCancelled:g}=e,A=String(i.key),b=bc(t,i),E=(M,z)=>{M&&Bt(M,n,9,z)},I={mode:s,persisted:o,beforeEnter(M){let z=a;if(!t.isMounted)if(r)z=y||a;else return;M._leaveCb&&M._leaveCb(!0);const Q=b[A];Q&&ti(i,Q)&&Q.el._leaveCb&&Q.el._leaveCb(),E(z,[M])},enter(M){let z=l,Q=c,Z=u;if(!t.isMounted)if(r)z=v||l,Q=p||c,Z=g||u;else return;let F=!1;const ne=M._enterCb=J=>{F||(F=!0,J?E(Z,[M]):E(Q,[M]),I.delayedLeave&&I.delayedLeave(),M._enterCb=void 0)};z?(z(M,ne),z.length<=1&&ne()):ne()},leave(M,z){const Q=String(i.key);if(M._enterCb&&M._enterCb(!0),t.isUnmounting)return z();E(h,[M]);let Z=!1;const F=M._leaveCb=ne=>{Z||(Z=!0,z(),ne?E(x,[M]):E(m,[M]),M._leaveCb=void 0,b[Q]===i&&delete b[Q])};b[Q]=i,f?(f(M,F),f.length<=1&&F()):F()},clone(M){return Jo(M,e,t,n)}};return I}function $o(i){if(gs(i))return i=xi(i),i.children=null,i}function Mc(i){return gs(i)?i.children?i.children[0]:void 0:i}function Ko(i,e){i.shapeFlag&6&&i.component?Ko(i.component.subTree,e):i.shapeFlag&128?(i.ssContent.transition=e.clone(i.ssContent),i.ssFallback.transition=e.clone(i.ssFallback)):i.transition=e}function wc(i,e=!1){let t=[],n=0;for(let r=0;r<i.length;r++){const s=i[r];s.type===Jt?(s.patchFlag&128&&n++,t=t.concat(wc(s.children,e))):(e||s.type!==$t)&&t.push(s)}if(n>1)for(let r=0;r<t.length;r++)t[r].patchFlag=-2;return t}const Qo=i=>!!i.type.__asyncLoader,gs=i=>i.type.__isKeepAlive;function cp(i,e){Sc(i,"a",e)}function up(i,e){Sc(i,"da",e)}function Sc(i,e,t=lt){const n=i.__wdc||(i.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}i()});if(xs(e,n,t),t){let r=t.parent;for(;r&&r.parent;)gs(r.parent.vnode)&&hp(n,e,t,r),r=r.parent}}function hp(i,e,t,n){const r=xs(e,i,n,!0);Ac(()=>{jl(n[e],r)},t)}function xs(i,e,t=lt,n=!1){if(t){const r=t[i]||(t[i]=[]),s=e.__weh||(e.__weh=(...o)=>{if(t.isUnmounted)return;mi(),yi(t);const a=Bt(e,t,i,o);return ni(),$n(),a});return n?r.unshift(s):r.push(s),s}}const ln=i=>(e,t=lt)=>(!ws||i==="sp")&&xs(i,e,t),fp=ln("bm"),Tc=ln("m"),dp=ln("bu"),pp=ln("u"),Ec=ln("bum"),Ac=ln("um"),mp=ln("sp"),gp=ln("rtg"),xp=ln("rtc");function yp(i,e=lt){xs("ec",i,e)}let ea=!0;function _p(i){const e=Rc(i),t=i.proxy,n=i.ctx;ea=!1,e.beforeCreate&&Lc(e.beforeCreate,i,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:f,beforeUpdate:m,updated:x,activated:y,deactivated:v,beforeDestroy:p,beforeUnmount:g,destroyed:A,unmounted:b,render:E,renderTracked:I,renderTriggered:M,errorCaptured:z,serverPrefetch:Q,expose:Z,inheritAttrs:F,components:ne,directives:J,filters:$}=e;if(c&&vp(c,n,null,i.appContext.config.unwrapInjectedRef),o)for(const V in o){const q=o[V];De(q)&&(n[V]=q.bind(t))}if(r){const V=r.call(t,t);mt(V)&&(i.data=Wo(V))}if(ea=!0,s)for(const V in s){const q=s[V],xe=De(q)?q.bind(t,t):De(q.get)?q.get.bind(t,t):Vt,be=!De(q)&&De(q.set)?q.set.bind(t):Vt,ve=Jd({get:xe,set:be});Object.defineProperty(n,V,{enumerable:!0,configurable:!0,get:()=>ve.value,set:X=>ve.value=X})}if(a)for(const V in a)Cc(a[V],n,t,V);if(l){const V=De(l)?l.call(t):l;Reflect.ownKeys(V).forEach(q=>{sp(q,V[q])})}u&&Lc(u,i,"c");function K(V,q){Ie(q)?q.forEach(xe=>V(xe.bind(t))):q&&V(q.bind(t))}if(K(fp,h),K(Tc,f),K(dp,m),K(pp,x),K(cp,y),K(up,v),K(yp,z),K(xp,I),K(gp,M),K(Ec,g),K(Ac,b),K(mp,Q),Ie(Z))if(Z.length){const V=i.exposed||(i.exposed={});Z.forEach(q=>{Object.defineProperty(V,q,{get:()=>t[q],set:xe=>t[q]=xe})})}else i.exposed||(i.exposed={});E&&i.render===Vt&&(i.render=E),F!=null&&(i.inheritAttrs=F),ne&&(i.components=ne),J&&(i.directives=J)}function vp(i,e,t=Vt,n=!1){Ie(i)&&(i=ta(i));for(const r in i){const s=i[r];let o;mt(s)?"default"in s?o=Zo(s.from||r,s.default,!0):o=Zo(s.from||r):o=Zo(s),Tt(o)&&n?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[r]=o}}function Lc(i,e,t){Bt(Ie(i)?i.map(n=>n.bind(e.proxy)):i.bind(e.proxy),e,t)}function Cc(i,e,t,n){const r=n.includes(".")?lu(t,n):()=>t[n];if(st(i)){const s=e[i];De(s)&&pa(r,s)}else if(De(i))pa(r,i.bind(t));else if(mt(i))if(Ie(i))i.forEach(s=>Cc(s,e,t,n));else{const s=De(i.handler)?i.handler.bind(t):e[i.handler];De(s)&&pa(r,s,i)}}function Rc(i){const e=i.type,{mixins:t,extends:n}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=i.appContext,a=s.get(e);let l;return a?l=a:!r.length&&!t&&!n?l=e:(l={},r.length&&r.forEach(c=>ys(l,c,o,!0)),ys(l,e,o)),s.set(e,l),l}function ys(i,e,t,n=!1){const{mixins:r,extends:s}=e;s&&ys(i,s,t,!0),r&&r.forEach(o=>ys(i,o,t,!0));for(const o in e)if(!(n&&o==="expose")){const a=bp[o]||t&&t[o];i[o]=a?a(i[o],e[o]):e[o]}return i}const bp={data:Pc,props:Kn,emits:Kn,methods:Kn,computed:Kn,beforeCreate:bt,created:bt,beforeMount:bt,mounted:bt,beforeUpdate:bt,updated:bt,beforeDestroy:bt,beforeUnmount:bt,destroyed:bt,unmounted:bt,activated:bt,deactivated:bt,errorCaptured:bt,serverPrefetch:bt,components:Kn,directives:Kn,watch:wp,provide:Pc,inject:Mp};function Pc(i,e){return e?i?function(){return pt(De(i)?i.call(this,this):i,De(e)?e.call(this,this):e)}:e:i}function Mp(i,e){return Kn(ta(i),ta(e))}function ta(i){if(Ie(i)){const e={};for(let t=0;t<i.length;t++)e[i[t]]=i[t];return e}return i}function bt(i,e){return i?[...new Set([].concat(i,e))]:e}function Kn(i,e){return i?pt(pt(Object.create(null),i),e):e}function wp(i,e){if(!i)return e;if(!e)return i;const t=pt(Object.create(null),i);for(const n in e)t[n]=bt(i[n],e[n]);return t}function Sp(i,e,t,n=!1){const r={},s={};as(s,vs,1),i.propsDefaults=Object.create(null),Ic(i,e,r,s);for(const o in i.propsOptions[0])o in r||(r[o]=void 0);t?i.props=n?r:Wd(r):i.type.props?i.props=r:i.props=s,i.attrs=s}function Tp(i,e,t,n){const{props:r,attrs:s,vnode:{patchFlag:o}}=i,a=Ue(r),[l]=i.propsOptions;let c=!1;if((n||o>0)&&!(o&16)){if(o&8){const u=i.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];const m=e[f];if(l)if(Oe(s,f))m!==s[f]&&(s[f]=m,c=!0);else{const x=Yt(f);r[x]=na(l,a,x,m,i,!1)}else m!==s[f]&&(s[f]=m,c=!0)}}}else{Ic(i,e,r,s)&&(c=!0);let u;for(const h in a)(!e||!Oe(e,h)&&((u=di(h))===h||!Oe(e,u)))&&(l?t&&(t[h]!==void 0||t[u]!==void 0)&&(r[h]=na(l,a,h,void 0,i,!0)):delete r[h]);if(s!==a)for(const h in s)(!e||!Oe(e,h))&&(delete s[h],c=!0)}c&&an(i,"set","$attrs")}function Ic(i,e,t,n){const[r,s]=i.propsOptions;let o=!1,a;if(e)for(let l in e){if(rs(l))continue;const c=e[l];let u;r&&Oe(r,u=Yt(l))?!s||!s.includes(u)?t[u]=c:(a||(a={}))[u]=c:Xo(i.emitsOptions,l)||c!==n[l]&&(n[l]=c,o=!0)}if(s){const l=Ue(t),c=a||qe;for(let u=0;u<s.length;u++){const h=s[u];t[h]=na(r,l,h,c[h],i,!Oe(c,h))}}return o}function na(i,e,t,n,r,s){const o=i[t];if(o!=null){const a=Oe(o,"default");if(a&&n===void 0){const l=o.default;if(o.type!==Function&&De(l)){const{propsDefaults:c}=r;t in c?n=c[t]:(yi(r),n=c[t]=l.call(null,e),ni())}else n=l}o[0]&&(s&&!a?n=!1:o[1]&&(n===""||n===di(t))&&(n=!0))}return n}function Dc(i,e,t=!1){const n=e.propsCache,r=n.get(i);if(r)return r;const s=i.props,o={},a=[];let l=!1;if(!De(i)){const u=h=>{l=!0;const[f,m]=Dc(h,e,!0);pt(o,f),m&&a.push(...m)};!t&&e.mixins.length&&e.mixins.forEach(u),i.extends&&u(i.extends),i.mixins&&i.mixins.forEach(u)}if(!s&&!l)return n.set(i,fi),fi;if(Ie(s))for(let u=0;u<s.length;u++){const h=Yt(s[u]);Nc(h)&&(o[h]=qe)}else if(s)for(const u in s){const h=Yt(u);if(Nc(h)){const f=s[u],m=o[h]=Ie(f)||De(f)?{type:f}:f;if(m){const x=Oc(Boolean,m.type),y=Oc(String,m.type);m[0]=x>-1,m[1]=y<0||x<y,(x>-1||Oe(m,"default"))&&a.push(h)}}}const c=[o,a];return n.set(i,c),c}function Nc(i){return i[0]!=="$"}function Fc(i){const e=i&&i.toString().match(/^\s*function (\w+)/);return e?e[1]:i===null?"null":""}function Bc(i,e){return Fc(i)===Fc(e)}function Oc(i,e){return Ie(e)?e.findIndex(t=>Bc(t,i)):De(e)&&Bc(e,i)?0:-1}const zc=i=>i[0]==="_"||i==="$stable",ia=i=>Ie(i)?i.map(Kt):[Kt(i)],Ep=(i,e,t)=>{const n=Kd((...r)=>ia(e(...r)),t);return n._c=!1,n},Uc=(i,e,t)=>{const n=i._ctx;for(const r in i){if(zc(r))continue;const s=i[r];if(De(s))e[r]=Ep(r,s,n);else if(s!=null){const o=ia(s);e[r]=()=>o}}},Hc=(i,e)=>{const t=ia(e);i.slots.default=()=>t},Ap=(i,e)=>{if(i.vnode.shapeFlag&32){const t=e._;t?(i.slots=Ue(e),as(e,"_",t)):Uc(e,i.slots={})}else i.slots={},e&&Hc(i,e);as(i.slots,vs,1)},Lp=(i,e,t)=>{const{vnode:n,slots:r}=i;let s=!0,o=qe;if(n.shapeFlag&32){const a=e._;a?t&&a===1?s=!1:(pt(r,e),!t&&a===1&&delete r._):(s=!e.$stable,Uc(e,r)),o=e}else e&&(Hc(i,e),o={default:1});if(s)for(const a in r)!zc(a)&&!(a in o)&&delete r[a]};function Qn(i,e,t,n){const r=i.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[n];l&&(mi(),Bt(l,t,8,[i.el,a,i,e]),$n())}}function kc(){return{app:null,config:{isNativeTag:sd,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Cp=0;function Rp(i,e){return function(n,r=null){r!=null&&!mt(r)&&(r=null);const s=kc(),o=new Set;let a=!1;const l=s.app={_uid:Cp++,_component:n,_props:r,_container:null,_context:s,_instance:null,version:lm,get config(){return s.config},set config(c){},use(c,...u){return o.has(c)||(c&&De(c.install)?(o.add(c),c.install(l,...u)):De(c)&&(o.add(c),c(l,...u))),l},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),l},component(c,u){return u?(s.components[c]=u,l):s.components[c]},directive(c,u){return u?(s.directives[c]=u,l):s.directives[c]},mount(c,u,h){if(!a){const f=cn(n,r);return f.appContext=s,u&&e?e(f,c):i(f,c,h),a=!0,l._container=c,c.__vue_app__=l,ca(f.component)||f.component.proxy}},unmount(){a&&(i(null,l._container),delete l._container.__vue_app__)},provide(c,u){return s.provides[c]=u,l}};return l}}const Mt=rp;function Pp(i){return Ip(i)}function Ip(i,e){const t=md();t.__VUE__=!0;const{insert:n,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:f,setScopeId:m=Vt,cloneNode:x,insertStaticContent:y}=i,v=(S,T,P,w=null,d=null,_=null,B=!1,G=null,W=!!T.dynamicChildren)=>{if(S===T)return;S&&!ti(S,T)&&(w=ie(S),C(S,d,_,!0),S=null),T.patchFlag===-2&&(W=!1,T.dynamicChildren=null);const{type:Y,ref:he,shapeFlag:ce}=T;switch(Y){case sa:p(S,T,P,w);break;case $t:g(S,T,P,w);break;case oa:S==null&&A(T,P,w,B);break;case Jt:J(S,T,P,w,d,_,B,G,W);break;default:ce&1?I(S,T,P,w,d,_,B,G,W):ce&6?$(S,T,P,w,d,_,B,G,W):(ce&64||ce&128)&&Y.process(S,T,P,w,d,_,B,G,W,le)}he!=null&&d&&ra(he,S&&S.ref,_,T||S,!T)},p=(S,T,P,w)=>{if(S==null)n(T.el=a(T.children),P,w);else{const d=T.el=S.el;T.children!==S.children&&c(d,T.children)}},g=(S,T,P,w)=>{S==null?n(T.el=l(T.children||""),P,w):T.el=S.el},A=(S,T,P,w)=>{[S.el,S.anchor]=y(S.children,T,P,w)},b=({el:S,anchor:T},P,w)=>{let d;for(;S&&S!==T;)d=f(S),n(S,P,w),S=d;n(T,P,w)},E=({el:S,anchor:T})=>{let P;for(;S&&S!==T;)P=f(S),r(S),S=P;r(T)},I=(S,T,P,w,d,_,B,G,W)=>{B=B||T.type==="svg",S==null?M(T,P,w,d,_,B,G,W):Z(S,T,d,_,B,G,W)},M=(S,T,P,w,d,_,B,G)=>{let W,Y;const{type:he,props:ce,shapeFlag:pe,transition:fe,patchFlag:H,dirs:me}=S;if(S.el&&x!==void 0&&H===-1)W=S.el=x(S.el);else{if(W=S.el=o(S.type,_,ce&&ce.is,ce),pe&8?u(W,S.children):pe&16&&Q(S.children,W,null,w,d,_&&he!=="foreignObject",B,G),me&&Qn(S,null,w,"created"),ce){for(const _e in ce)_e!=="value"&&!rs(_e)&&s(W,_e,null,ce[_e],_,S.children,w,d,N);"value"in ce&&s(W,"value",null,ce.value),(Y=ce.onVnodeBeforeMount)&&Zt(Y,w,S)}z(W,S,S.scopeId,B,w)}me&&Qn(S,null,w,"beforeMount");const re=(!d||d&&!d.pendingBranch)&&fe&&!fe.persisted;re&&fe.beforeEnter(W),n(W,T,P),((Y=ce&&ce.onVnodeMounted)||re||me)&&Mt(()=>{Y&&Zt(Y,w,S),re&&fe.enter(W),me&&Qn(S,null,w,"mounted")},d)},z=(S,T,P,w,d)=>{if(P&&m(S,P),w)for(let _=0;_<w.length;_++)m(S,w[_]);if(d){let _=d.subTree;if(T===_){const B=d.vnode;z(S,B,B.scopeId,B.slotScopeIds,d.parent)}}},Q=(S,T,P,w,d,_,B,G,W=0)=>{for(let Y=W;Y<S.length;Y++){const he=S[Y]=G?wn(S[Y]):Kt(S[Y]);v(null,he,T,P,w,d,_,B,G)}},Z=(S,T,P,w,d,_,B)=>{const G=T.el=S.el;let{patchFlag:W,dynamicChildren:Y,dirs:he}=T;W|=S.patchFlag&16;const ce=S.props||qe,pe=T.props||qe;let fe;(fe=pe.onVnodeBeforeUpdate)&&Zt(fe,P,T,S),he&&Qn(T,S,P,"beforeUpdate");const H=d&&T.type!=="foreignObject";if(Y?F(S.dynamicChildren,Y,G,P,w,H,_):B||xe(S,T,G,null,P,w,H,_,!1),W>0){if(W&16)ne(G,T,ce,pe,P,w,d);else if(W&2&&ce.class!==pe.class&&s(G,"class",null,pe.class,d),W&4&&s(G,"style",ce.style,pe.style,d),W&8){const me=T.dynamicProps;for(let re=0;re<me.length;re++){const _e=me[re],O=ce[_e],ye=pe[_e];(ye!==O||_e==="value")&&s(G,_e,O,ye,d,S.children,P,w,N)}}W&1&&S.children!==T.children&&u(G,T.children)}else!B&&Y==null&&ne(G,T,ce,pe,P,w,d);((fe=pe.onVnodeUpdated)||he)&&Mt(()=>{fe&&Zt(fe,P,T,S),he&&Qn(T,S,P,"updated")},w)},F=(S,T,P,w,d,_,B)=>{for(let G=0;G<T.length;G++){const W=S[G],Y=T[G],he=W.el&&(W.type===Jt||!ti(W,Y)||W.shapeFlag&(6|64))?h(W.el):P;v(W,Y,he,null,w,d,_,B,!0)}},ne=(S,T,P,w,d,_,B)=>{if(P!==w){for(const G in w){if(rs(G))continue;const W=w[G],Y=P[G];W!==Y&&G!=="value"&&s(S,G,Y,W,B,T.children,d,_,N)}if(P!==qe)for(const G in P)!rs(G)&&!(G in w)&&s(S,G,P[G],null,B,T.children,d,_,N);"value"in w&&s(S,"value",P.value,w.value)}},J=(S,T,P,w,d,_,B,G,W)=>{const Y=T.el=S?S.el:a(""),he=T.anchor=S?S.anchor:a("");let{patchFlag:ce,dynamicChildren:pe,slotScopeIds:fe}=T;fe&&(G=G?G.concat(fe):fe),S==null?(n(Y,P,w),n(he,P,w),Q(T.children,P,he,d,_,B,G,W)):ce>0&&ce&64&&pe&&S.dynamicChildren?(F(S.dynamicChildren,pe,P,d,_,B,G),(T.key!=null||d&&T===d.subTree)&&Vc(S,T,!0)):xe(S,T,P,he,d,_,B,G,W)},$=(S,T,P,w,d,_,B,G,W)=>{T.slotScopeIds=G,S==null?T.shapeFlag&512?d.ctx.activate(T,P,w,B,W):ee(T,P,w,d,_,B,W):K(S,T,W)},ee=(S,T,P,w,d,_,B)=>{const G=S.component=Xp(S,w,d);if(gs(S)&&(G.ctx.renderer=le),Zp(G),G.asyncDep){if(d&&d.registerDep(G,V),!S.el){const W=G.subTree=cn($t);g(null,W,T,P)}return}V(G,S,T,P,d,_,B)},K=(S,T,P)=>{const w=T.component=S.component;if(tp(S,T,P))if(w.asyncDep&&!w.asyncResolved){q(w,T,P);return}else w.next=T,rm(w.update),w.update();else T.component=S.component,T.el=S.el,w.vnode=T},V=(S,T,P,w,d,_,B)=>{const G=()=>{if(S.isMounted){let{next:he,bu:ce,u:pe,parent:fe,vnode:H}=S,me=he,re;W.allowRecurse=!1,he?(he.el=H.el,q(S,he,B)):he=H,ce&&Do(ce),(re=he.props&&he.props.onVnodeBeforeUpdate)&&Zt(re,fe,he,H),W.allowRecurse=!0;const _e=Yo(S),O=S.subTree;S.subTree=_e,v(O,_e,h(O.el),ie(O),S,d,_),he.el=_e.el,me===null&&np(S,_e.el),pe&&Mt(pe,d),(re=he.props&&he.props.onVnodeUpdated)&&Mt(()=>Zt(re,fe,he,H),d)}else{let he;const{el:ce,props:pe}=T,{bm:fe,m:H,parent:me}=S,re=Qo(T);if(W.allowRecurse=!1,fe&&Do(fe),!re&&(he=pe&&pe.onVnodeBeforeMount)&&Zt(he,me,T),W.allowRecurse=!0,ce&&j){const _e=()=>{S.subTree=Yo(S),j(ce,S.subTree,S,d,null)};re?T.type.__asyncLoader().then(()=>!S.isUnmounted&&_e()):_e()}else{const _e=S.subTree=Yo(S);v(null,_e,P,w,S,d,_),T.el=_e.el}if(H&&Mt(H,d),!re&&(he=pe&&pe.onVnodeMounted)){const _e=T;Mt(()=>Zt(he,me,_e),d)}T.shapeFlag&256&&S.a&&Mt(S.a,d),S.isMounted=!0,T=P=w=null}},W=new zo(G,()=>tu(S.update),S.scope),Y=S.update=W.run.bind(W);Y.id=S.uid,W.allowRecurse=Y.allowRecurse=!0,Y()},q=(S,T,P)=>{T.component=S;const w=S.vnode.props;S.vnode=T,S.next=null,Tp(S,T.props,w,P),Lp(S,T.children,P),mi(),da(void 0,S.update),$n()},xe=(S,T,P,w,d,_,B,G,W=!1)=>{const Y=S&&S.children,he=S?S.shapeFlag:0,ce=T.children,{patchFlag:pe,shapeFlag:fe}=T;if(pe>0){if(pe&128){ve(Y,ce,P,w,d,_,B,G,W);return}else if(pe&256){be(Y,ce,P,w,d,_,B,G,W);return}}fe&8?(he&16&&N(Y,d,_),ce!==Y&&u(P,ce)):he&16?fe&16?ve(Y,ce,P,w,d,_,B,G,W):N(Y,d,_,!0):(he&8&&u(P,""),fe&16&&Q(ce,P,w,d,_,B,G,W))},be=(S,T,P,w,d,_,B,G,W)=>{S=S||fi,T=T||fi;const Y=S.length,he=T.length,ce=Math.min(Y,he);let pe;for(pe=0;pe<ce;pe++){const fe=T[pe]=W?wn(T[pe]):Kt(T[pe]);v(S[pe],fe,P,null,d,_,B,G,W)}Y>he?N(S,d,_,!0,!1,ce):Q(T,P,w,d,_,B,G,W,ce)},ve=(S,T,P,w,d,_,B,G,W)=>{let Y=0;const he=T.length;let ce=S.length-1,pe=he-1;for(;Y<=ce&&Y<=pe;){const fe=S[Y],H=T[Y]=W?wn(T[Y]):Kt(T[Y]);if(ti(fe,H))v(fe,H,P,null,d,_,B,G,W);else break;Y++}for(;Y<=ce&&Y<=pe;){const fe=S[ce],H=T[pe]=W?wn(T[pe]):Kt(T[pe]);if(ti(fe,H))v(fe,H,P,null,d,_,B,G,W);else break;ce--,pe--}if(Y>ce){if(Y<=pe){const fe=pe+1,H=fe<he?T[fe].el:w;for(;Y<=pe;)v(null,T[Y]=W?wn(T[Y]):Kt(T[Y]),P,H,d,_,B,G,W),Y++}}else if(Y>pe)for(;Y<=ce;)C(S[Y],d,_,!0),Y++;else{const fe=Y,H=Y,me=new Map;for(Y=H;Y<=pe;Y++){const Le=T[Y]=W?wn(T[Y]):Kt(T[Y]);Le.key!=null&&me.set(Le.key,Y)}let re,_e=0;const O=pe-H+1;let ye=!1,Re=0;const Ce=new Array(O);for(Y=0;Y<O;Y++)Ce[Y]=0;for(Y=fe;Y<=ce;Y++){const Le=S[Y];if(_e>=O){C(Le,d,_,!0);continue}let Ye;if(Le.key!=null)Ye=me.get(Le.key);else for(re=H;re<=pe;re++)if(Ce[re-H]===0&&ti(Le,T[re])){Ye=re;break}Ye===void 0?C(Le,d,_,!0):(Ce[Ye-H]=Y+1,Ye>=Re?Re=Ye:ye=!0,v(Le,T[Ye],P,null,d,_,B,G,W),_e++)}const $e=ye?Dp(Ce):fi;for(re=$e.length-1,Y=O-1;Y>=0;Y--){const Le=H+Y,Ye=T[Le],ht=Le+1<he?T[Le+1].el:w;Ce[Y]===0?v(null,Ye,P,ht,d,_,B,G,W):ye&&(re<0||Y!==$e[re]?X(Ye,P,ht,2):re--)}}},X=(S,T,P,w,d=null)=>{const{el:_,type:B,transition:G,children:W,shapeFlag:Y}=S;if(Y&6){X(S.component.subTree,T,P,w);return}if(Y&128){S.suspense.move(T,P,w);return}if(Y&64){B.move(S,T,P,le);return}if(B===Jt){n(_,T,P);for(let ce=0;ce<W.length;ce++)X(W[ce],T,P,w);n(S.anchor,T,P);return}if(B===oa){b(S,T,P);return}if(w!==2&&Y&1&&G)if(w===0)G.beforeEnter(_),n(_,T,P),Mt(()=>G.enter(_),d);else{const{leave:ce,delayLeave:pe,afterLeave:fe}=G,H=()=>n(_,T,P),me=()=>{ce(_,()=>{H(),fe&&fe()})};pe?pe(_,H,me):me()}else n(_,T,P)},C=(S,T,P,w=!1,d=!1)=>{const{type:_,props:B,ref:G,children:W,dynamicChildren:Y,shapeFlag:he,patchFlag:ce,dirs:pe}=S;if(G!=null&&ra(G,null,P,S,!0),he&256){T.ctx.deactivate(S);return}const fe=he&1&&pe,H=!Qo(S);let me;if(H&&(me=B&&B.onVnodeBeforeUnmount)&&Zt(me,T,S),he&6)U(S.component,P,w);else{if(he&128){S.suspense.unmount(P,w);return}fe&&Qn(S,null,T,"beforeUnmount"),he&64?S.type.remove(S,T,P,d,le,w):Y&&(_!==Jt||ce>0&&ce&64)?N(Y,T,P,!1,!0):(_===Jt&&ce&(128|256)||!d&&he&16)&&N(W,T,P),w&&L(S)}(H&&(me=B&&B.onVnodeUnmounted)||fe)&&Mt(()=>{me&&Zt(me,T,S),fe&&Qn(S,null,T,"unmounted")},P)},L=S=>{const{type:T,el:P,anchor:w,transition:d}=S;if(T===Jt){k(P,w);return}if(T===oa){E(S);return}const _=()=>{r(P),d&&!d.persisted&&d.afterLeave&&d.afterLeave()};if(S.shapeFlag&1&&d&&!d.persisted){const{leave:B,delayLeave:G}=d,W=()=>B(P,_);G?G(S.el,_,W):W()}else _()},k=(S,T)=>{let P;for(;S!==T;)P=f(S),r(S),S=P;r(T)},U=(S,T,P)=>{const{bum:w,scope:d,update:_,subTree:B,um:G}=S;w&&Do(w),d.stop(),_&&(_.active=!1,C(B,S,T,P)),G&&Mt(G,T),Mt(()=>{S.isUnmounted=!0},T),T&&T.pendingBranch&&!T.isUnmounted&&S.asyncDep&&!S.asyncResolved&&S.suspenseId===T.pendingId&&(T.deps--,T.deps===0&&T.resolve())},N=(S,T,P,w=!1,d=!1,_=0)=>{for(let B=_;B<S.length;B++)C(S[B],T,P,w,d)},ie=S=>S.shapeFlag&6?ie(S.component.subTree):S.shapeFlag&128?S.suspense.next():f(S.anchor||S.el),ue=(S,T,P)=>{S==null?T._vnode&&C(T._vnode,null,null,!0):v(T._vnode||null,S,T,null,null,null,P),ru(),T._vnode=S},le={p:v,um:C,m:X,r:L,mt:ee,mc:Q,pc:xe,pbc:F,n:ie,o:i};let ge,j;return e&&([ge,j]=e(le)),{render:ue,hydrate:ge,createApp:Rp(ue,ge)}}function ra(i,e,t,n,r=!1){if(Ie(i)){i.forEach((f,m)=>ra(f,e&&(Ie(e)?e[m]:e),t,n,r));return}if(Qo(n)&&!r)return;const s=n.shapeFlag&4?ca(n.component)||n.component.proxy:n.el,o=r?null:s,{i:a,r:l}=i,c=e&&e.r,u=a.refs===qe?a.refs={}:a.refs,h=a.setupState;if(c!=null&&c!==l&&(st(c)?(u[c]=null,Oe(h,c)&&(h[c]=null)):Tt(c)&&(c.value=null)),st(l)){const f=()=>{u[l]=o,Oe(h,l)&&(h[l]=o)};o?(f.id=-1,Mt(f,t)):f()}else if(Tt(l)){const f=()=>{l.value=o};o?(f.id=-1,Mt(f,t)):f()}else De(l)&&Sn(l,a,12,[o,u])}function Zt(i,e,t,n=null){Bt(i,e,7,[t,n])}function Vc(i,e,t=!1){const n=i.children,r=e.children;if(Ie(n)&&Ie(r))for(let s=0;s<n.length;s++){const o=n[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=wn(r[s]),a.el=o.el),t||Vc(o,a))}}function Dp(i){const e=i.slice(),t=[0];let n,r,s,o,a;const l=i.length;for(n=0;n<l;n++){const c=i[n];if(c!==0){if(r=t[t.length-1],i[r]<c){e[n]=r,t.push(n);continue}for(s=0,o=t.length-1;s<o;)a=s+o>>1,i[t[a]]<c?s=a+1:o=a;c<i[t[s]]&&(s>0&&(e[n]=t[s-1]),t[s]=n)}}for(s=t.length,o=t[s-1];s-- >0;)t[s]=o,o=e[o];return t}const Np=i=>i.__isTeleport,Gc="components",Wc=Symbol();function PM(i){return st(i)?Fp(Gc,i,!1)||i:i||Wc}function Fp(i,e,t=!0,n=!1){const r=Gt||lt;if(r){const s=r.type;if(i===Gc){const a=Qp(s);if(a&&(a===e||a===Yt(e)||a===os(Yt(e))))return s}const o=qc(r[i]||s[i],e)||qc(r.appContext[i],e);return!o&&n?s:o}}function qc(i,e){return i&&(i[e]||i[Yt(e)]||i[os(Yt(e))])}const Jt=Symbol(void 0),sa=Symbol(void 0),$t=Symbol(void 0),oa=Symbol(void 0),yr=[];let ei=null;function Bp(i=!1){yr.push(ei=i?null:[])}function Op(){yr.pop(),ei=yr[yr.length-1]||null}let _s=1;function jc(i){_s+=i}function Xc(i){return i.dynamicChildren=_s>0?ei||fi:null,Op(),_s>0&&ei&&ei.push(i),i}function IM(i,e,t,n,r,s){return Xc(Zc(i,e,t,n,r,s,!0))}function zp(i,e,t,n,r){return Xc(cn(i,e,t,n,r,!0))}function Up(i){return i?i.__v_isVNode===!0:!1}function ti(i,e){return i.type===e.type&&i.key===e.key}const vs="__vInternal",Yc=({key:i})=>i!=null?i:null,bs=({ref:i})=>i!=null?st(i)||Tt(i)||De(i)?{i:Gt,r:i}:i:null;function Zc(i,e=null,t=null,n=0,r=null,s=i===Jt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:i,props:e,key:e&&Yc(e),ref:e&&bs(e),scopeId:_c,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:n,dynamicProps:r,dynamicChildren:null,appContext:null};return a?(aa(l,t),s&128&&i.normalize(l)):t&&(l.shapeFlag|=st(t)?8:16),_s>0&&!o&&ei&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&ei.push(l),l}const cn=Hp;function Hp(i,e=null,t=null,n=0,r=null,s=!1){if((!i||i===Wc)&&(i=$t),Up(i)){const a=xi(i,e,!0);return t&&aa(a,t),a}if(em(i)&&(i=i.__vccOpts),e){e=kp(e);let{class:a,style:l}=e;a&&!st(a)&&(e.class=ts(a)),mt(l)&&(dc(l)&&!Ie(l)&&(l=pt({},l)),e.style=es(l))}const o=st(i)?1:ip(i)?128:Np(i)?64:mt(i)?4:De(i)?2:0;return Zc(i,e,t,n,r,o,s,!0)}function kp(i){return i?dc(i)||vs in i?pt({},i):i:null}function xi(i,e,t=!1){const{props:n,ref:r,patchFlag:s,children:o}=i,a=e?Gp(n||{},e):n;return{__v_isVNode:!0,__v_skip:!0,type:i.type,props:a,key:a&&Yc(a),ref:e&&e.ref?t&&r?Ie(r)?r.concat(bs(e)):[r,bs(e)]:bs(e):r,scopeId:i.scopeId,slotScopeIds:i.slotScopeIds,children:o,target:i.target,targetAnchor:i.targetAnchor,staticCount:i.staticCount,shapeFlag:i.shapeFlag,patchFlag:e&&i.type!==Jt?s===-1?16:s|16:s,dynamicProps:i.dynamicProps,dynamicChildren:i.dynamicChildren,appContext:i.appContext,dirs:i.dirs,transition:i.transition,component:i.component,suspense:i.suspense,ssContent:i.ssContent&&xi(i.ssContent),ssFallback:i.ssFallback&&xi(i.ssFallback),el:i.el,anchor:i.anchor}}function Vp(i=" ",e=0){return cn(sa,null,i,e)}function DM(i="",e=!1){return e?(Bp(),zp($t,null,i)):cn($t,null,i)}function Kt(i){return i==null||typeof i=="boolean"?cn($t):Ie(i)?cn(Jt,null,i.slice()):typeof i=="object"?wn(i):cn(sa,null,String(i))}function wn(i){return i.el===null||i.memo?i:xi(i)}function aa(i,e){let t=0;const{shapeFlag:n}=i;if(e==null)e=null;else if(Ie(e))t=16;else if(typeof e=="object")if(n&(1|64)){const r=e.default;r&&(r._c&&(r._d=!1),aa(i,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!(vs in e)?e._ctx=Gt:r===3&&Gt&&(Gt.slots._===1?e._=1:(e._=2,i.patchFlag|=1024))}else De(e)?(e={default:e,_ctx:Gt},t=32):(e=String(e),n&64?(t=16,e=[Vp(e)]):t=8);i.children=e,i.shapeFlag|=t}function Gp(...i){const e={};for(let t=0;t<i.length;t++){const n=i[t];for(const r in n)if(r==="class")e.class!==n.class&&(e.class=ts([e.class,n.class]));else if(r==="style")e.style=es([e.style,n.style]);else if(ns(r)){const s=e[r],o=n[r];s!==o&&!(Ie(s)&&s.includes(o))&&(e[r]=s?[].concat(s,o):o)}else r!==""&&(e[r]=n[r])}return e}function NM(i,e,t,n){let r;const s=t&&t[n];if(Ie(i)||st(i)){r=new Array(i.length);for(let o=0,a=i.length;o<a;o++)r[o]=e(i[o],o,void 0,s&&s[o])}else if(typeof i=="number"){r=new Array(i);for(let o=0;o<i;o++)r[o]=e(o+1,o,void 0,s&&s[o])}else if(mt(i))if(i[Symbol.iterator])r=Array.from(i,(o,a)=>e(o,a,void 0,s&&s[a]));else{const o=Object.keys(i);r=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];r[a]=e(i[c],c,a,s&&s[a])}}else r=[];return t&&(t[n]=r),r}const la=i=>i?Jc(i)?ca(i)||i.proxy:la(i.parent):null,Ms=pt(Object.create(null),{$:i=>i,$el:i=>i.vnode.el,$data:i=>i.data,$props:i=>i.props,$attrs:i=>i.attrs,$slots:i=>i.slots,$refs:i=>i.refs,$parent:i=>la(i.parent),$root:i=>la(i.root),$emit:i=>i.emit,$options:i=>Rc(i),$forceUpdate:i=>()=>tu(i.update),$nextTick:i=>nm.bind(i.proxy),$watch:i=>am.bind(i)}),Wp={get({_:i},e){const{ctx:t,setupState:n,data:r,props:s,accessCache:o,type:a,appContext:l}=i;let c;if(e[0]!=="$"){const m=o[e];if(m!==void 0)switch(m){case 0:return n[e];case 1:return r[e];case 3:return t[e];case 2:return s[e]}else{if(n!==qe&&Oe(n,e))return o[e]=0,n[e];if(r!==qe&&Oe(r,e))return o[e]=1,r[e];if((c=i.propsOptions[0])&&Oe(c,e))return o[e]=2,s[e];if(t!==qe&&Oe(t,e))return o[e]=3,t[e];ea&&(o[e]=4)}}const u=Ms[e];let h,f;if(u)return e==="$attrs"&&Ct(i,"get",e),u(i);if((h=a.__cssModules)&&(h=h[e]))return h;if(t!==qe&&Oe(t,e))return o[e]=3,t[e];if(f=l.config.globalProperties,Oe(f,e))return f[e]},set({_:i},e,t){const{data:n,setupState:r,ctx:s}=i;if(r!==qe&&Oe(r,e))r[e]=t;else if(n!==qe&&Oe(n,e))n[e]=t;else if(Oe(i.props,e))return!1;return e[0]==="$"&&e.slice(1)in i?!1:(s[e]=t,!0)},has({_:{data:i,setupState:e,accessCache:t,ctx:n,appContext:r,propsOptions:s}},o){let a;return t[o]!==void 0||i!==qe&&Oe(i,o)||e!==qe&&Oe(e,o)||(a=s[0])&&Oe(a,o)||Oe(n,o)||Oe(Ms,o)||Oe(r.config.globalProperties,o)}},qp=kc();let jp=0;function Xp(i,e,t){const n=i.type,r=(e?e.appContext:i.appContext)||qp,s={uid:jp++,vnode:i,type:n,parent:e,appContext:r,root:null,next:null,subTree:null,update:null,scope:new gd(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Dc(n,r),emitsOptions:yc(n,r),emit:null,emitted:null,propsDefaults:qe,inheritAttrs:n.inheritAttrs,ctx:qe,data:qe,props:qe,attrs:qe,slots:qe,refs:qe,setupState:qe,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=$d.bind(null,s),i.ce&&i.ce(s),s}let lt=null;const Yp=()=>lt||Gt,yi=i=>{lt=i,i.scope.on()},ni=()=>{lt&&lt.scope.off(),lt=null};function Jc(i){return i.vnode.shapeFlag&4}let ws=!1;function Zp(i,e=!1){ws=e;const{props:t,children:n}=i.vnode,r=Jc(i);Sp(i,t,r,e),Ap(i,n);const s=r?Jp(i,e):void 0;return ws=!1,s}function Jp(i,e){const t=i.type;i.accessCache=Object.create(null),i.proxy=pc(new Proxy(i.ctx,Wp));const{setup:n}=t;if(n){const r=i.setupContext=n.length>1?Kp(i):null;yi(i),mi();const s=Sn(n,i,0,[i.props,r]);if($n(),ni(),Xl(s)){if(s.then(ni,ni),e)return s.then(o=>{$c(i,o,e)}).catch(o=>{Ss(o,i,0)});i.asyncDep=s}else $c(i,s,e)}else Qc(i,e)}function $c(i,e,t){De(e)?i.type.__ssrInlineRender?i.ssrRender=e:i.render=e:mt(e)&&(i.setupState=xc(e)),Qc(i,t)}let Kc;function Qc(i,e,t){const n=i.type;if(!i.render){if(!e&&Kc&&!n.render){const r=n.template;if(r){const{isCustomElement:s,compilerOptions:o}=i.appContext.config,{delimiters:a,compilerOptions:l}=n,c=pt(pt({isCustomElement:s,delimiters:a},o),l);n.render=Kc(r,c)}}i.render=n.render||Vt}yi(i),mi(),_p(i),$n(),ni()}function $p(i){return new Proxy(i.attrs,{get(e,t){return Ct(i,"get","$attrs"),e[t]}})}function Kp(i){const e=n=>{i.exposed=n||{}};let t;return{get attrs(){return t||(t=$p(i))},slots:i.slots,emit:i.emit,expose:e}}function ca(i){if(i.exposed)return i.exposeProxy||(i.exposeProxy=new Proxy(xc(pc(i.exposed)),{get(e,t){if(t in e)return e[t];if(t in Ms)return Ms[t](i)}}))}function Qp(i){return De(i)&&i.displayName||i.name}function em(i){return De(i)&&"__vccOpts"in i}function Sn(i,e,t,n){let r;try{r=n?i(...n):i()}catch(s){Ss(s,e,t)}return r}function Bt(i,e,t,n){if(De(i)){const s=Sn(i,e,t,n);return s&&Xl(s)&&s.catch(o=>{Ss(o,e,t)}),s}const r=[];for(let s=0;s<i.length;s++)r.push(Bt(i[s],e,t,n));return r}function Ss(i,e,t,n=!0){const r=e?e.vnode:null;if(e){let s=e.parent;const o=e.proxy,a=t;for(;s;){const c=s.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](i,o,a)===!1)return}s=s.parent}const l=e.appContext.config.errorHandler;if(l){Sn(l,null,10,[i,o,a]);return}}tm(i,t,r,n)}function tm(i,e,t,n=!0){console.error(i)}let Ts=!1,ua=!1;const Rt=[];let un=0;const _r=[];let vr=null,_i=0;const br=[];let Tn=null,vi=0;const eu=Promise.resolve();let ha=null,fa=null;function nm(i){const e=ha||eu;return i?e.then(this?i.bind(this):i):e}function im(i){let e=un+1,t=Rt.length;for(;e<t;){const n=e+t>>>1;Mr(Rt[n])<i?e=n+1:t=n}return e}function tu(i){(!Rt.length||!Rt.includes(i,Ts&&i.allowRecurse?un+1:un))&&i!==fa&&(i.id==null?Rt.push(i):Rt.splice(im(i.id),0,i),nu())}function nu(){!Ts&&!ua&&(ua=!0,ha=eu.then(su))}function rm(i){const e=Rt.indexOf(i);e>un&&Rt.splice(e,1)}function iu(i,e,t,n){Ie(i)?t.push(...i):(!e||!e.includes(i,i.allowRecurse?n+1:n))&&t.push(i),nu()}function sm(i){iu(i,vr,_r,_i)}function om(i){iu(i,Tn,br,vi)}function da(i,e=null){if(_r.length){for(fa=e,vr=[...new Set(_r)],_r.length=0,_i=0;_i<vr.length;_i++)vr[_i]();vr=null,_i=0,fa=null,da(i,e)}}function ru(i){if(br.length){const e=[...new Set(br)];if(br.length=0,Tn){Tn.push(...e);return}for(Tn=e,Tn.sort((t,n)=>Mr(t)-Mr(n)),vi=0;vi<Tn.length;vi++)Tn[vi]();Tn=null,vi=0}}const Mr=i=>i.id==null?1/0:i.id;function su(i){ua=!1,Ts=!0,da(i),Rt.sort((t,n)=>Mr(t)-Mr(n));const e=Vt;try{for(un=0;un<Rt.length;un++){const t=Rt[un];t&&t.active!==!1&&Sn(t,null,14)}}finally{un=0,Rt.length=0,ru(),Ts=!1,ha=null,(Rt.length||_r.length||br.length)&&su(i)}}const ou={};function pa(i,e,t){return au(i,e,t)}function au(i,e,{immediate:t,deep:n,flush:r,onTrack:s,onTrigger:o}=qe){const a=lt;let l,c=!1,u=!1;if(Tt(i)?(l=()=>i.value,c=!!i._shallow):gi(i)?(l=()=>i,n=!0):Ie(i)?(u=!0,c=i.some(gi),l=()=>i.map(p=>{if(Tt(p))return p.value;if(gi(p))return bi(p);if(De(p))return Sn(p,a,2)})):De(i)?e?l=()=>Sn(i,a,2):l=()=>{if(!(a&&a.isUnmounted))return h&&h(),Bt(i,a,3,[f])}:l=Vt,e&&n){const p=l;l=()=>bi(p())}let h,f=p=>{h=v.onStop=()=>{Sn(p,a,4)}};if(ws)return f=Vt,e?t&&Bt(e,a,3,[l(),u?[]:void 0,f]):l(),Vt;let m=u?[]:ou;const x=()=>{if(!!v.active)if(e){const p=v.run();(n||c||(u?p.some((g,A)=>pr(g,m[A])):pr(p,m)))&&(h&&h(),Bt(e,a,3,[p,m===ou?void 0:m,f]),m=p)}else v.run()};x.allowRecurse=!!e;let y;r==="sync"?y=x:r==="post"?y=()=>Mt(x,a&&a.suspense):y=()=>{!a||a.isMounted?sm(x):x()};const v=new zo(l,y);return e?t?x():m=v.run():r==="post"?Mt(v.run.bind(v),a&&a.suspense):v.run(),()=>{v.stop(),a&&a.scope&&jl(a.scope.effects,v)}}function am(i,e,t){const n=this.proxy,r=st(i)?i.includes(".")?lu(n,i):()=>n[i]:i.bind(n,n);let s;De(e)?s=e:(s=e.handler,t=e);const o=lt;yi(this);const a=au(r,s.bind(n),t);return o?yi(o):ni(),a}function lu(i,e){const t=e.split(".");return()=>{let n=i;for(let r=0;r<t.length&&n;r++)n=n[t[r]];return n}}function bi(i,e){if(!mt(i)||i.__v_skip||(e=e||new Set,e.has(i)))return i;if(e.add(i),Tt(i))bi(i.value,e);else if(Ie(i))for(let t=0;t<i.length;t++)bi(i[t],e);else if(ld(i)||dr(i))i.forEach(t=>{bi(t,e)});else if(hd(i))for(const t in i)bi(i[t],e);return i}const lm="3.2.22",cm="http://www.w3.org/2000/svg",Mi=typeof document!="undefined"?document:null,cu=new Map,um={insert:(i,e,t)=>{e.insertBefore(i,t||null)},remove:i=>{const e=i.parentNode;e&&e.removeChild(i)},createElement:(i,e,t,n)=>{const r=e?Mi.createElementNS(cm,i):Mi.createElement(i,t?{is:t}:void 0);return i==="select"&&n&&n.multiple!=null&&r.setAttribute("multiple",n.multiple),r},createText:i=>Mi.createTextNode(i),createComment:i=>Mi.createComment(i),setText:(i,e)=>{i.nodeValue=e},setElementText:(i,e)=>{i.textContent=e},parentNode:i=>i.parentNode,nextSibling:i=>i.nextSibling,querySelector:i=>Mi.querySelector(i),setScopeId(i,e){i.setAttribute(e,"")},cloneNode(i){const e=i.cloneNode(!0);return"_value"in i&&(e._value=i._value),e},insertStaticContent(i,e,t,n){const r=t?t.previousSibling:e.lastChild;let s=cu.get(i);if(!s){const o=Mi.createElement("template");if(o.innerHTML=n?`<svg>${i}</svg>`:i,s=o.content,n){const a=s.firstChild;for(;a.firstChild;)s.appendChild(a.firstChild);s.removeChild(a)}cu.set(i,s)}return e.insertBefore(s.cloneNode(!0),t),[r?r.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}};function hm(i,e,t){const n=i._vtc;n&&(e=(e?[e,...n]:[...n]).join(" ")),e==null?i.removeAttribute("class"):t?i.setAttribute("class",e):i.className=e}function fm(i,e,t){const n=i.style,r=st(t);if(t&&!r){for(const s in t)ma(n,s,t[s]);if(e&&!st(e))for(const s in e)t[s]==null&&ma(n,s,"")}else{const s=n.display;r?e!==t&&(n.cssText=t):e&&i.removeAttribute("style"),"_vod"in i&&(n.display=s)}}const uu=/\s*!important$/;function ma(i,e,t){if(Ie(t))t.forEach(n=>ma(i,e,n));else if(e.startsWith("--"))i.setProperty(e,t);else{const n=dm(i,e);uu.test(t)?i.setProperty(di(n),t.replace(uu,""),"important"):i[n]=t}}const hu=["Webkit","Moz","ms"],ga={};function dm(i,e){const t=ga[e];if(t)return t;let n=Yt(e);if(n!=="filter"&&n in i)return ga[e]=n;n=os(n);for(let r=0;r<hu.length;r++){const s=hu[r]+n;if(s in i)return ga[e]=s}return e}const fu="http://www.w3.org/1999/xlink";function pm(i,e,t,n,r){if(n&&e.startsWith("xlink:"))t==null?i.removeAttributeNS(fu,e.slice(6,e.length)):i.setAttributeNS(fu,e,t);else{const s=td(e);t==null||s&&!ql(t)?i.removeAttribute(e):i.setAttribute(e,s?"":t)}}function mm(i,e,t,n,r,s,o){if(e==="innerHTML"||e==="textContent"){n&&o(n,r,s),i[e]=t==null?"":t;return}if(e==="value"&&i.tagName!=="PROGRESS"){i._value=t;const a=t==null?"":t;i.value!==a&&(i.value=a),t==null&&i.removeAttribute(e);return}if(t===""||t==null){const a=typeof i[e];if(a==="boolean"){i[e]=ql(t);return}else if(t==null&&a==="string"){i[e]="",i.removeAttribute(e);return}else if(a==="number"){try{i[e]=0}catch{}i.removeAttribute(e);return}}try{i[e]=t}catch{}}let Es=Date.now,du=!1;if(typeof window!="undefined"){Es()>document.createEvent("Event").timeStamp&&(Es=()=>performance.now());const i=navigator.userAgent.match(/firefox\/(\d+)/i);du=!!(i&&Number(i[1])<=53)}let xa=0;const gm=Promise.resolve(),xm=()=>{xa=0},ym=()=>xa||(gm.then(xm),xa=Es());function _m(i,e,t,n){i.addEventListener(e,t,n)}function vm(i,e,t,n){i.removeEventListener(e,t,n)}function bm(i,e,t,n,r=null){const s=i._vei||(i._vei={}),o=s[e];if(n&&o)o.value=n;else{const[a,l]=Mm(e);if(n){const c=s[e]=wm(n,r);_m(i,a,c,l)}else o&&(vm(i,a,o,l),s[e]=void 0)}}const pu=/(?:Once|Passive|Capture)$/;function Mm(i){let e;if(pu.test(i)){e={};let t;for(;t=i.match(pu);)i=i.slice(0,i.length-t[0].length),e[t[0].toLowerCase()]=!0}return[di(i.slice(2)),e]}function wm(i,e){const t=n=>{const r=n.timeStamp||Es();(du||r>=t.attached-1)&&Bt(Sm(n,t.value),e,5,[n])};return t.value=i,t.attached=ym(),t}function Sm(i,e){if(Ie(e)){const t=i.stopImmediatePropagation;return i.stopImmediatePropagation=()=>{t.call(i),i._stopped=!0},e.map(n=>r=>!r._stopped&&n(r))}else return e}const mu=/^on[a-z]/,Tm=(i,e,t,n,r=!1,s,o,a,l)=>{e==="class"?hm(i,n,r):e==="style"?fm(i,t,n):ns(e)?Co(e)||bm(i,e,t,n,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Em(i,e,n,r))?mm(i,e,n,s,o,a,l):(e==="true-value"?i._trueValue=n:e==="false-value"&&(i._falseValue=n),pm(i,e,n,r))};function Em(i,e,t,n){return n?!!(e==="innerHTML"||e==="textContent"||e in i&&mu.test(e)&&De(t)):e==="spellcheck"||e==="draggable"||e==="form"||e==="list"&&i.tagName==="INPUT"||e==="type"&&i.tagName==="TEXTAREA"||mu.test(e)&&st(t)?!1:e in i}const Am={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};lp.props;const Lm=["ctrl","shift","alt","meta"],Cm={stop:i=>i.stopPropagation(),prevent:i=>i.preventDefault(),self:i=>i.target!==i.currentTarget,ctrl:i=>!i.ctrlKey,shift:i=>!i.shiftKey,alt:i=>!i.altKey,meta:i=>!i.metaKey,left:i=>"button"in i&&i.button!==0,middle:i=>"button"in i&&i.button!==1,right:i=>"button"in i&&i.button!==2,exact:(i,e)=>Lm.some(t=>i[`${t}Key`]&&!e.includes(t))},FM=(i,e)=>(t,...n)=>{for(let r=0;r<e.length;r++){const s=Cm[e[r]];if(s&&s(t,e))return}return i(t,...n)},Rm=pt({patchProp:Tm},um);let gu;function Pm(){return gu||(gu=Pp(Rm))}const BM=(...i)=>{const e=Pm().createApp(...i),{mount:t}=e;return e.mount=n=>{const r=Im(n);if(!r)return;const s=e._component;!De(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.innerHTML="";const o=t(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function Im(i){return st(i)?document.querySelector(i):i}/**
 * @license
 * Copyright 2010-2021 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const xu="134",wi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Si={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Dm=0,yu=1,Nm=2,_u=1,Fm=2,wr=3,Sr=0,ot=1,Ti=2,vu=1,En=0,Tr=1,bu=2,Mu=3,wu=4,Bm=5,Ei=100,Om=101,zm=102,Su=103,Tu=104,Um=200,Hm=201,km=202,Vm=203,Eu=204,Au=205,Gm=206,Wm=207,qm=208,jm=209,Xm=210,Ym=0,Zm=1,Jm=2,ya=3,$m=4,Km=5,Qm=6,eg=7,As=0,tg=1,ng=2,ii=0,ig=1,rg=2,sg=3,og=4,ag=5,Lu=300,Er=301,Ar=302,_a=303,va=304,Ls=306,ba=307,Ma=1e3,Pt=1001,wa=1002,ct=1003,Cu=1004,Ru=1005,Ot=1006,lg=1007,Cs=1008,An=1009,cg=1010,ug=1011,Rs=1012,hg=1013,Ps=1014,Ln=1015,Ai=1016,fg=1017,dg=1018,pg=1019,Lr=1020,mg=1021,Li=1022,wt=1023,gg=1024,xg=1025,yg=wt,Ci=1026,Cr=1027,_g=1028,vg=1029,bg=1030,Mg=1031,wg=1032,Sg=1033,Pu=33776,Iu=33777,Du=33778,Nu=33779,Fu=35840,Bu=35841,Ou=35842,zu=35843,Tg=36196,Uu=37492,Hu=37496,Eg=37808,Ag=37809,Lg=37810,Cg=37811,Rg=37812,Pg=37813,Ig=37814,Dg=37815,Ng=37816,Fg=37817,Bg=37818,Og=37819,zg=37820,Ug=37821,Hg=36492,kg=37840,Vg=37841,Gg=37842,Wg=37843,qg=37844,jg=37845,Xg=37846,Yg=37847,Zg=37848,Jg=37849,$g=37850,Kg=37851,Qg=37852,ex=37853,tx=2200,nx=2201,ix=2202,Is=2300,Ds=2301,Sa=2302,Ri=2400,Pi=2401,Ns=2402,Ta=2500,ku=2501,rx=0,gt=3e3,ri=3001,Ea=3007,Aa=3002,sx=3003,Vu=3004,Gu=3005,Wu=3006,ox=3200,ax=3201,Ii=0,lx=1,La=7680,cx=519,Rr=35044,Fs=35048,qu="300 es";class Cn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Bs=Math.PI/180,Ca=180/Math.PI,ft=[];for(let i=0;i<256;i++)ft[i]=(i<16?"0":"")+i.toString(16);const ux=typeof crypto!="undefined"&&"randomUUID"in crypto;function Qt(){if(ux)return crypto.randomUUID().toUpperCase();const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ft[i&255]+ft[i>>8&255]+ft[i>>16&255]+ft[i>>24&255]+"-"+ft[e&255]+ft[e>>8&255]+"-"+ft[e>>16&15|64]+ft[e>>24&255]+"-"+ft[t&63|128]+ft[t>>8&255]+"-"+ft[t>>16&255]+ft[t>>24&255]+ft[n&255]+ft[n>>8&255]+ft[n>>16&255]+ft[n>>24&255]).toUpperCase()}function Et(i,e,t){return Math.max(e,Math.min(t,i))}function hx(i,e){return(i%e+e)%e}function Ra(i,e,t){return(1-t)*i+t*e}function ju(i){return(i&i-1)==0&&i!==0}function fx(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}class oe{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this)}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this)}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*r+e.x,this.y=s*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}oe.prototype.isVector2=!0;class Ke{constructor(){this.elements=[1,0,0,0,1,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")}set(e,t,n,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],m=n[5],x=n[8],y=r[0],v=r[3],p=r[6],g=r[1],A=r[4],b=r[7],E=r[2],I=r[5],M=r[8];return s[0]=o*y+a*g+l*E,s[3]=o*v+a*A+l*I,s[6]=o*p+a*b+l*M,s[1]=c*y+u*g+h*E,s[4]=c*v+u*A+h*I,s[7]=c*p+u*b+h*M,s[2]=f*y+m*g+x*E,s[5]=f*v+m*A+x*I,s[8]=f*p+m*b+x*M,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*s*u+n*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,f=a*l-u*s,m=c*s-o*l,x=t*h+n*f+r*m;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/x;return e[0]=h*y,e[1]=(r*c-u*n)*y,e[2]=(a*n-r*o)*y,e[3]=f*y,e[4]=(u*t-r*l)*y,e[5]=(r*s-a*t)*y,e[6]=m*y,e[7]=(n*l-c*t)*y,e[8]=(o*t-n*s)*y,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=t,n[4]*=t,n[7]*=t,this}rotate(e){const t=Math.cos(e),n=Math.sin(e),r=this.elements,s=r[0],o=r[3],a=r[6],l=r[1],c=r[4],u=r[7];return r[0]=t*s+n*l,r[3]=t*o+n*c,r[6]=t*a+n*u,r[1]=-n*s+t*l,r[4]=-n*o+t*c,r[7]=-n*a+t*u,this}translate(e,t){const n=this.elements;return n[0]+=e*n[2],n[3]+=e*n[5],n[6]+=e*n[8],n[1]+=t*n[2],n[4]+=t*n[5],n[7]+=t*n[8],this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}Ke.prototype.isMatrix3=!0;function Xu(i){if(i.length===0)return-1/0;let e=i[0];for(let t=1,n=i.length;t<n;++t)i[t]>e&&(e=i[t]);return e}function Os(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Yu(i,e=0){let t=3735928559^e,n=1103547991^e;for(let r=0,s;r<i.length;r++)s=i.charCodeAt(r),t=Math.imul(t^s,2654435761),n=Math.imul(n^s,1597334677);return t=Math.imul(t^t>>>16,2246822507)^Math.imul(n^n>>>13,3266489909),n=Math.imul(n^n>>>16,2246822507)^Math.imul(t^t>>>13,3266489909),4294967296*(2097151&n)+(t>>>0)}let Di;class Ni{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Di===void 0&&(Di=Os("canvas")),Di.width=e.width,Di.height=e.height;const n=Di.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Di}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}}let dx=0;class dt extends Cn{constructor(e=dt.DEFAULT_IMAGE,t=dt.DEFAULT_MAPPING,n=Pt,r=Pt,s=Ot,o=Cs,a=wt,l=An,c=1,u=gt){super();Object.defineProperty(this,"id",{value:dx++}),this.uuid=Qt(),this.name="",this.image=e,this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new oe(0,0),this.repeat=new oe(1,1),this.center=new oe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.image=e.image,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(this.image!==void 0){const r=this.image;if(r.uuid===void 0&&(r.uuid=Qt()),!t&&e.images[r.uuid]===void 0){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Pa(r[o].image)):s.push(Pa(r[o]))}else s=Pa(r);e.images[r.uuid]={uuid:r.uuid,url:s}}n.image=r.uuid}return JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Lu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ma:e.x=e.x-Math.floor(e.x);break;case Pt:e.x=e.x<0?0:1;break;case wa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ma:e.y=e.y-Math.floor(e.y);break;case Pt:e.y=e.y<0?0:1;break;case wa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&this.version++}}dt.DEFAULT_IMAGE=void 0;dt.DEFAULT_MAPPING=Lu;dt.prototype.isTexture=!0;function Pa(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?Ni.getDataURL(i):i.data?{data:Array.prototype.slice.call(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}class We{constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const o=.01,a=.1,l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],m=l[5],x=l[9],y=l[2],v=l[6],p=l[10];if(Math.abs(u-f)<o&&Math.abs(h-y)<o&&Math.abs(x-v)<o){if(Math.abs(u+f)<a&&Math.abs(h+y)<a&&Math.abs(x+v)<a&&Math.abs(c+m+p-3)<a)return this.set(1,0,0,0),this;t=Math.PI;const A=(c+1)/2,b=(m+1)/2,E=(p+1)/2,I=(u+f)/4,M=(h+y)/4,z=(x+v)/4;return A>b&&A>E?A<o?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(A),r=I/n,s=M/n):b>E?b<o?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(b),n=I/r,s=z/r):E<o?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(E),n=M/s,r=z/s),this.set(n,r,s,t),this}let g=Math.sqrt((v-x)*(v-x)+(h-y)*(h-y)+(f-u)*(f-u));return Math.abs(g)<.001&&(g=1),this.x=(v-x)/g,this.y=(h-y)/g,this.z=(f-u)/g,this.w=Math.acos((c+m+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}We.prototype.isVector4=!0;class en extends Cn{constructor(e,t,n={}){super();this.width=e,this.height=t,this.depth=1,this.scissor=new We(0,0,e,t),this.scissorTest=!1,this.viewport=new We(0,0,e,t),this.texture=new dt(void 0,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.image={width:e,height:t,depth:1},this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Ot,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null}setTexture(e){e.image={width:this.width,height:this.height,depth:this.depth},this.texture=e}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.image=Wl({},this.texture.image),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.depthTexture=e.depthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}en.prototype.isWebGLRenderTarget=!0;class px extends en{constructor(e,t,n){super(e,t);const r=this.texture;this.texture=[];for(let s=0;s<n;s++)this.texture[s]=r.clone()}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.texture.length;r<s;r++)this.texture[r].image.width=e,this.texture[r].image.height=t,this.texture[r].image.depth=n;this.dispose()}return this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t),this}copy(e){this.dispose(),this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.set(0,0,this.width,this.height),this.scissor.set(0,0,this.width,this.height),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.depthTexture=e.depthTexture,this.texture.length=0;for(let t=0,n=e.texture.length;t<n;t++)this.texture[t]=e.texture[t].clone();return this}}px.prototype.isWebGLMultipleRenderTargets=!0;class Zu extends en{constructor(e,t,n){super(e,t,n);this.samples=4}copy(e){return super.copy.call(this,e),this.samples=e.samples,this}}Zu.prototype.isWebGLMultisampleRenderTarget=!0;class xt{constructor(e=0,t=0,n=0,r=1){this._x=e,this._y=t,this._z=n,this._w=r}static slerp(e,t,n,r){return console.warn("THREE.Quaternion: Static .slerp() has been deprecated. Use qm.slerpQuaternions( qa, qb, t ) instead."),n.slerpQuaternions(e,t,r)}static slerpFlat(e,t,n,r,s,o,a){let l=n[r+0],c=n[r+1],u=n[r+2],h=n[r+3];const f=s[o+0],m=s[o+1],x=s[o+2],y=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=f,e[t+1]=m,e[t+2]=x,e[t+3]=y;return}if(h!==y||l!==f||c!==m||u!==x){let v=1-a;const p=l*f+c*m+u*x+h*y,g=p>=0?1:-1,A=1-p*p;if(A>Number.EPSILON){const E=Math.sqrt(A),I=Math.atan2(E,p*g);v=Math.sin(v*I)/E,a=Math.sin(a*I)/E}const b=a*g;if(l=l*v+f*b,c=c*v+m*b,u=u*v+x*b,h=h*v+y*b,v===1-a){const E=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=E,c*=E,u*=E,h*=E}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,r,s,o){const a=n[r],l=n[r+1],c=n[r+2],u=n[r+3],h=s[o],f=s[o+1],m=s[o+2],x=s[o+3];return e[t]=a*x+u*h+l*m-c*f,e[t+1]=l*x+u*f+c*h-a*m,e[t+2]=c*x+u*m+a*f-l*h,e[t+3]=u*x-a*h-l*f-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){if(!(e&&e.isEuler))throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");const n=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(r/2),h=a(s/2),f=l(n/2),m=l(r/2),x=l(s/2);switch(o){case"XYZ":this._x=f*u*h+c*m*x,this._y=c*m*h-f*u*x,this._z=c*u*x+f*m*h,this._w=c*u*h-f*m*x;break;case"YXZ":this._x=f*u*h+c*m*x,this._y=c*m*h-f*u*x,this._z=c*u*x-f*m*h,this._w=c*u*h+f*m*x;break;case"ZXY":this._x=f*u*h-c*m*x,this._y=c*m*h+f*u*x,this._z=c*u*x+f*m*h,this._w=c*u*h-f*m*x;break;case"ZYX":this._x=f*u*h-c*m*x,this._y=c*m*h+f*u*x,this._z=c*u*x-f*m*h,this._w=c*u*h+f*m*x;break;case"YZX":this._x=f*u*h+c*m*x,this._y=c*m*h+f*u*x,this._z=c*u*x-f*m*h,this._w=c*u*h-f*m*x;break;case"XZY":this._x=f*u*h-c*m*x,this._y=c*m*h-f*u*x,this._z=c*u*x+f*m*h,this._w=c*u*h+f*m*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=n+a+h;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(u-l)*m,this._y=(s-c)*m,this._z=(o-r)*m}else if(n>a&&n>h){const m=2*Math.sqrt(1+n-a-h);this._w=(u-l)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+c)/m}else if(a>h){const m=2*Math.sqrt(1+a-n-h);this._w=(s-c)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+h-n-a);this._w=(o-r)/m,this._x=(s+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Et(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e,t){return t!==void 0?(console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiplyQuaternions(e,t)):this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-r*a,this._w=o*u-n*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*n+t*this._x,this._y=m*r+t*this._y,this._z=m*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=o*h+this._w*f,this._x=n*h+this._x*f,this._y=r*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),n*Math.sin(s),n*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}}xt.prototype.isQuaternion=!0;class D{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),this.multiplyVectors(e,t)):(this.x*=e.x,this.y*=e.y,this.z*=e.z,this)}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return e&&e.isEuler||console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."),this.applyQuaternion(Ju.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ju.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=l*t+o*r-a*n,u=l*n+a*t-s*r,h=l*r+s*n-o*t,f=-s*t-o*n-a*r;return this.x=c*l+f*-s+u*-a-h*-o,this.y=u*l+f*-o+h*-s-c*-a,this.z=h*l+f*-a+c*-o-u*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e,t){return t!==void 0?(console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(e,t)):this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-n*l,this.z=n*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ia.copy(this).projectOnVector(e),this.sub(Ia)}reflect(e){return this.sub(Ia.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Et(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}D.prototype.isVector3=!0;const Ia=new D,Ju=new xt;class Wt{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,r=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.length;l<c;l+=3){const u=e[l],h=e[l+1],f=e[l+2];u<t&&(t=u),h<n&&(n=h),f<r&&(r=f),u>s&&(s=u),h>o&&(o=h),f>a&&(a=f)}return this.min.set(t,n,r),this.max.set(s,o,a),this}setFromBufferAttribute(e){let t=1/0,n=1/0,r=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.count;l<c;l++){const u=e.getX(l),h=e.getY(l),f=e.getZ(l);u<t&&(t=u),h<n&&(n=h),f<r&&(r=f),u>s&&(s=u),h>o&&(o=h),f>a&&(a=f)}return this.min.set(t,n,r),this.max.set(s,o,a),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Pr.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e){return this.makeEmpty(),this.expandByObject(e)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e){e.updateWorldMatrix(!1,!1);const t=e.geometry;t!==void 0&&(t.boundingBox===null&&t.computeBoundingBox(),Da.copy(t.boundingBox),Da.applyMatrix4(e.matrixWorld),this.union(Da));const n=e.children;for(let r=0,s=n.length;r<s;r++)this.expandByObject(n[r]);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Pr),Pr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ir),zs.subVectors(this.max,Ir),Fi.subVectors(e.a,Ir),Bi.subVectors(e.b,Ir),Oi.subVectors(e.c,Ir),Rn.subVectors(Bi,Fi),Pn.subVectors(Oi,Bi),si.subVectors(Fi,Oi);let t=[0,-Rn.z,Rn.y,0,-Pn.z,Pn.y,0,-si.z,si.y,Rn.z,0,-Rn.x,Pn.z,0,-Pn.x,si.z,0,-si.x,-Rn.y,Rn.x,0,-Pn.y,Pn.x,0,-si.y,si.x,0];return!Na(t,Fi,Bi,Oi,zs)||(t=[1,0,0,0,1,0,0,0,1],!Na(t,Fi,Bi,Oi,zs))?!1:(Us.crossVectors(Rn,Pn),t=[Us.x,Us.y,Us.z],Na(t,Fi,Bi,Oi,zs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return Pr.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(Pr).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(hn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),hn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),hn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),hn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),hn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),hn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),hn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),hn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(hn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}Wt.prototype.isBox3=!0;const hn=[new D,new D,new D,new D,new D,new D,new D,new D],Pr=new D,Da=new Wt,Fi=new D,Bi=new D,Oi=new D,Rn=new D,Pn=new D,si=new D,Ir=new D,zs=new D,Us=new D,oi=new D;function Na(i,e,t,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){oi.fromArray(i,s);const a=r.x*Math.abs(oi.x)+r.y*Math.abs(oi.y)+r.z*Math.abs(oi.z),l=e.dot(oi),c=t.dot(oi),u=n.dot(oi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const mx=new Wt,$u=new D,Fa=new D,Ba=new D;class zi{constructor(e=new D,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):mx.setFromPoints(e).getCenter(n);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){Ba.subVectors(e,this.center);const t=Ba.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.add(Ba.multiplyScalar(r/n)),this.radius+=r}return this}union(e){return Fa.subVectors(e.center,this.center).normalize().multiplyScalar(e.radius),this.expandByPoint($u.copy(e.center).add(Fa)),this.expandByPoint($u.copy(e.center).sub(Fa)),this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const fn=new D,Oa=new D,Hs=new D,In=new D,za=new D,ks=new D,Ua=new D;class Ui{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,fn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=fn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(fn.copy(this.direction).multiplyScalar(t).add(this.origin),fn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Oa.copy(e).add(t).multiplyScalar(.5),Hs.copy(t).sub(e).normalize(),In.copy(this.origin).sub(Oa);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Hs),a=In.dot(this.direction),l=-In.dot(Hs),c=In.lengthSq(),u=Math.abs(1-o*o);let h,f,m,x;if(u>0)if(h=o*l-a,f=o*a-l,x=s*u,h>=0)if(f>=-x)if(f<=x){const y=1/u;h*=y,f*=y,m=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=s,h=Math.max(0,-(o*f+a)),m=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(o*f+a)),m=-h*h+f*(f+2*l)+c;else f<=-x?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-l),s),m=-h*h+f*(f+2*l)+c):f<=x?(h=0,f=Math.min(Math.max(-s,-l),s),m=f*(f+2*l)+c):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-l),s),m=-h*h+f*(f+2*l)+c);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),m=-h*h+f*(f+2*l)+c;return n&&n.copy(this.direction).multiplyScalar(h).add(this.origin),r&&r.copy(Hs).multiplyScalar(f).add(Oa),m}intersectSphere(e,t){fn.subVectors(e.center,this.origin);const n=fn.dot(this.direction),r=fn.dot(fn)-n*n,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=n-o,l=n+o;return a<0&&l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),n>o||s>r||((s>n||n!==n)&&(n=s),(o<r||r!==r)&&(r=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,fn)!==null}intersectTriangle(e,t,n,r,s){za.subVectors(t,e),ks.subVectors(n,e),Ua.crossVectors(za,ks);let o=this.direction.dot(Ua),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;In.subVectors(this.origin,e);const l=a*this.direction.dot(ks.crossVectors(In,ks));if(l<0)return null;const c=a*this.direction.dot(za.cross(In));if(c<0||l+c>o)return null;const u=-a*In.dot(Ua);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Se{constructor(){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")}set(e,t,n,r,s,o,a,l,c,u,h,f,m,x,y,v){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=f,p[3]=m,p[7]=x,p[11]=y,p[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Se().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/Hi.setFromMatrixColumn(e,0).length(),s=1/Hi.setFromMatrixColumn(e,1).length(),o=1/Hi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){e&&e.isEuler||console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");const t=this.elements,n=e.x,r=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=o*u,m=o*h,x=a*u,y=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=m+x*c,t[5]=f-y*c,t[9]=-a*l,t[2]=y-f*c,t[6]=x+m*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*u,m=l*h,x=c*u,y=c*h;t[0]=f+y*a,t[4]=x*a-m,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=m*a-x,t[6]=y+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*u,m=l*h,x=c*u,y=c*h;t[0]=f-y*a,t[4]=-o*h,t[8]=x+m*a,t[1]=m+x*a,t[5]=o*u,t[9]=y-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*u,m=o*h,x=a*u,y=a*h;t[0]=l*u,t[4]=x*c-m,t[8]=f*c+y,t[1]=l*h,t[5]=y*c+f,t[9]=m*c-x,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,m=o*c,x=a*l,y=a*c;t[0]=l*u,t[4]=y-f*h,t[8]=x*h+m,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=m*h+x,t[10]=f-y*h}else if(e.order==="XZY"){const f=o*l,m=o*c,x=a*l,y=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+y,t[5]=o*u,t[9]=m*h-x,t[2]=x*h-m,t[6]=a*u,t[10]=y*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(gx,e,xx)}lookAt(e,t,n){const r=this.elements;return It.subVectors(e,t),It.lengthSq()===0&&(It.z=1),It.normalize(),Dn.crossVectors(n,It),Dn.lengthSq()===0&&(Math.abs(n.z)===1?It.x+=1e-4:It.z+=1e-4,It.normalize(),Dn.crossVectors(n,It)),Dn.normalize(),Vs.crossVectors(It,Dn),r[0]=Dn.x,r[4]=Vs.x,r[8]=It.x,r[1]=Dn.y,r[5]=Vs.y,r[9]=It.y,r[2]=Dn.z,r[6]=Vs.z,r[10]=It.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),this.multiplyMatrices(e,t)):this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],m=n[13],x=n[2],y=n[6],v=n[10],p=n[14],g=n[3],A=n[7],b=n[11],E=n[15],I=r[0],M=r[4],z=r[8],Q=r[12],Z=r[1],F=r[5],ne=r[9],J=r[13],$=r[2],ee=r[6],K=r[10],V=r[14],q=r[3],xe=r[7],be=r[11],ve=r[15];return s[0]=o*I+a*Z+l*$+c*q,s[4]=o*M+a*F+l*ee+c*xe,s[8]=o*z+a*ne+l*K+c*be,s[12]=o*Q+a*J+l*V+c*ve,s[1]=u*I+h*Z+f*$+m*q,s[5]=u*M+h*F+f*ee+m*xe,s[9]=u*z+h*ne+f*K+m*be,s[13]=u*Q+h*J+f*V+m*ve,s[2]=x*I+y*Z+v*$+p*q,s[6]=x*M+y*F+v*ee+p*xe,s[10]=x*z+y*ne+v*K+p*be,s[14]=x*Q+y*J+v*V+p*ve,s[3]=g*I+A*Z+b*$+E*q,s[7]=g*M+A*F+b*ee+E*xe,s[11]=g*z+A*ne+b*K+E*be,s[15]=g*Q+A*J+b*V+E*ve,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],m=e[14],x=e[3],y=e[7],v=e[11],p=e[15];return x*(+s*l*h-r*c*h-s*a*f+n*c*f+r*a*m-n*l*m)+y*(+t*l*m-t*c*f+s*o*f-r*o*m+r*c*u-s*l*u)+v*(+t*c*h-t*a*m-s*o*h+n*o*m+s*a*u-n*c*u)+p*(-r*a*u-t*l*h+t*a*f+r*o*h-n*o*f+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],m=e[11],x=e[12],y=e[13],v=e[14],p=e[15],g=h*v*c-y*f*c+y*l*m-a*v*m-h*l*p+a*f*p,A=x*f*c-u*v*c-x*l*m+o*v*m+u*l*p-o*f*p,b=u*y*c-x*h*c+x*a*m-o*y*m-u*a*p+o*h*p,E=x*h*l-u*y*l-x*a*f+o*y*f+u*a*v-o*h*v,I=t*g+n*A+r*b+s*E;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const M=1/I;return e[0]=g*M,e[1]=(y*f*s-h*v*s-y*r*m+n*v*m+h*r*p-n*f*p)*M,e[2]=(a*v*s-y*l*s+y*r*c-n*v*c-a*r*p+n*l*p)*M,e[3]=(h*l*s-a*f*s-h*r*c+n*f*c+a*r*m-n*l*m)*M,e[4]=A*M,e[5]=(u*v*s-x*f*s+x*r*m-t*v*m-u*r*p+t*f*p)*M,e[6]=(x*l*s-o*v*s-x*r*c+t*v*c+o*r*p-t*l*p)*M,e[7]=(o*f*s-u*l*s+u*r*c-t*f*c-o*r*m+t*l*m)*M,e[8]=b*M,e[9]=(x*h*s-u*y*s-x*n*m+t*y*m+u*n*p-t*h*p)*M,e[10]=(o*y*s-x*a*s+x*n*c-t*y*c-o*n*p+t*a*p)*M,e[11]=(u*a*s-o*h*s-u*n*c+t*h*c+o*n*m-t*a*m)*M,e[12]=E*M,e[13]=(u*y*r-x*h*r+x*n*f-t*y*f-u*n*v+t*h*v)*M,e[14]=(x*a*r-o*y*r-x*n*l+t*y*l+o*n*v-t*a*v)*M,e[15]=(o*h*r-u*a*r+u*n*l-t*h*l-o*n*f+t*a*f)*M,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+n,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,o){return this.set(1,n,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,h=a+a,f=s*c,m=s*u,x=s*h,y=o*u,v=o*h,p=a*h,g=l*c,A=l*u,b=l*h,E=n.x,I=n.y,M=n.z;return r[0]=(1-(y+p))*E,r[1]=(m+b)*E,r[2]=(x-A)*E,r[3]=0,r[4]=(m-b)*I,r[5]=(1-(f+p))*I,r[6]=(v+g)*I,r[7]=0,r[8]=(x+A)*M,r[9]=(v-g)*M,r[10]=(1-(f+y))*M,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=Hi.set(r[0],r[1],r[2]).length();const o=Hi.set(r[4],r[5],r[6]).length(),a=Hi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],qt.copy(this);const c=1/s,u=1/o,h=1/a;return qt.elements[0]*=c,qt.elements[1]*=c,qt.elements[2]*=c,qt.elements[4]*=u,qt.elements[5]*=u,qt.elements[6]*=u,qt.elements[8]*=h,qt.elements[9]*=h,qt.elements[10]*=h,t.setFromRotationMatrix(qt),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,r,s,o){o===void 0&&console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");const a=this.elements,l=2*s/(t-e),c=2*s/(n-r),u=(t+e)/(t-e),h=(n+r)/(n-r),f=-(o+s)/(o-s),m=-2*o*s/(o-s);return a[0]=l,a[4]=0,a[8]=u,a[12]=0,a[1]=0,a[5]=c,a[9]=h,a[13]=0,a[2]=0,a[6]=0,a[10]=f,a[14]=m,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,n,r,s,o){const a=this.elements,l=1/(t-e),c=1/(n-r),u=1/(o-s),h=(t+e)*l,f=(n+r)*c,m=(o+s)*u;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-h,a[1]=0,a[5]=2*c,a[9]=0,a[13]=-f,a[2]=0,a[6]=0,a[10]=-2*u,a[14]=-m,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}Se.prototype.isMatrix4=!0;const Hi=new D,qt=new Se,gx=new D(0,0,0),xx=new D(1,1,1),Dn=new D,Vs=new D,It=new D,Ku=new Se,Qu=new xt;class ki{constructor(e=0,t=0,n=0,r=ki.DefaultOrder){this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],h=r[2],f=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(Et(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Et(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Et(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Et(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Et(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Et(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ku.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ku,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Qu.setFromEuler(this),this.setFromQuaternion(Qu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}toVector3(e){return e?e.set(this._x,this._y,this._z):new D(this._x,this._y,this._z)}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}}ki.prototype.isEuler=!0;ki.DefaultOrder="XYZ";ki.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class yx{constructor(){this.mask=1|0}set(e){this.mask=1<<e|0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=4294967295|0}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!=0}}let _x=0;const eh=new D,Vi=new xt,dn=new Se,Gs=new D,Dr=new D,vx=new D,bx=new xt,th=new D(1,0,0),nh=new D(0,1,0),ih=new D(0,0,1),Mx={type:"added"},rh={type:"removed"};class ke extends Cn{constructor(){super();Object.defineProperty(this,"id",{value:_x++}),this.uuid=Qt(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ke.DefaultUp.clone();const e=new D,t=new ki,n=new xt,r=new D(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Se},normalMatrix:{value:new Ke}}),this.matrix=new Se,this.matrixWorld=new Se,this.matrixAutoUpdate=ke.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new yx,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Vi.setFromAxisAngle(e,t),this.quaternion.multiply(Vi),this}rotateOnWorldAxis(e,t){return Vi.setFromAxisAngle(e,t),this.quaternion.premultiply(Vi),this}rotateX(e){return this.rotateOnAxis(th,e)}rotateY(e){return this.rotateOnAxis(nh,e)}rotateZ(e){return this.rotateOnAxis(ih,e)}translateOnAxis(e,t){return eh.copy(e).applyQuaternion(this.quaternion),this.position.add(eh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(th,e)}translateY(e){return this.translateOnAxis(nh,e)}translateZ(e){return this.translateOnAxis(ih,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(dn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Gs.copy(e):Gs.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Dr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?dn.lookAt(Dr,Gs,this.up):dn.lookAt(Gs,Dr,this.up),this.quaternion.setFromRotationMatrix(dn),r&&(dn.extractRotation(r.matrixWorld),Vi.setFromRotationMatrix(dn),this.quaternion.premultiply(Vi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Mx)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(rh)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(rh)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),dn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),dn.multiply(e.parent.matrixWorld)),e.applyMatrix4(dn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Dr,e,vx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Dr,bx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),m=o(e.animations);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m)}return n.object=r,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}ke.DefaultUp=new D(0,1,0);ke.DefaultMatrixAutoUpdate=!0;ke.prototype.isObject3D=!0;const jt=new D,pn=new D,Ha=new D,mn=new D,Gi=new D,Wi=new D,sh=new D,ka=new D,Va=new D,Ga=new D;class rt{constructor(e=new D,t=new D,n=new D){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),jt.subVectors(e,t),r.cross(jt);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){jt.subVectors(r,t),pn.subVectors(n,t),Ha.subVectors(e,t);const o=jt.dot(jt),a=jt.dot(pn),l=jt.dot(Ha),c=pn.dot(pn),u=pn.dot(Ha),h=o*c-a*a;if(h===0)return s.set(-2,-1,-1);const f=1/h,m=(c*l-a*u)*f,x=(o*u-a*l)*f;return s.set(1-m-x,x,m)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,mn),mn.x>=0&&mn.y>=0&&mn.x+mn.y<=1}static getUV(e,t,n,r,s,o,a,l){return this.getBarycoord(e,t,n,r,mn),l.set(0,0),l.addScaledVector(s,mn.x),l.addScaledVector(o,mn.y),l.addScaledVector(a,mn.z),l}static isFrontFacing(e,t,n,r){return jt.subVectors(n,t),pn.subVectors(e,t),jt.cross(pn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return jt.subVectors(this.c,this.b),pn.subVectors(this.a,this.b),jt.cross(pn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return rt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return rt.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,r,s){return rt.getUV(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return rt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return rt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let o,a;Gi.subVectors(r,n),Wi.subVectors(s,n),ka.subVectors(e,n);const l=Gi.dot(ka),c=Wi.dot(ka);if(l<=0&&c<=0)return t.copy(n);Va.subVectors(e,r);const u=Gi.dot(Va),h=Wi.dot(Va);if(u>=0&&h<=u)return t.copy(r);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(Gi,o);Ga.subVectors(e,s);const m=Gi.dot(Ga),x=Wi.dot(Ga);if(x>=0&&m<=x)return t.copy(s);const y=m*c-l*x;if(y<=0&&c>=0&&x<=0)return a=c/(c-x),t.copy(n).addScaledVector(Wi,a);const v=u*x-m*h;if(v<=0&&h-u>=0&&m-x>=0)return sh.subVectors(s,r),a=(h-u)/(h-u+(m-x)),t.copy(r).addScaledVector(sh,a);const p=1/(v+y+f);return o=y*p,a=f*p,t.copy(n).addScaledVector(Gi,o).addScaledVector(Wi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let wx=0;class yt extends Cn{constructor(){super();Object.defineProperty(this,"id",{value:wx++}),this.uuid=Qt(),this.name="",this.type="Material",this.fog=!0,this.blending=Tr,this.side=Sr,this.vertexColors=!1,this.opacity=1,this.format=wt,this.transparent=!1,this.blendSrc=Eu,this.blendDst=Au,this.blendEquation=Ei,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=ya,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=cx,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=La,this.stencilZFail=La,this.stencilZPass=La,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}if(t==="shading"){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=n===vu;continue}const r=this[t];if(r===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Tr&&(n.blending=this.blending),this.side!==Sr&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.format!==wt&&(n.format=this.format),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.fog=e.fog,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.format=e.format,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}yt.prototype.isMaterial=!0;const oh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Xt={h:0,s:0,l:0},Ws={h:0,s:0,l:0};function Wa(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}function qa(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ja(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}class we{constructor(e,t,n){return t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,this}setRGB(e,t,n){return this.r=e,this.g=t,this.b=n,this}setHSL(e,t,n){if(e=hx(e,1),t=Et(t,0,1),n=Et(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,s=2*n-r;this.r=Wa(s,r,e+1/3),this.g=Wa(s,r,e),this.b=Wa(s,r,e-1/3)}return this}setStyle(e){function t(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let r;const s=n[1],o=n[2];switch(s){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(255,parseInt(r[1],10))/255,this.g=Math.min(255,parseInt(r[2],10))/255,this.b=Math.min(255,parseInt(r[3],10))/255,t(r[4]),this;if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(100,parseInt(r[1],10))/100,this.g=Math.min(100,parseInt(r[2],10))/100,this.b=Math.min(100,parseInt(r[3],10))/100,t(r[4]),this;break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)){const a=parseFloat(r[1])/360,l=parseInt(r[2],10)/100,c=parseInt(r[3],10)/100;return t(r[4]),this.setHSL(a,l,c)}break}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=n[1],s=r.length;if(s===3)return this.r=parseInt(r.charAt(0)+r.charAt(0),16)/255,this.g=parseInt(r.charAt(1)+r.charAt(1),16)/255,this.b=parseInt(r.charAt(2)+r.charAt(2),16)/255,this;if(s===6)return this.r=parseInt(r.charAt(0)+r.charAt(1),16)/255,this.g=parseInt(r.charAt(2)+r.charAt(3),16)/255,this.b=parseInt(r.charAt(4)+r.charAt(5),16)/255,this}return e&&e.length>0?this.setColorName(e):this}setColorName(e){const t=oh[e.toLowerCase()];return t!==void 0?this.setHex(t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copyGammaToLinear(e,t=2){return this.r=Math.pow(e.r,t),this.g=Math.pow(e.g,t),this.b=Math.pow(e.b,t),this}copyLinearToGamma(e,t=2){const n=t>0?1/t:1;return this.r=Math.pow(e.r,n),this.g=Math.pow(e.g,n),this.b=Math.pow(e.b,n),this}convertGammaToLinear(e){return this.copyGammaToLinear(this,e),this}convertLinearToGamma(e){return this.copyLinearToGamma(this,e),this}copySRGBToLinear(e){return this.r=qa(e.r),this.g=qa(e.g),this.b=qa(e.b),this}copyLinearToSRGB(e){return this.r=ja(e.r),this.g=ja(e.g),this.b=ja(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(){return this.r*255<<16^this.g*255<<8^this.b*255<<0}getHexString(){return("000000"+this.getHex().toString(16)).slice(-6)}getHSL(e){const t=this.r,n=this.g,r=this.b,s=Math.max(t,n,r),o=Math.min(t,n,r);let a,l;const c=(o+s)/2;if(o===s)a=0,l=0;else{const u=s-o;switch(l=c<=.5?u/(s+o):u/(2-s-o),s){case t:a=(n-r)/u+(n<r?6:0);break;case n:a=(r-t)/u+2;break;case r:a=(t-n)/u+4;break}a/=6}return e.h=a,e.s=l,e.l=c,e}getStyle(){return"rgb("+(this.r*255|0)+","+(this.g*255|0)+","+(this.b*255|0)+")"}offsetHSL(e,t,n){return this.getHSL(Xt),Xt.h+=e,Xt.s+=t,Xt.l+=n,this.setHSL(Xt.h,Xt.s,Xt.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Xt),e.getHSL(Ws);const n=Ra(Xt.h,Ws.h,t),r=Ra(Xt.s,Ws.s,t),s=Ra(Xt.l,Ws.l,t);return this.setHSL(n,r,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),e.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this}toJSON(){return this.getHex()}}we.NAMES=oh;we.prototype.isColor=!0;we.prototype.r=1;we.prototype.g=1;we.prototype.b=1;class Xa extends yt{constructor(e){super();this.type="MeshBasicMaterial",this.color=new we(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=As,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this}}Xa.prototype.isMeshBasicMaterial=!0;const je=new D,qs=new oe;class at{constructor(e,t,n){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n===!0,this.usage=Rr,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}copyColorsArray(e){const t=this.array;let n=0;for(let r=0,s=e.length;r<s;r++){let o=e[r];o===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",r),o=new we),t[n++]=o.r,t[n++]=o.g,t[n++]=o.b}return this}copyVector2sArray(e){const t=this.array;let n=0;for(let r=0,s=e.length;r<s;r++){let o=e[r];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",r),o=new oe),t[n++]=o.x,t[n++]=o.y}return this}copyVector3sArray(e){const t=this.array;let n=0;for(let r=0,s=e.length;r<s;r++){let o=e[r];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",r),o=new D),t[n++]=o.x,t[n++]=o.y,t[n++]=o.z}return this}copyVector4sArray(e){const t=this.array;let n=0;for(let r=0,s=e.length;r<s;r++){let o=e[r];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",r),o=new We),t[n++]=o.x,t[n++]=o.y,t[n++]=o.z,t[n++]=o.w}return this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)qs.fromBufferAttribute(this,t),qs.applyMatrix3(e),this.setXY(t,qs.x,qs.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)je.fromBufferAttribute(this,t),je.applyMatrix3(e),this.setXYZ(t,je.x,je.y,je.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)je.x=this.getX(t),je.y=this.getY(t),je.z=this.getZ(t),je.applyMatrix4(e),this.setXYZ(t,je.x,je.y,je.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)je.x=this.getX(t),je.y=this.getY(t),je.z=this.getZ(t),je.applyNormalMatrix(e),this.setXYZ(t,je.x,je.y,je.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)je.x=this.getX(t),je.y=this.getY(t),je.z=this.getZ(t),je.transformDirection(e),this.setXYZ(t,je.x,je.y,je.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){return this.array[e*this.itemSize]}setX(e,t){return this.array[e*this.itemSize]=t,this}getY(e){return this.array[e*this.itemSize+1]}setY(e,t){return this.array[e*this.itemSize+1]=t,this}getZ(e){return this.array[e*this.itemSize+2]}setZ(e,t){return this.array[e*this.itemSize+2]=t,this}getW(e){return this.array[e*this.itemSize+3]}setW(e,t){return this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.prototype.slice.call(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Rr&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}at.prototype.isBufferAttribute=!0;class ah extends at{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class lh extends at{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Sx extends at{constructor(e,t,n){super(new Uint16Array(e),t,n)}}Sx.prototype.isFloat16BufferAttribute=!0;class nt extends at{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Tx=0;const zt=new Se,Ya=new ke,qi=new D,Dt=new Wt,Nr=new Wt,ut=new D;class Xe extends Cn{constructor(){super();Object.defineProperty(this,"id",{value:Tx++}),this.uuid=Qt(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Xu(e)>65535?lh:ah)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Ke().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return zt.makeRotationFromQuaternion(e),this.applyMatrix4(zt),this}rotateX(e){return zt.makeRotationX(e),this.applyMatrix4(zt),this}rotateY(e){return zt.makeRotationY(e),this.applyMatrix4(zt),this}rotateZ(e){return zt.makeRotationZ(e),this.applyMatrix4(zt),this}translate(e,t,n){return zt.makeTranslation(e,t,n),this.applyMatrix4(zt),this}scale(e,t,n){return zt.makeScale(e,t,n),this.applyMatrix4(zt),this}lookAt(e){return Ya.lookAt(e),Ya.updateMatrix(),this.applyMatrix4(Ya.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(qi).negate(),this.translate(qi.x,qi.y,qi.z),this}setFromPoints(e){const t=[];for(let n=0,r=e.length;n<r;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new nt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Wt);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];Dt.setFromBufferAttribute(s),this.morphTargetsRelative?(ut.addVectors(this.boundingBox.min,Dt.min),this.boundingBox.expandByPoint(ut),ut.addVectors(this.boundingBox.max,Dt.max),this.boundingBox.expandByPoint(ut)):(this.boundingBox.expandByPoint(Dt.min),this.boundingBox.expandByPoint(Dt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new zi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new D,1/0);return}if(e){const n=this.boundingSphere.center;if(Dt.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Nr.setFromBufferAttribute(a),this.morphTargetsRelative?(ut.addVectors(Dt.min,Nr.min),Dt.expandByPoint(ut),ut.addVectors(Dt.max,Nr.max),Dt.expandByPoint(ut)):(Dt.expandByPoint(Nr.min),Dt.expandByPoint(Nr.max))}Dt.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)ut.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(ut));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)ut.fromBufferAttribute(a,c),l&&(qi.fromBufferAttribute(e,c),ut.add(qi)),r=Math.max(r,n.distanceToSquared(ut))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,r=t.position.array,s=t.normal.array,o=t.uv.array,a=r.length/3;t.tangent===void 0&&this.setAttribute("tangent",new at(new Float32Array(4*a),4));const l=t.tangent.array,c=[],u=[];for(let Z=0;Z<a;Z++)c[Z]=new D,u[Z]=new D;const h=new D,f=new D,m=new D,x=new oe,y=new oe,v=new oe,p=new D,g=new D;function A(Z,F,ne){h.fromArray(r,Z*3),f.fromArray(r,F*3),m.fromArray(r,ne*3),x.fromArray(o,Z*2),y.fromArray(o,F*2),v.fromArray(o,ne*2),f.sub(h),m.sub(h),y.sub(x),v.sub(x);const J=1/(y.x*v.y-v.x*y.y);!isFinite(J)||(p.copy(f).multiplyScalar(v.y).addScaledVector(m,-y.y).multiplyScalar(J),g.copy(m).multiplyScalar(y.x).addScaledVector(f,-v.x).multiplyScalar(J),c[Z].add(p),c[F].add(p),c[ne].add(p),u[Z].add(g),u[F].add(g),u[ne].add(g))}let b=this.groups;b.length===0&&(b=[{start:0,count:n.length}]);for(let Z=0,F=b.length;Z<F;++Z){const ne=b[Z],J=ne.start,$=ne.count;for(let ee=J,K=J+$;ee<K;ee+=3)A(n[ee+0],n[ee+1],n[ee+2])}const E=new D,I=new D,M=new D,z=new D;function Q(Z){M.fromArray(s,Z*3),z.copy(M);const F=c[Z];E.copy(F),E.sub(M.multiplyScalar(M.dot(F))).normalize(),I.crossVectors(z,F);const J=I.dot(u[Z])<0?-1:1;l[Z*4]=E.x,l[Z*4+1]=E.y,l[Z*4+2]=E.z,l[Z*4+3]=J}for(let Z=0,F=b.length;Z<F;++Z){const ne=b[Z],J=ne.start,$=ne.count;for(let ee=J,K=J+$;ee<K;ee+=3)Q(n[ee+0]),Q(n[ee+1]),Q(n[ee+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new at(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);const r=new D,s=new D,o=new D,a=new D,l=new D,c=new D,u=new D,h=new D;if(e)for(let f=0,m=e.count;f<m;f+=3){const x=e.getX(f+0),y=e.getX(f+1),v=e.getX(f+2);r.fromBufferAttribute(t,x),s.fromBufferAttribute(t,y),o.fromBufferAttribute(t,v),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),a.fromBufferAttribute(n,x),l.fromBufferAttribute(n,y),c.fromBufferAttribute(n,v),a.add(u),l.add(u),c.add(u),n.setXYZ(x,a.x,a.y,a.z),n.setXYZ(y,l.x,l.y,l.z),n.setXYZ(v,c.x,c.y,c.z)}else for(let f=0,m=t.count;f<m;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(e,t){if(!(e&&e.isBufferGeometry)){console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",e);return}t===void 0&&(t=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));const n=this.attributes;for(const r in n){if(e.attributes[r]===void 0)continue;const o=n[r].array,a=e.attributes[r],l=a.array,c=a.itemSize*t,u=Math.min(l.length,o.length-c);for(let h=0,f=c;h<u;h++,f++)o[f]=l[h]}return this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)ut.fromBufferAttribute(e,t),ut.normalize(),e.setXYZ(t,ut.x,ut.y,ut.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u);let m=0,x=0;for(let y=0,v=l.length;y<v;y++){a.isInterleavedBufferAttribute?m=l[y]*a.data.stride+a.offset:m=l[y]*u;for(let p=0;p<u;p++)f[x++]=c[m++]}return new at(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Xe,n=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){const f=c[u],m=e(f,n);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const m=c[h];u.push(m.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let f=0,m=h.length;f<m;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}Xe.prototype.isBufferGeometry=!0;const ch=new Se,ji=new Ui,Za=new zi,Nn=new D,Fn=new D,Bn=new D,Ja=new D,$a=new D,Ka=new D,js=new D,Xs=new D,Ys=new D,Zs=new oe,Js=new oe,$s=new oe,Qa=new D,Ks=new D;class At extends ke{constructor(e=new Xe,t=new Xa){super();this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e){return super.copy(e),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const e=this.geometry;if(e.isBufferGeometry){const t=e.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}else{const t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Mesh.updateMorphTargets() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;if(r===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),Za.copy(n.boundingSphere),Za.applyMatrix4(s),e.ray.intersectsSphere(Za)===!1)||(ch.copy(s).invert(),ji.copy(e.ray).applyMatrix4(ch),n.boundingBox!==null&&ji.intersectsBox(n.boundingBox)===!1))return;let o;if(n.isBufferGeometry){const a=n.index,l=n.attributes.position,c=n.morphAttributes.position,u=n.morphTargetsRelative,h=n.attributes.uv,f=n.attributes.uv2,m=n.groups,x=n.drawRange;if(a!==null)if(Array.isArray(r))for(let y=0,v=m.length;y<v;y++){const p=m[y],g=r[p.materialIndex],A=Math.max(p.start,x.start),b=Math.min(a.count,Math.min(p.start+p.count,x.start+x.count));for(let E=A,I=b;E<I;E+=3){const M=a.getX(E),z=a.getX(E+1),Q=a.getX(E+2);o=Qs(this,g,e,ji,l,c,u,h,f,M,z,Q),o&&(o.faceIndex=Math.floor(E/3),o.face.materialIndex=p.materialIndex,t.push(o))}}else{const y=Math.max(0,x.start),v=Math.min(a.count,x.start+x.count);for(let p=y,g=v;p<g;p+=3){const A=a.getX(p),b=a.getX(p+1),E=a.getX(p+2);o=Qs(this,r,e,ji,l,c,u,h,f,A,b,E),o&&(o.faceIndex=Math.floor(p/3),t.push(o))}}else if(l!==void 0)if(Array.isArray(r))for(let y=0,v=m.length;y<v;y++){const p=m[y],g=r[p.materialIndex],A=Math.max(p.start,x.start),b=Math.min(l.count,Math.min(p.start+p.count,x.start+x.count));for(let E=A,I=b;E<I;E+=3){const M=E,z=E+1,Q=E+2;o=Qs(this,g,e,ji,l,c,u,h,f,M,z,Q),o&&(o.faceIndex=Math.floor(E/3),o.face.materialIndex=p.materialIndex,t.push(o))}}else{const y=Math.max(0,x.start),v=Math.min(l.count,x.start+x.count);for(let p=y,g=v;p<g;p+=3){const A=p,b=p+1,E=p+2;o=Qs(this,r,e,ji,l,c,u,h,f,A,b,E),o&&(o.faceIndex=Math.floor(p/3),t.push(o))}}}else n.isGeometry&&console.error("THREE.Mesh.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}}At.prototype.isMesh=!0;function Ex(i,e,t,n,r,s,o,a){let l;if(e.side===ot?l=n.intersectTriangle(o,s,r,!0,a):l=n.intersectTriangle(r,s,o,e.side!==Ti,a),l===null)return null;Ks.copy(a),Ks.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Ks);return c<t.near||c>t.far?null:{distance:c,point:Ks.clone(),object:i}}function Qs(i,e,t,n,r,s,o,a,l,c,u,h){Nn.fromBufferAttribute(r,c),Fn.fromBufferAttribute(r,u),Bn.fromBufferAttribute(r,h);const f=i.morphTargetInfluences;if(s&&f){js.set(0,0,0),Xs.set(0,0,0),Ys.set(0,0,0);for(let x=0,y=s.length;x<y;x++){const v=f[x],p=s[x];v!==0&&(Ja.fromBufferAttribute(p,c),$a.fromBufferAttribute(p,u),Ka.fromBufferAttribute(p,h),o?(js.addScaledVector(Ja,v),Xs.addScaledVector($a,v),Ys.addScaledVector(Ka,v)):(js.addScaledVector(Ja.sub(Nn),v),Xs.addScaledVector($a.sub(Fn),v),Ys.addScaledVector(Ka.sub(Bn),v)))}Nn.add(js),Fn.add(Xs),Bn.add(Ys)}i.isSkinnedMesh&&(i.boneTransform(c,Nn),i.boneTransform(u,Fn),i.boneTransform(h,Bn));const m=Ex(i,e,t,n,Nn,Fn,Bn,Qa);if(m){a&&(Zs.fromBufferAttribute(a,c),Js.fromBufferAttribute(a,u),$s.fromBufferAttribute(a,h),m.uv=rt.getUV(Qa,Nn,Fn,Bn,Zs,Js,$s,new oe)),l&&(Zs.fromBufferAttribute(l,c),Js.fromBufferAttribute(l,u),$s.fromBufferAttribute(l,h),m.uv2=rt.getUV(Qa,Nn,Fn,Bn,Zs,Js,$s,new oe));const x={a:c,b:u,c:h,normal:new D,materialIndex:0};rt.getNormal(Nn,Fn,Bn,x.normal),m.face=x}return m}class Fr extends Xe{constructor(e=1,t=1,n=1,r=1,s=1,o=1){super();this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],h=[];let f=0,m=0;x("z","y","x",-1,-1,n,t,e,o,s,0),x("z","y","x",1,-1,n,t,-e,o,s,1),x("x","z","y",1,1,e,n,t,r,o,2),x("x","z","y",1,-1,e,n,-t,r,o,3),x("x","y","z",1,-1,e,t,n,r,s,4),x("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new nt(c,3)),this.setAttribute("normal",new nt(u,3)),this.setAttribute("uv",new nt(h,2));function x(y,v,p,g,A,b,E,I,M,z,Q){const Z=b/M,F=E/z,ne=b/2,J=E/2,$=I/2,ee=M+1,K=z+1;let V=0,q=0;const xe=new D;for(let be=0;be<K;be++){const ve=be*F-J;for(let X=0;X<ee;X++){const C=X*Z-ne;xe[y]=C*g,xe[v]=ve*A,xe[p]=$,c.push(xe.x,xe.y,xe.z),xe[y]=0,xe[v]=0,xe[p]=I>0?1:-1,u.push(xe.x,xe.y,xe.z),h.push(X/M),h.push(1-be/z),V+=1}}for(let be=0;be<z;be++)for(let ve=0;ve<M;ve++){const X=f+ve+ee*be,C=f+ve+ee*(be+1),L=f+(ve+1)+ee*(be+1),k=f+(ve+1)+ee*be;l.push(X,C,k),l.push(C,L,k),q+=6}a.addGroup(m,q,Q),m+=q,f+=V}}static fromJSON(e){return new Fr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Xi(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function _t(i){const e={};for(let t=0;t<i.length;t++){const n=Xi(i[t]);for(const r in n)e[r]=n[r]}return e}const Ax={clone:Xi,merge:_t};var Lx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Cx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ai extends yt{constructor(e){super();this.type="ShaderMaterial",this.defines={},this.uniforms={},this.vertexShader=Lx,this.fragmentShader=Cx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&(e.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(e))}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Xi(e.uniforms),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}ai.prototype.isShaderMaterial=!0;class el extends ke{constructor(){super();this.type="Camera",this.matrixWorldInverse=new Se,this.projectionMatrix=new Se,this.projectionMatrixInverse=new Se}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}el.prototype.isCamera=!0;class Lt extends el{constructor(e=50,t=1,n=.1,r=2e3){super();this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ca*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Bs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ca*2*Math.atan(Math.tan(Bs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Bs*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*n/c,r*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}Lt.prototype.isPerspectiveCamera=!0;const Yi=90,Zi=1;class tl extends ke{constructor(e,t,n){super();if(this.type="CubeCamera",n.isWebGLCubeRenderTarget!==!0){console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");return}this.renderTarget=n;const r=new Lt(Yi,Zi,e,t);r.layers=this.layers,r.up.set(0,-1,0),r.lookAt(new D(1,0,0)),this.add(r);const s=new Lt(Yi,Zi,e,t);s.layers=this.layers,s.up.set(0,-1,0),s.lookAt(new D(-1,0,0)),this.add(s);const o=new Lt(Yi,Zi,e,t);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(new D(0,1,0)),this.add(o);const a=new Lt(Yi,Zi,e,t);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(new D(0,-1,0)),this.add(a);const l=new Lt(Yi,Zi,e,t);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new D(0,0,1)),this.add(l);const c=new Lt(Yi,Zi,e,t);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new D(0,0,-1)),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[r,s,o,a,l,c]=this.children,u=e.xr.enabled,h=e.getRenderTarget();e.xr.enabled=!1;const f=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,r),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,o),e.setRenderTarget(n,3),e.render(t,a),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=f,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(h),e.xr.enabled=u}}class eo extends dt{constructor(e,t,n,r,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Er;super(e,t,n,r,s,o,a,l,c,u);this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}eo.prototype.isCubeTexture=!0;class uh extends en{constructor(e,t,n){Number.isInteger(t)&&(console.warn("THREE.WebGLCubeRenderTarget: constructor signature is now WebGLCubeRenderTarget( size, options )"),t=n);super(e,e,t);t=t||{},this.texture=new eo(void 0,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ot,this.texture._needsFlipEnvMap=!1}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.format=wt,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Fr(5,5,5),s=new ai({name:"CubemapFromEquirect",uniforms:Xi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ot,blending:En});s.uniforms.tEquirect.value=t;const o=new At(r,s),a=t.minFilter;return t.minFilter===Cs&&(t.minFilter=Ot),new tl(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(s)}}uh.prototype.isWebGLCubeRenderTarget=!0;const nl=new D,Rx=new D,Px=new Ke;class gn{constructor(e=new D(1,0,0),t=0){this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=nl.subVectors(n,t).cross(Rx.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const n=e.delta(nl),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(n).multiplyScalar(s).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Px.getNormalMatrix(e),r=this.coplanarPoint(nl).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}gn.prototype.isPlane=!0;const Ji=new zi,to=new D;class no{constructor(e=new gn,t=new gn,n=new gn,r=new gn,s=new gn,o=new gn){this.planes=[e,t,n,r,s,o]}set(e,t,n,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,r=n[0],s=n[1],o=n[2],a=n[3],l=n[4],c=n[5],u=n[6],h=n[7],f=n[8],m=n[9],x=n[10],y=n[11],v=n[12],p=n[13],g=n[14],A=n[15];return t[0].setComponents(a-r,h-l,y-f,A-v).normalize(),t[1].setComponents(a+r,h+l,y+f,A+v).normalize(),t[2].setComponents(a+s,h+c,y+m,A+p).normalize(),t[3].setComponents(a-s,h-c,y-m,A-p).normalize(),t[4].setComponents(a-o,h-u,y-x,A-g).normalize(),t[5].setComponents(a+o,h+u,y+x,A+g).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),Ji.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Ji)}intersectsSprite(e){return Ji.center.set(0,0,0),Ji.radius=.7071067811865476,Ji.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ji)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(to.x=r.normal.x>0?e.max.x:e.min.x,to.y=r.normal.y>0?e.max.y:e.min.y,to.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(to)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function hh(){let i=null,e=!1,t=null,n=null;function r(s,o){t(s,o),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function Ix(i,e){const t=e.isWebGL2,n=new WeakMap;function r(c,u){const h=c.array,f=c.usage,m=i.createBuffer();i.bindBuffer(u,m),i.bufferData(u,h,f),c.onUploadCallback();let x=5126;return h instanceof Float32Array?x=5126:h instanceof Float64Array?console.warn("THREE.WebGLAttributes: Unsupported data buffer format: Float64Array."):h instanceof Uint16Array?c.isFloat16BufferAttribute?t?x=5131:console.warn("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2."):x=5123:h instanceof Int16Array?x=5122:h instanceof Uint32Array?x=5125:h instanceof Int32Array?x=5124:h instanceof Int8Array?x=5120:(h instanceof Uint8Array||h instanceof Uint8ClampedArray)&&(x=5121),{buffer:m,type:x,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version}}function s(c,u,h){const f=u.array,m=u.updateRange;i.bindBuffer(h,c),m.count===-1?i.bufferSubData(h,0,f):(t?i.bufferSubData(h,m.offset*f.BYTES_PER_ELEMENT,f,m.offset,m.count):i.bufferSubData(h,m.offset*f.BYTES_PER_ELEMENT,f.subarray(m.offset,m.offset+m.count)),m.count=-1)}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(i.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const f=n.get(c);(!f||f.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h===void 0?n.set(c,r(c,u)):h.version<c.version&&(s(h.buffer,c,u),h.version=c.version)}return{get:o,remove:a,update:l}}class il extends Xe{constructor(e=1,t=1,n=1,r=1){super();this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(r),c=a+1,u=l+1,h=e/a,f=t/l,m=[],x=[],y=[],v=[];for(let p=0;p<u;p++){const g=p*f-o;for(let A=0;A<c;A++){const b=A*h-s;x.push(b,-g,0),y.push(0,0,1),v.push(A/a),v.push(1-p/l)}}for(let p=0;p<l;p++)for(let g=0;g<a;g++){const A=g+c*p,b=g+c*(p+1),E=g+1+c*(p+1),I=g+1+c*p;m.push(A,b,I),m.push(b,E,I)}this.setIndex(m),this.setAttribute("position",new nt(x,3)),this.setAttribute("normal",new nt(y,3)),this.setAttribute("uv",new nt(v,2))}static fromJSON(e){return new il(e.width,e.height,e.widthSegments,e.heightSegments)}}var Dx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,Nx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Fx=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Bx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ox=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,zx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ux="vec3 transformed = vec3( position );",Hx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,kx=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
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
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
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
float G_BlinnPhong_Implicit( ) {
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
#endif`,Vx=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );
		vec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Gx=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,Wx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,qx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,jx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Xx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Yx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Zx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Jx=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,$x=`#define PI 3.141592653589793
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
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }
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
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
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
float linearToRelativeLuminance( const in vec3 color ) {
	vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );
	return dot( weights, color.rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,Kx=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_maxMipLevel 8.0
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_maxTileSize 256.0
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
		float texelSize = 1.0 / ( 3.0 * cubeUV_maxTileSize );
		vec2 uv = getUV( direction, face ) * ( faceSize - 1.0 );
		vec2 f = fract( uv );
		uv += 0.5 - f;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		if ( mipInt < cubeUV_maxMipLevel ) {
			uv.y += 2.0 * cubeUV_maxTileSize;
		}
		uv.y += filterInt * 2.0 * cubeUV_minTileSize;
		uv.x += 3.0 * max( 0.0, cubeUV_maxTileSize - 2.0 * faceSize );
		uv *= texelSize;
		vec3 tl = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		uv.x += texelSize;
		vec3 tr = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		uv.y += texelSize;
		vec3 br = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		uv.x -= texelSize;
		vec3 bl = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		vec3 tm = mix( tl, tr, f.x );
		vec3 bm = mix( bl, br, f.x );
		return mix( tm, bm, f.y );
	}
	#define r0 1.0
	#define v0 0.339
	#define m0 - 2.0
	#define r1 0.8
	#define v1 0.276
	#define m1 - 1.0
	#define r4 0.4
	#define v4 0.046
	#define m4 2.0
	#define r5 0.305
	#define v5 0.016
	#define m5 3.0
	#define r6 0.21
	#define v6 0.0038
	#define m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= r1 ) {
			mip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;
		} else if ( roughness >= r4 ) {
			mip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;
		} else if ( roughness >= r5 ) {
			mip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;
		} else if ( roughness >= r6 ) {
			mip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), m0, cubeUV_maxMipLevel );
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
#endif`,Qx=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,e0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,t0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,n0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	emissiveColor.rgb = emissiveMapTexelToLinear( emissiveColor ).rgb;
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,i0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,r0="gl_FragColor = linearToOutputTexel( gl_FragColor );",s0=`
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 GammaToLinear( in vec4 value, in float gammaFactor ) {
	return vec4( pow( value.rgb, vec3( gammaFactor ) ), value.a );
}
vec4 LinearToGamma( in vec4 value, in float gammaFactor ) {
	return vec4( pow( value.rgb, vec3( 1.0 / gammaFactor ) ), value.a );
}
vec4 sRGBToLinear( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 RGBEToLinear( in vec4 value ) {
	return vec4( value.rgb * exp2( value.a * 255.0 - 128.0 ), 1.0 );
}
vec4 LinearToRGBE( in vec4 value ) {
	float maxComponent = max( max( value.r, value.g ), value.b );
	float fExp = clamp( ceil( log2( maxComponent ) ), -128.0, 127.0 );
	return vec4( value.rgb / exp2( fExp ), ( fExp + 128.0 ) / 255.0 );
}
vec4 RGBMToLinear( in vec4 value, in float maxRange ) {
	return vec4( value.rgb * value.a * maxRange, 1.0 );
}
vec4 LinearToRGBM( in vec4 value, in float maxRange ) {
	float maxRGB = max( value.r, max( value.g, value.b ) );
	float M = clamp( maxRGB / maxRange, 0.0, 1.0 );
	M = ceil( M * 255.0 ) / 255.0;
	return vec4( value.rgb / ( M * maxRange ), M );
}
vec4 RGBDToLinear( in vec4 value, in float maxRange ) {
	return vec4( value.rgb * ( ( maxRange / 255.0 ) / value.a ), 1.0 );
}
vec4 LinearToRGBD( in vec4 value, in float maxRange ) {
	float maxRGB = max( value.r, max( value.g, value.b ) );
	float D = max( maxRange / maxRGB, 1.0 );
	D = clamp( floor( D ) / 255.0, 0.0, 1.0 );
	return vec4( value.rgb * ( D * ( 255.0 / maxRange ) ), D );
}
const mat3 cLogLuvM = mat3( 0.2209, 0.3390, 0.4184, 0.1138, 0.6780, 0.7319, 0.0102, 0.1130, 0.2969 );
vec4 LinearToLogLuv( in vec4 value ) {
	vec3 Xp_Y_XYZp = cLogLuvM * value.rgb;
	Xp_Y_XYZp = max( Xp_Y_XYZp, vec3( 1e-6, 1e-6, 1e-6 ) );
	vec4 vResult;
	vResult.xy = Xp_Y_XYZp.xy / Xp_Y_XYZp.z;
	float Le = 2.0 * log2(Xp_Y_XYZp.y) + 127.0;
	vResult.w = fract( Le );
	vResult.z = ( Le - ( floor( vResult.w * 255.0 ) ) / 255.0 ) / 255.0;
	return vResult;
}
const mat3 cLogLuvInverseM = mat3( 6.0014, -2.7008, -1.7996, -1.3320, 3.1029, -5.7721, 0.3008, -1.0882, 5.6268 );
vec4 LogLuvToLinear( in vec4 value ) {
	float Le = value.z * 255.0 + value.w;
	vec3 Xp_Y_XYZp;
	Xp_Y_XYZp.y = exp2( ( Le - 127.0 ) / 2.0 );
	Xp_Y_XYZp.z = Xp_Y_XYZp.y / value.y;
	Xp_Y_XYZp.x = value.x * Xp_Y_XYZp.z;
	vec3 vRGB = cLogLuvInverseM * Xp_Y_XYZp.rgb;
	return vec4( max( vRGB, 0.0 ), 1.0 );
}`,o0=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
		envColor = envMapTexelToLinear( envColor );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
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
#endif`,a0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform int maxMipLevel;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,l0=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,c0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,u0=`#ifdef USE_ENVMAP
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
#endif`,h0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,f0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,d0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,p0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,m0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return texture2D( gradientMap, coord ).rgb;
	#else
		return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );
	#endif
}`,g0=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		lightMapIrradiance *= PI;
	#endif
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,x0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,y0=`vec3 diffuse = vec3( 1.0 );
GeometricContext geometry;
geometry.position = mvPosition.xyz;
geometry.normal = normalize( transformedNormal );
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );
GeometricContext backGeometry;
backGeometry.position = geometry.position;
backGeometry.normal = -geometry.normal;
backGeometry.viewDir = geometry.viewDir;
vLightFront = vec3( 0.0 );
vIndirectFront = vec3( 0.0 );
#ifdef DOUBLE_SIDED
	vLightBack = vec3( 0.0 );
	vIndirectBack = vec3( 0.0 );
#endif
IncidentLight directLight;
float dotNL;
vec3 directLightColor_Diffuse;
vIndirectFront += getAmbientLightIrradiance( ambientLightColor );
vIndirectFront += getLightProbeIrradiance( lightProbe, geometry.normal );
#ifdef DOUBLE_SIDED
	vIndirectBack += getAmbientLightIrradiance( ambientLightColor );
	vIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry.normal );
#endif
#if NUM_POINT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		getPointLightInfo( pointLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_SPOT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		getSpotLightInfo( spotLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_DIR_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		getDirectionalLightInfo( directionalLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_HEMI_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
		vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		#ifdef DOUBLE_SIDED
			vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry.normal );
		#endif
	}
	#pragma unroll_loop_end
#endif`,_0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
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
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
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
#endif`,v0=`#if defined( USE_ENVMAP )
	#ifdef ENVMAP_MODE_REFRACTION
		uniform float refractionRatio;
	#endif
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec;
			#ifdef ENVMAP_MODE_REFLECTION
				reflectVec = reflect( - viewDir, normal );
				reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			#else
				reflectVec = refract( - viewDir, normal, refractionRatio );
			#endif
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,b0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,M0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,w0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,S0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,T0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= specularColorMapTexelToLinear( texture2D( specularColorMap, vUv ) ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( ior - 1.0 ) / ( ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
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
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= sheenColorMapTexelToLinear( texture2D( sheenColorMap, vUv ) ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,E0=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
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
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	vec3 FssEss = specularColor * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = specularColor + ( 1.0 - specularColor ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
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
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		reflectedLight.directSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	vec3 diffuse = material.diffuseColor * ( 1.0 - ( singleScattering + multiScattering ) );
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
}`,A0=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
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
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,L0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
		#ifndef PHYSICALLY_CORRECT_LIGHTS
			lightMapIrradiance *= PI;
		#endif
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,C0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,R0=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,P0=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,I0=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,D0=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,N0=`#ifdef USE_MAP
	vec4 texelColor = texture2D( map, vUv );
	texelColor = mapTexelToLinear( texelColor );
	diffuseColor *= texelColor;
#endif`,F0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,B0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	vec4 mapTexel = texture2D( map, uv );
	diffuseColor *= mapTexelToLinear( mapTexel );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,O0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,z0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,U0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,H0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] > 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1, 2 ) * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,k0=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform vec2 morphTargetsTextureSize;
		vec3 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset, const in int stride ) {
			float texelIndex = float( vertexIndex * stride + offset );
			float y = floor( texelIndex / morphTargetsTextureSize.x );
			float x = texelIndex - y * morphTargetsTextureSize.x;
			vec3 morphUV = vec3( ( x + 0.5 ) / morphTargetsTextureSize.x, y / morphTargetsTextureSize.y, morphTargetIndex );
			return texture( morphTargetsTexture, morphUV ).xyz;
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,V0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			#ifndef USE_MORPHNORMALS
				if ( morphTargetInfluences[ i ] > 0.0 ) transformed += getMorph( gl_VertexID, i, 0, 1 ) * morphTargetInfluences[ i ];
			#else
				if ( morphTargetInfluences[ i ] > 0.0 ) transformed += getMorph( gl_VertexID, i, 0, 2 ) * morphTargetInfluences[ i ];
			#endif
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,G0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,W0=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,q0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,j0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,X0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Y0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );
		vec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,Z0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,J0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,$0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,K0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Q0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,ey=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ty=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ny=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,iy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ry=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,sy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,oy=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
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
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
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
		return shadow;
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
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
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,ay=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,ly=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );
		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;
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
#endif`,cy=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,uy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,hy=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	#ifdef BONE_TEXTURE
		uniform highp sampler2D boneTexture;
		uniform int boneTextureSize;
		mat4 getBoneMatrix( const in float i ) {
			float j = i * 4.0;
			float x = mod( j, float( boneTextureSize ) );
			float y = floor( j / float( boneTextureSize ) );
			float dx = 1.0 / float( boneTextureSize );
			float dy = 1.0 / float( boneTextureSize );
			y = dy * ( y + 0.5 );
			vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
			vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
			vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
			vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
			mat4 bone = mat4( v1, v2, v3, v4 );
			return bone;
		}
	#else
		uniform mat4 boneMatrices[ MAX_BONES ];
		mat4 getBoneMatrix( const in float i ) {
			mat4 bone = boneMatrices[ int(i) ];
			return bone;
		}
	#endif
#endif`,fy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,dy=`#ifdef USE_SKINNING
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
#endif`,py=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,my=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,gy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,xy=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,yy=`#ifdef USE_TRANSMISSION
	float transmissionAlpha = 1.0;
	float transmissionFactor = transmission;
	float thicknessFactor = thickness;
	#ifdef USE_TRANSMISSIONMAP
		transmissionFactor *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		thicknessFactor *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, roughnessFactor, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, ior, thicknessFactor,
		attenuationColor, attenuationDistance );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, transmissionFactor );
	transmissionAlpha = mix( transmissionAlpha, transmission.a, transmissionFactor );
#endif`,_y=`#ifdef USE_TRANSMISSION
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
	vec3 getVolumeTransmissionRay( vec3 n, vec3 v, float thickness, float ior, mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( float roughness, float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( vec2 fragCoord, float roughness, float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef TEXTURE_LOD_EXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( vec3 radiance, float transmissionDistance, vec3 attenuationColor, float attenuationDistance ) {
		if ( attenuationDistance == 0.0 ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( vec3 n, vec3 v, float roughness, vec3 diffuseColor, vec3 specularColor, float specularF90,
		vec3 position, mat4 modelMatrix, mat4 viewMatrix, mat4 projMatrix, float ior, float thickness,
		vec3 attenuationColor, float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,vy=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,by=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,My=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,wy=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,Sy=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,Ty=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,Ey=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ay=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ly=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	gl_FragColor = mapTexelToLinear( texColor );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Cy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ry=`#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Py=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,Iy=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Dy=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,Ny=`#define DISTANCE
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
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Fy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,By=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	vec4 texColor = texture2D( tEquirect, sampleUV );
	gl_FragColor = mapTexelToLinear( texColor );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Oy=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,zy=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Uy=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
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
}`,Hy=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel= texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ky=`#define LAMBERT
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <bsdfs>
#include <lights_pars_begin>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <lights_lambert_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Vy=`uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <fog_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <emissivemap_fragment>
	#ifdef DOUBLE_SIDED
		reflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;
	#else
		reflectedLight.indirectDiffuse += vIndirectFront;
	#endif
	#include <lightmap_fragment>
	reflectedLight.indirectDiffuse *= BRDF_Lambert( diffuseColor.rgb );
	#ifdef DOUBLE_SIDED
		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;
	#else
		reflectedLight.directDiffuse = vLightFront;
	#endif
	reflectedLight.directDiffuse *= BRDF_Lambert( diffuseColor.rgb ) * getShadowMask();
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gy=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
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
}`,Wy=`#define MATCAP
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
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
		matcapColor = matcapTexelToLinear( matcapColor );
	#else
		vec4 matcapColor = vec4( 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qy=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,jy=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
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
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
}`,Xy=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
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
}`,Yy=`#define PHONG
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
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zy=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
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
}`,Jy=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
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
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - clearcoat * Fcc ) + clearcoatSpecular * clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$y=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
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
}`,Ky=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qy=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
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
}`,e_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,t_=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,n_=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,i_=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,r_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Ne={alphamap_fragment:Dx,alphamap_pars_fragment:Nx,alphatest_fragment:Fx,alphatest_pars_fragment:Bx,aomap_fragment:Ox,aomap_pars_fragment:zx,begin_vertex:Ux,beginnormal_vertex:Hx,bsdfs:kx,bumpmap_pars_fragment:Vx,clipping_planes_fragment:Gx,clipping_planes_pars_fragment:Wx,clipping_planes_pars_vertex:qx,clipping_planes_vertex:jx,color_fragment:Xx,color_pars_fragment:Yx,color_pars_vertex:Zx,color_vertex:Jx,common:$x,cube_uv_reflection_fragment:Kx,defaultnormal_vertex:Qx,displacementmap_pars_vertex:e0,displacementmap_vertex:t0,emissivemap_fragment:n0,emissivemap_pars_fragment:i0,encodings_fragment:r0,encodings_pars_fragment:s0,envmap_fragment:o0,envmap_common_pars_fragment:a0,envmap_pars_fragment:l0,envmap_pars_vertex:c0,envmap_physical_pars_fragment:v0,envmap_vertex:u0,fog_vertex:h0,fog_pars_vertex:f0,fog_fragment:d0,fog_pars_fragment:p0,gradientmap_pars_fragment:m0,lightmap_fragment:g0,lightmap_pars_fragment:x0,lights_lambert_vertex:y0,lights_pars_begin:_0,lights_toon_fragment:b0,lights_toon_pars_fragment:M0,lights_phong_fragment:w0,lights_phong_pars_fragment:S0,lights_physical_fragment:T0,lights_physical_pars_fragment:E0,lights_fragment_begin:A0,lights_fragment_maps:L0,lights_fragment_end:C0,logdepthbuf_fragment:R0,logdepthbuf_pars_fragment:P0,logdepthbuf_pars_vertex:I0,logdepthbuf_vertex:D0,map_fragment:N0,map_pars_fragment:F0,map_particle_fragment:B0,map_particle_pars_fragment:O0,metalnessmap_fragment:z0,metalnessmap_pars_fragment:U0,morphnormal_vertex:H0,morphtarget_pars_vertex:k0,morphtarget_vertex:V0,normal_fragment_begin:G0,normal_fragment_maps:W0,normal_pars_fragment:q0,normal_pars_vertex:j0,normal_vertex:X0,normalmap_pars_fragment:Y0,clearcoat_normal_fragment_begin:Z0,clearcoat_normal_fragment_maps:J0,clearcoat_pars_fragment:$0,output_fragment:K0,packing:Q0,premultiplied_alpha_fragment:ey,project_vertex:ty,dithering_fragment:ny,dithering_pars_fragment:iy,roughnessmap_fragment:ry,roughnessmap_pars_fragment:sy,shadowmap_pars_fragment:oy,shadowmap_pars_vertex:ay,shadowmap_vertex:ly,shadowmask_pars_fragment:cy,skinbase_vertex:uy,skinning_pars_vertex:hy,skinning_vertex:fy,skinnormal_vertex:dy,specularmap_fragment:py,specularmap_pars_fragment:my,tonemapping_fragment:gy,tonemapping_pars_fragment:xy,transmission_fragment:yy,transmission_pars_fragment:_y,uv_pars_fragment:vy,uv_pars_vertex:by,uv_vertex:My,uv2_pars_fragment:wy,uv2_pars_vertex:Sy,uv2_vertex:Ty,worldpos_vertex:Ey,background_vert:Ay,background_frag:Ly,cube_vert:Cy,cube_frag:Ry,depth_vert:Py,depth_frag:Iy,distanceRGBA_vert:Dy,distanceRGBA_frag:Ny,equirect_vert:Fy,equirect_frag:By,linedashed_vert:Oy,linedashed_frag:zy,meshbasic_vert:Uy,meshbasic_frag:Hy,meshlambert_vert:ky,meshlambert_frag:Vy,meshmatcap_vert:Gy,meshmatcap_frag:Wy,meshnormal_vert:qy,meshnormal_frag:jy,meshphong_vert:Xy,meshphong_frag:Yy,meshphysical_vert:Zy,meshphysical_frag:Jy,meshtoon_vert:$y,meshtoon_frag:Ky,points_vert:Qy,points_frag:e_,shadow_vert:t_,shadow_frag:n_,sprite_vert:i_,sprite_frag:r_},Me={common:{diffuse:{value:new we(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Ke},uv2Transform:{value:new Ke},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},maxMipLevel:{value:0}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new oe(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new we(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new we(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Ke}},sprite:{diffuse:{value:new we(16777215)},opacity:{value:1},center:{value:new oe(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Ke}}},tn={basic:{uniforms:_t([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.fog]),vertexShader:Ne.meshbasic_vert,fragmentShader:Ne.meshbasic_frag},lambert:{uniforms:_t([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.fog,Me.lights,{emissive:{value:new we(0)}}]),vertexShader:Ne.meshlambert_vert,fragmentShader:Ne.meshlambert_frag},phong:{uniforms:_t([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new we(0)},specular:{value:new we(1118481)},shininess:{value:30}}]),vertexShader:Ne.meshphong_vert,fragmentShader:Ne.meshphong_frag},standard:{uniforms:_t([Me.common,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.roughnessmap,Me.metalnessmap,Me.fog,Me.lights,{emissive:{value:new we(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ne.meshphysical_vert,fragmentShader:Ne.meshphysical_frag},toon:{uniforms:_t([Me.common,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.gradientmap,Me.fog,Me.lights,{emissive:{value:new we(0)}}]),vertexShader:Ne.meshtoon_vert,fragmentShader:Ne.meshtoon_frag},matcap:{uniforms:_t([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,{matcap:{value:null}}]),vertexShader:Ne.meshmatcap_vert,fragmentShader:Ne.meshmatcap_frag},points:{uniforms:_t([Me.points,Me.fog]),vertexShader:Ne.points_vert,fragmentShader:Ne.points_frag},dashed:{uniforms:_t([Me.common,Me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ne.linedashed_vert,fragmentShader:Ne.linedashed_frag},depth:{uniforms:_t([Me.common,Me.displacementmap]),vertexShader:Ne.depth_vert,fragmentShader:Ne.depth_frag},normal:{uniforms:_t([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,{opacity:{value:1}}]),vertexShader:Ne.meshnormal_vert,fragmentShader:Ne.meshnormal_frag},sprite:{uniforms:_t([Me.sprite,Me.fog]),vertexShader:Ne.sprite_vert,fragmentShader:Ne.sprite_frag},background:{uniforms:{uvTransform:{value:new Ke},t2D:{value:null}},vertexShader:Ne.background_vert,fragmentShader:Ne.background_frag},cube:{uniforms:_t([Me.envmap,{opacity:{value:1}}]),vertexShader:Ne.cube_vert,fragmentShader:Ne.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ne.equirect_vert,fragmentShader:Ne.equirect_frag},distanceRGBA:{uniforms:_t([Me.common,Me.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ne.distanceRGBA_vert,fragmentShader:Ne.distanceRGBA_frag},shadow:{uniforms:_t([Me.lights,Me.fog,{color:{value:new we(0)},opacity:{value:1}}]),vertexShader:Ne.shadow_vert,fragmentShader:Ne.shadow_frag}};tn.physical={uniforms:_t([tn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new oe(1,1)},clearcoatNormalMap:{value:null},sheen:{value:0},sheenColor:{value:new we(0)},sheenColorMap:{value:null},sheenRoughness:{value:0},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new oe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new we(0)},specularIntensity:{value:0},specularIntensityMap:{value:null},specularColor:{value:new we(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Ne.meshphysical_vert,fragmentShader:Ne.meshphysical_frag};function s_(i,e,t,n,r){const s=new we(0);let o=0,a,l,c=null,u=0,h=null;function f(x,y){let v=!1,p=y.isScene===!0?y.background:null;p&&p.isTexture&&(p=e.get(p));const g=i.xr,A=g.getSession&&g.getSession();A&&A.environmentBlendMode==="additive"&&(p=null),p===null?m(s,o):p&&p.isColor&&(m(p,1),v=!0),(i.autoClear||v)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),p&&(p.isCubeTexture||p.mapping===Ls)?(l===void 0&&(l=new At(new Fr(1,1,1),new ai({name:"BackgroundCubeMaterial",uniforms:Xi(tn.cube.uniforms),vertexShader:tn.cube.vertexShader,fragmentShader:tn.cube.fragmentShader,side:ot,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(b,E,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=p,l.material.uniforms.flipEnvMap.value=p.isCubeTexture&&p.isRenderTargetTexture===!1?-1:1,(c!==p||u!==p.version||h!==i.toneMapping)&&(l.material.needsUpdate=!0,c=p,u=p.version,h=i.toneMapping),x.unshift(l,l.geometry,l.material,0,0,null)):p&&p.isTexture&&(a===void 0&&(a=new At(new il(2,2),new ai({name:"BackgroundMaterial",uniforms:Xi(tn.background.uniforms),vertexShader:tn.background.vertexShader,fragmentShader:tn.background.fragmentShader,side:Sr,depthTest:!1,depthWrite:!1,fog:!1})),a.geometry.deleteAttribute("normal"),Object.defineProperty(a.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(a)),a.material.uniforms.t2D.value=p,p.matrixAutoUpdate===!0&&p.updateMatrix(),a.material.uniforms.uvTransform.value.copy(p.matrix),(c!==p||u!==p.version||h!==i.toneMapping)&&(a.material.needsUpdate=!0,c=p,u=p.version,h=i.toneMapping),x.unshift(a,a.geometry,a.material,0,0,null))}function m(x,y){t.buffers.color.setClear(x.r,x.g,x.b,y,r)}return{getClearColor:function(){return s},setClearColor:function(x,y=1){s.set(x),o=y,m(s,o)},getClearAlpha:function(){return o},setClearAlpha:function(x){o=x,m(s,o)},render:f}}function o_(i,e,t,n){const r=i.getParameter(34921),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},l=y(null);let c=l;function u(J,$,ee,K,V){let q=!1;if(o){const xe=x(K,ee,$);c!==xe&&(c=xe,f(c.object)),q=v(K,V),q&&p(K,V)}else{const xe=$.wireframe===!0;(c.geometry!==K.id||c.program!==ee.id||c.wireframe!==xe)&&(c.geometry=K.id,c.program=ee.id,c.wireframe=xe,q=!0)}J.isInstancedMesh===!0&&(q=!0),V!==null&&t.update(V,34963),q&&(M(J,$,ee,K),V!==null&&i.bindBuffer(34963,t.get(V).buffer))}function h(){return n.isWebGL2?i.createVertexArray():s.createVertexArrayOES()}function f(J){return n.isWebGL2?i.bindVertexArray(J):s.bindVertexArrayOES(J)}function m(J){return n.isWebGL2?i.deleteVertexArray(J):s.deleteVertexArrayOES(J)}function x(J,$,ee){const K=ee.wireframe===!0;let V=a[J.id];V===void 0&&(V={},a[J.id]=V);let q=V[$.id];q===void 0&&(q={},V[$.id]=q);let xe=q[K];return xe===void 0&&(xe=y(h()),q[K]=xe),xe}function y(J){const $=[],ee=[],K=[];for(let V=0;V<r;V++)$[V]=0,ee[V]=0,K[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:$,enabledAttributes:ee,attributeDivisors:K,object:J,attributes:{},index:null}}function v(J,$){const ee=c.attributes,K=J.attributes;let V=0;for(const q in K){const xe=ee[q],be=K[q];if(xe===void 0||xe.attribute!==be||xe.data!==be.data)return!0;V++}return c.attributesNum!==V||c.index!==$}function p(J,$){const ee={},K=J.attributes;let V=0;for(const q in K){const xe=K[q],be={};be.attribute=xe,xe.data&&(be.data=xe.data),ee[q]=be,V++}c.attributes=ee,c.attributesNum=V,c.index=$}function g(){const J=c.newAttributes;for(let $=0,ee=J.length;$<ee;$++)J[$]=0}function A(J){b(J,0)}function b(J,$){const ee=c.newAttributes,K=c.enabledAttributes,V=c.attributeDivisors;ee[J]=1,K[J]===0&&(i.enableVertexAttribArray(J),K[J]=1),V[J]!==$&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](J,$),V[J]=$)}function E(){const J=c.newAttributes,$=c.enabledAttributes;for(let ee=0,K=$.length;ee<K;ee++)$[ee]!==J[ee]&&(i.disableVertexAttribArray(ee),$[ee]=0)}function I(J,$,ee,K,V,q){n.isWebGL2===!0&&(ee===5124||ee===5125)?i.vertexAttribIPointer(J,$,ee,V,q):i.vertexAttribPointer(J,$,ee,K,V,q)}function M(J,$,ee,K){if(n.isWebGL2===!1&&(J.isInstancedMesh||K.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;g();const V=K.attributes,q=ee.getAttributes(),xe=$.defaultAttributeValues;for(const be in q){const ve=q[be];if(ve.location>=0){let X=V[be];if(X===void 0&&(be==="instanceMatrix"&&J.instanceMatrix&&(X=J.instanceMatrix),be==="instanceColor"&&J.instanceColor&&(X=J.instanceColor)),X!==void 0){const C=X.normalized,L=X.itemSize,k=t.get(X);if(k===void 0)continue;const U=k.buffer,N=k.type,ie=k.bytesPerElement;if(X.isInterleavedBufferAttribute){const ue=X.data,le=ue.stride,ge=X.offset;if(ue&&ue.isInstancedInterleavedBuffer){for(let j=0;j<ve.locationSize;j++)b(ve.location+j,ue.meshPerAttribute);J.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let j=0;j<ve.locationSize;j++)A(ve.location+j);i.bindBuffer(34962,U);for(let j=0;j<ve.locationSize;j++)I(ve.location+j,L/ve.locationSize,N,C,le*ie,(ge+L/ve.locationSize*j)*ie)}else{if(X.isInstancedBufferAttribute){for(let ue=0;ue<ve.locationSize;ue++)b(ve.location+ue,X.meshPerAttribute);J.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let ue=0;ue<ve.locationSize;ue++)A(ve.location+ue);i.bindBuffer(34962,U);for(let ue=0;ue<ve.locationSize;ue++)I(ve.location+ue,L/ve.locationSize,N,C,L*ie,L/ve.locationSize*ue*ie)}}else if(xe!==void 0){const C=xe[be];if(C!==void 0)switch(C.length){case 2:i.vertexAttrib2fv(ve.location,C);break;case 3:i.vertexAttrib3fv(ve.location,C);break;case 4:i.vertexAttrib4fv(ve.location,C);break;default:i.vertexAttrib1fv(ve.location,C)}}}}E()}function z(){F();for(const J in a){const $=a[J];for(const ee in $){const K=$[ee];for(const V in K)m(K[V].object),delete K[V];delete $[ee]}delete a[J]}}function Q(J){if(a[J.id]===void 0)return;const $=a[J.id];for(const ee in $){const K=$[ee];for(const V in K)m(K[V].object),delete K[V];delete $[ee]}delete a[J.id]}function Z(J){for(const $ in a){const ee=a[$];if(ee[J.id]===void 0)continue;const K=ee[J.id];for(const V in K)m(K[V].object),delete K[V];delete ee[J.id]}}function F(){ne(),c!==l&&(c=l,f(c.object))}function ne(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:F,resetDefaultState:ne,dispose:z,releaseStatesOfGeometry:Q,releaseStatesOfProgram:Z,initAttributes:g,enableAttribute:A,disableUnusedAttributes:E}}function a_(i,e,t,n){const r=n.isWebGL2;let s;function o(c){s=c}function a(c,u){i.drawArrays(s,c,u),t.update(u,s,1)}function l(c,u,h){if(h===0)return;let f,m;if(r)f=i,m="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[m](s,c,u,h),t.update(u,s,h)}this.setMode=o,this.render=a,this.renderInstances=l}function l_(i,e,t){let n;function r(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const M=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(M.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(M){if(M==="highp"){if(i.getShaderPrecisionFormat(35633,36338).precision>0&&i.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";M="mediump"}return M==="mediump"&&i.getShaderPrecisionFormat(35633,36337).precision>0&&i.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext!="undefined"&&i instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext!="undefined"&&i instanceof WebGL2ComputeRenderingContext;let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=i.getParameter(34930),f=i.getParameter(35660),m=i.getParameter(3379),x=i.getParameter(34076),y=i.getParameter(34921),v=i.getParameter(36347),p=i.getParameter(36348),g=i.getParameter(36349),A=f>0,b=o||e.has("OES_texture_float"),E=A&&b,I=o?i.getParameter(36183):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:f,maxTextureSize:m,maxCubemapSize:x,maxAttributes:y,maxVertexUniforms:v,maxVaryings:p,maxFragmentUniforms:g,vertexTextures:A,floatFragmentTextures:b,floatVertexTextures:E,maxSamples:I}}function c_(i){const e=this;let t=null,n=0,r=!1,s=!1;const o=new gn,a=new Ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f,m){const x=h.length!==0||f||n!==0||r;return r=f,t=u(h,m,0),n=h.length,x},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1,c()},this.setState=function(h,f,m){const x=h.clippingPlanes,y=h.clipIntersection,v=h.clipShadows,p=i.get(h);if(!r||x===null||x.length===0||s&&!v)s?u(null):c();else{const g=s?0:n,A=g*4;let b=p.clippingState||null;l.value=b,b=u(x,f,A,m);for(let E=0;E!==A;++E)b[E]=t[E];p.clippingState=b,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=g}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,m,x){const y=h!==null?h.length:0;let v=null;if(y!==0){if(v=l.value,x!==!0||v===null){const p=m+y*4,g=f.matrixWorldInverse;a.getNormalMatrix(g),(v===null||v.length<p)&&(v=new Float32Array(p));for(let A=0,b=m;A!==y;++A,b+=4)o.copy(h[A]).applyMatrix4(g,a),o.normal.toArray(v,b),v[b+3]=o.constant}l.value=v,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,v}}function u_(i){let e=new WeakMap;function t(o,a){return a===_a?o.mapping=Er:a===va&&(o.mapping=Ar),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===_a||a===va)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=i.getRenderTarget(),u=new uh(l.height/2);return u.fromEquirectangularTexture(i,o),e.set(o,u),i.setRenderTarget(c),o.addEventListener("dispose",r),t(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class rl extends el{constructor(e=-1,t=1,n=1,r=-1,s=.1,o=2e3){super();this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}rl.prototype.isOrthographicCamera=!0;class io extends ai{constructor(e){super(e);this.type="RawShaderMaterial"}}io.prototype.isRawShaderMaterial=!0;const $i=4,On=8,nn=Math.pow(2,On),fh=[.125,.215,.35,.446,.526,.582],dh=On-$i+1+fh.length,Ki=20,zn={[gt]:0,[ri]:1,[Aa]:2,[Vu]:3,[Gu]:4,[Wu]:5,[Ea]:6},sl=new rl,{_lodPlanes:Br,_sizeLods:ph,_sigmas:ro}=d_(),mh=new we;let ol=null;const li=(1+Math.sqrt(5))/2,Qi=1/li,gh=[new D(1,1,1),new D(-1,1,1),new D(1,1,-1),new D(-1,1,-1),new D(0,li,Qi),new D(0,li,-Qi),new D(Qi,0,li),new D(-Qi,0,li),new D(li,Qi,0),new D(-li,Qi,0)];class h_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._blurMaterial=p_(Ki),this._equirectShader=null,this._cubemapShader=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){ol=this._renderer.getRenderTarget();const s=this._allocateTargets();return this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e){return this._fromTexture(e)}fromCubemap(e){return this._fromTexture(e)}compileCubemapShader(){this._cubemapShader===null&&(this._cubemapShader=_h(),this._compileMaterial(this._cubemapShader))}compileEquirectangularShader(){this._equirectShader===null&&(this._equirectShader=yh(),this._compileMaterial(this._equirectShader))}dispose(){this._blurMaterial.dispose(),this._cubemapShader!==null&&this._cubemapShader.dispose(),this._equirectShader!==null&&this._equirectShader.dispose();for(let e=0;e<Br.length;e++)Br[e].dispose()}_cleanup(e){this._pingPongRenderTarget.dispose(),this._renderer.setRenderTarget(ol),e.scissorTest=!1,so(e,0,0,e.width,e.height)}_fromTexture(e){ol=this._renderer.getRenderTarget();const t=this._allocateTargets(e);return this._textureToCubeUV(e,t),this._applyPMREM(t),this._cleanup(t),t}_allocateTargets(e){const t={magFilter:ct,minFilter:ct,generateMipmaps:!1,type:An,format:yg,encoding:f_(e)?e.encoding:Aa,depthBuffer:!1},n=xh(t);return n.depthBuffer=!e,this._pingPongRenderTarget=xh(t),n}_compileMaterial(e){const t=new At(Br[0],e);this._renderer.compile(t,sl)}_sceneToCubeUV(e,t,n,r){const s=90,o=1,a=new Lt(s,o,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.outputEncoding,m=u.toneMapping;u.getClearColor(mh),u.toneMapping=ii,u.outputEncoding=gt,u.autoClear=!1;const x=new Xa({name:"PMREM.Background",side:ot,depthWrite:!1,depthTest:!1}),y=new At(new Fr,x);let v=!1;const p=e.background;p?p.isColor&&(x.color.copy(p),e.background=null,v=!0):(x.color.copy(mh),v=!0);for(let g=0;g<6;g++){const A=g%3;A==0?(a.up.set(0,l[g],0),a.lookAt(c[g],0,0)):A==1?(a.up.set(0,0,l[g]),a.lookAt(0,c[g],0)):(a.up.set(0,l[g],0),a.lookAt(0,0,c[g])),so(r,A*nn,g>2?nn:0,nn,nn),u.setRenderTarget(r),v&&u.render(y,a),u.render(e,a)}y.geometry.dispose(),y.material.dispose(),u.toneMapping=m,u.outputEncoding=f,u.autoClear=h,e.background=p}_setEncoding(e,t){this._renderer.capabilities.isWebGL2===!0&&t.format===wt&&t.type===An&&t.encoding===ri?e.value=zn[gt]:e.value=zn[t.encoding]}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===Er||e.mapping===Ar;r?this._cubemapShader==null&&(this._cubemapShader=_h()):this._equirectShader==null&&(this._equirectShader=yh());const s=r?this._cubemapShader:this._equirectShader,o=new At(Br[0],s),a=s.uniforms;a.envMap.value=e,r||a.texelSize.value.set(1/e.image.width,1/e.image.height),this._setEncoding(a.inputEncoding,e),this._setEncoding(a.outputEncoding,t.texture),so(t,0,0,3*nn,2*nn),n.setRenderTarget(t),n.render(o,sl)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let r=1;r<dh;r++){const s=Math.sqrt(ro[r]*ro[r]-ro[r-1]*ro[r-1]),o=gh[(r-1)%gh.length];this._blur(e,r-1,r,s,o)}t.autoClear=n}_blur(e,t,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,r,"latitudinal",s),this._halfBlur(o,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new At(Br[r],c),f=c.uniforms,m=ph[n]-1,x=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Ki-1),y=s/x,v=isFinite(s)?1+Math.floor(u*y):Ki;v>Ki&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${v} samples when the maximum is set to ${Ki}`);const p=[];let g=0;for(let I=0;I<Ki;++I){const M=I/y,z=Math.exp(-M*M/2);p.push(z),I==0?g+=z:I<v&&(g+=2*z)}for(let I=0;I<p.length;I++)p[I]=p[I]/g;f.envMap.value=e.texture,f.samples.value=v,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a),f.dTheta.value=x,f.mipInt.value=On-n,this._setEncoding(f.inputEncoding,e.texture),this._setEncoding(f.outputEncoding,e.texture);const A=ph[r],b=3*Math.max(0,nn-2*A),E=(r===0?0:2*nn)+2*A*(r>On-$i?r-On+$i:0);so(t,b,E,3*A,2*A),l.setRenderTarget(t),l.render(h,sl)}}function f_(i){return i===void 0||i.type!==An?!1:i.encoding===gt||i.encoding===ri||i.encoding===Ea}function d_(){const i=[],e=[],t=[];let n=On;for(let r=0;r<dh;r++){const s=Math.pow(2,n);e.push(s);let o=1/s;r>On-$i?o=fh[r-On+$i-1]:r==0&&(o=0),t.push(o);const a=1/(s-1),l=-a/2,c=1+a/2,u=[l,l,c,l,c,c,l,l,c,c,l,c],h=6,f=6,m=3,x=2,y=1,v=new Float32Array(m*f*h),p=new Float32Array(x*f*h),g=new Float32Array(y*f*h);for(let b=0;b<h;b++){const E=b%3*2/3-1,I=b>2?0:-1,M=[E,I,0,E+2/3,I,0,E+2/3,I+1,0,E,I,0,E+2/3,I+1,0,E,I+1,0];v.set(M,m*f*b),p.set(u,x*f*b);const z=[b,b,b,b,b,b];g.set(z,y*f*b)}const A=new Xe;A.setAttribute("position",new at(v,m)),A.setAttribute("uv",new at(p,x)),A.setAttribute("faceIndex",new at(g,y)),i.push(A),n>$i&&n--}return{_lodPlanes:i,_sizeLods:e,_sigmas:t}}function xh(i){const e=new en(3*nn,3*nn,i);return e.texture.mapping=Ls,e.texture.name="PMREM.cubeUv",e.scissorTest=!0,e}function so(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function p_(i){const e=new Float32Array(i),t=new D(0,1,0);return new io({name:"SphericalGaussianBlur",defines:{n:i},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:e},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:t},inputEncoding:{value:zn[gt]},outputEncoding:{value:zn[gt]}},vertexShader:al(),fragmentShader:`

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

			${ll()}

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

				gl_FragColor = linearToOutputTexel( gl_FragColor );

			}
		`,blending:En,depthTest:!1,depthWrite:!1})}function yh(){const i=new oe(1,1);return new io({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null},texelSize:{value:i},inputEncoding:{value:zn[gt]},outputEncoding:{value:zn[gt]}},vertexShader:al(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform vec2 texelSize;

			${ll()}

			#include <common>

			void main() {

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				vec2 f = fract( uv / texelSize - 0.5 );
				uv -= f * texelSize;
				vec3 tl = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;
				uv.x += texelSize.x;
				vec3 tr = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;
				uv.y += texelSize.y;
				vec3 br = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;
				uv.x -= texelSize.x;
				vec3 bl = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;

				vec3 tm = mix( tl, tr, f.x );
				vec3 bm = mix( bl, br, f.x );
				gl_FragColor.rgb = mix( tm, bm, f.y );

				gl_FragColor = linearToOutputTexel( gl_FragColor );

			}
		`,blending:En,depthTest:!1,depthWrite:!1})}function _h(){return new io({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},inputEncoding:{value:zn[gt]},outputEncoding:{value:zn[gt]}},vertexShader:al(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			${ll()}

			void main() {

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb = envMapTexelToLinear( textureCube( envMap, vec3( - vOutputDirection.x, vOutputDirection.yz ) ) ).rgb;
				gl_FragColor = linearToOutputTexel( gl_FragColor );

			}
		`,blending:En,depthTest:!1,depthWrite:!1})}function al(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 position;
		attribute vec2 uv;
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
	`}function ll(){return`

		uniform int inputEncoding;
		uniform int outputEncoding;

		#include <encodings_pars_fragment>

		vec4 inputTexelToLinear( vec4 value ) {

			if ( inputEncoding == 0 ) {

				return value;

			} else if ( inputEncoding == 1 ) {

				return sRGBToLinear( value );

			} else if ( inputEncoding == 2 ) {

				return RGBEToLinear( value );

			} else if ( inputEncoding == 3 ) {

				return RGBMToLinear( value, 7.0 );

			} else if ( inputEncoding == 4 ) {

				return RGBMToLinear( value, 16.0 );

			} else if ( inputEncoding == 5 ) {

				return RGBDToLinear( value, 256.0 );

			} else {

				return GammaToLinear( value, 2.2 );

			}

		}

		vec4 linearToOutputTexel( vec4 value ) {

			if ( outputEncoding == 0 ) {

				return value;

			} else if ( outputEncoding == 1 ) {

				return LinearTosRGB( value );

			} else if ( outputEncoding == 2 ) {

				return LinearToRGBE( value );

			} else if ( outputEncoding == 3 ) {

				return LinearToRGBM( value, 7.0 );

			} else if ( outputEncoding == 4 ) {

				return LinearToRGBM( value, 16.0 );

			} else if ( outputEncoding == 5 ) {

				return LinearToRGBD( value, 256.0 );

			} else {

				return LinearToGamma( value, 2.2 );

			}

		}

		vec4 envMapTexelToLinear( vec4 color ) {

			return inputTexelToLinear( color );

		}
	`}function m_(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const l=a.mapping,c=l===_a||l===va,u=l===Er||l===Ar;if(c||u){if(e.has(a))return e.get(a).texture;{const h=a.image;if(c&&h&&h.height>0||u&&h&&r(h)){const f=i.getRenderTarget();t===null&&(t=new h_(i));const m=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,m),i.setRenderTarget(f),a.addEventListener("dispose",s),m.texture}else return null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function g_(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float")},get:function(n){const r=t(n);return r===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function x_(i,e,t,n){const r={},s=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const x in f.attributes)e.remove(f.attributes[x]);f.removeEventListener("dispose",o),delete r[f.id];const m=s.get(f);m&&(e.remove(m),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const x in f)e.update(f[x],34962);const m=h.morphAttributes;for(const x in m){const y=m[x];for(let v=0,p=y.length;v<p;v++)e.update(y[v],34962)}}function c(h){const f=[],m=h.index,x=h.attributes.position;let y=0;if(m!==null){const g=m.array;y=m.version;for(let A=0,b=g.length;A<b;A+=3){const E=g[A+0],I=g[A+1],M=g[A+2];f.push(E,I,I,M,M,E)}}else{const g=x.array;y=x.version;for(let A=0,b=g.length/3-1;A<b;A+=3){const E=A+0,I=A+1,M=A+2;f.push(E,I,I,M,M,E)}}const v=new(Xu(f)>65535?lh:ah)(f,1);v.version=y;const p=s.get(h);p&&e.remove(p),s.set(h,v)}function u(h){const f=s.get(h);if(f){const m=h.index;m!==null&&f.version<m.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function y_(i,e,t,n){const r=n.isWebGL2;let s;function o(f){s=f}let a,l;function c(f){a=f.type,l=f.bytesPerElement}function u(f,m){i.drawElements(s,m,a,f*l),t.update(m,s,1)}function h(f,m,x){if(x===0)return;let y,v;if(r)y=i,v="drawElementsInstanced";else if(y=e.get("ANGLE_instanced_arrays"),v="drawElementsInstancedANGLE",y===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}y[v](s,m,a,f*l,x),t.update(m,s,x)}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=h}function __(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case 4:t.triangles+=a*(s/3);break;case 1:t.lines+=a*(s/2);break;case 3:t.lines+=a*(s-1);break;case 2:t.lines+=a*s;break;case 0:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}class cl extends dt{constructor(e=null,t=1,n=1,r=1){super(null);this.image={data:e,width:t,height:n,depth:r},this.magFilter=ct,this.minFilter=ct,this.wrapR=Pt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.needsUpdate=!0}}cl.prototype.isDataTexture2DArray=!0;function v_(i,e){return i[0]-e[0]}function b_(i,e){return Math.abs(e[1])-Math.abs(i[1])}function vh(i,e){let t=1;const n=e.isInterleavedBufferAttribute?e.data.array:e.array;n instanceof Int8Array?t=127:n instanceof Int16Array?t=32767:n instanceof Int32Array?t=2147483647:console.error("THREE.WebGLMorphtargets: Unsupported morph attribute data type: ",n),i.divideScalar(t)}function M_(i,e,t){const n={},r=new Float32Array(8),s=new WeakMap,o=new D,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,h,f){const m=c.morphTargetInfluences;if(e.isWebGL2===!0){const x=u.morphAttributes.position.length;let y=s.get(u);if(y===void 0||y.count!==x){y!==void 0&&y.texture.dispose();const g=u.morphAttributes.normal!==void 0,A=u.morphAttributes.position,b=u.morphAttributes.normal||[],E=u.attributes.position.count,I=g===!0?2:1;let M=E*I,z=1;M>e.maxTextureSize&&(z=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);const Q=new Float32Array(M*z*4*x),Z=new cl(Q,M,z,x);Z.format=wt,Z.type=Ln;const F=I*4;for(let ne=0;ne<x;ne++){const J=A[ne],$=b[ne],ee=M*z*4*ne;for(let K=0;K<J.count;K++){o.fromBufferAttribute(J,K),J.normalized===!0&&vh(o,J);const V=K*F;Q[ee+V+0]=o.x,Q[ee+V+1]=o.y,Q[ee+V+2]=o.z,Q[ee+V+3]=0,g===!0&&(o.fromBufferAttribute($,K),$.normalized===!0&&vh(o,$),Q[ee+V+4]=o.x,Q[ee+V+5]=o.y,Q[ee+V+6]=o.z,Q[ee+V+7]=0)}}y={count:x,texture:Z,size:new oe(M,z)},s.set(u,y)}let v=0;for(let g=0;g<m.length;g++)v+=m[g];const p=u.morphTargetsRelative?1:1-v;f.getUniforms().setValue(i,"morphTargetBaseInfluence",p),f.getUniforms().setValue(i,"morphTargetInfluences",m),f.getUniforms().setValue(i,"morphTargetsTexture",y.texture,t),f.getUniforms().setValue(i,"morphTargetsTextureSize",y.size)}else{const x=m===void 0?0:m.length;let y=n[u.id];if(y===void 0||y.length!==x){y=[];for(let b=0;b<x;b++)y[b]=[b,0];n[u.id]=y}for(let b=0;b<x;b++){const E=y[b];E[0]=b,E[1]=m[b]}y.sort(b_);for(let b=0;b<8;b++)b<x&&y[b][1]?(a[b][0]=y[b][0],a[b][1]=y[b][1]):(a[b][0]=Number.MAX_SAFE_INTEGER,a[b][1]=0);a.sort(v_);const v=u.morphAttributes.position,p=u.morphAttributes.normal;let g=0;for(let b=0;b<8;b++){const E=a[b],I=E[0],M=E[1];I!==Number.MAX_SAFE_INTEGER&&M?(v&&u.getAttribute("morphTarget"+b)!==v[I]&&u.setAttribute("morphTarget"+b,v[I]),p&&u.getAttribute("morphNormal"+b)!==p[I]&&u.setAttribute("morphNormal"+b,p[I]),r[b]=M,g+=M):(v&&u.hasAttribute("morphTarget"+b)===!0&&u.deleteAttribute("morphTarget"+b),p&&u.hasAttribute("morphNormal"+b)===!0&&u.deleteAttribute("morphNormal"+b),r[b]=0)}const A=u.morphTargetsRelative?1:1-g;f.getUniforms().setValue(i,"morphTargetBaseInfluence",A),f.getUniforms().setValue(i,"morphTargetInfluences",r)}}return{update:l}}function w_(i,e,t,n){let r=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);return r.get(h)!==c&&(e.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),h}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}class bh extends dt{constructor(e=null,t=1,n=1,r=1){super(null);this.image={data:e,width:t,height:n,depth:r},this.magFilter=ct,this.minFilter=ct,this.wrapR=Pt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.needsUpdate=!0}}bh.prototype.isDataTexture3D=!0;const Mh=new dt,S_=new cl,T_=new bh,wh=new eo,Sh=[],Th=[],Eh=new Float32Array(16),Ah=new Float32Array(9),Lh=new Float32Array(4);function er(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=Sh[r];if(s===void 0&&(s=new Float32Array(r),Sh[r]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(s,a)}return s}function St(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function vt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Ch(i,e){let t=Th[e];t===void 0&&(t=new Int32Array(e),Th[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function E_(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function A_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;i.uniform2fv(this.addr,e),vt(t,e)}}function L_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(St(t,e))return;i.uniform3fv(this.addr,e),vt(t,e)}}function C_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;i.uniform4fv(this.addr,e),vt(t,e)}}function R_(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(St(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),vt(t,e)}else{if(St(t,n))return;Lh.set(n),i.uniformMatrix2fv(this.addr,!1,Lh),vt(t,n)}}function P_(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(St(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),vt(t,e)}else{if(St(t,n))return;Ah.set(n),i.uniformMatrix3fv(this.addr,!1,Ah),vt(t,n)}}function I_(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(St(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),vt(t,e)}else{if(St(t,n))return;Eh.set(n),i.uniformMatrix4fv(this.addr,!1,Eh),vt(t,n)}}function D_(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function N_(i,e){const t=this.cache;St(t,e)||(i.uniform2iv(this.addr,e),vt(t,e))}function F_(i,e){const t=this.cache;St(t,e)||(i.uniform3iv(this.addr,e),vt(t,e))}function B_(i,e){const t=this.cache;St(t,e)||(i.uniform4iv(this.addr,e),vt(t,e))}function O_(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function z_(i,e){const t=this.cache;St(t,e)||(i.uniform2uiv(this.addr,e),vt(t,e))}function U_(i,e){const t=this.cache;St(t,e)||(i.uniform3uiv(this.addr,e),vt(t,e))}function H_(i,e){const t=this.cache;St(t,e)||(i.uniform4uiv(this.addr,e),vt(t,e))}function k_(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.safeSetTexture2D(e||Mh,r)}function V_(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||T_,r)}function G_(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.safeSetTextureCube(e||wh,r)}function W_(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||S_,r)}function q_(i){switch(i){case 5126:return E_;case 35664:return A_;case 35665:return L_;case 35666:return C_;case 35674:return R_;case 35675:return P_;case 35676:return I_;case 5124:case 35670:return D_;case 35667:case 35671:return N_;case 35668:case 35672:return F_;case 35669:case 35673:return B_;case 5125:return O_;case 36294:return z_;case 36295:return U_;case 36296:return H_;case 35678:case 36198:case 36298:case 36306:case 35682:return k_;case 35679:case 36299:case 36307:return V_;case 35680:case 36300:case 36308:case 36293:return G_;case 36289:case 36303:case 36311:case 36292:return W_}}function j_(i,e){i.uniform1fv(this.addr,e)}function X_(i,e){const t=er(e,this.size,2);i.uniform2fv(this.addr,t)}function Y_(i,e){const t=er(e,this.size,3);i.uniform3fv(this.addr,t)}function Z_(i,e){const t=er(e,this.size,4);i.uniform4fv(this.addr,t)}function J_(i,e){const t=er(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function $_(i,e){const t=er(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function K_(i,e){const t=er(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Q_(i,e){i.uniform1iv(this.addr,e)}function ev(i,e){i.uniform2iv(this.addr,e)}function tv(i,e){i.uniform3iv(this.addr,e)}function nv(i,e){i.uniform4iv(this.addr,e)}function iv(i,e){i.uniform1uiv(this.addr,e)}function rv(i,e){i.uniform2uiv(this.addr,e)}function sv(i,e){i.uniform3uiv(this.addr,e)}function ov(i,e){i.uniform4uiv(this.addr,e)}function av(i,e,t){const n=e.length,r=Ch(t,n);i.uniform1iv(this.addr,r);for(let s=0;s!==n;++s)t.safeSetTexture2D(e[s]||Mh,r[s])}function lv(i,e,t){const n=e.length,r=Ch(t,n);i.uniform1iv(this.addr,r);for(let s=0;s!==n;++s)t.safeSetTextureCube(e[s]||wh,r[s])}function cv(i){switch(i){case 5126:return j_;case 35664:return X_;case 35665:return Y_;case 35666:return Z_;case 35674:return J_;case 35675:return $_;case 35676:return K_;case 5124:case 35670:return Q_;case 35667:case 35671:return ev;case 35668:case 35672:return tv;case 35669:case 35673:return nv;case 5125:return iv;case 36294:return rv;case 36295:return sv;case 36296:return ov;case 35678:case 36198:case 36298:case 36306:case 35682:return av;case 35680:case 36300:case 36308:case 36293:return lv}}function uv(i,e,t){this.id=i,this.addr=t,this.cache=[],this.setValue=q_(e.type)}function Rh(i,e,t){this.id=i,this.addr=t,this.cache=[],this.size=e.size,this.setValue=cv(e.type)}Rh.prototype.updateCache=function(i){const e=this.cache;i instanceof Float32Array&&e.length!==i.length&&(this.cache=new Float32Array(i.length)),vt(e,i)};function Ph(i){this.id=i,this.seq=[],this.map={}}Ph.prototype.setValue=function(i,e,t){const n=this.seq;for(let r=0,s=n.length;r!==s;++r){const o=n[r];o.setValue(i,e[o.id],t)}};const ul=/(\w+)(\])?(\[|\.)?/g;function Ih(i,e){i.seq.push(e),i.map[e.id]=e}function hv(i,e,t){const n=i.name,r=n.length;for(ul.lastIndex=0;;){const s=ul.exec(n),o=ul.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Ih(t,c===void 0?new uv(a,i,e):new Rh(a,i,e));break}else{let h=t.map[a];h===void 0&&(h=new Ph(a),Ih(t,h)),t=h}}}function Un(i,e){this.seq=[],this.map={};const t=i.getProgramParameter(e,35718);for(let n=0;n<t;++n){const r=i.getActiveUniform(e,n),s=i.getUniformLocation(e,r.name);hv(r,s,this)}}Un.prototype.setValue=function(i,e,t,n){const r=this.map[e];r!==void 0&&r.setValue(i,t,n)};Un.prototype.setOptional=function(i,e,t){const n=e[t];n!==void 0&&this.setValue(i,t,n)};Un.upload=function(i,e,t,n){for(let r=0,s=e.length;r!==s;++r){const o=e[r],a=t[o.id];a.needsUpdate!==!1&&o.setValue(i,a.value,n)}};Un.seqWithValue=function(i,e){const t=[];for(let n=0,r=i.length;n!==r;++n){const s=i[n];s.id in e&&t.push(s)}return t};function Dh(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}let fv=0;function dv(i){const e=i.split(`
`);for(let t=0;t<e.length;t++)e[t]=t+1+": "+e[t];return e.join(`
`)}function Nh(i){switch(i){case gt:return["Linear","( value )"];case ri:return["sRGB","( value )"];case Aa:return["RGBE","( value )"];case Vu:return["RGBM","( value, 7.0 )"];case Gu:return["RGBM","( value, 16.0 )"];case Wu:return["RGBD","( value, 256.0 )"];case Ea:return["Gamma","( value, float( GAMMA_FACTOR ) )"];case sx:return["LogLuv","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",i),["Linear","( value )"]}}function Fh(i,e,t){const n=i.getShaderParameter(e,35713),r=i.getShaderInfoLog(e).trim();return n&&r===""?"":t.toUpperCase()+`

`+r+`

`+dv(i.getShaderSource(e))}function ci(i,e){const t=Nh(e);return"vec4 "+i+"( vec4 value ) { return "+t[0]+"ToLinear"+t[1]+"; }"}function pv(i,e){const t=Nh(e);return"vec4 "+i+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function mv(i,e){let t;switch(e){case ig:t="Linear";break;case rg:t="Reinhard";break;case sg:t="OptimizedCineon";break;case og:t="ACESFilmic";break;case ag:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function gv(i){return[i.extensionDerivatives||i.envMapCubeUV||i.bumpMap||i.tangentSpaceNormalMap||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Or).join(`
`)}function xv(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function yv(i,e){const t={},n=i.getProgramParameter(e,35721);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),o=s.name;let a=1;s.type===35674&&(a=2),s.type===35675&&(a=3),s.type===35676&&(a=4),t[o]={type:s.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Or(i){return i!==""}function Bh(i,e){return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Oh(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const _v=/^[ \t]*#include +<([\w\d./]+)>/gm;function hl(i){return i.replace(_v,vv)}function vv(i,e){const t=Ne[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return hl(t)}const bv=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,Mv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function zh(i){return i.replace(Mv,Uh).replace(bv,wv)}function wv(i,e,t,n){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),Uh(i,e,t,n)}function Uh(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Hh(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Sv(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===_u?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Fm?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===wr&&(e="SHADOWMAP_TYPE_VSM"),e}function Tv(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Er:case Ar:e="ENVMAP_TYPE_CUBE";break;case Ls:case ba:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Ev(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Ar:case ba:e="ENVMAP_MODE_REFRACTION";break}return e}function Av(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case As:e="ENVMAP_BLENDING_MULTIPLY";break;case tg:e="ENVMAP_BLENDING_MIX";break;case ng:e="ENVMAP_BLENDING_ADD";break}return e}function Lv(i,e,t,n){const r=i.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=Sv(t),c=Tv(t),u=Ev(t),h=Av(t),f=i.gammaFactor>0?i.gammaFactor:1,m=t.isWebGL2?"":gv(t),x=xv(s),y=r.createProgram();let v,p,g=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(v=[x].filter(Or).join(`
`),v.length>0&&(v+=`
`),p=[m,x].filter(Or).join(`
`),p.length>0&&(p+=`
`)):(v=[Hh(t),"#define SHADER_NAME "+t.shaderName,x,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"","#define GAMMA_FACTOR "+f,"#define MAX_BONES "+t.maxBones,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.useVertexTexture?"#define BONE_TEXTURE":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphTargets&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargets&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Or).join(`
`),p=[m,Hh(t),"#define SHADER_NAME "+t.shaderName,x,"#define GAMMA_FACTOR "+f,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"",(t.extensionShaderTextureLOD||t.envMap)&&t.rendererExtensionShaderTextureLod?"#define TEXTURE_LOD_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ii?"#define TONE_MAPPING":"",t.toneMapping!==ii?Ne.tonemapping_pars_fragment:"",t.toneMapping!==ii?mv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.format===Li?"#define OPAQUE":"",Ne.encodings_pars_fragment,t.map?ci("mapTexelToLinear",t.mapEncoding):"",t.matcap?ci("matcapTexelToLinear",t.matcapEncoding):"",t.envMap?ci("envMapTexelToLinear",t.envMapEncoding):"",t.emissiveMap?ci("emissiveMapTexelToLinear",t.emissiveMapEncoding):"",t.specularColorMap?ci("specularColorMapTexelToLinear",t.specularColorMapEncoding):"",t.sheenColorMap?ci("sheenColorMapTexelToLinear",t.sheenColorMapEncoding):"",t.lightMap?ci("lightMapTexelToLinear",t.lightMapEncoding):"",pv("linearToOutputTexel",t.outputEncoding),t.depthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Or).join(`
`)),o=hl(o),o=Bh(o,t),o=Oh(o,t),a=hl(a),a=Bh(a,t),a=Oh(a,t),o=zh(o),a=zh(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,v=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,p=["#define varying in",t.glslVersion===qu?"":"out highp vec4 pc_fragColor;",t.glslVersion===qu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const A=g+v+o,b=g+p+a,E=Dh(r,35633,A),I=Dh(r,35632,b);if(r.attachShader(y,E),r.attachShader(y,I),t.index0AttributeName!==void 0?r.bindAttribLocation(y,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y),i.debug.checkShaderErrors){const Q=r.getProgramInfoLog(y).trim(),Z=r.getShaderInfoLog(E).trim(),F=r.getShaderInfoLog(I).trim();let ne=!0,J=!0;if(r.getProgramParameter(y,35714)===!1){ne=!1;const $=Fh(r,E,"vertex"),ee=Fh(r,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,35715)+`

Program Info Log: `+Q+`
`+$+`
`+ee)}else Q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Q):(Z===""||F==="")&&(J=!1);J&&(this.diagnostics={runnable:ne,programLog:Q,vertexShader:{log:Z,prefix:v},fragmentShader:{log:F,prefix:p}})}r.deleteShader(E),r.deleteShader(I);let M;this.getUniforms=function(){return M===void 0&&(M=new Un(r,y)),M};let z;return this.getAttributes=function(){return z===void 0&&(z=yv(r,y)),z},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.name=t.shaderName,this.id=fv++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=E,this.fragmentShader=I,this}function Cv(i,e,t,n,r,s,o){const a=[],l=r.isWebGL2,c=r.logarithmicDepthBuffer,u=r.floatVertexTextures,h=r.maxVertexUniforms,f=r.vertexTextures;let m=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"},y=["precision","isWebGL2","supportsVertexTextures","outputEncoding","instancing","instancingColor","map","mapEncoding","matcap","matcapEncoding","envMap","envMapMode","envMapEncoding","envMapCubeUV","lightMap","lightMapEncoding","aoMap","emissiveMap","emissiveMapEncoding","bumpMap","normalMap","objectSpaceNormalMap","tangentSpaceNormalMap","clearcoat","clearcoatMap","clearcoatRoughnessMap","clearcoatNormalMap","displacementMap","specularMap",,"roughnessMap","metalnessMap","gradientMap","alphaMap","alphaTest","combine","vertexColors","vertexAlphas","vertexTangents","vertexUvs","uvsVertexOnly","fog","useFog","fogExp2","flatShading","sizeAttenuation","logarithmicDepthBuffer","skinning","maxBones","useVertexTexture","morphTargets","morphNormals","morphTargetsCount","premultipliedAlpha","numDirLights","numPointLights","numSpotLights","numHemiLights","numRectAreaLights","numDirLightShadows","numPointLightShadows","numSpotLightShadows","shadowMapEnabled","shadowMapType","toneMapping","physicallyCorrectLights","doubleSided","flipSided","numClippingPlanes","numClipIntersection","depthPacking","dithering","format","specularIntensityMap","specularColorMap","specularColorMapEncoding","transmission","transmissionMap","thicknessMap","sheen","sheenColorMap","sheenColorMapEncoding","sheenRoughnessMap"];function v(M){const Q=M.skeleton.bones;if(u)return 1024;{const F=Math.floor((h-20)/4),ne=Math.min(F,Q.length);return ne<Q.length?(console.warn("THREE.WebGLRenderer: Skeleton has "+Q.length+" bones. This GPU supports "+ne+"."),0):ne}}function p(M){let z;return M&&M.isTexture?z=M.encoding:M&&M.isWebGLRenderTarget?(console.warn("THREE.WebGLPrograms.getTextureEncodingFromMap: don't use render targets as textures. Use their .texture property instead."),z=M.texture.encoding):z=gt,l&&M&&M.isTexture&&M.format===wt&&M.type===An&&M.encoding===ri&&(z=gt),z}function g(M,z,Q,Z,F){const ne=Z.fog,J=M.isMeshStandardMaterial?Z.environment:null,$=(M.isMeshStandardMaterial?t:e).get(M.envMap||J),ee=x[M.type],K=F.isSkinnedMesh?v(F):0;M.precision!==null&&(m=r.getMaxPrecision(M.precision),m!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",m,"instead."));let V,q;if(ee){const C=tn[ee];V=C.vertexShader,q=C.fragmentShader}else V=M.vertexShader,q=M.fragmentShader;const xe=i.getRenderTarget(),be=M.alphaTest>0,ve=M.clearcoat>0;return{isWebGL2:l,shaderID:ee,shaderName:M.type,vertexShader:V,fragmentShader:q,defines:M.defines,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:m,instancing:F.isInstancedMesh===!0,instancingColor:F.isInstancedMesh===!0&&F.instanceColor!==null,supportsVertexTextures:f,outputEncoding:xe!==null?p(xe.texture):i.outputEncoding,map:!!M.map,mapEncoding:p(M.map),matcap:!!M.matcap,matcapEncoding:p(M.matcap),envMap:!!$,envMapMode:$&&$.mapping,envMapEncoding:p($),envMapCubeUV:!!$&&($.mapping===Ls||$.mapping===ba),lightMap:!!M.lightMap,lightMapEncoding:p(M.lightMap),aoMap:!!M.aoMap,emissiveMap:!!M.emissiveMap,emissiveMapEncoding:p(M.emissiveMap),bumpMap:!!M.bumpMap,normalMap:!!M.normalMap,objectSpaceNormalMap:M.normalMapType===lx,tangentSpaceNormalMap:M.normalMapType===Ii,clearcoat:ve,clearcoatMap:ve&&!!M.clearcoatMap,clearcoatRoughnessMap:ve&&!!M.clearcoatRoughnessMap,clearcoatNormalMap:ve&&!!M.clearcoatNormalMap,displacementMap:!!M.displacementMap,roughnessMap:!!M.roughnessMap,metalnessMap:!!M.metalnessMap,specularMap:!!M.specularMap,specularIntensityMap:!!M.specularIntensityMap,specularColorMap:!!M.specularColorMap,specularColorMapEncoding:p(M.specularColorMap),alphaMap:!!M.alphaMap,alphaTest:be,gradientMap:!!M.gradientMap,sheen:M.sheen>0,sheenColorMap:!!M.sheenColorMap,sheenColorMapEncoding:p(M.sheenColorMap),sheenRoughnessMap:!!M.sheenRoughnessMap,transmission:M.transmission>0,transmissionMap:!!M.transmissionMap,thicknessMap:!!M.thicknessMap,combine:M.combine,vertexTangents:!!M.normalMap&&!!F.geometry&&!!F.geometry.attributes.tangent,vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!F.geometry&&!!F.geometry.attributes.color&&F.geometry.attributes.color.itemSize===4,vertexUvs:!!M.map||!!M.bumpMap||!!M.normalMap||!!M.specularMap||!!M.alphaMap||!!M.emissiveMap||!!M.roughnessMap||!!M.metalnessMap||!!M.clearcoatMap||!!M.clearcoatRoughnessMap||!!M.clearcoatNormalMap||!!M.displacementMap||!!M.transmissionMap||!!M.thicknessMap||!!M.specularIntensityMap||!!M.specularColorMap||!!M.sheenColorMap||M.sheenRoughnessMap,uvsVertexOnly:!(!!M.map||!!M.bumpMap||!!M.normalMap||!!M.specularMap||!!M.alphaMap||!!M.emissiveMap||!!M.roughnessMap||!!M.metalnessMap||!!M.clearcoatNormalMap||M.transmission>0||!!M.transmissionMap||!!M.thicknessMap||!!M.specularIntensityMap||!!M.specularColorMap||!!M.sheen>0||!!M.sheenColorMap||!!M.sheenRoughnessMap)&&!!M.displacementMap,fog:!!ne,useFog:M.fog,fogExp2:ne&&ne.isFogExp2,flatShading:!!M.flatShading,sizeAttenuation:M.sizeAttenuation,logarithmicDepthBuffer:c,skinning:F.isSkinnedMesh===!0&&K>0,maxBones:K,useVertexTexture:u,morphTargets:!!F.geometry&&!!F.geometry.morphAttributes.position,morphNormals:!!F.geometry&&!!F.geometry.morphAttributes.normal,morphTargetsCount:!!F.geometry&&!!F.geometry.morphAttributes.position?F.geometry.morphAttributes.position.length:0,numDirLights:z.directional.length,numPointLights:z.point.length,numSpotLights:z.spot.length,numRectAreaLights:z.rectArea.length,numHemiLights:z.hemi.length,numDirLightShadows:z.directionalShadowMap.length,numPointLightShadows:z.pointShadowMap.length,numSpotLightShadows:z.spotShadowMap.length,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,format:M.format,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&Q.length>0,shadowMapType:i.shadowMap.type,toneMapping:M.toneMapped?i.toneMapping:ii,physicallyCorrectLights:i.physicallyCorrectLights,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Ti,flipSided:M.side===ot,depthPacking:M.depthPacking!==void 0?M.depthPacking:!1,index0AttributeName:M.index0AttributeName,extensionDerivatives:M.extensions&&M.extensions.derivatives,extensionFragDepth:M.extensions&&M.extensions.fragDepth,extensionDrawBuffers:M.extensions&&M.extensions.drawBuffers,extensionShaderTextureLOD:M.extensions&&M.extensions.shaderTextureLOD,rendererExtensionFragDepth:l||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:l||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:l||n.has("EXT_shader_texture_lod"),customProgramCacheKey:M.customProgramCacheKey()}}function A(M){const z=[];if(M.shaderID?z.push(M.shaderID):(z.push(Yu(M.fragmentShader)),z.push(Yu(M.vertexShader))),M.defines!==void 0)for(const Q in M.defines)z.push(Q),z.push(M.defines[Q]);if(M.isRawShaderMaterial===!1){for(let Q=0;Q<y.length;Q++)z.push(M[y[Q]]);z.push(i.outputEncoding),z.push(i.gammaFactor)}return z.push(M.customProgramCacheKey),z.join()}function b(M){const z=x[M.type];let Q;if(z){const Z=tn[z];Q=Ax.clone(Z.uniforms)}else Q=M.uniforms;return Q}function E(M,z){let Q;for(let Z=0,F=a.length;Z<F;Z++){const ne=a[Z];if(ne.cacheKey===z){Q=ne,++Q.usedTimes;break}}return Q===void 0&&(Q=new Lv(i,z,M,s),a.push(Q)),Q}function I(M){if(--M.usedTimes==0){const z=a.indexOf(M);a[z]=a[a.length-1],a.pop(),M.destroy()}}return{getParameters:g,getProgramCacheKey:A,getUniforms:b,acquireProgram:E,releaseProgram:I,programs:a}}function Rv(){let i=new WeakMap;function e(s){let o=i.get(s);return o===void 0&&(o={},i.set(s,o)),o}function t(s){i.delete(s)}function n(s,o,a){i.get(s)[o]=a}function r(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:r}}function Pv(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.program!==e.program?i.program.id-e.program.id:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function kh(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Vh(i){const e=[];let t=0;const n=[],r=[],s=[],o={id:-1};function a(){t=0,n.length=0,r.length=0,s.length=0}function l(m,x,y,v,p,g){let A=e[t];const b=i.get(y);return A===void 0?(A={id:m.id,object:m,geometry:x,material:y,program:b.program||o,groupOrder:v,renderOrder:m.renderOrder,z:p,group:g},e[t]=A):(A.id=m.id,A.object=m,A.geometry=x,A.material=y,A.program=b.program||o,A.groupOrder=v,A.renderOrder=m.renderOrder,A.z=p,A.group=g),t++,A}function c(m,x,y,v,p,g){const A=l(m,x,y,v,p,g);y.transmission>0?r.push(A):y.transparent===!0?s.push(A):n.push(A)}function u(m,x,y,v,p,g){const A=l(m,x,y,v,p,g);y.transmission>0?r.unshift(A):y.transparent===!0?s.unshift(A):n.unshift(A)}function h(m,x){n.length>1&&n.sort(m||Pv),r.length>1&&r.sort(x||kh),s.length>1&&s.sort(x||kh)}function f(){for(let m=t,x=e.length;m<x;m++){const y=e[m];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.program=null,y.group=null}}return{opaque:n,transmissive:r,transparent:s,init:a,push:c,unshift:u,finish:f,sort:h}}function Iv(i){let e=new WeakMap;function t(r,s){let o;return e.has(r)===!1?(o=new Vh(i),e.set(r,[o])):s>=e.get(r).length?(o=new Vh(i),e.get(r).push(o)):o=e.get(r)[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}function Dv(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new we};break;case"SpotLight":t={position:new D,direction:new D,color:new we,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new we,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new we,groundColor:new we};break;case"RectAreaLight":t={color:new we,position:new D,halfWidth:new D,halfHeight:new D};break}return i[e.id]=t,t}}}function Nv(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Fv=0;function Bv(i,e){return(e.castShadow?1:0)-(i.castShadow?1:0)}function Ov(i,e){const t=new Dv,n=Nv(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let u=0;u<9;u++)r.probe.push(new D);const s=new D,o=new Se,a=new Se;function l(u,h){let f=0,m=0,x=0;for(let Q=0;Q<9;Q++)r.probe[Q].set(0,0,0);let y=0,v=0,p=0,g=0,A=0,b=0,E=0,I=0;u.sort(Bv);const M=h!==!0?Math.PI:1;for(let Q=0,Z=u.length;Q<Z;Q++){const F=u[Q],ne=F.color,J=F.intensity,$=F.distance,ee=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)f+=ne.r*J*M,m+=ne.g*J*M,x+=ne.b*J*M;else if(F.isLightProbe)for(let K=0;K<9;K++)r.probe[K].addScaledVector(F.sh.coefficients[K],J);else if(F.isDirectionalLight){const K=t.get(F);if(K.color.copy(F.color).multiplyScalar(F.intensity*M),F.castShadow){const V=F.shadow,q=n.get(F);q.shadowBias=V.bias,q.shadowNormalBias=V.normalBias,q.shadowRadius=V.radius,q.shadowMapSize=V.mapSize,r.directionalShadow[y]=q,r.directionalShadowMap[y]=ee,r.directionalShadowMatrix[y]=F.shadow.matrix,b++}r.directional[y]=K,y++}else if(F.isSpotLight){const K=t.get(F);if(K.position.setFromMatrixPosition(F.matrixWorld),K.color.copy(ne).multiplyScalar(J*M),K.distance=$,K.coneCos=Math.cos(F.angle),K.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),K.decay=F.decay,F.castShadow){const V=F.shadow,q=n.get(F);q.shadowBias=V.bias,q.shadowNormalBias=V.normalBias,q.shadowRadius=V.radius,q.shadowMapSize=V.mapSize,r.spotShadow[p]=q,r.spotShadowMap[p]=ee,r.spotShadowMatrix[p]=F.shadow.matrix,I++}r.spot[p]=K,p++}else if(F.isRectAreaLight){const K=t.get(F);K.color.copy(ne).multiplyScalar(J),K.halfWidth.set(F.width*.5,0,0),K.halfHeight.set(0,F.height*.5,0),r.rectArea[g]=K,g++}else if(F.isPointLight){const K=t.get(F);if(K.color.copy(F.color).multiplyScalar(F.intensity*M),K.distance=F.distance,K.decay=F.decay,F.castShadow){const V=F.shadow,q=n.get(F);q.shadowBias=V.bias,q.shadowNormalBias=V.normalBias,q.shadowRadius=V.radius,q.shadowMapSize=V.mapSize,q.shadowCameraNear=V.camera.near,q.shadowCameraFar=V.camera.far,r.pointShadow[v]=q,r.pointShadowMap[v]=ee,r.pointShadowMatrix[v]=F.shadow.matrix,E++}r.point[v]=K,v++}else if(F.isHemisphereLight){const K=t.get(F);K.skyColor.copy(F.color).multiplyScalar(J*M),K.groundColor.copy(F.groundColor).multiplyScalar(J*M),r.hemi[A]=K,A++}}g>0&&(e.isWebGL2||i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Me.LTC_FLOAT_1,r.rectAreaLTC2=Me.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=Me.LTC_HALF_1,r.rectAreaLTC2=Me.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=f,r.ambient[1]=m,r.ambient[2]=x;const z=r.hash;(z.directionalLength!==y||z.pointLength!==v||z.spotLength!==p||z.rectAreaLength!==g||z.hemiLength!==A||z.numDirectionalShadows!==b||z.numPointShadows!==E||z.numSpotShadows!==I)&&(r.directional.length=y,r.spot.length=p,r.rectArea.length=g,r.point.length=v,r.hemi.length=A,r.directionalShadow.length=b,r.directionalShadowMap.length=b,r.pointShadow.length=E,r.pointShadowMap.length=E,r.spotShadow.length=I,r.spotShadowMap.length=I,r.directionalShadowMatrix.length=b,r.pointShadowMatrix.length=E,r.spotShadowMatrix.length=I,z.directionalLength=y,z.pointLength=v,z.spotLength=p,z.rectAreaLength=g,z.hemiLength=A,z.numDirectionalShadows=b,z.numPointShadows=E,z.numSpotShadows=I,r.version=Fv++)}function c(u,h){let f=0,m=0,x=0,y=0,v=0;const p=h.matrixWorldInverse;for(let g=0,A=u.length;g<A;g++){const b=u[g];if(b.isDirectionalLight){const E=r.directional[f];E.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(p),f++}else if(b.isSpotLight){const E=r.spot[x];E.position.setFromMatrixPosition(b.matrixWorld),E.position.applyMatrix4(p),E.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(p),x++}else if(b.isRectAreaLight){const E=r.rectArea[y];E.position.setFromMatrixPosition(b.matrixWorld),E.position.applyMatrix4(p),a.identity(),o.copy(b.matrixWorld),o.premultiply(p),a.extractRotation(o),E.halfWidth.set(b.width*.5,0,0),E.halfHeight.set(0,b.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),y++}else if(b.isPointLight){const E=r.point[m];E.position.setFromMatrixPosition(b.matrixWorld),E.position.applyMatrix4(p),m++}else if(b.isHemisphereLight){const E=r.hemi[v];E.direction.setFromMatrixPosition(b.matrixWorld),E.direction.transformDirection(p),E.direction.normalize(),v++}}}return{setup:l,setupView:c,state:r}}function Gh(i,e){const t=new Ov(i,e),n=[],r=[];function s(){n.length=0,r.length=0}function o(h){n.push(h)}function a(h){r.push(h)}function l(h){t.setup(n,h)}function c(h){t.setupView(n,h)}return{init:s,state:{lightsArray:n,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function zv(i,e){let t=new WeakMap;function n(s,o=0){let a;return t.has(s)===!1?(a=new Gh(i,e),t.set(s,[a])):o>=t.get(s).length?(a=new Gh(i,e),t.get(s).push(a)):a=t.get(s)[o],a}function r(){t=new WeakMap}return{get:n,dispose:r}}class Wh extends yt{constructor(e){super();this.type="MeshDepthMaterial",this.depthPacking=ox,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}Wh.prototype.isMeshDepthMaterial=!0;class qh extends yt{constructor(e){super();this.type="MeshDistanceMaterial",this.referencePosition=new D,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.fog=!1,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}qh.prototype.isMeshDistanceMaterial=!0;const Uv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Hv=`uniform sampler2D shadow_pass;
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
}`;function jh(i,e,t){let n=new no;const r=new oe,s=new oe,o=new We,a=new Wh({depthPacking:ax}),l=new qh,c={},u=t.maxTextureSize,h={0:ot,1:Sr,2:Ti},f=new ai({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new oe},radius:{value:4}},vertexShader:Uv,fragmentShader:Hv}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const x=new Xe;x.setAttribute("position",new at(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new At(x,f),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=_u,this.render=function(b,E,I){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||b.length===0)return;const M=i.getRenderTarget(),z=i.getActiveCubeFace(),Q=i.getActiveMipmapLevel(),Z=i.state;Z.setBlending(En),Z.buffers.color.setClear(1,1,1,1),Z.buffers.depth.setTest(!0),Z.setScissorTest(!1);for(let F=0,ne=b.length;F<ne;F++){const J=b[F],$=J.shadow;if($===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;r.copy($.mapSize);const ee=$.getFrameExtents();if(r.multiply(ee),s.copy($.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/ee.x),r.x=s.x*ee.x,$.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/ee.y),r.y=s.y*ee.y,$.mapSize.y=s.y)),$.map===null&&!$.isPointLightShadow&&this.type===wr){const V={minFilter:Ot,magFilter:Ot,format:wt};$.map=new en(r.x,r.y,V),$.map.texture.name=J.name+".shadowMap",$.mapPass=new en(r.x,r.y,V),$.camera.updateProjectionMatrix()}if($.map===null){const V={minFilter:ct,magFilter:ct,format:wt};$.map=new en(r.x,r.y,V),$.map.texture.name=J.name+".shadowMap",$.camera.updateProjectionMatrix()}i.setRenderTarget($.map),i.clear();const K=$.getViewportCount();for(let V=0;V<K;V++){const q=$.getViewport(V);o.set(s.x*q.x,s.y*q.y,s.x*q.z,s.y*q.w),Z.viewport(o),$.updateMatrices(J,V),n=$.getFrustum(),A(E,I,$.camera,J,this.type)}!$.isPointLightShadow&&this.type===wr&&p($,I),$.needsUpdate=!1}v.needsUpdate=!1,i.setRenderTarget(M,z,Q)};function p(b,E){const I=e.update(y);f.defines.VSM_SAMPLES!==b.blurSamples&&(f.defines.VSM_SAMPLES=b.blurSamples,m.defines.VSM_SAMPLES=b.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),f.uniforms.shadow_pass.value=b.map.texture,f.uniforms.resolution.value=b.mapSize,f.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(E,null,I,f,y,null),m.uniforms.shadow_pass.value=b.mapPass.texture,m.uniforms.resolution.value=b.mapSize,m.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(E,null,I,m,y,null)}function g(b,E,I,M,z,Q,Z){let F=null;const ne=M.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(ne!==void 0?F=ne:F=M.isPointLight===!0?l:a,i.localClippingEnabled&&I.clipShadows===!0&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0){const J=F.uuid,$=I.uuid;let ee=c[J];ee===void 0&&(ee={},c[J]=ee);let K=ee[$];K===void 0&&(K=F.clone(),ee[$]=K),F=K}return F.visible=I.visible,F.wireframe=I.wireframe,Z===wr?F.side=I.shadowSide!==null?I.shadowSide:I.side:F.side=I.shadowSide!==null?I.shadowSide:h[I.side],F.alphaMap=I.alphaMap,F.alphaTest=I.alphaTest,F.clipShadows=I.clipShadows,F.clippingPlanes=I.clippingPlanes,F.clipIntersection=I.clipIntersection,F.displacementMap=I.displacementMap,F.displacementScale=I.displacementScale,F.displacementBias=I.displacementBias,F.wireframeLinewidth=I.wireframeLinewidth,F.linewidth=I.linewidth,M.isPointLight===!0&&F.isMeshDistanceMaterial===!0&&(F.referencePosition.setFromMatrixPosition(M.matrixWorld),F.nearDistance=z,F.farDistance=Q),F}function A(b,E,I,M,z){if(b.visible===!1)return;if(b.layers.test(E.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&z===wr)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,b.matrixWorld);const F=e.update(b),ne=b.material;if(Array.isArray(ne)){const J=F.groups;for(let $=0,ee=J.length;$<ee;$++){const K=J[$],V=ne[K.materialIndex];if(V&&V.visible){const q=g(b,F,V,M,I.near,I.far,z);i.renderBufferDirect(I,null,F,q,b,K)}}}else if(ne.visible){const J=g(b,F,ne,M,I.near,I.far,z);i.renderBufferDirect(I,null,F,J,b,null)}}const Z=b.children;for(let F=0,ne=Z.length;F<ne;F++)A(Z[F],E,I,M,z)}}function kv(i,e,t){const n=t.isWebGL2;function r(){let H=!1;const me=new We;let re=null;const _e=new We(0,0,0,0);return{setMask:function(O){re!==O&&!H&&(i.colorMask(O,O,O,O),re=O)},setLocked:function(O){H=O},setClear:function(O,ye,Re,Ce,$e){$e===!0&&(O*=Ce,ye*=Ce,Re*=Ce),me.set(O,ye,Re,Ce),_e.equals(me)===!1&&(i.clearColor(O,ye,Re,Ce),_e.copy(me))},reset:function(){H=!1,re=null,_e.set(-1,0,0,0)}}}function s(){let H=!1,me=null,re=null,_e=null;return{setTest:function(O){O?L(2929):k(2929)},setMask:function(O){me!==O&&!H&&(i.depthMask(O),me=O)},setFunc:function(O){if(re!==O){if(O)switch(O){case Ym:i.depthFunc(512);break;case Zm:i.depthFunc(519);break;case Jm:i.depthFunc(513);break;case ya:i.depthFunc(515);break;case $m:i.depthFunc(514);break;case Km:i.depthFunc(518);break;case Qm:i.depthFunc(516);break;case eg:i.depthFunc(517);break;default:i.depthFunc(515)}else i.depthFunc(515);re=O}},setLocked:function(O){H=O},setClear:function(O){_e!==O&&(i.clearDepth(O),_e=O)},reset:function(){H=!1,me=null,re=null,_e=null}}}function o(){let H=!1,me=null,re=null,_e=null,O=null,ye=null,Re=null,Ce=null,$e=null;return{setTest:function(Le){H||(Le?L(2960):k(2960))},setMask:function(Le){me!==Le&&!H&&(i.stencilMask(Le),me=Le)},setFunc:function(Le,Ye,ht){(re!==Le||_e!==Ye||O!==ht)&&(i.stencilFunc(Le,Ye,ht),re=Le,_e=Ye,O=ht)},setOp:function(Le,Ye,ht){(ye!==Le||Re!==Ye||Ce!==ht)&&(i.stencilOp(Le,Ye,ht),ye=Le,Re=Ye,Ce=ht)},setLocked:function(Le){H=Le},setClear:function(Le){$e!==Le&&(i.clearStencil(Le),$e=Le)},reset:function(){H=!1,me=null,re=null,_e=null,O=null,ye=null,Re=null,Ce=null,$e=null}}}const a=new r,l=new s,c=new o;let u={},h=null,f={},m=null,x=!1,y=null,v=null,p=null,g=null,A=null,b=null,E=null,I=!1,M=null,z=null,Q=null,Z=null,F=null;const ne=i.getParameter(35661);let J=!1,$=0;const ee=i.getParameter(7938);ee.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(ee)[1]),J=$>=1):ee.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(ee)[1]),J=$>=2);let K=null,V={};const q=i.getParameter(3088),xe=i.getParameter(2978),be=new We().fromArray(q),ve=new We().fromArray(xe);function X(H,me,re){const _e=new Uint8Array(4),O=i.createTexture();i.bindTexture(H,O),i.texParameteri(H,10241,9728),i.texParameteri(H,10240,9728);for(let ye=0;ye<re;ye++)i.texImage2D(me+ye,0,6408,1,1,0,6408,5121,_e);return O}const C={};C[3553]=X(3553,3553,1),C[34067]=X(34067,34069,6),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),L(2929),l.setFunc(ya),S(!1),T(yu),L(2884),ge(En);function L(H){u[H]!==!0&&(i.enable(H),u[H]=!0)}function k(H){u[H]!==!1&&(i.disable(H),u[H]=!1)}function U(H){H!==h&&(i.bindFramebuffer(36160,H),h=H)}function N(H,me){return me===null&&h!==null&&(me=h),f[H]!==me?(i.bindFramebuffer(H,me),f[H]=me,n&&(H===36009&&(f[36160]=me),H===36160&&(f[36009]=me)),!0):!1}function ie(H){return m!==H?(i.useProgram(H),m=H,!0):!1}const ue={[Ei]:32774,[Om]:32778,[zm]:32779};if(n)ue[Su]=32775,ue[Tu]=32776;else{const H=e.get("EXT_blend_minmax");H!==null&&(ue[Su]=H.MIN_EXT,ue[Tu]=H.MAX_EXT)}const le={[Um]:0,[Hm]:1,[km]:768,[Eu]:770,[Xm]:776,[qm]:774,[Gm]:772,[Vm]:769,[Au]:771,[jm]:775,[Wm]:773};function ge(H,me,re,_e,O,ye,Re,Ce){if(H===En){x===!0&&(k(3042),x=!1);return}if(x===!1&&(L(3042),x=!0),H!==Bm){if(H!==y||Ce!==I){if((v!==Ei||A!==Ei)&&(i.blendEquation(32774),v=Ei,A=Ei),Ce)switch(H){case Tr:i.blendFuncSeparate(1,771,1,771);break;case bu:i.blendFunc(1,1);break;case Mu:i.blendFuncSeparate(0,0,769,771);break;case wu:i.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}else switch(H){case Tr:i.blendFuncSeparate(770,771,1,771);break;case bu:i.blendFunc(770,1);break;case Mu:i.blendFunc(0,769);break;case wu:i.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}p=null,g=null,b=null,E=null,y=H,I=Ce}return}O=O||me,ye=ye||re,Re=Re||_e,(me!==v||O!==A)&&(i.blendEquationSeparate(ue[me],ue[O]),v=me,A=O),(re!==p||_e!==g||ye!==b||Re!==E)&&(i.blendFuncSeparate(le[re],le[_e],le[ye],le[Re]),p=re,g=_e,b=ye,E=Re),y=H,I=null}function j(H,me){H.side===Ti?k(2884):L(2884);let re=H.side===ot;me&&(re=!re),S(re),H.blending===Tr&&H.transparent===!1?ge(En):ge(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.premultipliedAlpha),l.setFunc(H.depthFunc),l.setTest(H.depthTest),l.setMask(H.depthWrite),a.setMask(H.colorWrite);const _e=H.stencilWrite;c.setTest(_e),_e&&(c.setMask(H.stencilWriteMask),c.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),c.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),w(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?L(32926):k(32926)}function S(H){M!==H&&(H?i.frontFace(2304):i.frontFace(2305),M=H)}function T(H){H!==Dm?(L(2884),H!==z&&(H===yu?i.cullFace(1029):H===Nm?i.cullFace(1028):i.cullFace(1032))):k(2884),z=H}function P(H){H!==Q&&(J&&i.lineWidth(H),Q=H)}function w(H,me,re){H?(L(32823),(Z!==me||F!==re)&&(i.polygonOffset(me,re),Z=me,F=re)):k(32823)}function d(H){H?L(3089):k(3089)}function _(H){H===void 0&&(H=33984+ne-1),K!==H&&(i.activeTexture(H),K=H)}function B(H,me){K===null&&_();let re=V[K];re===void 0&&(re={type:void 0,texture:void 0},V[K]=re),(re.type!==H||re.texture!==me)&&(i.bindTexture(H,me||C[H]),re.type=H,re.texture=me)}function G(){const H=V[K];H!==void 0&&H.type!==void 0&&(i.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function W(){try{i.compressedTexImage2D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Y(){try{i.texImage2D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function he(){try{i.texImage3D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ce(H){be.equals(H)===!1&&(i.scissor(H.x,H.y,H.z,H.w),be.copy(H))}function pe(H){ve.equals(H)===!1&&(i.viewport(H.x,H.y,H.z,H.w),ve.copy(H))}function fe(){i.disable(3042),i.disable(2884),i.disable(2929),i.disable(32823),i.disable(3089),i.disable(2960),i.disable(32926),i.blendEquation(32774),i.blendFunc(1,0),i.blendFuncSeparate(1,0,1,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(513),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(519,0,4294967295),i.stencilOp(7680,7680,7680),i.clearStencil(0),i.cullFace(1029),i.frontFace(2305),i.polygonOffset(0,0),i.activeTexture(33984),i.bindFramebuffer(36160,null),n===!0&&(i.bindFramebuffer(36009,null),i.bindFramebuffer(36008,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},K=null,V={},h=null,f={},m=null,x=!1,y=null,v=null,p=null,g=null,A=null,b=null,E=null,I=!1,M=null,z=null,Q=null,Z=null,F=null,be.set(0,0,i.canvas.width,i.canvas.height),ve.set(0,0,i.canvas.width,i.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:L,disable:k,bindFramebuffer:N,bindXRFramebuffer:U,useProgram:ie,setBlending:ge,setMaterial:j,setFlipSided:S,setCullFace:T,setLineWidth:P,setPolygonOffset:w,setScissorTest:d,activeTexture:_,bindTexture:B,unbindTexture:G,compressedTexImage2D:W,texImage2D:Y,texImage3D:he,scissor:ce,viewport:pe,reset:fe}}function Vv(i,e,t,n,r,s,o){const a=r.isWebGL2,l=r.maxTextures,c=r.maxCubemapSize,u=r.maxTextureSize,h=r.maxSamples,f=new WeakMap;let m,x=!1;try{x=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(d,_){return x?new OffscreenCanvas(d,_):Os("canvas")}function v(d,_,B,G){let W=1;if((d.width>G||d.height>G)&&(W=G/Math.max(d.width,d.height)),W<1||_===!0)if(typeof HTMLImageElement!="undefined"&&d instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&d instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&d instanceof ImageBitmap){const Y=_?fx:Math.floor,he=Y(W*d.width),ce=Y(W*d.height);m===void 0&&(m=y(he,ce));const pe=B?y(he,ce):m;return pe.width=he,pe.height=ce,pe.getContext("2d").drawImage(d,0,0,he,ce),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+d.width+"x"+d.height+") to ("+he+"x"+ce+")."),pe}else return"data"in d&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+d.width+"x"+d.height+")."),d;return d}function p(d){return ju(d.width)&&ju(d.height)}function g(d){return a?!1:d.wrapS!==Pt||d.wrapT!==Pt||d.minFilter!==ct&&d.minFilter!==Ot}function A(d,_){return d.generateMipmaps&&_&&d.minFilter!==ct&&d.minFilter!==Ot}function b(d,_,B,G,W=1){i.generateMipmap(d);const Y=n.get(_);Y.__maxMipLevel=Math.log2(Math.max(B,G,W))}function E(d,_,B,G){if(a===!1)return _;if(d!==null){if(i[d]!==void 0)return i[d];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+d+"'")}let W=_;return _===6403&&(B===5126&&(W=33326),B===5131&&(W=33325),B===5121&&(W=33321)),_===6407&&(B===5126&&(W=34837),B===5131&&(W=34843),B===5121&&(W=32849)),_===6408&&(B===5126&&(W=34836),B===5131&&(W=34842),B===5121&&(W=G===ri?35907:32856)),(W===33325||W===33326||W===34842||W===34836)&&e.get("EXT_color_buffer_float"),W}function I(d){return d===ct||d===Cu||d===Ru?9728:9729}function M(d){const _=d.target;_.removeEventListener("dispose",M),Q(_),_.isVideoTexture&&f.delete(_),o.memory.textures--}function z(d){const _=d.target;_.removeEventListener("dispose",z),Z(_)}function Q(d){const _=n.get(d);_.__webglInit!==void 0&&(i.deleteTexture(_.__webglTexture),n.remove(d))}function Z(d){const _=d.texture,B=n.get(d),G=n.get(_);if(!!d){if(G.__webglTexture!==void 0&&(i.deleteTexture(G.__webglTexture),o.memory.textures--),d.depthTexture&&d.depthTexture.dispose(),d.isWebGLCubeRenderTarget)for(let W=0;W<6;W++)i.deleteFramebuffer(B.__webglFramebuffer[W]),B.__webglDepthbuffer&&i.deleteRenderbuffer(B.__webglDepthbuffer[W]);else i.deleteFramebuffer(B.__webglFramebuffer),B.__webglDepthbuffer&&i.deleteRenderbuffer(B.__webglDepthbuffer),B.__webglMultisampledFramebuffer&&i.deleteFramebuffer(B.__webglMultisampledFramebuffer),B.__webglColorRenderbuffer&&i.deleteRenderbuffer(B.__webglColorRenderbuffer),B.__webglDepthRenderbuffer&&i.deleteRenderbuffer(B.__webglDepthRenderbuffer);if(d.isWebGLMultipleRenderTargets)for(let W=0,Y=_.length;W<Y;W++){const he=n.get(_[W]);he.__webglTexture&&(i.deleteTexture(he.__webglTexture),o.memory.textures--),n.remove(_[W])}n.remove(_),n.remove(d)}}let F=0;function ne(){F=0}function J(){const d=F;return d>=l&&console.warn("THREE.WebGLTextures: Trying to use "+d+" texture units while this GPU supports only "+l),F+=1,d}function $(d,_){const B=n.get(d);if(d.isVideoTexture&&j(d),d.version>0&&B.__version!==d.version){const G=d.image;if(G===void 0)console.warn("THREE.WebGLRenderer: Texture marked for update but image is undefined");else if(G.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{X(B,d,_);return}}t.activeTexture(33984+_),t.bindTexture(3553,B.__webglTexture)}function ee(d,_){const B=n.get(d);if(d.version>0&&B.__version!==d.version){X(B,d,_);return}t.activeTexture(33984+_),t.bindTexture(35866,B.__webglTexture)}function K(d,_){const B=n.get(d);if(d.version>0&&B.__version!==d.version){X(B,d,_);return}t.activeTexture(33984+_),t.bindTexture(32879,B.__webglTexture)}function V(d,_){const B=n.get(d);if(d.version>0&&B.__version!==d.version){C(B,d,_);return}t.activeTexture(33984+_),t.bindTexture(34067,B.__webglTexture)}const q={[Ma]:10497,[Pt]:33071,[wa]:33648},xe={[ct]:9728,[Cu]:9984,[Ru]:9986,[Ot]:9729,[lg]:9985,[Cs]:9987};function be(d,_,B){if(B?(i.texParameteri(d,10242,q[_.wrapS]),i.texParameteri(d,10243,q[_.wrapT]),(d===32879||d===35866)&&i.texParameteri(d,32882,q[_.wrapR]),i.texParameteri(d,10240,xe[_.magFilter]),i.texParameteri(d,10241,xe[_.minFilter])):(i.texParameteri(d,10242,33071),i.texParameteri(d,10243,33071),(d===32879||d===35866)&&i.texParameteri(d,32882,33071),(_.wrapS!==Pt||_.wrapT!==Pt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(d,10240,I(_.magFilter)),i.texParameteri(d,10241,I(_.minFilter)),_.minFilter!==ct&&_.minFilter!==Ot&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const G=e.get("EXT_texture_filter_anisotropic");if(_.type===Ln&&e.has("OES_texture_float_linear")===!1||a===!1&&_.type===Ai&&e.has("OES_texture_half_float_linear")===!1)return;(_.anisotropy>1||n.get(_).__currentAnisotropy)&&(i.texParameterf(d,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,r.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy)}}function ve(d,_){d.__webglInit===void 0&&(d.__webglInit=!0,_.addEventListener("dispose",M),d.__webglTexture=i.createTexture(),o.memory.textures++)}function X(d,_,B){let G=3553;_.isDataTexture2DArray&&(G=35866),_.isDataTexture3D&&(G=32879),ve(d,_),t.activeTexture(33984+B),t.bindTexture(G,d.__webglTexture),i.pixelStorei(37440,_.flipY),i.pixelStorei(37441,_.premultiplyAlpha),i.pixelStorei(3317,_.unpackAlignment),i.pixelStorei(37443,0);const W=g(_)&&p(_.image)===!1,Y=v(_.image,W,!1,u),he=p(Y)||a,ce=s.convert(_.format);let pe=s.convert(_.type),fe=E(_.internalFormat,ce,pe,_.encoding);be(G,_,he);let H;const me=_.mipmaps;if(_.isDepthTexture)fe=6402,a?_.type===Ln?fe=36012:_.type===Ps?fe=33190:_.type===Lr?fe=35056:fe=33189:_.type===Ln&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),_.format===Ci&&fe===6402&&_.type!==Rs&&_.type!==Ps&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),_.type=Rs,pe=s.convert(_.type)),_.format===Cr&&fe===6402&&(fe=34041,_.type!==Lr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),_.type=Lr,pe=s.convert(_.type))),t.texImage2D(3553,0,fe,Y.width,Y.height,0,ce,pe,null);else if(_.isDataTexture)if(me.length>0&&he){for(let re=0,_e=me.length;re<_e;re++)H=me[re],t.texImage2D(3553,re,fe,H.width,H.height,0,ce,pe,H.data);_.generateMipmaps=!1,d.__maxMipLevel=me.length-1}else t.texImage2D(3553,0,fe,Y.width,Y.height,0,ce,pe,Y.data),d.__maxMipLevel=0;else if(_.isCompressedTexture){for(let re=0,_e=me.length;re<_e;re++)H=me[re],_.format!==wt&&_.format!==Li?ce!==null?t.compressedTexImage2D(3553,re,fe,H.width,H.height,0,H.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):t.texImage2D(3553,re,fe,H.width,H.height,0,ce,pe,H.data);d.__maxMipLevel=me.length-1}else if(_.isDataTexture2DArray)t.texImage3D(35866,0,fe,Y.width,Y.height,Y.depth,0,ce,pe,Y.data),d.__maxMipLevel=0;else if(_.isDataTexture3D)t.texImage3D(32879,0,fe,Y.width,Y.height,Y.depth,0,ce,pe,Y.data),d.__maxMipLevel=0;else if(me.length>0&&he){for(let re=0,_e=me.length;re<_e;re++)H=me[re],t.texImage2D(3553,re,fe,ce,pe,H);_.generateMipmaps=!1,d.__maxMipLevel=me.length-1}else t.texImage2D(3553,0,fe,ce,pe,Y),d.__maxMipLevel=0;A(_,he)&&b(G,_,Y.width,Y.height),d.__version=_.version,_.onUpdate&&_.onUpdate(_)}function C(d,_,B){if(_.image.length!==6)return;ve(d,_),t.activeTexture(33984+B),t.bindTexture(34067,d.__webglTexture),i.pixelStorei(37440,_.flipY),i.pixelStorei(37441,_.premultiplyAlpha),i.pixelStorei(3317,_.unpackAlignment),i.pixelStorei(37443,0);const G=_&&(_.isCompressedTexture||_.image[0].isCompressedTexture),W=_.image[0]&&_.image[0].isDataTexture,Y=[];for(let re=0;re<6;re++)!G&&!W?Y[re]=v(_.image[re],!1,!0,c):Y[re]=W?_.image[re].image:_.image[re];const he=Y[0],ce=p(he)||a,pe=s.convert(_.format),fe=s.convert(_.type),H=E(_.internalFormat,pe,fe,_.encoding);be(34067,_,ce);let me;if(G){for(let re=0;re<6;re++){me=Y[re].mipmaps;for(let _e=0;_e<me.length;_e++){const O=me[_e];_.format!==wt&&_.format!==Li?pe!==null?t.compressedTexImage2D(34069+re,_e,H,O.width,O.height,0,O.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):t.texImage2D(34069+re,_e,H,O.width,O.height,0,pe,fe,O.data)}}d.__maxMipLevel=me.length-1}else{me=_.mipmaps;for(let re=0;re<6;re++)if(W){t.texImage2D(34069+re,0,H,Y[re].width,Y[re].height,0,pe,fe,Y[re].data);for(let _e=0;_e<me.length;_e++){const ye=me[_e].image[re].image;t.texImage2D(34069+re,_e+1,H,ye.width,ye.height,0,pe,fe,ye.data)}}else{t.texImage2D(34069+re,0,H,pe,fe,Y[re]);for(let _e=0;_e<me.length;_e++){const O=me[_e];t.texImage2D(34069+re,_e+1,H,pe,fe,O.image[re])}}d.__maxMipLevel=me.length}A(_,ce)&&b(34067,_,he.width,he.height),d.__version=_.version,_.onUpdate&&_.onUpdate(_)}function L(d,_,B,G,W){const Y=s.convert(B.format),he=s.convert(B.type),ce=E(B.internalFormat,Y,he,B.encoding);W===32879||W===35866?t.texImage3D(W,0,ce,_.width,_.height,_.depth,0,Y,he,null):t.texImage2D(W,0,ce,_.width,_.height,0,Y,he,null),t.bindFramebuffer(36160,d),i.framebufferTexture2D(36160,G,W,n.get(B).__webglTexture,0),t.bindFramebuffer(36160,null)}function k(d,_,B){if(i.bindRenderbuffer(36161,d),_.depthBuffer&&!_.stencilBuffer){let G=33189;if(B){const W=_.depthTexture;W&&W.isDepthTexture&&(W.type===Ln?G=36012:W.type===Ps&&(G=33190));const Y=ge(_);i.renderbufferStorageMultisample(36161,Y,G,_.width,_.height)}else i.renderbufferStorage(36161,G,_.width,_.height);i.framebufferRenderbuffer(36160,36096,36161,d)}else if(_.depthBuffer&&_.stencilBuffer){if(B){const G=ge(_);i.renderbufferStorageMultisample(36161,G,35056,_.width,_.height)}else i.renderbufferStorage(36161,34041,_.width,_.height);i.framebufferRenderbuffer(36160,33306,36161,d)}else{const G=_.isWebGLMultipleRenderTargets===!0?_.texture[0]:_.texture,W=s.convert(G.format),Y=s.convert(G.type),he=E(G.internalFormat,W,Y,G.encoding);if(B){const ce=ge(_);i.renderbufferStorageMultisample(36161,ce,he,_.width,_.height)}else i.renderbufferStorage(36161,he,_.width,_.height)}i.bindRenderbuffer(36161,null)}function U(d,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,d),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(_.depthTexture).__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),$(_.depthTexture,0);const G=n.get(_.depthTexture).__webglTexture;if(_.depthTexture.format===Ci)i.framebufferTexture2D(36160,36096,3553,G,0);else if(_.depthTexture.format===Cr)i.framebufferTexture2D(36160,33306,3553,G,0);else throw new Error("Unknown depthTexture format")}function N(d){const _=n.get(d),B=d.isWebGLCubeRenderTarget===!0;if(d.depthTexture){if(B)throw new Error("target.depthTexture not supported in Cube render targets");U(_.__webglFramebuffer,d)}else if(B){_.__webglDepthbuffer=[];for(let G=0;G<6;G++)t.bindFramebuffer(36160,_.__webglFramebuffer[G]),_.__webglDepthbuffer[G]=i.createRenderbuffer(),k(_.__webglDepthbuffer[G],d,!1)}else t.bindFramebuffer(36160,_.__webglFramebuffer),_.__webglDepthbuffer=i.createRenderbuffer(),k(_.__webglDepthbuffer,d,!1);t.bindFramebuffer(36160,null)}function ie(d){const _=d.texture,B=n.get(d),G=n.get(_);d.addEventListener("dispose",z),d.isWebGLMultipleRenderTargets!==!0&&(G.__webglTexture=i.createTexture(),G.__version=_.version,o.memory.textures++);const W=d.isWebGLCubeRenderTarget===!0,Y=d.isWebGLMultipleRenderTargets===!0,he=d.isWebGLMultisampleRenderTarget===!0,ce=_.isDataTexture3D||_.isDataTexture2DArray,pe=p(d)||a;if(a&&_.format===Li&&(_.type===Ln||_.type===Ai)&&(_.format=wt,console.warn("THREE.WebGLRenderer: Rendering to textures with RGB format is not supported. Using RGBA format instead.")),W){B.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)B.__webglFramebuffer[fe]=i.createFramebuffer()}else if(B.__webglFramebuffer=i.createFramebuffer(),Y)if(r.drawBuffers){const fe=d.texture;for(let H=0,me=fe.length;H<me;H++){const re=n.get(fe[H]);re.__webglTexture===void 0&&(re.__webglTexture=i.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");else if(he)if(a){B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=i.createRenderbuffer(),i.bindRenderbuffer(36161,B.__webglColorRenderbuffer);const fe=s.convert(_.format),H=s.convert(_.type),me=E(_.internalFormat,fe,H,_.encoding),re=ge(d);i.renderbufferStorageMultisample(36161,re,me,d.width,d.height),t.bindFramebuffer(36160,B.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(36160,36064,36161,B.__webglColorRenderbuffer),i.bindRenderbuffer(36161,null),d.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),k(B.__webglDepthRenderbuffer,d,!0)),t.bindFramebuffer(36160,null)}else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.");if(W){t.bindTexture(34067,G.__webglTexture),be(34067,_,pe);for(let fe=0;fe<6;fe++)L(B.__webglFramebuffer[fe],d,_,36064,34069+fe);A(_,pe)&&b(34067,_,d.width,d.height),t.unbindTexture()}else if(Y){const fe=d.texture;for(let H=0,me=fe.length;H<me;H++){const re=fe[H],_e=n.get(re);t.bindTexture(3553,_e.__webglTexture),be(3553,re,pe),L(B.__webglFramebuffer,d,re,36064+H,3553),A(re,pe)&&b(3553,re,d.width,d.height)}t.unbindTexture()}else{let fe=3553;ce&&(a?fe=_.isDataTexture3D?32879:35866:console.warn("THREE.DataTexture3D and THREE.DataTexture2DArray only supported with WebGL2.")),t.bindTexture(fe,G.__webglTexture),be(fe,_,pe),L(B.__webglFramebuffer,d,_,36064,fe),A(_,pe)&&b(fe,_,d.width,d.height,d.depth),t.unbindTexture()}d.depthBuffer&&N(d)}function ue(d){const _=p(d)||a,B=d.isWebGLMultipleRenderTargets===!0?d.texture:[d.texture];for(let G=0,W=B.length;G<W;G++){const Y=B[G];if(A(Y,_)){const he=d.isWebGLCubeRenderTarget?34067:3553,ce=n.get(Y).__webglTexture;t.bindTexture(he,ce),b(he,Y,d.width,d.height),t.unbindTexture()}}}function le(d){if(d.isWebGLMultisampleRenderTarget)if(a){const _=d.width,B=d.height;let G=16384;d.depthBuffer&&(G|=256),d.stencilBuffer&&(G|=1024);const W=n.get(d);t.bindFramebuffer(36008,W.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,W.__webglFramebuffer),i.blitFramebuffer(0,0,_,B,0,0,_,B,G,9728),t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,W.__webglMultisampledFramebuffer)}else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.")}function ge(d){return a&&d.isWebGLMultisampleRenderTarget?Math.min(h,d.samples):0}function j(d){const _=o.render.frame;f.get(d)!==_&&(f.set(d,_),d.update())}let S=!1,T=!1;function P(d,_){d&&d.isWebGLRenderTarget&&(S===!1&&(console.warn("THREE.WebGLTextures.safeSetTexture2D: don't use render targets as textures. Use their .texture property instead."),S=!0),d=d.texture),$(d,_)}function w(d,_){d&&d.isWebGLCubeRenderTarget&&(T===!1&&(console.warn("THREE.WebGLTextures.safeSetTextureCube: don't use cube render targets as textures. Use their .texture property instead."),T=!0),d=d.texture),V(d,_)}this.allocateTextureUnit=J,this.resetTextureUnits=ne,this.setTexture2D=$,this.setTexture2DArray=ee,this.setTexture3D=K,this.setTextureCube=V,this.setupRenderTarget=ie,this.updateRenderTargetMipmap=ue,this.updateMultisampleRenderTarget=le,this.safeSetTexture2D=P,this.safeSetTextureCube=w}function Gv(i,e,t){const n=t.isWebGL2;function r(s){let o;if(s===An)return 5121;if(s===fg)return 32819;if(s===dg)return 32820;if(s===pg)return 33635;if(s===cg)return 5120;if(s===ug)return 5122;if(s===Rs)return 5123;if(s===hg)return 5124;if(s===Ps)return 5125;if(s===Ln)return 5126;if(s===Ai)return n?5131:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===mg)return 6406;if(s===Li)return 6407;if(s===wt)return 6408;if(s===gg)return 6409;if(s===xg)return 6410;if(s===Ci)return 6402;if(s===Cr)return 34041;if(s===_g)return 6403;if(s===vg)return 36244;if(s===bg)return 33319;if(s===Mg)return 33320;if(s===wg)return 36248;if(s===Sg)return 36249;if(s===Pu||s===Iu||s===Du||s===Nu)if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===Pu)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Iu)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Du)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Nu)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Fu||s===Bu||s===Ou||s===zu)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===Fu)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Bu)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Ou)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===zu)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Tg)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if((s===Uu||s===Hu)&&(o=e.get("WEBGL_compressed_texture_etc"),o!==null)){if(s===Uu)return o.COMPRESSED_RGB8_ETC2;if(s===Hu)return o.COMPRESSED_RGBA8_ETC2_EAC}if(s===Eg||s===Ag||s===Lg||s===Cg||s===Rg||s===Pg||s===Ig||s===Dg||s===Ng||s===Fg||s===Bg||s===Og||s===zg||s===Ug||s===kg||s===Vg||s===Gg||s===Wg||s===qg||s===jg||s===Xg||s===Yg||s===Zg||s===Jg||s===$g||s===Kg||s===Qg||s===ex)return o=e.get("WEBGL_compressed_texture_astc"),o!==null?s:null;if(s===Hg)return o=e.get("EXT_texture_compression_bptc"),o!==null?s:null;if(s===Lr)return n?34042:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null)}return{convert:r}}class Xh extends Lt{constructor(e=[]){super();this.cameras=e}}Xh.prototype.isArrayCamera=!0;class zr extends ke{constructor(){super();this.type="Group"}}zr.prototype.isGroup=!0;const Wv={type:"move"};class fl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new zr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new zr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new zr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred")if(a!==null&&(r=t.getPose(e.targetRaySpace,n),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Wv))),c&&e.hand){o=!0;for(const y of e.hand.values()){const v=t.getJointPose(y,n);if(c.joints[y.jointName]===void 0){const g=new zr;g.matrixAutoUpdate=!1,g.visible=!1,c.joints[y.jointName]=g,c.add(g)}const p=c.joints[y.jointName];v!==null&&(p.matrix.fromArray(v.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.jointRadius=v.radius),p.visible=v!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),m=.02,x=.005;c.inputState.pinching&&f>m+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=m-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}}class qv extends Cn{constructor(e,t){super();const n=this,r=e.state;let s=null,o=1,a=null,l="local-floor",c=null,u=null,h=null,f=null,m=null,x=!1,y=null,v=null,p=null,g=null,A=null,b=null;const E=[],I=new Map,M=new Lt;M.layers.enable(1),M.viewport=new We;const z=new Lt;z.layers.enable(2),z.viewport=new We;const Q=[M,z],Z=new Xh;Z.layers.enable(1),Z.layers.enable(2);let F=null,ne=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(C){let L=E[C];return L===void 0&&(L=new fl,E[C]=L),L.getTargetRaySpace()},this.getControllerGrip=function(C){let L=E[C];return L===void 0&&(L=new fl,E[C]=L),L.getGripSpace()},this.getHand=function(C){let L=E[C];return L===void 0&&(L=new fl,E[C]=L),L.getHandSpace()};function J(C){const L=I.get(C.inputSource);L&&L.dispatchEvent({type:C.type,data:C.inputSource})}function $(){I.forEach(function(C,L){C.disconnect(L)}),I.clear(),F=null,ne=null,r.bindXRFramebuffer(null),e.setRenderTarget(e.getRenderTarget()),h&&t.deleteFramebuffer(h),y&&t.deleteFramebuffer(y),v&&t.deleteRenderbuffer(v),p&&t.deleteRenderbuffer(p),h=null,y=null,v=null,p=null,m=null,f=null,u=null,s=null,X.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(C){o=C,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(C){l=C,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return a},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(C){if(s=C,s!==null){s.addEventListener("select",J),s.addEventListener("selectstart",J),s.addEventListener("selectend",J),s.addEventListener("squeeze",J),s.addEventListener("squeezestart",J),s.addEventListener("squeezeend",J),s.addEventListener("end",$),s.addEventListener("inputsourceschange",ee);const L=t.getContextAttributes();if(L.xrCompatible!==!0&&await t.makeXRCompatible(),s.renderState.layers===void 0){const k={antialias:L.antialias,alpha:L.alpha,depth:L.depth,stencil:L.stencil,framebufferScaleFactor:o};m=new XRWebGLLayer(s,t,k),s.updateRenderState({baseLayer:m})}else if(t instanceof WebGLRenderingContext){const k={antialias:!0,alpha:L.alpha,depth:L.depth,stencil:L.stencil,framebufferScaleFactor:o};m=new XRWebGLLayer(s,t,k),s.updateRenderState({layers:[m]})}else{x=L.antialias;let k=null;L.depth&&(b=256,L.stencil&&(b|=1024),A=L.stencil?33306:36096,k=L.stencil?35056:33190);const U={colorFormat:L.alpha?32856:32849,depthFormat:k,scaleFactor:o};u=new XRWebGLBinding(s,t),f=u.createProjectionLayer(U),h=t.createFramebuffer(),s.updateRenderState({layers:[f]}),x&&(y=t.createFramebuffer(),v=t.createRenderbuffer(),t.bindRenderbuffer(36161,v),t.renderbufferStorageMultisample(36161,4,32856,f.textureWidth,f.textureHeight),r.bindFramebuffer(36160,y),t.framebufferRenderbuffer(36160,36064,36161,v),t.bindRenderbuffer(36161,null),k!==null&&(p=t.createRenderbuffer(),t.bindRenderbuffer(36161,p),t.renderbufferStorageMultisample(36161,4,k,f.textureWidth,f.textureHeight),t.framebufferRenderbuffer(36160,A,36161,p),t.bindRenderbuffer(36161,null)),r.bindFramebuffer(36160,null))}a=await s.requestReferenceSpace(l),X.setContext(s),X.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function ee(C){const L=s.inputSources;for(let k=0;k<E.length;k++)I.set(L[k],E[k]);for(let k=0;k<C.removed.length;k++){const U=C.removed[k],N=I.get(U);N&&(N.dispatchEvent({type:"disconnected",data:U}),I.delete(U))}for(let k=0;k<C.added.length;k++){const U=C.added[k],N=I.get(U);N&&N.dispatchEvent({type:"connected",data:U})}}const K=new D,V=new D;function q(C,L,k){K.setFromMatrixPosition(L.matrixWorld),V.setFromMatrixPosition(k.matrixWorld);const U=K.distanceTo(V),N=L.projectionMatrix.elements,ie=k.projectionMatrix.elements,ue=N[14]/(N[10]-1),le=N[14]/(N[10]+1),ge=(N[9]+1)/N[5],j=(N[9]-1)/N[5],S=(N[8]-1)/N[0],T=(ie[8]+1)/ie[0],P=ue*S,w=ue*T,d=U/(-S+T),_=d*-S;L.matrixWorld.decompose(C.position,C.quaternion,C.scale),C.translateX(_),C.translateZ(d),C.matrixWorld.compose(C.position,C.quaternion,C.scale),C.matrixWorldInverse.copy(C.matrixWorld).invert();const B=ue+d,G=le+d,W=P-_,Y=w+(U-_),he=ge*le/G*B,ce=j*le/G*B;C.projectionMatrix.makePerspective(W,Y,he,ce,B,G)}function xe(C,L){L===null?C.matrixWorld.copy(C.matrix):C.matrixWorld.multiplyMatrices(L.matrixWorld,C.matrix),C.matrixWorldInverse.copy(C.matrixWorld).invert()}this.updateCamera=function(C){if(s===null)return;Z.near=z.near=M.near=C.near,Z.far=z.far=M.far=C.far,(F!==Z.near||ne!==Z.far)&&(s.updateRenderState({depthNear:Z.near,depthFar:Z.far}),F=Z.near,ne=Z.far);const L=C.parent,k=Z.cameras;xe(Z,L);for(let N=0;N<k.length;N++)xe(k[N],L);Z.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),C.position.copy(Z.position),C.quaternion.copy(Z.quaternion),C.scale.copy(Z.scale),C.matrix.copy(Z.matrix),C.matrixWorld.copy(Z.matrixWorld);const U=C.children;for(let N=0,ie=U.length;N<ie;N++)U[N].updateMatrixWorld(!0);k.length===2?q(Z,M,z):Z.projectionMatrix.copy(M.projectionMatrix)},this.getCamera=function(){return Z},this.getFoveation=function(){if(f!==null)return f.fixedFoveation;if(m!==null)return m.fixedFoveation},this.setFoveation=function(C){f!==null&&(f.fixedFoveation=C),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=C)};let be=null;function ve(C,L){if(c=L.getViewerPose(a),g=L,c!==null){const U=c.views;m!==null&&r.bindXRFramebuffer(m.framebuffer);let N=!1;U.length!==Z.cameras.length&&(Z.cameras.length=0,N=!0);for(let ie=0;ie<U.length;ie++){const ue=U[ie];let le=null;if(m!==null)le=m.getViewport(ue);else{const j=u.getViewSubImage(f,ue);r.bindXRFramebuffer(h),j.depthStencilTexture!==void 0&&t.framebufferTexture2D(36160,A,3553,j.depthStencilTexture,0),t.framebufferTexture2D(36160,36064,3553,j.colorTexture,0),le=j.viewport}const ge=Q[ie];ge.matrix.fromArray(ue.transform.matrix),ge.projectionMatrix.fromArray(ue.projectionMatrix),ge.viewport.set(le.x,le.y,le.width,le.height),ie===0&&Z.matrix.copy(ge.matrix),N===!0&&Z.cameras.push(ge)}x&&(r.bindXRFramebuffer(y),b!==null&&t.clear(b))}const k=s.inputSources;for(let U=0;U<E.length;U++){const N=E[U],ie=k[U];N.update(ie,L,a)}if(be&&be(C,L),x){const U=f.textureWidth,N=f.textureHeight;r.bindFramebuffer(36008,y),r.bindFramebuffer(36009,h),t.invalidateFramebuffer(36008,[A]),t.invalidateFramebuffer(36009,[A]),t.blitFramebuffer(0,0,U,N,0,0,U,N,16384,9728),t.invalidateFramebuffer(36008,[36064]),r.bindFramebuffer(36008,null),r.bindFramebuffer(36009,null),r.bindFramebuffer(36160,y)}g=null}const X=new hh;X.setAnimationLoop(ve),this.setAnimationLoop=function(C){be=C},this.dispose=function(){}}}function jv(i){function e(p,g){p.fogColor.value.copy(g.color),g.isFog?(p.fogNear.value=g.near,p.fogFar.value=g.far):g.isFogExp2&&(p.fogDensity.value=g.density)}function t(p,g,A,b,E){g.isMeshBasicMaterial?n(p,g):g.isMeshLambertMaterial?(n(p,g),l(p,g)):g.isMeshToonMaterial?(n(p,g),u(p,g)):g.isMeshPhongMaterial?(n(p,g),c(p,g)):g.isMeshStandardMaterial?(n(p,g),g.isMeshPhysicalMaterial?f(p,g,E):h(p,g)):g.isMeshMatcapMaterial?(n(p,g),m(p,g)):g.isMeshDepthMaterial?(n(p,g),x(p,g)):g.isMeshDistanceMaterial?(n(p,g),y(p,g)):g.isMeshNormalMaterial?(n(p,g),v(p,g)):g.isLineBasicMaterial?(r(p,g),g.isLineDashedMaterial&&s(p,g)):g.isPointsMaterial?o(p,g,A,b):g.isSpriteMaterial?a(p,g):g.isShadowMaterial?(p.color.value.copy(g.color),p.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function n(p,g){p.opacity.value=g.opacity,g.color&&p.diffuse.value.copy(g.color),g.emissive&&p.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(p.map.value=g.map),g.alphaMap&&(p.alphaMap.value=g.alphaMap),g.specularMap&&(p.specularMap.value=g.specularMap),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest);const A=i.get(g).envMap;if(A){p.envMap.value=A,p.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=g.reflectivity,p.ior.value=g.ior,p.refractionRatio.value=g.refractionRatio;const I=i.get(A).__maxMipLevel;I!==void 0&&(p.maxMipLevel.value=I)}g.lightMap&&(p.lightMap.value=g.lightMap,p.lightMapIntensity.value=g.lightMapIntensity),g.aoMap&&(p.aoMap.value=g.aoMap,p.aoMapIntensity.value=g.aoMapIntensity);let b;g.map?b=g.map:g.specularMap?b=g.specularMap:g.displacementMap?b=g.displacementMap:g.normalMap?b=g.normalMap:g.bumpMap?b=g.bumpMap:g.roughnessMap?b=g.roughnessMap:g.metalnessMap?b=g.metalnessMap:g.alphaMap?b=g.alphaMap:g.emissiveMap?b=g.emissiveMap:g.clearcoatMap?b=g.clearcoatMap:g.clearcoatNormalMap?b=g.clearcoatNormalMap:g.clearcoatRoughnessMap?b=g.clearcoatRoughnessMap:g.specularIntensityMap?b=g.specularIntensityMap:g.specularColorMap?b=g.specularColorMap:g.transmissionMap?b=g.transmissionMap:g.thicknessMap?b=g.thicknessMap:g.sheenColorMap?b=g.sheenColorMap:g.sheenRoughnessMap&&(b=g.sheenRoughnessMap),b!==void 0&&(b.isWebGLRenderTarget&&(b=b.texture),b.matrixAutoUpdate===!0&&b.updateMatrix(),p.uvTransform.value.copy(b.matrix));let E;g.aoMap?E=g.aoMap:g.lightMap&&(E=g.lightMap),E!==void 0&&(E.isWebGLRenderTarget&&(E=E.texture),E.matrixAutoUpdate===!0&&E.updateMatrix(),p.uv2Transform.value.copy(E.matrix))}function r(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity}function s(p,g){p.dashSize.value=g.dashSize,p.totalSize.value=g.dashSize+g.gapSize,p.scale.value=g.scale}function o(p,g,A,b){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.size.value=g.size*A,p.scale.value=b*.5,g.map&&(p.map.value=g.map),g.alphaMap&&(p.alphaMap.value=g.alphaMap),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest);let E;g.map?E=g.map:g.alphaMap&&(E=g.alphaMap),E!==void 0&&(E.matrixAutoUpdate===!0&&E.updateMatrix(),p.uvTransform.value.copy(E.matrix))}function a(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.rotation.value=g.rotation,g.map&&(p.map.value=g.map),g.alphaMap&&(p.alphaMap.value=g.alphaMap),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest);let A;g.map?A=g.map:g.alphaMap&&(A=g.alphaMap),A!==void 0&&(A.matrixAutoUpdate===!0&&A.updateMatrix(),p.uvTransform.value.copy(A.matrix))}function l(p,g){g.emissiveMap&&(p.emissiveMap.value=g.emissiveMap)}function c(p,g){p.specular.value.copy(g.specular),p.shininess.value=Math.max(g.shininess,1e-4),g.emissiveMap&&(p.emissiveMap.value=g.emissiveMap),g.bumpMap&&(p.bumpMap.value=g.bumpMap,p.bumpScale.value=g.bumpScale,g.side===ot&&(p.bumpScale.value*=-1)),g.normalMap&&(p.normalMap.value=g.normalMap,p.normalScale.value.copy(g.normalScale),g.side===ot&&p.normalScale.value.negate()),g.displacementMap&&(p.displacementMap.value=g.displacementMap,p.displacementScale.value=g.displacementScale,p.displacementBias.value=g.displacementBias)}function u(p,g){g.gradientMap&&(p.gradientMap.value=g.gradientMap),g.emissiveMap&&(p.emissiveMap.value=g.emissiveMap),g.bumpMap&&(p.bumpMap.value=g.bumpMap,p.bumpScale.value=g.bumpScale,g.side===ot&&(p.bumpScale.value*=-1)),g.normalMap&&(p.normalMap.value=g.normalMap,p.normalScale.value.copy(g.normalScale),g.side===ot&&p.normalScale.value.negate()),g.displacementMap&&(p.displacementMap.value=g.displacementMap,p.displacementScale.value=g.displacementScale,p.displacementBias.value=g.displacementBias)}function h(p,g){p.roughness.value=g.roughness,p.metalness.value=g.metalness,g.roughnessMap&&(p.roughnessMap.value=g.roughnessMap),g.metalnessMap&&(p.metalnessMap.value=g.metalnessMap),g.emissiveMap&&(p.emissiveMap.value=g.emissiveMap),g.bumpMap&&(p.bumpMap.value=g.bumpMap,p.bumpScale.value=g.bumpScale,g.side===ot&&(p.bumpScale.value*=-1)),g.normalMap&&(p.normalMap.value=g.normalMap,p.normalScale.value.copy(g.normalScale),g.side===ot&&p.normalScale.value.negate()),g.displacementMap&&(p.displacementMap.value=g.displacementMap,p.displacementScale.value=g.displacementScale,p.displacementBias.value=g.displacementBias),i.get(g).envMap&&(p.envMapIntensity.value=g.envMapIntensity)}function f(p,g,A){h(p,g),p.ior.value=g.ior,g.sheen>0&&(p.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),p.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(p.sheenColorMap.value=g.sheenColorMap),g.sheenRoughnessMap&&(p.sheenRoughnessMap.value=g.sheenRoughnessMap)),g.clearcoat>0&&(p.clearcoat.value=g.clearcoat,p.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(p.clearcoatMap.value=g.clearcoatMap),g.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap),g.clearcoatNormalMap&&(p.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),p.clearcoatNormalMap.value=g.clearcoatNormalMap,g.side===ot&&p.clearcoatNormalScale.value.negate())),g.transmission>0&&(p.transmission.value=g.transmission,p.transmissionSamplerMap.value=A.texture,p.transmissionSamplerSize.value.set(A.width,A.height),g.transmissionMap&&(p.transmissionMap.value=g.transmissionMap),p.thickness.value=g.thickness,g.thicknessMap&&(p.thicknessMap.value=g.thicknessMap),p.attenuationDistance.value=g.attenuationDistance,p.attenuationColor.value.copy(g.attenuationColor)),p.specularIntensity.value=g.specularIntensity,p.specularColor.value.copy(g.specularColor),g.specularIntensityMap&&(p.specularIntensityMap.value=g.specularIntensityMap),g.specularColorMap&&(p.specularColorMap.value=g.specularColorMap)}function m(p,g){g.matcap&&(p.matcap.value=g.matcap),g.bumpMap&&(p.bumpMap.value=g.bumpMap,p.bumpScale.value=g.bumpScale,g.side===ot&&(p.bumpScale.value*=-1)),g.normalMap&&(p.normalMap.value=g.normalMap,p.normalScale.value.copy(g.normalScale),g.side===ot&&p.normalScale.value.negate()),g.displacementMap&&(p.displacementMap.value=g.displacementMap,p.displacementScale.value=g.displacementScale,p.displacementBias.value=g.displacementBias)}function x(p,g){g.displacementMap&&(p.displacementMap.value=g.displacementMap,p.displacementScale.value=g.displacementScale,p.displacementBias.value=g.displacementBias)}function y(p,g){g.displacementMap&&(p.displacementMap.value=g.displacementMap,p.displacementScale.value=g.displacementScale,p.displacementBias.value=g.displacementBias),p.referencePosition.value.copy(g.referencePosition),p.nearDistance.value=g.nearDistance,p.farDistance.value=g.farDistance}function v(p,g){g.bumpMap&&(p.bumpMap.value=g.bumpMap,p.bumpScale.value=g.bumpScale,g.side===ot&&(p.bumpScale.value*=-1)),g.normalMap&&(p.normalMap.value=g.normalMap,p.normalScale.value.copy(g.normalScale),g.side===ot&&p.normalScale.value.negate()),g.displacementMap&&(p.displacementMap.value=g.displacementMap,p.displacementScale.value=g.displacementScale,p.displacementBias.value=g.displacementBias)}return{refreshFogUniforms:e,refreshMaterialUniforms:t}}function Xv(){const i=Os("canvas");return i.style.display="block",i}function Ge(i={}){const e=i.canvas!==void 0?i.canvas:Xv(),t=i.context!==void 0?i.context:null,n=i.alpha!==void 0?i.alpha:!1,r=i.depth!==void 0?i.depth:!0,s=i.stencil!==void 0?i.stencil:!0,o=i.antialias!==void 0?i.antialias:!1,a=i.premultipliedAlpha!==void 0?i.premultipliedAlpha:!0,l=i.preserveDrawingBuffer!==void 0?i.preserveDrawingBuffer:!1,c=i.powerPreference!==void 0?i.powerPreference:"default",u=i.failIfMajorPerformanceCaveat!==void 0?i.failIfMajorPerformanceCaveat:!1;let h=null,f=null;const m=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.gammaFactor=2,this.outputEncoding=gt,this.physicallyCorrectLights=!1,this.toneMapping=ii,this.toneMappingExposure=1;const y=this;let v=!1,p=0,g=0,A=null,b=-1,E=null;const I=new We,M=new We;let z=null,Q=e.width,Z=e.height,F=1,ne=null,J=null;const $=new We(0,0,Q,Z),ee=new We(0,0,Q,Z);let K=!1;const V=[],q=new no;let xe=!1,be=!1,ve=null;const X=new Se,C=new D,L={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function k(){return A===null?F:1}let U=t;function N(R,te){for(let ae=0;ae<R.length;ae++){const se=R[ae],de=e.getContext(se,te);if(de!==null)return de}return null}try{const R={alpha:n,depth:r,stencil:s,antialias:o,premultipliedAlpha:a,preserveDrawingBuffer:l,powerPreference:c,failIfMajorPerformanceCaveat:u};if(e.addEventListener("webglcontextlost",Re,!1),e.addEventListener("webglcontextrestored",Ce,!1),U===null){const te=["webgl2","webgl","experimental-webgl"];if(y.isWebGL1Renderer===!0&&te.shift(),U=N(te,R),U===null)throw N(te)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}U.getShaderPrecisionFormat===void 0&&(U.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let ie,ue,le,ge,j,S,T,P,w,d,_,B,G,W,Y,he,ce,pe,fe,H,me,re,_e;function O(){ie=new g_(U),ue=new l_(U,ie,i),ie.init(ue),re=new Gv(U,ie,ue),le=new kv(U,ie,ue),V[0]=1029,ge=new __(U),j=new Rv,S=new Vv(U,ie,le,j,ue,re,ge),T=new u_(y),P=new m_(y),w=new Ix(U,ue),_e=new o_(U,ie,w,ue),d=new x_(U,w,ge,_e),_=new w_(U,d,w,ge),fe=new M_(U,ue,S),he=new c_(j),B=new Cv(y,T,P,ie,ue,_e,he),G=new jv(j),W=new Iv(j),Y=new zv(ie,ue),pe=new s_(y,T,le,_,a),ce=new jh(y,_,ue),H=new a_(U,ie,ge,ue),me=new y_(U,ie,ge,ue),ge.programs=B.programs,y.capabilities=ue,y.extensions=ie,y.properties=j,y.renderLists=W,y.shadowMap=ce,y.state=le,y.info=ge}O();const ye=new qv(y,U);this.xr=ye,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const R=ie.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=ie.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return F},this.setPixelRatio=function(R){R!==void 0&&(F=R,this.setSize(Q,Z,!1))},this.getSize=function(R){return R.set(Q,Z)},this.setSize=function(R,te,ae){if(ye.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Q=R,Z=te,e.width=Math.floor(R*F),e.height=Math.floor(te*F),ae!==!1&&(e.style.width=R+"px",e.style.height=te+"px"),this.setViewport(0,0,R,te)},this.getDrawingBufferSize=function(R){return R.set(Q*F,Z*F).floor()},this.setDrawingBufferSize=function(R,te,ae){Q=R,Z=te,F=ae,e.width=Math.floor(R*ae),e.height=Math.floor(te*ae),this.setViewport(0,0,R,te)},this.getCurrentViewport=function(R){return R.copy(I)},this.getViewport=function(R){return R.copy($)},this.setViewport=function(R,te,ae,se){R.isVector4?$.set(R.x,R.y,R.z,R.w):$.set(R,te,ae,se),le.viewport(I.copy($).multiplyScalar(F).floor())},this.getScissor=function(R){return R.copy(ee)},this.setScissor=function(R,te,ae,se){R.isVector4?ee.set(R.x,R.y,R.z,R.w):ee.set(R,te,ae,se),le.scissor(M.copy(ee).multiplyScalar(F).floor())},this.getScissorTest=function(){return K},this.setScissorTest=function(R){le.setScissorTest(K=R)},this.setOpaqueSort=function(R){ne=R},this.setTransparentSort=function(R){J=R},this.getClearColor=function(R){return R.copy(pe.getClearColor())},this.setClearColor=function(){pe.setClearColor.apply(pe,arguments)},this.getClearAlpha=function(){return pe.getClearAlpha()},this.setClearAlpha=function(){pe.setClearAlpha.apply(pe,arguments)},this.clear=function(R,te,ae){let se=0;(R===void 0||R)&&(se|=16384),(te===void 0||te)&&(se|=256),(ae===void 0||ae)&&(se|=1024),U.clear(se)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Re,!1),e.removeEventListener("webglcontextrestored",Ce,!1),W.dispose(),Y.dispose(),j.dispose(),T.dispose(),P.dispose(),_.dispose(),_e.dispose(),ye.dispose(),ye.removeEventListener("sessionstart",Nt),ye.removeEventListener("sessionend",zl),ve&&(ve.dispose(),ve=null),Gn.stop()};function Re(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),v=!0}function Ce(){console.log("THREE.WebGLRenderer: Context Restored."),v=!1;const R=ge.autoReset,te=ce.enabled,ae=ce.autoUpdate,se=ce.needsUpdate,de=ce.type;O(),ge.autoReset=R,ce.enabled=te,ce.autoUpdate=ae,ce.needsUpdate=se,ce.type=de}function $e(R){const te=R.target;te.removeEventListener("dispose",$e),Le(te)}function Le(R){Ye(R),j.remove(R)}function Ye(R){const te=j.get(R).programs;te!==void 0&&te.forEach(function(ae){B.releaseProgram(ae)})}this.renderBufferDirect=function(R,te,ae,se,de,Ae){te===null&&(te=L);const Ee=de.isMesh&&de.matrixWorld.determinant()<0,Te=Yf(R,te,ae,se,de);le.setMaterial(se,Ee);let Pe=ae.index;const He=ae.attributes.position;if(Pe===null){if(He===void 0||He.count===0)return}else if(Pe.count===0)return;let Fe=1;se.wireframe===!0&&(Pe=d.getWireframeAttribute(ae),Fe=2),_e.setup(de,se,Te,ae,Pe);let Be,et=H;Pe!==null&&(Be=w.get(Pe),et=me,et.setIndex(Be));const Wn=Pe!==null?Pe.count:He.count,ze=ae.drawRange.start*Fe,hr=ae.drawRange.count*Fe,Ze=Ae!==null?Ae.start*Fe:0,qn=Ae!==null?Ae.count*Fe:1/0,jn=Math.max(ze,Ze),Xn=Math.min(Wn,ze+hr,Ze+qn)-1,vn=Math.max(0,Xn-jn+1);if(vn!==0){if(de.isMesh)se.wireframe===!0?(le.setLineWidth(se.wireframeLinewidth*k()),et.setMode(1)):et.setMode(4);else if(de.isLine){let tt=se.linewidth;tt===void 0&&(tt=1),le.setLineWidth(tt*k()),de.isLineSegments?et.setMode(1):de.isLineLoop?et.setMode(2):et.setMode(3)}else de.isPoints?et.setMode(0):de.isSprite&&et.setMode(4);if(de.isInstancedMesh)et.renderInstances(jn,vn,de.count);else if(ae.isInstancedBufferGeometry){const tt=Math.min(ae.instanceCount,ae._maxInstanceCount);et.renderInstances(jn,vn,tt)}else et.render(jn,vn)}},this.compile=function(R,te){f=Y.get(R),f.init(),x.push(f),R.traverseVisible(function(ae){ae.isLight&&ae.layers.test(te.layers)&&(f.pushLight(ae),ae.castShadow&&f.pushShadow(ae))}),f.setupLights(y.physicallyCorrectLights),R.traverse(function(ae){const se=ae.material;if(se)if(Array.isArray(se))for(let de=0;de<se.length;de++){const Ae=se[de];Ao(Ae,R,ae)}else Ao(se,R,ae)}),x.pop(),f=null};let ht=null;function Ht(R){ht&&ht(R)}function Nt(){Gn.stop()}function zl(){Gn.start()}const Gn=new hh;Gn.setAnimationLoop(Ht),typeof window!="undefined"&&Gn.setContext(window),this.setAnimationLoop=function(R){ht=R,ye.setAnimationLoop(R),R===null?Gn.stop():Gn.start()},ye.addEventListener("sessionstart",Nt),ye.addEventListener("sessionend",zl),this.render=function(R,te){if(te!==void 0&&te.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(v===!0)return;R.autoUpdate===!0&&R.updateMatrixWorld(),te.parent===null&&te.updateMatrixWorld(),ye.enabled===!0&&ye.isPresenting===!0&&(ye.cameraAutoUpdate===!0&&ye.updateCamera(te),te=ye.getCamera()),R.isScene===!0&&R.onBeforeRender(y,R,te,A),f=Y.get(R,x.length),f.init(),x.push(f),X.multiplyMatrices(te.projectionMatrix,te.matrixWorldInverse),q.setFromProjectionMatrix(X),be=this.localClippingEnabled,xe=he.init(this.clippingPlanes,be,te),h=W.get(R,m.length),h.init(),m.push(h),Ul(R,te,0,y.sortObjects),h.finish(),y.sortObjects===!0&&h.sort(ne,J),xe===!0&&he.beginShadows();const ae=f.state.shadowsArray;if(ce.render(ae,R,te),xe===!0&&he.endShadows(),this.info.autoReset===!0&&this.info.reset(),pe.render(h,R),f.setupLights(y.physicallyCorrectLights),te.isArrayCamera){const se=te.cameras;for(let de=0,Ae=se.length;de<Ae;de++){const Ee=se[de];Hl(h,R,Ee,Ee.viewport)}}else Hl(h,R,te);A!==null&&(S.updateMultisampleRenderTarget(A),S.updateRenderTargetMipmap(A)),R.isScene===!0&&R.onAfterRender(y,R,te),le.buffers.depth.setTest(!0),le.buffers.depth.setMask(!0),le.buffers.color.setMask(!0),le.setPolygonOffset(!1),_e.resetDefaultState(),b=-1,E=null,x.pop(),x.length>0?f=x[x.length-1]:f=null,m.pop(),m.length>0?h=m[m.length-1]:h=null};function Ul(R,te,ae,se){if(R.visible===!1)return;if(R.layers.test(te.layers)){if(R.isGroup)ae=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(te);else if(R.isLight)f.pushLight(R),R.castShadow&&f.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||q.intersectsSprite(R)){se&&C.setFromMatrixPosition(R.matrixWorld).applyMatrix4(X);const Ee=_.update(R),Te=R.material;Te.visible&&h.push(R,Ee,Te,ae,C.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(R.isSkinnedMesh&&R.skeleton.frame!==ge.render.frame&&(R.skeleton.update(),R.skeleton.frame=ge.render.frame),!R.frustumCulled||q.intersectsObject(R))){se&&C.setFromMatrixPosition(R.matrixWorld).applyMatrix4(X);const Ee=_.update(R),Te=R.material;if(Array.isArray(Te)){const Pe=Ee.groups;for(let He=0,Fe=Pe.length;He<Fe;He++){const Be=Pe[He],et=Te[Be.materialIndex];et&&et.visible&&h.push(R,Ee,et,ae,C.z,Be)}}else Te.visible&&h.push(R,Ee,Te,ae,C.z,null)}}const Ae=R.children;for(let Ee=0,Te=Ae.length;Ee<Te;Ee++)Ul(Ae[Ee],te,ae,se)}function Hl(R,te,ae,se){const de=R.opaque,Ae=R.transmissive,Ee=R.transparent;f.setupLightsView(ae),Ae.length>0&&jf(de,te,ae),se&&le.viewport(I.copy(se)),de.length>0&&Qr(de,te,ae),Ae.length>0&&Qr(Ae,te,ae),Ee.length>0&&Qr(Ee,te,ae)}function jf(R,te,ae){if(ve===null){const Ee=o===!0&&ue.isWebGL2===!0?Zu:en;ve=new Ee(1024,1024,{generateMipmaps:!0,type:re.convert(Ai)!==null?Ai:An,minFilter:Cs,magFilter:ct,wrapS:Pt,wrapT:Pt})}const se=y.getRenderTarget();y.setRenderTarget(ve),y.clear();const de=y.toneMapping;y.toneMapping=ii,Qr(R,te,ae),y.toneMapping=de,S.updateMultisampleRenderTarget(ve),S.updateRenderTargetMipmap(ve),y.setRenderTarget(se)}function Qr(R,te,ae){const se=te.isScene===!0?te.overrideMaterial:null;for(let de=0,Ae=R.length;de<Ae;de++){const Ee=R[de],Te=Ee.object,Pe=Ee.geometry,He=se===null?Ee.material:se,Fe=Ee.group;Te.layers.test(ae.layers)&&Xf(Te,te,ae,Pe,He,Fe)}}function Xf(R,te,ae,se,de,Ae){R.onBeforeRender(y,te,ae,se,de,Ae),R.modelViewMatrix.multiplyMatrices(ae.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),de.onBeforeRender(y,te,ae,se,R,Ae),de.transparent===!0&&de.side===Ti?(de.side=ot,de.needsUpdate=!0,y.renderBufferDirect(ae,te,se,de,R,Ae),de.side=Sr,de.needsUpdate=!0,y.renderBufferDirect(ae,te,se,de,R,Ae),de.side=Ti):y.renderBufferDirect(ae,te,se,de,R,Ae),R.onAfterRender(y,te,ae,se,de,Ae)}function Ao(R,te,ae){te.isScene!==!0&&(te=L);const se=j.get(R),de=f.state.lights,Ae=f.state.shadowsArray,Ee=de.state.version,Te=B.getParameters(R,de.state,Ae,te,ae),Pe=B.getProgramCacheKey(Te);let He=se.programs;se.environment=R.isMeshStandardMaterial?te.environment:null,se.fog=te.fog,se.envMap=(R.isMeshStandardMaterial?P:T).get(R.envMap||se.environment),He===void 0&&(R.addEventListener("dispose",$e),He=new Map,se.programs=He);let Fe=He.get(Pe);if(Fe!==void 0){if(se.currentProgram===Fe&&se.lightsStateVersion===Ee)return kl(R,Te),Fe}else Te.uniforms=B.getUniforms(R),R.onBuild(ae,Te,y),R.onBeforeCompile(Te,y),Fe=B.acquireProgram(Te,Pe),He.set(Pe,Fe),se.uniforms=Te.uniforms;const Be=se.uniforms;(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Be.clippingPlanes=he.uniform),kl(R,Te),se.needsLights=Jf(R),se.lightsStateVersion=Ee,se.needsLights&&(Be.ambientLightColor.value=de.state.ambient,Be.lightProbe.value=de.state.probe,Be.directionalLights.value=de.state.directional,Be.directionalLightShadows.value=de.state.directionalShadow,Be.spotLights.value=de.state.spot,Be.spotLightShadows.value=de.state.spotShadow,Be.rectAreaLights.value=de.state.rectArea,Be.ltc_1.value=de.state.rectAreaLTC1,Be.ltc_2.value=de.state.rectAreaLTC2,Be.pointLights.value=de.state.point,Be.pointLightShadows.value=de.state.pointShadow,Be.hemisphereLights.value=de.state.hemi,Be.directionalShadowMap.value=de.state.directionalShadowMap,Be.directionalShadowMatrix.value=de.state.directionalShadowMatrix,Be.spotShadowMap.value=de.state.spotShadowMap,Be.spotShadowMatrix.value=de.state.spotShadowMatrix,Be.pointShadowMap.value=de.state.pointShadowMap,Be.pointShadowMatrix.value=de.state.pointShadowMatrix);const et=Fe.getUniforms(),Wn=Un.seqWithValue(et.seq,Be);return se.currentProgram=Fe,se.uniformsList=Wn,Fe}function kl(R,te){const ae=j.get(R);ae.outputEncoding=te.outputEncoding,ae.instancing=te.instancing,ae.skinning=te.skinning,ae.morphTargets=te.morphTargets,ae.morphNormals=te.morphNormals,ae.morphTargetsCount=te.morphTargetsCount,ae.numClippingPlanes=te.numClippingPlanes,ae.numIntersection=te.numClipIntersection,ae.vertexAlphas=te.vertexAlphas,ae.vertexTangents=te.vertexTangents}function Yf(R,te,ae,se,de){te.isScene!==!0&&(te=L),S.resetTextureUnits();const Ae=te.fog,Ee=se.isMeshStandardMaterial?te.environment:null,Te=A===null?y.outputEncoding:A.texture.encoding,Pe=(se.isMeshStandardMaterial?P:T).get(se.envMap||Ee),He=se.vertexColors===!0&&!!ae.attributes.color&&ae.attributes.color.itemSize===4,Fe=!!se.normalMap&&!!ae.attributes.tangent,Be=!!ae.morphAttributes.position,et=!!ae.morphAttributes.normal,Wn=ae.morphAttributes.position?ae.morphAttributes.position.length:0,ze=j.get(se),hr=f.state.lights;if(xe===!0&&(be===!0||R!==E)){const kt=R===E&&se.id===b;he.setState(se,R,kt)}let Ze=!1;se.version===ze.__version?(ze.needsLights&&ze.lightsStateVersion!==hr.state.version||ze.outputEncoding!==Te||de.isInstancedMesh&&ze.instancing===!1||!de.isInstancedMesh&&ze.instancing===!0||de.isSkinnedMesh&&ze.skinning===!1||!de.isSkinnedMesh&&ze.skinning===!0||ze.envMap!==Pe||se.fog&&ze.fog!==Ae||ze.numClippingPlanes!==void 0&&(ze.numClippingPlanes!==he.numPlanes||ze.numIntersection!==he.numIntersection)||ze.vertexAlphas!==He||ze.vertexTangents!==Fe||ze.morphTargets!==Be||ze.morphNormals!==et||ue.isWebGL2===!0&&ze.morphTargetsCount!==Wn)&&(Ze=!0):(Ze=!0,ze.__version=se.version);let qn=ze.currentProgram;Ze===!0&&(qn=Ao(se,te,de));let jn=!1,Xn=!1,vn=!1;const tt=qn.getUniforms(),fr=ze.uniforms;if(le.useProgram(qn.program)&&(jn=!0,Xn=!0,vn=!0),se.id!==b&&(b=se.id,Xn=!0),jn||E!==R){if(tt.setValue(U,"projectionMatrix",R.projectionMatrix),ue.logarithmicDepthBuffer&&tt.setValue(U,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),E!==R&&(E=R,Xn=!0,vn=!0),se.isShaderMaterial||se.isMeshPhongMaterial||se.isMeshToonMaterial||se.isMeshStandardMaterial||se.envMap){const kt=tt.map.cameraPosition;kt!==void 0&&kt.setValue(U,C.setFromMatrixPosition(R.matrixWorld))}(se.isMeshPhongMaterial||se.isMeshToonMaterial||se.isMeshLambertMaterial||se.isMeshBasicMaterial||se.isMeshStandardMaterial||se.isShaderMaterial)&&tt.setValue(U,"isOrthographic",R.isOrthographicCamera===!0),(se.isMeshPhongMaterial||se.isMeshToonMaterial||se.isMeshLambertMaterial||se.isMeshBasicMaterial||se.isMeshStandardMaterial||se.isShaderMaterial||se.isShadowMaterial||de.isSkinnedMesh)&&tt.setValue(U,"viewMatrix",R.matrixWorldInverse)}if(de.isSkinnedMesh){tt.setOptional(U,de,"bindMatrix"),tt.setOptional(U,de,"bindMatrixInverse");const kt=de.skeleton;kt&&(ue.floatVertexTextures?(kt.boneTexture===null&&kt.computeBoneTexture(),tt.setValue(U,"boneTexture",kt.boneTexture,S),tt.setValue(U,"boneTextureSize",kt.boneTextureSize)):tt.setOptional(U,kt,"boneMatrices"))}return!!ae&&(ae.morphAttributes.position!==void 0||ae.morphAttributes.normal!==void 0)&&fe.update(de,ae,se,qn),(Xn||ze.receiveShadow!==de.receiveShadow)&&(ze.receiveShadow=de.receiveShadow,tt.setValue(U,"receiveShadow",de.receiveShadow)),Xn&&(tt.setValue(U,"toneMappingExposure",y.toneMappingExposure),ze.needsLights&&Zf(fr,vn),Ae&&se.fog&&G.refreshFogUniforms(fr,Ae),G.refreshMaterialUniforms(fr,se,F,Z,ve),Un.upload(U,ze.uniformsList,fr,S)),se.isShaderMaterial&&se.uniformsNeedUpdate===!0&&(Un.upload(U,ze.uniformsList,fr,S),se.uniformsNeedUpdate=!1),se.isSpriteMaterial&&tt.setValue(U,"center",de.center),tt.setValue(U,"modelViewMatrix",de.modelViewMatrix),tt.setValue(U,"normalMatrix",de.normalMatrix),tt.setValue(U,"modelMatrix",de.matrixWorld),qn}function Zf(R,te){R.ambientLightColor.needsUpdate=te,R.lightProbe.needsUpdate=te,R.directionalLights.needsUpdate=te,R.directionalLightShadows.needsUpdate=te,R.pointLights.needsUpdate=te,R.pointLightShadows.needsUpdate=te,R.spotLights.needsUpdate=te,R.spotLightShadows.needsUpdate=te,R.rectAreaLights.needsUpdate=te,R.hemisphereLights.needsUpdate=te}function Jf(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return p},this.getActiveMipmapLevel=function(){return g},this.getRenderTarget=function(){return A},this.setRenderTarget=function(R,te=0,ae=0){A=R,p=te,g=ae,R&&j.get(R).__webglFramebuffer===void 0&&S.setupRenderTarget(R);let se=null,de=!1,Ae=!1;if(R){const Te=R.texture;(Te.isDataTexture3D||Te.isDataTexture2DArray)&&(Ae=!0);const Pe=j.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(se=Pe[te],de=!0):R.isWebGLMultisampleRenderTarget?se=j.get(R).__webglMultisampledFramebuffer:se=Pe,I.copy(R.viewport),M.copy(R.scissor),z=R.scissorTest}else I.copy($).multiplyScalar(F).floor(),M.copy(ee).multiplyScalar(F).floor(),z=K;if(le.bindFramebuffer(36160,se)&&ue.drawBuffers){let Te=!1;if(R)if(R.isWebGLMultipleRenderTargets){const Pe=R.texture;if(V.length!==Pe.length||V[0]!==36064){for(let He=0,Fe=Pe.length;He<Fe;He++)V[He]=36064+He;V.length=Pe.length,Te=!0}}else(V.length!==1||V[0]!==36064)&&(V[0]=36064,V.length=1,Te=!0);else(V.length!==1||V[0]!==1029)&&(V[0]=1029,V.length=1,Te=!0);Te&&(ue.isWebGL2?U.drawBuffers(V):ie.get("WEBGL_draw_buffers").drawBuffersWEBGL(V))}if(le.viewport(I),le.scissor(M),le.setScissorTest(z),de){const Te=j.get(R.texture);U.framebufferTexture2D(36160,36064,34069+te,Te.__webglTexture,ae)}else if(Ae){const Te=j.get(R.texture),Pe=te||0;U.framebufferTextureLayer(36160,36064,Te.__webglTexture,ae||0,Pe)}b=-1},this.readRenderTargetPixels=function(R,te,ae,se,de,Ae,Ee){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=j.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ee!==void 0&&(Te=Te[Ee]),Te){le.bindFramebuffer(36160,Te);try{const Pe=R.texture,He=Pe.format,Fe=Pe.type;if(He!==wt&&re.convert(He)!==U.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Be=Fe===Ai&&(ie.has("EXT_color_buffer_half_float")||ue.isWebGL2&&ie.has("EXT_color_buffer_float"));if(Fe!==An&&re.convert(Fe)!==U.getParameter(35738)&&!(Fe===Ln&&(ue.isWebGL2||ie.has("OES_texture_float")||ie.has("WEBGL_color_buffer_float")))&&!Be){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U.checkFramebufferStatus(36160)===36053?te>=0&&te<=R.width-se&&ae>=0&&ae<=R.height-de&&U.readPixels(te,ae,se,de,re.convert(He),re.convert(Fe),Ae):console.error("THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete.")}finally{const Pe=A!==null?j.get(A).__webglFramebuffer:null;le.bindFramebuffer(36160,Pe)}}},this.copyFramebufferToTexture=function(R,te,ae=0){const se=Math.pow(2,-ae),de=Math.floor(te.image.width*se),Ae=Math.floor(te.image.height*se);let Ee=re.convert(te.format);ue.isWebGL2&&(Ee===6407&&(Ee=32849),Ee===6408&&(Ee=32856)),S.setTexture2D(te,0),U.copyTexImage2D(3553,ae,Ee,R.x,R.y,de,Ae,0),le.unbindTexture()},this.copyTextureToTexture=function(R,te,ae,se=0){const de=te.image.width,Ae=te.image.height,Ee=re.convert(ae.format),Te=re.convert(ae.type);S.setTexture2D(ae,0),U.pixelStorei(37440,ae.flipY),U.pixelStorei(37441,ae.premultiplyAlpha),U.pixelStorei(3317,ae.unpackAlignment),te.isDataTexture?U.texSubImage2D(3553,se,R.x,R.y,de,Ae,Ee,Te,te.image.data):te.isCompressedTexture?U.compressedTexSubImage2D(3553,se,R.x,R.y,te.mipmaps[0].width,te.mipmaps[0].height,Ee,te.mipmaps[0].data):U.texSubImage2D(3553,se,R.x,R.y,Ee,Te,te.image),se===0&&ae.generateMipmaps&&U.generateMipmap(3553),le.unbindTexture()},this.copyTextureToTexture3D=function(R,te,ae,se,de=0){if(y.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ae=R.max.x-R.min.x+1,Ee=R.max.y-R.min.y+1,Te=R.max.z-R.min.z+1,Pe=re.convert(se.format),He=re.convert(se.type);let Fe;if(se.isDataTexture3D)S.setTexture3D(se,0),Fe=32879;else if(se.isDataTexture2DArray)S.setTexture2DArray(se,0),Fe=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}U.pixelStorei(37440,se.flipY),U.pixelStorei(37441,se.premultiplyAlpha),U.pixelStorei(3317,se.unpackAlignment);const Be=U.getParameter(3314),et=U.getParameter(32878),Wn=U.getParameter(3316),ze=U.getParameter(3315),hr=U.getParameter(32877),Ze=ae.isCompressedTexture?ae.mipmaps[0]:ae.image;U.pixelStorei(3314,Ze.width),U.pixelStorei(32878,Ze.height),U.pixelStorei(3316,R.min.x),U.pixelStorei(3315,R.min.y),U.pixelStorei(32877,R.min.z),ae.isDataTexture||ae.isDataTexture3D?U.texSubImage3D(Fe,de,te.x,te.y,te.z,Ae,Ee,Te,Pe,He,Ze.data):ae.isCompressedTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),U.compressedTexSubImage3D(Fe,de,te.x,te.y,te.z,Ae,Ee,Te,Pe,Ze.data)):U.texSubImage3D(Fe,de,te.x,te.y,te.z,Ae,Ee,Te,Pe,He,Ze),U.pixelStorei(3314,Be),U.pixelStorei(32878,et),U.pixelStorei(3316,Wn),U.pixelStorei(3315,ze),U.pixelStorei(32877,hr),de===0&&se.generateMipmaps&&U.generateMipmap(Fe),le.unbindTexture()},this.initTexture=function(R){S.setTexture2D(R,0),le.unbindTexture()},this.resetState=function(){p=0,g=0,A=null,le.reset(),_e.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}Ge.prototype.isWebGLRenderer=!0;class Yv extends Ge{}Yv.prototype.isWebGL1Renderer=!0;class Yh extends ke{constructor(){super();this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.autoUpdate=e.autoUpdate,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t}}Yh.prototype.isScene=!0;class Ur{constructor(e,t){this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Rr,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=Qt()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Qt()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Qt()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.prototype.slice.call(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}Ur.prototype.isInterleavedBuffer=!0;const it=new D;class Hr{constructor(e,t,n,r=!1){this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=r===!0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)it.x=this.getX(t),it.y=this.getY(t),it.z=this.getZ(t),it.applyMatrix4(e),this.setXYZ(t,it.x,it.y,it.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)it.x=this.getX(t),it.y=this.getY(t),it.z=this.getZ(t),it.applyNormalMatrix(e),this.setXYZ(t,it.x,it.y,it.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)it.x=this.getX(t),it.y=this.getY(t),it.z=this.getZ(t),it.transformDirection(e),this.setXYZ(t,it.x,it.y,it.z);return this}setX(e,t){return this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){return this.data.array[e*this.data.stride+this.offset]}getY(e){return this.data.array[e*this.data.stride+this.offset+1]}getZ(e){return this.data.array[e*this.data.stride+this.offset+2]}getW(e){return this.data.array[e*this.data.stride+this.offset+3]}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interlaved buffer attribute will deinterleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new at(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Hr(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interlaved buffer attribute will deinterleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}Hr.prototype.isInterleavedBufferAttribute=!0;class Zh extends yt{constructor(e){super();this.type="SpriteMaterial",this.color=new we(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this}}Zh.prototype.isSpriteMaterial=!0;let tr;const kr=new D,nr=new D,ir=new D,rr=new oe,Vr=new oe,Jh=new Se,oo=new D,Gr=new D,ao=new D,$h=new oe,dl=new oe,Kh=new oe;class Zv extends ke{constructor(e){super();if(this.type="Sprite",tr===void 0){tr=new Xe;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Ur(t,5);tr.setIndex([0,1,2,0,2,3]),tr.setAttribute("position",new Hr(n,3,0,!1)),tr.setAttribute("uv",new Hr(n,2,3,!1))}this.geometry=tr,this.material=e!==void 0?e:new Zh,this.center=new oe(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),nr.setFromMatrixScale(this.matrixWorld),Jh.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ir.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&nr.multiplyScalar(-ir.z);const n=this.material.rotation;let r,s;n!==0&&(s=Math.cos(n),r=Math.sin(n));const o=this.center;lo(oo.set(-.5,-.5,0),ir,o,nr,r,s),lo(Gr.set(.5,-.5,0),ir,o,nr,r,s),lo(ao.set(.5,.5,0),ir,o,nr,r,s),$h.set(0,0),dl.set(1,0),Kh.set(1,1);let a=e.ray.intersectTriangle(oo,Gr,ao,!1,kr);if(a===null&&(lo(Gr.set(-.5,.5,0),ir,o,nr,r,s),dl.set(0,1),a=e.ray.intersectTriangle(oo,ao,Gr,!1,kr),a===null))return;const l=e.ray.origin.distanceTo(kr);l<e.near||l>e.far||t.push({distance:l,point:kr.clone(),uv:rt.getUV(kr,oo,Gr,ao,$h,dl,Kh,new oe),face:null,object:this})}copy(e){return super.copy(e),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}Zv.prototype.isSprite=!0;function lo(i,e,t,n,r,s){rr.subVectors(i,t).addScalar(.5).multiply(n),r!==void 0?(Vr.x=s*rr.x-r*rr.y,Vr.y=r*rr.x+s*rr.y):Vr.copy(rr),i.copy(e),i.x+=Vr.x,i.y+=Vr.y,i.applyMatrix4(Jh)}const Qh=new D,ef=new We,tf=new We,Jv=new D,nf=new Se;class rf extends At{constructor(e,t){super(e,t);this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new Se,this.bindMatrixInverse=new Se}copy(e){return super.copy(e),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new We,t=this.geometry.attributes.skinWeight;for(let n=0,r=t.count;n<r;n++){e.x=t.getX(n),e.y=t.getY(n),e.z=t.getZ(n),e.w=t.getW(n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}boneTransform(e,t){const n=this.skeleton,r=this.geometry;ef.fromBufferAttribute(r.attributes.skinIndex,e),tf.fromBufferAttribute(r.attributes.skinWeight,e),Qh.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const o=tf.getComponent(s);if(o!==0){const a=ef.getComponent(s);nf.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(Jv.copy(Qh).applyMatrix4(nf),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}rf.prototype.isSkinnedMesh=!0;class $v extends ke{constructor(){super();this.type="Bone"}}$v.prototype.isBone=!0;class Kv extends dt{constructor(e=null,t=1,n=1,r,s,o,a,l,c=ct,u=ct,h,f){super(null,o,a,l,c,u,r,s,h,f);this.image={data:e,width:t,height:n},this.magFilter=c,this.minFilter=u,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.needsUpdate=!0}}Kv.prototype.isDataTexture=!0;class pl extends at{constructor(e,t,n,r=1){typeof n=="number"&&(r=n,n=!1,console.error("THREE.InstancedBufferAttribute: The constructor now expects normalized as the third argument."));super(e,t,n);this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}pl.prototype.isInstancedBufferAttribute=!0;const sf=new Se,of=new Se,co=[],Wr=new At;class Qv extends At{constructor(e,t,n){super(e,t);this.instanceMatrix=new pl(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.frustumCulled=!1}copy(e){return super.copy(e),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const n=this.matrixWorld,r=this.count;if(Wr.geometry=this.geometry,Wr.material=this.material,Wr.material!==void 0)for(let s=0;s<r;s++){this.getMatrixAt(s,sf),of.multiplyMatrices(n,sf),Wr.matrixWorld=of,Wr.raycast(e,co);for(let o=0,a=co.length;o<a;o++){const l=co[o];l.instanceId=s,l.object=this,t.push(l)}co.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new pl(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}Qv.prototype.isInstancedMesh=!0;class qr extends yt{constructor(e){super();this.type="LineBasicMaterial",this.color=new we(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this}}qr.prototype.isLineBasicMaterial=!0;const af=new D,lf=new D,cf=new Se,ml=new Ui,uo=new zi;class gl extends ke{constructor(e=new Xe,t=new qr){super();this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e){return super.copy(e),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.isBufferGeometry)if(e.index===null){const t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)af.fromBufferAttribute(t,r-1),lf.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=af.distanceTo(lf);e.setAttribute("lineDistance",new nt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else e.isGeometry&&console.error("THREE.Line.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");return this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),uo.copy(n.boundingSphere),uo.applyMatrix4(r),uo.radius+=s,e.ray.intersectsSphere(uo)===!1)return;cf.copy(r).invert(),ml.copy(e.ray).applyMatrix4(cf);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new D,u=new D,h=new D,f=new D,m=this.isLineSegments?2:1;if(n.isBufferGeometry){const x=n.index,v=n.attributes.position;if(x!==null){const p=Math.max(0,o.start),g=Math.min(x.count,o.start+o.count);for(let A=p,b=g-1;A<b;A+=m){const E=x.getX(A),I=x.getX(A+1);if(c.fromBufferAttribute(v,E),u.fromBufferAttribute(v,I),ml.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const z=e.ray.origin.distanceTo(f);z<e.near||z>e.far||t.push({distance:z,point:h.clone().applyMatrix4(this.matrixWorld),index:A,face:null,faceIndex:null,object:this})}}else{const p=Math.max(0,o.start),g=Math.min(v.count,o.start+o.count);for(let A=p,b=g-1;A<b;A+=m){if(c.fromBufferAttribute(v,A),u.fromBufferAttribute(v,A+1),ml.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const I=e.ray.origin.distanceTo(f);I<e.near||I>e.far||t.push({distance:I,point:h.clone().applyMatrix4(this.matrixWorld),index:A,face:null,faceIndex:null,object:this})}}}else n.isGeometry&&console.error("THREE.Line.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}updateMorphTargets(){const e=this.geometry;if(e.isBufferGeometry){const t=e.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}else{const t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Line.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")}}}gl.prototype.isLine=!0;const uf=new D,hf=new D;class xl extends gl{constructor(e,t){super(e,t);this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.isBufferGeometry)if(e.index===null){const t=e.attributes.position,n=[];for(let r=0,s=t.count;r<s;r+=2)uf.fromBufferAttribute(t,r),hf.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+uf.distanceTo(hf);e.setAttribute("lineDistance",new nt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else e.isGeometry&&console.error("THREE.LineSegments.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");return this}}xl.prototype.isLineSegments=!0;class eb extends gl{constructor(e,t){super(e,t);this.type="LineLoop"}}eb.prototype.isLineLoop=!0;class ff extends yt{constructor(e){super();this.type="PointsMaterial",this.color=new we(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this}}ff.prototype.isPointsMaterial=!0;const df=new Se,yl=new Ui,ho=new zi,fo=new D;class tb extends ke{constructor(e=new Xe,t=new ff){super();this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e){return super.copy(e),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ho.copy(n.boundingSphere),ho.applyMatrix4(r),ho.radius+=s,e.ray.intersectsSphere(ho)===!1)return;df.copy(r).invert(),yl.copy(e.ray).applyMatrix4(df);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a;if(n.isBufferGeometry){const c=n.index,h=n.attributes.position;if(c!==null){const f=Math.max(0,o.start),m=Math.min(c.count,o.start+o.count);for(let x=f,y=m;x<y;x++){const v=c.getX(x);fo.fromBufferAttribute(h,v),pf(fo,v,l,r,e,t,this)}}else{const f=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let x=f,y=m;x<y;x++)fo.fromBufferAttribute(h,x),pf(fo,x,l,r,e,t,this)}}else console.error("THREE.Points.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}updateMorphTargets(){const e=this.geometry;if(e.isBufferGeometry){const t=e.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}else{const t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Points.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")}}}tb.prototype.isPoints=!0;function pf(i,e,t,n,r,s,o){const a=yl.distanceSqToPoint(i);if(a<t){const l=new D;yl.closestPointToPoint(i,l),l.applyMatrix4(n);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class nb extends dt{constructor(e,t,n,r,s,o,a,l,c){super(e,t,n,r,s,o,a,l,c);this.format=a!==void 0?a:Li,this.minFilter=o!==void 0?o:Ot,this.magFilter=s!==void 0?s:Ot,this.generateMipmaps=!1;const u=this;function h(){u.needsUpdate=!0,e.requestVideoFrameCallback(h)}"requestVideoFrameCallback"in e&&e.requestVideoFrameCallback(h)}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}nb.prototype.isVideoTexture=!0;class ib extends dt{constructor(e,t,n,r,s,o,a,l,c,u,h,f){super(null,o,a,l,c,u,r,s,h,f);this.image={width:t,height:n},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}}ib.prototype.isCompressedTexture=!0;class rb extends dt{constructor(e,t,n,r,s,o,a,l,c){super(e,t,n,r,s,o,a,l,c);this.needsUpdate=!0}}rb.prototype.isCanvasTexture=!0;class sb extends dt{constructor(e,t,n,r,s,o,a,l,c,u){if(u=u!==void 0?u:Ci,u!==Ci&&u!==Cr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Ci&&(n=Rs),n===void 0&&u===Cr&&(n=Lr);super(null,r,s,o,a,l,u,n,c);this.image={width:e,height:t},this.magFilter=a!==void 0?a:ct,this.minFilter=l!==void 0?l:ct,this.flipY=!1,this.generateMipmaps=!1}}sb.prototype.isDepthTexture=!0;const po=new D,mo=new D,_l=new D,go=new rt;class OM extends Xe{constructor(e=null,t=1){super();if(this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const r=Math.pow(10,4),s=Math.cos(Bs*t),o=e.getIndex(),a=e.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],u=["a","b","c"],h=new Array(3),f={},m=[];for(let x=0;x<l;x+=3){o?(c[0]=o.getX(x),c[1]=o.getX(x+1),c[2]=o.getX(x+2)):(c[0]=x,c[1]=x+1,c[2]=x+2);const{a:y,b:v,c:p}=go;if(y.fromBufferAttribute(a,c[0]),v.fromBufferAttribute(a,c[1]),p.fromBufferAttribute(a,c[2]),go.getNormal(_l),h[0]=`${Math.round(y.x*r)},${Math.round(y.y*r)},${Math.round(y.z*r)}`,h[1]=`${Math.round(v.x*r)},${Math.round(v.y*r)},${Math.round(v.z*r)}`,h[2]=`${Math.round(p.x*r)},${Math.round(p.y*r)},${Math.round(p.z*r)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let g=0;g<3;g++){const A=(g+1)%3,b=h[g],E=h[A],I=go[u[g]],M=go[u[A]],z=`${b}_${E}`,Q=`${E}_${b}`;Q in f&&f[Q]?(_l.dot(f[Q].normal)<=s&&(m.push(I.x,I.y,I.z),m.push(M.x,M.y,M.z)),f[Q]=null):z in f||(f[z]={index0:c[g],index1:c[A],normal:_l.clone()})}}for(const x in f)if(f[x]){const{index0:y,index1:v}=f[x];po.fromBufferAttribute(a,y),mo.fromBufferAttribute(a,v),m.push(po.x,po.y,po.z),m.push(mo.x,mo.y,mo.z)}this.setAttribute("position",new nt(m,3))}}}class Ut{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,r=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),s+=n.distanceTo(r),t.push(s),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let r=0;const s=n.length;let o;t?o=t:o=e*n[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=n[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,n[r]===o)return r/(s-1);const u=n[r],f=n[r+1]-u,m=(o-u)/f;return(r+m)/(s-1)}getTangent(e,t){const n=1e-4;let r=e-n,s=e+n;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=t||(o.isVector2?new oe:new D);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new D,r=[],s=[],o=[],a=new D,l=new Se;for(let m=0;m<=e;m++){const x=m/e;r[m]=this.getTangentAt(x,new D)}s[0]=new D,o[0]=new D;let c=Number.MAX_VALUE;const u=Math.abs(r[0].x),h=Math.abs(r[0].y),f=Math.abs(r[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let m=1;m<=e;m++){if(s[m]=s[m-1].clone(),o[m]=o[m-1].clone(),a.crossVectors(r[m-1],r[m]),a.length()>Number.EPSILON){a.normalize();const x=Math.acos(Et(r[m-1].dot(r[m]),-1,1));s[m].applyMatrix4(l.makeRotationAxis(a,x))}o[m].crossVectors(r[m],s[m])}if(t===!0){let m=Math.acos(Et(s[0].dot(s[e]),-1,1));m/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(m=-m);for(let x=1;x<=e;x++)s[x].applyMatrix4(l.makeRotationAxis(r[x],m*x)),o[x].crossVectors(r[x],s[x])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class xo extends Ut{constructor(e=0,t=0,n=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super();this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t){const n=t||new oe,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=l-this.aX,m=c-this.aY;l=f*u-m*h+this.aX,c=f*h+m*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}xo.prototype.isEllipseCurve=!0;class mf extends xo{constructor(e,t,n,r,s,o){super(e,t,n,n,r,s,o);this.type="ArcCurve"}}mf.prototype.isArcCurve=!0;function vl(){let i=0,e=0,t=0,n=0;function r(s,o,a,l){i=s,e=a,t=-3*s+3*o-2*a-l,n=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,u,h){let f=(o-s)/c-(a-s)/(c+u)+(a-o)/u,m=(a-o)/u-(l-o)/(u+h)+(l-a)/h;f*=u,m*=u,r(o,a,f,m)},calc:function(s){const o=s*s,a=o*s;return i+e*s+t*o+n*a}}}const yo=new D,bl=new vl,Ml=new vl,wl=new vl;class gf extends Ut{constructor(e=[],t=!1,n="centripetal",r=.5){super();this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new D){const n=t,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,u;this.closed||a>0?c=r[(a-1)%s]:(yo.subVectors(r[0],r[1]).add(r[0]),c=yo);const h=r[a%s],f=r[(a+1)%s];if(this.closed||a+2<s?u=r[(a+2)%s]:(yo.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=yo),this.curveType==="centripetal"||this.curveType==="chordal"){const m=this.curveType==="chordal"?.5:.25;let x=Math.pow(c.distanceToSquared(h),m),y=Math.pow(h.distanceToSquared(f),m),v=Math.pow(f.distanceToSquared(u),m);y<1e-4&&(y=1),x<1e-4&&(x=y),v<1e-4&&(v=y),bl.initNonuniformCatmullRom(c.x,h.x,f.x,u.x,x,y,v),Ml.initNonuniformCatmullRom(c.y,h.y,f.y,u.y,x,y,v),wl.initNonuniformCatmullRom(c.z,h.z,f.z,u.z,x,y,v)}else this.curveType==="catmullrom"&&(bl.initCatmullRom(c.x,h.x,f.x,u.x,this.tension),Ml.initCatmullRom(c.y,h.y,f.y,u.y,this.tension),wl.initCatmullRom(c.z,h.z,f.z,u.z,this.tension));return n.set(bl.calc(l),Ml.calc(l),wl.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new D().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}gf.prototype.isCatmullRomCurve3=!0;function xf(i,e,t,n,r){const s=(n-e)*.5,o=(r-t)*.5,a=i*i,l=i*a;return(2*t-2*n+s+o)*l+(-3*t+3*n-2*s-o)*a+s*i+t}function ob(i,e){const t=1-i;return t*t*e}function ab(i,e){return 2*(1-i)*i*e}function lb(i,e){return i*i*e}function jr(i,e,t,n){return ob(i,e)+ab(i,t)+lb(i,n)}function cb(i,e){const t=1-i;return t*t*t*e}function ub(i,e){const t=1-i;return 3*t*t*i*e}function hb(i,e){return 3*(1-i)*i*i*e}function fb(i,e){return i*i*i*e}function Xr(i,e,t,n,r){return cb(i,e)+ub(i,t)+hb(i,n)+fb(i,r)}class Sl extends Ut{constructor(e=new oe,t=new oe,n=new oe,r=new oe){super();this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new oe){const n=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Xr(e,r.x,s.x,o.x,a.x),Xr(e,r.y,s.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}Sl.prototype.isCubicBezierCurve=!0;class yf extends Ut{constructor(e=new D,t=new D,n=new D,r=new D){super();this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new D){const n=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Xr(e,r.x,s.x,o.x,a.x),Xr(e,r.y,s.y,o.y,a.y),Xr(e,r.z,s.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}yf.prototype.isCubicBezierCurve3=!0;class _o extends Ut{constructor(e=new oe,t=new oe){super();this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new oe){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t){const n=t||new oe;return n.copy(this.v2).sub(this.v1).normalize(),n}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}_o.prototype.isLineCurve=!0;class db extends Ut{constructor(e=new D,t=new D){super();this.type="LineCurve3",this.isLineCurve3=!0,this.v1=e,this.v2=t}getPoint(e,t=new D){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Tl extends Ut{constructor(e=new oe,t=new oe,n=new oe){super();this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new oe){const n=t,r=this.v0,s=this.v1,o=this.v2;return n.set(jr(e,r.x,s.x,o.x),jr(e,r.y,s.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}Tl.prototype.isQuadraticBezierCurve=!0;class _f extends Ut{constructor(e=new D,t=new D,n=new D){super();this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new D){const n=t,r=this.v0,s=this.v1,o=this.v2;return n.set(jr(e,r.x,s.x,o.x),jr(e,r.y,s.y,o.y),jr(e,r.z,s.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}_f.prototype.isQuadraticBezierCurve3=!0;class El extends Ut{constructor(e=[]){super();this.type="SplineCurve",this.points=e}getPoint(e,t=new oe){const n=t,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],c=r[o],u=r[o>r.length-2?r.length-1:o+1],h=r[o>r.length-3?r.length-1:o+2];return n.set(xf(a,l.x,c.x,u.x,h.x),xf(a,l.y,c.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new oe().fromArray(r))}return this}}El.prototype.isSplineCurve=!0;var vf=Object.freeze({__proto__:null,ArcCurve:mf,CatmullRomCurve3:gf,CubicBezierCurve:Sl,CubicBezierCurve3:yf,EllipseCurve:xo,LineCurve:_o,LineCurve3:db,QuadraticBezierCurve:Tl,QuadraticBezierCurve3:_f,SplineCurve:El});class pb extends Ut{constructor(){super();this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);e.equals(t)||this.curves.push(new _o(t,e))}getPoint(e,t){const n=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=n){const o=r[s]-n,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let r=0,s=this.curves;r<s.length;r++){const o=s[r],a=o&&o.isEllipseCurve?e*2:o&&(o.isLineCurve||o.isLineCurve3)?1:o&&o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const r=e.curves[t];this.curves.push(new vf[r.type]().fromJSON(r))}return this}}class ui extends pb{constructor(e){super();this.type="Path",this.currentPoint=new oe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new _o(this.currentPoint.clone(),new oe(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){const s=new Tl(this.currentPoint.clone(),new oe(e,t),new oe(n,r));return this.curves.push(s),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,s,o){const a=new Sl(this.currentPoint.clone(),new oe(e,t),new oe(n,r),new oe(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new El(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,r,s,o),this}absarc(e,t,n,r,s,o){return this.absellipse(e,t,n,n,r,s,o),this}ellipse(e,t,n,r,s,o,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,n,r,s,o,a,l),this}absellipse(e,t,n,r,s,o,a,l){const c=new xo(e,t,n,r,s,o,a,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class xn extends ui{constructor(e){super(e);this.uuid=Qt(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,r=this.holes.length;n<r;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const r=e.holes[t];this.holes.push(new ui().fromJSON(r))}return this}}const mb={triangulate:function(i,e,t=2){const n=e&&e.length,r=n?e[0]*t:i.length;let s=bf(i,0,r,t,!0);const o=[];if(!s||s.next===s.prev)return o;let a,l,c,u,h,f,m;if(n&&(s=vb(i,e,s,t)),i.length>80*t){a=c=i[0],l=u=i[1];for(let x=t;x<r;x+=t)h=i[x],f=i[x+1],h<a&&(a=h),f<l&&(l=f),h>c&&(c=h),f>u&&(u=f);m=Math.max(c-a,u-l),m=m!==0?1/m:0}return Yr(s,o,t,a,l,m),o}};function bf(i,e,t,n,r){let s,o;if(r===Pb(i,e,t,n)>0)for(s=e;s<t;s+=n)o=Sf(s,i[s],i[s+1],o);else for(s=t-n;s>=e;s-=n)o=Sf(s,i[s],i[s+1],o);return o&&vo(o,o.next)&&(Jr(o),o=o.next),o}function Hn(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(vo(t,t.next)||Qe(t.prev,t,t.next)===0)){if(Jr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Yr(i,e,t,n,r,s,o){if(!i)return;!o&&s&&Tb(i,n,r,s);let a=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,s?xb(i,n,r,s):gb(i)){e.push(l.i/t),e.push(i.i/t),e.push(c.i/t),Jr(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=yb(Hn(i),e,t),Yr(i,e,t,n,r,s,2)):o===2&&_b(i,e,t,n,r,s):Yr(Hn(i),e,t,n,r,s,1);break}}}function gb(i){const e=i.prev,t=i,n=i.next;if(Qe(e,t,n)>=0)return!1;let r=i.next.next;for(;r!==i.prev;){if(sr(e.x,e.y,t.x,t.y,n.x,n.y,r.x,r.y)&&Qe(r.prev,r,r.next)>=0)return!1;r=r.next}return!0}function xb(i,e,t,n){const r=i.prev,s=i,o=i.next;if(Qe(r,s,o)>=0)return!1;const a=r.x<s.x?r.x<o.x?r.x:o.x:s.x<o.x?s.x:o.x,l=r.y<s.y?r.y<o.y?r.y:o.y:s.y<o.y?s.y:o.y,c=r.x>s.x?r.x>o.x?r.x:o.x:s.x>o.x?s.x:o.x,u=r.y>s.y?r.y>o.y?r.y:o.y:s.y>o.y?s.y:o.y,h=Al(a,l,e,t,n),f=Al(c,u,e,t,n);let m=i.prevZ,x=i.nextZ;for(;m&&m.z>=h&&x&&x.z<=f;){if(m!==i.prev&&m!==i.next&&sr(r.x,r.y,s.x,s.y,o.x,o.y,m.x,m.y)&&Qe(m.prev,m,m.next)>=0||(m=m.prevZ,x!==i.prev&&x!==i.next&&sr(r.x,r.y,s.x,s.y,o.x,o.y,x.x,x.y)&&Qe(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;m&&m.z>=h;){if(m!==i.prev&&m!==i.next&&sr(r.x,r.y,s.x,s.y,o.x,o.y,m.x,m.y)&&Qe(m.prev,m,m.next)>=0)return!1;m=m.prevZ}for(;x&&x.z<=f;){if(x!==i.prev&&x!==i.next&&sr(r.x,r.y,s.x,s.y,o.x,o.y,x.x,x.y)&&Qe(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function yb(i,e,t){let n=i;do{const r=n.prev,s=n.next.next;!vo(r,s)&&Mf(r,n,n.next,s)&&Zr(r,s)&&Zr(s,r)&&(e.push(r.i/t),e.push(n.i/t),e.push(s.i/t),Jr(n),Jr(n.next),n=i=s),n=n.next}while(n!==i);return Hn(n)}function _b(i,e,t,n,r,s){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Lb(o,a)){let l=wf(o,a);o=Hn(o,o.next),l=Hn(l,l.next),Yr(o,e,t,n,r,s),Yr(l,e,t,n,r,s);return}a=a.next}o=o.next}while(o!==i)}function vb(i,e,t,n){const r=[];let s,o,a,l,c;for(s=0,o=e.length;s<o;s++)a=e[s]*n,l=s<o-1?e[s+1]*n:i.length,c=bf(i,a,l,n,!1),c===c.next&&(c.steiner=!0),r.push(Ab(c));for(r.sort(bb),s=0;s<r.length;s++)Mb(r[s],t),t=Hn(t,t.next);return t}function bb(i,e){return i.x-e.x}function Mb(i,e){if(e=wb(i,e),e){const t=wf(e,i);Hn(e,e.next),Hn(t,t.next)}}function wb(i,e){let t=e;const n=i.x,r=i.y;let s=-1/0,o;do{if(r<=t.y&&r>=t.next.y&&t.next.y!==t.y){const f=t.x+(r-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=n&&f>s){if(s=f,f===n){if(r===t.y)return t;if(r===t.next.y)return t.next}o=t.x<t.next.x?t:t.next}}t=t.next}while(t!==e);if(!o)return null;if(n===s)return o;const a=o,l=o.x,c=o.y;let u=1/0,h;t=o;do n>=t.x&&t.x>=l&&n!==t.x&&sr(r<c?n:s,r,l,c,r<c?s:n,r,t.x,t.y)&&(h=Math.abs(r-t.y)/(n-t.x),Zr(t,i)&&(h<u||h===u&&(t.x>o.x||t.x===o.x&&Sb(o,t)))&&(o=t,u=h)),t=t.next;while(t!==a);return o}function Sb(i,e){return Qe(i.prev,i,e.prev)<0&&Qe(e.next,i,i.next)<0}function Tb(i,e,t,n){let r=i;do r.z===null&&(r.z=Al(r.x,r.y,e,t,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==i);r.prevZ.nextZ=null,r.prevZ=null,Eb(r)}function Eb(i){let e,t,n,r,s,o,a,l,c=1;do{for(t=i,i=null,s=null,o=0;t;){for(o++,n=t,a=0,e=0;e<c&&(a++,n=n.nextZ,!!n);e++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||t.z<=n.z)?(r=t,t=t.nextZ,a--):(r=n,n=n.nextZ,l--),s?s.nextZ=r:i=r,r.prevZ=s,s=r;t=n}s.nextZ=null,c*=2}while(o>1);return i}function Al(i,e,t,n,r){return i=32767*(i-t)*r,e=32767*(e-n)*r,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function Ab(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function sr(i,e,t,n,r,s,o,a){return(r-o)*(e-a)-(i-o)*(s-a)>=0&&(i-o)*(n-a)-(t-o)*(e-a)>=0&&(t-o)*(s-a)-(r-o)*(n-a)>=0}function Lb(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!Cb(i,e)&&(Zr(i,e)&&Zr(e,i)&&Rb(i,e)&&(Qe(i.prev,i,e.prev)||Qe(i,e.prev,e))||vo(i,e)&&Qe(i.prev,i,i.next)>0&&Qe(e.prev,e,e.next)>0)}function Qe(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function vo(i,e){return i.x===e.x&&i.y===e.y}function Mf(i,e,t,n){const r=Mo(Qe(i,e,t)),s=Mo(Qe(i,e,n)),o=Mo(Qe(t,n,i)),a=Mo(Qe(t,n,e));return!!(r!==s&&o!==a||r===0&&bo(i,t,e)||s===0&&bo(i,n,e)||o===0&&bo(t,i,n)||a===0&&bo(t,e,n))}function bo(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Mo(i){return i>0?1:i<0?-1:0}function Cb(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Mf(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Zr(i,e){return Qe(i.prev,i,i.next)<0?Qe(i,e,i.next)>=0&&Qe(i,i.prev,e)>=0:Qe(i,e,i.prev)<0||Qe(i,i.next,e)<0}function Rb(i,e){let t=i,n=!1;const r=(i.x+e.x)/2,s=(i.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function wf(i,e){const t=new Ll(i.i,i.x,i.y),n=new Ll(e.i,e.x,e.y),r=i.next,s=e.prev;return i.next=e,e.prev=i,t.next=r,r.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function Sf(i,e,t,n){const r=new Ll(i,e,t);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function Jr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Ll(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Pb(i,e,t,n){let r=0;for(let s=e,o=t-n;s<t;s+=n)r+=(i[o]-i[s])*(i[s+1]+i[o+1]),o=s;return r}class rn{static area(e){const t=e.length;let n=0;for(let r=t-1,s=0;s<t;r=s++)n+=e[r].x*e[s].y-e[s].x*e[r].y;return n*.5}static isClockWise(e){return rn.area(e)<0}static triangulateShape(e,t){const n=[],r=[],s=[];Tf(e),Ef(n,e);let o=e.length;t.forEach(Tf);for(let l=0;l<t.length;l++)r.push(o),o+=t[l].length,Ef(n,t[l]);const a=mb.triangulate(n,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function Tf(i){const e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Ef(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}class or extends Xe{constructor(e=new xn([new oe(.5,.5),new oe(-.5,.5),new oe(-.5,-.5),new oe(.5,-.5)]),t={}){super();this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,r=[],s=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];o(c)}this.setAttribute("position",new nt(r,3)),this.setAttribute("uv",new nt(s,2)),this.computeVertexNormals();function o(a){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1;let h=t.depth!==void 0?t.depth:1,f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,m=t.bevelThickness!==void 0?t.bevelThickness:.2,x=t.bevelSize!==void 0?t.bevelSize:m-.1,y=t.bevelOffset!==void 0?t.bevelOffset:0,v=t.bevelSegments!==void 0?t.bevelSegments:3;const p=t.extrudePath,g=t.UVGenerator!==void 0?t.UVGenerator:Ib;t.amount!==void 0&&(console.warn("THREE.ExtrudeBufferGeometry: amount has been renamed to depth."),h=t.amount);let A,b=!1,E,I,M,z;p&&(A=p.getSpacedPoints(u),b=!0,f=!1,E=p.computeFrenetFrames(u,!1),I=new D,M=new D,z=new D),f||(v=0,m=0,x=0,y=0);const Q=a.extractPoints(c);let Z=Q.shape;const F=Q.holes;if(!rn.isClockWise(Z)){Z=Z.reverse();for(let j=0,S=F.length;j<S;j++){const T=F[j];rn.isClockWise(T)&&(F[j]=T.reverse())}}const J=rn.triangulateShape(Z,F),$=Z;for(let j=0,S=F.length;j<S;j++){const T=F[j];Z=Z.concat(T)}function ee(j,S,T){return S||console.error("THREE.ExtrudeGeometry: vec does not exist"),S.clone().multiplyScalar(T).add(j)}const K=Z.length,V=J.length;function q(j,S,T){let P,w,d;const _=j.x-S.x,B=j.y-S.y,G=T.x-j.x,W=T.y-j.y,Y=_*_+B*B,he=_*W-B*G;if(Math.abs(he)>Number.EPSILON){const ce=Math.sqrt(Y),pe=Math.sqrt(G*G+W*W),fe=S.x-B/ce,H=S.y+_/ce,me=T.x-W/pe,re=T.y+G/pe,_e=((me-fe)*W-(re-H)*G)/(_*W-B*G);P=fe+_*_e-j.x,w=H+B*_e-j.y;const O=P*P+w*w;if(O<=2)return new oe(P,w);d=Math.sqrt(O/2)}else{let ce=!1;_>Number.EPSILON?G>Number.EPSILON&&(ce=!0):_<-Number.EPSILON?G<-Number.EPSILON&&(ce=!0):Math.sign(B)===Math.sign(W)&&(ce=!0),ce?(P=-B,w=_,d=Math.sqrt(Y)):(P=_,w=B,d=Math.sqrt(Y/2))}return new oe(P/d,w/d)}const xe=[];for(let j=0,S=$.length,T=S-1,P=j+1;j<S;j++,T++,P++)T===S&&(T=0),P===S&&(P=0),xe[j]=q($[j],$[T],$[P]);const be=[];let ve,X=xe.concat();for(let j=0,S=F.length;j<S;j++){const T=F[j];ve=[];for(let P=0,w=T.length,d=w-1,_=P+1;P<w;P++,d++,_++)d===w&&(d=0),_===w&&(_=0),ve[P]=q(T[P],T[d],T[_]);be.push(ve),X=X.concat(ve)}for(let j=0;j<v;j++){const S=j/v,T=m*Math.cos(S*Math.PI/2),P=x*Math.sin(S*Math.PI/2)+y;for(let w=0,d=$.length;w<d;w++){const _=ee($[w],xe[w],P);N(_.x,_.y,-T)}for(let w=0,d=F.length;w<d;w++){const _=F[w];ve=be[w];for(let B=0,G=_.length;B<G;B++){const W=ee(_[B],ve[B],P);N(W.x,W.y,-T)}}}const C=x+y;for(let j=0;j<K;j++){const S=f?ee(Z[j],X[j],C):Z[j];b?(M.copy(E.normals[0]).multiplyScalar(S.x),I.copy(E.binormals[0]).multiplyScalar(S.y),z.copy(A[0]).add(M).add(I),N(z.x,z.y,z.z)):N(S.x,S.y,0)}for(let j=1;j<=u;j++)for(let S=0;S<K;S++){const T=f?ee(Z[S],X[S],C):Z[S];b?(M.copy(E.normals[j]).multiplyScalar(T.x),I.copy(E.binormals[j]).multiplyScalar(T.y),z.copy(A[j]).add(M).add(I),N(z.x,z.y,z.z)):N(T.x,T.y,h/u*j)}for(let j=v-1;j>=0;j--){const S=j/v,T=m*Math.cos(S*Math.PI/2),P=x*Math.sin(S*Math.PI/2)+y;for(let w=0,d=$.length;w<d;w++){const _=ee($[w],xe[w],P);N(_.x,_.y,h+T)}for(let w=0,d=F.length;w<d;w++){const _=F[w];ve=be[w];for(let B=0,G=_.length;B<G;B++){const W=ee(_[B],ve[B],P);b?N(W.x,W.y+A[u-1].y,A[u-1].x+T):N(W.x,W.y,h+T)}}}L(),k();function L(){const j=r.length/3;if(f){let S=0,T=K*S;for(let P=0;P<V;P++){const w=J[P];ie(w[2]+T,w[1]+T,w[0]+T)}S=u+v*2,T=K*S;for(let P=0;P<V;P++){const w=J[P];ie(w[0]+T,w[1]+T,w[2]+T)}}else{for(let S=0;S<V;S++){const T=J[S];ie(T[2],T[1],T[0])}for(let S=0;S<V;S++){const T=J[S];ie(T[0]+K*u,T[1]+K*u,T[2]+K*u)}}n.addGroup(j,r.length/3-j,0)}function k(){const j=r.length/3;let S=0;U($,S),S+=$.length;for(let T=0,P=F.length;T<P;T++){const w=F[T];U(w,S),S+=w.length}n.addGroup(j,r.length/3-j,1)}function U(j,S){let T=j.length;for(;--T>=0;){const P=T;let w=T-1;w<0&&(w=j.length-1);for(let d=0,_=u+v*2;d<_;d++){const B=K*d,G=K*(d+1),W=S+P+B,Y=S+w+B,he=S+w+G,ce=S+P+G;ue(W,Y,he,ce)}}}function N(j,S,T){l.push(j),l.push(S),l.push(T)}function ie(j,S,T){le(j),le(S),le(T);const P=r.length/3,w=g.generateTopUV(n,r,P-3,P-2,P-1);ge(w[0]),ge(w[1]),ge(w[2])}function ue(j,S,T,P){le(j),le(S),le(P),le(S),le(T),le(P);const w=r.length/3,d=g.generateSideWallUV(n,r,w-6,w-3,w-2,w-1);ge(d[0]),ge(d[1]),ge(d[3]),ge(d[1]),ge(d[2]),ge(d[3])}function le(j){r.push(l[j*3+0]),r.push(l[j*3+1]),r.push(l[j*3+2])}function ge(j){s.push(j.x),s.push(j.y)}}}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Db(t,n,e)}static fromJSON(e,t){const n=[];for(let s=0,o=e.shapes.length;s<o;s++){const a=t[e.shapes[s]];n.push(a)}const r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new vf[r.type]().fromJSON(r)),new or(n,e.options)}}const Ib={generateTopUV:function(i,e,t,n,r){const s=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[r*3],u=e[r*3+1];return[new oe(s,o),new oe(a,l),new oe(c,u)]},generateSideWallUV:function(i,e,t,n,r,s){const o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],u=e[n*3+1],h=e[n*3+2],f=e[r*3],m=e[r*3+1],x=e[r*3+2],y=e[s*3],v=e[s*3+1],p=e[s*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new oe(o,1-l),new oe(c,1-h),new oe(f,1-x),new oe(y,1-p)]:[new oe(a,1-l),new oe(u,1-h),new oe(m,1-x),new oe(v,1-p)]}};function Db(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,r=i.length;n<r;n++){const s=i[n];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Cl extends Xe{constructor(e=new xn([new oe(0,.5),new oe(-.5,-.5),new oe(.5,-.5)]),t=12){super();this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],r=[],s=[],o=[];let a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let u=0;u<e.length;u++)c(e[u]),this.addGroup(a,l,u),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new nt(r,3)),this.setAttribute("normal",new nt(s,3)),this.setAttribute("uv",new nt(o,2));function c(u){const h=r.length/3,f=u.extractPoints(t);let m=f.shape;const x=f.holes;rn.isClockWise(m)===!1&&(m=m.reverse());for(let v=0,p=x.length;v<p;v++){const g=x[v];rn.isClockWise(g)===!0&&(x[v]=g.reverse())}const y=rn.triangulateShape(m,x);for(let v=0,p=x.length;v<p;v++){const g=x[v];m=m.concat(g)}for(let v=0,p=m.length;v<p;v++){const g=m[v];r.push(g.x,g.y,0),s.push(0,0,1),o.push(g.x,g.y)}for(let v=0,p=y.length;v<p;v++){const g=y[v],A=g[0]+h,b=g[1]+h,E=g[2]+h;n.push(A,b,E),l+=3}}}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return Nb(t,e)}static fromJSON(e,t){const n=[];for(let r=0,s=e.shapes.length;r<s;r++){const o=t[e.shapes[r]];n.push(o)}return new Cl(n,e.curveSegments)}}function Nb(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){const r=i[t];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e}class Fb extends yt{constructor(e){super();this.type="ShadowMaterial",this.color=new we(0),this.transparent=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this}}Fb.prototype.isShadowMaterial=!0;class Af extends yt{constructor(e){super();this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new we(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new we(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ii,this.normalScale=new oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this}}Af.prototype.isMeshStandardMaterial=!0;class Bb extends Af{constructor(e){super();this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new oe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Et(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.sheenColor=new we(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=.01,this.thicknessMap=null,this.attenuationDistance=0,this.attenuationColor=new we(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new we(1,1,1),this.specularColorMap=null,this._sheen=0,this._clearcoat=0,this._transmission=0,this.setValues(e)}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}Bb.prototype.isMeshPhysicalMaterial=!0;class Ob extends yt{constructor(e){super();this.type="MeshPhongMaterial",this.color=new we(16777215),this.specular=new we(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new we(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ii,this.normalScale=new oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=As,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this}}Ob.prototype.isMeshPhongMaterial=!0;class zb extends yt{constructor(e){super();this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new we(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new we(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ii,this.normalScale=new oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this}}zb.prototype.isMeshToonMaterial=!0;class Ub extends yt{constructor(e){super();this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ii,this.normalScale=new oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}Ub.prototype.isMeshNormalMaterial=!0;class Hb extends yt{constructor(e){super();this.type="MeshLambertMaterial",this.color=new we(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new we(0),this.emissiveIntensity=1,this.emissiveMap=null,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=As,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this}}Hb.prototype.isMeshLambertMaterial=!0;class kb extends yt{constructor(e){super();this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new we(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ii,this.normalScale=new oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.flatShading=e.flatShading,this}}kb.prototype.isMeshMatcapMaterial=!0;class Vb extends qr{constructor(e){super();this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}Vb.prototype.isLineDashedMaterial=!0;const Je={arraySlice:function(i,e,t){return Je.isTypedArray(i)?new i.constructor(i.subarray(e,t!==void 0?t:i.length)):i.slice(e,t)},convertArray:function(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)},isTypedArray:function(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)},getKeyframeOrder:function(i){function e(r,s){return i[r]-i[s]}const t=i.length,n=new Array(t);for(let r=0;r!==t;++r)n[r]=r;return n.sort(e),n},sortedArray:function(i,e,t){const n=i.length,r=new i.constructor(n);for(let s=0,o=0;o!==n;++s){const a=t[s]*e;for(let l=0;l!==e;++l)r[o++]=i[a+l]}return r},flattenJSON:function(i,e,t,n){let r=1,s=i[0];for(;s!==void 0&&s[n]===void 0;)s=i[r++];if(s===void 0)return;let o=s[n];if(o!==void 0)if(Array.isArray(o))do o=s[n],o!==void 0&&(e.push(s.time),t.push.apply(t,o)),s=i[r++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[n],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=i[r++];while(s!==void 0);else do o=s[n],o!==void 0&&(e.push(s.time),t.push(o)),s=i[r++];while(s!==void 0)},subclip:function(i,e,t,n,r=30){const s=i.clone();s.name=e;const o=[];for(let l=0;l<s.tracks.length;++l){const c=s.tracks[l],u=c.getValueSize(),h=[],f=[];for(let m=0;m<c.times.length;++m){const x=c.times[m]*r;if(!(x<t||x>=n)){h.push(c.times[m]);for(let y=0;y<u;++y)f.push(c.values[m*u+y])}}h.length!==0&&(c.times=Je.convertArray(h,c.times.constructor),c.values=Je.convertArray(f,c.values.constructor),o.push(c))}s.tracks=o;let a=1/0;for(let l=0;l<s.tracks.length;++l)a>s.tracks[l].times[0]&&(a=s.tracks[l].times[0]);for(let l=0;l<s.tracks.length;++l)s.tracks[l].shift(-1*a);return s.resetDuration(),s},makeClipAdditive:function(i,e=0,t=i,n=30){n<=0&&(n=30);const r=t.tracks.length,s=e/n;for(let o=0;o<r;++o){const a=t.tracks[o],l=a.ValueTypeName;if(l==="bool"||l==="string")continue;const c=i.tracks.find(function(p){return p.name===a.name&&p.ValueTypeName===l});if(c===void 0)continue;let u=0;const h=a.getValueSize();a.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(u=h/3);let f=0;const m=c.getValueSize();c.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(f=m/3);const x=a.times.length-1;let y;if(s<=a.times[0]){const p=u,g=h-u;y=Je.arraySlice(a.values,p,g)}else if(s>=a.times[x]){const p=x*h+u,g=p+h-u;y=Je.arraySlice(a.values,p,g)}else{const p=a.createInterpolant(),g=u,A=h-u;p.evaluate(s),y=Je.arraySlice(p.resultBuffer,g,A)}l==="quaternion"&&new xt().fromArray(y).normalize().conjugate().toArray(y);const v=c.times.length;for(let p=0;p<v;++p){const g=p*m+f;if(l==="quaternion")xt.multiplyQuaternionsFlat(c.values,g,y,0,c.values,g);else{const A=m-f*2;for(let b=0;b<A;++b)c.values[g+b]-=y[b]}}}return i.blendMode=ku,i}};class kn{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,r=t[n],s=t[n-1];e:{t:{let o;n:{i:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.afterEnd_(n-1,e,s)}if(n===a)break;if(s=r,r=t[++n],e<r)break t}o=t.length;break n}if(!(e>=s)){const a=t[1];e<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.beforeStart_(0,e,r);if(n===l)break;if(r=s,s=t[--n-1],e>=s)break t}o=n,n=0;break n}break e}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(r=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.beforeStart_(0,e,r);if(r===void 0)return n=t.length,this._cachedIndex=n,this.afterEnd_(n-1,s,e)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}kn.prototype.beforeStart_=kn.prototype.copySampleValue_;kn.prototype.afterEnd_=kn.prototype.copySampleValue_;class Gb extends kn{constructor(e,t,n,r){super(e,t,n,r);this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ri,endingEnd:Ri}}intervalChanged_(e,t,n){const r=this.parameterPositions;let s=e-2,o=e+1,a=r[s],l=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case Pi:s=e,a=2*t-n;break;case Ns:s=r.length-2,a=t+r[s]-r[s+1];break;default:s=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Pi:o=e,l=2*n-t;break;case Ns:o=1,l=n+r[1]-r[0];break;default:o=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,n,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,m=this._weightNext,x=(n-t)/(r-t),y=x*x,v=y*x,p=-f*v+2*f*y-f*x,g=(1+f)*v+(-1.5-2*f)*y+(-.5+f)*x+1,A=(-1-m)*v+(1.5+m)*y+.5*x,b=m*v-m*y;for(let E=0;E!==a;++E)s[E]=p*o[u+E]+g*o[c+E]+A*o[l+E]+b*o[h+E];return s}}class Lf extends kn{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(r-t),h=1-u;for(let f=0;f!==a;++f)s[f]=o[c+f]*h+o[l+f]*u;return s}}class Wb extends kn{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}}class sn{constructor(e,t,n,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Je.convertArray(t,this.TimeBufferType),this.values=Je.convertArray(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Je.convertArray(e.times,Array),values:Je.convertArray(e.values,Array)};const r=e.getInterpolation();r!==e.DefaultInterpolation&&(n.interpolation=r)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Wb(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Lf(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Gb(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Is:t=this.InterpolantFactoryMethodDiscrete;break;case Ds:t=this.InterpolantFactoryMethodLinear;break;case Sa:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Is;case this.InterpolantFactoryMethodLinear:return Ds;case this.InterpolantFactoryMethodSmooth:return Sa}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){const n=this.times,r=n.length;let s=0,o=r-1;for(;s!==r&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=Je.arraySlice(n,s,o),this.values=Je.arraySlice(this.values,s*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!=0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,r=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(r!==void 0&&Je.isTypedArray(r))for(let a=0,l=r.length;a!==l;++a){const c=r[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=Je.arraySlice(this.times),t=Je.arraySlice(this.values),n=this.getValueSize(),r=this.getInterpolation()===Sa,s=e.length-1;let o=1;for(let a=1;a<s;++a){let l=!1;const c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(r)l=!0;else{const h=a*n,f=h-n,m=h+n;for(let x=0;x!==n;++x){const y=t[h+x];if(y!==t[f+x]||y!==t[m+x]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const h=a*n,f=o*n;for(let m=0;m!==n;++m)t[f+m]=t[h+m]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=Je.arraySlice(e,0,o),this.values=Je.arraySlice(t,0,o*n)):(this.times=e,this.values=t),this}clone(){const e=Je.arraySlice(this.times,0),t=Je.arraySlice(this.values,0),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}}sn.prototype.TimeBufferType=Float32Array;sn.prototype.ValueBufferType=Float32Array;sn.prototype.DefaultInterpolation=Ds;class ar extends sn{}ar.prototype.ValueTypeName="bool";ar.prototype.ValueBufferType=Array;ar.prototype.DefaultInterpolation=Is;ar.prototype.InterpolantFactoryMethodLinear=void 0;ar.prototype.InterpolantFactoryMethodSmooth=void 0;class Cf extends sn{}Cf.prototype.ValueTypeName="color";class wo extends sn{}wo.prototype.ValueTypeName="number";class qb extends kn{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(r-t);let c=e*a;for(let u=c+a;c!==u;c+=4)xt.slerpFlat(s,0,o,c-a,o,c,l);return s}}class $r extends sn{InterpolantFactoryMethodLinear(e){return new qb(this.times,this.values,this.getValueSize(),e)}}$r.prototype.ValueTypeName="quaternion";$r.prototype.DefaultInterpolation=Ds;$r.prototype.InterpolantFactoryMethodSmooth=void 0;class lr extends sn{}lr.prototype.ValueTypeName="string";lr.prototype.ValueBufferType=Array;lr.prototype.DefaultInterpolation=Is;lr.prototype.InterpolantFactoryMethodLinear=void 0;lr.prototype.InterpolantFactoryMethodSmooth=void 0;class So extends sn{}So.prototype.ValueTypeName="vector";class Rf{constructor(e,t=-1,n,r=Ta){this.name=e,this.tracks=n,this.duration=t,this.blendMode=r,this.uuid=Qt(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,r=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(Xb(n[o]).scale(r));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,o=n.length;s!==o;++s)t.push(sn.toJSON(n[s]));return r}static CreateFromMorphTargetSequence(e,t,n,r){const s=t.length,o=[];for(let a=0;a<s;a++){let l=[],c=[];l.push((a+s-1)%s,a,(a+1)%s),c.push(0,1,0);const u=Je.getKeyframeOrder(l);l=Je.sortedArray(l,1,u),c=Je.sortedArray(c,1,u),!r&&l[0]===0&&(l.push(s),c.push(c[0])),o.push(new wo(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const r=e;n=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<n.length;r++)if(n[r].name===t)return n[r];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const r={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],u=c.name.match(s);if(u&&u.length>1){const h=u[1];let f=r[h];f||(r[h]=f=[]),f.push(c)}}const o=[];for(const a in r)o.push(this.CreateFromMorphTargetSequence(a,r[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,f,m,x,y){if(m.length!==0){const v=[],p=[];Je.flattenJSON(m,v,p,x),v.length!==0&&y.push(new h(f,v,p))}},r=[],s=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const f=c[h].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const m={};let x;for(x=0;x<f.length;x++)if(f[x].morphTargets)for(let y=0;y<f[x].morphTargets.length;y++)m[f[x].morphTargets[y]]=-1;for(const y in m){const v=[],p=[];for(let g=0;g!==f[x].morphTargets.length;++g){const A=f[x];v.push(A.time),p.push(A.morphTarget===y?1:0)}r.push(new wo(".morphTargetInfluence["+y+"]",v,p))}l=m.length*(o||1)}else{const m=".bones["+t[h].name+"]";n(So,m+".position",f,"pos",r),n($r,m+".quaternion",f,"rot",r),n(So,m+".scale",f,"scl",r)}}return r.length===0?null:new this(s,l,r,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,r=e.length;n!==r;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function jb(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return wo;case"vector":case"vector2":case"vector3":case"vector4":return So;case"color":return Cf;case"quaternion":return $r;case"bool":case"boolean":return ar;case"string":return lr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function Xb(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=jb(i.type);if(i.times===void 0){const t=[],n=[];Je.flattenJSON(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}const cr={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class Yb{constructor(e,t,n){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const m=c[h],x=c[h+1];if(m.global&&(m.lastIndex=0),m.test(u))return x}return null}}}const Zb=new Yb;class yn{constructor(e){this.manager=e!==void 0?e:Zb,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const _n={};class Pf extends yn{constructor(e){super(e)}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=cr.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(_n[e]!==void 0){_n[e].push({onLoad:t,onProgress:n,onError:r});return}_n[e]=[],_n[e].push({onLoad:t,onProgress:n,onError:r});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"});fetch(o).then(a=>{if(a.status===200||a.status===0){a.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received.");const l=_n[e],c=a.body.getReader(),u=a.headers.get("Content-Length"),h=u?parseInt(u):0,f=h!==0;let m=0;return new ReadableStream({start(x){y();function y(){c.read().then(({done:v,value:p})=>{if(v)x.close();else{m+=p.byteLength;const g=new ProgressEvent("progress",{lengthComputable:f,loaded:m,total:h});for(let A=0,b=l.length;A<b;A++){const E=l[A];E.onProgress&&E.onProgress(g)}x.enqueue(p),y()}})}}})}else throw Error(`fetch for "${a.url}" responded with ${a.status}: ${a.statusText}`)}).then(a=>{const l=new Response(a);switch(this.responseType){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(c=>new DOMParser().parseFromString(c,this.mimeType));case"json":return l.json();default:return l.text()}}).then(a=>{cr.add(e,a);const l=_n[e];delete _n[e];for(let c=0,u=l.length;c<u;c++){const h=l[c];h.onLoad&&h.onLoad(a)}this.manager.itemEnd(e)}).catch(a=>{const l=_n[e];delete _n[e];for(let c=0,u=l.length;c<u;c++){const h=l[c];h.onError&&h.onError(a)}this.manager.itemError(e),this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class If extends yn{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=cr.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=Os("img");function l(){u(),cr.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(h){u(),r&&r(h),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.substr(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class Jb extends yn{constructor(e){super(e)}load(e,t,n,r){const s=new eo,o=new If(this.manager);o.setCrossOrigin(this.crossOrigin),o.setPath(this.path);let a=0;function l(c){o.load(e[c],function(u){s.images[c]=u,a++,a===6&&(s.needsUpdate=!0,t&&t(s))},void 0,r)}for(let c=0;c<e.length;++c)l(c);return s}}class $b extends yn{constructor(e){super(e)}load(e,t,n,r){const s=new dt,o=new If(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,r),s}}class on extends ke{constructor(e,t=1){super();this.type="Light",this.color=new we(e),this.intensity=t}dispose(){}copy(e){return super.copy(e),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}on.prototype.isLight=!0;class Kb extends on{constructor(e,t,n){super(e,n);this.type="HemisphereLight",this.position.copy(ke.DefaultUp),this.updateMatrix(),this.groundColor=new we(t)}copy(e){return on.prototype.copy.call(this,e),this.groundColor.copy(e.groundColor),this}}Kb.prototype.isHemisphereLight=!0;const Df=new Se,Nf=new D,Ff=new D;class Rl{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new oe(512,512),this.map=null,this.mapPass=null,this.matrix=new Se,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new no,this._frameExtents=new oe(1,1),this._viewportCount=1,this._viewports=[new We(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Nf.setFromMatrixPosition(e.matrixWorld),t.position.copy(Nf),Ff.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ff),t.updateMatrixWorld(),Df.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Df),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(t.projectionMatrix),n.multiply(t.matrixWorldInverse)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Bf extends Rl{constructor(){super(new Lt(50,1,.5,500));this.focus=1}updateMatrices(e){const t=this.camera,n=Ca*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}Bf.prototype.isSpotLightShadow=!0;class Qb extends on{constructor(e,t,n=0,r=Math.PI/3,s=0,o=1){super(e,t);this.type="SpotLight",this.position.copy(ke.DefaultUp),this.updateMatrix(),this.target=new ke,this.distance=n,this.angle=r,this.penumbra=s,this.decay=o,this.shadow=new Bf}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}Qb.prototype.isSpotLight=!0;const Of=new Se,Kr=new D,Pl=new D;class zf extends Rl{constructor(){super(new Lt(90,1,.5,500));this._frameExtents=new oe(4,2),this._viewportCount=6,this._viewports=[new We(2,1,1,1),new We(0,1,1,1),new We(3,1,1,1),new We(1,1,1,1),new We(3,0,1,1),new We(1,0,1,1)],this._cubeDirections=[new D(1,0,0),new D(-1,0,0),new D(0,0,1),new D(0,0,-1),new D(0,1,0),new D(0,-1,0)],this._cubeUps=[new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,0,1),new D(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,r=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Kr.setFromMatrixPosition(e.matrixWorld),n.position.copy(Kr),Pl.copy(n.position),Pl.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Pl),n.updateMatrixWorld(),r.makeTranslation(-Kr.x,-Kr.y,-Kr.z),Of.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Of)}}zf.prototype.isPointLightShadow=!0;class eM extends on{constructor(e,t,n=0,r=1){super(e,t);this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new zf}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}eM.prototype.isPointLight=!0;class Uf extends Rl{constructor(){super(new rl(-5,5,5,-5,.5,500))}}Uf.prototype.isDirectionalLightShadow=!0;class tM extends on{constructor(e,t){super(e,t);this.type="DirectionalLight",this.position.copy(ke.DefaultUp),this.updateMatrix(),this.target=new ke,this.shadow=new Uf}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}tM.prototype.isDirectionalLight=!0;class nM extends on{constructor(e,t){super(e,t);this.type="AmbientLight"}}nM.prototype.isAmbientLight=!0;class iM extends on{constructor(e,t,n=10,r=10){super(e,t);this.type="RectAreaLight",this.width=n,this.height=r}get power(){return this.intensity*this.width*this.height*Math.PI}set power(e){this.intensity=e/(this.width*this.height*Math.PI)}copy(e){return super.copy(e),this.width=e.width,this.height=e.height,this}toJSON(e){const t=super.toJSON(e);return t.object.width=this.width,t.object.height=this.height,t}}iM.prototype.isRectAreaLight=!0;class Hf{constructor(){this.coefficients=[];for(let e=0;e<9;e++)this.coefficients.push(new D)}set(e){for(let t=0;t<9;t++)this.coefficients[t].copy(e[t]);return this}zero(){for(let e=0;e<9;e++)this.coefficients[e].set(0,0,0);return this}getAt(e,t){const n=e.x,r=e.y,s=e.z,o=this.coefficients;return t.copy(o[0]).multiplyScalar(.282095),t.addScaledVector(o[1],.488603*r),t.addScaledVector(o[2],.488603*s),t.addScaledVector(o[3],.488603*n),t.addScaledVector(o[4],1.092548*(n*r)),t.addScaledVector(o[5],1.092548*(r*s)),t.addScaledVector(o[6],.315392*(3*s*s-1)),t.addScaledVector(o[7],1.092548*(n*s)),t.addScaledVector(o[8],.546274*(n*n-r*r)),t}getIrradianceAt(e,t){const n=e.x,r=e.y,s=e.z,o=this.coefficients;return t.copy(o[0]).multiplyScalar(.886227),t.addScaledVector(o[1],2*.511664*r),t.addScaledVector(o[2],2*.511664*s),t.addScaledVector(o[3],2*.511664*n),t.addScaledVector(o[4],2*.429043*n*r),t.addScaledVector(o[5],2*.429043*r*s),t.addScaledVector(o[6],.743125*s*s-.247708),t.addScaledVector(o[7],2*.429043*n*s),t.addScaledVector(o[8],.429043*(n*n-r*r)),t}add(e){for(let t=0;t<9;t++)this.coefficients[t].add(e.coefficients[t]);return this}addScaledSH(e,t){for(let n=0;n<9;n++)this.coefficients[n].addScaledVector(e.coefficients[n],t);return this}scale(e){for(let t=0;t<9;t++)this.coefficients[t].multiplyScalar(e);return this}lerp(e,t){for(let n=0;n<9;n++)this.coefficients[n].lerp(e.coefficients[n],t);return this}equals(e){for(let t=0;t<9;t++)if(!this.coefficients[t].equals(e.coefficients[t]))return!1;return!0}copy(e){return this.set(e.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(e,t=0){const n=this.coefficients;for(let r=0;r<9;r++)n[r].fromArray(e,t+r*3);return this}toArray(e=[],t=0){const n=this.coefficients;for(let r=0;r<9;r++)n[r].toArray(e,t+r*3);return e}static getBasisAt(e,t){const n=e.x,r=e.y,s=e.z;t[0]=.282095,t[1]=.488603*r,t[2]=.488603*s,t[3]=.488603*n,t[4]=1.092548*n*r,t[5]=1.092548*r*s,t[6]=.315392*(3*s*s-1),t[7]=1.092548*n*s,t[8]=.546274*(n*n-r*r)}}Hf.prototype.isSphericalHarmonics3=!0;class Il extends on{constructor(e=new Hf,t=1){super(void 0,t);this.sh=e}copy(e){return super.copy(e),this.sh.copy(e.sh),this}fromJSON(e){return this.intensity=e.intensity,this.sh.fromArray(e.sh),this}toJSON(e){const t=super.toJSON(e);return t.object.sh=this.sh.toArray(),t}}Il.prototype.isLightProbe=!0;class rM{static decodeText(e){if(typeof TextDecoder!="undefined")return new TextDecoder().decode(e);let t="";for(let n=0,r=e.length;n<r;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.substr(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class sM extends Xe{constructor(){super();this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}clone(){return new this.constructor().copy(this)}toJSON(){const e=super.toJSON(this);return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}sM.prototype.isInstancedBufferGeometry=!0;class oM extends yn{constructor(e){super(e);typeof createImageBitmap=="undefined"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch=="undefined"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=cr.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(l){cr.add(e,l),t&&t(l),s.manager.itemEnd(e)}).catch(function(l){r&&r(l),s.manager.itemError(e),s.manager.itemEnd(e)}),s.manager.itemStart(e)}}oM.prototype.isImageBitmapLoader=!0;let To;const aM={getContext:function(){return To===void 0&&(To=new(window.AudioContext||window.webkitAudioContext)),To},setContext:function(i){To=i}};class lM extends yn{constructor(e){super(e)}load(e,t,n,r){const s=this,o=new Pf(this.manager);o.setResponseType("arraybuffer"),o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){try{const l=a.slice(0);aM.getContext().decodeAudioData(l,function(u){t(u)})}catch(l){r?r(l):console.error(l),s.manager.itemError(e)}},n,r)}}class cM extends Il{constructor(e,t,n=1){super(void 0,n);const r=new we().set(e),s=new we().set(t),o=new D(r.r,r.g,r.b),a=new D(s.r,s.g,s.b),l=Math.sqrt(Math.PI),c=l*Math.sqrt(.75);this.sh.coefficients[0].copy(o).add(a).multiplyScalar(l),this.sh.coefficients[1].copy(o).sub(a).multiplyScalar(c)}}cM.prototype.isHemisphereLightProbe=!0;class uM extends Il{constructor(e,t=1){super(void 0,t);const n=new we().set(e);this.sh.coefficients[0].set(n.r,n.g,n.b).multiplyScalar(2*Math.sqrt(Math.PI))}}uM.prototype.isAmbientLightProbe=!0;class hM extends ke{constructor(e){super();this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;const t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source.stop(),this.source.onended=null,this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){if(this.detune=e,this.source.detune!==void 0)return this.isPlaying===!0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}}class fM{constructor(e,t,n){this.binding=e,this.valueSize=n;let r,s,o;switch(t){case"quaternion":r=this._slerp,s=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":r=this._select,s=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:r=this._lerp,s=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=r,this._mixBufferRegionAdditive=s,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,r=this.valueSize,s=e*r+r;let o=this.cumulativeWeight;if(o===0){for(let a=0;a!==r;++a)n[s+a]=n[a];o=t}else{o+=t;const a=t/o;this._mixBufferRegion(n,s,0,a,r)}this.cumulativeWeight=o}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,r=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,r,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,r=e*t+t,s=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){const l=t*this._origIndex;this._mixBufferRegion(n,r,l,1-s,t)}o>0&&this._mixBufferRegionAdditive(n,r,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){a.setValue(n,r);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,r=n*this._origIndex;e.getValue(t,r);for(let s=n,o=r;s!==o;++s)t[s]=t[r+s%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,r,s){if(r>=.5)for(let o=0;o!==s;++o)e[t+o]=e[n+o]}_slerp(e,t,n,r){xt.slerpFlat(e,t,e,t,e,n,r)}_slerpAdditive(e,t,n,r,s){const o=this._workIndex*s;xt.multiplyQuaternionsFlat(e,o,e,t,e,n),xt.slerpFlat(e,t,e,t,e,o,r)}_lerp(e,t,n,r,s){const o=1-r;for(let a=0;a!==s;++a){const l=t+a;e[l]=e[l]*o+e[n+a]*r}}_lerpAdditive(e,t,n,r,s){for(let o=0;o!==s;++o){const a=t+o;e[a]=e[a]+e[n+o]*r}}}const Dl="\\[\\]\\.:\\/",dM=new RegExp("["+Dl+"]","g"),Nl="[^"+Dl+"]",pM="[^"+Dl.replace("\\.","")+"]",mM=/((?:WC+[\/:])*)/.source.replace("WC",Nl),gM=/(WCOD+)?/.source.replace("WCOD",pM),xM=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Nl),yM=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Nl),_M=new RegExp("^"+mM+gM+xM+yM+"$"),vM=["material","materials","bones"];class bM{constructor(e,t,n){const r=n||Ve.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=n.length;r!==s;++r)n[r].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Ve{constructor(e,t,n){this.path=t,this.parsedPath=n||Ve.parseTrackName(t),this.node=Ve.findNode(e,this.parsedPath.nodeName)||e,this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Ve.Composite(e,t,n):new Ve(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(dM,"")}static parseTrackName(e){const t=_M.exec(e);if(!t)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){const s=n.nodeName.substring(r+1);vM.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(!t||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,r=t.propertyName;let s=t.propertyIndex;if(e||(e=Ve.findNode(this.rootNode,t.nodeName)||this.rootNode,this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[r];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(e.geometry.isBufferGeometry){if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}else{console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences on THREE.Geometry. Use THREE.BufferGeometry instead.",this);return}}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Ve.Composite=bM;Ve.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ve.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ve.prototype.GetterByBindingType=[Ve.prototype._getValue_direct,Ve.prototype._getValue_array,Ve.prototype._getValue_arrayElement,Ve.prototype._getValue_toArray];Ve.prototype.SetterByBindingTypeAndVersioning=[[Ve.prototype._setValue_direct,Ve.prototype._setValue_direct_setNeedsUpdate,Ve.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ve.prototype._setValue_array,Ve.prototype._setValue_array_setNeedsUpdate,Ve.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ve.prototype._setValue_arrayElement,Ve.prototype._setValue_arrayElement_setNeedsUpdate,Ve.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ve.prototype._setValue_fromArray,Ve.prototype._setValue_fromArray_setNeedsUpdate,Ve.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class MM{constructor(e,t,n=null,r=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=r;const s=t.tracks,o=s.length,a=new Array(o),l={endingStart:Ri,endingEnd:Ri};for(let c=0;c!==o;++c){const u=s[c].createInterpolant(null);a[c]=u,u.settings=l}this._interpolantSettings=l,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=nx,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){const r=this._clip.duration,s=e._clip.duration,o=s/r,a=r/s;e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const r=this._mixer,s=r.time,o=this.timeScale;let a=this._timeScaleInterpolant;a===null&&(a=r._lendControlInterpolant(),this._timeScaleInterpolant=a);const l=a.parameterPositions,c=a.sampleValues;return l[0]=s,l[1]=s+n,c[0]=e/o,c[1]=t/o,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,r){if(!this.enabled){this._updateWeight(e);return}const s=this._startTime;if(s!==null){const l=(e-s)*n;if(l<0||n===0)return;this._startTime=null,t=n*l}t*=this._updateTimeScale(e);const o=this._updateTime(t),a=this._updateWeight(e);if(a>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case ku:for(let u=0,h=l.length;u!==h;++u)l[u].evaluate(o),c[u].accumulateAdditive(a);break;case Ta:default:for(let u=0,h=l.length;u!==h;++u)l[u].evaluate(o),c[u].accumulate(r,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const r=n.evaluate(e)[0];t*=r,e>n.parameterPositions[1]&&(this.stopFading(),r===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;n!==null&&(t*=n.evaluate(e)[0],e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t))}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let r=this.time+e,s=this._loopCount;const o=n===ix;if(e===0)return s===-1?r:o&&(s&1)==1?t-r:r;if(n===tx){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(r>=t)r=t;else if(r<0)r=0;else{this.time=r;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=r,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(s===-1&&(e>=0?(s=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),r>=t||r<0){const a=Math.floor(r/t);r-=t*a,s+=Math.abs(a);const l=this.repetitions-s;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,r=e>0?t:0,this.time=r,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){const c=e<0;this._setEndings(c,!c,o)}else this._setEndings(!1,!1,o);this._loopCount=s,this.time=r,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=r;if(o&&(s&1)==1)return t-r}return r}_setEndings(e,t,n){const r=this._interpolantSettings;n?(r.endingStart=Pi,r.endingEnd=Pi):(e?r.endingStart=this.zeroSlopeAtStart?Pi:Ri:r.endingStart=Ns,t?r.endingEnd=this.zeroSlopeAtEnd?Pi:Ri:r.endingEnd=Ns)}_scheduleFading(e,t,n){const r=this._mixer,s=r.time;let o=this._weightInterpolant;o===null&&(o=r._lendControlInterpolant(),this._weightInterpolant=o);const a=o.parameterPositions,l=o.sampleValues;return a[0]=s,l[0]=t,a[1]=s+e,l[1]=n,this}}class wM extends Cn{constructor(e){super();this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const n=e._localRoot||this._root,r=e._clip.tracks,s=r.length,o=e._propertyBindings,a=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName;let u=c[l];u===void 0&&(u={},c[l]=u);for(let h=0;h!==s;++h){const f=r[h],m=f.name;let x=u[m];if(x!==void 0)o[h]=x;else{if(x=o[h],x!==void 0){x._cacheIndex===null&&(++x.referenceCount,this._addInactiveBinding(x,l,m));continue}const y=t&&t._propertyBindings[h].binding.parsedPath;x=new fM(Ve.create(n,m,y),f.ValueTypeName,f.getValueSize()),++x.referenceCount,this._addInactiveBinding(x,l,m),o[h]=x}a[h].resultBuffer=x.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,r=e._clip.uuid,s=this._actionsByClip[r];this._bindAction(e,s&&s.knownActions[0]),this._addInactiveAction(e,r,n)}const t=e._propertyBindings;for(let n=0,r=t.length;n!==r;++n){const s=t[n];s.useCount++==0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,r=t.length;n!==r;++n){const s=t[n];--s.useCount==0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const r=this._actions,s=this._actionsByClip;let o=s[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,s[t]=o;else{const a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=r.length,r.push(e),o.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],r=e._cacheIndex;n._cacheIndex=r,t[r]=n,t.pop(),e._cacheIndex=null;const s=e._clip.uuid,o=this._actionsByClip,a=o[s],l=a.knownActions,c=l[l.length-1],u=e._byClipCacheIndex;c._byClipCacheIndex=u,l[u]=c,l.pop(),e._byClipCacheIndex=null;const h=a.actionByRoot,f=(e._localRoot||this._root).uuid;delete h[f],l.length===0&&delete o[s],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,r=t.length;n!==r;++n){const s=t[n];--s.referenceCount==0&&this._removeInactiveBinding(s)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,r=this._nActiveActions++,s=t[r];e._cacheIndex=r,t[r]=e,s._cacheIndex=n,t[n]=s}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,r=--this._nActiveActions,s=t[r];e._cacheIndex=r,t[r]=e,s._cacheIndex=n,t[n]=s}_addInactiveBinding(e,t,n){const r=this._bindingsByRootAndName,s=this._bindings;let o=r[t];o===void 0&&(o={},r[t]=o),o[n]=e,e._cacheIndex=s.length,s.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,r=n.rootNode.uuid,s=n.path,o=this._bindingsByRootAndName,a=o[r],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete a[s],Object.keys(a).length===0&&delete o[r]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,r=this._nActiveBindings++,s=t[r];e._cacheIndex=r,t[r]=e,s._cacheIndex=n,t[n]=s}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,r=--this._nActiveBindings,s=t[r];e._cacheIndex=r,t[r]=e,s._cacheIndex=n,t[n]=s}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new Lf(new Float32Array(2),new Float32Array(2),1,this._controlInterpolantsResultBuffer),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,r=--this._nActiveControlInterpolants,s=t[r];e.__cacheIndex=r,t[r]=e,s.__cacheIndex=n,t[n]=s}clipAction(e,t,n){const r=t||this._root,s=r.uuid;let o=typeof e=="string"?Rf.findByName(r,e):e;const a=o!==null?o.uuid:e,l=this._actionsByClip[a];let c=null;if(n===void 0&&(o!==null?n=o.blendMode:n=Ta),l!==void 0){const h=l.actionByRoot[s];if(h!==void 0&&h.blendMode===n)return h;c=l.knownActions[0],o===null&&(o=c._clip)}if(o===null)return null;const u=new MM(this,o,t,n);return this._bindAction(u,c),this._addInactiveAction(u,a,s),u}existingAction(e,t){const n=t||this._root,r=n.uuid,s=typeof e=="string"?Rf.findByName(n,e):e,o=s?s.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[r]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,r=this.time+=e,s=Math.sign(e),o=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(r,e,s,o);const a=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)a[c].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,r=this._actionsByClip,s=r[n];if(s!==void 0){const o=s.knownActions;for(let a=0,l=o.length;a!==l;++a){const c=o[a];this._deactivateAction(c);const u=c._cacheIndex,h=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,h._cacheIndex=u,t[u]=h,t.pop(),this._removeInactiveBindingsForAction(c)}delete r[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const o in n){const a=n[o].actionByRoot,l=a[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const r=this._bindingsByRootAndName,s=r[t];if(s!==void 0)for(const o in s){const a=s[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}wM.prototype._controlInterpolantsResultBuffer=new Float32Array(1);class SM extends Ur{constructor(e,t,n=1){super(e,t);this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}}SM.prototype.isInstancedInterleavedBuffer=!0;class kf{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){const e=1e-6;return this.phi=Math.max(e,Math.min(Math.PI-e,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Et(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Vf=new oe;class ur{constructor(e=new oe(1/0,1/0),t=new oe(-1/0,-1/0)){this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Vf.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y)}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return Vf.copy(e).clamp(this.min,this.max).sub(e).length()}intersect(e){return this.min.max(e.min),this.max.min(e.max),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}ur.prototype.isBox2=!0;const Vn=new D,Eo=new Se,Fl=new Se;class TM extends xl{constructor(e){const t=Gf(e),n=new Xe,r=[],s=[],o=new we(0,0,1),a=new we(0,1,0);for(let c=0;c<t.length;c++){const u=t[c];u.parent&&u.parent.isBone&&(r.push(0,0,0),r.push(0,0,0),s.push(o.r,o.g,o.b),s.push(a.r,a.g,a.b))}n.setAttribute("position",new nt(r,3)),n.setAttribute("color",new nt(s,3));const l=new qr({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(n,l);this.type="SkeletonHelper",this.isSkeletonHelper=!0,this.root=e,this.bones=t,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1}updateMatrixWorld(e){const t=this.bones,n=this.geometry,r=n.getAttribute("position");Fl.copy(this.root.matrixWorld).invert();for(let s=0,o=0;s<t.length;s++){const a=t[s];a.parent&&a.parent.isBone&&(Eo.multiplyMatrices(Fl,a.matrixWorld),Vn.setFromMatrixPosition(Eo),r.setXYZ(o,Vn.x,Vn.y,Vn.z),Eo.multiplyMatrices(Fl,a.parent.matrixWorld),Vn.setFromMatrixPosition(Eo),r.setXYZ(o+1,Vn.x,Vn.y,Vn.z),o+=2)}n.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(e)}}function Gf(i){const e=[];i&&i.isBone&&e.push(i);for(let t=0;t<i.children.length;t++)e.push.apply(e,Gf(i.children[t]));return e}class EM extends xl{constructor(e=10,t=10,n=4473924,r=8947848){n=new we(n),r=new we(r);const s=t/2,o=e/t,a=e/2,l=[],c=[];for(let f=0,m=0,x=-a;f<=t;f++,x+=o){l.push(-a,0,x,a,0,x),l.push(x,0,-a,x,0,a);const y=f===s?n:r;y.toArray(c,m),m+=3,y.toArray(c,m),m+=3,y.toArray(c,m),m+=3,y.toArray(c,m),m+=3}const u=new Xe;u.setAttribute("position",new nt(l,3)),u.setAttribute("color",new nt(c,3));const h=new qr({vertexColors:!0,toneMapped:!1});super(u,h);this.type="GridHelper"}}class hi{constructor(){this.type="ShapePath",this.color=new we,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new ui,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,n,r){return this.currentPath.quadraticCurveTo(e,t,n,r),this}bezierCurveTo(e,t,n,r,s,o){return this.currentPath.bezierCurveTo(e,t,n,r,s,o),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e,t){function n(g){const A=[];for(let b=0,E=g.length;b<E;b++){const I=g[b],M=new xn;M.curves=I.curves,A.push(M)}return A}function r(g,A){const b=A.length;let E=!1;for(let I=b-1,M=0;M<b;I=M++){let z=A[I],Q=A[M],Z=Q.x-z.x,F=Q.y-z.y;if(Math.abs(F)>Number.EPSILON){if(F<0&&(z=A[M],Z=-Z,Q=A[I],F=-F),g.y<z.y||g.y>Q.y)continue;if(g.y===z.y){if(g.x===z.x)return!0}else{const ne=F*(g.x-z.x)-Z*(g.y-z.y);if(ne===0)return!0;if(ne<0)continue;E=!E}}else{if(g.y!==z.y)continue;if(Q.x<=g.x&&g.x<=z.x||z.x<=g.x&&g.x<=Q.x)return!0}}return E}const s=rn.isClockWise,o=this.subPaths;if(o.length===0)return[];if(t===!0)return n(o);let a,l,c;const u=[];if(o.length===1)return l=o[0],c=new xn,c.curves=l.curves,u.push(c),u;let h=!s(o[0].getPoints());h=e?!h:h;const f=[],m=[];let x=[],y=0,v;m[y]=void 0,x[y]=[];for(let g=0,A=o.length;g<A;g++)l=o[g],v=l.getPoints(),a=s(v),a=e?!a:a,a?(!h&&m[y]&&y++,m[y]={s:new xn,p:v},m[y].s.curves=l.curves,h&&y++,x[y]=[]):x[y].push({h:l,p:v[0]});if(!m[0])return n(o);if(m.length>1){let g=!1;const A=[];for(let b=0,E=m.length;b<E;b++)f[b]=[];for(let b=0,E=m.length;b<E;b++){const I=x[b];for(let M=0;M<I.length;M++){const z=I[M];let Q=!0;for(let Z=0;Z<m.length;Z++)r(z.p,m[Z].p)&&(b!==Z&&A.push({froms:b,tos:Z,hole:M}),Q?(Q=!1,f[Z].push(z)):g=!0);Q&&f[b].push(z)}}A.length>0&&(g||(x=f))}let p;for(let g=0,A=m.length;g<A;g++){c=m[g].s,u.push(c),p=x[g];for(let b=0,E=p.length;b<E;b++)c.holes.push(p[b].h)}return u}}const AM=new Float32Array(1);new Int32Array(AM.buffer);Ut.create=function(i,e){return console.log("THREE.Curve.create() has been deprecated"),i.prototype=Object.create(Ut.prototype),i.prototype.constructor=i,i.prototype.getPoint=e,i};ui.prototype.fromPoints=function(i){return console.warn("THREE.Path: .fromPoints() has been renamed to .setFromPoints()."),this.setFromPoints(i)};EM.prototype.setColors=function(){console.error("THREE.GridHelper: setColors() has been deprecated, pass them in the constructor instead.")};TM.prototype.update=function(){console.error("THREE.SkeletonHelper: update() no longer needs to be called.")};yn.prototype.extractUrlBase=function(i){return console.warn("THREE.Loader: .extractUrlBase() has been deprecated. Use THREE.LoaderUtils.extractUrlBase() instead."),rM.extractUrlBase(i)};yn.Handlers={add:function(){console.error("THREE.Loader: Handlers.add() has been removed. Use LoadingManager.addHandler() instead.")},get:function(){console.error("THREE.Loader: Handlers.get() has been removed. Use LoadingManager.getHandler() instead.")}};ur.prototype.center=function(i){return console.warn("THREE.Box2: .center() has been renamed to .getCenter()."),this.getCenter(i)};ur.prototype.empty=function(){return console.warn("THREE.Box2: .empty() has been renamed to .isEmpty()."),this.isEmpty()};ur.prototype.isIntersectionBox=function(i){return console.warn("THREE.Box2: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(i)};ur.prototype.size=function(i){return console.warn("THREE.Box2: .size() has been renamed to .getSize()."),this.getSize(i)};Wt.prototype.center=function(i){return console.warn("THREE.Box3: .center() has been renamed to .getCenter()."),this.getCenter(i)};Wt.prototype.empty=function(){return console.warn("THREE.Box3: .empty() has been renamed to .isEmpty()."),this.isEmpty()};Wt.prototype.isIntersectionBox=function(i){return console.warn("THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(i)};Wt.prototype.isIntersectionSphere=function(i){return console.warn("THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(i)};Wt.prototype.size=function(i){return console.warn("THREE.Box3: .size() has been renamed to .getSize()."),this.getSize(i)};zi.prototype.empty=function(){return console.warn("THREE.Sphere: .empty() has been renamed to .isEmpty()."),this.isEmpty()};no.prototype.setFromMatrix=function(i){return console.warn("THREE.Frustum: .setFromMatrix() has been renamed to .setFromProjectionMatrix()."),this.setFromProjectionMatrix(i)};Ke.prototype.flattenToArrayOffset=function(i,e){return console.warn("THREE.Matrix3: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(i,e)};Ke.prototype.multiplyVector3=function(i){return console.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead."),i.applyMatrix3(this)};Ke.prototype.multiplyVector3Array=function(){console.error("THREE.Matrix3: .multiplyVector3Array() has been removed.")};Ke.prototype.applyToBufferAttribute=function(i){return console.warn("THREE.Matrix3: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix3( matrix ) instead."),i.applyMatrix3(this)};Ke.prototype.applyToVector3Array=function(){console.error("THREE.Matrix3: .applyToVector3Array() has been removed.")};Ke.prototype.getInverse=function(i){return console.warn("THREE.Matrix3: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."),this.copy(i).invert()};Se.prototype.extractPosition=function(i){return console.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition()."),this.copyPosition(i)};Se.prototype.flattenToArrayOffset=function(i,e){return console.warn("THREE.Matrix4: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(i,e)};Se.prototype.getPosition=function(){return console.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead."),new D().setFromMatrixColumn(this,3)};Se.prototype.setRotationFromQuaternion=function(i){return console.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion()."),this.makeRotationFromQuaternion(i)};Se.prototype.multiplyToArray=function(){console.warn("THREE.Matrix4: .multiplyToArray() has been removed.")};Se.prototype.multiplyVector3=function(i){return console.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) instead."),i.applyMatrix4(this)};Se.prototype.multiplyVector4=function(i){return console.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead."),i.applyMatrix4(this)};Se.prototype.multiplyVector3Array=function(){console.error("THREE.Matrix4: .multiplyVector3Array() has been removed.")};Se.prototype.rotateAxis=function(i){console.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead."),i.transformDirection(this)};Se.prototype.crossVector=function(i){return console.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead."),i.applyMatrix4(this)};Se.prototype.translate=function(){console.error("THREE.Matrix4: .translate() has been removed.")};Se.prototype.rotateX=function(){console.error("THREE.Matrix4: .rotateX() has been removed.")};Se.prototype.rotateY=function(){console.error("THREE.Matrix4: .rotateY() has been removed.")};Se.prototype.rotateZ=function(){console.error("THREE.Matrix4: .rotateZ() has been removed.")};Se.prototype.rotateByAxis=function(){console.error("THREE.Matrix4: .rotateByAxis() has been removed.")};Se.prototype.applyToBufferAttribute=function(i){return console.warn("THREE.Matrix4: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix4( matrix ) instead."),i.applyMatrix4(this)};Se.prototype.applyToVector3Array=function(){console.error("THREE.Matrix4: .applyToVector3Array() has been removed.")};Se.prototype.makeFrustum=function(i,e,t,n,r,s){return console.warn("THREE.Matrix4: .makeFrustum() has been removed. Use .makePerspective( left, right, top, bottom, near, far ) instead."),this.makePerspective(i,e,n,t,r,s)};Se.prototype.getInverse=function(i){return console.warn("THREE.Matrix4: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."),this.copy(i).invert()};gn.prototype.isIntersectionLine=function(i){return console.warn("THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine()."),this.intersectsLine(i)};xt.prototype.multiplyVector3=function(i){return console.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead."),i.applyQuaternion(this)};xt.prototype.inverse=function(){return console.warn("THREE.Quaternion: .inverse() has been renamed to invert()."),this.invert()};Ui.prototype.isIntersectionBox=function(i){return console.warn("THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(i)};Ui.prototype.isIntersectionPlane=function(i){return console.warn("THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane()."),this.intersectsPlane(i)};Ui.prototype.isIntersectionSphere=function(i){return console.warn("THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(i)};rt.prototype.area=function(){return console.warn("THREE.Triangle: .area() has been renamed to .getArea()."),this.getArea()};rt.prototype.barycoordFromPoint=function(i,e){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),this.getBarycoord(i,e)};rt.prototype.midpoint=function(i){return console.warn("THREE.Triangle: .midpoint() has been renamed to .getMidpoint()."),this.getMidpoint(i)};rt.prototypenormal=function(i){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),this.getNormal(i)};rt.prototype.plane=function(i){return console.warn("THREE.Triangle: .plane() has been renamed to .getPlane()."),this.getPlane(i)};rt.barycoordFromPoint=function(i,e,t,n,r){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),rt.getBarycoord(i,e,t,n,r)};rt.normal=function(i,e,t,n){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),rt.getNormal(i,e,t,n)};xn.prototype.extractAllPoints=function(i){return console.warn("THREE.Shape: .extractAllPoints() has been removed. Use .extractPoints() instead."),this.extractPoints(i)};xn.prototype.extrude=function(i){return console.warn("THREE.Shape: .extrude() has been removed. Use ExtrudeGeometry() instead."),new or(this,i)};xn.prototype.makeGeometry=function(i){return console.warn("THREE.Shape: .makeGeometry() has been removed. Use ShapeGeometry() instead."),new Cl(this,i)};oe.prototype.fromAttribute=function(i,e,t){return console.warn("THREE.Vector2: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(i,e,t)};oe.prototype.distanceToManhattan=function(i){return console.warn("THREE.Vector2: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(i)};oe.prototype.lengthManhattan=function(){return console.warn("THREE.Vector2: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()};D.prototype.setEulerFromRotationMatrix=function(){console.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.")};D.prototype.setEulerFromQuaternion=function(){console.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.")};D.prototype.getPositionFromMatrix=function(i){return console.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition()."),this.setFromMatrixPosition(i)};D.prototype.getScaleFromMatrix=function(i){return console.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale()."),this.setFromMatrixScale(i)};D.prototype.getColumnFromMatrix=function(i,e){return console.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn()."),this.setFromMatrixColumn(e,i)};D.prototype.applyProjection=function(i){return console.warn("THREE.Vector3: .applyProjection() has been removed. Use .applyMatrix4( m ) instead."),this.applyMatrix4(i)};D.prototype.fromAttribute=function(i,e,t){return console.warn("THREE.Vector3: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(i,e,t)};D.prototype.distanceToManhattan=function(i){return console.warn("THREE.Vector3: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(i)};D.prototype.lengthManhattan=function(){return console.warn("THREE.Vector3: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()};We.prototype.fromAttribute=function(i,e,t){return console.warn("THREE.Vector4: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(i,e,t)};We.prototype.lengthManhattan=function(){return console.warn("THREE.Vector4: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()};ke.prototype.getChildByName=function(i){return console.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName()."),this.getObjectByName(i)};ke.prototype.renderDepth=function(){console.warn("THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.")};ke.prototype.translate=function(i,e){return console.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead."),this.translateOnAxis(e,i)};ke.prototype.getWorldRotation=function(){console.error("THREE.Object3D: .getWorldRotation() has been removed. Use THREE.Object3D.getWorldQuaternion( target ) instead.")};ke.prototype.applyMatrix=function(i){return console.warn("THREE.Object3D: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(i)};Object.defineProperties(ke.prototype,{eulerOrder:{get:function(){return console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order},set:function(i){console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order=i}},useQuaternion:{get:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")},set:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")}}});At.prototype.setDrawMode=function(){console.error("THREE.Mesh: .setDrawMode() has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")};Object.defineProperties(At.prototype,{drawMode:{get:function(){return console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode."),rx},set:function(){console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")}}});rf.prototype.initBones=function(){console.error("THREE.SkinnedMesh: initBones() has been removed.")};Lt.prototype.setLens=function(i,e){console.warn("THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup."),e!==void 0&&(this.filmGauge=e),this.setFocalLength(i)};Object.defineProperties(on.prototype,{onlyShadow:{set:function(){console.warn("THREE.Light: .onlyShadow has been removed.")}},shadowCameraFov:{set:function(i){console.warn("THREE.Light: .shadowCameraFov is now .shadow.camera.fov."),this.shadow.camera.fov=i}},shadowCameraLeft:{set:function(i){console.warn("THREE.Light: .shadowCameraLeft is now .shadow.camera.left."),this.shadow.camera.left=i}},shadowCameraRight:{set:function(i){console.warn("THREE.Light: .shadowCameraRight is now .shadow.camera.right."),this.shadow.camera.right=i}},shadowCameraTop:{set:function(i){console.warn("THREE.Light: .shadowCameraTop is now .shadow.camera.top."),this.shadow.camera.top=i}},shadowCameraBottom:{set:function(i){console.warn("THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom."),this.shadow.camera.bottom=i}},shadowCameraNear:{set:function(i){console.warn("THREE.Light: .shadowCameraNear is now .shadow.camera.near."),this.shadow.camera.near=i}},shadowCameraFar:{set:function(i){console.warn("THREE.Light: .shadowCameraFar is now .shadow.camera.far."),this.shadow.camera.far=i}},shadowCameraVisible:{set:function(){console.warn("THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead.")}},shadowBias:{set:function(i){console.warn("THREE.Light: .shadowBias is now .shadow.bias."),this.shadow.bias=i}},shadowDarkness:{set:function(){console.warn("THREE.Light: .shadowDarkness has been removed.")}},shadowMapWidth:{set:function(i){console.warn("THREE.Light: .shadowMapWidth is now .shadow.mapSize.width."),this.shadow.mapSize.width=i}},shadowMapHeight:{set:function(i){console.warn("THREE.Light: .shadowMapHeight is now .shadow.mapSize.height."),this.shadow.mapSize.height=i}}});Object.defineProperties(at.prototype,{length:{get:function(){return console.warn("THREE.BufferAttribute: .length has been deprecated. Use .count instead."),this.array.length}},dynamic:{get:function(){return console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),this.usage===Fs},set:function(){console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),this.setUsage(Fs)}}});at.prototype.setDynamic=function(i){return console.warn("THREE.BufferAttribute: .setDynamic() has been deprecated. Use .setUsage() instead."),this.setUsage(i===!0?Fs:Rr),this};at.prototype.copyIndicesArray=function(){console.error("THREE.BufferAttribute: .copyIndicesArray() has been removed.")},at.prototype.setArray=function(){console.error("THREE.BufferAttribute: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")};Xe.prototype.addIndex=function(i){console.warn("THREE.BufferGeometry: .addIndex() has been renamed to .setIndex()."),this.setIndex(i)};Xe.prototype.addAttribute=function(i,e){return console.warn("THREE.BufferGeometry: .addAttribute() has been renamed to .setAttribute()."),!(e&&e.isBufferAttribute)&&!(e&&e.isInterleavedBufferAttribute)?(console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."),this.setAttribute(i,new at(arguments[1],arguments[2]))):i==="index"?(console.warn("THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."),this.setIndex(e),this):this.setAttribute(i,e)};Xe.prototype.addDrawCall=function(i,e,t){t!==void 0&&console.warn("THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset."),console.warn("THREE.BufferGeometry: .addDrawCall() is now .addGroup()."),this.addGroup(i,e)};Xe.prototype.clearDrawCalls=function(){console.warn("THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups()."),this.clearGroups()};Xe.prototype.computeOffsets=function(){console.warn("THREE.BufferGeometry: .computeOffsets() has been removed.")};Xe.prototype.removeAttribute=function(i){return console.warn("THREE.BufferGeometry: .removeAttribute() has been renamed to .deleteAttribute()."),this.deleteAttribute(i)};Xe.prototype.applyMatrix=function(i){return console.warn("THREE.BufferGeometry: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(i)};Object.defineProperties(Xe.prototype,{drawcalls:{get:function(){return console.error("THREE.BufferGeometry: .drawcalls has been renamed to .groups."),this.groups}},offsets:{get:function(){return console.warn("THREE.BufferGeometry: .offsets has been renamed to .groups."),this.groups}}});Ur.prototype.setDynamic=function(i){return console.warn("THREE.InterleavedBuffer: .setDynamic() has been deprecated. Use .setUsage() instead."),this.setUsage(i===!0?Fs:Rr),this};Ur.prototype.setArray=function(){console.error("THREE.InterleavedBuffer: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")};or.prototype.getArrays=function(){console.error("THREE.ExtrudeGeometry: .getArrays() has been removed.")};or.prototype.addShapeList=function(){console.error("THREE.ExtrudeGeometry: .addShapeList() has been removed.")};or.prototype.addShape=function(){console.error("THREE.ExtrudeGeometry: .addShape() has been removed.")};Yh.prototype.dispose=function(){console.error("THREE.Scene: .dispose() has been removed.")};Object.defineProperties(yt.prototype,{wrapAround:{get:function(){console.warn("THREE.Material: .wrapAround has been removed.")},set:function(){console.warn("THREE.Material: .wrapAround has been removed.")}},overdraw:{get:function(){console.warn("THREE.Material: .overdraw has been removed.")},set:function(){console.warn("THREE.Material: .overdraw has been removed.")}},wrapRGB:{get:function(){return console.warn("THREE.Material: .wrapRGB has been removed."),new we}},shading:{get:function(){console.error("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead.")},set:function(i){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=i===vu}},stencilMask:{get:function(){return console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead."),this.stencilFuncMask},set:function(i){console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead."),this.stencilFuncMask=i}},vertexTangents:{get:function(){console.warn("THREE."+this.type+": .vertexTangents has been removed.")},set:function(){console.warn("THREE."+this.type+": .vertexTangents has been removed.")}}});Object.defineProperties(ai.prototype,{derivatives:{get:function(){return console.warn("THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives},set:function(i){console.warn("THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives=i}}});Ge.prototype.clearTarget=function(i,e,t,n){console.warn("THREE.WebGLRenderer: .clearTarget() has been deprecated. Use .setRenderTarget() and .clear() instead."),this.setRenderTarget(i),this.clear(e,t,n)};Ge.prototype.animate=function(i){console.warn("THREE.WebGLRenderer: .animate() is now .setAnimationLoop()."),this.setAnimationLoop(i)};Ge.prototype.getCurrentRenderTarget=function(){return console.warn("THREE.WebGLRenderer: .getCurrentRenderTarget() is now .getRenderTarget()."),this.getRenderTarget()};Ge.prototype.getMaxAnisotropy=function(){return console.warn("THREE.WebGLRenderer: .getMaxAnisotropy() is now .capabilities.getMaxAnisotropy()."),this.capabilities.getMaxAnisotropy()};Ge.prototype.getPrecision=function(){return console.warn("THREE.WebGLRenderer: .getPrecision() is now .capabilities.precision."),this.capabilities.precision};Ge.prototype.resetGLState=function(){return console.warn("THREE.WebGLRenderer: .resetGLState() is now .state.reset()."),this.state.reset()};Ge.prototype.supportsFloatTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' )."),this.extensions.get("OES_texture_float")};Ge.prototype.supportsHalfFloatTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' )."),this.extensions.get("OES_texture_half_float")};Ge.prototype.supportsStandardDerivatives=function(){return console.warn("THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' )."),this.extensions.get("OES_standard_derivatives")};Ge.prototype.supportsCompressedTextureS3TC=function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' )."),this.extensions.get("WEBGL_compressed_texture_s3tc")};Ge.prototype.supportsCompressedTexturePVRTC=function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' )."),this.extensions.get("WEBGL_compressed_texture_pvrtc")};Ge.prototype.supportsBlendMinMax=function(){return console.warn("THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' )."),this.extensions.get("EXT_blend_minmax")};Ge.prototype.supportsVertexTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsVertexTextures() is now .capabilities.vertexTextures."),this.capabilities.vertexTextures};Ge.prototype.supportsInstancedArrays=function(){return console.warn("THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' )."),this.extensions.get("ANGLE_instanced_arrays")};Ge.prototype.enableScissorTest=function(i){console.warn("THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest()."),this.setScissorTest(i)};Ge.prototype.initMaterial=function(){console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.")};Ge.prototype.addPrePlugin=function(){console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.")};Ge.prototype.addPostPlugin=function(){console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.")};Ge.prototype.updateShadowMap=function(){console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.")};Ge.prototype.setFaceCulling=function(){console.warn("THREE.WebGLRenderer: .setFaceCulling() has been removed.")};Ge.prototype.allocTextureUnit=function(){console.warn("THREE.WebGLRenderer: .allocTextureUnit() has been removed.")};Ge.prototype.setTexture=function(){console.warn("THREE.WebGLRenderer: .setTexture() has been removed.")};Ge.prototype.setTexture2D=function(){console.warn("THREE.WebGLRenderer: .setTexture2D() has been removed.")};Ge.prototype.setTextureCube=function(){console.warn("THREE.WebGLRenderer: .setTextureCube() has been removed.")};Ge.prototype.getActiveMipMapLevel=function(){return console.warn("THREE.WebGLRenderer: .getActiveMipMapLevel() is now .getActiveMipmapLevel()."),this.getActiveMipmapLevel()};Object.defineProperties(Ge.prototype,{shadowMapEnabled:{get:function(){return this.shadowMap.enabled},set:function(i){console.warn("THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled."),this.shadowMap.enabled=i}},shadowMapType:{get:function(){return this.shadowMap.type},set:function(i){console.warn("THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type."),this.shadowMap.type=i}},shadowMapCullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")}},context:{get:function(){return console.warn("THREE.WebGLRenderer: .context has been removed. Use .getContext() instead."),this.getContext()}},vr:{get:function(){return console.warn("THREE.WebGLRenderer: .vr has been renamed to .xr"),this.xr}},gammaInput:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead."),!1},set:function(){console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead.")}},gammaOutput:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),!1},set:function(i){console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),this.outputEncoding=i===!0?ri:gt}},toneMappingWhitePoint:{get:function(){return console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed."),1},set:function(){console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed.")}}});Object.defineProperties(jh.prototype,{cullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")}},renderReverseSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")}},renderSingleSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")}}});Object.defineProperties(en.prototype,{wrapS:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS},set:function(i){console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS=i}},wrapT:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT},set:function(i){console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT=i}},magFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter},set:function(i){console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter=i}},minFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter},set:function(i){console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter=i}},anisotropy:{get:function(){return console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy},set:function(i){console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy=i}},offset:{get:function(){return console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset},set:function(i){console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset=i}},repeat:{get:function(){return console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat},set:function(i){console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat=i}},format:{get:function(){return console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format},set:function(i){console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format=i}},type:{get:function(){return console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type},set:function(i){console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type=i}},generateMipmaps:{get:function(){return console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps},set:function(i){console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps=i}}});hM.prototype.load=function(i){console.warn("THREE.Audio: .load has been deprecated. Use THREE.AudioLoader instead.");const e=this;return new lM().load(i,function(n){e.setBuffer(n)}),this};tl.prototype.updateCubeMap=function(i,e){return console.warn("THREE.CubeCamera: .updateCubeMap() is now .update()."),this.update(i,e)};tl.prototype.clear=function(i,e,t,n){return console.warn("THREE.CubeCamera: .clear() is now .renderTarget.clear()."),this.renderTarget.clear(i,e,t,n)};Ni.crossOrigin=void 0;Ni.loadTexture=function(i,e,t,n){console.warn("THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead.");const r=new $b;r.setCrossOrigin(this.crossOrigin);const s=r.load(i,t,void 0,n);return e&&(s.mapping=e),s};Ni.loadTextureCube=function(i,e,t,n){console.warn("THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead.");const r=new Jb;r.setCrossOrigin(this.crossOrigin);const s=r.load(i,t,void 0,n);return e&&(s.mapping=e),s};Ni.loadCompressedTexture=function(){console.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.")};Ni.loadCompressedTextureCube=function(){console.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.")};typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:xu}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=xu);const Wf={type:"change"},Bl={type:"start"},Ol={type:"end"};class zM extends Cn{constructor(e,t){super();t===void 0&&console.warn('THREE.OrbitControls: The second parameter "domElement" is now mandatory.'),t===document&&console.error('THREE.OrbitControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.'),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new D,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:wi.ROTATE,MIDDLE:wi.DOLLY,RIGHT:wi.PAN},this.touches={ONE:Si.ROTATE,TWO:Si.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(O){O.addEventListener("keydown",Y),this._domElementKeyEvents=O},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Wf),n.update(),s=r.NONE},this.update=function(){const O=new D,ye=new xt().setFromUnitVectors(e.up,new D(0,1,0)),Re=ye.clone().invert(),Ce=new D,$e=new xt,Le=2*Math.PI;return function(){const ht=n.object.position;O.copy(ht).sub(n.target),O.applyQuaternion(ye),a.setFromVector3(O),n.autoRotate&&s===r.NONE&&Q(M()),n.enableDamping?(a.theta+=l.theta*n.dampingFactor,a.phi+=l.phi*n.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let Ht=n.minAzimuthAngle,Nt=n.maxAzimuthAngle;return isFinite(Ht)&&isFinite(Nt)&&(Ht<-Math.PI?Ht+=Le:Ht>Math.PI&&(Ht-=Le),Nt<-Math.PI?Nt+=Le:Nt>Math.PI&&(Nt-=Le),Ht<=Nt?a.theta=Math.max(Ht,Math.min(Nt,a.theta)):a.theta=a.theta>(Ht+Nt)/2?Math.max(Ht,a.theta):Math.min(Nt,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),a.radius*=c,a.radius=Math.max(n.minDistance,Math.min(n.maxDistance,a.radius)),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),O.setFromSpherical(a),O.applyQuaternion(Re),ht.copy(n.target).add(O),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),u.set(0,0,0)),c=1,h||Ce.distanceToSquared(n.object.position)>o||8*(1-$e.dot(n.object.quaternion))>o?(n.dispatchEvent(Wf),Ce.copy(n.object.position),$e.copy(n.object.quaternion),h=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",fe),n.domElement.removeEventListener("pointerdown",T),n.domElement.removeEventListener("pointercancel",d),n.domElement.removeEventListener("wheel",W),n.domElement.removeEventListener("pointermove",P),n.domElement.removeEventListener("pointerup",w),n._domElementKeyEvents!==null&&n._domElementKeyEvents.removeEventListener("keydown",Y)};const n=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const o=1e-6,a=new kf,l=new kf;let c=1;const u=new D;let h=!1;const f=new oe,m=new oe,x=new oe,y=new oe,v=new oe,p=new oe,g=new oe,A=new oe,b=new oe,E=[],I={};function M(){return 2*Math.PI/60/60*n.autoRotateSpeed}function z(){return Math.pow(.95,n.zoomSpeed)}function Q(O){l.theta-=O}function Z(O){l.phi-=O}const F=function(){const O=new D;return function(Re,Ce){O.setFromMatrixColumn(Ce,0),O.multiplyScalar(-Re),u.add(O)}}(),ne=function(){const O=new D;return function(Re,Ce){n.screenSpacePanning===!0?O.setFromMatrixColumn(Ce,1):(O.setFromMatrixColumn(Ce,0),O.crossVectors(n.object.up,O)),O.multiplyScalar(Re),u.add(O)}}(),J=function(){const O=new D;return function(Re,Ce){const $e=n.domElement;if(n.object.isPerspectiveCamera){const Le=n.object.position;O.copy(Le).sub(n.target);let Ye=O.length();Ye*=Math.tan(n.object.fov/2*Math.PI/180),F(2*Re*Ye/$e.clientHeight,n.object.matrix),ne(2*Ce*Ye/$e.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(F(Re*(n.object.right-n.object.left)/n.object.zoom/$e.clientWidth,n.object.matrix),ne(Ce*(n.object.top-n.object.bottom)/n.object.zoom/$e.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function $(O){n.object.isPerspectiveCamera?c/=O:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*O)),n.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function ee(O){n.object.isPerspectiveCamera?c*=O:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/O)),n.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function K(O){f.set(O.clientX,O.clientY)}function V(O){g.set(O.clientX,O.clientY)}function q(O){y.set(O.clientX,O.clientY)}function xe(O){m.set(O.clientX,O.clientY),x.subVectors(m,f).multiplyScalar(n.rotateSpeed);const ye=n.domElement;Q(2*Math.PI*x.x/ye.clientHeight),Z(2*Math.PI*x.y/ye.clientHeight),f.copy(m),n.update()}function be(O){A.set(O.clientX,O.clientY),b.subVectors(A,g),b.y>0?$(z()):b.y<0&&ee(z()),g.copy(A),n.update()}function ve(O){v.set(O.clientX,O.clientY),p.subVectors(v,y).multiplyScalar(n.panSpeed),J(p.x,p.y),y.copy(v),n.update()}function X(O){O.deltaY<0?ee(z()):O.deltaY>0&&$(z()),n.update()}function C(O){let ye=!1;switch(O.code){case n.keys.UP:J(0,n.keyPanSpeed),ye=!0;break;case n.keys.BOTTOM:J(0,-n.keyPanSpeed),ye=!0;break;case n.keys.LEFT:J(n.keyPanSpeed,0),ye=!0;break;case n.keys.RIGHT:J(-n.keyPanSpeed,0),ye=!0;break}ye&&(O.preventDefault(),n.update())}function L(){if(E.length===1)f.set(E[0].pageX,E[0].pageY);else{const O=.5*(E[0].pageX+E[1].pageX),ye=.5*(E[0].pageY+E[1].pageY);f.set(O,ye)}}function k(){if(E.length===1)y.set(E[0].pageX,E[0].pageY);else{const O=.5*(E[0].pageX+E[1].pageX),ye=.5*(E[0].pageY+E[1].pageY);y.set(O,ye)}}function U(){const O=E[0].pageX-E[1].pageX,ye=E[0].pageY-E[1].pageY,Re=Math.sqrt(O*O+ye*ye);g.set(0,Re)}function N(){n.enableZoom&&U(),n.enablePan&&k()}function ie(){n.enableZoom&&U(),n.enableRotate&&L()}function ue(O){if(E.length==1)m.set(O.pageX,O.pageY);else{const Re=_e(O),Ce=.5*(O.pageX+Re.x),$e=.5*(O.pageY+Re.y);m.set(Ce,$e)}x.subVectors(m,f).multiplyScalar(n.rotateSpeed);const ye=n.domElement;Q(2*Math.PI*x.x/ye.clientHeight),Z(2*Math.PI*x.y/ye.clientHeight),f.copy(m)}function le(O){if(E.length===1)v.set(O.pageX,O.pageY);else{const ye=_e(O),Re=.5*(O.pageX+ye.x),Ce=.5*(O.pageY+ye.y);v.set(Re,Ce)}p.subVectors(v,y).multiplyScalar(n.panSpeed),J(p.x,p.y),y.copy(v)}function ge(O){const ye=_e(O),Re=O.pageX-ye.x,Ce=O.pageY-ye.y,$e=Math.sqrt(Re*Re+Ce*Ce);A.set(0,$e),b.set(0,Math.pow(A.y/g.y,n.zoomSpeed)),$(b.y),g.copy(A)}function j(O){n.enableZoom&&ge(O),n.enablePan&&le(O)}function S(O){n.enableZoom&&ge(O),n.enableRotate&&ue(O)}function T(O){n.enabled!==!1&&(E.length===0&&(n.domElement.setPointerCapture(O.pointerId),n.domElement.addEventListener("pointermove",P),n.domElement.addEventListener("pointerup",w)),H(O),O.pointerType==="touch"?he(O):_(O))}function P(O){n.enabled!==!1&&(O.pointerType==="touch"?ce(O):B(O))}function w(O){n.enabled!==!1&&(O.pointerType==="touch"?pe():G(),me(O),E.length===0&&(n.domElement.releasePointerCapture(O.pointerId),n.domElement.removeEventListener("pointermove",P),n.domElement.removeEventListener("pointerup",w)))}function d(O){me(O)}function _(O){let ye;switch(O.button){case 0:ye=n.mouseButtons.LEFT;break;case 1:ye=n.mouseButtons.MIDDLE;break;case 2:ye=n.mouseButtons.RIGHT;break;default:ye=-1}switch(ye){case wi.DOLLY:if(n.enableZoom===!1)return;V(O),s=r.DOLLY;break;case wi.ROTATE:if(O.ctrlKey||O.metaKey||O.shiftKey){if(n.enablePan===!1)return;q(O),s=r.PAN}else{if(n.enableRotate===!1)return;K(O),s=r.ROTATE}break;case wi.PAN:if(O.ctrlKey||O.metaKey||O.shiftKey){if(n.enableRotate===!1)return;K(O),s=r.ROTATE}else{if(n.enablePan===!1)return;q(O),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&n.dispatchEvent(Bl)}function B(O){if(n.enabled!==!1)switch(s){case r.ROTATE:if(n.enableRotate===!1)return;xe(O);break;case r.DOLLY:if(n.enableZoom===!1)return;be(O);break;case r.PAN:if(n.enablePan===!1)return;ve(O);break}}function G(O){n.dispatchEvent(Ol),s=r.NONE}function W(O){n.enabled===!1||n.enableZoom===!1||s!==r.NONE||(O.preventDefault(),n.dispatchEvent(Bl),X(O),n.dispatchEvent(Ol))}function Y(O){n.enabled===!1||n.enablePan===!1||C(O)}function he(O){switch(re(O),E.length){case 1:switch(n.touches.ONE){case Si.ROTATE:if(n.enableRotate===!1)return;L(),s=r.TOUCH_ROTATE;break;case Si.PAN:if(n.enablePan===!1)return;k(),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(n.touches.TWO){case Si.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;N(),s=r.TOUCH_DOLLY_PAN;break;case Si.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;ie(),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&n.dispatchEvent(Bl)}function ce(O){switch(re(O),s){case r.TOUCH_ROTATE:if(n.enableRotate===!1)return;ue(O),n.update();break;case r.TOUCH_PAN:if(n.enablePan===!1)return;le(O),n.update();break;case r.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;j(O),n.update();break;case r.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;S(O),n.update();break;default:s=r.NONE}}function pe(O){n.dispatchEvent(Ol),s=r.NONE}function fe(O){n.enabled!==!1&&O.preventDefault()}function H(O){E.push(O)}function me(O){delete I[O.pointerId];for(let ye=0;ye<E.length;ye++)if(E[ye].pointerId==O.pointerId){E.splice(ye,1);return}}function re(O){let ye=I[O.pointerId];ye===void 0&&(ye=new oe,I[O.pointerId]=ye),ye.set(O.pageX,O.pageY)}function _e(O){const ye=O.pointerId===E[0].pointerId?E[1]:E[0];return I[ye.pointerId]}n.domElement.addEventListener("contextmenu",fe),n.domElement.addEventListener("pointerdown",T),n.domElement.addEventListener("pointercancel",d),n.domElement.addEventListener("wheel",W,{passive:!1}),this.update()}}class qf extends yn{constructor(e){super(e);this.defaultDPI=90,this.defaultUnit="px"}load(e,t,n,r){const s=this,o=new Pf(s.manager);o.setPath(s.path),o.setRequestHeader(s.requestHeader),o.setWithCredentials(s.withCredentials),o.load(e,function(a){try{t(s.parse(a))}catch(l){r?r(l):console.error(l),s.manager.itemError(e)}},n,r)}parse(e){const t=this;function n(X,C){if(X.nodeType!==1)return;const L=b(X);let k=!0,U=null;switch(X.nodeName){case"svg":break;case"style":s(X);break;case"g":C=x(X,C);break;case"path":C=x(X,C),X.hasAttribute("d")&&(U=r(X));break;case"rect":C=x(X,C),U=l(X);break;case"polygon":C=x(X,C),U=c(X);break;case"polyline":C=x(X,C),U=u(X);break;case"circle":C=x(X,C),U=h(X);break;case"ellipse":C=x(X,C),U=f(X);break;case"line":C=x(X,C),U=m(X);break;case"defs":k=!1;break;case"use":C=x(X,C);const N=X.href.baseVal.substring(1),ie=X.viewportElement.getElementById(N);ie?n(ie,C):console.warn("SVGLoader: 'use node' references non-existent node id: "+N);break}if(U&&(C.fill!==void 0&&C.fill!=="none"&&U.color.setStyle(C.fill),I(U,xe),Z.push(U),U.userData={node:X,style:C}),k){const N=X.childNodes;for(let ie=0;ie<N.length;ie++)n(N[ie],C)}L&&(ne.pop(),ne.length>0?xe.copy(ne[ne.length-1]):xe.identity())}function r(X){const C=new hi,L=new oe,k=new oe,U=new oe;let N=!0,ie=!1;const le=X.getAttribute("d").match(/[a-df-z][^a-df-z]*/ig);for(let ge=0,j=le.length;ge<j;ge++){const S=le[ge],T=S.charAt(0),P=S.substr(1).trim();N===!0&&(ie=!0,N=!1);let w;switch(T){case"M":w=v(P);for(let d=0,_=w.length;d<_;d+=2)L.x=w[d+0],L.y=w[d+1],k.x=L.x,k.y=L.y,d===0?C.moveTo(L.x,L.y):C.lineTo(L.x,L.y),d===0&&ie===!0&&U.copy(L);break;case"H":w=v(P);for(let d=0,_=w.length;d<_;d++)L.x=w[d],k.x=L.x,k.y=L.y,C.lineTo(L.x,L.y),d===0&&ie===!0&&U.copy(L);break;case"V":w=v(P);for(let d=0,_=w.length;d<_;d++)L.y=w[d],k.x=L.x,k.y=L.y,C.lineTo(L.x,L.y),d===0&&ie===!0&&U.copy(L);break;case"L":w=v(P);for(let d=0,_=w.length;d<_;d+=2)L.x=w[d+0],L.y=w[d+1],k.x=L.x,k.y=L.y,C.lineTo(L.x,L.y),d===0&&ie===!0&&U.copy(L);break;case"C":w=v(P);for(let d=0,_=w.length;d<_;d+=6)C.bezierCurveTo(w[d+0],w[d+1],w[d+2],w[d+3],w[d+4],w[d+5]),k.x=w[d+2],k.y=w[d+3],L.x=w[d+4],L.y=w[d+5],d===0&&ie===!0&&U.copy(L);break;case"S":w=v(P);for(let d=0,_=w.length;d<_;d+=4)C.bezierCurveTo(y(L.x,k.x),y(L.y,k.y),w[d+0],w[d+1],w[d+2],w[d+3]),k.x=w[d+0],k.y=w[d+1],L.x=w[d+2],L.y=w[d+3],d===0&&ie===!0&&U.copy(L);break;case"Q":w=v(P);for(let d=0,_=w.length;d<_;d+=4)C.quadraticCurveTo(w[d+0],w[d+1],w[d+2],w[d+3]),k.x=w[d+0],k.y=w[d+1],L.x=w[d+2],L.y=w[d+3],d===0&&ie===!0&&U.copy(L);break;case"T":w=v(P);for(let d=0,_=w.length;d<_;d+=2){const B=y(L.x,k.x),G=y(L.y,k.y);C.quadraticCurveTo(B,G,w[d+0],w[d+1]),k.x=B,k.y=G,L.x=w[d+0],L.y=w[d+1],d===0&&ie===!0&&U.copy(L)}break;case"A":w=v(P,[3,4],7);for(let d=0,_=w.length;d<_;d+=7){if(w[d+5]==L.x&&w[d+6]==L.y)continue;const B=L.clone();L.x=w[d+5],L.y=w[d+6],k.x=L.x,k.y=L.y,o(C,w[d],w[d+1],w[d+2],w[d+3],w[d+4],B,L),d===0&&ie===!0&&U.copy(L)}break;case"m":w=v(P);for(let d=0,_=w.length;d<_;d+=2)L.x+=w[d+0],L.y+=w[d+1],k.x=L.x,k.y=L.y,d===0?C.moveTo(L.x,L.y):C.lineTo(L.x,L.y),d===0&&ie===!0&&U.copy(L);break;case"h":w=v(P);for(let d=0,_=w.length;d<_;d++)L.x+=w[d],k.x=L.x,k.y=L.y,C.lineTo(L.x,L.y),d===0&&ie===!0&&U.copy(L);break;case"v":w=v(P);for(let d=0,_=w.length;d<_;d++)L.y+=w[d],k.x=L.x,k.y=L.y,C.lineTo(L.x,L.y),d===0&&ie===!0&&U.copy(L);break;case"l":w=v(P);for(let d=0,_=w.length;d<_;d+=2)L.x+=w[d+0],L.y+=w[d+1],k.x=L.x,k.y=L.y,C.lineTo(L.x,L.y),d===0&&ie===!0&&U.copy(L);break;case"c":w=v(P);for(let d=0,_=w.length;d<_;d+=6)C.bezierCurveTo(L.x+w[d+0],L.y+w[d+1],L.x+w[d+2],L.y+w[d+3],L.x+w[d+4],L.y+w[d+5]),k.x=L.x+w[d+2],k.y=L.y+w[d+3],L.x+=w[d+4],L.y+=w[d+5],d===0&&ie===!0&&U.copy(L);break;case"s":w=v(P);for(let d=0,_=w.length;d<_;d+=4)C.bezierCurveTo(y(L.x,k.x),y(L.y,k.y),L.x+w[d+0],L.y+w[d+1],L.x+w[d+2],L.y+w[d+3]),k.x=L.x+w[d+0],k.y=L.y+w[d+1],L.x+=w[d+2],L.y+=w[d+3],d===0&&ie===!0&&U.copy(L);break;case"q":w=v(P);for(let d=0,_=w.length;d<_;d+=4)C.quadraticCurveTo(L.x+w[d+0],L.y+w[d+1],L.x+w[d+2],L.y+w[d+3]),k.x=L.x+w[d+0],k.y=L.y+w[d+1],L.x+=w[d+2],L.y+=w[d+3],d===0&&ie===!0&&U.copy(L);break;case"t":w=v(P);for(let d=0,_=w.length;d<_;d+=2){const B=y(L.x,k.x),G=y(L.y,k.y);C.quadraticCurveTo(B,G,L.x+w[d+0],L.y+w[d+1]),k.x=B,k.y=G,L.x=L.x+w[d+0],L.y=L.y+w[d+1],d===0&&ie===!0&&U.copy(L)}break;case"a":w=v(P,[3,4],7);for(let d=0,_=w.length;d<_;d+=7){if(w[d+5]==0&&w[d+6]==0)continue;const B=L.clone();L.x+=w[d+5],L.y+=w[d+6],k.x=L.x,k.y=L.y,o(C,w[d],w[d+1],w[d+2],w[d+3],w[d+4],B,L),d===0&&ie===!0&&U.copy(L)}break;case"Z":case"z":C.currentPath.autoClose=!0,C.currentPath.curves.length>0&&(L.copy(U),C.currentPath.currentPoint.copy(L),N=!0);break;default:console.warn(S)}ie=!1}return C}function s(X){if(!(!X.sheet||!X.sheet.cssRules||!X.sheet.cssRules.length))for(let C=0;C<X.sheet.cssRules.length;C++){const L=X.sheet.cssRules[C];if(L.type!==1)continue;const k=L.selectorText.split(/,/gm).filter(Boolean).map(U=>U.trim());for(let U=0;U<k.length;U++)F[k[U]]=Object.assign(F[k[U]]||{},L.style)}}function o(X,C,L,k,U,N,ie,ue){if(C==0||L==0){X.lineTo(ue.x,ue.y);return}k=k*Math.PI/180,C=Math.abs(C),L=Math.abs(L);const le=(ie.x-ue.x)/2,ge=(ie.y-ue.y)/2,j=Math.cos(k)*le+Math.sin(k)*ge,S=-Math.sin(k)*le+Math.cos(k)*ge;let T=C*C,P=L*L;const w=j*j,d=S*S,_=w/T+d/P;if(_>1){const me=Math.sqrt(_);C=me*C,L=me*L,T=C*C,P=L*L}const B=T*d+P*w,G=(T*P-B)/B;let W=Math.sqrt(Math.max(0,G));U===N&&(W=-W);const Y=W*C*S/L,he=-W*L*j/C,ce=Math.cos(k)*Y-Math.sin(k)*he+(ie.x+ue.x)/2,pe=Math.sin(k)*Y+Math.cos(k)*he+(ie.y+ue.y)/2,fe=a(1,0,(j-Y)/C,(S-he)/L),H=a((j-Y)/C,(S-he)/L,(-j-Y)/C,(-S-he)/L)%(Math.PI*2);X.currentPath.absellipse(ce,pe,C,L,fe,fe+H,N===0,k)}function a(X,C,L,k){const U=X*L+C*k,N=Math.sqrt(X*X+C*C)*Math.sqrt(L*L+k*k);let ie=Math.acos(Math.max(-1,Math.min(1,U/N)));return X*k-C*L<0&&(ie=-ie),ie}function l(X){const C=A(X.getAttribute("x")||0),L=A(X.getAttribute("y")||0),k=A(X.getAttribute("rx")||X.getAttribute("ry")||0),U=A(X.getAttribute("ry")||X.getAttribute("rx")||0),N=A(X.getAttribute("width")),ie=A(X.getAttribute("height")),ue=1-.551915024494,le=new hi;return le.moveTo(C+k,L),le.lineTo(C+N-k,L),(k!==0||U!==0)&&le.bezierCurveTo(C+N-k*ue,L,C+N,L+U*ue,C+N,L+U),le.lineTo(C+N,L+ie-U),(k!==0||U!==0)&&le.bezierCurveTo(C+N,L+ie-U*ue,C+N-k*ue,L+ie,C+N-k,L+ie),le.lineTo(C+k,L+ie),(k!==0||U!==0)&&le.bezierCurveTo(C+k*ue,L+ie,C,L+ie-U*ue,C,L+ie-U),le.lineTo(C,L+U),(k!==0||U!==0)&&le.bezierCurveTo(C,L+U*ue,C+k*ue,L,C+k,L),le}function c(X){function C(N,ie,ue){const le=A(ie),ge=A(ue);U===0?k.moveTo(le,ge):k.lineTo(le,ge),U++}const L=/(-?[\d\.?]+)[,|\s](-?[\d\.?]+)/g,k=new hi;let U=0;return X.getAttribute("points").replace(L,C),k.currentPath.autoClose=!0,k}function u(X){function C(N,ie,ue){const le=A(ie),ge=A(ue);U===0?k.moveTo(le,ge):k.lineTo(le,ge),U++}const L=/(-?[\d\.?]+)[,|\s](-?[\d\.?]+)/g,k=new hi;let U=0;return X.getAttribute("points").replace(L,C),k.currentPath.autoClose=!1,k}function h(X){const C=A(X.getAttribute("cx")||0),L=A(X.getAttribute("cy")||0),k=A(X.getAttribute("r")||0),U=new ui;U.absarc(C,L,k,0,Math.PI*2);const N=new hi;return N.subPaths.push(U),N}function f(X){const C=A(X.getAttribute("cx")||0),L=A(X.getAttribute("cy")||0),k=A(X.getAttribute("rx")||0),U=A(X.getAttribute("ry")||0),N=new ui;N.absellipse(C,L,k,U,0,Math.PI*2);const ie=new hi;return ie.subPaths.push(N),ie}function m(X){const C=A(X.getAttribute("x1")||0),L=A(X.getAttribute("y1")||0),k=A(X.getAttribute("x2")||0),U=A(X.getAttribute("y2")||0),N=new hi;return N.moveTo(C,L),N.lineTo(k,U),N.currentPath.autoClose=!1,N}function x(X,C){C=Object.assign({},C);let L={};if(X.hasAttribute("class")){const ie=X.getAttribute("class").split(/\s/).filter(Boolean).map(ue=>ue.trim());for(let ue=0;ue<ie.length;ue++)L=Object.assign(L,F["."+ie[ue]])}X.hasAttribute("id")&&(L=Object.assign(L,F["#"+X.getAttribute("id")]));function k(ie,ue,le){le===void 0&&(le=function(j){return j.startsWith("url")&&console.warn("SVGLoader: url access in attributes is not implemented."),j}),X.hasAttribute(ie)&&(C[ue]=le(X.getAttribute(ie))),L[ie]&&(C[ue]=le(L[ie])),X.style&&X.style[ie]!==""&&(C[ue]=le(X.style[ie]))}function U(ie){return Math.max(0,Math.min(1,A(ie)))}function N(ie){return Math.max(0,A(ie))}return k("fill","fill"),k("fill-opacity","fillOpacity",U),k("fill-rule","fillRule"),k("opacity","opacity",U),k("stroke","stroke"),k("stroke-opacity","strokeOpacity",U),k("stroke-width","strokeWidth",N),k("stroke-linejoin","strokeLineJoin"),k("stroke-linecap","strokeLineCap"),k("stroke-miterlimit","strokeMiterLimit",N),k("visibility","visibility"),C}function y(X,C){return X-(C-X)}function v(X,C,L){if(typeof X!="string")throw new TypeError("Invalid input: "+typeof X);const k={SEPARATOR:/[ \t\r\n\,.\-+]/,WHITESPACE:/[ \t\r\n]/,DIGIT:/[\d]/,SIGN:/[-+]/,POINT:/\./,COMMA:/,/,EXP:/e/i,FLAGS:/[01]/},U=0,N=1,ie=2,ue=3;let le=U,ge=!0,j="",S="";const T=[];function P(B,G,W){const Y=new SyntaxError('Unexpected character "'+B+'" at index '+G+".");throw Y.partial=W,Y}function w(){j!==""&&(S===""?T.push(Number(j)):T.push(Number(j)*Math.pow(10,Number(S)))),j="",S=""}let d;const _=X.length;for(let B=0;B<_;B++){if(d=X[B],Array.isArray(C)&&C.includes(T.length%L)&&k.FLAGS.test(d)){le=N,j=d,w();continue}if(le===U){if(k.WHITESPACE.test(d))continue;if(k.DIGIT.test(d)||k.SIGN.test(d)){le=N,j=d;continue}if(k.POINT.test(d)){le=ie,j=d;continue}k.COMMA.test(d)&&(ge&&P(d,B,T),ge=!0)}if(le===N){if(k.DIGIT.test(d)){j+=d;continue}if(k.POINT.test(d)){j+=d,le=ie;continue}if(k.EXP.test(d)){le=ue;continue}k.SIGN.test(d)&&j.length===1&&k.SIGN.test(j[0])&&P(d,B,T)}if(le===ie){if(k.DIGIT.test(d)){j+=d;continue}if(k.EXP.test(d)){le=ue;continue}k.POINT.test(d)&&j[j.length-1]==="."&&P(d,B,T)}if(le===ue){if(k.DIGIT.test(d)){S+=d;continue}if(k.SIGN.test(d)){if(S===""){S+=d;continue}S.length===1&&k.SIGN.test(S)&&P(d,B,T)}}k.WHITESPACE.test(d)?(w(),le=U,ge=!1):k.COMMA.test(d)?(w(),le=U,ge=!0):k.SIGN.test(d)?(w(),le=N,j=d):k.POINT.test(d)?(w(),le=ie,j=d):P(d,B,T)}return w(),T}const p=["mm","cm","in","pt","pc","px"],g={mm:{mm:1,cm:.1,in:1/25.4,pt:72/25.4,pc:6/25.4,px:-1},cm:{mm:10,cm:1,in:1/2.54,pt:72/2.54,pc:6/2.54,px:-1},in:{mm:25.4,cm:2.54,in:1,pt:72,pc:6,px:-1},pt:{mm:25.4/72,cm:2.54/72,in:1/72,pt:1,pc:6/72,px:-1},pc:{mm:25.4/6,cm:2.54/6,in:1/6,pt:72/6,pc:1,px:-1},px:{px:1}};function A(X){let C="px";if(typeof X=="string"||X instanceof String)for(let k=0,U=p.length;k<U;k++){const N=p[k];if(X.endsWith(N)){C=N,X=X.substring(0,X.length-N.length);break}}let L;return C==="px"&&t.defaultUnit!=="px"?L=g.in[t.defaultUnit]/t.defaultDPI:(L=g[C][t.defaultUnit],L<0&&(L=g[C].in*t.defaultDPI)),L*parseFloat(X)}function b(X){if(!(X.hasAttribute("transform")||X.nodeName==="use"&&(X.hasAttribute("x")||X.hasAttribute("y"))))return null;const C=E(X);return ne.length>0&&C.premultiply(ne[ne.length-1]),xe.copy(C),ne.push(C),C}function E(X){const C=new Ke,L=J;if(X.nodeName==="use"&&(X.hasAttribute("x")||X.hasAttribute("y"))){const k=A(X.getAttribute("x")),U=A(X.getAttribute("y"));C.translate(k,U)}if(X.hasAttribute("transform")){const k=X.getAttribute("transform").split(")");for(let U=k.length-1;U>=0;U--){const N=k[U].trim();if(N==="")continue;const ie=N.indexOf("("),ue=N.length;if(ie>0&&ie<ue){const le=N.substr(0,ie),ge=v(N.substr(ie+1,ue-ie-1));switch(L.identity(),le){case"translate":if(ge.length>=1){const j=ge[0];let S=j;ge.length>=2&&(S=ge[1]),L.translate(j,S)}break;case"rotate":if(ge.length>=1){let j=0,S=0,T=0;j=-ge[0]*Math.PI/180,ge.length>=3&&(S=ge[1],T=ge[2]),$.identity().translate(-S,-T),ee.identity().rotate(j),K.multiplyMatrices(ee,$),$.identity().translate(S,T),L.multiplyMatrices($,K)}break;case"scale":if(ge.length>=1){const j=ge[0];let S=j;ge.length>=2&&(S=ge[1]),L.scale(j,S)}break;case"skewX":ge.length===1&&L.set(1,Math.tan(ge[0]*Math.PI/180),0,0,1,0,0,0,1);break;case"skewY":ge.length===1&&L.set(1,0,0,Math.tan(ge[0]*Math.PI/180),1,0,0,0,1);break;case"matrix":ge.length===6&&L.set(ge[0],ge[2],ge[4],ge[1],ge[3],ge[5],0,0,1);break}}C.premultiply(L)}}return C}function I(X,C){function L(N){q.set(N.x,N.y,1).applyMatrix3(C),N.set(q.x,q.y)}const k=M(C),U=X.subPaths;for(let N=0,ie=U.length;N<ie;N++){const le=U[N].curves;for(let ge=0;ge<le.length;ge++){const j=le[ge];j.isLineCurve?(L(j.v1),L(j.v2)):j.isCubicBezierCurve?(L(j.v0),L(j.v1),L(j.v2),L(j.v3)):j.isQuadraticBezierCurve?(L(j.v0),L(j.v1),L(j.v2)):j.isEllipseCurve&&(k&&console.warn("SVGLoader: Elliptic arc or ellipse rotation or skewing is not implemented."),V.set(j.aX,j.aY),L(V),j.aX=V.x,j.aY=V.y,j.xRadius*=z(C),j.yRadius*=Q(C))}}}function M(X){return X.elements[1]!==0||X.elements[3]!==0}function z(X){const C=X.elements;return Math.sqrt(C[0]*C[0]+C[1]*C[1])}function Q(X){const C=X.elements;return Math.sqrt(C[3]*C[3]+C[4]*C[4])}const Z=[],F={},ne=[],J=new Ke,$=new Ke,ee=new Ke,K=new Ke,V=new oe,q=new D,xe=new Ke,be=new DOMParser().parseFromString(e,"image/svg+xml");return n(be.documentElement,{fill:"#000",fillOpacity:1,strokeOpacity:1,strokeWidth:1,strokeLineJoin:"miter",strokeLineCap:"butt",strokeMiterLimit:4}),{paths:Z,xml:be.documentElement}}static createShapes(e){const t=999999999,n={ORIGIN:0,DESTINATION:1,BETWEEN:2,LEFT:3,RIGHT:4,BEHIND:5,BEYOND:6},r={loc:n.ORIGIN,t:0};function s(v,p,g,A){const b=v.x,E=p.x,I=g.x,M=A.x,z=v.y,Q=p.y,Z=g.y,F=A.y,ne=(M-I)*(z-Z)-(F-Z)*(b-I),J=(E-b)*(z-Z)-(Q-z)*(b-I),$=(F-Z)*(E-b)-(M-I)*(Q-z),ee=ne/$,K=J/$;if($===0&&ne!==0||ee<=0||ee>=1||K<0||K>1)return null;if(ne===0&&$===0){for(let V=0;V<2;V++)if(o(V===0?g:A,v,p),r.loc==n.ORIGIN){const q=V===0?g:A;return{x:q.x,y:q.y,t:r.t}}else if(r.loc==n.BETWEEN){const q=+(b+r.t*(E-b)).toPrecision(10),xe=+(z+r.t*(Q-z)).toPrecision(10);return{x:q,y:xe,t:r.t}}return null}else{for(let xe=0;xe<2;xe++)if(o(xe===0?g:A,v,p),r.loc==n.ORIGIN){const be=xe===0?g:A;return{x:be.x,y:be.y,t:r.t}}const V=+(b+ee*(E-b)).toPrecision(10),q=+(z+ee*(Q-z)).toPrecision(10);return{x:V,y:q,t:ee}}}function o(v,p,g){const A=g.x-p.x,b=g.y-p.y,E=v.x-p.x,I=v.y-p.y,M=A*I-E*b;if(v.x===p.x&&v.y===p.y){r.loc=n.ORIGIN,r.t=0;return}if(v.x===g.x&&v.y===g.y){r.loc=n.DESTINATION,r.t=1;return}if(M<-Number.EPSILON){r.loc=n.LEFT;return}if(M>Number.EPSILON){r.loc=n.RIGHT;return}if(A*E<0||b*I<0){r.loc=n.BEHIND;return}if(Math.sqrt(A*A+b*b)<Math.sqrt(E*E+I*I)){r.loc=n.BEYOND;return}let z;A!==0?z=E/A:z=I/b,r.loc=n.BETWEEN,r.t=z}function a(v,p){const g=[],A=[];for(let b=1;b<v.length;b++){const E=v[b-1],I=v[b];for(let M=1;M<p.length;M++){const z=p[M-1],Q=p[M],Z=s(E,I,z,Q);Z!==null&&g.find(F=>F.t<=Z.t+Number.EPSILON&&F.t>=Z.t-Number.EPSILON)===void 0&&(g.push(Z),A.push(new oe(Z.x,Z.y)))}}return A}function l(v,p,g){const A=new oe;p.getCenter(A);const b=[];return g.forEach(E=>{E.boundingBox.containsPoint(A)&&a(v,E.points).forEach(M=>{b.push({identifier:E.identifier,isCW:E.isCW,point:M})})}),b.sort((E,I)=>E.point.x-I.point.x),b}function c(v,p,g,A,b){(b==null||b==="")&&(b="nonzero");const E=new oe;v.boundingBox.getCenter(E);const I=[new oe(g,E.y),new oe(A,E.y)],M=l(I,v.boundingBox,p);M.sort((J,$)=>J.point.x-$.point.x);const z=[],Q=[];M.forEach(J=>{J.identifier===v.identifier?z.push(J):Q.push(J)});const Z=z[0].point.x,F=[];let ne=0;for(;ne<Q.length&&Q[ne].point.x<Z;)F.length>0&&F[F.length-1]===Q[ne].identifier?F.pop():F.push(Q[ne].identifier),ne++;if(F.push(v.identifier),b==="evenodd"){const J=F.length%2==0,$=F[F.length-2];return{identifier:v.identifier,isHole:J,for:$}}else if(b==="nonzero"){let J=!0,$=null,ee=null;for(let K=0;K<F.length;K++){const V=F[K];J?(ee=p[V].isCW,J=!1,$=V):ee!==p[V].isCW&&(ee=p[V].isCW,J=!0)}return{identifier:v.identifier,isHole:J,for:$}}else console.warn('fill-rule: "'+b+'" is currently not implemented.')}let u=0,h=t,f=-t,m=e.subPaths.map(v=>{const p=v.getPoints();let g=-t,A=t,b=-t,E=t;for(let I=0;I<p.length;I++){const M=p[I];M.y>g&&(g=M.y),M.y<A&&(A=M.y),M.x>b&&(b=M.x),M.x<E&&(E=M.x)}return f<=b&&(f=b+1),h>=E&&(h=E-1),{points:p,isCW:rn.isClockWise(p),identifier:u++,boundingBox:new ur(new oe(E,A),new oe(b,g))}});m=m.filter(v=>v.points.length>1);const x=m.map(v=>c(v,m,h,f,e.userData.style.fillRule)),y=[];return m.forEach(v=>{if(!x[v.identifier].isHole){const g=new xn(v.points);x.filter(b=>b.isHole&&b.for===v.identifier).forEach(b=>{const E=m[b.identifier];g.holes.push(new ui(E.points))}),y.push(g)}}),y}static getStrokeStyle(e,t,n,r,s){return e=e!==void 0?e:1,t=t!==void 0?t:"#000",n=n!==void 0?n:"miter",r=r!==void 0?r:"butt",s=s!==void 0?s:4,{strokeColor:t,strokeWidth:e,strokeLineJoin:n,strokeLineCap:r,strokeMiterLimit:s}}static pointsToStroke(e,t,n,r){const s=[],o=[],a=[];if(qf.pointsToStrokeWithBuffers(e,t,n,r,s,o,a)===0)return null;const l=new Xe;return l.setAttribute("position",new nt(s,3)),l.setAttribute("normal",new nt(o,3)),l.setAttribute("uv",new nt(a,2)),l}static pointsToStrokeWithBuffers(e,t,n,r,s,o,a,l){const c=new oe,u=new oe,h=new oe,f=new oe,m=new oe,x=new oe,y=new oe,v=new oe,p=new oe,g=new oe,A=new oe,b=new oe,E=new oe,I=new oe,M=new oe,z=new oe,Q=new oe;n=n!==void 0?n:12,r=r!==void 0?r:.001,l=l!==void 0?l:0,e=S(e);const Z=e.length;if(Z<2)return 0;const F=e[0].equals(e[Z-1]);let ne,J=e[0],$;const ee=t.strokeWidth/2,K=1/(Z-1);let V=0,q,xe,be,ve,X=!1,C=0,L=l*3,k=l*2;U(e[0],e[1],c).multiplyScalar(ee),v.copy(e[0]).sub(c),p.copy(e[0]).add(c),g.copy(v),A.copy(p);for(let T=1;T<Z;T++){ne=e[T],T===Z-1?F?$=e[1]:$=void 0:$=e[T+1];const P=c;if(U(J,ne,P),h.copy(P).multiplyScalar(ee),b.copy(ne).sub(h),E.copy(ne).add(h),q=V+K,xe=!1,$!==void 0){U(ne,$,u),h.copy(u).multiplyScalar(ee),I.copy(ne).sub(h),M.copy(ne).add(h),be=!0,h.subVectors($,J),P.dot(h)<0&&(be=!1),T===1&&(X=be),h.subVectors($,ne),h.normalize();const w=Math.abs(P.dot(h));if(w!==0){const d=ee/w;h.multiplyScalar(-d),f.subVectors(ne,J),m.copy(f).setLength(d).add(h),z.copy(m).negate();const _=m.length(),B=f.length();f.divideScalar(B),x.subVectors($,ne);const G=x.length();switch(x.divideScalar(G),f.dot(z)<B&&x.dot(z)<G&&(xe=!0),Q.copy(m).add(ne),z.add(ne),ve=!1,xe?be?(M.copy(z),E.copy(z)):(I.copy(z),b.copy(z)):ue(),t.strokeLineJoin){case"bevel":le(be,xe,q);break;case"round":ge(be,xe),be?ie(ne,b,I,q,0):ie(ne,M,E,q,1);break;case"miter":case"miter-clip":default:const W=ee*t.strokeMiterLimit/_;if(W<1)if(t.strokeLineJoin!=="miter-clip"){le(be,xe,q);break}else ge(be,xe),be?(x.subVectors(Q,b).multiplyScalar(W).add(b),y.subVectors(Q,I).multiplyScalar(W).add(I),N(b,q,0),N(x,q,0),N(ne,q,.5),N(ne,q,.5),N(x,q,0),N(y,q,0),N(ne,q,.5),N(y,q,0),N(I,q,0)):(x.subVectors(Q,E).multiplyScalar(W).add(E),y.subVectors(Q,M).multiplyScalar(W).add(M),N(E,q,1),N(x,q,1),N(ne,q,.5),N(ne,q,.5),N(x,q,1),N(y,q,1),N(ne,q,.5),N(y,q,1),N(M,q,1));else xe?(be?(N(p,V,1),N(v,V,0),N(Q,q,0),N(p,V,1),N(Q,q,0),N(z,q,1)):(N(p,V,1),N(v,V,0),N(Q,q,1),N(v,V,0),N(z,q,0),N(Q,q,1)),be?I.copy(Q):M.copy(Q)):be?(N(b,q,0),N(Q,q,0),N(ne,q,.5),N(ne,q,.5),N(Q,q,0),N(I,q,0)):(N(E,q,1),N(Q,q,1),N(ne,q,.5),N(ne,q,.5),N(Q,q,1),N(M,q,1)),ve=!0;break}}else ue()}else ue();!F&&T===Z-1&&j(e[0],g,A,be,!0,V),V=q,J=ne,v.copy(I),p.copy(M)}if(!F)j(ne,b,E,be,!1,q);else if(xe&&s){let T=Q,P=z;X!==be&&(T=z,P=Q),be?(ve||X)&&(P.toArray(s,0*3),P.toArray(s,3*3),ve&&T.toArray(s,1*3)):(ve||!X)&&(P.toArray(s,1*3),P.toArray(s,3*3),ve&&T.toArray(s,0*3))}return C;function U(T,P,w){return w.subVectors(P,T),w.set(-w.y,w.x).normalize()}function N(T,P,w){s&&(s[L]=T.x,s[L+1]=T.y,s[L+2]=0,o&&(o[L]=0,o[L+1]=0,o[L+2]=1),L+=3,a&&(a[k]=P,a[k+1]=w,k+=2)),C+=3}function ie(T,P,w,d,_){c.copy(P).sub(T).normalize(),u.copy(w).sub(T).normalize();let B=Math.PI;const G=c.dot(u);Math.abs(G)<1&&(B=Math.abs(Math.acos(G))),B/=n,h.copy(P);for(let W=0,Y=n-1;W<Y;W++)f.copy(h).rotateAround(T,B),N(h,d,_),N(f,d,_),N(T,d,.5),h.copy(f);N(f,d,_),N(w,d,_),N(T,d,.5)}function ue(){N(p,V,1),N(v,V,0),N(b,q,0),N(p,V,1),N(b,q,1),N(E,q,0)}function le(T,P,w){P?T?(N(p,V,1),N(v,V,0),N(b,q,0),N(p,V,1),N(b,q,0),N(z,q,1),N(b,w,0),N(I,w,0),N(z,w,.5)):(N(p,V,1),N(v,V,0),N(E,q,1),N(v,V,0),N(z,q,0),N(E,q,1),N(E,w,1),N(M,w,0),N(z,w,.5)):T?(N(b,w,0),N(I,w,0),N(ne,w,.5)):(N(E,w,1),N(M,w,0),N(ne,w,.5))}function ge(T,P){P&&(T?(N(p,V,1),N(v,V,0),N(b,q,0),N(p,V,1),N(b,q,0),N(z,q,1),N(b,V,0),N(ne,q,.5),N(z,q,1),N(ne,q,.5),N(I,V,0),N(z,q,1)):(N(p,V,1),N(v,V,0),N(E,q,1),N(v,V,0),N(z,q,0),N(E,q,1),N(E,V,1),N(z,q,0),N(ne,q,.5),N(ne,q,.5),N(z,q,0),N(M,V,1)))}function j(T,P,w,d,_,B){switch(t.strokeLineCap){case"round":_?ie(T,w,P,B,.5):ie(T,P,w,B,.5);break;case"square":if(_)c.subVectors(P,T),u.set(c.y,-c.x),h.addVectors(c,u).add(T),f.subVectors(u,c).add(T),d?(h.toArray(s,1*3),f.toArray(s,0*3),f.toArray(s,3*3)):(h.toArray(s,1*3),h.toArray(s,3*3),f.toArray(s,0*3));else{c.subVectors(w,T),u.set(c.y,-c.x),h.addVectors(c,u).add(T),f.subVectors(u,c).add(T);const G=s.length;d?(h.toArray(s,G-1*3),f.toArray(s,G-2*3),f.toArray(s,G-4*3)):(h.toArray(s,G-2*3),f.toArray(s,G-1*3),f.toArray(s,G-4*3))}break}}function S(T){let P=!1;for(let d=1,_=T.length-1;d<_;d++)if(T[d].distanceTo(T[d+1])<r){P=!0;break}if(!P)return T;const w=[];w.push(T[0]);for(let d=1,_=T.length-1;d<_;d++)T[d].distanceTo(T[d+1])>=r&&w.push(T[d]);return w.push(T[T.length-1]),w}}}export{nM as A,Fr as B,we as C,tM as D,or as E,Jt as F,xl as L,Af as M,ke as O,Lt as P,qf as S,Ge as W,RM as a,Yh as b,At as c,OM as d,qr as e,zM as f,Bp as g,IM as h,Zc as i,NM as j,zp as k,PM as l,Gp as m,pa as n,Tc as o,Jd as p,ts as q,Wo as r,cn as s,DM as t,Xd as u,CM as v,FM as w,kp as x,es as y,BM as z};
