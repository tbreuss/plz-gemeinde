!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=5)}([function(e,t,n){(function(t,n){!function(){"use strict";function r(e,t,n,r,o,i){return{tag:e,key:t,attrs:n,children:r,text:o,dom:i,domSize:void 0,state:void 0,_state:void 0,events:void 0,instance:void 0,skip:!1}}r.normalize=function(e){return Array.isArray(e)?r("[",void 0,void 0,r.normalizeChildren(e),void 0,void 0):null!=e&&"object"!=typeof e?r("#",void 0,void 0,!1===e?"":e,void 0,void 0):e},r.normalizeChildren=function(e){for(var t=0;t<e.length;t++)e[t]=r.normalize(e[t]);return e};var o=/(?:(^|#|\.)([^#\.\[\]]+))|(\[(.+?)(?:\s*=\s*("|'|)((?:\\["'\]]|.)*?)\5)?\])/g,i={},a={}.hasOwnProperty;function l(e){for(var t in e)if(a.call(e,t))return!1;return!0}function u(e){var t,n=arguments[1],u=2;if(null==e||"string"!=typeof e&&"function"!=typeof e&&"function"!=typeof e.view)throw Error("The selector must be either a string or a component.");if("string"==typeof e)var c=i[e]||function(e){for(var t,n="div",r=[],a={};t=o.exec(e);){var l=t[1],u=t[2];if(""===l&&""!==u)n=u;else if("#"===l)a.id=u;else if("."===l)r.push(u);else if("["===t[3][0]){var c=t[6];c&&(c=c.replace(/\\(["'])/g,"$1").replace(/\\\\/g,"\\")),"class"===t[4]?r.push(c):a[t[4]]=""===c?c:c||!0}}return r.length>0&&(a.className=r.join(" ")),i[e]={tag:n,attrs:a}}(e);if(null==n?n={}:("object"!=typeof n||null!=n.tag||Array.isArray(n))&&(n={},u=1),arguments.length===u+1)t=arguments[u],Array.isArray(t)||(t=[t]);else for(t=[];u<arguments.length;)t.push(arguments[u++]);var s=r.normalizeChildren(t);return"string"==typeof e?function(e,t,n){var o,i,u=!1,c=t.className||t.class;if(!l(e.attrs)&&!l(t)){var s={};for(var f in t)a.call(t,f)&&(s[f]=t[f]);t=s}for(var f in e.attrs)a.call(e.attrs,f)&&(t[f]=e.attrs[f]);for(var f in void 0!==c&&(void 0!==t.class&&(t.class=void 0,t.className=c),null!=e.attrs.className&&(t.className=e.attrs.className+" "+c)),t)if(a.call(t,f)&&"key"!==f){u=!0;break}return Array.isArray(n)&&1===n.length&&null!=n[0]&&"#"===n[0].tag?i=n[0].children:o=n,r(e.tag,t.key,u?t:void 0,o,i)}(c,n,s):r(e,n.key,n,s)}u.trust=function(e){return null==e&&(e=""),r("<",void 0,void 0,e,void 0,void 0)},u.fragment=function(e,t){return r("[",e.key,e,r.normalizeChildren(t),void 0,void 0)};var c=u;if((s=function(e){if(!(this instanceof s))throw new Error("Promise must be called with `new`");if("function"!=typeof e)throw new TypeError("executor must be a function");var n=this,r=[],o=[],i=c(r,!0),a=c(o,!1),l=n._instance={resolvers:r,rejectors:o},u="function"==typeof t?t:setTimeout;function c(e,t){return function i(c){var s;try{if(!t||null==c||"object"!=typeof c&&"function"!=typeof c||"function"!=typeof(s=c.then))u(function(){t||0!==e.length||console.error("Possible unhandled promise rejection:",c);for(var n=0;n<e.length;n++)e[n](c);r.length=0,o.length=0,l.state=t,l.retry=function(){i(c)}});else{if(c===n)throw new TypeError("Promise can't be resolved w/ itself");f(s.bind(c))}}catch(e){a(e)}}}function f(e){var t=0;function n(e){return function(n){t++>0||e(n)}}var r=n(a);try{e(n(i),r)}catch(e){r(e)}}f(e)}).prototype.then=function(e,t){var n,r,o=this._instance;function i(e,t,i,a){t.push(function(t){if("function"!=typeof e)i(t);else try{n(e(t))}catch(e){r&&r(e)}}),"function"==typeof o.retry&&a===o.state&&o.retry()}var a=new s(function(e,t){n=e,r=t});return i(e,o.resolvers,n,!0),i(t,o.rejectors,r,!1),a},s.prototype.catch=function(e){return this.then(null,e)},s.resolve=function(e){return e instanceof s?e:new s(function(t){t(e)})},s.reject=function(e){return new s(function(t,n){n(e)})},s.all=function(e){return new s(function(t,n){var r=e.length,o=0,i=[];if(0===e.length)t([]);else for(var a=0;a<e.length;a++)!function(a){function l(e){o++,i[a]=e,o===r&&t(i)}null==e[a]||"object"!=typeof e[a]&&"function"!=typeof e[a]||"function"!=typeof e[a].then?l(e[a]):e[a].then(l,n)}(a)})},s.race=function(e){return new s(function(t,n){for(var r=0;r<e.length;r++)e[r].then(t,n)})},"undefined"!=typeof window){void 0===window.Promise&&(window.Promise=s);var s=window.Promise}else if(void 0!==n){void 0===n.Promise&&(n.Promise=s);s=n.Promise}var f=function(e){if("[object Object]"!==Object.prototype.toString.call(e))return"";var t=[];for(var n in e)r(n,e[n]);return t.join("&");function r(e,n){if(Array.isArray(n))for(var o=0;o<n.length;o++)r(e+"["+o+"]",n[o]);else if("[object Object]"===Object.prototype.toString.call(n))for(var o in n)r(e+"["+o+"]",n[o]);else t.push(encodeURIComponent(e)+(null!=n&&""!==n?"="+encodeURIComponent(n):""))}},d=new RegExp("^file://","i"),v=function(e,t){var n,r=0;function o(){var e=0;function t(){0==--e&&"function"==typeof n&&n()}return function n(r){var o=r.then;return r.then=function(){e++;var i=o.apply(r,arguments);return i.then(t,function(n){if(t(),0===e)throw n}),n(i)},r}}function i(e,t){if("string"==typeof e){var n=e;null==(e=t||{}).url&&(e.url=n)}return e}function a(e,t){if(null==t)return e;for(var n=e.match(/:[^\/]+/gi)||[],r=0;r<n.length;r++){var o=n[r].slice(1);null!=t[o]&&(e=e.replace(n[r],t[o]))}return e}function l(e,t){var n=f(t);if(""!==n){var r=e.indexOf("?")<0?"?":"&";e+=r+n}return e}function u(e){try{return""!==e?JSON.parse(e):null}catch(t){throw new Error(e)}}function c(e){return e.responseText}function s(e,t){if("function"==typeof e){if(!Array.isArray(t))return new e(t);for(var n=0;n<t.length;n++)t[n]=new e(t[n])}return t}return{request:function(n,r){var f=o();n=i(n,r);var v=new t(function(t,r){null==n.method&&(n.method="GET"),n.method=n.method.toUpperCase();var o="GET"!==n.method&&"TRACE"!==n.method&&("boolean"!=typeof n.useBody||n.useBody);"function"!=typeof n.serialize&&(n.serialize="undefined"!=typeof FormData&&n.data instanceof FormData?function(e){return e}:JSON.stringify),"function"!=typeof n.deserialize&&(n.deserialize=u),"function"!=typeof n.extract&&(n.extract=c),n.url=a(n.url,n.data),o?n.data=n.serialize(n.data):n.url=l(n.url,n.data);var i=new e.XMLHttpRequest,f=!1,v=i.abort;for(var h in i.abort=function(){f=!0,v.call(i)},i.open(n.method,n.url,"boolean"!=typeof n.async||n.async,"string"==typeof n.user?n.user:void 0,"string"==typeof n.password?n.password:void 0),n.serialize!==JSON.stringify||!o||n.headers&&n.headers.hasOwnProperty("Content-Type")||i.setRequestHeader("Content-Type","application/json; charset=utf-8"),n.deserialize!==u||n.headers&&n.headers.hasOwnProperty("Accept")||i.setRequestHeader("Accept","application/json, text/*"),n.withCredentials&&(i.withCredentials=n.withCredentials),n.headers)({}).hasOwnProperty.call(n.headers,h)&&i.setRequestHeader(h,n.headers[h]);"function"==typeof n.config&&(i=n.config(i,n)||i),i.onreadystatechange=function(){if(!f&&4===i.readyState)try{var e=n.extract!==c?n.extract(i,n):n.deserialize(n.extract(i,n));if(i.status>=200&&i.status<300||304===i.status||d.test(n.url))t(s(n.type,e));else{var o=new Error(i.responseText);for(var a in e)o[a]=e[a];r(o)}}catch(e){r(e)}},o&&null!=n.data?i.send(n.data):i.send()});return!0===n.background?v:f(v)},jsonp:function(n,u){var c=o();n=i(n,u);var f=new t(function(t,o){var i=n.callbackName||"_mithril_"+Math.round(1e16*Math.random())+"_"+r++,u=e.document.createElement("script");e[i]=function(r){u.parentNode.removeChild(u),t(s(n.type,r)),delete e[i]},u.onerror=function(){u.parentNode.removeChild(u),o(new Error("JSONP request failed")),delete e[i]},null==n.data&&(n.data={}),n.url=a(n.url,n.data),n.data[n.callbackKey||"callback"]=i,u.src=l(n.url,n.data),e.document.documentElement.appendChild(u)});return!0===n.background?f:c(f)},setCompletionCallback:function(e){n=e}}}(window,s),h=function(e){var t,n=e.document,o=n.createDocumentFragment(),i={svg:"http://www.w3.org/2000/svg",math:"http://www.w3.org/1998/Math/MathML"};function a(e){return e.attrs&&e.attrs.xmlns||i[e.tag]}function l(e,t,n,r,o,i,a){for(var l=n;l<r;l++){var c=t[l];null!=c&&u(e,c,o,a,i)}}function u(e,t,i,f,d){var v=t.tag;if("string"!=typeof v)return function(e,t,n,r,i){if(s(t,n),null!=t.instance){var a=u(e,t.instance,n,r,i);return t.dom=t.instance.dom,t.domSize=null!=t.dom?t.instance.domSize:0,m(e,a,i),a}return t.domSize=0,o}(e,t,i,f,d);switch(t.state={},null!=t.attrs&&S(t.attrs,t,i),v){case"#":return function(e,t,r){return t.dom=n.createTextNode(t.children),m(e,t.dom,r),t.dom}(e,t,d);case"<":return c(e,t,d);case"[":return function(e,t,r,o,i){var a=n.createDocumentFragment();if(null!=t.children){var u=t.children;l(a,u,0,u.length,r,null,o)}return t.dom=a.firstChild,t.domSize=a.childNodes.length,m(e,a,i),a}(e,t,i,f,d);default:return function(e,t,o,i,u){var c=t.tag,s=t.attrs,f=s&&s.is,d=(i=a(t)||i)?f?n.createElementNS(i,c,{is:f}):n.createElementNS(i,c):f?n.createElement(c,{is:f}):n.createElement(c);t.dom=d,null!=s&&function(e,t,n){for(var r in t)k(e,r,null,t[r],n)}(t,s,i);if(m(e,d,u),null!=t.attrs&&null!=t.attrs.contenteditable)g(t);else if(null!=t.text&&(""!==t.text?d.textContent=t.text:t.children=[r("#",void 0,void 0,t.text,void 0,void 0)]),null!=t.children){var v=t.children;l(d,v,0,v.length,o,null,i),function(e){var t=e.attrs;"select"===e.tag&&null!=t&&("value"in t&&k(e,"value",null,t.value,void 0),"selectedIndex"in t&&k(e,"selectedIndex",null,t.selectedIndex,void 0))}(t)}return d}(e,t,i,f,d)}}function c(e,t,r){var o={caption:"table",thead:"table",tbody:"table",tfoot:"table",tr:"tbody",th:"tr",td:"tr",colgroup:"table",col:"colgroup"}[(t.children.match(/^\s*?<(\w+)/im)||[])[1]]||"div",i=n.createElement(o);i.innerHTML=t.children,t.dom=i.firstChild,t.domSize=i.childNodes.length;for(var a,l=n.createDocumentFragment();a=i.firstChild;)l.appendChild(a);return m(e,l,r),l}function s(e,t){var n;if("function"==typeof e.tag.view){if(e.state=Object.create(e.tag),null!=(n=e.state.view).$$reentrantLock$$)return o;n.$$reentrantLock$$=!0}else{if(e.state=void 0,null!=(n=e.tag).$$reentrantLock$$)return o;n.$$reentrantLock$$=!0,e.state=null!=e.tag.prototype&&"function"==typeof e.tag.prototype.view?new e.tag(e):e.tag(e)}if(e._state=e.state,null!=e.attrs&&S(e.attrs,e,t),S(e._state,e,t),e.instance=r.normalize(e._state.view.call(e.state,e)),e.instance===e)throw Error("A view cannot return the vnode it received as argument");n.$$reentrantLock$$=null}function f(e,t,n,r,o,i,a){if(t!==n&&(null!=t||null!=n))if(null==t)l(e,n,0,n.length,o,i,a);else if(null==n)y(t,0,t.length,n);else{if(t.length===n.length){for(var c=!1,s=0;s<n.length;s++)if(null!=n[s]&&null!=t[s]){c=null==n[s].key&&null==t[s].key;break}if(c){for(s=0;s<t.length;s++)t[s]!==n[s]&&(null==t[s]&&null!=n[s]?u(e,n[s],o,a,p(t,s+1,i)):null==n[s]?y(t,s,s+1,n):d(e,t[s],n[s],o,p(t,s+1,i),r,a));return}}if(r=r||function(e,t){if(null!=e.pool&&Math.abs(e.pool.length-t.length)<=Math.abs(e.length-t.length)){var n=e[0]&&e[0].children&&e[0].children.length||0,r=e.pool[0]&&e.pool[0].children&&e.pool[0].children.length||0,o=t[0]&&t[0].children&&t[0].children.length||0;if(Math.abs(r-o)<=Math.abs(n-o))return!0}return!1}(t,n)){var f=t.pool;t=t.concat(t.pool)}for(var g,w=0,b=0,k=t.length-1,x=n.length-1;k>=w&&x>=b;){if((S=t[w])!==(z=n[b])||r)if(null==S)w++;else if(null==z)b++;else if(S.key===z.key){var T=null!=f&&w>=t.length-f.length||null==f&&r;b++,d(e,S,z,o,p(t,++w,i),T,a),r&&S.tag===z.tag&&m(e,h(S),i)}else{if((S=t[k])!==z||r)if(null==S)k--;else if(null==z)b++;else{if(S.key!==z.key)break;T=null!=f&&k>=t.length-f.length||null==f&&r;d(e,S,z,o,p(t,k+1,i),T,a),(r||b<x)&&m(e,h(S),p(t,w,i)),k--,b++}else k--,b++}else w++,b++}for(;k>=w&&x>=b;){var S,z;if((S=t[k])!==(z=n[x])||r)if(null==S)k--;else if(null==z)x--;else if(S.key===z.key){T=null!=f&&k>=t.length-f.length||null==f&&r;d(e,S,z,o,p(t,k+1,i),T,a),r&&S.tag===z.tag&&m(e,h(S),i),null!=S.dom&&(i=S.dom),k--,x--}else{if(g||(g=v(t,k)),null!=z){var E=g[z.key];if(null!=E){var C=t[E];T=null!=f&&E>=t.length-f.length||null==f&&r;d(e,C,z,o,p(t,k+1,i),r,a),m(e,h(C),i),t[E].skip=!0,null!=C.dom&&(i=C.dom)}else{i=u(e,z,o,a,i)}}x--}else k--,x--;if(x<b)break}l(e,n,b,x+1,o,i,a),y(t,w,k+1,n)}}function d(e,t,n,o,i,l,v){var p=t.tag;if(p===n.tag){if(n.state=t.state,n._state=t._state,n.events=t.events,!l&&function(e,t){var n,r;null!=e.attrs&&"function"==typeof e.attrs.onbeforeupdate&&(n=e.attrs.onbeforeupdate.call(e.state,e,t));"string"!=typeof e.tag&&"function"==typeof e._state.onbeforeupdate&&(r=e._state.onbeforeupdate.call(e.state,e,t));if(!(void 0===n&&void 0===r||n||r))return e.dom=t.dom,e.domSize=t.domSize,e.instance=t.instance,!0;return!1}(n,t))return;if("string"==typeof p)switch(null!=n.attrs&&(l?(n.state={},S(n.attrs,n,o)):z(n.attrs,n,o)),p){case"#":!function(e,t){e.children.toString()!==t.children.toString()&&(e.dom.nodeValue=t.children);t.dom=e.dom}(t,n);break;case"<":!function(e,t,n,r){t.children!==n.children?(h(t),c(e,n,r)):(n.dom=t.dom,n.domSize=t.domSize)}(e,t,n,i);break;case"[":!function(e,t,n,r,o,i,a){f(e,t.children,n.children,r,o,i,a);var l=0,u=n.children;if(n.dom=null,null!=u){for(var c=0;c<u.length;c++){var s=u[c];null!=s&&null!=s.dom&&(null==n.dom&&(n.dom=s.dom),l+=s.domSize||1)}1!==l&&(n.domSize=l)}}(e,t,n,l,o,i,v);break;default:!function(e,t,n,o,i){var l=t.dom=e.dom;i=a(t)||i,"textarea"===t.tag&&(null==t.attrs&&(t.attrs={}),null!=t.text&&(t.attrs.value=t.text,t.text=void 0));(function(e,t,n,r){if(null!=n)for(var o in n)k(e,o,t&&t[o],n[o],r);if(null!=t)for(var o in t)null!=n&&o in n||("className"===o&&(o="class"),"o"!==o[0]||"n"!==o[1]||x(o)?"key"!==o&&e.dom.removeAttribute(o):T(e,o,void 0))})(t,e.attrs,t.attrs,i),null!=t.attrs&&null!=t.attrs.contenteditable?g(t):null!=e.text&&null!=t.text&&""!==t.text?e.text.toString()!==t.text.toString()&&(e.dom.firstChild.nodeValue=t.text):(null!=e.text&&(e.children=[r("#",void 0,void 0,e.text,void 0,e.dom.firstChild)]),null!=t.text&&(t.children=[r("#",void 0,void 0,t.text,void 0,void 0)]),f(l,e.children,t.children,n,o,null,i))}(t,n,l,o,v)}else!function(e,t,n,o,i,a,l){if(a)s(n,o);else{if(n.instance=r.normalize(n._state.view.call(n.state,n)),n.instance===n)throw Error("A view cannot return the vnode it received as argument");null!=n.attrs&&z(n.attrs,n,o),z(n._state,n,o)}null!=n.instance?(null==t.instance?u(e,n.instance,o,l,i):d(e,t.instance,n.instance,o,i,a,l),n.dom=n.instance.dom,n.domSize=n.instance.domSize):null!=t.instance?(w(t.instance,null),n.dom=void 0,n.domSize=0):(n.dom=t.dom,n.domSize=t.domSize)}(e,t,n,o,i,l,v)}else w(t,null),u(e,n,o,v,i)}function v(e,t){var n={},r=0;for(r=0;r<t;r++){var o=e[r];if(null!=o){var i=o.key;null!=i&&(n[i]=r)}}return n}function h(e){var t=e.domSize;if(null!=t||null==e.dom){var r=n.createDocumentFragment();if(t>0){for(var o=e.dom;--t;)r.appendChild(o.nextSibling);r.insertBefore(o,r.firstChild)}return r}return e.dom}function p(e,t,n){for(;t<e.length;t++)if(null!=e[t]&&null!=e[t].dom)return e[t].dom;return n}function m(e,t,n){n&&n.parentNode?e.insertBefore(t,n):e.appendChild(t)}function g(e){var t=e.children;if(null!=t&&1===t.length&&"<"===t[0].tag){var n=t[0].children;e.dom.innerHTML!==n&&(e.dom.innerHTML=n)}else if(null!=e.text||null!=t&&0!==t.length)throw new Error("Child node of a contenteditable must be trusted")}function y(e,t,n,r){for(var o=t;o<n;o++){var i=e[o];null!=i&&(i.skip?i.skip=!1:w(i,r))}}function w(e,t){var n,r=1,o=0;e.attrs&&"function"==typeof e.attrs.onbeforeremove&&(null!=(n=e.attrs.onbeforeremove.call(e.state,e))&&"function"==typeof n.then&&(r++,n.then(i,i)));"string"!=typeof e.tag&&"function"==typeof e._state.onbeforeremove&&(null!=(n=e._state.onbeforeremove.call(e.state,e))&&"function"==typeof n.then&&(r++,n.then(i,i)));function i(){if(++o===r&&(function e(t){t.attrs&&"function"==typeof t.attrs.onremove&&t.attrs.onremove.call(t.state,t);if("string"!=typeof t.tag)"function"==typeof t._state.onremove&&t._state.onremove.call(t.state,t),null!=t.instance&&e(t.instance);else{var n=t.children;if(Array.isArray(n))for(var r=0;r<n.length;r++){var o=n[r];null!=o&&e(o)}}}(e),e.dom)){var n=e.domSize||1;if(n>1)for(var i=e.dom;--n;)b(i.nextSibling);b(e.dom),null==t||null!=e.domSize||null!=(a=e.attrs)&&(a.oncreate||a.onupdate||a.onbeforeremove||a.onremove)||"string"!=typeof e.tag||(t.pool?t.pool.push(e):t.pool=[e])}var a}i()}function b(e){var t=e.parentNode;null!=t&&t.removeChild(e)}function k(e,t,r,o,i){var a=e.dom;if("key"!==t&&"is"!==t&&(r!==o||function(e,t){return"value"===t||"checked"===t||"selectedIndex"===t||"selected"===t&&e.dom===n.activeElement}(e,t)||"object"==typeof o)&&void 0!==o&&!x(t)){var l,u=t.indexOf(":");if(u>-1&&"xlink"===t.substr(0,u))a.setAttributeNS("http://www.w3.org/1999/xlink",t.slice(u+1),o);else if("o"===t[0]&&"n"===t[1]&&"function"==typeof o)T(e,t,o);else if("style"===t)!function(e,t,n){t===n&&(e.style.cssText="",t=null);if(null==n)e.style.cssText="";else if("string"==typeof n)e.style.cssText=n;else{for(var r in"string"==typeof t&&(e.style.cssText=""),n)e.style[r]=n[r];if(null!=t&&"string"!=typeof t)for(var r in t)r in n||(e.style[r]="")}}(a,r,o);else if(t in a&&("href"!==(l=t)&&"list"!==l&&"form"!==l&&"width"!==l&&"height"!==l)&&void 0===i&&!function(e){return e.attrs.is||e.tag.indexOf("-")>-1}(e)){if("value"===t){var c=""+o;if(("input"===e.tag||"textarea"===e.tag)&&e.dom.value===c&&e.dom===n.activeElement)return;if("select"===e.tag)if(null===o){if(-1===e.dom.selectedIndex&&e.dom===n.activeElement)return}else if(null!==r&&e.dom.value===c&&e.dom===n.activeElement)return;if("option"===e.tag&&null!=r&&e.dom.value===c)return}if("input"===e.tag&&"type"===t)return void a.setAttribute(t,o);a[t]=o}else"boolean"==typeof o?o?a.setAttribute(t,""):a.removeAttribute(t):a.setAttribute("className"===t?"class":t,o)}}function x(e){return"oninit"===e||"oncreate"===e||"onupdate"===e||"onremove"===e||"onbeforeremove"===e||"onbeforeupdate"===e}function T(e,n,r){var o=e.dom,i="function"!=typeof t?r:function(e){var n=r.call(o,e);return t.call(o,e),n};if(n in o)o[n]="function"==typeof r?i:null;else{var a=n.slice(2);if(void 0===e.events&&(e.events={}),e.events[n]===i)return;null!=e.events[n]&&o.removeEventListener(a,e.events[n],!1),"function"==typeof r&&(e.events[n]=i,o.addEventListener(a,e.events[n],!1))}}function S(e,t,n){"function"==typeof e.oninit&&e.oninit.call(t.state,t),"function"==typeof e.oncreate&&n.push(e.oncreate.bind(t.state,t))}function z(e,t,n){"function"==typeof e.onupdate&&n.push(e.onupdate.bind(t.state,t))}return{render:function(e,t){if(!e)throw new Error("Ensure the DOM element being passed to m.route/m.mount/m.render is not undefined.");var o=[],i=n.activeElement,a=e.namespaceURI;null==e.vnodes&&(e.textContent=""),Array.isArray(t)||(t=[t]),f(e,e.vnodes,r.normalizeChildren(t),!1,o,null,"http://www.w3.org/1999/xhtml"===a?void 0:a),e.vnodes=t,null!=i&&n.activeElement!==i&&i.focus();for(var l=0;l<o.length;l++)o[l]()},setEventCallback:function(e){return t=e}}};var p=function(e){var t=h(e);t.setEventCallback(function(e){!1===e.redraw?e.redraw=void 0:o()});var n=[];function r(e){var t=n.indexOf(e);t>-1&&n.splice(t,2)}function o(){for(var e=1;e<n.length;e+=2)n[e]()}return{subscribe:function(e,t){r(e),n.push(e,function(e){var t=0,n=null,r="function"==typeof requestAnimationFrame?requestAnimationFrame:setTimeout;return function(){var o=Date.now();0===t||o-t>=16?(t=o,e()):null===n&&(n=r(function(){n=null,e(),t=Date.now()},16-(o-t)))}}(t))},unsubscribe:r,redraw:o,render:t.render}}(window);v.setCompletionCallback(p.redraw);var m;c.mount=(m=p,function(e,t){if(null===t)return m.render(e,[]),void m.unsubscribe(e);if(null==t.view&&"function"!=typeof t)throw new Error("m.mount(element, component) expects a component, not a vnode");m.subscribe(e,function(){m.render(e,r(t))}),m.redraw()});var g=s,y=function(e){if(""===e||null==e)return{};"?"===e.charAt(0)&&(e=e.slice(1));for(var t=e.split("&"),n={},r={},o=0;o<t.length;o++){var i=t[o].split("="),a=decodeURIComponent(i[0]),l=2===i.length?decodeURIComponent(i[1]):"";"true"===l?l=!0:"false"===l&&(l=!1);var u=a.split(/\]\[?|\[/),c=n;a.indexOf("[")>-1&&u.pop();for(var s=0;s<u.length;s++){var f=u[s],d=u[s+1],v=""==d||!isNaN(parseInt(d,10)),h=s===u.length-1;if(""===f)null==r[a=u.slice(0,s).join()]&&(r[a]=0),f=r[a]++;null==c[f]&&(c[f]=h?l:v?[]:{}),c=c[f]}}return n},w=function(e){var n,r="function"==typeof e.history.pushState,o="function"==typeof t?t:setTimeout;function i(t){var n=e.location[t].replace(/(?:%[a-f89][a-f0-9])+/gim,decodeURIComponent);return"pathname"===t&&"/"!==n[0]&&(n="/"+n),n}function a(e,t,n){var r=e.indexOf("?"),o=e.indexOf("#"),i=r>-1?r:o>-1?o:e.length;if(r>-1){var a=o>-1?o:e.length,l=y(e.slice(r+1,a));for(var u in l)t[u]=l[u]}if(o>-1){var c=y(e.slice(o+1));for(var u in c)n[u]=c[u]}return e.slice(0,i)}var l={prefix:"#!",getPath:function(){switch(l.prefix.charAt(0)){case"#":return i("hash").slice(l.prefix.length);case"?":return i("search").slice(l.prefix.length)+i("hash");default:return i("pathname").slice(l.prefix.length)+i("search")+i("hash")}},setPath:function(t,n,o){var i={},u={};if(t=a(t,i,u),null!=n){for(var c in n)i[c]=n[c];t=t.replace(/:([^\/]+)/g,function(e,t){return delete i[t],n[t]})}var s=f(i);s&&(t+="?"+s);var d=f(u);if(d&&(t+="#"+d),r){var v=o?o.state:null,h=o?o.title:null;e.onpopstate(),o&&o.replace?e.history.replaceState(v,h,l.prefix+t):e.history.pushState(v,h,l.prefix+t)}else e.location.href=l.prefix+t}};return l.defineRoutes=function(t,i,u){function c(){var n=l.getPath(),r={},o=a(n,r,r),c=e.history.state;if(null!=c)for(var s in c)r[s]=c[s];for(var f in t){var d=new RegExp("^"+f.replace(/:[^\/]+?\.{3}/g,"(.*?)").replace(/:[^\/]+/g,"([^\\/]+)")+"/?$");if(d.test(o))return void o.replace(d,function(){for(var e=f.match(/:[^\/]+/g)||[],o=[].slice.call(arguments,1,-2),a=0;a<e.length;a++)r[e[a].replace(/:|\./g,"")]=decodeURIComponent(o[a]);i(t[f],r,n,f)})}u(n,r)}var s;r?e.onpopstate=(s=c,function(){null==n&&(n=o(function(){n=null,s()}))}):"#"===l.prefix.charAt(0)&&(e.onhashchange=c),c()},l};c.route=function(e,t){var n,o,i,a,l,u=w(e),c=function(e,c,s){if(null==e)throw new Error("Ensure the DOM element that was passed to `m.route` is not undefined");var f=function(){null!=n&&t.render(e,n(r(o,i.key,i)))},d=function(e){if(e===c)throw new Error("Could not resolve default route "+c);u.setPath(c,null,{replace:!0})};u.defineRoutes(s,function(e,t,r){var u=l=function(e,c){u===l&&(o=null==c||"function"!=typeof c.view&&"function"!=typeof c?"div":c,i=t,a=r,l=null,n=(e.render||function(e){return e}).bind(e),f())};e.view||"function"==typeof e?u({},e):e.onmatch?g.resolve(e.onmatch(t,r)).then(function(t){u(e,t)},d):u(e,"div")},d),t.subscribe(e,f)};return c.set=function(e,t,n){null!=l&&((n=n||{}).replace=!0),l=null,u.setPath(e,t,n)},c.get=function(){return a},c.prefix=function(e){u.prefix=e},c.link=function(e){e.dom.setAttribute("href",u.prefix+e.attrs.href),e.dom.onclick=function(e){if(!(e.ctrlKey||e.metaKey||e.shiftKey||2===e.which)){e.preventDefault(),e.redraw=!1;var t=this.getAttribute("href");0===t.indexOf(u.prefix)&&(t=t.slice(u.prefix.length)),c.set(t,void 0,void 0)}}},c.param=function(e){return void 0!==i&&void 0!==e?i[e]:i},c}(window,p),c.withAttr=function(e,t,n){return function(r){t.call(n||this,e in r.currentTarget?r.currentTarget[e]:r.currentTarget.getAttribute(e))}};var b=h(window);c.render=b.render,c.redraw=p.redraw,c.request=v.request,c.jsonp=v.jsonp,c.parseQueryString=y,c.buildQueryString=f,c.version="1.1.6",c.vnode=r,e.exports=c}()}).call(this,n(2).setImmediate,n(1))},function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){(function(e){var r=void 0!==e&&e||"undefined"!=typeof self&&self||window,o=Function.prototype.apply;function i(e,t){this._id=e,this._clearFn=t}t.setTimeout=function(){return new i(o.call(setTimeout,r,arguments),clearTimeout)},t.setInterval=function(){return new i(o.call(setInterval,r,arguments),clearInterval)},t.clearTimeout=t.clearInterval=function(e){e&&e.close()},i.prototype.unref=i.prototype.ref=function(){},i.prototype.close=function(){this._clearFn.call(r,this._id)},t.enroll=function(e,t){clearTimeout(e._idleTimeoutId),e._idleTimeout=t},t.unenroll=function(e){clearTimeout(e._idleTimeoutId),e._idleTimeout=-1},t._unrefActive=t.active=function(e){clearTimeout(e._idleTimeoutId);var t=e._idleTimeout;t>=0&&(e._idleTimeoutId=setTimeout(function(){e._onTimeout&&e._onTimeout()},t))},n(3),t.setImmediate="undefined"!=typeof self&&self.setImmediate||void 0!==e&&e.setImmediate||this&&this.setImmediate,t.clearImmediate="undefined"!=typeof self&&self.clearImmediate||void 0!==e&&e.clearImmediate||this&&this.clearImmediate}).call(this,n(1))},function(e,t,n){(function(e,t){!function(e,n){"use strict";if(!e.setImmediate){var r,o,i,a,l,u=1,c={},s=!1,f=e.document,d=Object.getPrototypeOf&&Object.getPrototypeOf(e);d=d&&d.setTimeout?d:e,"[object process]"==={}.toString.call(e.process)?r=function(e){t.nextTick(function(){h(e)})}:!function(){if(e.postMessage&&!e.importScripts){var t=!0,n=e.onmessage;return e.onmessage=function(){t=!1},e.postMessage("","*"),e.onmessage=n,t}}()?e.MessageChannel?((i=new MessageChannel).port1.onmessage=function(e){h(e.data)},r=function(e){i.port2.postMessage(e)}):f&&"onreadystatechange"in f.createElement("script")?(o=f.documentElement,r=function(e){var t=f.createElement("script");t.onreadystatechange=function(){h(e),t.onreadystatechange=null,o.removeChild(t),t=null},o.appendChild(t)}):r=function(e){setTimeout(h,0,e)}:(a="setImmediate$"+Math.random()+"$",l=function(t){t.source===e&&"string"==typeof t.data&&0===t.data.indexOf(a)&&h(+t.data.slice(a.length))},e.addEventListener?e.addEventListener("message",l,!1):e.attachEvent("onmessage",l),r=function(t){e.postMessage(a+t,"*")}),d.setImmediate=function(e){"function"!=typeof e&&(e=new Function(""+e));for(var t=new Array(arguments.length-1),n=0;n<t.length;n++)t[n]=arguments[n+1];var o={callback:e,args:t};return c[u]=o,r(u),u++},d.clearImmediate=v}function v(e){delete c[e]}function h(e){if(s)setTimeout(h,0,e);else{var t=c[e];if(t){s=!0;try{!function(e){var t=e.callback,r=e.args;switch(r.length){case 0:t();break;case 1:t(r[0]);break;case 2:t(r[0],r[1]);break;case 3:t(r[0],r[1],r[2]);break;default:t.apply(n,r)}}(t)}finally{v(e),s=!1}}}}}("undefined"==typeof self?void 0===e?this:e:self)}).call(this,n(1),n(4))},function(e,t){var n,r,o=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function l(e){if(n===setTimeout)return setTimeout(e,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:i}catch(e){n=i}try{r="function"==typeof clearTimeout?clearTimeout:a}catch(e){r=a}}();var u,c=[],s=!1,f=-1;function d(){s&&u&&(s=!1,u.length?c=u.concat(c):f=-1,c.length&&v())}function v(){if(!s){var e=l(d);s=!0;for(var t=c.length;t;){for(u=c,c=[];++f<t;)u&&u[f].run();f=-1,t=c.length}u=null,s=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===a||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function h(e,t){this.fun=e,this.array=t}function p(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];c.push(new h(e,t)),1!==c.length||s||l(v)},h.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=p,o.addListener=p,o.once=p,o.off=p,o.removeListener=p,o.removeAllListeners=p,o.emit=p,o.prependListener=p,o.prependOnceListener=p,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r);const i={view:e=>o()("#layout.app",[o()("div#main",[o()("div.content",[o()("div.pure-g",[o()("div.pure-u-1",e.children)])])])])},a=function(e){return e},l=["","AG","AR","AI","BL","BS","BE","FR","GE","GL","GR","JU","LU","NE","NW","OW","SH","SZ","SO","SG","TI","TG","UR","VD","VS","ZG","ZH"],u={view(e){let{searchParams:t,search:n,reset:r,wasSearched:i}=e.attrs;return[o()("form.pure-form.pure-form-aligned",[o()("fieldset",[o()(".pure-control-group",[o()("label[for=plz]","Postleitzahl"),o()("input#plz",{onfocusout:e=>{t.plz4=e.target.value},oninput:e=>{e.target.value=e.target.value.replace(/[^0-9]/,""),t.plz4=e.target.value},onkeyup:e=>{13===e.keyCode&&(t.plz4=e.target.value,n())},type:"text",value:t.plz4,maxlength:4,autofocus:"autofocus"})]),o()(".pure-control-group",[o()("label","Kanton"),o()("select",{oninput:e=>{t.ktkz=e.target.value},onchange:e=>{t.ktkz=e.target.value},onkeyup:e=>{13===e.keyCode&&n()},value:t.ktkz},[l.map(e=>o()("option",e))])]),o()(".pure-control-group",[o()("label","Gemeindenummer"),o()("input",{onfocusout:e=>{t.gdenr=e.target.value},oninput:e=>{e.target.value=e.target.value.replace(/[^0-9]/,""),t.gdenr=e.target.value},onkeyup:e=>{13===e.keyCode&&(t.gdenr=e.target.value,n())},value:t.gdenr,maxlength:4})]),o()(".pure-control-group",[o()("label","Gemeindename"),o()("input",{onfocusout:e=>{t.gdenamk=e.target.value},oninput:e=>{t.gdenamk=e.target.value},onkeyup:e=>{13===e.keyCode&&(t.gdenamk=e.target.value,n())},value:t.gdenamk})]),o()(".pure-controls",[o()("label.pure-checkbox",o()("input[type=checkbox]",{checked:t.only100>0?"checked":"",onclick:e=>{t.only100=e.target.checked?1:0}}),a("nur 100% Übereinstimmung"))]),o()(".pure-controls",[o()("button.pure-button",{onclick:()=>{n()}},a("Suchen")),i?o()("button.pure-button",{onclick:()=>{r(),document.getElementById("plz").focus()}},a("Zurücksetzen")):""])])])]}};function c(e){return o()("tr",[o()("td",e.plz4),o()("td",e.in_gde+" %"),o()("td",e.ktkz),o()("td",e.gdenr),o()("td",e.gdenamk)])}const s={view(e){let{entries:t,sort:n}=e.attrs;return 0===t.length?[]:o()("table.pure-table.pure-table-horizontal.pure-table--entries",[o()("thead",[o()("tr",[o()("th[data-sort=plz4]",{onclick:e=>{n(e.target.dataset.sort)}},a("Postleitzahl")),o()("th[data-sort=in_gde]",{onclick:e=>{n(e.target.dataset.sort)}},a("Anteil in Gemeinde")),o()("th[data-sort=ktkz]",{onclick:e=>{n(e.target.dataset.sort)}},a("Kanton")),o()("th[data-sort=gdenr]",{onclick:e=>{n(e.target.dataset.sort)}},a("Gemeindenummer")),o()("th[data-sort=gdenamk]",{onclick:e=>{n(e.target.dataset.sort)}},a("Gemeindename"))])]),o()("tbody",t.map(c))])}},f={view(e){let{count:t,wasSearched:n}=e.attrs;return n?t<1?o()("p.total",a("Es wurden keine Einträge gefunden.")):1===t?o()("p.total",a("Es wurde 1 Eintrag gefunden.")):o()("p.total",a(`Es wurden ${t} Einträge gefunden.`)):""}},d={plz4:"",ktkz:"",gdenr:"",gdenamk:"",only100:0,sort:"plz4"};let v=[],h=!1;const p={params:Object.assign({},d),reset(){v=[],p.params=Object.assign({},d),h=!1},search:()=>o.a.request({method:"GET",url:WEB_URL+"search",data:p.params}).then(e=>{v=e,h=!0}),getList:()=>v,getCount:()=>v.length,wasSearched:()=>h};function m(e){p.params.sort=e,g()}function g(){p.search()}function y(){p.reset()}const w={view:()=>(document.title=a("Gemeindeverzeichnis der Schweiz"),[o()("h2","Gemeindeverzeichnis der Schweiz"),o()(u,{searchParams:p.params,wasSearched:p.wasSearched(),search:g,reset:y}),o()(f,{count:p.getCount(),wasSearched:p.wasSearched()}),o()(s,{entries:p.getList(),sort:m})])},b={view:()=>(document.title=a("Fehler"),o()("h1",a("Error")))};o.a.route(document.body,"/",{"/":{render:()=>o()(i,o()(w))},"/:404...":{render:()=>o()(i,o()(b))}})}]);