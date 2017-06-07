(function(){function m(a,b){try{return a[b]}catch(c){return""}}function n(a,b){var c=m(a,b);return null===c||void 0===c?"":"[object String]"===Object.prototype.toString.call(c)?c:q(c)}function r(a,b){function c(){}c.prototype=a.prototype;b.prototype=new c;b.prototype.constructor=b}function t(a){var b,c,d;a+="=";d=document.cookie.split(";");for(b=0;b<d.length;b++)if(c=d[b],c=c.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),0===c.indexOf(a))return c.substring(a.length,c.length);return null}
var aa="undefined"!==typeof window&&window.JSON&&window.JSON.parse?window.JSON.parse:function(a){return eval("("+a+")")},q="undefined"!==typeof window&&window.JSON&&window.JSON.stringify?window.JSON.stringify:function(){function a(a){return d[a]||"\\u"+(a.charCodeAt(0)+65536).toString(16).substr(1)}var b=Object.prototype.toString,c=Array.isArray||function(a){return"[object Array]"===b.call(a)},d={'"':'\\"',"\\":"\\\\","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t"},e=/[\\"\u0000-\u001F\u2028\u2029]/g;
return function g(d){if(null===d)return"null";if("number"===typeof d)return isFinite(d)?d.toString():"null";if("boolean"===typeof d)return d.toString();if("object"===typeof d){if("function"===typeof d.toJSON)return g(d.toJSON());if(c(d)){for(var k="[",h=0;h<d.length;h++)k+=(h?",":"")+g(d[h]);return k+"]"}if("[object Object]"===b.call(d)){k=[];for(h in d)d.hasOwnProperty(h)&&k.push(g(h)+":"+g(d[h]));return"{"+k.join(",")+"}"}}return'"'+d.toString().replace(e,a)+'"'}}();
function u(a){var b=Error.apply(this,arguments);b.name=this.name="InvalidCommandError";this.stack=b.stack;this.message=b.message||a||"The command is invalid"}r(Error,u);function v(a){var b=Error.apply(this,arguments);b.name=this.name="TrackerNotInitializedError";this.stack=b.stack;this.message=b.message||a||"Initialize a tracker first"}r(Error,v);function w(){for(var a="",b=0;36>b;b++)a+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".charAt(Math.floor(62*Math.random()));return a}function x(a){return"[object Array]"===Object.prototype.toString.call(a)}function y(a,b,c){this.id=w();this.b=a;this.c=b;this.a=c}function z(a){var b={};b.id=a.id;b.timestamp=a.b;b.url=a.c;b.params=a.a;return b}function A(a,b,c){return(a=a.overriddenBaseUrl)?a+c:b}
function ba(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(a){var b=16*Math.random()|0;return("x"===a?b:b&3|8).toString(16)})}function B(a,b){var c=[],d;for(d in a)if(a.hasOwnProperty(d)){var e=b?b+"."+d:d,f=a[d];null!==f&&"object"===typeof f?c.push(B(f,e)):c.push(encodeURIComponent(e)+"="+encodeURIComponent(f))}return c.join("&")}function ca(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c]);return a}
function da(a){for(var b in a)if(a.hasOwnProperty(b))return!1;return!0}function C(a){try{var b=a.localStorage;return"undefined"!==typeof b&&(b.setItem("test_nga","test_nga"),"test_nga"===b.getItem("test_nga"))?(b.removeItem("test_nga"),!0):!1}catch(c){return!1}}function D(a){return"undefined"===typeof a}function E(a){return x(a)&&0===a.length}var F,G="storage";function H(){this.a={}}function I(a,b){if(D(b)||D(a.a[b]))throw new u("Handler for key "+b+" doesn't exist");return a.a[b]}
function J(a){this.a=a}function ea(a,b,c,d,e){var f=new a.a.XMLHttpRequest;f.open(c,"GET"===c&&d?b+"?"+d:b,!0);f.onreadystatechange=function(){4===f.readyState&&f.status&&e.call(this)};f.send("POST"===c?d:void 0)}function fa(a,b,c,d,e){var f=new a.a.XDomainRequest;f.open(c,"GET"===c&&d?b+"?"+d:b,!0);f.onload=function(){e.call(this)};f.onerror=function(){e.call(this)};setTimeout(function(){f.send("POST"===c?d:void 0)},0)}
function ga(a,b,c,d){a=a.a.document;var e=!1,f=a.getElementsByTagName("head")[0]||a.documentElement,g=a.createElement("script");g.type="text/javascript";g.src=b+"?"+c;g.async=!0;g.onload=g.onreadystatechange=function(){e||this.readyState&&"loaded"!==this.readyState&&"complete"!==this.readyState||(e=!0,d.call(this),g.onload=g.onreadystatechange=null,f&&g.parentNode&&f.removeChild(g))};f.appendChild(g)}
J.prototype.send=function(a,b,c,d){this.a.XMLHttpRequest&&!D((new this.a.XMLHttpRequest).withCredentials)?ea(this,a,b,c,d):this.a.XDomainRequest?fa(this,a,b,c,d):ga(this,a,c,d)};
function K(a,b,c){this.r=a.p;this.s=a.f;var d={},e={};if(0<b.length){if("string"===typeof b[0])0<b.length&&(e.category=b[0]),1<b.length&&(e.action=b[1]),2<b.length&&(e.label=b[2]),3<b.length&&(e.value=b[3]),4<b.length&&(d=b[4]);else if("object"===typeof b[0])e=b[0],d.customParams=e.customParams||null;else throw new u("Invalid event definition");this.o=n(e,"category");this.d=n(e,"action");this.h=n(e,"label");this.l=n(e,"value")}this.k=A(a,"//ngacm.com/c5t/ev2","ev2");this.i=a.id;this.j=a.userId||t("qeppo_priv_cookie")||
"";this.c=d.customParams||a.customParams||null;this.e=a.clientId||"";this.g=a.version;this.b=c.getTime();this.t=t("ws3")||""}K.prototype.a=function(){var a={};a.epid=this.r;a.eseq=this.s;a.ecat=this.o;a.eact=this.d;a.elab=this.h;a.eval=this.l;a.sid=this.i;a.suid=this.j;a.xp=this.c?q(this.c):"";a.cid=this.e;a.ctv=this.g;a.ccts=this.b;a.ws3=this.t;return new y(this.b,this.k,a)};function ha(a,b){var c=a.getContext(),d=new K(c,b,new Date);L(a,{f:c.f+1});return z(d.a())}
function M(a,b,c,d){b=b||{};this.F=function(a){if(!x(a))throw Error("Custom cookies option has to be an array");var b,c={};for(b=0;b<a.length;b++){var d=t(a[b]);d&&(c[a[b]]=d)}return c};this.G=function(){var a={};if(C(d)){var b=t("optimizelyEndUserId");b&&(b=d.localStorage.getItem("optimizely_data$$"+b+"$$1982700803$$variation_map"))&&(a.optimizelyBuckets=b)}return a};this.i=A(a,"//ngacm.com/c5t/pv2","pv2");this.g=a.id;this.h=a.userId||t("qeppo_priv_cookie")||"";this.H=a.sessionId||t("ws2")||"";this.c=
b.customParams||a.customParams||null;var e=this.F(b.customCookies||a.customCookies||[]),f=this.G(),e=ca(e,f);this.m=!1===da(e)?e:null;this.d=a.clientId;this.e=a.version;this.l=m(d.location,"href");this.k=b.referrer||a.referrer||m(d.document,"referrer");this.t=m(d.navigator,"userAgent");this.r=m(d.screen,"width");this.o=m(d.screen,"height");this.j=d.navigator&&d.navigator.cookieEnabled?1:0;this.b=c.getTime();this.s=c.getTimezoneOffset();this.I=t("ws3")||""}
M.prototype.a=function(){var a={};a.sid=this.g;a.suid=this.h;a.ssid=this.H;a.xp=this.c?q(this.c):"";a.xc=this.m?q(this.m):"";a.cid=this.d;a.ctv=this.e;a.crq=this.l;a.crf=this.k;a.cua=this.t;a.csw=this.r;a.csh=this.o;a.cce=this.j;a.ccts=this.b;a.ctz=this.s;a.ws3=this.I;a=new y(this.b,this.i,a);a.a.pid=a.id;return a};function ia(a,b){var c=b.pop(),d=new Date,e=a.getContext(),c=(new M(e,c,d,window)).a(),d=e.n?e.p:c.id;L(a,{n:!1});c.a.pid=d;L(a,{p:d,f:e.n?e.f:0});return z(c)}
function N(a,b){b=b||{};var c=b.cookieDomain,d=b.cookieName||"_cmuid",e=b.userId,f=b.sessionId,g=b.customParams,p=b.customCookies,k=b.referrer;this.id=a;this.version=b.overriddenTrackerVersion||"c7781a5";this.a={};this.a.p=w();this.a.f=0;this.a.n=!0;if(!c)a:{var c=window.location.hostname,h="allegrogroup.com allegroapi.io allegro.pl allegro.de aukro.cz aukro.ua vatera.hu cokupic.pl otodom.pl otomoto.pl otomoto.eu sendit.pl".split(" "),l;for(l=0;l<h.length;l++){var W=c.indexOf(h[l]);if(-1<W){c="."+
c.substring(W);break a}}c=void 0}this.a.cookieDomain=c;this.a.cookieName=d;c=this.a;h=this.a.cookieDomain;(l=t(d))||(h={C:63072E6,domain:h},l=[""+d+"="+ba()],h.C&&l.push("expires="+(new Date((new Date).getTime()+h.C)).toGMTString()),l.push("path="+(h.path?h.path:"/")),h.domain&&l.push("domain="+h.domain),document.cookie=l.join(";"),l=t(d));c.clientId=l||"";this.a.userId=e;this.a.sessionId=f;this.a.customParams=g;this.a.customCookies=p;this.a.referrer=k;b.overriddenBaseUrl&&(this.a.overriddenBaseUrl=
b.overriddenBaseUrl)}N.prototype.getContext=function(){var a={},b;for(b in this.a)this.a.hasOwnProperty(b)&&(a[b]=this.a[b]);a.id=this.id;a.version=this.version;return a};function L(a,b){for(var c in b)b.hasOwnProperty(c)&&(a.a[c]=b[c])}function O(a,b,c){this.a={};this.c=[];this.d=!1;this.b=a;this.g=b;this.h=c;this.a.create=O.prototype.i;this.a.require=O.prototype.j;this.a.send=O.prototype.k;this.a.set=O.prototype.l}r(H,O);
O.prototype.e=function(){this.c.push(Array.prototype.slice.call(arguments));this.d||P(this)};function ja(a,b){if(x(b))for(var c=0;c<b.length;c++)a.e.apply(a,b[c])}function P(a){for(;a.c.length;){var b=a.c.splice(0,1),c=a,d=b[0];if(E(d))throw new u("No arguments given");var b=d[0].split("@"),e=1<b.length?b[1]:null,d=d.slice(1,d.length);I(c,b[0]).call(c,e,d)}}O.prototype.i=function(a,b){if(E(b))throw new u;a=b[0];var c=this.b,d=a,e=1<b.length?b[1]:null;c.a=c.a||d;c.b[d]=new N(d,e)};
O.prototype.j=function(a,b){if(E(b))throw new u;this.d=!0;var c=this;this.h.send(b[0],"GET",null,function(){var a=document.createElement("script"),b=document.getElementsByTagName("script")[0];a.text=this.responseText;b.parentNode.insertBefore(a,b);c.d=!1;P(c)})};O.prototype.k=function(a,b){var c=Q(this.b,a),d=0<b.length?b[0]:"pageview";b=b.slice(1,b.length);var e=this.g,f=b,c=I(e,d).call(null,c,f);ka(e.b,c)};
O.prototype.l=function(a,b){if(E(b))throw new u("Second argument of 'set' command has not to be empty");var c=b[0];if("[object Object]"!==Object.prototype.toString.call(c))throw new u("Object is required as a second argument of 'set' command");L(Q(this.b,a),c)};r(H,function(){this.a={}});function R(a,b,c){this.c=a;this.b=b;this.a=c;la(this)}function ka(a,b){a.b.u(b);a.send(b,function(){for(var b=S(a.b),d=0;d<b.length;d++)a.a.contains(b[d])||a.send(b[d])})}
function la(a){a.d=function(b,c){return function(){a.b.remove(b);a.a.remove(b);D(c)||c()}}}R.prototype.send=function(a,b){this.a.u(a);this.c.send(a,this.d(a,b))};function T(){}T.prototype.setItem=function(){};T.prototype.getItem=function(){};function U(){this.a={}}U.prototype.contains=function(a){return!!this.a[a.id]};U.prototype.u=function(a){this.a[a.id]=!0};U.prototype.remove=function(a){delete this.a[a.id]};function ma(a){this.a={};this.b=a;this.a.pageview=ia;this.a.event=ha}r(H,ma);
function V(a){this.a=a;G=F+"-"+G}r(J,V);V.prototype.send=function(a,b){var c=(new Date).getTime();if(36E5<c-a.timestamp)b();else{var d=a.url,e=a.params;e.csts=c;var c=e,f;for(f in c)null!==c[f]&&void 0!==c[f]&&""!==c[f]||delete c[f];e=B(e);J.prototype.send.call(this,d,"GET",e,b)}};function X(a){this.a=a}X.prototype.u=function(a){var b=S(this);10<=b.length&&(b=b.slice(1,10));b.push(a);this.a.setItem(G,q(b))};
X.prototype.remove=function(a){for(var b=S(this),c=0;c<b.length;c++)b[c].id===a.id&&b.splice(c,1);this.a.setItem(G,q(b))};function S(a){a=aa(a.a.getItem(G)||"[]");a.sort(function(a,c){return a.timestamp-c.timestamp});return a}function na(){this.a=null;this.b={}}function Q(a,b){var c;if(a.b[b])c=a.b[b];else{if(!a.a||!a.b[a.a])throw new v;c=a.b[a.a]}return c}
function oa(a){var b=a["cm.analytics.object"]||"cm";F=b;var c;a[b]&&a[b].q&&(c=a[b].q);var d;C(a)?d=a.localStorage:d=new T;var e=new V(a),f=new J(a),g=new na;d=new ma(new R(e,new X(d),new U));var p=new O(g,d,f);a[b]=function(){p.e.apply(p,arguments)};a[b].loaded=!0;a[b].registerPlugin=function(a){a(p)};ja(p,c)};function pa(a){var b={};a.v||(a.v="qeppo_priv_cookie");b.userId=t(a.v);a.w||(a.w="ws2");b.sessionId=t(a.w);b.customCookies=a.m;a.B&&(b.cookieDomain=a.B);var c=Y(a.D);c&&(b.customParams=c);b.overriddenTrackerVersion="_c7781a5";a.A&&(a=a.A,a=a.replace("////","//"),c="http://"===a.substring(0,7)||"https://"===a.substring(0,8)?a:"//"===a.substring(0,2)?document.location.protocol+a:document.location.protocol+"//"+a,-1!==c.indexOf("/",c.length-1)||(c+="/"),b.overriddenBaseUrl=c+"c5t/");return b}
function Y(a){var b=null;if(a)if("[object Function]"===Object.prototype.toString.call(a))try{b=a()}catch(c){console&&console.log(c)}else"[object Object]"===Object.prototype.toString.call(a)&&(b=a);return b}function Z(a){if(a&&"function"===typeof a.onSuccess)try{a.onSuccess()}catch(b){console&&console.log(b)}}
(function(a,b,c){function d(a){return e.conf[a]}function e(){g.apply(g,arguments)}var f=a._cmPageViewsQueue?a._cmPageViewsQueue:[];b=a._cmEventsQueue?a._cmEventsQueue:[];a["cm.analytics.object"]="cm2";c(a);var g=a.cm2;a.cm=e;e.conf=a._cm;a=pa({A:d("baseUrl"),v:d("uid"),w:d("ses"),m:d("cookies"),B:d("domain"),D:d("customParams")});g("create",d("account"),a);e.pv=function(a){a=a||d("callback")||null;var b=Y(d("customParams"));b?g("send","pageview",{customParams:b}):g("send","pageview");Z(a)};e.event=
function(a,b,c){c=c||d("callback")||null;a=a||{};var e=n(a,"cat"),f=n(a,"a"),h=n(a,"lab");a=n(a,"v");(b=Y(b))?g("send","event",e,f,h,a,{customParams:b}):g("send","event",e,f,h,a);Z(c)};e.setReferrer=function(a){var b={};b.referrer=a;g("set",b)};e.addDeal=function(){};e.submitDeal=function(a){a=a||d("callback")||null;Z(a)};0!=d("pv")&&e.pv(null);for(a=0;a<f.length;a++)e.pv(null);for(a=0;a<b.length;a++){b[a].pay=b[a].pay||{};f=b[a].cus||"";c=b[a].callback||null;var p={},k=b[a].pay,h;for(h in k)k.hasOwnProperty(h)&&
(p[h]=k[h]||"");p.ts=b[a].ts||"";e.event(p,f,c)}})(window,document,oa);})();