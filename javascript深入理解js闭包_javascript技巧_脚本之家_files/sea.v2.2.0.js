/*! CHANGYAN2.5 2016-04-05 */
(function(){!function(a,b){function c(a){return function(b){return{}.toString.call(b)=="[object "+a+"]"}}function d(){return z++}function e(a){return a.match(C)[0]}function f(a){for(a=a.replace(D,"/");a.match(E);)a=a.replace(E,"/");return a=a.replace(F,"$1/")}function g(a){var b=a.length-1,c=a.charAt(b);return"#"===c?a.substring(0,b):".js"===a.substring(b-2)||a.indexOf("?")>0||".css"===a.substring(b-3)||"/"===c?a:a+".js"}function h(a){var b=u.alias;return b&&w(b[a])?b[a]:a}function i(a){var b,c=u.paths;return c&&(b=a.match(G))&&w(c[b[1]])&&(a=c[b[1]]+b[2]),a}function j(a){var b=u.vars;return b&&a.indexOf("{")>-1&&(a=a.replace(H,function(a,c){return w(b[c])?b[c]:a})),a}function k(a){var b=u.map,c=a;if(b)for(var d=0,e=b.length;e>d;d++){var f=b[d];if(c=y(f)?f(a)||a:a.replace(f[0],f[1]),c!==a)break}return c}function l(a,b){var c,d=a.charAt(0);if(I.test(a))c=a;else if("."===d)c=f((b?e(b):u.cwd)+a);else if("/"===d){var g=u.cwd.match(J);c=g?g[0]+a.substring(1):a}else c=u.base+a;return 0===c.indexOf("//")&&(c=location.protocol+c),c}function m(a,b){if(!a)return"";a=h(a),a=i(a),a=j(a),a=g(a);var c=l(a,b);return c=k(c)}function n(a){return a.hasAttribute?a.src:a.getAttribute("src",4)}function o(a,b,c){var d=T.test(a),e=K.createElement(d?"link":"script");if(c){var f=y(c)?c(a):c;f&&(e.charset=f)}a+="?"+window.changyan.seajs.version,p(e,b,d,a),d?(e.rel="stylesheet",e.href=a):(e.async=!0,e.src=a),P=e,S?R.insertBefore(e,S):R.appendChild(e),P=null}function p(a,b,c,d){function e(){a.onload=a.onerror=a.onreadystatechange=null,c||u.debug||R.removeChild(a),a=null,b()}var f="onload"in a;return!c||!U&&f?void(f?(a.onload=e,a.onerror=function(){B("error",{uri:d,node:a}),e()}):a.onreadystatechange=function(){/loaded|complete/.test(a.readyState)&&e()}):void setTimeout(function(){q(a,b)},1)}function q(a,b){var c,d=a.sheet;if(U)d&&(c=!0);else if(d)try{d.cssRules&&(c=!0)}catch(e){"NS_ERROR_DOM_SECURITY_ERR"===e.name&&(c=!0)}setTimeout(function(){c?b():q(a,b)},20)}function r(){if(P)return P;if(Q&&"interactive"===Q.readyState)return Q;for(var a=R.getElementsByTagName("script"),b=a.length-1;b>=0;b--){var c=a[b];if("interactive"===c.readyState)return Q=c}}function s(a){var b=[];return a.replace(X,"").replace(W,function(a,c,d){d&&b.push(d)}),b}function t(a,b){this.uri=a,this.dependencies=b||[],this.exports=null,this.status=0,this._waitings={},this._remain=0}if(!a.seajs){var seajs=a.seajs={version:"2.2.0"},u=seajs.data={},v=c("Object"),w=c("String"),x=Array.isArray||c("Array"),y=c("Function"),z=0,A=u.events={};seajs.on=function(a,b){var c=A[a]||(A[a]=[]);return c.push(b),seajs},seajs.off=function(a,b){if(!a&&!b)return A=u.events={},seajs;var c=A[a];if(c)if(b)for(var d=c.length-1;d>=0;d--)c[d]===b&&c.splice(d,1);else delete A[a];return seajs};var B=seajs.emit=function(a,b){var c,d=A[a];if(d)for(d=d.slice();c=d.shift();)c(b);return seajs},C=/[^?#]*\//,D=/\/\.\//g,E=/\/[^/]+\/\.\.\//,F=/([^:/])\/\//g,G=/^([^/:]+)(\/.+)$/,H=/{([^{]+)}/g,I=/^\/\/.|:\//,J=/^.*?\/\/.*?\//,K=document,L=e(K.URL),M=K.scripts,N=K.getElementById("seajsnode")||M[M.length-1],O=e(n(N)||L);seajs.resolve=m;var P,Q,R=K.head||K.getElementsByTagName("head")[0]||K.documentElement,S=R.getElementsByTagName("base")[0],T=/\.css(?:\?|$)/i,U=+navigator.userAgent.replace(/.*AppleWebKit\/(\d+)\..*/,"$1")<536;seajs.request=o;var V,W=/"(?:\\"|[^"])*"|'(?:\\'|[^'])*'|\/\*[\S\s]*?\*\/|\/(?:\\\/|[^\/\r\n])+\/(?=[^\/])|\/\/.*|\.\s*require|(?:^|[^$])\brequire\s*\(\s*(["'])(.+?)\1\s*\)/g,X=/\\\\/g,Y=seajs.cache={},Z={},_={},aa={},ba=t.STATUS={FETCHING:1,SAVED:2,LOADING:3,LOADED:4,EXECUTING:5,EXECUTED:6};t.prototype.resolve=function(){for(var a=this,b=a.dependencies,c=[],d=0,e=b.length;e>d;d++)c[d]=t.resolve(b[d],a.uri);return c},t.prototype.load=function(){var a=this;if(!(a.status>=ba.LOADING)){a.status=ba.LOADING;var b=a.resolve();B("load",b);for(var c,d=a._remain=b.length,e=0;d>e;e++)c=t.get(b[e]),c.status<ba.LOADED?c._waitings[a.uri]=(c._waitings[a.uri]||0)+1:a._remain--;if(0===a._remain)return void a.onload();var f={};for(e=0;d>e;e++)c=Y[b[e]],c.status<ba.FETCHING?c.fetch(f):c.status===ba.SAVED&&c.load();for(var g in f)f.hasOwnProperty(g)&&f[g]()}},t.prototype.onload=function(){var a=this;a.status=ba.LOADED,a.callback&&a.callback();var b,c,d=a._waitings;for(b in d)d.hasOwnProperty(b)&&(c=Y[b],c._remain-=d[b],0===c._remain&&c.onload());delete a._waitings,delete a._remain},t.prototype.fetch=function(a){function b(){seajs.request(f.requestUri,f.onRequest,f.charset)}function c(){delete Z[g],_[g]=!0,V&&(t.save(e,V),V=null);var a,b=aa[g];for(delete aa[g];a=b.shift();)a.load()}var d=this,e=d.uri;d.status=ba.FETCHING;var f={uri:e};B("fetch",f);var g=f.requestUri||e;return!g||_[g]?void d.load():Z[g]?void aa[g].push(d):(Z[g]=!0,aa[g]=[d],B("request",f={uri:e,requestUri:g,onRequest:c,charset:u.charset}),void(f.requested||(a?a[f.requestUri]=b:b())))},t.prototype.exec=function(){function require(a){return t.get(require.resolve(a)).exec()}var a=this;if(a.status>=ba.EXECUTING)return a.exports;a.status=ba.EXECUTING;var c=a.uri;require.resolve=function(a){return t.resolve(a,c)},require.async=function(a,b){return t.use(a,b,c+"_async_"+d()),require};var e=a.factory,exports=y(e)?e(require,a.exports={},a):e;return exports===b&&(exports=a.exports),delete a.factory,a.exports=exports,a.status=ba.EXECUTED,B("exec",a),exports},t.resolve=function(a,b){var c={id:a,refUri:b};return B("resolve",c),c.uri||seajs.resolve(c.id,b)},t.define=function(a,c,d){var e=arguments.length;1===e?(d=a,a=b):2===e&&(d=c,x(a)?(c=a,a=b):c=b),!x(c)&&y(d)&&(c=s(d.toString()));var f={id:a,uri:t.resolve(a),deps:c,factory:d};if(!f.uri&&K.attachEvent){var g=r();g&&(f.uri=g.src)}B("define",f),f.uri?t.save(f.uri,f):V=f},t.save=function(a,b){var c=t.get(a);c.status<ba.SAVED&&(c.id=b.id||a,c.dependencies=b.deps||[],c.factory=b.factory,c.status=ba.SAVED)},t.get=function(a,b){return Y[a]||(Y[a]=new t(a,b))},t.use=function(b,c,d){var e=t.get(d,x(b)?b:[b]);e.callback=function(){for(var exports=[],b=e.resolve(),d=0,f=b.length;f>d;d++)exports[d]=Y[b[d]].exec();c&&c.apply(a,exports),delete e.callback},e.load()},t.preload=function(a){var b=u.preload,c=b.length;c?t.use(b,function(){b.splice(0,c),t.preload(a)},u.cwd+"_preload_"+d()):a()},seajs.use=function(a,b){return t.preload(function(){t.use(a,b,u.cwd+"_use_"+d())}),seajs},t.define.cmd={},a.define=t.define,seajs.Module=t,u.fetchedList=_,u.cid=d,seajs.require=function(a){var b=t.get(t.resolve(a));return b.status<ba.EXECUTING&&(b.onload(),b.exec()),b.exports};var ca=/^(.+?\/)(\?\?)?(seajs\/)+/;u.base=(O.match(ca)||["",O])[1],u.dir=O,u.cwd=L,u.charset="utf-8",u.preload=function(){var a=[],b=location.search.replace(/(seajs-\w+)(&|$)/g,"$1=1$2");return b+=" "+K.cookie,b.replace(/(seajs-\w+)=1/g,function(b,c){a.push(c)}),a}(),seajs.config=function(a){for(var b in a){var c=a[b],d=u[b];if(d&&v(d))for(var e in c)d[e]=c[e];else x(d)?c=d.concat(c):"base"===b&&("/"!==c.slice(-1)&&(c+="/"),c=l(c)),u[b]=c}return B("config",a),seajs}}}(this)}).call(changyan);