!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=184)}([function(t,e,n){"use strict";n(56),n(49),n(95);class r{constructor(t){this.domElement=t,this.addEventListener=this.addEventListener.bind(this)}addEventListener(){this.domElement.addEventListener(...arguments)}}n(32);const o=new Date,i=new Date;i.setDate(i.getDate()-7);const c=o.getFullYear()+"-"+(o.getMonth()+1)+"-"+o.getDate(),u=i.getFullYear()+"-"+(i.getMonth()+1)+"-"+i.getDate();n.d(e,"L",(function(){return s})),n.d(e,"K",(function(){return a})),n.d(e,"A",(function(){return f})),n.d(e,"R",(function(){return d})),n.d(e,"Q",(function(){return p})),n.d(e,"m",(function(){return h})),n.d(e,"n",(function(){return v})),n.d(e,"p",(function(){return y})),n.d(e,"o",(function(){return m})),n.d(e,"l",(function(){return H})),n.d(e,"g",(function(){return V})),n.d(e,"f",(function(){return J})),n.d(e,"a",(function(){return K})),n.d(e,"z",(function(){return g})),n.d(e,"J",(function(){return _})),n.d(e,"I",(function(){return x})),n.d(e,"C",(function(){return b})),n.d(e,"E",(function(){return S})),n.d(e,"d",(function(){return Y})),n.d(e,"e",(function(){return W})),n.d(e,"k",(function(){return $})),n.d(e,"c",(function(){return Q})),n.d(e,"B",(function(){return l})),n.d(e,"D",(function(){return j})),n.d(e,"P",(function(){return w})),n.d(e,"M",(function(){return O})),n.d(e,"N",(function(){return E})),n.d(e,"O",(function(){return B})),n.d(e,"H",(function(){return k})),n.d(e,"F",(function(){return L})),n.d(e,"G",(function(){return C})),n.d(e,"q",(function(){return U})),n.d(e,"r",(function(){return z})),n.d(e,"x",(function(){return P})),n.d(e,"u",(function(){return I})),n.d(e,"t",(function(){return T})),n.d(e,"s",(function(){return q})),n.d(e,"y",(function(){return A})),n.d(e,"v",(function(){return M})),n.d(e,"w",(function(){return R})),n.d(e,"b",(function(){return N})),n.d(e,"h",(function(){return F})),n.d(e,"j",(function(){return D})),n.d(e,"i",(function(){return G}));const s=new r(document.querySelector(".header__menu-mobile")),a=new r(document.querySelector(".header__popup-mobile-close")),f=new r(document.querySelector(".header__auth")),l=new r(document.querySelector(".header__auth-logged-in")),d=new r(document.querySelector(".popup__url-signup")),p=new r(document.querySelector(".popup__url-signin")),h=new r(document.querySelector(".popup__url-signin-success")),v=new r(document.querySelector(".popup__close_signin")),y=new r(document.querySelector(".popup__close_signup")),m=new r(document.querySelector(".popup__close_successful-signup")),g=new class{constructor(t){this.domElement=t,this.render=this.render.bind(this),this.savedMessages=this.domElement.querySelector(".header__saved-articles"),this.logout=this.domElement.querySelector(".header__auth-logged-in"),this.userName=this.domElement.querySelector(".header__auth-name"),this.login=this.domElement.querySelector(".header__auth")}render(t,e){t?(this.savedMessages.classList.add("header__saved-articles_is-opened"),this.logout.classList.add("header__auth-logged-in_is-opened"),this.userName.textContent=e,this.login.classList.remove("header__auth_is-opened")):(this.savedMessages.classList.remove("header__saved-articles_is-opened"),this.logout.classList.remove("header__auth-logged-in_is-opened"),this.userName.textContent="",this.login.classList.add("header__auth_is-opened"))}}(document.querySelector(".header")),_=new r(document.querySelector(".popup__button_signup")),x=new r(document.querySelector(".popup__button_signin")),b=new class{constructor(t){this.baseUrl=t}signup(t,e,n){return fetch("".concat(this.baseUrl,"/signup"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:t,password:e,name:n})}).then(t=>t.ok?t.json():Promise.reject(t.status))}signin(t,e){return fetch("".concat(this.baseUrl,"/signin"),{method:"POST",body:JSON.stringify({email:t,password:e}),headers:{"Content-Type":"application/json"}}).then(t=>t.ok?t.json():Promise.reject(t.status)).then(t=>(localStorage.setItem("token",t.userToken),localStorage.setItem("user",JSON.stringify({email:t.email,name:t.name})),t))}getUserData(){return fetch("".concat(this.baseUrl,"/users/me"),{headers:{authorization:"Bearer ".concat(localStorage.getItem("token"))}}).then(t=>t.ok?t.json():Promise.reject(t.status))}getArticles(){return fetch("".concat(this.baseUrl,"/articles"),{headers:{authorization:"Bearer ".concat(localStorage.getItem("token"))}}).then(t=>t.ok?t.json():Promise.reject(t.status))}createArticle(t,e,n,r,o,i,c){return fetch("".concat(this.baseUrl,"/articles"),{method:"POST",body:JSON.stringify({keyword:t,title:e,text:n,date:r,source:o,link:i,image:c}),headers:{"Content-Type":"application/json",authorization:"Bearer ".concat(localStorage.getItem("token"))}}).then(t=>t.ok?t.json():Promise.reject(t.status))}removeArticle(t){return fetch("".concat(this.baseUrl,"/articles/").concat(t),{method:"DELETE",headers:{authorization:"Bearer ".concat(localStorage.getItem("token"))}}).then(t=>t.ok?t.json():Promise.reject(t.status))}}("http://api.ablehope.ru"),S=new class{constructor(t,e){this.baseUrl=t,this.apikey=e}getNews(t){return fetch("".concat(this.baseUrl,"q=").concat(t,"&from=").concat(c,"&to=").concat(u,"&language=ru&sortBy=popularity&pageSize=100&apiKey=").concat(this.apikey),{headers:{authorization:"Bearer ".concat(this.apikey)}}).then(t=>t.ok?t.json():Promise.reject(t.status))}}("http://newsapi.org/v2/everything?","b9fc7a01880741b29710b92e9f8f91bd"),w=document.querySelector(".results__more-button"),j=3,O=document.querySelector(".results"),E=document.querySelector(".results__list"),L=document.querySelector(".not-found"),C=document.querySelector(".not-found__text"),k=document.querySelector(".not-found__title"),P=document.querySelector(".favorites__user-name"),T=document.querySelector(".favorites__global-count"),q=document.querySelector(".favorites__different"),I=document.querySelector(".favorites__key-words"),A=document.querySelector(".favorites__words"),M=document.querySelector(".favorites__others"),R=document.querySelector(".favorites__others-count"),N="нет",F=" сохраненная статья",D=" сохраненные статьи",G=" сохраненных статей",B=document.forms.search,U="К сожалению по вашему запросу ничего не найдено",z="Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз",H="Неверный формат email",V="Это обязательное поле",J="Длина пароля должна быть не меньше 6 символов",K="Длина имени должна быть от 2 до 30 символов",Y="Такой пользователь уже существует",W="No internet connection",$="Неверный логин или пароль",Q="Пользователь не зарегистрирован"},,function(t,e,n){(function(e){var n="object",r=function(t){return t&&t.Math==Math&&t};t.exports=r(typeof globalThis==n&&globalThis)||r(typeof window==n&&window)||r(typeof self==n&&self)||r(typeof e==n&&e)||Function("return this")()}).call(this,n(62))},function(t,e,n){var r=n(2),o=n(19),i=n(39),c=n(72),u=r.Symbol,s=o("wks");t.exports=function(t){return s[t]||(s[t]=c&&u[t]||(c?u:i)("Symbol."+t))}},function(t,e,n){"use strict";n.d(e,"d",(function(){return o})),n.d(e,"a",(function(){return c})),n.d(e,"f",(function(){return f})),n.d(e,"b",(function(){return s})),n.d(e,"c",(function(){return a})),n.d(e,"e",(function(){return u}));var r=n(0);const o=(i="user",JSON.parse(localStorage.getItem(i)));var i;function c(t){localStorage.removeItem(t)}function u(t){const e=document.querySelector(".preloader");t?e.classList.add("preloader_is-opened"):e.classList.remove("preloader_is-opened")}function s(t){t?(r.H.classList.add("not-found__title_is-opened"),r.F.classList.add("not-found_is-opened"),r.G.textContent="",r.G.textContent=r.q):(r.H.classList.remove("not-found__title_is-opened"),r.F.classList.remove("not-found_is-opened"),r.G.textContent="")}function a(t){t?(r.H.classList.remove("not-found__title_is-opened"),r.F.classList.add("not-found_is-opened"),r.G.textContent="",r.G.textContent=r.r):(r.H.classList.add("not-found__title_is-opened"),r.F.classList.remove("not-found_is-opened"),r.G.textContent="")}function f(t){for(;t.firstChild;)t.removeChild(t.firstChild)}},function(t,e,n){var r=n(9);t.exports=function(t){if(!r(t))throw TypeError(String(t)+" is not an object");return t}},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e,n){var r=n(10),o=n(12),i=n(23);t.exports=r?function(t,e,n){return o.f(t,e,i(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e,n){var r=n(6);t.exports=!r((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e,n){var r=n(10),o=n(37),i=n(5),c=n(36),u=Object.defineProperty;e.f=r?u:function(t,e,n){if(i(t),e=c(e,!0),i(n),o)try{return u(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},function(t,e){t.exports={}},function(t,e,n){var r=n(40),o=n(2),i=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,e){return arguments.length<2?i(r[t])||i(o[t]):r[t]&&r[t][e]||o[t]&&o[t][e]}},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},function(t,e,n){var r=n(64),o=n(17);t.exports=function(t){return r(o(t))}},function(t,e){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},function(t,e,n){var r=n(2),o=n(19),i=n(7),c=n(8),u=n(25),s=n(38),a=n(26),f=a.get,l=a.enforce,d=String(s).split("toString");o("inspectSource",(function(t){return s.call(t)})),(t.exports=function(t,e,n,o){var s=!!o&&!!o.unsafe,a=!!o&&!!o.enumerable,f=!!o&&!!o.noTargetGet;"function"==typeof n&&("string"!=typeof e||c(n,"name")||i(n,"name",e),l(n).source=d.join("string"==typeof e?e:"")),t!==r?(s?!f&&t[e]&&(a=!0):delete t[e],a?t[e]=n:i(t,e,n)):a?t[e]=n:u(e,n)})(Function.prototype,"toString",(function(){return"function"==typeof this&&f(this).source||s.call(this)}))},function(t,e,n){var r=n(2),o=n(25),i=n(20),c=r["__core-js_shared__"]||o("__core-js_shared__",{});(t.exports=function(t,e){return c[t]||(c[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.1.3",mode:i?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},function(t,e){t.exports=!1},function(t,e,n){var r=n(2),o=n(22).f,i=n(7),c=n(18),u=n(25),s=n(54),a=n(42);t.exports=function(t,e){var n,f,l,d,p,h=t.target,v=t.global,y=t.stat;if(n=v?r:y?r[h]||u(h,{}):(r[h]||{}).prototype)for(f in e){if(d=e[f],l=t.noTargetGet?(p=o(n,f))&&p.value:n[f],!a(v?f:h+(y?".":"#")+f,t.forced)&&void 0!==l){if(typeof d==typeof l)continue;s(d,l)}(t.sham||l&&l.sham)&&i(d,"sham",!0),c(n,f,d,t)}}},function(t,e,n){var r=n(10),o=n(63),i=n(23),c=n(16),u=n(36),s=n(8),a=n(37),f=Object.getOwnPropertyDescriptor;e.f=r?f:function(t,e){if(t=c(t),e=u(e,!0),a)try{return f(t,e)}catch(t){}if(s(t,e))return i(!o.f.call(t,e),t[e])}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e,n){var r=n(2),o=n(9),i=r.document,c=o(i)&&o(i.createElement);t.exports=function(t){return c?i.createElement(t):{}}},function(t,e,n){var r=n(2),o=n(7);t.exports=function(t,e){try{o(r,t,e)}catch(n){r[t]=e}return e}},function(t,e,n){var r,o,i,c=n(65),u=n(2),s=n(9),a=n(7),f=n(8),l=n(27),d=n(28),p=u.WeakMap;if(c){var h=new p,v=h.get,y=h.has,m=h.set;r=function(t,e){return m.call(h,t,e),e},o=function(t){return v.call(h,t)||{}},i=function(t){return y.call(h,t)}}else{var g=l("state");d[g]=!0,r=function(t,e){return a(t,g,e),e},o=function(t){return f(t,g)?t[g]:{}},i=function(t){return f(t,g)}}t.exports={set:r,get:o,has:i,enforce:function(t){return i(t)?o(t):r(t,{})},getterFor:function(t){return function(e){var n;if(!s(e)||(n=o(e)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return n}}}},function(t,e,n){var r=n(19),o=n(39),i=r("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},function(t,e){t.exports={}},function(t,e){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},function(t,e,n){var r=n(12).f,o=n(8),i=n(3)("toStringTag");t.exports=function(t,e,n){t&&!o(t=n?t:t.prototype,i)&&r(t,i,{configurable:!0,value:e})}},,function(t,e,n){"use strict";var r,o,i,c=n(21),u=n(20),s=n(2),a=n(40),f=n(71),l=n(30),d=n(73),p=n(9),h=n(15),v=n(74),y=n(11),m=n(75),g=n(80),_=n(44),x=n(45).set,b=n(81),S=n(55),w=n(82),j=n(48),O=n(83),E=n(47),L=n(26),C=n(42),k=n(3)("species"),P="Promise",T=L.get,q=L.set,I=L.getterFor(P),A=s.Promise,M=s.TypeError,R=s.document,N=s.process,F=s.fetch,D=N&&N.versions,G=D&&D.v8||"",B=j.f,U=B,z="process"==y(N),H=!!(R&&R.createEvent&&s.dispatchEvent),V=C(P,(function(){var t=A.resolve(1),e=function(){},n=(t.constructor={})[k]=function(t){t(e,e)};return!((z||"function"==typeof PromiseRejectionEvent)&&(!u||t.finally)&&t.then(e)instanceof n&&0!==G.indexOf("6.6")&&-1===E.indexOf("Chrome/66"))})),J=V||!g((function(t){A.all(t).catch((function(){}))})),K=function(t){var e;return!(!p(t)||"function"!=typeof(e=t.then))&&e},Y=function(t,e,n){if(!e.notified){e.notified=!0;var r=e.reactions;b((function(){for(var o=e.value,i=1==e.state,c=0;r.length>c;){var u,s,a,f=r[c++],l=i?f.ok:f.fail,d=f.resolve,p=f.reject,h=f.domain;try{l?(i||(2===e.rejection&&X(t,e),e.rejection=1),!0===l?u=o:(h&&h.enter(),u=l(o),h&&(h.exit(),a=!0)),u===f.promise?p(M("Promise-chain cycle")):(s=K(u))?s.call(u,d,p):d(u)):p(o)}catch(t){h&&!a&&h.exit(),p(t)}}e.reactions=[],e.notified=!1,n&&!e.rejection&&$(t,e)}))}},W=function(t,e,n){var r,o;H?((r=R.createEvent("Event")).promise=e,r.reason=n,r.initEvent(t,!1,!0),s.dispatchEvent(r)):r={promise:e,reason:n},(o=s["on"+t])?o(r):"unhandledrejection"===t&&w("Unhandled promise rejection",n)},$=function(t,e){x.call(s,(function(){var n,r=e.value;if(Q(e)&&(n=O((function(){z?N.emit("unhandledRejection",r,t):W("unhandledrejection",t,r)})),e.rejection=z||Q(e)?2:1,n.error))throw n.value}))},Q=function(t){return 1!==t.rejection&&!t.parent},X=function(t,e){x.call(s,(function(){z?N.emit("rejectionHandled",t):W("rejectionhandled",t,e.value)}))},Z=function(t,e,n,r){return function(o){t(e,n,o,r)}},tt=function(t,e,n,r){e.done||(e.done=!0,r&&(e=r),e.value=n,e.state=2,Y(t,e,!0))},et=function(t,e,n,r){if(!e.done){e.done=!0,r&&(e=r);try{if(t===n)throw M("Promise can't be resolved itself");var o=K(n);o?b((function(){var r={done:!1};try{o.call(n,Z(et,t,r,e),Z(tt,t,r,e))}catch(n){tt(t,r,n,e)}})):(e.value=n,e.state=1,Y(t,e,!1))}catch(n){tt(t,{done:!1},n,e)}}};V&&(A=function(t){v(this,A,P),h(t),r.call(this);var e=T(this);try{t(Z(et,this,e),Z(tt,this,e))}catch(t){tt(this,e,t)}},(r=function(t){q(this,{type:P,done:!1,notified:!1,parent:!1,reactions:[],rejection:!1,state:0,value:void 0})}).prototype=f(A.prototype,{then:function(t,e){var n=I(this),r=B(_(this,A));return r.ok="function"!=typeof t||t,r.fail="function"==typeof e&&e,r.domain=z?N.domain:void 0,n.parent=!0,n.reactions.push(r),0!=n.state&&Y(this,n,!1),r.promise},catch:function(t){return this.then(void 0,t)}}),o=function(){var t=new r,e=T(t);this.promise=t,this.resolve=Z(et,t,e),this.reject=Z(tt,t,e)},j.f=B=function(t){return t===A||t===i?new o(t):U(t)},u||"function"!=typeof F||c({global:!0,enumerable:!0,forced:!0},{fetch:function(t){return S(A,F.apply(s,arguments))}})),c({global:!0,wrap:!0,forced:V},{Promise:A}),l(A,P,!1,!0),d(P),i=a.Promise,c({target:P,stat:!0,forced:V},{reject:function(t){var e=B(this);return e.reject.call(void 0,t),e.promise}}),c({target:P,stat:!0,forced:u||V},{resolve:function(t){return S(u&&this===i?A:this,t)}}),c({target:P,stat:!0,forced:J},{all:function(t){var e=this,n=B(e),r=n.resolve,o=n.reject,i=O((function(){var n=h(e.resolve),i=[],c=0,u=1;m(t,(function(t){var s=c++,a=!1;i.push(void 0),u++,n.call(e,t).then((function(t){a||(a=!0,i[s]=t,--u||r(i))}),o)})),--u||r(i)}));return i.error&&o(i.value),n.promise},race:function(t){var e=this,n=B(e),r=n.reject,o=O((function(){var o=h(e.resolve);m(t,(function(t){o.call(e,t).then(n.resolve,r)}))}));return o.error&&r(o.value),n.promise}})},function(t,e,n){var r=n(34),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},function(t,e,n){"use strict";var r,o,i=n(84),c=RegExp.prototype.exec,u=String.prototype.replace,s=c,a=(r=/a/,o=/b*/g,c.call(r,"a"),c.call(o,"a"),0!==r.lastIndex||0!==o.lastIndex),f=void 0!==/()??/.exec("")[1];(a||f)&&(s=function(t){var e,n,r,o,s=this;return f&&(n=new RegExp("^"+s.source+"$(?!\\s)",i.call(s))),a&&(e=s.lastIndex),r=c.call(s,t),a&&r&&(s.lastIndex=s.global?r.index+r[0].length:e),f&&r&&r.length>1&&u.call(r[0],n,(function(){for(o=1;o<arguments.length-2;o++)void 0===arguments[o]&&(r[o]=void 0)})),r}),t.exports=s},function(t,e,n){var r=n(9);t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,e,n){var r=n(10),o=n(6),i=n(24);t.exports=!r&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},function(t,e,n){var r=n(19);t.exports=r("native-function-to-string",Function.toString)},function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++n+r).toString(36)}},function(t,e,n){t.exports=n(2)},function(t,e,n){var r=n(8),o=n(16),i=n(68).indexOf,c=n(28);t.exports=function(t,e){var n,u=o(t),s=0,a=[];for(n in u)!r(c,n)&&r(u,n)&&a.push(n);for(;e.length>s;)r(u,n=e[s++])&&(~i(a,n)||a.push(n));return a}},function(t,e,n){var r=n(6),o=/#|\.prototype\./,i=function(t,e){var n=u[c(t)];return n==a||n!=s&&("function"==typeof e?r(e):!!e)},c=i.normalize=function(t){return String(t).replace(o,".").toLowerCase()},u=i.data={},s=i.NATIVE="N",a=i.POLYFILL="P";t.exports=i},function(t,e,n){var r=n(15);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 0:return function(){return t.call(e)};case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}},function(t,e,n){var r=n(5),o=n(15),i=n(3)("species");t.exports=function(t,e){var n,c=r(t).constructor;return void 0===c||null==(n=r(c)[i])?e:o(n)}},function(t,e,n){var r,o,i,c=n(2),u=n(6),s=n(11),a=n(43),f=n(46),l=n(24),d=c.location,p=c.setImmediate,h=c.clearImmediate,v=c.process,y=c.MessageChannel,m=c.Dispatch,g=0,_={},x=function(t){if(_.hasOwnProperty(t)){var e=_[t];delete _[t],e()}},b=function(t){return function(){x(t)}},S=function(t){x(t.data)},w=function(t){c.postMessage(t+"",d.protocol+"//"+d.host)};p&&h||(p=function(t){for(var e=[],n=1;arguments.length>n;)e.push(arguments[n++]);return _[++g]=function(){("function"==typeof t?t:Function(t)).apply(void 0,e)},r(g),g},h=function(t){delete _[t]},"process"==s(v)?r=function(t){v.nextTick(b(t))}:m&&m.now?r=function(t){m.now(b(t))}:y?(i=(o=new y).port2,o.port1.onmessage=S,r=a(i.postMessage,i,1)):!c.addEventListener||"function"!=typeof postMessage||c.importScripts||u(w)?r="onreadystatechange"in l("script")?function(t){f.appendChild(l("script")).onreadystatechange=function(){f.removeChild(this),x(t)}}:function(t){setTimeout(b(t),0)}:(r=w,c.addEventListener("message",S,!1))),t.exports={set:p,clear:h}},function(t,e,n){var r=n(14);t.exports=r("document","documentElement")},function(t,e,n){var r=n(14);t.exports=r("navigator","userAgent")||""},function(t,e,n){"use strict";var r=n(15),o=function(t){var e,n;this.promise=new t((function(t,r){if(void 0!==e||void 0!==n)throw TypeError("Bad Promise constructor");e=t,n=r})),this.resolve=r(e),this.reject=r(n)};t.exports.f=function(t){return new o(t)}},function(t,e,n){"use strict";var r=n(16),o=n(87),i=n(13),c=n(26),u=n(90),s=c.set,a=c.getterFor("Array Iterator");t.exports=u(Array,"Array",(function(t,e){s(this,{type:"Array Iterator",target:r(t),index:0,kind:e})}),(function(){var t=a(this),e=t.target,n=t.kind,r=t.index++;return!e||r>=e.length?(t.target=void 0,{value:void 0,done:!0}):"keys"==n?{value:r,done:!1}:"values"==n?{value:e[r],done:!1}:{value:[r,e[r]],done:!1}}),"values"),i.Arguments=i.Array,o("keys"),o("values"),o("entries")},function(t,e,n){var r=n(5),o=n(88),i=n(29),c=n(28),u=n(46),s=n(24),a=n(27)("IE_PROTO"),f=function(){},l=function(){var t,e=s("iframe"),n=i.length;for(e.style.display="none",u.appendChild(e),e.src=String("javascript:"),(t=e.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),l=t.F;n--;)delete l.prototype[i[n]];return l()};t.exports=Object.create||function(t,e){var n;return null!==t?(f.prototype=r(t),n=new f,f.prototype=null,n[a]=t):n=l(),void 0===e?n:o(n,e)},c[a]=!0},function(t,e,n){"use strict";var r,o,i,c=n(52),u=n(7),s=n(8),a=n(3),f=n(20),l=a("iterator"),d=!1;[].keys&&("next"in(i=[].keys())?(o=c(c(i)))!==Object.prototype&&(r=o):d=!0),null==r&&(r={}),f||s(r,l)||u(r,l,(function(){return this})),t.exports={IteratorPrototype:r,BUGGY_SAFARI_ITERATORS:d}},function(t,e,n){var r=n(8),o=n(59),i=n(27),c=n(92),u=i("IE_PROTO"),s=Object.prototype;t.exports=c?Object.getPrototypeOf:function(t){return t=o(t),r(t,u)?t[u]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?s:null}},function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));class r{constructor(t,e){this.container=t,this.initialCards=e}renderResults(){this.initialCards.forEach(t=>{this.addCard(t)})}addCard(t){this.container.appendChild(t)}}},function(t,e,n){var r=n(8),o=n(66),i=n(22),c=n(12);t.exports=function(t,e){for(var n=o(e),u=c.f,s=i.f,a=0;a<n.length;a++){var f=n[a];r(t,f)||u(t,f,s(e,f))}}},function(t,e,n){var r=n(5),o=n(9),i=n(48);t.exports=function(t,e){if(r(t),o(e)&&e.constructor===t)return e;var n=i.f(t);return(0,n.resolve)(e),n.promise}},function(t,e,n){"use strict";var r=n(57),o=n(5),i=n(17),c=n(85),u=n(58);r("search",1,(function(t,e,n){return[function(e){var n=i(this),r=null==e?void 0:e[t];return void 0!==r?r.call(e,n):new RegExp(e)[t](String(n))},function(t){var r=n(e,t,this);if(r.done)return r.value;var i=o(t),s=String(this),a=i.lastIndex;c(a,0)||(i.lastIndex=0);var f=u(i,s);return c(i.lastIndex,a)||(i.lastIndex=a),null===f?-1:f.index}]}))},function(t,e,n){"use strict";var r=n(7),o=n(18),i=n(6),c=n(3),u=n(35),s=c("species"),a=!i((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),f=!i((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));t.exports=function(t,e,n,l){var d=c(t),p=!i((function(){var e={};return e[d]=function(){return 7},7!=""[t](e)})),h=p&&!i((function(){var e=!1,n=/a/;return n.exec=function(){return e=!0,null},"split"===t&&(n.constructor={},n.constructor[s]=function(){return n}),n[d](""),!e}));if(!p||!h||"replace"===t&&!a||"split"===t&&!f){var v=/./[d],y=n(d,""[t],(function(t,e,n,r,o){return e.exec===u?p&&!o?{done:!0,value:v.call(e,n,r)}:{done:!0,value:t.call(n,e,r)}:{done:!1}})),m=y[0],g=y[1];o(String.prototype,t,m),o(RegExp.prototype,d,2==e?function(t,e){return g.call(t,this,e)}:function(t){return g.call(t,this)}),l&&r(RegExp.prototype[d],"sham",!0)}}},function(t,e,n){var r=n(11),o=n(35);t.exports=function(t,e){var n=t.exec;if("function"==typeof n){var i=n.call(t,e);if("object"!=typeof i)throw TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==r(t))throw TypeError("RegExp#exec called on incompatible receiver");return o.call(t,e)}},function(t,e,n){var r=n(17);t.exports=function(t){return Object(r(t))}},,,function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){"use strict";var r={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,i=o&&!r.call({1:2},1);e.f=i?function(t){var e=o(this,t);return!!e&&e.enumerable}:r},function(t,e,n){var r=n(6),o=n(11),i="".split;t.exports=r((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?i.call(t,""):Object(t)}:Object},function(t,e,n){var r=n(2),o=n(38),i=r.WeakMap;t.exports="function"==typeof i&&/native code/.test(o.call(i))},function(t,e,n){var r=n(14),o=n(67),i=n(70),c=n(5);t.exports=r("Reflect","ownKeys")||function(t){var e=o.f(c(t)),n=i.f;return n?e.concat(n(t)):e}},function(t,e,n){var r=n(41),o=n(29).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},function(t,e,n){var r=n(16),o=n(33),i=n(69),c=function(t){return function(e,n,c){var u,s=r(e),a=o(s.length),f=i(c,a);if(t&&n!=n){for(;a>f;)if((u=s[f++])!=u)return!0}else for(;a>f;f++)if((t||f in s)&&s[f]===n)return t||f||0;return!t&&-1}};t.exports={includes:c(!0),indexOf:c(!1)}},function(t,e,n){var r=n(34),o=Math.max,i=Math.min;t.exports=function(t,e){var n=r(t);return n<0?o(n+e,0):i(n,e)}},function(t,e){e.f=Object.getOwnPropertySymbols},function(t,e,n){var r=n(18);t.exports=function(t,e,n){for(var o in e)r(t,o,e[o],n);return t}},function(t,e,n){var r=n(6);t.exports=!!Object.getOwnPropertySymbols&&!r((function(){return!String(Symbol())}))},function(t,e,n){"use strict";var r=n(14),o=n(12),i=n(3),c=n(10),u=i("species");t.exports=function(t){var e=r(t),n=o.f;c&&e&&!e[u]&&n(e,u,{configurable:!0,get:function(){return this}})}},function(t,e){t.exports=function(t,e,n){if(!(t instanceof e))throw TypeError("Incorrect "+(n?n+" ":"")+"invocation");return t}},function(t,e,n){var r=n(5),o=n(76),i=n(33),c=n(43),u=n(77),s=n(79),a=function(t,e){this.stopped=t,this.result=e};(t.exports=function(t,e,n,f,l){var d,p,h,v,y,m,g=c(e,n,f?2:1);if(l)d=t;else{if("function"!=typeof(p=u(t)))throw TypeError("Target is not iterable");if(o(p)){for(h=0,v=i(t.length);v>h;h++)if((y=f?g(r(m=t[h])[0],m[1]):g(t[h]))&&y instanceof a)return y;return new a(!1)}d=p.call(t)}for(;!(m=d.next()).done;)if((y=s(d,g,m.value,f))&&y instanceof a)return y;return new a(!1)}).stop=function(t){return new a(!0,t)}},function(t,e,n){var r=n(3),o=n(13),i=r("iterator"),c=Array.prototype;t.exports=function(t){return void 0!==t&&(o.Array===t||c[i]===t)}},function(t,e,n){var r=n(78),o=n(13),i=n(3)("iterator");t.exports=function(t){if(null!=t)return t[i]||t["@@iterator"]||o[r(t)]}},function(t,e,n){var r=n(11),o=n(3)("toStringTag"),i="Arguments"==r(function(){return arguments}());t.exports=function(t){var e,n,c;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,e){try{return t[e]}catch(t){}}(e=Object(t),o))?n:i?r(e):"Object"==(c=r(e))&&"function"==typeof e.callee?"Arguments":c}},function(t,e,n){var r=n(5);t.exports=function(t,e,n,o){try{return o?e(r(n)[0],n[1]):e(n)}catch(e){var i=t.return;throw void 0!==i&&r(i.call(t)),e}}},function(t,e,n){var r=n(3)("iterator"),o=!1;try{var i=0,c={next:function(){return{done:!!i++}},return:function(){o=!0}};c[r]=function(){return this},Array.from(c,(function(){throw 2}))}catch(t){}t.exports=function(t,e){if(!e&&!o)return!1;var n=!1;try{var i={};i[r]=function(){return{next:function(){return{done:n=!0}}}},t(i)}catch(t){}return n}},function(t,e,n){var r,o,i,c,u,s,a,f=n(2),l=n(22).f,d=n(11),p=n(45).set,h=n(47),v=f.MutationObserver||f.WebKitMutationObserver,y=f.process,m=f.Promise,g="process"==d(y),_=l(f,"queueMicrotask"),x=_&&_.value;x||(r=function(){var t,e;for(g&&(t=y.domain)&&t.exit();o;){e=o.fn,o=o.next;try{e()}catch(t){throw o?c():i=void 0,t}}i=void 0,t&&t.enter()},g?c=function(){y.nextTick(r)}:v&&!/(iphone|ipod|ipad).*applewebkit/i.test(h)?(u=!0,s=document.createTextNode(""),new v(r).observe(s,{characterData:!0}),c=function(){s.data=u=!u}):m&&m.resolve?(a=m.resolve(void 0),c=function(){a.then(r)}):c=function(){p.call(f,r)}),t.exports=x||function(t){var e={fn:t,next:void 0};i&&(i.next=e),o||(o=e,c()),i=e}},function(t,e,n){var r=n(2);t.exports=function(t,e){var n=r.console;n&&n.error&&(1===arguments.length?n.error(t):n.error(t,e))}},function(t,e){t.exports=function(t){try{return{error:!1,value:t()}}catch(t){return{error:!0,value:t}}}},function(t,e,n){"use strict";var r=n(5);t.exports=function(){var t=r(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},function(t,e){t.exports=Object.is||function(t,e){return t===e?0!==t||1/t==1/e:t!=t&&e!=e}},function(t,e,n){},function(t,e,n){var r=n(3),o=n(50),i=n(7),c=r("unscopables"),u=Array.prototype;null==u[c]&&i(u,c,o(null)),t.exports=function(t){u[c][t]=!0}},function(t,e,n){var r=n(10),o=n(12),i=n(5),c=n(89);t.exports=r?Object.defineProperties:function(t,e){i(t);for(var n,r=c(e),u=r.length,s=0;u>s;)o.f(t,n=r[s++],e[n]);return t}},function(t,e,n){var r=n(41),o=n(29);t.exports=Object.keys||function(t){return r(t,o)}},function(t,e,n){"use strict";var r=n(21),o=n(91),i=n(52),c=n(93),u=n(30),s=n(7),a=n(18),f=n(3),l=n(20),d=n(13),p=n(51),h=p.IteratorPrototype,v=p.BUGGY_SAFARI_ITERATORS,y=f("iterator"),m=function(){return this};t.exports=function(t,e,n,f,p,g,_){o(n,e,f);var x,b,S,w=function(t){if(t===p&&C)return C;if(!v&&t in E)return E[t];switch(t){case"keys":case"values":case"entries":return function(){return new n(this,t)}}return function(){return new n(this)}},j=e+" Iterator",O=!1,E=t.prototype,L=E[y]||E["@@iterator"]||p&&E[p],C=!v&&L||w(p),k="Array"==e&&E.entries||L;if(k&&(x=i(k.call(new t)),h!==Object.prototype&&x.next&&(l||i(x)===h||(c?c(x,h):"function"!=typeof x[y]&&s(x,y,m)),u(x,j,!0,!0),l&&(d[j]=m))),"values"==p&&L&&"values"!==L.name&&(O=!0,C=function(){return L.call(this)}),l&&!_||E[y]===C||s(E,y,C),d[e]=C,p)if(b={values:w("values"),keys:g?C:w("keys"),entries:w("entries")},_)for(S in b)!v&&!O&&S in E||a(E,S,b[S]);else r({target:e,proto:!0,forced:v||O},b);return b}},function(t,e,n){"use strict";var r=n(51).IteratorPrototype,o=n(50),i=n(23),c=n(30),u=n(13),s=function(){return this};t.exports=function(t,e,n){var a=e+" Iterator";return t.prototype=o(r,{next:i(1,n)}),c(t,a,!1,!0),u[a]=s,t}},function(t,e,n){var r=n(6);t.exports=!r((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype}))},function(t,e,n){var r=n(5),o=n(94);t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,n={};try{(t=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set).call(n,[]),e=n instanceof Array}catch(t){}return function(n,i){return r(n),o(i),e?t.call(n,i):n.__proto__=i,n}}():void 0)},function(t,e,n){var r=n(9);t.exports=function(t){if(!r(t)&&null!==t)throw TypeError("Can't set "+String(t)+" as a prototype");return t}},function(t,e,n){var r=n(2),o=n(96),i=n(49),c=n(7),u=n(3),s=u("iterator"),a=u("toStringTag"),f=i.values;for(var l in o){var d=r[l],p=d&&d.prototype;if(p){if(p[s]!==f)try{c(p,s,f)}catch(t){p[s]=f}if(p[a]||c(p,a,l),o[l])for(var h in i)if(p[h]!==i[h])try{c(p,h,i[h])}catch(t){p[h]=i[h]}}}},function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,n){"use strict";var r=n(21),o=n(15),i=n(59),c=n(6),u=n(182),s=[].sort,a=[1,2,3],f=c((function(){a.sort(void 0)})),l=c((function(){a.sort(null)})),d=u("sort");r({target:"Array",proto:!0,forced:f||!l||d},{sort:function(t){return void 0===t?s.call(i(this)):s.call(i(this),o(t))}})},function(t,e,n){"use strict";var r=n(6);t.exports=function(t,e){var n=[][t];return!n||!r((function(){n.call(null,e||function(){throw 1},1)}))}},,function(t,e,n){"use strict";n.r(e);n(181),n(86);var r=n(0);class o{constructor(t){this._delete=this._delete.bind(this),this._hoverOn=this._hoverOn.bind(this),this._hoverOff=this._hoverOff.bind(this),this.keyword=t.keyword,this.title=t.title,this.text=t.text,this.date=t.date,this.source=t.source,this.link=t.link,this.image=t.image,this.id=t._id,this.cardElement=this.createCard(),this.hoverButton=this.cardElement.querySelector(".result-card__button-warning"),this.removeButton=this.cardElement.querySelector(".result-card__button"),this.removeButton.addEventListener("click",this._delete)}createCard(){const t=document.createElement("div"),e=document.createElement("div"),n=document.createElement("div"),r=document.createElement("div"),o=document.createElement("div"),i=document.createElement("button"),c=document.createElement("div"),u=document.createElement("div"),s=document.createElement("p"),a=document.createElement("h3"),f=document.createElement("p"),l=document.createElement("a");return t.classList.add("result-card"),t.setAttribute("id",this.id),e.classList.add("result-card__image"),e.classList.add("result-card__image_favorites"),e.style.backgroundImage="url(".concat(this.image,")"),n.classList.add("result-card__key-word"),n.textContent=this.keyword,r.classList.add("result-card__button-content"),o.classList.add("result-card__button-warning"),i.classList.add("result-card__button"),c.classList.add("result-card__button-icon"),c.classList.add("result-card__button-icon_favorites"),u.classList.add("result-card__description"),s.classList.add("result-card__description-data"),s.textContent=this.date,a.classList.add("result-card__description-title"),a.textContent=this.title,f.classList.add("result-card__description-about"),f.textContent=this.text,l.classList.add("result-card__description-source"),l.textContent=this.source,l.setAttribute("href",this.link),l.setAttribute("target","_blank"),t.appendChild(e),t.appendChild(u),e.appendChild(n),e.appendChild(r),r.appendChild(o),r.appendChild(i),i.appendChild(c),u.appendChild(s),u.appendChild(a),u.appendChild(f),u.appendChild(l),r.addEventListener("mouseover",this._hoverOn),r.addEventListener("mouseout",this._hoverOff),t}_delete(t){r.C.removeArticle(this.cardElement.getAttribute("id")).then(()=>{t.target.closest(".result-card").remove()}).catch(t=>{alert(t)})}_hoverOn(){this.hoverButton.classList.add("result-card__button-warning_is-opened"),this.hoverButton.textContent="Убрать из сохраненных"}_hoverOff(){this.hoverButton.classList.remove("result-card__button-warning_is-opened")}}var i=n(53),c=n(4);c.d?function(){function t(){let t="";return c.d&&(t=c.d.name),t}r.z.render(c.d,t());const e={},n={};r.C.getArticles().then(c=>{const u=c.articles;!function(t){const e=document.querySelector(".results");if(0===t.length)e.classList.remove("results_is-opened");else{e.classList.add("results_is-opened");const n=[];t.forEach(t=>{const{cardElement:e}=new o(t);n.push(e)}),new i.a(r.N,n).renderResults()}}(u),function(t){t.forEach(t=>(e.hasOwnProperty(t.keyword)?e[t.keyword]+=1:e[t.keyword]=1,e))}(u),function(t){Object.keys(t).sort((e,n)=>t[n]-t[e]).forEach(e=>{n[e]=t[e]})}(e),function(t){1===t.length?r.s.textContent=r.h:2===t.length||3===t.length||4===t.length?r.s.textContent=r.j:(t.length>5||0===t.length)&&(r.s.textContent=r.i)}(u),function(e,n){r.x.textContent=t(),0===Object.keys(n).length?(r.t.textContent=r.b,r.u.textContent=""):1===Object.keys(n).length?(r.t.textContent=e.length,r.y.textContent=Object.keys(n),r.v.textContent="",r.w.textContent=""):2===Object.keys(n).length?(r.t.textContent=e.length,r.y.textContent="".concat(Object.keys(n)[0],", ").concat(Object.keys(n)[1]),r.v.textContent="",r.w.textContent=""):3===Object.keys(n).length?(r.t.textContent=e.length,r.y.textContent="".concat(Object.keys(n)[0],", ").concat(Object.keys(n)[1],", ").concat(Object.keys(n)[2]),r.v.textContent="",r.w.textContent=""):Object.keys(n).length>=4&&(r.t.textContent=e.length,r.y.textContent="".concat(Object.keys(n)[0],", ").concat(Object.keys(n)[1]),r.w.textContent=" и ".concat(Object.keys(n).length-2," другим"))}(u,n)}).catch(t=>{console.log(t)}),r.L.addEventListener("click",(function(){document.querySelector(".header__popup-mobile").classList.add("header_is-opened")})),r.K.addEventListener("click",(function(){document.querySelector(".header__popup-mobile").classList.remove("header_is-opened")})),r.B.addEventListener("click",(function(){Object(c.a)("user"),window.location.href="index.html"}))}():window.location.href="index.html"}]);