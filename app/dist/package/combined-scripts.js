(function() {

/*
 //Supplemental CSS
 ['http://fonts.googleapis.com/css?family=Lato:100,300,400,700|Inder',false,'','css',false] ,
*/

/*
//remove
jQuery validate
jQuery color ?
underscore
jQuery-serialize

//no dependencies and non depending on
flying focus
showdown

*/

/*global require, firebase, OYM, Utils*/

//primary application


})();

(function() {

(function() {function g(a){throw a;}var aa=void 0,j=!0,k=null,l=!1;function ba(a){return function(){return this[a]}}function o(a){return function(){return a}}var r,ca=this;function da(){}function ea(a){a.mb=function(){return a.ed?a.ed:a.ed=new a}}
function fa(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}function s(a){return a!==aa}function ga(a){var b=fa(a);return"array"==b||"object"==b&&"number"==typeof a.length}function u(a){return"string"==typeof a}function ha(a){return"number"==typeof a}function ia(a){var b=typeof a;return"object"==b&&a!=k||"function"==b}Math.floor(2147483648*Math.random()).toString(36);function ja(a,b,c){return a.call.apply(a.bind,arguments)}
function ka(a,b,c){a||g(Error());if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}function v(a,b,c){v=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?ja:ka;return v.apply(k,arguments)}function la(a,b){function c(){}c.prototype=b.prototype;a.Yd=b.prototype;a.prototype=new c};function ma(a){a=String(a);if(/^\s*$/.test(a)?0:/^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g,"@").replace(/"[^"\\\n\r\u2028\u2029\x00-\x08\x10-\x1f\x80-\x9f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g,"")))try{return eval("("+a+")")}catch(b){}g(Error("Invalid JSON string: "+a))}function na(){this.gc=aa}
function oa(a,b,c){switch(typeof b){case "string":pa(b,c);break;case "number":c.push(isFinite(b)&&!isNaN(b)?b:"null");break;case "boolean":c.push(b);break;case "undefined":c.push("null");break;case "object":if(b==k){c.push("null");break}if("array"==fa(b)){var d=b.length;c.push("[");for(var e="",f=0;f<d;f++)c.push(e),e=b[f],oa(a,a.gc?a.gc.call(b,String(f),e):e,c),e=",";c.push("]");break}c.push("{");d="";for(f in b)Object.prototype.hasOwnProperty.call(b,f)&&(e=b[f],"function"!=typeof e&&(c.push(d),
pa(f,c),c.push(":"),oa(a,a.gc?a.gc.call(b,f,e):e,c),d=","));c.push("}");break;case "function":break;default:g(Error("Unknown type: "+typeof b))}}var qa={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},ra=/\uffff/.test("\uffff")?/[\\\"\x00-\x1f\x7f-\uffff]/g:/[\\\"\x00-\x1f\x7f-\xff]/g;
function pa(a,b){b.push('"',a.replace(ra,function(a){if(a in qa)return qa[a];var b=a.charCodeAt(0),e="\\u";16>b?e+="000":256>b?e+="00":4096>b&&(e+="0");return qa[a]=e+b.toString(16)}),'"')};function sa(a){return"undefined"!==typeof JSON&&s(JSON.parse)?JSON.parse(a):ma(a)}function w(a){if("undefined"!==typeof JSON&&s(JSON.stringify))a=JSON.stringify(a);else{var b=[];oa(new na,a,b);a=b.join("")}return a};function ta(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);55296<=e&&56319>=e&&(e-=55296,d++,y(d<a.length,"Surrogate pair missing trail surrogate."),e=65536+(e<<10)+(a.charCodeAt(d)-56320));128>e?b[c++]=e:(2048>e?b[c++]=e>>6|192:(65536>e?b[c++]=e>>12|224:(b[c++]=e>>18|240,b[c++]=e>>12&63|128),b[c++]=e>>6&63|128),b[c++]=e&63|128)}return b};function z(a,b,c,d){var e;d<b?e="at least "+b:d>c&&(e=0===c?"none":"no more than "+c);e&&g(Error(a+" failed: Was called with "+d+(1===d?" argument.":" arguments.")+" Expects "+e+"."))}function A(a,b,c){var d="";switch(b){case 1:d=c?"first":"First";break;case 2:d=c?"second":"Second";break;case 3:d=c?"third":"Third";break;case 4:d=c?"fourth":"Fourth";break;default:ua.assert(l,"errorPrefix_ called with argumentNumber > 4.  Need to update it?")}return a+" failed: "+(d+" argument ")}
function B(a,b,c,d){(!d||s(c))&&"function"!=fa(c)&&g(Error(A(a,b,d)+"must be a valid function."))}function va(a,b,c){s(c)&&(!ia(c)||c===k)&&g(Error(A(a,b,j)+"must be a valid context object."))};function C(a,b){return Object.prototype.hasOwnProperty.call(a,b)}function wa(a,b){if(Object.prototype.hasOwnProperty.call(a,b))return a[b]};var ua={},xa=/[\[\].#$\/]/,ya=/[\[\].#$]/;function za(a){return u(a)&&0!==a.length&&!xa.test(a)}function Aa(a,b,c){(!c||s(b))&&Ba(A(a,1,c),b)}
function Ba(a,b,c,d){c||(c=0);d||(d=[]);s(b)||g(Error(a+"contains undefined"+Ca(d)));"function"==fa(b)&&g(Error(a+"contains a function"+Ca(d)+" with contents: "+b.toString()));Da(b)&&g(Error(a+"contains "+b.toString()+Ca(d)));1E3<c&&g(new TypeError(a+"contains a cyclic object value ("+d.slice(0,100).join(".")+"...)"));u(b)&&(b.length>10485760/3&&10485760<ta(b).length)&&g(Error(a+"contains a string greater than 10485760 utf8 bytes"+Ca(d)+" ('"+b.substring(0,50)+"...')"));if(ia(b))for(var e in b)C(b,
e)&&(".priority"!==e&&(".value"!==e&&".sv"!==e&&!za(e))&&g(Error(a+"contains an invalid key ("+e+")"+Ca(d)+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"')),d.push(e),Ba(a,b[e],c+1,d),d.pop())}function Ca(a){return 0==a.length?"":" in property '"+a.join(".")+"'"}function Ea(a,b){ia(b)||g(Error(A(a,1,l)+" must be an object containing the children to replace."));Aa(a,b,l)}
function Fa(a,b,c,d){if(!d||s(c))c!==k&&(!ha(c)&&!u(c)&&(!ia(c)||!C(c,".sv")))&&g(Error(A(a,b,d)+"must be a valid firebase priority (a string, number, or null)."))}function Ga(a,b,c){if(!c||s(b))switch(b){case "value":case "child_added":case "child_removed":case "child_changed":case "child_moved":break;default:g(Error(A(a,1,c)+'must be a valid event type: "value", "child_added", "child_removed", "child_changed", or "child_moved".'))}}
function Ha(a,b){s(b)&&!za(b)&&g(Error(A(a,2,j)+'was an invalid key: "'+b+'".  Firebase keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]").'))}function Ia(a,b){(!u(b)||0===b.length||ya.test(b))&&g(Error(A(a,1,l)+'was an invalid path: "'+b+'". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"'))}function D(a,b){".info"===E(b)&&g(Error(a+" failed: Can't modify data under /.info/"))};function F(a,b,c,d,e,f,h){this.n=a;this.path=b;this.Da=c;this.da=d;this.va=e;this.Ba=f;this.Ra=h;s(this.da)&&(s(this.Ba)&&s(this.Da))&&g("Query: Can't combine startAt(), endAt(), and limit().")}F.prototype.Nc=function(){z("Query.ref",0,0,arguments.length);return new H(this.n,this.path)};F.prototype.ref=F.prototype.Nc;
F.prototype.Xa=function(a,b){z("Query.on",2,4,arguments.length);Ga("Query.on",a,l);B("Query.on",2,b,l);var c=Ja("Query.on",arguments[2],arguments[3]);this.n.Mb(this,a,b,c.cancel,c.T);return b};F.prototype.on=F.prototype.Xa;F.prototype.ub=function(a,b,c){z("Query.off",0,3,arguments.length);Ga("Query.off",a,j);B("Query.off",2,b,j);va("Query.off",3,c);this.n.fc(this,a,b,c)};F.prototype.off=F.prototype.ub;
F.prototype.Ld=function(a,b){function c(h){f&&(f=l,e.ub(a,c),b.call(d.T,h))}z("Query.once",2,4,arguments.length);Ga("Query.once",a,l);B("Query.once",2,b,l);var d=Ja("Query.once",arguments[2],arguments[3]),e=this,f=j;this.Xa(a,c,function(b){e.ub(a,c);d.cancel&&d.cancel.call(d.T,b)})};F.prototype.once=F.prototype.Ld;
F.prototype.Ed=function(a){z("Query.limit",1,1,arguments.length);(!ha(a)||Math.floor(a)!==a||0>=a)&&g("Query.limit: First argument must be a positive integer.");return new F(this.n,this.path,a,this.da,this.va,this.Ba,this.Ra)};F.prototype.limit=F.prototype.Ed;F.prototype.Ud=function(a,b){z("Query.startAt",0,2,arguments.length);Fa("Query.startAt",1,a,j);Ha("Query.startAt",b);s(a)||(b=a=k);return new F(this.n,this.path,this.Da,a,b,this.Ba,this.Ra)};F.prototype.startAt=F.prototype.Ud;
F.prototype.zd=function(a,b){z("Query.endAt",0,2,arguments.length);Fa("Query.endAt",1,a,j);Ha("Query.endAt",b);return new F(this.n,this.path,this.Da,this.da,this.va,a,b)};F.prototype.endAt=F.prototype.zd;function Ka(a){var b={};s(a.da)&&(b.sp=a.da);s(a.va)&&(b.sn=a.va);s(a.Ba)&&(b.ep=a.Ba);s(a.Ra)&&(b.en=a.Ra);s(a.Da)&&(b.l=a.Da);s(a.da)&&(s(a.va)&&a.da===k&&a.va===k)&&(b.vf="l");return b}F.prototype.La=function(){var a=La(Ka(this));return"{}"===a?"default":a};
function Ja(a,b,c){var d={};b&&c?(d.cancel=b,B(a,3,d.cancel,j),d.T=c,va(a,4,d.T)):b&&("object"===typeof b&&b!==k?d.T=b:"function"===typeof b?d.cancel=b:g(Error(A(a,3,j)+"must either be a cancel callback or a context object.")));return d};function J(a){if(a instanceof J)return a;if(1==arguments.length){this.m=a.split("/");for(var b=0,c=0;c<this.m.length;c++)0<this.m[c].length&&(this.m[b]=this.m[c],b++);this.m.length=b;this.Z=0}else this.m=arguments[0],this.Z=arguments[1]}function E(a){return a.Z>=a.m.length?k:a.m[a.Z]}function Ma(a){var b=a.Z;b<a.m.length&&b++;return new J(a.m,b)}r=J.prototype;r.toString=function(){for(var a="",b=this.Z;b<this.m.length;b++)""!==this.m[b]&&(a+="/"+this.m[b]);return a||"/"};
r.parent=function(){if(this.Z>=this.m.length)return k;for(var a=[],b=this.Z;b<this.m.length-1;b++)a.push(this.m[b]);return new J(a,0)};r.F=function(a){for(var b=[],c=this.Z;c<this.m.length;c++)b.push(this.m[c]);if(a instanceof J)for(c=a.Z;c<a.m.length;c++)b.push(a.m[c]);else{a=a.split("/");for(c=0;c<a.length;c++)0<a[c].length&&b.push(a[c])}return new J(b,0)};r.f=function(){return this.Z>=this.m.length};
function Na(a,b){var c=E(a);if(c===k)return b;if(c===E(b))return Na(Ma(a),Ma(b));g("INTERNAL ERROR: innerPath ("+b+") is not within outerPath ("+a+")")}r.contains=function(a){var b=0;if(this.m.length>a.m.length)return l;for(;b<this.m.length;){if(this.m[b]!==a.m[b])return l;++b}return j};function Oa(){this.children={};this.sc=0;this.value=k}function Pa(a,b,c){this.Ea=a?a:"";this.Ab=b?b:k;this.z=c?c:new Oa}function K(a,b){for(var c=b instanceof J?b:new J(b),d=a,e;(e=E(c))!==k;)d=new Pa(e,d,wa(d.z.children,e)||new Oa),c=Ma(c);return d}r=Pa.prototype;r.k=function(){return this.z.value};function Qa(a,b){y("undefined"!==typeof b);a.z.value=b;Ra(a)}r.nb=function(){return 0<this.z.sc};r.f=function(){return this.k()===k&&!this.nb()};
r.w=function(a){for(var b in this.z.children)a(new Pa(b,this,this.z.children[b]))};function Sa(a,b,c,d){c&&!d&&b(a);a.w(function(a){Sa(a,b,j,d)});c&&d&&b(a)}function Ta(a,b,c){for(a=c?a:a.parent();a!==k;){if(b(a))return j;a=a.parent()}return l}r.path=function(){return new J(this.Ab===k?this.Ea:this.Ab.path()+"/"+this.Ea)};r.name=ba("Ea");r.parent=ba("Ab");
function Ra(a){if(a.Ab!==k){var b=a.Ab,c=a.Ea,d=a.f(),e=C(b.z.children,c);d&&e?(delete b.z.children[c],b.z.sc--,Ra(b)):!d&&!e&&(b.z.children[c]=a.z,b.z.sc++,Ra(b))}};function Ua(a,b){this.Oa=a?a:Va;this.ca=b?b:Wa}function Va(a,b){return a<b?-1:a>b?1:0}r=Ua.prototype;r.oa=function(a,b){return new Ua(this.Oa,this.ca.oa(a,b,this.Oa).copy(k,k,l,k,k))};r.remove=function(a){return new Ua(this.Oa,this.ca.remove(a,this.Oa).copy(k,k,l,k,k))};r.get=function(a){for(var b,c=this.ca;!c.f();){b=this.Oa(a,c.key);if(0===b)return c.value;0>b?c=c.left:0<b&&(c=c.right)}return k};
function Xa(a,b){for(var c,d=a.ca,e=k;!d.f();){c=a.Oa(b,d.key);if(0===c){if(d.left.f())return e?e.key:k;for(d=d.left;!d.right.f();)d=d.right;return d.key}0>c?d=d.left:0<c&&(e=d,d=d.right)}g(Error("Attempted to find predecessor key for a nonexistent key.  What gives?"))}r.f=function(){return this.ca.f()};r.count=function(){return this.ca.count()};r.tb=function(){return this.ca.tb()};r.Va=function(){return this.ca.Va()};r.Ca=function(a){return this.ca.Ca(a)};r.Ma=function(a){return this.ca.Ma(a)};
r.Ua=function(a){return new Ya(this.ca,a)};function Ya(a,b){this.md=b;for(this.Tb=[];!a.f();)this.Tb.push(a),a=a.left}function Za(a){if(0===a.Tb.length)return k;var b=a.Tb.pop(),c;c=a.md?a.md(b.key,b.value):{key:b.key,value:b.value};for(b=b.right;!b.f();)a.Tb.push(b),b=b.left;return c}function $a(a,b,c,d,e){this.key=a;this.value=b;this.color=c!=k?c:j;this.left=d!=k?d:Wa;this.right=e!=k?e:Wa}r=$a.prototype;
r.copy=function(a,b,c,d,e){return new $a(a!=k?a:this.key,b!=k?b:this.value,c!=k?c:this.color,d!=k?d:this.left,e!=k?e:this.right)};r.count=function(){return this.left.count()+1+this.right.count()};r.f=o(l);r.Ca=function(a){return this.left.Ca(a)||a(this.key,this.value)||this.right.Ca(a)};r.Ma=function(a){return this.right.Ma(a)||a(this.key,this.value)||this.left.Ma(a)};function ab(a){return a.left.f()?a:ab(a.left)}r.tb=function(){return ab(this).key};
r.Va=function(){return this.right.f()?this.key:this.right.Va()};r.oa=function(a,b,c){var d,e;e=this;d=c(a,e.key);e=0>d?e.copy(k,k,k,e.left.oa(a,b,c),k):0===d?e.copy(k,b,k,k,k):e.copy(k,k,k,k,e.right.oa(a,b,c));return db(e)};function eb(a){if(a.left.f())return Wa;!a.left.O()&&!a.left.left.O()&&(a=fb(a));a=a.copy(k,k,k,eb(a.left),k);return db(a)}
r.remove=function(a,b){var c,d;c=this;if(0>b(a,c.key))!c.left.f()&&(!c.left.O()&&!c.left.left.O())&&(c=fb(c)),c=c.copy(k,k,k,c.left.remove(a,b),k);else{c.left.O()&&(c=gb(c));!c.right.f()&&(!c.right.O()&&!c.right.left.O())&&(c=hb(c),c.left.left.O()&&(c=gb(c),c=hb(c)));if(0===b(a,c.key)){if(c.right.f())return Wa;d=ab(c.right);c=c.copy(d.key,d.value,k,k,eb(c.right))}c=c.copy(k,k,k,k,c.right.remove(a,b))}return db(c)};r.O=ba("color");
function db(a){a.right.O()&&!a.left.O()&&(a=ib(a));a.left.O()&&a.left.left.O()&&(a=gb(a));a.left.O()&&a.right.O()&&(a=hb(a));return a}function fb(a){a=hb(a);a.right.left.O()&&(a=a.copy(k,k,k,k,gb(a.right)),a=ib(a),a=hb(a));return a}function ib(a){var b;b=a.copy(k,k,j,k,a.right.left);return a.right.copy(k,k,a.color,b,k)}function gb(a){var b;b=a.copy(k,k,j,a.left.right,k);return a.left.copy(k,k,a.color,k,b)}
function hb(a){var b,c;b=a.left.copy(k,k,!a.left.color,k,k);c=a.right.copy(k,k,!a.right.color,k,k);return a.copy(k,k,!a.color,b,c)}function jb(){}r=jb.prototype;r.copy=function(){return this};r.oa=function(a,b){return new $a(a,b,aa,aa,aa)};r.remove=function(){return this};r.count=o(0);r.f=o(j);r.Ca=o(l);r.Ma=o(l);r.tb=o(k);r.Va=o(k);r.O=o(l);var Wa=new jb;function kb(a){this.Pb=a;this.bc="firebase:"}kb.prototype.set=function(a,b){b==k?this.Pb.removeItem(this.bc+a):this.Pb.setItem(this.bc+a,w(b))};kb.prototype.get=function(a){a=this.Pb.getItem(this.bc+a);return a==k?k:sa(a)};kb.prototype.remove=function(a){this.Pb.removeItem(this.bc+a)};function lb(){this.ib={}}lb.prototype.set=function(a,b){b==k?delete this.ib[a]:this.ib[a]=b};lb.prototype.get=function(a){return C(this.ib,a)?this.ib[a]:k};lb.prototype.remove=function(a){delete this.ib[a]};function mb(a){try{if("undefined"!==typeof window&&"undefined"!==typeof window[a]){var b=window[a];b.setItem("firebase:sentinel","cache");b.removeItem("firebase:sentinel");return new kb(b)}}catch(c){}return new lb}var nb=mb("localStorage"),ob=mb("sessionStorage");function pb(a,b,c,d){this.host=a.toLowerCase();this.domain=this.host.substr(this.host.indexOf(".")+1);this.hc=b;this.Sb=c;this.fa=d||nb.get("host:"+a)||this.host}function qb(a,b){b!==a.fa&&(a.fa=b,"s-"===a.fa.substr(0,2)&&nb.set("host:"+a.host,a.fa))}pb.prototype.toString=function(){return(this.hc?"https://":"http://")+this.host};function rb(){};function sb(){this.B=[];this.rc=[];this.ud=[];this.Zb=[];this.Zb[0]=128;for(var a=1;64>a;++a)this.Zb[a]=0;this.reset()}la(sb,rb);sb.prototype.reset=function(){this.B[0]=1732584193;this.B[1]=4023233417;this.B[2]=2562383102;this.B[3]=271733878;this.B[4]=3285377520;this.Vc=this.ob=0};
function tb(a,b){var c;c||(c=0);for(var d=a.ud,e=c;e<c+64;e+=4)d[e/4]=b[e]<<24|b[e+1]<<16|b[e+2]<<8|b[e+3];for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}c=a.B[0];for(var h=a.B[1],i=a.B[2],m=a.B[3],n=a.B[4],p,e=0;80>e;e++)40>e?20>e?(f=m^h&(i^m),p=1518500249):(f=h^i^m,p=1859775393):60>e?(f=h&i|m&(h|i),p=2400959708):(f=h^i^m,p=3395469782),f=(c<<5|c>>>27)+f+n+p+d[e]&4294967295,n=m,m=i,i=(h<<30|h>>>2)&4294967295,h=c,c=f;a.B[0]=a.B[0]+c&4294967295;a.B[1]=a.B[1]+h&
4294967295;a.B[2]=a.B[2]+i&4294967295;a.B[3]=a.B[3]+m&4294967295;a.B[4]=a.B[4]+n&4294967295}sb.prototype.update=function(a,b){s(b)||(b=a.length);var c=this.rc,d=this.ob,e=0;if(u(a))for(;e<b;)c[d++]=a.charCodeAt(e++),64==d&&(tb(this,c),d=0);else for(;e<b;)c[d++]=a[e++],64==d&&(tb(this,c),d=0);this.ob=d;this.Vc+=b};var ub=Array.prototype,vb=ub.forEach?function(a,b,c){ub.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=u(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},wb=ub.map?function(a,b,c){return ub.map.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=Array(d),f=u(a)?a.split(""):a,h=0;h<d;h++)h in f&&(e[h]=b.call(c,f[h],h,a));return e},xb=ub.every?function(a,b,c){return ub.every.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=u(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&!b.call(c,e[f],f,
a))return l;return j};var yb,zb,Ab,Bb;function Cb(){return ca.navigator?ca.navigator.userAgent:k}Bb=Ab=zb=yb=l;var Db;if(Db=Cb()){var Eb=ca.navigator;yb=0==Db.indexOf("Opera");zb=!yb&&-1!=Db.indexOf("MSIE");Ab=!yb&&-1!=Db.indexOf("WebKit");Bb=!yb&&!Ab&&"Gecko"==Eb.product}var Fb=zb,Gb=Bb,Hb=Ab;var Ib;if(yb&&ca.opera){var Jb=ca.opera.version;"function"==typeof Jb&&Jb()}else Gb?Ib=/rv\:([^\);]+)(\)|;)/:Fb?Ib=/MSIE\s+([^\);]+)(\)|;)/:Hb&&(Ib=/WebKit\/(\S+)/),Ib&&Ib.exec(Cb());var Kb=k,Lb=k;
function Mb(a,b){ga(a)||g(Error("encodeByteArray takes an array as a parameter"));if(!Kb){Kb={};Lb={};for(var c=0;65>c;c++)Kb[c]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(c),Lb[c]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(c)}for(var c=b?Lb:Kb,d=[],e=0;e<a.length;e+=3){var f=a[e],h=e+1<a.length,i=h?a[e+1]:0,m=e+2<a.length,n=m?a[e+2]:0,p=f>>2,f=(f&3)<<4|i>>4,i=(i&15)<<2|n>>6,n=n&63;m||(n=64,h||(i=64));d.push(c[p],c[f],c[i],c[n])}return d.join("")}
;var Nb,Ob=1;Nb=function(){return Ob++};function y(a,b){a||g(Error("Firebase INTERNAL ASSERT FAILED:"+b))}function Pb(a){var b=ta(a),a=new sb;a.update(b);var b=[],c=8*a.Vc;56>a.ob?a.update(a.Zb,56-a.ob):a.update(a.Zb,64-(a.ob-56));for(var d=63;56<=d;d--)a.rc[d]=c&255,c/=256;tb(a,a.rc);for(d=c=0;5>d;d++)for(var e=24;0<=e;e-=8)b[c++]=a.B[d]>>e&255;return Mb(b)}
function Qb(){for(var a="",b=0;b<arguments.length;b++)a=ga(arguments[b])?a+Qb.apply(k,arguments[b]):"object"===typeof arguments[b]?a+w(arguments[b]):a+arguments[b],a+=" ";return a}var Rb=k,Sb=j;function L(){Sb===j&&(Sb=l,Rb===k&&ob.get("logging_enabled")===j&&Tb(j));if(Rb){var a=Qb.apply(k,arguments);Rb(a)}}function Ub(a){return function(){L(a,arguments)}}
function Vb(){if("undefined"!==typeof console){var a="FIREBASE INTERNAL ERROR: "+Qb.apply(k,arguments);"undefined"!==typeof console.error?console.error(a):console.log(a)}}function Wb(){var a=Qb.apply(k,arguments);g(Error("FIREBASE FATAL ERROR: "+a))}function M(){if("undefined"!==typeof console){var a="FIREBASE WARNING: "+Qb.apply(k,arguments);"undefined"!==typeof console.warn?console.warn(a):console.log(a)}}
function Da(a){return ha(a)&&(a!=a||a==Number.POSITIVE_INFINITY||a==Number.NEGATIVE_INFINITY)}function Xb(a,b){return a!==b?a===k?-1:b===k?1:typeof a!==typeof b?"number"===typeof a?-1:1:a>b?1:-1:0}function Yb(a,b){if(a===b)return 0;var c=Zb(a),d=Zb(b);return c!==k?d!==k?c-d:-1:d!==k?1:a<b?-1:1}function $b(a,b){if(b&&a in b)return b[a];g(Error("Missing required key ("+a+") in object: "+w(b)))}
function La(a){if("object"!==typeof a||a===k)return w(a);var b=[],c;for(c in a)b.push(c);b.sort();c="{";for(var d=0;d<b.length;d++)0!==d&&(c+=","),c+=w(b[d]),c+=":",c+=La(a[b[d]]);return c+"}"}function ac(a,b){if(a.length<=b)return[a];for(var c=[],d=0;d<a.length;d+=b)d+b>a?c.push(a.substring(d,a.length)):c.push(a.substring(d,d+b));return c}function bc(a,b){if("array"==fa(a))for(var c=0;c<a.length;++c)b(c,a[c]);else cc(a,b)}
function dc(a){y(!Da(a));var b,c,d,e;0===a?(d=c=0,b=-Infinity===1/a?1:0):(b=0>a,a=Math.abs(a),a>=Math.pow(2,-1022)?(d=Math.min(Math.floor(Math.log(a)/Math.LN2),1023),c=d+1023,d=Math.round(a*Math.pow(2,52-d)-Math.pow(2,52))):(c=0,d=Math.round(a/Math.pow(2,-1074))));e=[];for(a=52;a;a-=1)e.push(d%2?1:0),d=Math.floor(d/2);for(a=11;a;a-=1)e.push(c%2?1:0),c=Math.floor(c/2);e.push(b?1:0);e.reverse();b=e.join("");c="";for(a=0;64>a;a+=8)d=parseInt(b.substr(a,8),2).toString(16),1===d.length&&(d="0"+d),c+=d;
return c.toLowerCase()}var ec=/^-?\d{1,10}$/;function Zb(a){return ec.test(a)&&(a=Number(a),-2147483648<=a&&2147483647>=a)?a:k}function fc(a){try{a()}catch(b){setTimeout(function(){g(b)})}};function gc(a,b){this.D=a;y(this.D!==k,"LeafNode shouldn't be created with null value.");this.Ya="undefined"!==typeof b?b:k}r=gc.prototype;r.N=o(j);r.j=ba("Ya");r.za=function(a){return new gc(this.D,a)};r.M=function(){return N};r.Q=function(a){return E(a)===k?this:N};r.ea=o(k);r.H=function(a,b){return(new O).H(a,b).za(this.Ya)};r.ya=function(a,b){var c=E(a);return c===k?b:this.H(c,N.ya(Ma(a),b))};r.f=o(l);r.Ub=o(0);r.V=function(a){return a&&this.j()!==k?{".value":this.k(),".priority":this.j()}:this.k()};
r.hash=function(){var a="";this.j()!==k&&(a+="priority:"+hc(this.j())+":");var b=typeof this.D,a=a+(b+":"),a="number"===b?a+dc(this.D):a+this.D;return Pb(a)};r.k=ba("D");r.toString=function(){return"string"===typeof this.D?'"'+this.D+'"':this.D};function ic(a,b){return Xb(a.ia,b.ia)||Yb(a.name,b.name)}function jc(a,b){return Yb(a.name,b.name)}function kc(a,b){return Yb(a,b)};function O(a,b){this.o=a||new Ua(kc);this.Ya="undefined"!==typeof b?b:k}r=O.prototype;r.N=o(l);r.j=ba("Ya");r.za=function(a){return new O(this.o,a)};r.H=function(a,b){var c=this.o.remove(a);b&&b.f()&&(b=k);b!==k&&(c=c.oa(a,b));return b&&b.j()!==k?new lc(c,k,this.Ya):new O(c,this.Ya)};r.ya=function(a,b){var c=E(a);if(c===k)return b;var d=this.M(c).ya(Ma(a),b);return this.H(c,d)};r.f=function(){return this.o.f()};r.Ub=function(){return this.o.count()};var mc=/^\d+$/;r=O.prototype;
r.V=function(a){if(this.f())return k;var b={},c=0,d=0,e=j;this.w(function(f,h){b[f]=h.V(a);c++;e&&mc.test(f)?d=Math.max(d,Number(f)):e=l});if(!a&&e&&d<2*c){var f=[],h;for(h in b)f[h]=b[h];return f}a&&this.j()!==k&&(b[".priority"]=this.j());return b};r.hash=function(){var a="";this.j()!==k&&(a+="priority:"+hc(this.j())+":");this.w(function(b,c){var d=c.hash();""!==d&&(a+=":"+b+":"+d)});return""===a?"":Pb(a)};r.M=function(a){a=this.o.get(a);return a===k?N:a};
r.Q=function(a){var b=E(a);return b===k?this:this.M(b).Q(Ma(a))};r.ea=function(a){return Xa(this.o,a)};r.cd=function(){return this.o.tb()};r.dd=function(){return this.o.Va()};r.w=function(a){return this.o.Ca(a)};r.yc=function(a){return this.o.Ma(a)};r.Ua=function(){return this.o.Ua()};r.toString=function(){var a="{",b=j;this.w(function(c,d){b?b=l:a+=", ";a+='"'+c+'" : '+d.toString()});return a+="}"};var N=new O;function lc(a,b,c){O.call(this,a,c);b===k&&(b=new Ua(ic),a.Ca(function(a,c){b=b.oa({name:a,ia:c.j()},c)}));this.ua=b}la(lc,O);r=lc.prototype;r.H=function(a,b){var c=this.M(a),d=this.o,e=this.ua;c!==k&&(d=d.remove(a),e=e.remove({name:a,ia:c.j()}));b&&b.f()&&(b=k);b!==k&&(d=d.oa(a,b),e=e.oa({name:a,ia:b.j()},b));return new lc(d,e,this.j())};r.ea=function(a,b){var c=Xa(this.ua,{name:a,ia:b.j()});return c?c.name:k};r.w=function(a){return this.ua.Ca(function(b,c){return a(b.name,c)})};
r.yc=function(a){return this.ua.Ma(function(b,c){return a(b.name,c)})};r.Ua=function(){return this.ua.Ua(function(a,b){return{key:a.name,value:b}})};r.cd=function(){return this.ua.f()?k:this.ua.tb().name};r.dd=function(){return this.ua.f()?k:this.ua.Va().name};function Q(a,b){if(a===k)return N;var c=k;"object"===typeof a&&".priority"in a?c=a[".priority"]:"undefined"!==typeof b&&(c=b);y(c===k||"string"===typeof c||"number"===typeof c||"object"===typeof c&&".sv"in c);"object"===typeof a&&(".value"in a&&a[".value"]!==k)&&(a=a[".value"]);if("object"!==typeof a||".sv"in a)return new gc(a,c);if(a instanceof Array){var d=N;cc(a,function(b,c){if(C(a,c)&&"."!==c.substring(0,1)){var e=Q(b);if(e.N()||!e.f())d=d.H(c,e)}});return d.za(c)}var e=[],f={},h=l;bc(a,function(b,
c){if("string"!==typeof c||"."!==c.substring(0,1)){var d=Q(a[c]);d.f()||(h=h||d.j()!==k,e.push({name:c,ia:d.j()}),f[c]=d)}});var i=nc(e,f,l);if(h){var m=nc(e,f,j);return new lc(i,m,c)}return new O(i,c)}var oc=Math.log(2);function qc(a){this.count=parseInt(Math.log(a+1)/oc);this.$c=this.count-1;this.wd=a+1&parseInt(Array(this.count+1).join("1"),2)}
function nc(a,b,c){function d(d,f){var h=n-d,p=n;n-=d;var q=a[h].name,h=new $a(c?a[h]:q,b[q],f,k,e(h+1,p));i?i.left=h:m=h;i=h}function e(d,f){var h=f-d;if(0==h)return k;if(1==h){var h=a[d].name,i=c?a[d]:h;return new $a(i,b[h],l,k,k)}var i=parseInt(h/2)+d,m=e(d,i),n=e(i+1,f),h=a[i].name,i=c?a[i]:h;return new $a(i,b[h],l,m,n)}var f=c?ic:jc;a.sort(f);var h,f=new qc(a.length),i=k,m=k,n=a.length;for(h=0;h<f.count;++h){var p=!(f.wd&1<<f.$c);f.$c--;var q=Math.pow(2,f.count-(h+1));p?d(q,l):(d(q,l),d(q,j))}h=
m;f=c?ic:kc;return h!==k?new Ua(f,h):new Ua(f)}function hc(a){return"number"===typeof a?"number:"+dc(a):"string:"+a};function R(a,b){this.z=a;this.ec=b}R.prototype.V=function(){z("Firebase.DataSnapshot.val",0,0,arguments.length);return this.z.V()};R.prototype.val=R.prototype.V;R.prototype.Ad=function(){z("Firebase.DataSnapshot.exportVal",0,0,arguments.length);return this.z.V(j)};R.prototype.exportVal=R.prototype.Ad;R.prototype.F=function(a){z("Firebase.DataSnapshot.child",0,1,arguments.length);ha(a)&&(a=String(a));Ia("Firebase.DataSnapshot.child",a);var b=new J(a),c=this.ec.F(b);return new R(this.z.Q(b),c)};
R.prototype.child=R.prototype.F;R.prototype.Cc=function(a){z("Firebase.DataSnapshot.hasChild",1,1,arguments.length);Ia("Firebase.DataSnapshot.hasChild",a);var b=new J(a);return!this.z.Q(b).f()};R.prototype.hasChild=R.prototype.Cc;R.prototype.j=function(){z("Firebase.DataSnapshot.getPriority",0,0,arguments.length);return this.z.j()};R.prototype.getPriority=R.prototype.j;
R.prototype.forEach=function(a){z("Firebase.DataSnapshot.forEach",1,1,arguments.length);B("Firebase.DataSnapshot.forEach",1,a,l);if(this.z.N())return l;var b=this;return this.z.w(function(c,d){return a(new R(d,b.ec.F(c)))})};R.prototype.forEach=R.prototype.forEach;R.prototype.nb=function(){z("Firebase.DataSnapshot.hasChildren",0,0,arguments.length);return this.z.N()?l:!this.z.f()};R.prototype.hasChildren=R.prototype.nb;
R.prototype.name=function(){z("Firebase.DataSnapshot.name",0,0,arguments.length);return this.ec.name()};R.prototype.name=R.prototype.name;R.prototype.Ub=function(){z("Firebase.DataSnapshot.numChildren",0,0,arguments.length);return this.z.Ub()};R.prototype.numChildren=R.prototype.Ub;R.prototype.Nc=function(){z("Firebase.DataSnapshot.ref",0,0,arguments.length);return this.ec};R.prototype.ref=R.prototype.Nc;function rc(a){y("array"==fa(a)&&0<a.length);this.vd=a;this.sb={}}rc.prototype.Ac=function(){};rc.prototype.Xc=function(a){for(var b=this.sb[a]||[],c=0;c<b.length;c++)b[c].X.apply(b[c].T,Array.prototype.slice.call(arguments,1))};rc.prototype.Xa=function(a,b,c){sc(this,a);this.sb[a]=this.sb[a]||[];this.sb[a].push({X:b,T:c});(a=this.Ac(a))&&b.apply(c,a)};rc.prototype.ub=function(a,b,c){sc(this,a);for(var a=this.sb[a]||[],d=0;d<a.length;d++)if(a[d].X===b&&(!c||c===a[d].T)){a.splice(d,1);break}};
function sc(a,b){var c=a.vd,d;a:{d=function(a){return a===b};for(var e=c.length,f=u(c)?c.split(""):c,h=0;h<e;h++)if(h in f&&d.call(aa,f[h])){d=h;break a}d=-1}y(0>d?k:u(c)?c.charAt(d):c[d],"Unknown event: "+b)};function tc(){rc.call(this,["visible"]);var a,b;"undefined"!==typeof document&&"undefined"!==typeof document.addEventListener&&("undefined"!==typeof document.hidden?(b="visibilitychange",a="hidden"):"undefined"!==typeof document.mozHidden?(b="mozvisibilitychange",a="mozHidden"):"undefined"!==typeof document.msHidden?(b="msvisibilitychange",a="msHidden"):"undefined"!==typeof document.webkitHidden&&(b="webkitvisibilitychange",a="webkitHidden"));this.gb=j;if(b){var c=this;document.addEventListener(b,
function(){var b=!document[a];if(b!==c.gb){c.gb=b;c.Xc("visible",b)}},l)}}la(tc,rc);ea(tc);tc.prototype.Ac=function(a){y("visible"===a);return[this.gb]};function uc(a){this.Jc=a;this.ac=[];this.Qa=0;this.tc=-1;this.Ka=k};function cc(a,b){for(var c in a)b.call(aa,a[c],c,a)}function vc(a){var b={},c;for(c in a)b[c]=a[c];return b};function wc(){this.jb={}}function xc(a,b,c){s(c)||(c=1);C(a.jb,b)||(a.jb[b]=0);a.jb[b]+=c}wc.prototype.get=function(){return vc(this.jb)};function yc(a){this.xd=a;this.Qb=k}yc.prototype.get=function(){var a=this.xd.get(),b=vc(a);if(this.Qb)for(var c in this.Qb)b[c]-=this.Qb[c];this.Qb=a;return b};function zc(a,b){this.Sc={};this.kc=new yc(a);this.u=b;setTimeout(v(this.kd,this),10+6E4*Math.random())}zc.prototype.kd=function(){var a=this.kc.get(),b={},c=l,d;for(d in a)0<a[d]&&C(this.Sc,d)&&(b[d]=a[d],c=j);c&&(a=this.u,a.P&&(b={c:b},a.e("reportStats",b),a.Ga("s",b)));setTimeout(v(this.kd,this),6E5*Math.random())};var Ac={},Bc={};function Cc(a){a=a.toString();Ac[a]||(Ac[a]=new wc);return Ac[a]};function Dc(){this.set={}}r=Dc.prototype;r.add=function(a,b){this.set[a]=b!==k?b:j};r.contains=function(a){return C(this.set,a)};r.get=function(a){return this.contains(a)?this.set[a]:aa};r.remove=function(a){delete this.set[a]};r.f=function(){var a;a:{for(a in this.set){a=l;break a}a=j}return a};r.count=function(){var a=0,b;for(b in this.set)a++;return a};function Ec(a,b){for(var c in a.set)C(a.set,c)&&b(c,a.set[c])}r.keys=function(){var a=[],b;for(b in this.set)C(this.set,b)&&a.push(b);return a};var Fc="pLPCommand",Gc="pRTLPCB";function Hc(a,b,c){this.uc=a;this.e=Ub(a);this.Xd=b;this.$=Cc(b);this.jc=c;this.kb=l;this.Lb=function(a){b.host!==b.fa&&(a.ns=b.Sb);var c=[],f;for(f in a)a.hasOwnProperty(f)&&c.push(f+"="+a[f]);return(b.hc?"https://":"http://")+b.fa+"/.lp?"+c.join("&")}}var Ic,Jc;
Hc.prototype.open=function(a,b){function c(){if(!d.Ja){d.ka=new Kc(function(a,b,c,e,f){xc(d.$,"bytes_received",w(arguments).length);if(d.ka)if(d.ba&&(clearTimeout(d.ba),d.ba=k),d.kb=j,"start"==a)d.id=b,d.jd=c;else if("close"===a)if(b){d.ka.ic=l;var h=d.fd;h.tc=b;h.Ka=function(){d.Fa()};h.tc<h.Qa&&(h.Ka(),h.Ka=k)}else d.Fa();else g(Error("Unrecognized command received: "+a))},function(a,b){xc(d.$,"bytes_received",w(arguments).length);var c=d.fd;for(c.ac[a]=b;c.ac[c.Qa];){var e=c.ac[c.Qa];delete c.ac[c.Qa];
for(var f=0;f<e.length;++f)if(e[f]){var h=c;fc(function(){h.Jc(e[f])})}if(c.Qa===c.tc){c.Ka&&(clearTimeout(c.Ka),c.Ka(),c.Ka=k);break}c.Qa++}},function(){d.Fa()},d.Lb);var a={start:"t"};a.ser=Math.floor(1E8*Math.random());d.ka.mc&&(a.cb=d.ka.mc);a.v="5";d.jc&&(a.s=d.jc);a=d.Lb(a);d.e("Connecting via long-poll to "+a);Lc(d.ka,a,function(){})}}this.Zc=0;this.R=b;this.fd=new uc(a);this.Ja=l;var d=this;this.ba=setTimeout(function(){d.e("Timed out trying to connect.");d.Fa();d.ba=k},3E4);if("complete"===
document.readyState)c();else{var e=l,f=function(){document.body?e||(e=j,c()):setTimeout(f,10)};document.addEventListener?(document.addEventListener("DOMContentLoaded",f,l),window.addEventListener("load",f,l)):document.attachEvent&&(document.attachEvent("onreadystatechange",function(){"complete"===document.readyState&&f()},l),window.attachEvent("onload",f,l))}};
Hc.prototype.start=function(){var a=this.ka,b=this.jd;a.Gd=this.id;a.Hd=b;for(a.pc=j;Mc(a););a=this.id;b=this.jd;this.Wa=document.createElement("iframe");var c={dframe:"t"};c.id=a;c.pw=b;a=this.Lb(c);this.Wa.src=a;this.Wa.style.display="none";document.body.appendChild(this.Wa)};Hc.isAvailable=function(){return!Jc&&!("object"===typeof window&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))&&!("object"===typeof Windows&&"object"===typeof Windows.Wd)&&(Ic||j)};
Hc.prototype.Ib=function(){this.Ja=j;this.ka&&(this.ka.close(),this.ka=k);this.Wa&&(document.body.removeChild(this.Wa),this.Wa=k);this.ba&&(clearTimeout(this.ba),this.ba=k)};Hc.prototype.Fa=function(){this.Ja||(this.e("Longpoll is closing itself"),this.Ib(),this.R&&(this.R(this.kb),this.R=k))};Hc.prototype.close=function(){this.Ja||(this.e("Longpoll is being closed."),this.Ib())};
Hc.prototype.send=function(a){a=w(a);xc(this.$,"bytes_sent",a.length);for(var a=ta(a),a=Mb(a,j),a=ac(a,1840),b=0;b<a.length;b++){var c=this.ka;c.Cb.push({Qd:this.Zc,Vd:a.length,ad:a[b]});c.pc&&Mc(c);this.Zc++}};
function Kc(a,b,c,d){this.Lb=d;this.ha=c;this.Lc=new Dc;this.Cb=[];this.vc=Math.floor(1E8*Math.random());this.ic=j;this.mc=Nb();window[Fc+this.mc]=a;window[Gc+this.mc]=b;a=document.createElement("iframe");a.style.display="none";if(document.body){document.body.appendChild(a);try{a.contentWindow.document||L("No IE domain setting required")}catch(e){a.src="javascript:void((function(){document.open();document.domain='"+document.domain+"';document.close();})())"}}else g("Document body has not initialized. Wait to initialize Firebase until after the document is ready.");
a.contentDocument?a.Aa=a.contentDocument:a.contentWindow?a.Aa=a.contentWindow.document:a.document&&(a.Aa=a.document);this.Y=a;a="";this.Y.src&&"javascript:"===this.Y.src.substr(0,11)&&(a='<script>document.domain="'+document.domain+'";<\/script>');a="<html><body>"+a+"</body></html>";try{this.Y.Aa.open(),this.Y.Aa.write(a),this.Y.Aa.close()}catch(f){L("frame writing exception"),f.stack&&L(f.stack),L(f)}}
Kc.prototype.close=function(){this.pc=l;if(this.Y){this.Y.Aa.body.innerHTML="";var a=this;setTimeout(function(){a.Y!==k&&(document.body.removeChild(a.Y),a.Y=k)},0)}var b=this.ha;b&&(this.ha=k,b())};
function Mc(a){if(a.pc&&a.ic&&a.Lc.count()<(0<a.Cb.length?2:1)){a.vc++;var b={};b.id=a.Gd;b.pw=a.Hd;b.ser=a.vc;for(var b=a.Lb(b),c="",d=0;0<a.Cb.length;)if(1870>=a.Cb[0].ad.length+30+c.length){var e=a.Cb.shift(),c=c+"&seg"+d+"="+e.Qd+"&ts"+d+"="+e.Vd+"&d"+d+"="+e.ad;d++}else break;var b=b+c,f=a.vc;a.Lc.add(f);var h=function(){a.Lc.remove(f);Mc(a)},i=setTimeout(h,25E3);Lc(a,b,function(){clearTimeout(i);h()});return j}return l}
function Lc(a,b,c){setTimeout(function(){try{if(a.ic){var d=a.Y.Aa.createElement("script");d.type="text/javascript";d.async=j;d.src=b;d.onload=d.onreadystatechange=function(){var a=d.readyState;if(!a||"loaded"===a||"complete"===a)d.onload=d.onreadystatechange=k,d.parentNode&&d.parentNode.removeChild(d),c()};d.onerror=function(){L("Long-poll script failed to load: "+b);a.ic=l;a.close()};a.Y.Aa.body.appendChild(d)}}catch(e){}},1)};var Nc=k;"undefined"!==typeof MozWebSocket?Nc=MozWebSocket:"undefined"!==typeof WebSocket&&(Nc=WebSocket);function S(a,b,c){this.uc=a;this.e=Ub(this.uc);this.frames=this.qb=k;this.Uc=0;this.$=Cc(b);this.Pa=(b.hc?"wss://":"ws://")+b.fa+"/.ws?v=5";b.host!==b.fa&&(this.Pa=this.Pa+"&ns="+b.Sb);c&&(this.Pa=this.Pa+"&s="+c)}var Oc;
S.prototype.open=function(a,b){this.ha=b;this.Id=a;this.e("Websocket connecting to "+this.Pa);this.W=new Nc(this.Pa);this.kb=l;nb.set("previous_websocket_failure",j);var c=this;this.ba=setTimeout(function(){c.e("Websocket timed out trying to connect.");Pc(c);c.Fa()},3E4);this.W.onopen=function(){c.e("Websocket connected.");c.kb=j;Pc(c);nb.remove("previous_websocket_failure")};this.W.onclose=function(){c.e("Websocket connection was disconnected.");c.W=k;c.Fa()};this.W.onmessage=function(a){if(c.W!==
k)if(a=a.data,xc(c.$,"bytes_received",a.length),Qc(c),c.frames!==k)Rc(c,a);else{a:{y(c.frames===k,"We already have a frame buffer");if(6>=a.length){var b=Number(a);if(!isNaN(b)){c.Uc=b;c.frames=[];a=k;break a}}c.Uc=1;c.frames=[]}a!==k&&Rc(c,a)}};this.W.onerror=function(a){c.e("WebSocket error.  Closing connection.");a.data&&c.e(a.data);c.Fa()}};S.prototype.start=function(){};
S.isAvailable=function(){var a=l;if("undefined"!==typeof navigator&&navigator.userAgent){var b=navigator.userAgent.match(/Android ([0-9]{0,}\.[0-9]{0,})/);b&&1<b.length&&4.4>parseFloat(b[1])&&(a=j)}return!a&&Nc!==k&&!Oc};function Rc(a,b){a.frames.push(b);if(a.frames.length==a.Uc){var c=a.frames.join("");a.frames=k;c=sa(c);a.Id(c)}}S.prototype.send=function(a){Qc(this);a=w(a);xc(this.$,"bytes_sent",a.length);a=ac(a,16384);1<a.length&&this.W.send(String(a.length));for(var b=0;b<a.length;b++)this.W.send(a[b])};
S.prototype.Ib=function(){this.Ja=j;Pc(this);this.qb&&(clearInterval(this.qb),this.qb=k);this.W&&(this.W.close(),this.W=k)};S.prototype.Fa=function(){this.Ja||(this.e("WebSocket is closing itself"),this.Ib(),this.ha&&(this.ha(this.kb),this.ha=k))};S.prototype.close=function(){this.Ja||(this.e("WebSocket is being closed"),this.Ib())};function Qc(a){clearInterval(a.qb);a.qb=setInterval(function(){a.W&&a.W.send("0");Qc(a)},45E3)}function Pc(a){a.ba&&(clearTimeout(a.ba),a.ba=k)};function Sc(){var a=[];S&&S.isAvailable()&&!nb.get("previous_websocket_failure")?a.push(S):bc(Tc,function(b,c){c&&c.isAvailable()&&a.push(c)});this.lc=a}var Tc=[Hc,{isAvailable:o(l)},S];function Uc(a,b,c,d,e,f){this.id=a;this.e=Ub("c:"+this.id+":");this.Jc=c;this.xb=d;this.R=e;this.Ic=f;this.K=b;this.$b=[];this.Yc=0;this.Wc=new Sc;this.wa=0;this.e("Connection created");Vc(this)}function Vc(a){var b;var c=a.Wc;0<c.lc.length?b=c.lc[0]:g(Error("No transports available"));a.L=new b("c:"+a.id+":"+a.Yc++,a.K);var d=Wc(a,a.L),e=Xc(a,a.L);a.Jb=a.L;a.Hb=a.L;a.A=k;setTimeout(function(){a.L&&a.L.open(d,e)},0)}
function Xc(a,b){return function(c){b===a.L?(a.L=k,!c&&0===a.wa?(a.e("Realtime connection failed."),"s-"===a.K.fa.substr(0,2)&&(nb.remove("host:"+a.K.host),a.K.fa=a.K.host)):1===a.wa&&a.e("Realtime connection lost."),a.close()):b===a.A?(c=a.A,a.A=k,(a.Jb===c||a.Hb===c)&&a.close()):a.e("closing an old connection")}}
function Wc(a,b){return function(c){if(2!=a.wa)if(b===a.Hb){var d=$b("t",c),c=$b("d",c);if("c"==d){if(d=$b("t",c),"d"in c)if(c=c.d,"h"===d){var d=c.ts,e=c.v,f=c.h;a.jc=c.s;qb(a.K,f);if(0==a.wa&&(a.L.start(),c=a.L,a.e("Realtime connection established."),a.L=c,a.wa=1,a.xb&&(a.xb(d),a.xb=k),"5"!==e&&M("Protocol version mismatch detected"),c=1<a.Wc.lc.length?a.Wc.lc[1]:k))a.A=new c("c:"+a.id+":"+a.Yc++,a.K,a.jc),a.A.open(Wc(a,a.A),Xc(a,a.A))}else if("n"===d){a.e("recvd end transmission on primary");a.Hb=
a.A;for(c=0;c<a.$b.length;++c)a.Xb(a.$b[c]);a.$b=[];Yc(a)}else"s"===d?(a.e("Connection shutdown command received. Shutting down..."),a.Ic&&(a.Ic(c),a.Ic=k),a.R=k,a.close()):"r"===d?(a.e("Reset packet received.  New host: "+c),qb(a.K,c),1===a.wa?a.close():($c(a),Vc(a))):"e"===d?Vb("Server Error: "+c):Vb("Unknown control packet command: "+d)}else"d"==d&&a.Xb(c)}else b===a.A?(d=$b("t",c),c=$b("d",c),"c"==d?"t"in c&&(c=c.t,"a"===c?(a.A.start(),a.e("sending client ack on secondary"),a.A.send({t:"c",d:{t:"a",
d:{}}}),a.e("Ending transmission on primary"),a.L.send({t:"c",d:{t:"n",d:{}}}),a.Jb=a.A,Yc(a)):"r"===c&&(a.e("Got a reset on secondary, closing it"),a.A.close(),(a.Jb===a.A||a.Hb===a.A)&&a.close())):"d"==d?a.$b.push(c):g(Error("Unknown protocol layer: "+d))):a.e("message on old connection")}}Uc.prototype.od=function(a){a={t:"d",d:a};1!==this.wa&&g("Connection is not connected");this.Jb.send(a)};
function Yc(a){a.Jb===a.A&&a.Hb===a.A&&(a.e("cleaning up and promoting a connection: "+a.A.uc),a.L=a.A,a.A=k)}Uc.prototype.Xb=function(a){this.Jc(a)};Uc.prototype.close=function(){2!==this.wa&&(this.e("Closing realtime connection."),this.wa=2,$c(this),this.R&&(this.R(),this.R=k))};function $c(a){a.e("Shutting down all connections");a.L&&(a.L.close(),a.L=k);a.A&&(a.A.close(),a.A=k)};function ad(){rc.call(this,["online"]);this.yb=j;if("undefined"!==typeof window&&"undefined"!==typeof window.addEventListener){var a=this;window.addEventListener("online",function(){a.yb||a.Xc("online",j);a.yb=j},l);window.addEventListener("offline",function(){a.yb&&a.Xc("online",l);a.yb=l},l)}}la(ad,rc);ea(ad);ad.prototype.Ac=function(a){y("online"===a);return[this.yb]};function bd(a,b,c,d,e,f){this.id=cd++;this.e=Ub("p:"+this.id+":");this.Na=j;this.ga={};this.U=[];this.zb=0;this.wb=[];this.P=l;this.qa=1E3;this.Rb=3E5;this.Yb=b||da;this.Wb=c||da;this.vb=d||da;this.Kc=e||da;this.Bc=f||da;this.K=a;this.Oc=k;this.Gb={};this.Pd=0;this.rb=this.Fc=k;dd(this,0);tc.mb().Xa("visible",this.Kd,this);-1===a.host.indexOf("fblocal")&&ad.mb().Xa("online",this.Jd,this)}var cd=0,ed=0;r=bd.prototype;
r.Ga=function(a,b,c){var d=++this.Pd,a={r:d,a:a,b:b};this.e(w(a));y(this.P,"sendRequest_ call when we're not connected not allowed.");this.ja.od(a);c&&(this.Gb[d]=c)};function fd(a,b,c,d,e){a.e("Listen on "+b+" for "+c);var f={p:b},d=wb(d,function(a){return Ka(a)});"{}"!==c&&(f.q=d);f.h=a.Bc(b);a.Ga("l",f,function(d){a.e("listen response",d);d=d.s;"ok"!==d&&gd(a,b,c);e&&e(d)})}
r.hb=function(a,b,c){this.Ha={yd:a,bd:l,X:b,Nb:c};this.e("Authenticating using credential: "+this.Ha);hd(this);if(!(b=40==a.length))a:{var d;try{var e=a.split(".");if(3!==e.length){b=l;break a}var f;b:{try{if("undefined"!==typeof atob){f=atob(e[1]);break b}}catch(h){L("base64DecodeIfNativeSupport failed: ",h)}f=k}f!==k&&(d=sa(f))}catch(i){L("isAdminAuthToken_ failed",i)}b="object"===typeof d&&wa(d,"admin")===j}b&&(this.e("Admin auth credential detected.  Reducing max reconnect time."),this.Rb=3E4)};
r.Kb=function(a){delete this.Ha;this.vb(l);this.P&&this.Ga("unauth",{},function(b){a(b.s)})};function hd(a){var b=a.Ha;a.P&&b&&a.Ga("auth",{cred:b.yd},function(c){var d=c.s,c=c.d||"error";"ok"!==d&&a.Ha===b&&delete a.Ha;a.vb("ok"===d);b.bd?"ok"!==d&&b.Nb&&b.Nb(d,c):(b.bd=j,b.X&&b.X(d,c))})}function id(a,b,c,d){b=b.toString();gd(a,b,c)&&a.P&&(a.e("Unlisten on "+b+" for "+c),b={p:b},d=wb(d,function(a){return Ka(a)}),"{}"!==c&&(b.q=d),a.Ga("u",b))}
function jd(a,b,c,d){a.P?kd(a,"o",b,c,d):a.wb.push({Mc:b,action:"o",data:c,C:d})}r.Hc=function(a,b){this.P?kd(this,"oc",a,k,b):this.wb.push({Mc:a,action:"oc",data:k,C:b})};function kd(a,b,c,d,e){c={p:c,d:d};a.e("onDisconnect "+b,c);a.Ga(b,c,function(a){e&&setTimeout(function(){e(a.s)},0)})}r.put=function(a,b,c,d){ld(this,"p",a,b,c,d)};function ld(a,b,c,d,e,f){c={p:c,d:d};s(f)&&(c.h=f);a.U.push({action:b,ld:c,C:e});a.zb++;b=a.U.length-1;a.P&&md(a,b)}
function md(a,b){var c=a.U[b].action,d=a.U[b].ld,e=a.U[b].C;a.U[b].Md=a.P;a.Ga(c,d,function(d){a.e(c+" response",d);delete a.U[b];a.zb--;0===a.zb&&(a.U=[]);e&&e(d.s)})}
r.Xb=function(a){if("r"in a){this.e("from server: "+w(a));var b=a.r,c=this.Gb[b];c&&(delete this.Gb[b],c(a.b))}else"error"in a&&g("A server-side error has occurred: "+a.error),"a"in a&&(b=a.a,a=a.b,this.e("handleServerMessage",b,a),"d"===b?this.Yb(a.p,a.d):"m"===b?this.Yb(a.p,a.d,j):"c"===b?(b=a.p,a=(a=a.q)?wb(a,function(a){return La(a)}).join("$"):"{}",(a=gd(this,b,a))&&a.C&&a.C("permission_denied")):"ac"===b?(b=a.s,a=a.d,c=this.Ha,delete this.Ha,c&&c.Nb&&c.Nb(b,a),this.vb(l)):"sd"===b?this.Oc?this.Oc(a):
"msg"in a&&"undefined"!==typeof console&&console.log("FIREBASE: "+a.msg.replace("\n","\nFIREBASE: ")):Vb("Unrecognized action received from server: "+w(b)+"\nAre you using the latest client?"))};
r.xb=function(a){this.e("connection ready");this.P=j;this.rb=(new Date).getTime();this.Kc({serverTimeOffset:a-(new Date).getTime()});hd(this);for(var b in this.ga)for(var c in this.ga[b])a=this.ga[b][c],fd(this,b,c,a.Za,a.C);for(b=0;b<this.U.length;b++)this.U[b]&&md(this,b);for(;this.wb.length;)b=this.wb.shift(),kd(this,b.action,b.Mc,b.data,b.C);this.Wb(j)};
function dd(a,b){y(!a.ja,"Scheduling a connect when we're already connected/ing?");a.Sa&&clearTimeout(a.Sa);a.Sa=setTimeout(function(){a.Sa=k;if(a.Na){a.e("Making a connection attempt");a.Fc=(new Date).getTime();a.rb=k;var b=v(a.Xb,a),d=v(a.xb,a),e=v(a.gd,a),f=a.id+":"+ed++;a.ja=new Uc(f,a.K,b,d,e,function(b){M(b+" ("+a.K.toString()+")");a.Na=l})}},b)}r.Kd=function(a){a&&(!this.gb&&this.qa===this.Rb)&&(this.e("Window became visible.  Reducing delay."),this.qa=1E3,this.ja||dd(this,0));this.gb=a};
r.Jd=function(a){a?(this.e("Browser went online.  Reconnecting."),this.qa=1E3,this.Na=j,this.ja||dd(this,0)):(this.e("Browser went offline.  Killing connection; don't reconnect."),this.Na=l,this.ja&&this.ja.close())};
r.gd=function(){this.e("data client disconnected");this.P=l;this.ja=k;for(var a=0;a<this.U.length;a++){var b=this.U[a];b&&("h"in b.ld&&b.Md)&&(b.C&&b.C("disconnect"),delete this.U[a],this.zb--)}0===this.zb&&(this.U=[]);if(this.Na)this.gb?this.rb&&(3E4<(new Date).getTime()-this.rb&&(this.qa=1E3),this.rb=k):(this.e("Window isn't visible.  Delaying reconnect."),this.qa=this.Rb,this.Fc=(new Date).getTime()),a=Math.max(0,this.qa-((new Date).getTime()-this.Fc)),a*=Math.random(),this.e("Trying to reconnect in "+
a+"ms"),dd(this,a),this.qa=Math.min(this.Rb,1.3*this.qa);else for(var c in this.Gb)delete this.Gb[c];this.Wb(l)};r.Ia=function(){this.Na=l;this.ja?this.ja.close():(this.Sa&&(clearTimeout(this.Sa),this.Sa=k),this.P&&this.gd())};r.ab=function(){this.Na=j;this.qa=1E3;this.P||dd(this,0)};function gd(a,b,c){b=(new J(b)).toString();c||(c="{}");var d=a.ga[b][c];delete a.ga[b][c];return d};function nd(){this.o=this.D=k}function od(a,b,c){if(b.f())a.D=c,a.o=k;else if(a.D!==k)a.D=a.D.ya(b,c);else{a.o==k&&(a.o=new Dc);var d=E(b);a.o.contains(d)||a.o.add(d,new nd);a=a.o.get(d);b=Ma(b);od(a,b,c)}}function pd(a,b){if(b.f())return a.D=k,a.o=k,j;if(a.D!==k){if(a.D.N())return l;var c=a.D;a.D=k;c.w(function(b,c){od(a,new J(b),c)});return pd(a,b)}return a.o!==k?(c=E(b),b=Ma(b),a.o.contains(c)&&pd(a.o.get(c),b)&&a.o.remove(c),a.o.f()?(a.o=k,j):l):j}
function qd(a,b,c){a.D!==k?c(b,a.D):a.w(function(a,e){var f=new J(b.toString()+"/"+a);qd(e,f,c)})}nd.prototype.w=function(a){this.o!==k&&Ec(this.o,function(b,c){a(b,c)})};function rd(){this.ra=N}function T(a,b){return a.ra.Q(b)}function U(a,b,c){a.ra=a.ra.ya(b,c)}rd.prototype.toString=function(){return this.ra.toString()};function sd(){this.sa=new rd;this.I=new rd;this.ma=new rd;this.Bb=new Pa}function td(a,b){for(var c=T(a.sa,b),d=T(a.I,b),e=K(a.Bb,b),f=l,h=e;h!==k;){if(h.k()!==k){f=j;break}h=h.parent()}if(f)return l;c=ud(c,d,e);return c!==d?(U(a.I,b,c),j):l}function ud(a,b,c){if(c.f())return a;if(c.k()!==k)return b;a=a||N;c.w(function(d){var d=d.name(),e=a.M(d),f=b.M(d),h=K(c,d),e=ud(e,f,h);a=a.H(d,e)});return a}
sd.prototype.set=function(a,b){var c=this,d=[];vb(b,function(a){var b=a.path,a=a.pa,h=Nb();Qa(K(c.Bb,b),h);U(c.I,b,a);d.push({path:b,Rd:h})});return d};function vd(a,b){vb(b,function(b){var d=b.Rd,b=K(a.Bb,b.path),e=b.k();y(e!==k,"pendingPut should not be null.");e===d&&Qa(b,k)})};function wd(){this.Ta=[]}function xd(a,b){if(0!==b.length)for(var c=0;c<b.length;c++)a.Ta.push(b[c])}wd.prototype.Eb=function(){for(var a=0;a<this.Ta.length;a++)if(this.Ta[a]){var b=this.Ta[a];this.Ta[a]=k;yd(b)}this.Ta=[]};function yd(a){var b=a.X,c=a.pd,d=a.Db;fc(function(){b(c,d)})};function V(a,b,c,d){this.type=a;this.ta=b;this.aa=c;this.Db=d};function zd(a){this.J=a;this.na=[];this.xc=new wd}function Ad(a,b,c,d,e){a.na.push({type:b,X:c,cancel:d,T:e});var d=[],f=Bd(a.i);a.pb&&f.push(new V("value",a.i));for(var h=0;h<f.length;h++)if(f[h].type===b){var i=new H(a.J.n,a.J.path);f[h].aa&&(i=i.F(f[h].aa));d.push({X:e?v(c,e):c,pd:new R(f[h].ta,i),Db:f[h].Db})}xd(a.xc,d)}zd.prototype.cc=function(a,b){b=this.dc(a,b);b!=k&&Cd(this,b)};
function Cd(a,b){for(var c=[],d=0;d<b.length;d++){var e=b[d],f=e.type,h=new H(a.J.n,a.J.path);b[d].aa&&(h=h.F(b[d].aa));h=new R(b[d].ta,h);"value"===e.type&&!h.nb()?f+="("+h.V()+")":"value"!==e.type&&(f+=" "+h.name());L(a.J.n.u.id+": event:"+a.J.path+":"+a.J.La()+":"+f);for(f=0;f<a.na.length;f++){var i=a.na[f];b[d].type===i.type&&c.push({X:i.T?v(i.X,i.T):i.X,pd:h,Db:e.Db})}}xd(a.xc,c)}zd.prototype.Eb=function(){this.xc.Eb()};
function Bd(a){var b=[];if(!a.N()){var c=k;a.w(function(a,e){b.push(new V("child_added",e,a,c));c=a})}return b}function Ed(a){a.pb||(a.pb=j,Cd(a,[new V("value",a.i)]))};function Fd(a,b){zd.call(this,a);this.i=b}la(Fd,zd);Fd.prototype.dc=function(a,b){this.i=a;this.pb&&b!=k&&b.push(new V("value",this.i));return b};Fd.prototype.lb=function(){return{}};function Gd(a,b){this.Ob=a;this.Gc=b}
function Hd(a,b,c,d,e){var f=a.Q(c),h=b.Q(c),d=new Gd(d,e),e=Id(d,c,f,h),h=!f.f()&&!h.f()&&f.j()!==h.j();if(e||h){f=c;for(c=e;f.parent()!==k;){var i=a.Q(f),e=b.Q(f),m=f.parent();if(!d.Ob||K(d.Ob,m).k()){var n=b.Q(m),p=[],f=f.Z<f.m.length?f.m[f.m.length-1]:k;i.f()?(i=n.ea(f,e),p.push(new V("child_added",e,f,i))):e.f()?p.push(new V("child_removed",i,f)):(i=n.ea(f,e),h&&p.push(new V("child_moved",e,f,i)),c&&p.push(new V("child_changed",e,f,i)));d.Gc(m,n,p)}h&&(h=l,c=j);f=m}}}
function Id(a,b,c,d){var e,f=[];c===d?e=l:c.N()&&d.N()?e=c.k()!==d.k():c.N()?(Jd(a,b,N,d,f),e=j):d.N()?(Jd(a,b,c,N,f),e=j):e=Jd(a,b,c,d,f);e?a.Gc(b,d,f):c.j()!==d.j()&&a.Gc(b,d,k);return e}
function Jd(a,b,c,d,e){var f=l,h=!a.Ob||!K(a.Ob,b).f(),i=[],m=[],n=[],p=[],q={},t={},x,P,I,G;x=c.Ua();I=Za(x);P=d.Ua();for(G=Za(P);I!==k||G!==k;){c=I===k?1:G===k?-1:I.key===G.key?0:ic({name:I.key,ia:I.value.j()},{name:G.key,ia:G.value.j()});if(0>c)f=wa(q,I.key),s(f)?(n.push({zc:I,Tc:i[f]}),i[f]=k):(t[I.key]=m.length,m.push(I)),f=j,I=Za(x);else{if(0<c)f=wa(t,G.key),s(f)?(n.push({zc:m[f],Tc:G}),m[f]=k):(q[G.key]=i.length,i.push(G)),f=j;else{c=b.F(G.key);if(c=Id(a,c,I.value,G.value))p.push(G),f=j;I.value.j()!==
G.value.j()&&(n.push({zc:I,Tc:G}),f=j);I=Za(x)}G=Za(P)}if(!h&&f)return j}for(h=0;h<m.length;h++)if(q=m[h])c=b.F(q.key),Id(a,c,q.value,N),e.push(new V("child_removed",q.value,q.key));for(h=0;h<i.length;h++)if(q=i[h])c=b.F(q.key),m=d.ea(q.key,q.value),Id(a,c,N,q.value),e.push(new V("child_added",q.value,q.key,m));for(h=0;h<n.length;h++)q=n[h].zc,i=n[h].Tc,c=b.F(i.key),m=d.ea(i.key,i.value),e.push(new V("child_moved",i.value,i.key,m)),(c=Id(a,c,q.value,i.value))&&p.push(i);for(h=0;h<p.length;h++)a=p[h],
m=d.ea(a.key,a.value),e.push(new V("child_changed",a.value,a.key,m));return f};function Kd(){this.S=this.xa=k;this.set={}}la(Kd,Dc);r=Kd.prototype;r.setActive=function(a){this.xa=a};function Ld(a){return a.contains("default")}function Md(a){return a.xa!=k&&Ld(a)}r.defaultView=function(){return Ld(this)?this.get("default"):k};r.path=ba("S");r.toString=function(){return wb(this.keys(),function(a){return"default"===a?"{}":a}).join("$")};r.Za=function(){var a=[];Ec(this,function(b,c){a.push(c.J)});return a};function Nd(a,b){zd.call(this,a);this.i=N;this.dc(b,Bd(b))}la(Nd,zd);
Nd.prototype.dc=function(a,b){if(b===k)return b;var c=[],d=this.J;s(d.da)&&(s(d.va)&&d.va!=k?c.push(function(a,b){var c=Xb(b,d.da);return 0<c||0===c&&0<=Yb(a,d.va)}):c.push(function(a,b){return 0<=Xb(b,d.da)}));s(d.Ba)&&(s(d.Ra)?c.push(function(a,b){var c=Xb(b,d.Ba);return 0>c||0===c&&0>=Yb(a,d.Ra)}):c.push(function(a,b){return 0>=Xb(b,d.Ba)}));var e=k,f=k;if(s(this.J.Da))if(s(this.J.da)){if(e=Od(a,c,this.J.Da,l)){var h=a.M(e).j();c.push(function(a,b){var c=Xb(b,h);return 0>c||0===c&&0>=Yb(a,e)})}}else if(f=
Od(a,c,this.J.Da,j)){var i=a.M(f).j();c.push(function(a,b){var c=Xb(b,i);return 0<c||0===c&&0<=Yb(a,f)})}for(var m=[],n=[],p=[],q=[],t=0;t<b.length;t++){var x=b[t].aa,P=b[t].ta;switch(b[t].type){case "child_added":Pd(c,x,P)&&(this.i=this.i.H(x,P),n.push(b[t]));break;case "child_removed":this.i.M(x).f()||(this.i=this.i.H(x,k),m.push(b[t]));break;case "child_changed":!this.i.M(x).f()&&Pd(c,x,P)&&(this.i=this.i.H(x,P),q.push(b[t]));break;case "child_moved":var I=!this.i.M(x).f(),G=Pd(c,x,P);I?G?(this.i=
this.i.H(x,P),p.push(b[t])):(m.push(new V("child_removed",this.i.M(x),x)),this.i=this.i.H(x,k)):G&&(this.i=this.i.H(x,P),n.push(b[t]))}}var Zc=e||f;if(Zc){var Dd=(t=f!==k)?this.i.cd():this.i.dd(),pc=l,bb=l,cb=this;(t?a.yc:a.w).call(a,function(a,b){!bb&&Dd===k&&(bb=j);if(bb&&pc)return j;pc?(m.push(new V("child_removed",cb.i.M(a),a)),cb.i=cb.i.H(a,k)):bb&&(n.push(new V("child_added",b,a)),cb.i=cb.i.H(a,b));Dd===a&&(bb=j);a===Zc&&(pc=j)})}for(t=0;t<n.length;t++)c=n[t],x=this.i.ea(c.aa,c.ta),m.push(new V("child_added",
c.ta,c.aa,x));for(t=0;t<p.length;t++)c=p[t],x=this.i.ea(c.aa,c.ta),m.push(new V("child_moved",c.ta,c.aa,x));for(t=0;t<q.length;t++)c=q[t],x=this.i.ea(c.aa,c.ta),m.push(new V("child_changed",c.ta,c.aa,x));this.pb&&0<m.length&&m.push(new V("value",this.i));return m};function Od(a,b,c,d){if(a.N())return k;var e=k;(d?a.yc:a.w).call(a,function(a,d){if(Pd(b,a,d)&&(e=a,c--,0===c))return j});return e}function Pd(a,b,c){for(var d=0;d<a.length;d++)if(!a[d](b,c.j()))return l;return j}
Nd.prototype.Cc=function(a){return this.i.M(a)!==N};Nd.prototype.lb=function(a,b,c){var d={};this.i.N()||this.i.w(function(a){d[a]=3});var e=this.i,c=T(c,new J("")),f=new Pa;Qa(K(f,this.J.path),j);var b=N.ya(a,b),h=this;Hd(c,b,a,f,function(a,b,c){c!==k&&a.toString()===h.J.path.toString()&&h.dc(b,c)});this.i.N()?cc(d,function(a,b){d[b]=2}):(this.i.w(function(a){C(d,a)||(d[a]=1)}),cc(d,function(a,b){h.i.M(b).f()&&(d[b]=2)}));this.i=e;return d};function Qd(a,b){this.u=a;this.g=b;this.Vb=b.ra;this.la=new Pa}
Qd.prototype.Mb=function(a,b,c,d,e){var f=a.path,h=K(this.la,f),i=h.k();i===k?(i=new Kd,Qa(h,i)):y(!i.f(),"We shouldn't be storing empty QueryMaps");var m=a.La();if(i.contains(m))a=i.get(m),Ad(a,b,c,d,e);else{var n=this.g.ra.Q(f),n=a="default"===a.La()?new Fd(a,n):new Nd(a,n);if(Md(i)||Rd(h))i.add(m,n),i.S||(i.S=n.J.path);else{var p,q;i.f()||(p=i.toString(),q=i.Za());i.add(m,n);i.S||(i.S=n.J.path);i.setActive(Sd(this,i));p&&q&&id(this.u,i.path(),p,q)}Md(i)&&Sa(h,function(a){if(a=a.k()){a.xa&&a.xa();
a.xa=k}});Ad(a,b,c,d,e);(b=(b=Ta(K(this.la,f),function(a){var b;if(b=a.k())if(b=a.k().defaultView())b=a.k().defaultView().pb;if(b)return j},j))||this.u===k&&!T(this.g,f).f())&&Ed(a)}a.Eb()};function Td(a,b,c,d,e){var f=a.get(b),h;if(h=f){h=l;for(var i=f.na.length-1;0<=i;i--){var m=f.na[i];if((!c||m.type===c)&&(!d||m.X===d)&&(!e||m.T===e))if(f.na.splice(i,1),h=j,c&&d)break}h=h&&!(0<f.na.length)}(c=h)&&a.remove(b);return c}
Qd.prototype.fc=function(a,b,c,d){var e=K(this.la,a.path).k();return e===k?k:Ud(this,e,a,b,c,d)};
function Ud(a,b,c,d,e,f){var h=b.path(),h=K(a.la,h),c=c?c.La():k,i=[];c&&"default"!==c?Td(b,c,d,e,f)&&i.push(c):vb(b.keys(),function(a){Td(b,a,d,e,f)&&i.push(a)});b.f()&&Qa(h,k);c=Rd(h);if(0<i.length&&!c){for(var m=h,n=h.parent(),c=l;!c&&n;){var p=n.k();if(p){y(!Md(p));var q=m.name(),t=l;Ec(p,function(a,b){t=b.Cc(q)||t});t&&(c=j)}m=n;n=n.parent()}m=k;if(!Md(b)){n=b.xa;b.xa=k;var x=[],P=function(b){var c=b.k();if(c&&Ld(c))x.push(c.path()),c.xa==k&&c.setActive(Sd(a,c));else{if(c){c.xa!=k||c.setActive(Sd(a,
c));var d={};Ec(c,function(a,b){b.i.w(function(a){C(d,a)||(d[a]=j,a=c.path().F(a),x.push(a))})})}b.w(P)}};P(h);m=x;n&&n()}return c?k:m}return k}function Vd(a,b,c){Sa(K(a.la,b),function(a){(a=a.k())&&Ec(a,function(a,b){Ed(b)})},c,j)}
function W(a,b,c){function d(a){do{if(h[a.toString()])return j;a=a.parent()}while(a!==k);return l}var e=a.Vb,f=a.g.ra;a.Vb=f;for(var h={},i=0;i<c.length;i++)h[c[i].toString()]=j;Hd(e,f,b,a.la,function(c,e,f){if(b.contains(c)){var h=d(c);h&&Vd(a,c,l);a.cc(c,e,f);h&&Vd(a,c,j)}else a.cc(c,e,f)});d(b)&&Vd(a,b,j);Wd(a,b)}function Wd(a,b){var c=K(a.la,b);Sa(c,function(a){(a=a.k())&&Ec(a,function(a,b){b.Eb()})},j,j);Ta(c,function(a){(a=a.k())&&Ec(a,function(a,b){b.Eb()})},l)}
Qd.prototype.cc=function(a,b,c){a=K(this.la,a).k();a!==k&&Ec(a,function(a,e){e.cc(b,c)})};function Rd(a){return Ta(a,function(a){return a.k()&&Md(a.k())})}
function Sd(a,b){if(a.u){var c=a.u,d=b.path(),e=b.toString(),f=b.Za(),h,i=b.keys(),m=Ld(b),n=a.u,p=function(c){if("ok"!==c){var d="Unknown Error";"too_big"===c?d="The data requested exceeds the maximum size that can be accessed with a single request.":"permission_denied"==c?d="Client doesn't have permission to access the desired data.":"unavailable"==c&&(d="The service is unavailable");var e=Error(c+": "+d);e.code=c.toUpperCase();M("on() or once() for "+b.path().toString()+" failed: "+e.toString());
b&&(Ec(b,function(a,b){for(var c=0;c<b.na.length;c++){var d=b.na[c];d.cancel&&(d.T?v(d.cancel,d.T):d.cancel)(e)}}),Ud(a,b))}else h||(m?Vd(a,b.path(),j):vb(i,function(a){(a=b.get(a))&&Ed(a)}),Wd(a,b.path()))},q=b.toString(),t=b.path().toString();n.ga[t]=n.ga[t]||{};y(!n.ga[t][q],"listen() called twice for same path/queryId.");n.ga[t][q]={Za:b.Za(),C:p};n.P&&fd(n,t,q,b.Za(),p);return function(){h=j;id(c,d,e,f)}}return da}
Qd.prototype.lb=function(a,b,c,d){var e={};Ec(b,function(b,h){var i=h.lb(a,c,d);cc(i,function(a,b){e[b]=3===a?3:(wa(e,b)||a)===a?a:3})});c.N()||c.w(function(a){C(e,a)||(e[a]=4)});return e};function Xd(a,b,c,d,e){var f=b.path(),b=a.lb(f,b,d,e),h=N,i=[];cc(b,function(b,n){var p=new J(n);3===b||1===b?h=h.H(n,d.Q(p)):(2===b&&i.push({path:f.F(n),pa:N}),i=i.concat(Yd(a,d.Q(p),K(c,p),e)))});return[{path:f,pa:h}].concat(i)}
function Zd(a,b,c,d){var e;a:{var f=K(a.la,b);e=f.parent();for(var h=[];e!==k;){var i=e.k();if(i!==k){if(Ld(i)){e=[{path:b,pa:c}];break a}i=a.lb(b,i,c,d);f=wa(i,f.name());if(3===f||1===f){e=[{path:b,pa:c}];break a}2===f&&h.push({path:b,pa:N})}f=e;e=e.parent()}e=h}if(1==e.length&&(!e[0].pa.f()||c.f()))return e;h=K(a.la,b);f=h.k();f!==k?Ld(f)?e.push({path:b,pa:c}):e=e.concat(Xd(a,f,h,c,d)):e=e.concat(Yd(a,c,h,d));return e}
function Yd(a,b,c,d){var e=c.k();if(e!==k)return Ld(e)?[{path:c.path(),pa:b}]:Xd(a,e,c,b,d);var f=[];c.w(function(c){var e=b.N()?N:b.M(c.name()),c=Yd(a,e,c,d);f=f.concat(c)});return f};function $d(a,b){if(!a||"object"!==typeof a)return a;y(".sv"in a,"Unexpected leaf node or priority contents");return b[a[".sv"]]}function ae(a,b){var c=$d(a.j(),b),d;if(a.N()){var e=$d(a.k(),b);return e!==a.k()||c!==a.j()?new gc(e,c):a}d=a;c!==a.j()&&(d=d.za(c));a.w(function(a,c){var e=ae(c,b);e!==c&&(d=d.H(a,e))});return d};function be(a){this.K=a;this.$=Cc(a);this.u=new bd(this.K,v(this.Yb,this),v(this.Wb,this),v(this.vb,this),v(this.Kc,this),v(this.Bc,this));var b=v(function(){return new zc(this.$,this.u)},this),a=a.toString();Bc[a]||(Bc[a]=b());this.qd=Bc[a];this.eb=new Pa;this.fb=new rd;this.g=new sd;this.G=new Qd(this.u,this.g.ma);this.Dc=new rd;this.Ec=new Qd(k,this.Dc);ce(this,"connected",l);ce(this,"authenticated",l);this.R=new nd;this.wc=0}r=be.prototype;
r.toString=function(){return(this.K.hc?"https://":"http://")+this.K.host};r.name=function(){return this.K.Sb};function de(a){a=T(a.Dc,new J(".info/serverTimeOffset")).V()||0;return(new Date).getTime()+a}function ee(a){a=a={timestamp:de(a)};a.timestamp=a.timestamp||(new Date).getTime();return a}
r.Yb=function(a,b,c){this.wc++;var d,e,f=[];9<=a.length&&a.lastIndexOf(".priority")===a.length-9?(d=new J(a.substring(0,a.length-9)),e=T(this.g.sa,d).za(b),f.push(d)):c?(d=new J(a),e=T(this.g.sa,d),cc(b,function(a,b){var c=new J(b);".priority"===b?e=e.za(a):(e=e.ya(c,Q(a)),f.push(d.F(b)))})):(d=new J(a),e=Q(b),f.push(d));a=Zd(this.G,d,e,this.g.I);b=l;for(c=0;c<a.length;++c){var h=a[c],i=this.g,m=h.path;U(i.sa,m,h.pa);b=td(i,m)||b}b&&(d=fe(this,d));W(this.G,d,f)};
r.Wb=function(a){ce(this,"connected",a);if(a===l){this.e("onDisconnectEvents");var b=this,c=[],d=ee(this),a=qd,e=new nd;qd(this.R,new J(""),function(a,b){od(e,a,ae(b,d))});a(e,new J(""),function(a,d){var e=Zd(b.G,a,d,b.g.I);c.push.apply(c,b.g.set(a,e));e=ge(b,a);fe(b,e);W(b.G,e,[a])});vd(this.g,c);this.R=new nd}};r.Kc=function(a){var b=this;bc(a,function(a,d){ce(b,d,a)})};r.Bc=function(a){a=new J(a);return T(this.g.sa,a).hash()};r.vb=function(a){ce(this,"authenticated",a)};
function ce(a,b,c){b=new J("/.info/"+b);U(a.Dc,b,Q(c));W(a.Ec,b,[b])}r.hb=function(a,b,c){"firebaseio-demo.com"===this.K.domain&&M("FirebaseRef.auth() not supported on demo (*.firebaseio-demo.com) Firebases. Please use on production (*.firebaseio.com) Firebases only.");this.u.hb(a,function(a,c){X(b,a,c)},function(a,b){M("auth() was canceled: "+b);if(c){var f=Error(b);f.code=a.toUpperCase();c(f)}})};r.Kb=function(a){this.u.Kb(function(b){X(a,b)})};
r.bb=function(a,b,c,d){this.e("set",{path:a.toString(),value:b,ia:c});var e=ee(this),b=Q(b,c),e=ae(b,e),e=Zd(this.G,a,e,this.g.I),f=this.g.set(a,e),h=this;this.u.put(a.toString(),b.V(j),function(b){"ok"!==b&&M("set at "+a+" failed: "+b);vd(h.g,f);td(h.g,a);var c=fe(h,a);W(h.G,c,[]);X(d,b)});e=ge(this,a);fe(this,e);W(this.G,e,[a])};
r.update=function(a,b,c){this.e("update",{path:a.toString(),value:b});var d=T(this.g.ma,a),e=j,f=[],h=ee(this),i=[],m;for(m in b){var e=l,n=Q(b[m]),n=ae(n,h),d=d.H(m,n),p=a.F(m);f.push(p);n=Zd(this.G,p,n,this.g.I);i=i.concat(this.g.set(a,n))}if(e)L("update() called with empty data.  Don't do anything."),X(c,"ok");else{var q=this;ld(this.u,"m",a.toString(),b,function(b){y("ok"===b||"permission_denied"===b,"merge at "+a+" failed.");"ok"!==b&&M("update at "+a+" failed: "+b);vd(q.g,i);td(q.g,a);var d=
fe(q,a);W(q.G,d,[]);X(c,b)},aa);b=ge(this,a);fe(this,b);W(q.G,b,f)}};r.Pc=function(a,b,c){this.e("setPriority",{path:a.toString(),ia:b});var d=ee(this),d=$d(b,d),d=T(this.g.I,a).za(d),d=Zd(this.G,a,d,this.g.I),e=this.g.set(a,d),f=this;this.u.put(a.toString()+"/.priority",b,function(b){"permission_denied"===b&&M("setPriority at "+a+" failed: "+b);vd(f.g,e);td(f.g,a);var d=fe(f,a);W(f.G,d,[]);X(c,b)});b=fe(this,a);W(f.G,b,[])};
r.Hc=function(a,b){var c=this;this.u.Hc(a.toString(),function(d){"ok"===d&&pd(c.R,a);X(b,d)})};function he(a,b,c,d){var e=Q(c);jd(a.u,b.toString(),e.V(j),function(c){"ok"===c&&od(a.R,b,e);X(d,c)})}function ie(a){xc(a.$,"deprecated_on_disconnect");a.qd.Sc.deprecated_on_disconnect=j}r.Mb=function(a,b,c,d,e){".info"===E(a.path)?this.Ec.Mb(a,b,c,d,e):this.G.Mb(a,b,c,d,e)};
r.fc=function(a,b,c,d){if(".info"===E(a.path))this.Ec.fc(a,b,c,d);else{b=this.G.fc(a,b,c,d);if(c=b!==k){for(var c=this.g,d=a.path,e=[],f=0;f<b.length;++f)e[f]=T(c.sa,b[f]);U(c.sa,d,N);for(f=0;f<b.length;++f)U(c.sa,b[f],e[f]);c=td(c,d)}c&&(y(this.g.ma.ra===this.G.Vb,"We should have raised any outstanding events by now.  Else, we'll blow them away."),U(this.g.ma,a.path,T(this.g.I,a.path)),this.G.Vb=this.g.ma.ra)}};r.Ia=function(){this.u.Ia()};r.ab=function(){this.u.ab()};
r.Qc=function(a){if("undefined"!==typeof console){a?(this.kc||(this.kc=new yc(this.$)),a=this.kc.get()):a=this.$.get();var b=a,c=[],d=0,e;for(e in b)c[d++]=e;var f=function(a,b){return Math.max(b.length,a)};if(c.reduce)e=c.reduce(f,0);else{var h=0;vb(c,function(a){h=f.call(aa,h,a)});e=h}for(var i in a){b=a[i];for(c=i.length;c<e+2;c++)i+=" ";console.log(i+b)}}};r.Rc=function(a){xc(this.$,a);this.qd.Sc[a]=j};r.e=function(){L("r:"+this.u.id+":",arguments)};
function X(a,b,c){a&&fc(function(){if("ok"==b)a(k,c);else{var d=(b||"error").toUpperCase(),e=d;c&&(e+=": "+c);e=Error(e);e.code=d;a(e)}})};function je(a,b){var c=b||a.eb;b||ke(a,c);if(c.k()!==k){var d=le(a,c);y(0<d.length);if(xb(d,function(a){return 1===a.status})){for(var e=c.path(),f=0;f<d.length;f++)y(1===d[f].status,"tryToSendTransactionQueue_: items in queue should all be run."),d[f].status=2,d[f].nd++;c=T(a.g.I,e).hash();U(a.g.I,e,T(a.g.ma,e));for(var h=T(a.fb,e).V(j),i=Nb(),m={},n=0;n<d.length;n++)d[n].qc&&(m[d[n].path.toString()]=d[n].path);var p=[],q;for(q in m)p.push(m[q]);for(f=0;f<p.length;f++)Qa(K(a.g.Bb,p[f]),i);a.u.put(e.toString(),
h,function(b){a.e("transaction put response",{path:e.toString(),status:b});for(f=0;f<p.length;f++){var c=K(a.g.Bb,p[f]),h=c.k();y(h!==k,"sendTransactionQueue_: pendingPut should not be null.");h===i&&(Qa(c,k),U(a.g.I,p[f],T(a.g.sa,p[f])))}if("ok"===b){b=[];for(f=0;f<d.length;f++)d[f].status=3,d[f].C&&(c=me(a,d[f].path),b.push(v(d[f].C,k,k,j,c))),d[f].nc();ke(a,K(a.eb,e));je(a);for(f=0;f<b.length;f++)fc(b[f])}else{if("datastale"===b)for(f=0;f<d.length;f++)d[f].status=4===d[f].status?5:1;else{M("transaction at "+
e+" failed: "+b);for(f=0;f<d.length;f++)d[f].status=5,d[f].oc=b}b=fe(a,e);W(a.G,b,[e])}},c)}}else c.nb()&&c.w(function(b){je(a,b)})}
function fe(a,b){var c=ne(a,b),d=c.path(),e=le(a,c);U(a.g.ma,d,T(a.g.I,d));U(a.fb,d,T(a.g.I,d));if(0!==e.length){for(var f=c=T(a.g.ma,d),h=[],i=0;i<e.length;i++){var m=Na(d,e[i].path),n=l,p;y(m!==k,"rerunTransactionsUnderNode_: relativePath should not be null.");if(5===e[i].status)n=j,p=e[i].oc;else if(1===e[i].status)if(25<=e[i].nd)n=j,p="maxretry";else{var q=e[i].update(c.Q(m).V());s(q)?(Ba("transaction failed: Data returned ",q),q=Q(q),c=c.ya(m,q),e[i].qc&&(f=f.ya(m,q))):(n=j,p="nodata")}n&&(e[i].status=
3,setTimeout(e[i].nc,0),e[i].C&&(n=new H(a,e[i].path),m=new R(c.Q(m),n),"nodata"===p?h.push(v(e[i].C,k,k,l,m)):h.push(v(e[i].C,k,Error(p),l,m))))}p=T(a.g.I,d).j();c=c.za(p);f=f.za(p);U(a.fb,d,c);U(a.g.ma,d,f);ke(a,a.eb);for(i=0;i<h.length;i++)fc(h[i]);je(a)}return d}function ne(a,b){for(var c,d=a.eb;(c=E(b))!==k&&d.k()===k;)d=K(d,c),b=Ma(b);return d}function le(a,b){var c=[];oe(a,b,c);c.sort(function(a,b){return a.hd-b.hd});return c}
function oe(a,b,c){var d=b.k();if(d!==k)for(var e=0;e<d.length;e++)c.push(d[e]);b.w(function(b){oe(a,b,c)})}function ke(a,b){var c=b.k();if(c){for(var d=0,e=0;e<c.length;e++)3!==c[e].status&&(c[d]=c[e],d++);c.length=d;Qa(b,0<c.length?c:k)}b.w(function(b){ke(a,b)})}function ge(a,b){var c=ne(a,b).path(),d=K(a.eb,b);Ta(d,function(a){pe(a)});pe(d);Sa(d,function(a){pe(a)});return c}
function pe(a){var b=a.k();if(b!==k){for(var c=[],d=-1,e=0;e<b.length;e++)4!==b[e].status&&(2===b[e].status?(y(d===e-1,"All SENT items should be at beginning of queue."),d=e,b[e].status=4,b[e].oc="set"):(y(1===b[e].status),b[e].nc(),b[e].C&&c.push(v(b[e].C,k,Error("set"),l,k))));-1===d?Qa(a,k):b.length=d+1;for(e=0;e<c.length;e++)fc(c[e])}}function me(a,b){var c=new H(a,b);return new R(T(a.fb,b),c)};function Y(){this.$a={}}ea(Y);Y.prototype.Ia=function(){for(var a in this.$a)this.$a[a].Ia()};Y.prototype.interrupt=Y.prototype.Ia;Y.prototype.ab=function(){for(var a in this.$a)this.$a[a].ab()};Y.prototype.resume=Y.prototype.ab;var Z={Dd:function(a){var b=O.prototype.hash;O.prototype.hash=a;var c=gc.prototype.hash;gc.prototype.hash=a;return function(){O.prototype.hash=b;gc.prototype.hash=c}}};Z.hijackHash=Z.Dd;Z.La=function(a){return a.La()};Z.queryIdentifier=Z.La;Z.Fd=function(a){return a.n.u.ga};Z.listens=Z.Fd;Z.Nd=function(a){return a.n.u.ja};Z.refConnection=Z.Nd;Z.sd=bd;Z.DataConnection=Z.sd;bd.prototype.sendRequest=bd.prototype.Ga;bd.prototype.interrupt=bd.prototype.Ia;Z.td=Uc;Z.RealTimeConnection=Z.td;
Uc.prototype.sendRequest=Uc.prototype.od;Uc.prototype.close=Uc.prototype.close;Z.rd=pb;Z.ConnectionTarget=Z.rd;Z.Bd=function(){Ic=Oc=j};Z.forceLongPolling=Z.Bd;Z.Cd=function(){Jc=j};Z.forceWebSockets=Z.Cd;Z.Td=function(a,b){a.n.u.Oc=b};Z.setSecurityDebugCallback=Z.Td;Z.Qc=function(a,b){a.n.Qc(b)};Z.stats=Z.Qc;Z.Rc=function(a,b){a.n.Rc(b)};Z.statsIncrementCounter=Z.Rc;Z.wc=function(a){return a.n.wc};function $(a,b,c){this.Fb=a;this.S=b;this.Ea=c}$.prototype.cancel=function(a){z("Firebase.onDisconnect().cancel",0,1,arguments.length);B("Firebase.onDisconnect().cancel",1,a,j);this.Fb.Hc(this.S,a)};$.prototype.cancel=$.prototype.cancel;$.prototype.remove=function(a){z("Firebase.onDisconnect().remove",0,1,arguments.length);D("Firebase.onDisconnect().remove",this.S);B("Firebase.onDisconnect().remove",1,a,j);he(this.Fb,this.S,k,a)};$.prototype.remove=$.prototype.remove;
$.prototype.set=function(a,b){z("Firebase.onDisconnect().set",1,2,arguments.length);D("Firebase.onDisconnect().set",this.S);Aa("Firebase.onDisconnect().set",a,l);B("Firebase.onDisconnect().set",2,b,j);he(this.Fb,this.S,a,b)};$.prototype.set=$.prototype.set;
$.prototype.bb=function(a,b,c){z("Firebase.onDisconnect().setWithPriority",2,3,arguments.length);D("Firebase.onDisconnect().setWithPriority",this.S);Aa("Firebase.onDisconnect().setWithPriority",a,l);Fa("Firebase.onDisconnect().setWithPriority",2,b,l);B("Firebase.onDisconnect().setWithPriority",3,c,j);(".length"===this.Ea||".keys"===this.Ea)&&g("Firebase.onDisconnect().setWithPriority failed: "+this.Ea+" is a read-only object.");var d=this.Fb,e=this.S,f=Q(a,b);jd(d.u,e.toString(),f.V(j),function(a){"ok"===
a&&od(d.R,e,f);X(c,a)})};$.prototype.setWithPriority=$.prototype.bb;
$.prototype.update=function(a,b){z("Firebase.onDisconnect().update",1,2,arguments.length);D("Firebase.onDisconnect().update",this.S);Ea("Firebase.onDisconnect().update",a);B("Firebase.onDisconnect().update",2,b,j);var c=this.Fb,d=this.S,e=j,f;for(f in a)e=l;if(e)L("onDisconnect().update() called with empty data.  Don't do anything."),X(b,j);else{e=c.u;f=d.toString();var h=function(e){if("ok"===e)for(var f in a){var h=Q(a[f]);od(c.R,d.F(f),h)}X(b,e)};e.P?kd(e,"om",f,a,h):e.wb.push({Mc:f,action:"om",
data:a,C:h})}};$.prototype.update=$.prototype.update;var qe,re=0,se=[];qe=function(a){var b=a===re;re=a;for(var c=Array(8),d=7;0<=d;d--)c[d]="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz".charAt(a%64),a=Math.floor(a/64);y(0===a);a=c.join("");if(b){for(d=11;0<=d&&63===se[d];d--)se[d]=0;se[d]++}else for(d=0;12>d;d++)se[d]=Math.floor(64*Math.random());for(d=0;12>d;d++)a+="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz".charAt(se[d]);y(20===a.length,"NextPushId: Length should be 20.");return a};function H(){var a,b,c;if(arguments[0]instanceof be)c=arguments[0],a=arguments[1];else{z("new Firebase",1,2,arguments.length);var d=arguments[0];b=a="";var e=j,f="";if(u(d)){var h=d.indexOf("//");if(0<=h)var i=d.substring(0,h-1),d=d.substring(h+2);h=d.indexOf("/");-1===h&&(h=d.length);a=d.substring(0,h);var d=d.substring(h+1),m=a.split(".");if(3==m.length){h=m[2].indexOf(":");e=0<=h?"https"===i:j;if("firebase"===m[1])Wb(a+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead");
else{b=m[0];f="";d=("/"+d).split("/");for(i=0;i<d.length;i++)if(0<d[i].length){h=d[i];try{h=decodeURIComponent(h.replace(/\+/g," "))}catch(n){}f+="/"+h}}b=b.toLowerCase()}else b=k}e||"undefined"!==typeof window&&(window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:"))&&M("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().");a=new pb(a,e,b);b=new J(f);e=b.toString();if(!(d=!u(a.host)))if(!(d=0===a.host.length))if(!(d=!za(a.Sb)))if(d=
0!==e.length)e&&(e=e.replace(/^\/*\.info(\/|$)/,"/")),d=!(u(e)&&0!==e.length&&!ya.test(e));d&&g(Error(A("new Firebase",1,l)+'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".'));arguments[1]?arguments[1]instanceof Y?c=arguments[1]:g(Error("Expected a valid Firebase.Context for second argument to new Firebase()")):c=Y.mb();e=a.toString();d=wa(c.$a,e);d||(d=new be(a),c.$a[e]=d);c=d;a=b}F.call(this,c,a)}la(H,F);var te=H,ue=["Firebase"],ve=ca;
!(ue[0]in ve)&&ve.execScript&&ve.execScript("var "+ue[0]);for(var we;ue.length&&(we=ue.shift());)!ue.length&&s(te)?ve[we]=te:ve=ve[we]?ve[we]:ve[we]={};H.prototype.name=function(){z("Firebase.name",0,0,arguments.length);return this.path.f()?k:this.path.Z<this.path.m.length?this.path.m[this.path.m.length-1]:k};H.prototype.name=H.prototype.name;
H.prototype.F=function(a){z("Firebase.child",1,1,arguments.length);if(ha(a))a=String(a);else if(!(a instanceof J))if(E(this.path)===k){var b=a;b&&(b=b.replace(/^\/*\.info(\/|$)/,"/"));Ia("Firebase.child",b)}else Ia("Firebase.child",a);return new H(this.n,this.path.F(a))};H.prototype.child=H.prototype.F;H.prototype.parent=function(){z("Firebase.parent",0,0,arguments.length);var a=this.path.parent();return a===k?k:new H(this.n,a)};H.prototype.parent=H.prototype.parent;
H.prototype.root=function(){z("Firebase.ref",0,0,arguments.length);for(var a=this;a.parent()!==k;)a=a.parent();return a};H.prototype.root=H.prototype.root;H.prototype.toString=function(){z("Firebase.toString",0,0,arguments.length);var a;if(this.parent()===k)a=this.n.toString();else{a=this.parent().toString()+"/";var b=this.name();a+=encodeURIComponent(String(b))}return a};H.prototype.toString=H.prototype.toString;
H.prototype.set=function(a,b){z("Firebase.set",1,2,arguments.length);D("Firebase.set",this.path);Aa("Firebase.set",a,l);B("Firebase.set",2,b,j);return this.n.bb(this.path,a,k,b)};H.prototype.set=H.prototype.set;H.prototype.update=function(a,b){z("Firebase.update",1,2,arguments.length);D("Firebase.update",this.path);Ea("Firebase.update",a);B("Firebase.update",2,b,j);C(a,".priority")&&g(Error("update() does not currently support updating .priority."));return this.n.update(this.path,a,b)};
H.prototype.update=H.prototype.update;H.prototype.bb=function(a,b,c){z("Firebase.setWithPriority",2,3,arguments.length);D("Firebase.setWithPriority",this.path);Aa("Firebase.setWithPriority",a,l);Fa("Firebase.setWithPriority",2,b,l);B("Firebase.setWithPriority",3,c,j);(".length"===this.name()||".keys"===this.name())&&g("Firebase.setWithPriority failed: "+this.name()+" is a read-only object.");return this.n.bb(this.path,a,b,c)};H.prototype.setWithPriority=H.prototype.bb;
H.prototype.remove=function(a){z("Firebase.remove",0,1,arguments.length);D("Firebase.remove",this.path);B("Firebase.remove",1,a,j);this.set(k,a)};H.prototype.remove=H.prototype.remove;
H.prototype.transaction=function(a,b,c){function d(){}z("Firebase.transaction",1,3,arguments.length);D("Firebase.transaction",this.path);B("Firebase.transaction",1,a,l);B("Firebase.transaction",2,b,j);s(c)&&"boolean"!=typeof c&&g(Error(A("Firebase.transaction",3,j)+"must be a boolean."));(".length"===this.name()||".keys"===this.name())&&g("Firebase.transaction failed: "+this.name()+" is a read-only object.");"undefined"===typeof c&&(c=j);var e=this.n,f=this.path,h=c;e.e("transaction on "+f);var i=
new H(e,f);i.Xa("value",d);var h={path:f,update:a,C:b,status:k,hd:Nb(),qc:h,nd:0,nc:function(){i.ub("value",d)},oc:k},m=h.update(T(e.fb,f).V());if(s(m)){Ba("transaction failed: Data returned ",m);h.status=1;var n=K(e.eb,f),p=n.k()||[];p.push(h);Qa(n,p);p="object"===typeof m&&m!==k&&C(m,".priority")?m[".priority"]:T(e.g.I,f).j();n=ee(e);m=Q(m,p);m=ae(m,n);U(e.fb,f,m);h.qc&&(U(e.g.ma,f,m),W(e.G,f,[f]));je(e)}else h.nc(),h.C&&(e=me(e,f),h.C(k,l,e))};H.prototype.transaction=H.prototype.transaction;
H.prototype.Pc=function(a,b){z("Firebase.setPriority",1,2,arguments.length);D("Firebase.setPriority",this.path);Fa("Firebase.setPriority",1,a,l);B("Firebase.setPriority",2,b,j);this.n.Pc(this.path,a,b)};H.prototype.setPriority=H.prototype.Pc;H.prototype.push=function(a,b){z("Firebase.push",0,2,arguments.length);D("Firebase.push",this.path);Aa("Firebase.push",a,j);B("Firebase.push",2,b,j);var c=de(this.n),c=qe(c),c=this.F(c);"undefined"!==typeof a&&a!==k&&c.set(a,b);return c};H.prototype.push=H.prototype.push;
H.prototype.ha=function(){return new $(this.n,this.path,this.name())};H.prototype.onDisconnect=H.prototype.ha;H.prototype.Od=function(){M("FirebaseRef.removeOnDisconnect() being deprecated. Please use FirebaseRef.onDisconnect().remove() instead.");this.ha().remove();ie(this.n)};H.prototype.removeOnDisconnect=H.prototype.Od;H.prototype.Sd=function(a){M("FirebaseRef.setOnDisconnect(value) being deprecated. Please use FirebaseRef.onDisconnect().set(value) instead.");this.ha().set(a);ie(this.n)};
H.prototype.setOnDisconnect=H.prototype.Sd;H.prototype.hb=function(a,b,c){z("Firebase.auth",1,3,arguments.length);u(a)||g(Error(A("Firebase.auth",1,l)+"must be a valid credential (a string)."));B("Firebase.auth",2,b,j);B("Firebase.auth",3,b,j);this.n.hb(a,b,c)};H.prototype.auth=H.prototype.hb;H.prototype.Kb=function(a){z("Firebase.unauth",0,1,arguments.length);B("Firebase.unauth",1,a,j);this.n.Kb(a)};H.prototype.unauth=H.prototype.Kb;
H.goOffline=function(){z("Firebase.goOffline",0,0,arguments.length);Y.mb().Ia()};H.goOnline=function(){z("Firebase.goOnline",0,0,arguments.length);Y.mb().ab()};function Tb(a,b){y(!b||a===j||a===l,"Can't turn on custom loggers persistently.");a===j?("undefined"!==typeof console&&("function"===typeof console.log?Rb=v(console.log,console):"object"===typeof console.log&&(Rb=function(a){console.log(a)})),b&&ob.set("logging_enabled",j)):a?Rb=a:(Rb=k,ob.remove("logging_enabled"))}H.enableLogging=Tb;
H.ServerValue={TIMESTAMP:{".sv":"timestamp"}};H.INTERNAL=Z;H.Context=Y;})();


})();

(function() {

'use strict';

// Source: src/data.js
(function() {

  /* Only enable if Ember Data is included */
  if (window.DS === undefined) {
    return;
  }

  /**
    The Firebase adapter allows your store to communicate with the Firebase
    realtime service. To use the adapter in your app, extend DS.FirebaseAdapter
    and customize the endpoint to point to the Firebase URL where you want this
    data to be stored.

    The adapter will automatically communicate with Firebase to persist your
    records as neccessary. Importantly, the adapter will also update the store
    in realtime when changes are made to the Firebase by other clients or
    otherwise.
  */
  DS.FirebaseAdapter = DS.Adapter.extend(Ember.Evented, {
    /**
      Endpoint paths can be customized by setting the Firebase property on the
      adapter:

      ```js
      DS.FirebaseAdapter.reopen({
        firebase: new Firebase("https://<my-firebase>.firebaseio.com/")
      });
      ```

      Requests for `App.Post` would now target `/post`.

      @property firebase
      @type {Firebase}
    */

    init: function() {
      if (!this.firebase || typeof this.firebase != "object") {
        throw new Error("Please set the `firebase` property on the adapter.");
      }
      // If provided Firebase reference was a query (eg: limits), make it a ref.
      this._ref = this.firebase.ref();
    },

    // Uses push() to generate chronologically ordered unique IDs.
    generateIdForRecord: function() {
      return this._ref.push().name();
    },

    /**
      Called by the store to retrieve the JSON for a given type and ID. The
      method will return a promise which will resolve when the value is
      successfully fetched from Firebase.

      Additionally, from this point on, the object's value in the store will
      also be automatically updated whenever the remote value changes.
    */
    find: function(store, type, id) {
      var resolved = false;
      var ref = this._getRef(type, id);
      return new Ember.RSVP.Promise(function(resolve, reject) {
        ref.on("value", function(snapshot) {
          var obj = snapshot.val();
          if (obj) {
            obj.id = snapshot.name();
          }
          if (!resolved) {
            // If this is the first event, resolve the promise.
            resolved = true;
            Ember.run(null, resolve, obj);
          } else {
            // Otherwise, update the store.
            store.push(type, obj);
          }
        }, function(err) {
          // Only called in cases of permission related errors.
          if (!resolved) {
            Ember.run(null, reject, err);
          }
        });
      }, "DS: FirebaseAdapter#find " + type + " to " + ref.toString());
    },

    /**
      Called by the store to retrieve the JSON for all of the records for a
      given type. The method will return a promise which will resolve when the
      value is successfully fetched from Firebase.

      Additionally, from this point on, any records of this type that are added,
      removed or modified from Firebase will automatically be reflected in the
      store.
    */
    findAll: function(store, type) {
      var resolved = false;
      var ref = this._getRef(type);

      function _gotChildValue(snapshot) {
        // Update store, only if the promise is already resolved.
        if (!resolved) {
          return;
        }
        var obj = snapshot.val();
        obj.id = snapshot.name();
        store.push(type, obj);
      }

      return new Ember.RSVP.Promise(function(resolve, reject) {
        function _handleError(err) {
          if (!resolved) {
            resolved = true;
            Ember.run(null, reject, err);
          }
        }

        ref.on("child_added", _gotChildValue, _handleError);
        ref.on("child_changed", _gotChildValue, _handleError);
        ref.on("child_removed", function(snapshot) {
          if (!resolved) {
            return;
          }
          var record = store.getById(type, snapshot.name());
          if (record !== null) {
            store.deleteRecord(record);
          }
        }, _handleError);

        ref.once("value", function(snapshot) {
          var results = [];
          snapshot.forEach(function(child) {
            var record = child.val();
            record.id = child.name();
            results.push(record);
          });
          resolved = true;
          Ember.run(null, resolve, results);
        });
      }, "DS: FirebaseAdapter#findAll " + type + " to " + ref.toString());
    },

    /**
      Called by the store when a newly created record is saved via the `save`
      method on a model record instance.

      The `createRecord` method serializes the record and send it to Firebase.
      The method will return a promise which will be resolved when the data has
      been successfully saved to Firebase.
    */
    createRecord: function(store, type, record) {
      var data = record.serialize({includeId: false});
      var ref = this._getRef(type, record.id);
      return new Ember.RSVP.Promise(function(resolve, reject) {
        ref.set(data, function(err) {
          if (err) {
            Ember.run(null, reject, err);
          } else {
            Ember.run(null, resolve);
          }
        });
      }, "DS: FirebaseAdapter#createRecord " + type + " to " + ref.toString());
    },

    /**
      Update is the same as create for this adapter, since the number of
      attributes for a given model don't change.
    */
    updateRecord: function(store, type, record) {
      return this.createRecord(store, type, record);
    },

    // Called by the store when a record is deleted.
    deleteRecord: function(store, type, record) {
      var ref = this._getRef(type, record.id);
      return new Ember.RSVP.Promise(function(resolve, reject) {
        ref.remove(function(err) {
          if (err) {
            Ember.run(null, reject, err);
          } else {
            Ember.run(null, resolve);
          }
        });
      }, "DS: FirebaseAdapter#deleteRecord " + type + " to " + ref.toString());
    },

    /**
      Determines a path fo a given type. To customize, override the method:

      ```js
      DS.FirebaseAdapter.reopen({
        pathForType: function(type) {
          var decamelized = Ember.String.decamelize(type);
          return Ember.String.pluralize(decamelized);
        }
      });
      ```
    */
    pathForType: function(type) {
      var camelized = Ember.String.camelize(type);
      return Ember.String.pluralize(camelized);
    },

    /**
      Returns a Firebase reference for a given type and optional ID.

      By default, it pluralizes the type's name ('post' becomes 'posts'). To
      override the pluralization, see [pathForType](#method_pathForType).

      @method _getRef
      @private
      @param {String} type
      @param {String} id
      @returns {Firebase} ref
    */
    _getRef: function(type, id) {
      var ref = this._ref;
      if (type) {
        ref = ref.child(this.pathForType(type.typeKey));
      }
      if (id) {
        ref = ref.child(id);
      }
      return ref;
    }

  });

})();


// Source: src/emberfire.js
var EmberFire = Ember.Namespace.create();

EmberFire._checkType = function(snapshot, cb, binding) {
  var obj = snapshot.val();
  var type = obj._type;

  switch (type) {
  case "object":
    cb.call(binding, EmberFire.Object.create({ ref: snapshot.ref() }));
    break;
  case "array":
    cb.call(binding, EmberFire.Array.create({ ref: snapshot.ref() }));
    break;
  default:
    cb.call(binding, obj);
  }
};

EmberFire.Object = Ember.ObjectProxy.extend({
  init: function() {
    var object = {};
    this.set("content", object);

    function applyChange(snapshot) {
      var key = snapshot.name();
      /*jshint validthis:true */
      EmberFire._checkType(snapshot, function(val) {
        Ember.set(object, key, val);
      }, this);
    }

    this.ref.child("_type").set("object");

    this.ref.on("child_added", applyChange, this);

    this.ref.on("child_changed", applyChange, this);

    this.ref.on("child_removed", function(snapshot) {
      this.set(snapshot.name(), null);
    }, this);

    this._super();
  },

  willDestroy: function() {
    this.ref.off();
  },

  toJSON: function() {
    var json = {},
        object = this.get("content");

    for (var key in object) {
      json[key] = Ember.get(object, key);
    }

    json._type = "object";
    return json;
  },

  setUnknownProperty: function(key, value) {
    if (value instanceof EmberFire.Object || value instanceof EmberFire.Array) {
      value.ref = this.ref.child(key);
      value.ref.set(value.toJSON());
    } else {
      this.ref.child(key).set(value);
      return this._super(key, value);
    }
  },

  ref: null
});

EmberFire.Array = Ember.ArrayProxy.extend({
  init: function() {
    var array = Ember.A([]);
    this._index = Ember.A([]);

    this.set("content", array);

    this.ref.child("_type").set("array");

    this.ref.on("child_added", function(snapshot) {
      if (snapshot.name() == "_type") {
        return;
      }
      EmberFire._checkType(snapshot, function(val) {
        this._index.pushObject(snapshot.name());
        array.pushObject(val);
      }, this);
    }, this);

    this.ref.on("child_removed", function(snapshot) {
      if (snapshot.name() == "_type") {
        return;
      }
      var idx = this._index.indexOf(snapshot.name());
      this._index.removeAt(idx);
      array.removeAt(idx);
    }, this);

    this.ref.on("child_changed", function(snapshot) {
      if (snapshot.name() == "_type") {
        return;
      }
      var idx = this._index.indexOf(snapshot.name());
      array.replace(idx, 1, [snapshot.val()]);
    }, this);

    this._super();
  },

  replaceContent: function(idx, amt, objects) {
    for (var i = 0; i < amt; i++) {
      var key = this._index[idx+i];
      this.ref.child(key).remove();
    }
    objects.forEach(function(object) {
      var val = object;
      if (object.toJSON) {
        val = object.toJSON();
      }
      return this.ref.push(val).name();
    }, this);
  },

  toJSON: function() {
    var json = {},
        values = this.get("content");

    for (var i = 0; i < this._index.length; i++) {
      json[this._index[i]] = values[i];
    }

    json._type = "array";
    return json;
  }
});


})();

(function() {

(function() {var COMPILED=!0,goog=goog||{};goog.global=this;goog.DEBUG=!0;goog.LOCALE="en";goog.provide=function(a){if(!COMPILED){if(goog.isProvided_(a))throw Error('Namespace "'+a+'" already declared.');delete goog.implicitNamespaces_[a];for(var b=a;(b=b.substring(0,b.lastIndexOf(".")))&&!goog.getObjectByName(b);)goog.implicitNamespaces_[b]=!0}goog.exportPath_(a)};goog.setTestOnly=function(a){if(COMPILED&&!goog.DEBUG)throw a=a||"",Error("Importing test-only code into non-debug environment"+a?": "+a:".");};
COMPILED||(goog.isProvided_=function(a){return!goog.implicitNamespaces_[a]&&!!goog.getObjectByName(a)},goog.implicitNamespaces_={});goog.exportPath_=function(a,b,c){a=a.split(".");c=c||goog.global;!(a[0]in c)&&c.execScript&&c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)!a.length&&goog.isDef(b)?c[d]=b:c=c[d]?c[d]:c[d]={}};goog.getObjectByName=function(a,b){for(var c=a.split("."),d=b||goog.global,e;e=c.shift();)if(goog.isDefAndNotNull(d[e]))d=d[e];else return null;return d};
goog.globalize=function(a,b){var c=b||goog.global,d;for(d in a)c[d]=a[d]};goog.addDependency=function(a,b,c){if(!COMPILED){for(var d,a=a.replace(/\\/g,"/"),e=goog.dependencies_,f=0;d=b[f];f++){e.nameToPath[d]=a;a in e.pathToNames||(e.pathToNames[a]={});e.pathToNames[a][d]=true}for(d=0;b=c[d];d++){a in e.requires||(e.requires[a]={});e.requires[a][b]=true}}};goog.ENABLE_DEBUG_LOADER=!0;
goog.require=function(a){if(!COMPILED&&!goog.isProvided_(a)){if(goog.ENABLE_DEBUG_LOADER){var b=goog.getPathFromDeps_(a);if(b){goog.included_[b]=true;goog.writeScripts_();return}}a="goog.require could not find: "+a;goog.global.console&&goog.global.console.error(a);throw Error(a);}};goog.basePath="";goog.nullFunction=function(){};goog.identityFunction=function(a){return a};goog.abstractMethod=function(){throw Error("unimplemented abstract method");};
goog.addSingletonGetter=function(a){a.getInstance=function(){if(a.instance_)return a.instance_;goog.DEBUG&&(goog.instantiatedSingletons_[goog.instantiatedSingletons_.length]=a);return a.instance_=new a}};goog.instantiatedSingletons_=[];
!COMPILED&&goog.ENABLE_DEBUG_LOADER&&(goog.included_={},goog.dependencies_={pathToNames:{},nameToPath:{},requires:{},visited:{},written:{}},goog.inHtmlDocument_=function(){var a=goog.global.document;return typeof a!="undefined"&&"write"in a},goog.findBasePath_=function(){if(goog.global.CLOSURE_BASE_PATH)goog.basePath=goog.global.CLOSURE_BASE_PATH;else if(goog.inHtmlDocument_())for(var a=goog.global.document.getElementsByTagName("script"),b=a.length-1;b>=0;--b){var c=a[b].src,d=c.lastIndexOf("?"),
d=d==-1?c.length:d;if(c.substr(d-7,7)=="base.js"){goog.basePath=c.substr(0,d-7);break}}},goog.importScript_=function(a){var b=goog.global.CLOSURE_IMPORT_SCRIPT||goog.writeScriptTag_;!goog.dependencies_.written[a]&&b(a)&&(goog.dependencies_.written[a]=true)},goog.writeScriptTag_=function(a){if(goog.inHtmlDocument_()){goog.global.document.write('<script type="text/javascript" src="'+a+'"><\/script>');return true}return false},goog.writeScripts_=function(){function a(e){if(!(e in d.written)){if(!(e in
d.visited)){d.visited[e]=true;if(e in d.requires)for(var g in d.requires[e])if(!goog.isProvided_(g))if(g in d.nameToPath)a(d.nameToPath[g]);else throw Error("Undefined nameToPath for "+g);}if(!(e in c)){c[e]=true;b.push(e)}}}var b=[],c={},d=goog.dependencies_,e;for(e in goog.included_)d.written[e]||a(e);for(e=0;e<b.length;e++)if(b[e])goog.importScript_(goog.basePath+b[e]);else throw Error("Undefined script input");},goog.getPathFromDeps_=function(a){return a in goog.dependencies_.nameToPath?goog.dependencies_.nameToPath[a]:
null},goog.findBasePath_(),goog.global.CLOSURE_NO_DEPS||goog.importScript_(goog.basePath+"deps.js"));
goog.typeOf=function(a){var b=typeof a;if(b=="object")if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if(c=="[object Window]")return"object";if(c=="[object Array]"||typeof a.length=="number"&&typeof a.splice!="undefined"&&typeof a.propertyIsEnumerable!="undefined"&&!a.propertyIsEnumerable("splice"))return"array";if(c=="[object Function]"||typeof a.call!="undefined"&&typeof a.propertyIsEnumerable!="undefined"&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if(b=="function"&&typeof a.call=="undefined")return"object";return b};goog.isDef=function(a){return a!==void 0};goog.isNull=function(a){return a===null};goog.isDefAndNotNull=function(a){return a!=null};goog.isArray=function(a){return goog.typeOf(a)=="array"};goog.isArrayLike=function(a){var b=goog.typeOf(a);return b=="array"||b=="object"&&typeof a.length=="number"};goog.isDateLike=function(a){return goog.isObject(a)&&typeof a.getFullYear=="function"};
goog.isString=function(a){return typeof a=="string"};goog.isBoolean=function(a){return typeof a=="boolean"};goog.isNumber=function(a){return typeof a=="number"};goog.isFunction=function(a){return goog.typeOf(a)=="function"};goog.isObject=function(a){var b=typeof a;return b=="object"&&a!=null||b=="function"};goog.getUid=function(a){return a[goog.UID_PROPERTY_]||(a[goog.UID_PROPERTY_]=++goog.uidCounter_)};goog.removeUid=function(a){"removeAttribute"in a&&a.removeAttribute(goog.UID_PROPERTY_);try{delete a[goog.UID_PROPERTY_]}catch(b){}};
goog.UID_PROPERTY_="closure_uid_"+Math.floor(2147483648*Math.random()).toString(36);goog.uidCounter_=0;goog.getHashCode=goog.getUid;goog.removeHashCode=goog.removeUid;goog.cloneObject=function(a){var b=goog.typeOf(a);if(b=="object"||b=="array"){if(a.clone)return a.clone();var b=b=="array"?[]:{},c;for(c in a)b[c]=goog.cloneObject(a[c]);return b}return a};goog.bindNative_=function(a,b,c){return a.call.apply(a.bind,arguments)};
goog.bindJs_=function(a,b,c){if(!a)throw Error();if(arguments.length>2){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}};goog.bind=function(a,b,c){goog.bind=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?goog.bindNative_:goog.bindJs_;return goog.bind.apply(null,arguments)};
goog.partial=function(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=Array.prototype.slice.call(arguments);b.unshift.apply(b,c);return a.apply(this,b)}};goog.mixin=function(a,b){for(var c in b)a[c]=b[c]};goog.now=Date.now||function(){return+new Date};
goog.globalEval=function(a){if(goog.global.execScript)goog.global.execScript(a,"JavaScript");else if(goog.global.eval){if(goog.evalWorksForGlobals_==null){goog.global.eval("var _et_ = 1;");if(typeof goog.global._et_!="undefined"){delete goog.global._et_;goog.evalWorksForGlobals_=true}else goog.evalWorksForGlobals_=false}if(goog.evalWorksForGlobals_)goog.global.eval(a);else{var b=goog.global.document,c=b.createElement("script");c.type="text/javascript";c.defer=false;c.appendChild(b.createTextNode(a));
b.body.appendChild(c);b.body.removeChild(c)}}else throw Error("goog.globalEval not available");};goog.evalWorksForGlobals_=null;goog.getCssName=function(a,b){var c=function(a){return goog.cssNameMapping_[a]||a},d=function(a){for(var a=a.split("-"),b=[],d=0;d<a.length;d++)b.push(c(a[d]));return b.join("-")},d=goog.cssNameMapping_?goog.cssNameMappingStyle_=="BY_WHOLE"?c:d:function(a){return a};return b?a+"-"+d(b):d(a)};
goog.setCssNameMapping=function(a,b){goog.cssNameMapping_=a;goog.cssNameMappingStyle_=b};!COMPILED&&goog.global.CLOSURE_CSS_NAME_MAPPING&&(goog.cssNameMapping_=goog.global.CLOSURE_CSS_NAME_MAPPING);goog.getMsg=function(a,b){var c=b||{},d;for(d in c)var e=(""+c[d]).replace(/\$/g,"$$$$"),a=a.replace(RegExp("\\{\\$"+d+"\\}","gi"),e);return a};goog.exportSymbol=function(a,b,c){goog.exportPath_(a,b,c)};goog.exportProperty=function(a,b,c){a[b]=c};
goog.inherits=function(a,b){function c(){}c.prototype=b.prototype;a.superClass_=b.prototype;a.prototype=new c;a.prototype.constructor=a};
goog.base=function(a,b,c){var d=arguments.callee.caller;if(d.superClass_)return d.superClass_.constructor.apply(a,Array.prototype.slice.call(arguments,1));for(var e=Array.prototype.slice.call(arguments,2),f=false,g=a.constructor;g;g=g.superClass_&&g.superClass_.constructor)if(g.prototype[b]===d)f=true;else if(f)return g.prototype[b].apply(a,e);if(a[b]===d)return a.constructor.prototype[b].apply(a,e);throw Error("goog.base called from a method of one name to a method of a different name");};
goog.scope=function(a){a.call(goog.global)};var fb={simplelogin:{}};fb.simplelogin.Vars_=function(){this.apiHost="https://auth.firebase.com"};fb.simplelogin.Vars_.prototype.setApiHost=function(a){this.apiHost=a};fb.simplelogin.Vars_.prototype.getApiHost=function(){return this.apiHost};fb.simplelogin.Vars=new fb.simplelogin.Vars_;goog.json={};goog.json.isValid_=function(a){return/^\s*$/.test(a)?!1:/^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g,"@").replace(/"[^"\\\n\r\u2028\u2029\x00-\x08\x10-\x1f\x80-\x9f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g,""))};goog.json.parse=function(a){a=String(a);if(goog.json.isValid_(a))try{return eval("("+a+")")}catch(b){}throw Error("Invalid JSON string: "+a);};
goog.json.unsafeParse=function(a){return eval("("+a+")")};goog.json.serialize=function(a,b){return(new goog.json.Serializer(b)).serialize(a)};goog.json.Serializer=function(a){this.replacer_=a};goog.json.Serializer.prototype.serialize=function(a){var b=[];this.serialize_(a,b);return b.join("")};
goog.json.Serializer.prototype.serialize_=function(a,b){switch(typeof a){case "string":this.serializeString_(a,b);break;case "number":this.serializeNumber_(a,b);break;case "boolean":b.push(a);break;case "undefined":b.push("null");break;case "object":if(null==a){b.push("null");break}if(goog.isArray(a)){this.serializeArray(a,b);break}this.serializeObject_(a,b);break;case "function":break;default:throw Error("Unknown type: "+typeof a);}};
goog.json.Serializer.charToJsonCharCache_={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"};goog.json.Serializer.charsToReplace_=/\uffff/.test("\uffff")?/[\\\"\x00-\x1f\x7f-\uffff]/g:/[\\\"\x00-\x1f\x7f-\xff]/g;
goog.json.Serializer.prototype.serializeString_=function(a,b){b.push('"',a.replace(goog.json.Serializer.charsToReplace_,function(a){if(a in goog.json.Serializer.charToJsonCharCache_)return goog.json.Serializer.charToJsonCharCache_[a];var b=a.charCodeAt(0),e="\\u";16>b?e+="000":256>b?e+="00":4096>b&&(e+="0");return goog.json.Serializer.charToJsonCharCache_[a]=e+b.toString(16)}),'"')};goog.json.Serializer.prototype.serializeNumber_=function(a,b){b.push(isFinite(a)&&!isNaN(a)?a:"null")};
goog.json.Serializer.prototype.serializeArray=function(a,b){var c=a.length;b.push("[");for(var d="",e=0;e<c;e++)b.push(d),d=a[e],this.serialize_(this.replacer_?this.replacer_.call(a,String(e),d):d,b),d=",";b.push("]")};
goog.json.Serializer.prototype.serializeObject_=function(a,b){b.push("{");var c="",d;for(d in a)if(Object.prototype.hasOwnProperty.call(a,d)){var e=a[d];"function"!=typeof e&&(b.push(c),this.serializeString_(d,b),b.push(":"),this.serialize_(this.replacer_?this.replacer_.call(a,d,e):e,b),c=",")}b.push("}")};fb.simplelogin.util={};fb.simplelogin.util.json={};fb.simplelogin.util.json.eval=function(a){return"undefined"!==typeof JSON&&goog.isDef(JSON.parse)?JSON.parse(a):goog.json.parse(a)};fb.simplelogin.util.json.stringify=function(a){return"undefined"!==typeof JSON&&goog.isDef(JSON.stringify)?JSON.stringify(a):goog.json.serialize(a)};fb.simplelogin.transports={};fb.simplelogin.transports.Transport={};fb.simplelogin.Transport=function(){};fb.simplelogin.Transport.prototype.open=function(){};fb.simplelogin.transports.Popup={};fb.simplelogin.Popup=function(){};fb.simplelogin.Popup.prototype.open=function(){};fb.simplelogin.util.misc={};fb.simplelogin.util.misc.parseUrl=function(a){var b=document.createElement("a");b.href=a;return{protocol:b.protocol.replace(":",""),host:b.hostname,port:b.port,query:b.search,params:fb.simplelogin.util.misc.parseQuerystring(b.search),hash:b.hash.replace("#",""),path:b.pathname.replace(/^([^\/])/,"/$1")}};fb.simplelogin.util.misc.parseQuerystring=function(a){for(var b={},a=a.replace(/^\?/,"").split("&"),c=0;c<a.length;c++)if(a[c]){var d=a[c].split("=");b[d[0]]=d[1]}return b};var popupTimeout=4E4;fb.simplelogin.transports.CordovaInAppBrowser_=function(){};
fb.simplelogin.transports.CordovaInAppBrowser_.prototype.open=function(a,b,c){callbackInvoked=!1;var d=function(){var a=Array.prototype.slice.apply(arguments);callbackInvoked||(callbackInvoked=!0,c.apply(null,a))},e=window.open(a+"&transport=internal-redirect-hash","blank","location=no");e.addEventListener("loadstop",function(a){var b;if(a&&a.url&&(a=fb.simplelogin.util.misc.parseUrl(a.url),"/blank/page.html"===a.path)){e.close();try{var c=fb.simplelogin.util.misc.parseQuerystring(decodeURIComponent(a.hash)),
a={},i;for(i in c)a[i]=fb.simplelogin.util.json.eval(c[i]);b=a}catch(j){}b&&b.token&&b.user?d(null,b):b&&b.error?d(b.error):d({code:"UNKNOWN_ERROR",message:"An unknown error occurred."})}});e.addEventListener("exit",function(){d({code:"USER_DENIED",message:"User cancelled the authentication request."})});setTimeout(function(){e&&e.close&&e.close()},popupTimeout)};fb.simplelogin.transports.CordovaInAppBrowser=new fb.simplelogin.transports.CordovaInAppBrowser_;fb.simplelogin.Errors={};var messagePrefix="FirebaseSimpleLogin: ",errors={UNKNOWN_ERROR:"An unknown error occurred.",INVALID_EMAIL:"Invalid email specified.",INVALID_PASSWORD:"Invalid password specified.",USER_DENIED:"User cancelled the authentication request.",TRIGGER_IO_TABS:'The "forge.tabs" module required when using Firebase Simple Login and                         Trigger.io. Without this module included and enabled, login attempts to                         OAuth authentication providers will not be able to complete.'};
fb.simplelogin.Errors.format=function(a,b){var c=a||"UNKNOWN_ERROR",d=b||errors[c],e={},f=arguments;2===f.length?(c=f[0],d=f[1]):1===f.length&&("object"===typeof f[0]&&f[0].code&&f[0].message?(c=f[0].code,d=f[0].message,e=f[0].data):"string"===typeof f[0]&&(c=f[0],d=""));d=Error(messagePrefix+d);d.code=c;e&&(d.data=e);return d};fb.simplelogin.Errors.get=function(a){errors[a]||(a="UNKNOWN_ERROR");return fb.simplelogin.Errors.format(a,errors[a])};fb.simplelogin.transports.WinChan=function(){function a(a,b,c){a.attachEvent?a.attachEvent("on"+b,c):a.addEventListener&&a.addEventListener(b,c,!1)}function b(a,b,c){a.detachEvent?a.detachEvent("on"+b,c):a.removeEventListener&&a.removeEventListener(b,c,!1)}function c(a){/^https?:\/\//.test(a)||(a=window.location.href);var b=/^(https?:\/\/[\-_a-zA-Z\.0-9:]+)/.exec(a);return b?b[1]:a}var d="die",e,f=-1,g=navigator.userAgent;if("Microsoft Internet Explorer"===navigator.appName){var h=/MSIE ([0-9]{1,}[\.0-9]{0,})/;
(g=g.match(h))&&1<g.length&&(f=parseFloat(g[1]))}else-1<g.indexOf("Trident")&&(h=/rv:([0-9]{2,2}[\.0-9]{0,})/,(g=g.match(h))&&1<g.length&&(f=parseFloat(g[1])));e=8<=f;return fb.simplelogin.util.json&&fb.simplelogin.util.json.eval&&fb.simplelogin.util.json.stringify&&window.postMessage?{open:function(f,g,h){function m(){n&&document.body.removeChild(n);n=void 0;w&&(w=clearInterval(w));b(window,"message",l);b(window,"unload",m);if(v)try{v.close()}catch(a){p.postMessage(d,r)}v=p=void 0}function l(a){if(a.origin===
r)try{var b=fb.simplelogin.util.json.eval(a.data);"ready"===b.a?p.postMessage(x,r):"error"===b.a?(m(),h&&(h(b.d),h=null)):"response"===b.a&&(m(),h&&(h(null,b.d),h=null))}catch(c){}}if(!h)throw"missing required callback argument";g.url=f;var o;g.url||(o="missing required 'url' parameter");g.relay_url||(o="missing required 'relay_url' parameter");o&&setTimeout(function(){h(o)},0);g.window_name||(g.window_name=null);if(!(f=!g.window_features))a:{try{var q=navigator.userAgent,f=-1!=q.indexOf("Fennec/")||
-1!=q.indexOf("Firefox/")&&-1!=q.indexOf("Android");break a}catch(u){}f=!1}f&&(g.window_features=void 0);var n,r=c(g.url);if(r!==c(g.relay_url))return setTimeout(function(){h("invalid arguments: origin of url and relay_url must match")},0);var p;e&&(n=document.createElement("iframe"),n.setAttribute("src",g.relay_url),n.style.display="none",n.setAttribute("name","__winchan_relay_frame"),document.body.appendChild(n),p=n.contentWindow);var v=window.open(g.url,g.window_name,g.window_features);p||(p=v);
var w=setInterval(function(){if(v&&v.closed){m();if(h){h("unknown closed window");h=null}}},500),x=fb.simplelogin.util.json.stringify({a:"request",d:g.params});a(window,"unload",m);a(window,"message",l);return{close:m,focus:function(){if(v)try{v.focus()}catch(a){}}}},onOpen:function(c){function f(a){a=fb.simplelogin.util.json.stringify(a);e?p.doPost(a,l):p.postMessage(a,l)}function g(a){var d;try{d=fb.simplelogin.util.json.eval(a.data)}catch(e){}d&&"request"===d.a&&(b(window,"message",g),l=a.origin,
c&&setTimeout(function(){c(l,d.d,function(a){c=void 0;f({a:"response",d:a})})},0))}function h(a){if(a.data===d)try{window.close()}catch(b){}}var l="*",o;if(e)a:{for(var q=window.location,u=window.opener.frames,q=q.protocol+"//"+q.host,n=u.length-1;0<=n;n--)try{if(0===u[n].location.href.indexOf(q)&&"__winchan_relay_frame"===u[n].name){o=u[n];break a}}catch(r){}o=void 0}else o=window.opener;var p=o;if(!p)throw"can't find relay frame";a(e?p:window,"message",g);a(e?p:window,"message",h);try{f({a:"ready"})}catch(v){a(p,
"load",function(){f({a:"ready"})})}var w=function(){try{b(e?p:window,"message",h)}catch(a){}c&&f({a:"error",d:"client closed window"});c=void 0;try{window.close()}catch(d){}};a(window,"unload",w);return{detach:function(){b(window,"unload",w)}}}}:{open:function(a,b,c,d){setTimeout(function(){d("unsupported browser")},0)},onOpen:function(a){setTimeout(function(){a("unsupported browser")},0)}}}();fb.simplelogin.transports.TriggerIoTab_=function(){};
fb.simplelogin.transports.TriggerIoTab_.prototype.open=function(a,b,c){callbackInvoked=!1;var d=function(){var a=Array.prototype.slice.apply(arguments);callbackInvoked||(callbackInvoked=!0,c.apply(null,a))};forge.tabs.openWithOptions({url:a+"&transport=internal-redirect-hash",pattern:fb.simplelogin.Vars.getApiHost()+"/blank/page*"},function(a){var b;if(a&&a.url)try{var c=fb.simplelogin.util.misc.parseUrl(a.url),h=fb.simplelogin.util.misc.parseQuerystring(decodeURIComponent(c.hash)),a={},i;for(i in h)a[i]=
fb.simplelogin.util.json.eval(h[i]);b=a}catch(j){}b&&b.token&&b.user?d(null,b):b&&b.error?d(b.error):d({code:"UNKNOWN_ERROR",message:"An unknown error occurred."})},function(){d({code:"UNKNOWN_ERROR",message:"An unknown error occurred."})})};fb.simplelogin.transports.TriggerIoTab=new fb.simplelogin.transports.TriggerIoTab_;fb.simplelogin.util.sjcl={};var sjcl={cipher:{},hash:{},keyexchange:{},mode:{},misc:{},codec:{},exception:{corrupt:function(a){this.toString=function(){return"CORRUPT: "+this.message};this.message=a},invalid:function(a){this.toString=function(){return"INVALID: "+this.message};this.message=a},bug:function(a){this.toString=function(){return"BUG: "+this.message};this.message=a},notReady:function(a){this.toString=function(){return"NOT READY: "+this.message};this.message=a}}};
"undefined"!=typeof module&&module.exports&&(module.exports=sjcl);
sjcl.cipher.aes=function(a){this.h[0][0][0]||this.w();var b,c,d,e,f=this.h[0][4],g=this.h[1];b=a.length;var h=1;if(b!==4&&b!==6&&b!==8)throw new sjcl.exception.invalid("invalid aes key size");this.a=[d=a.slice(0),e=[]];for(a=b;a<4*b+28;a++){c=d[a-1];if(a%b===0||b===8&&a%b===4){c=f[c>>>24]<<24^f[c>>16&255]<<16^f[c>>8&255]<<8^f[c&255];if(a%b===0){c=c<<8^c>>>24^h<<24;h=h<<1^(h>>7)*283}}d[a]=d[a-b]^c}for(b=0;a;b++,a--){c=d[b&3?a:a-4];e[b]=a<=4||b<4?c:g[0][f[c>>>24]]^g[1][f[c>>16&255]]^g[2][f[c>>8&255]]^
g[3][f[c&255]]}};
sjcl.cipher.aes.prototype={encrypt:function(a){return this.G(a,0)},decrypt:function(a){return this.G(a,1)},h:[[[],[],[],[],[]],[[],[],[],[],[]]],w:function(){var a=this.h[0],b=this.h[1],c=a[4],d=b[4],e,f,g,h=[],i=[],j,k,m,l;for(e=0;e<256;e++)i[(h[e]=e<<1^(e>>7)*283)^e]=e;for(f=g=0;!c[f];f=f^(j||1),g=i[g]||1){m=g^g<<1^g<<2^g<<3^g<<4;m=m>>8^m&255^99;c[f]=m;d[m]=f;k=h[e=h[j=h[f]]];l=k*16843009^e*65537^j*257^f*16843008;k=h[m]*257^m*16843008;for(e=0;e<4;e++){a[e][f]=k=k<<24^k>>>8;b[e][m]=l=l<<24^l>>>8}}for(e=
0;e<5;e++){a[e]=a[e].slice(0);b[e]=b[e].slice(0)}},G:function(a,b){if(a.length!==4)throw new sjcl.exception.invalid("invalid aes block size");var c=this.a[b],d=a[0]^c[0],e=a[b?3:1]^c[1],f=a[2]^c[2],a=a[b?1:3]^c[3],g,h,i,j=c.length/4-2,k,m=4,l=[0,0,0,0];g=this.h[b];var o=g[0],q=g[1],u=g[2],n=g[3],r=g[4];for(k=0;k<j;k++){g=o[d>>>24]^q[e>>16&255]^u[f>>8&255]^n[a&255]^c[m];h=o[e>>>24]^q[f>>16&255]^u[a>>8&255]^n[d&255]^c[m+1];i=o[f>>>24]^q[a>>16&255]^u[d>>8&255]^n[e&255]^c[m+2];a=o[a>>>24]^q[d>>16&255]^
u[e>>8&255]^n[f&255]^c[m+3];m=m+4;d=g;e=h;f=i}for(k=0;k<4;k++){l[b?3&-k:k]=r[d>>>24]<<24^r[e>>16&255]<<16^r[f>>8&255]<<8^r[a&255]^c[m++];g=d;d=e;e=f;f=a;a=g}return l}};
sjcl.bitArray={bitSlice:function(a,b,c){a=sjcl.bitArray.N(a.slice(b/32),32-(b&31)).slice(1);return c===void 0?a:sjcl.bitArray.clamp(a,c-b)},extract:function(a,b,c){var d=Math.floor(-b-c&31);return((b+c-1^b)&-32?a[b/32|0]<<32-d^a[b/32+1|0]>>>d:a[b/32|0]>>>d)&(1<<c)-1},concat:function(a,b){if(a.length===0||b.length===0)return a.concat(b);var c=a[a.length-1],d=sjcl.bitArray.getPartial(c);return d===32?a.concat(b):sjcl.bitArray.N(b,d,c|0,a.slice(0,a.length-1))},bitLength:function(a){var b=a.length;return b===
0?0:(b-1)*32+sjcl.bitArray.getPartial(a[b-1])},clamp:function(a,b){if(a.length*32<b)return a;var a=a.slice(0,Math.ceil(b/32)),c=a.length,b=b&31;c>0&&b&&(a[c-1]=sjcl.bitArray.partial(b,a[c-1]&2147483648>>b-1,1));return a},partial:function(a,b,c){return a===32?b:(c?b|0:b<<32-a)+a*1099511627776},getPartial:function(a){return Math.round(a/1099511627776)||32},equal:function(a,b){if(sjcl.bitArray.bitLength(a)!==sjcl.bitArray.bitLength(b))return false;var c=0,d;for(d=0;d<a.length;d++)c=c|a[d]^b[d];return c===
0},N:function(a,b,c,d){var e;for(d===void 0&&(d=[]);b>=32;b=b-32){d.push(c);c=0}if(b===0)return d.concat(a);for(e=0;e<a.length;e++){d.push(c|a[e]>>>b);c=a[e]<<32-b}e=a.length?a[a.length-1]:0;a=sjcl.bitArray.getPartial(e);d.push(sjcl.bitArray.partial(b+a&31,b+a>32?c:d.pop(),1));return d},O:function(a,b){return[a[0]^b[0],a[1]^b[1],a[2]^b[2],a[3]^b[3]]}};
sjcl.codec.utf8String={fromBits:function(a){var b="",c=sjcl.bitArray.bitLength(a),d,e;for(d=0;d<c/8;d++){(d&3)===0&&(e=a[d/4]);b=b+String.fromCharCode(e>>>24);e=e<<8}return decodeURIComponent(escape(b))},toBits:function(a){var a=unescape(encodeURIComponent(a)),b=[],c,d=0;for(c=0;c<a.length;c++){d=d<<8|a.charCodeAt(c);if((c&3)===3){b.push(d);d=0}}c&3&&b.push(sjcl.bitArray.partial(8*(c&3),d));return b}};
sjcl.codec.base64={C:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",fromBits:function(a,b,c){var d="",e=0,f=sjcl.codec.base64.C,g=0,h=sjcl.bitArray.bitLength(a);c&&(f=f.substr(0,62)+"-_");for(c=0;d.length*6<h;){d=d+f.charAt((g^a[c]>>>e)>>>26);if(e<6){g=a[c]<<6-e;e=e+26;c++}else{g=g<<6;e=e-6}}for(;d.length&3&&!b;)d=d+"=";return d},toBits:function(a,b){var a=a.replace(/\s|=/g,""),c=[],d=0,e=sjcl.codec.base64.C,f=0,g;b&&(e=e.substr(0,62)+"-_");for(b=0;b<a.length;b++){g=e.indexOf(a.charAt(b));
if(g<0)throw new sjcl.exception.invalid("this isn't base64!");if(d>26){d=d-26;c.push(f^g>>>d);f=g<<32-d}else{d=d+6;f=f^g<<32-d}}d&56&&c.push(sjcl.bitArray.partial(d&56,f,1));return c}};sjcl.codec.base64url={fromBits:function(a){return sjcl.codec.base64.fromBits(a,1,1)},toBits:function(a){return sjcl.codec.base64.toBits(a,1)}};sjcl.hash.sha256=function(a){this.a[0]||this.w();if(a){this.m=a.m.slice(0);this.i=a.i.slice(0);this.e=a.e}else this.reset()};sjcl.hash.sha256.hash=function(a){return(new sjcl.hash.sha256).update(a).finalize()};
sjcl.hash.sha256.prototype={blockSize:512,reset:function(){this.m=this.L.slice(0);this.i=[];this.e=0;return this},update:function(a){typeof a==="string"&&(a=sjcl.codec.utf8String.toBits(a));var b,c=this.i=sjcl.bitArray.concat(this.i,a);b=this.e;a=this.e=b+sjcl.bitArray.bitLength(a);for(b=512+b&-512;b<=a;b=b+512)this.B(c.splice(0,16));return this},finalize:function(){var a,b=this.i,c=this.m,b=sjcl.bitArray.concat(b,[sjcl.bitArray.partial(1,1)]);for(a=b.length+2;a&15;a++)b.push(0);b.push(Math.floor(this.e/
4294967296));for(b.push(this.e|0);b.length;)this.B(b.splice(0,16));this.reset();return c},L:[],a:[],w:function(){function a(a){return(a-Math.floor(a))*4294967296|0}var b=0,c=2,d;a:for(;b<64;c++){for(d=2;d*d<=c;d++)if(c%d===0)continue a;b<8&&(this.L[b]=a(Math.pow(c,0.5)));this.a[b]=a(Math.pow(c,1/3));b++}},B:function(a){for(var b,c,d=a.slice(0),e=this.m,f=this.a,g=e[0],h=e[1],i=e[2],j=e[3],k=e[4],m=e[5],l=e[6],o=e[7],a=0;a<64;a++){if(a<16)b=d[a];else{b=d[a+1&15];c=d[a+14&15];b=d[a&15]=(b>>>7^b>>>18^
b>>>3^b<<25^b<<14)+(c>>>17^c>>>19^c>>>10^c<<15^c<<13)+d[a&15]+d[a+9&15]|0}b=b+o+(k>>>6^k>>>11^k>>>25^k<<26^k<<21^k<<7)+(l^k&(m^l))+f[a];o=l;l=m;m=k;k=j+b|0;j=i;i=h;h=g;g=b+(h&i^j&(h^i))+(h>>>2^h>>>13^h>>>22^h<<30^h<<19^h<<10)|0}e[0]=e[0]+g|0;e[1]=e[1]+h|0;e[2]=e[2]+i|0;e[3]=e[3]+j|0;e[4]=e[4]+k|0;e[5]=e[5]+m|0;e[6]=e[6]+l|0;e[7]=e[7]+o|0}};
sjcl.mode.ccm={name:"ccm",encrypt:function(a,b,c,d,e){var f,g=b.slice(0),h=sjcl.bitArray,i=h.bitLength(c)/8,j=h.bitLength(g)/8,e=e||64,d=d||[];if(i<7)throw new sjcl.exception.invalid("ccm: iv must be at least 7 bytes");for(f=2;f<4&&j>>>8*f;f++);f<15-i&&(f=15-i);c=h.clamp(c,8*(15-f));b=sjcl.mode.ccm.F(a,b,c,d,e,f);g=sjcl.mode.ccm.H(a,g,c,b,e,f);return h.concat(g.data,g.tag)},decrypt:function(a,b,c,d,e){var e=e||64,d=d||[],f=sjcl.bitArray,g=f.bitLength(c)/8,h=f.bitLength(b),i=f.clamp(b,h-e),j=f.bitSlice(b,
h-e),h=(h-e)/8;if(g<7)throw new sjcl.exception.invalid("ccm: iv must be at least 7 bytes");for(b=2;b<4&&h>>>8*b;b++);b<15-g&&(b=15-g);c=f.clamp(c,8*(15-b));i=sjcl.mode.ccm.H(a,i,c,j,e,b);a=sjcl.mode.ccm.F(a,i.data,c,d,e,b);if(!f.equal(i.tag,a))throw new sjcl.exception.corrupt("ccm: tag doesn't match");return i.data},F:function(a,b,c,d,e,f){var g=[],h=sjcl.bitArray,i=h.O,e=e/8;if(e%2||e<4||e>16)throw new sjcl.exception.invalid("ccm: invalid tag length");if(d.length>4294967295||b.length>4294967295)throw new sjcl.exception.bug("ccm: can't deal with 4GiB or more data");
f=[h.partial(8,(d.length?64:0)|e-2<<2|f-1)];f=h.concat(f,c);f[3]=f[3]|h.bitLength(b)/8;f=a.encrypt(f);if(d.length){c=h.bitLength(d)/8;c<=65279?g=[h.partial(16,c)]:c<=4294967295&&(g=h.concat([h.partial(16,65534)],[c]));g=h.concat(g,d);for(d=0;d<g.length;d=d+4)f=a.encrypt(i(f,g.slice(d,d+4).concat([0,0,0])))}for(d=0;d<b.length;d=d+4)f=a.encrypt(i(f,b.slice(d,d+4).concat([0,0,0])));return h.clamp(f,e*8)},H:function(a,b,c,d,e,f){var g,h=sjcl.bitArray;g=h.O;var i=b.length,j=h.bitLength(b),c=h.concat([h.partial(8,
f-1)],c).concat([0,0,0]).slice(0,4),d=h.bitSlice(g(d,a.encrypt(c)),0,e);if(!i)return{tag:d,data:[]};for(g=0;g<i;g=g+4){c[3]++;e=a.encrypt(c);b[g]=b[g]^e[0];b[g+1]=b[g+1]^e[1];b[g+2]=b[g+2]^e[2];b[g+3]=b[g+3]^e[3]}return{tag:d,data:h.clamp(b,j)}}};sjcl.misc.hmac=function(a,b){this.K=b=b||sjcl.hash.sha256;var c=[[],[]],d=b.prototype.blockSize/32;this.k=[new b,new b];a.length>d&&(a=b.hash(a));for(b=0;b<d;b++){c[0][b]=a[b]^909522486;c[1][b]=a[b]^1549556828}this.k[0].update(c[0]);this.k[1].update(c[1])};
sjcl.misc.hmac.prototype.encrypt=sjcl.misc.hmac.prototype.mac=function(a){a=(new this.K(this.k[0])).update(a).finalize();return(new this.K(this.k[1])).update(a).finalize()};
sjcl.misc.pbkdf2=function(a,b,c,d,e){c=c||1E3;if(d<0||c<0)throw sjcl.exception.invalid("invalid params to pbkdf2");typeof a==="string"&&(a=sjcl.codec.utf8String.toBits(a));var e=e||sjcl.misc.hmac,a=new e(a),f,g,h,i,j=[],k=sjcl.bitArray;for(i=1;32*j.length<(d||1);i++){e=f=a.encrypt(k.concat(b,[i]));for(g=1;g<c;g++){f=a.encrypt(f);for(h=0;h<f.length;h++)e[h]=e[h]^f[h]}j=j.concat(e)}d&&(j=k.clamp(j,d));return j};
sjcl.random={randomWords:function(a,b){var c=[],b=this.isReady(b),d;if(b===0)throw new sjcl.exception.notReady("generator isn't seeded");b&2&&this.T(!(b&1));for(b=0;b<a;b=b+4){(b+1)%65536===0&&this.J();d=this.u();c.push(d[0],d[1],d[2],d[3])}this.J();return c.slice(0,a)},setDefaultParanoia:function(a){this.s=a},addEntropy:function(a,b,c){var c=c||"user",d,e,f=(new Date).valueOf(),g=this.p[c],h=this.isReady(),i=0;d=this.D[c];d===void 0&&(d=this.D[c]=this.Q++);g===void 0&&(g=this.p[c]=0);this.p[c]=(this.p[c]+
1)%this.b.length;switch(typeof a){case "number":b===void 0&&(b=1);this.b[g].update([d,this.t++,1,b,f,1,a|0]);break;case "object":c=Object.prototype.toString.call(a);if(c==="[object Uint32Array]"){e=[];for(c=0;c<a.length;c++)e.push(a[c]);a=e}else{c!=="[object Array]"&&(i=1);for(c=0;c<a.length&&!i;c++)typeof a[c]!="number"&&(i=1)}if(!i){if(b===void 0)for(c=b=0;c<a.length;c++)for(e=a[c];e>0;){b++;e=e>>>1}this.b[g].update([d,this.t++,2,b,f,a.length].concat(a))}break;case "string":if(b===void 0)b=a.length;
this.b[g].update([d,this.t++,3,b,f,a.length]);this.b[g].update(a);break;default:i=1}if(i)throw new sjcl.exception.bug("random: addEntropy only supports number, array of numbers or string");this.j[g]=this.j[g]+b;this.f=this.f+b;if(h===0){this.isReady()!==0&&this.I("seeded",Math.max(this.g,this.f));this.I("progress",this.getProgress())}},isReady:function(a){a=this.A[a!==void 0?a:this.s];return this.g&&this.g>=a?this.j[0]>80&&(new Date).valueOf()>this.M?3:1:this.f>=a?2:0},getProgress:function(a){a=this.A[a?
a:this.s];return this.g>=a?1:this.f>a?1:this.f/a},startCollectors:function(){if(!this.l){if(window.addEventListener){window.addEventListener("load",this.n,false);window.addEventListener("mousemove",this.o,false)}else if(document.attachEvent){document.attachEvent("onload",this.n);document.attachEvent("onmousemove",this.o)}else throw new sjcl.exception.bug("can't attach event");this.l=true}},stopCollectors:function(){if(this.l){if(window.removeEventListener){window.removeEventListener("load",this.n,
false);window.removeEventListener("mousemove",this.o,false)}else if(window.detachEvent){window.detachEvent("onload",this.n);window.detachEvent("onmousemove",this.o)}this.l=false}},addEventListener:function(a,b){this.q[a][this.P++]=b},removeEventListener:function(a,b){var c,a=this.q[a],d=[];for(c in a)a.hasOwnProperty(c)&&a[c]===b&&d.push(c);for(b=0;b<d.length;b++){c=d[b];delete a[c]}},b:[new sjcl.hash.sha256],j:[0],z:0,p:{},t:0,D:{},Q:0,g:0,f:0,M:0,a:[0,0,0,0,0,0,0,0],d:[0,0,0,0],r:void 0,s:6,l:!1,
q:{progress:{},seeded:{}},P:0,A:[0,48,64,96,128,192,256,384,512,768,1024],u:function(){for(var a=0;a<4;a++){this.d[a]=this.d[a]+1|0;if(this.d[a])break}return this.r.encrypt(this.d)},J:function(){this.a=this.u().concat(this.u());this.r=new sjcl.cipher.aes(this.a)},S:function(a){this.a=sjcl.hash.sha256.hash(this.a.concat(a));this.r=new sjcl.cipher.aes(this.a);for(a=0;a<4;a++){this.d[a]=this.d[a]+1|0;if(this.d[a])break}},T:function(a){var b=[],c=0,d;this.M=b[0]=(new Date).valueOf()+3E4;for(d=0;d<16;d++)b.push(Math.random()*
4294967296|0);for(d=0;d<this.b.length;d++){b=b.concat(this.b[d].finalize());c=c+this.j[d];this.j[d]=0;if(!a&&this.z&1<<d)break}if(this.z>=1<<this.b.length){this.b.push(new sjcl.hash.sha256);this.j.push(0)}this.f=this.f-c;if(c>this.g)this.g=c;this.z++;this.S(b)},o:function(a){sjcl.random.addEntropy([a.x||a.clientX||a.offsetX||0,a.y||a.clientY||a.offsetY||0],2,"mouse")},n:function(){sjcl.random.addEntropy((new Date).valueOf(),2,"loadtime")},I:function(a,b){var c,a=sjcl.random.q[a],d=[];for(c in a)a.hasOwnProperty(c)&&
d.push(a[c]);for(c=0;c<d.length;c++)d[c](b)}};try{var s=new Uint32Array(32);crypto.getRandomValues(s);sjcl.random.addEntropy(s,1024,"crypto['getRandomValues']")}catch(t){}
sjcl.json={defaults:{v:1,iter:1E3,ks:128,ts:64,mode:"ccm",adata:"",cipher:"aes"},encrypt:function(a,b,c,d){var c=c||{},d=d||{},e=sjcl.json,f=e.c({iv:sjcl.random.randomWords(4,0)},e.defaults),g;e.c(f,c);c=f.adata;if(typeof f.salt==="string")f.salt=sjcl.codec.base64.toBits(f.salt);if(typeof f.iv==="string")f.iv=sjcl.codec.base64.toBits(f.iv);if(!sjcl.mode[f.mode]||!sjcl.cipher[f.cipher]||typeof a==="string"&&f.iter<=100||f.ts!==64&&f.ts!==96&&f.ts!==128||f.ks!==128&&f.ks!==192&&f.ks!==256||f.iv.length<
2||f.iv.length>4)throw new sjcl.exception.invalid("json encrypt: invalid parameters");if(typeof a==="string"){g=sjcl.misc.cachedPbkdf2(a,f);a=g.key.slice(0,f.ks/32);f.salt=g.salt}typeof b==="string"&&(b=sjcl.codec.utf8String.toBits(b));typeof c==="string"&&(c=sjcl.codec.utf8String.toBits(c));g=new sjcl.cipher[f.cipher](a);e.c(d,f);d.key=a;f.ct=sjcl.mode[f.mode].encrypt(g,b,f.iv,c,f.ts);return e.encode(f)},decrypt:function(a,b,c,d){var c=c||{},d=d||{},e=sjcl.json,b=e.c(e.c(e.c({},e.defaults),e.decode(b)),
c,true),f,c=b.adata;if(typeof b.salt==="string")b.salt=sjcl.codec.base64.toBits(b.salt);if(typeof b.iv==="string")b.iv=sjcl.codec.base64.toBits(b.iv);if(!sjcl.mode[b.mode]||!sjcl.cipher[b.cipher]||typeof a==="string"&&b.iter<=100||b.ts!==64&&b.ts!==96&&b.ts!==128||b.ks!==128&&b.ks!==192&&b.ks!==256||!b.iv||b.iv.length<2||b.iv.length>4)throw new sjcl.exception.invalid("json decrypt: invalid parameters");if(typeof a==="string"){f=sjcl.misc.cachedPbkdf2(a,b);a=f.key.slice(0,b.ks/32);b.salt=f.salt}typeof c===
"string"&&(c=sjcl.codec.utf8String.toBits(c));f=new sjcl.cipher[b.cipher](a);c=sjcl.mode[b.mode].decrypt(f,b.ct,b.iv,c,b.ts);e.c(d,b);d.key=a;return sjcl.codec.utf8String.fromBits(c)},encode:function(a){var b,c="{",d="";for(b in a)if(a.hasOwnProperty(b)){if(!b.match(/^[a-z0-9]+$/i))throw new sjcl.exception.invalid("json encode: invalid property name");c=c+(d+'"'+b+'":');d=",";switch(typeof a[b]){case "number":case "boolean":c=c+a[b];break;case "string":c=c+('"'+escape(a[b])+'"');break;case "object":c=
c+('"'+sjcl.codec.base64.fromBits(a[b],0)+'"');break;default:throw new sjcl.exception.bug("json encode: unsupported type");}}return c+"}"},decode:function(a){a=a.replace(/\s/g,"");if(!a.match(/^\{.*\}$/))throw new sjcl.exception.invalid("json decode: this isn't json!");var a=a.replace(/^\{|\}$/g,"").split(/,/),b={},c,d;for(c=0;c<a.length;c++){if(!(d=a[c].match(/^(?:(["']?)([a-z][a-z0-9]*)\1):(?:(\d+)|"([a-z0-9+\/%*_.@=\-]*)")$/i)))throw new sjcl.exception.invalid("json decode: this isn't json!");
b[d[2]]=d[3]?parseInt(d[3],10):d[2].match(/^(ct|salt|iv)$/)?sjcl.codec.base64.toBits(d[4]):unescape(d[4])}return b},c:function(a,b,c){a===void 0&&(a={});if(b===void 0)return a;for(var d in b)if(b.hasOwnProperty(d)){if(c&&a[d]!==void 0&&a[d]!==b[d])throw new sjcl.exception.invalid("required parameter overridden");a[d]=b[d]}return a},V:function(a,b){var c={},d;for(d in a)a.hasOwnProperty(d)&&a[d]!==b[d]&&(c[d]=a[d]);return c},U:function(a,b){var c={},d;for(d=0;d<b.length;d++)a[b[d]]!==void 0&&(c[b[d]]=
a[b[d]]);return c}};sjcl.encrypt=sjcl.json.encrypt;sjcl.decrypt=sjcl.json.decrypt;sjcl.misc.R={};sjcl.misc.cachedPbkdf2=function(a,b){var c=sjcl.misc.R,d,b=b||{};d=b.iter||1E3;c=c[a]=c[a]||{};d=c[d]=c[d]||{firstSalt:b.salt&&b.salt.length?b.salt.slice(0):sjcl.random.randomWords(2,0)};c=b.salt===void 0?d.firstSalt:b.salt;d[c]=d[c]||sjcl.misc.pbkdf2(a,c,b.iter);return{key:d[c].slice(0),salt:c.slice(0)}};fb.simplelogin.util.env={};fb.simplelogin.util.env.hasLocalStorage=function(){try{if(localStorage){localStorage.setItem("firebase-sentinel","test");var a=localStorage.getItem("firebase-sentinel");localStorage.removeItem("firebase-sentinel");return"test"===a}}catch(b){}return!1};
fb.simplelogin.util.env.hasSessionStorage=function(){try{if(sessionStorage){sessionStorage.setItem("firebase-sentinel","test");var a=sessionStorage.getItem("firebase-sentinel");sessionStorage.removeItem("firebase-sentinel");return"test"===a}}catch(b){}return!1};fb.simplelogin.util.env.isMobileCordovaInAppBrowser=function(){return(window.cordova||window.CordovaInAppBrowser||window.phonegap)&&/ios|iphone|ipod|ipad|android/i.test(navigator.userAgent)};
fb.simplelogin.util.env.isMobileTriggerIoTab=function(){return window.forge&&/ios|iphone|ipod|ipad|android/i.test(navigator.userAgent)};fb.simplelogin.util.env.isWindowsMetro=function(){return!!window.Windows&&/^ms-appx:/.test(location.href)};fb.simplelogin.util.env.isChromeiOS=function(){return!!navigator.userAgent.match(/CriOS/)};fb.simplelogin.util.env.isTwitteriOS=function(){return!!navigator.userAgent.match(/Twitter for iPhone/)};fb.simplelogin.util.env.isFacebookiOS=function(){return!!navigator.userAgent.match(/FBAN\/FBIOS/)};
fb.simplelogin.util.env.isWindowsPhone=function(){return!!navigator.userAgent.match(/Windows Phone/)};fb.simplelogin.util.env.isStandaloneiOS=function(){return!!window.navigator.standalone};fb.simplelogin.util.env.isPhantomJS=function(){return!!navigator.userAgent.match(/PhantomJS/)};goog.debug={};goog.debug.errorHandlerWeakDep={protectEntryPoint:function(a){return a}};goog.string={};goog.string.Unicode={NBSP:"\u00a0"};goog.string.startsWith=function(a,b){return 0==a.lastIndexOf(b,0)};goog.string.endsWith=function(a,b){var c=a.length-b.length;return 0<=c&&a.indexOf(b,c)==c};goog.string.caseInsensitiveStartsWith=function(a,b){return 0==goog.string.caseInsensitiveCompare(b,a.substr(0,b.length))};goog.string.caseInsensitiveEndsWith=function(a,b){return 0==goog.string.caseInsensitiveCompare(b,a.substr(a.length-b.length,b.length))};
goog.string.subs=function(a,b){for(var c=1;c<arguments.length;c++)var d=String(arguments[c]).replace(/\$/g,"$$$$"),a=a.replace(/\%s/,d);return a};goog.string.collapseWhitespace=function(a){return a.replace(/[\s\xa0]+/g," ").replace(/^\s+|\s+$/g,"")};goog.string.isEmpty=function(a){return/^[\s\xa0]*$/.test(a)};goog.string.isEmptySafe=function(a){return goog.string.isEmpty(goog.string.makeSafe(a))};goog.string.isBreakingWhitespace=function(a){return!/[^\t\n\r ]/.test(a)};goog.string.isAlpha=function(a){return!/[^a-zA-Z]/.test(a)};
goog.string.isNumeric=function(a){return!/[^0-9]/.test(a)};goog.string.isAlphaNumeric=function(a){return!/[^a-zA-Z0-9]/.test(a)};goog.string.isSpace=function(a){return" "==a};goog.string.isUnicodeChar=function(a){return 1==a.length&&" "<=a&&"~">=a||"\u0080"<=a&&"\ufffd">=a};goog.string.stripNewlines=function(a){return a.replace(/(\r\n|\r|\n)+/g," ")};goog.string.canonicalizeNewlines=function(a){return a.replace(/(\r\n|\r|\n)/g,"\n")};
goog.string.normalizeWhitespace=function(a){return a.replace(/\xa0|\s/g," ")};goog.string.normalizeSpaces=function(a){return a.replace(/\xa0|[ \t]+/g," ")};goog.string.collapseBreakingSpaces=function(a){return a.replace(/[\t\r\n ]+/g," ").replace(/^[\t\r\n ]+|[\t\r\n ]+$/g,"")};goog.string.trim=function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")};goog.string.trimLeft=function(a){return a.replace(/^[\s\xa0]+/,"")};goog.string.trimRight=function(a){return a.replace(/[\s\xa0]+$/,"")};
goog.string.caseInsensitiveCompare=function(a,b){var c=String(a).toLowerCase(),d=String(b).toLowerCase();return c<d?-1:c==d?0:1};goog.string.numerateCompareRegExp_=/(\.\d+)|(\d+)|(\D+)/g;
goog.string.numerateCompare=function(a,b){if(a==b)return 0;if(!a)return-1;if(!b)return 1;for(var c=a.toLowerCase().match(goog.string.numerateCompareRegExp_),d=b.toLowerCase().match(goog.string.numerateCompareRegExp_),e=Math.min(c.length,d.length),f=0;f<e;f++){var g=c[f],h=d[f];if(g!=h)return c=parseInt(g,10),!isNaN(c)&&(d=parseInt(h,10),!isNaN(d)&&c-d)?c-d:g<h?-1:1}return c.length!=d.length?c.length-d.length:a<b?-1:1};goog.string.urlEncode=function(a){return encodeURIComponent(String(a))};
goog.string.urlDecode=function(a){return decodeURIComponent(a.replace(/\+/g," "))};goog.string.newLineToBr=function(a,b){return a.replace(/(\r\n|\r|\n)/g,b?"<br />":"<br>")};
goog.string.htmlEscape=function(a,b){if(b)return a.replace(goog.string.amperRe_,"&amp;").replace(goog.string.ltRe_,"&lt;").replace(goog.string.gtRe_,"&gt;").replace(goog.string.quotRe_,"&quot;");if(!goog.string.allRe_.test(a))return a;-1!=a.indexOf("&")&&(a=a.replace(goog.string.amperRe_,"&amp;"));-1!=a.indexOf("<")&&(a=a.replace(goog.string.ltRe_,"&lt;"));-1!=a.indexOf(">")&&(a=a.replace(goog.string.gtRe_,"&gt;"));-1!=a.indexOf('"')&&(a=a.replace(goog.string.quotRe_,"&quot;"));return a};
goog.string.amperRe_=/&/g;goog.string.ltRe_=/</g;goog.string.gtRe_=/>/g;goog.string.quotRe_=/\"/g;goog.string.allRe_=/[&<>\"]/;goog.string.unescapeEntities=function(a){return goog.string.contains(a,"&")?"document"in goog.global?goog.string.unescapeEntitiesUsingDom_(a):goog.string.unescapePureXmlEntities_(a):a};
goog.string.unescapeEntitiesUsingDom_=function(a){var b={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"'},c=document.createElement("div");return a.replace(goog.string.HTML_ENTITY_PATTERN_,function(a,e){var f=b[a];if(f)return f;if("#"==e.charAt(0)){var g=Number("0"+e.substr(1));isNaN(g)||(f=String.fromCharCode(g))}f||(c.innerHTML=a+" ",f=c.firstChild.nodeValue.slice(0,-1));return b[a]=f})};
goog.string.unescapePureXmlEntities_=function(a){return a.replace(/&([^;]+);/g,function(a,c){switch(c){case "amp":return"&";case "lt":return"<";case "gt":return">";case "quot":return'"';default:if("#"==c.charAt(0)){var d=Number("0"+c.substr(1));if(!isNaN(d))return String.fromCharCode(d)}return a}})};goog.string.HTML_ENTITY_PATTERN_=/&([^;\s<&]+);?/g;goog.string.whitespaceEscape=function(a,b){return goog.string.newLineToBr(a.replace(/  /g," &#160;"),b)};
goog.string.stripQuotes=function(a,b){for(var c=b.length,d=0;d<c;d++){var e=1==c?b:b.charAt(d);if(a.charAt(0)==e&&a.charAt(a.length-1)==e)return a.substring(1,a.length-1)}return a};goog.string.truncate=function(a,b,c){c&&(a=goog.string.unescapeEntities(a));a.length>b&&(a=a.substring(0,b-3)+"...");c&&(a=goog.string.htmlEscape(a));return a};
goog.string.truncateMiddle=function(a,b,c,d){c&&(a=goog.string.unescapeEntities(a));if(d&&a.length>b){d>b&&(d=b);var e=a.length-d,a=a.substring(0,b-d)+"..."+a.substring(e)}else a.length>b&&(d=Math.floor(b/2),e=a.length-d,a=a.substring(0,d+b%2)+"..."+a.substring(e));c&&(a=goog.string.htmlEscape(a));return a};goog.string.specialEscapeChars_={"\x00":"\\0","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\x0B",'"':'\\"',"\\":"\\\\"};goog.string.jsEscapeCache_={"'":"\\'"};
goog.string.quote=function(a){a=String(a);if(a.quote)return a.quote();for(var b=['"'],c=0;c<a.length;c++){var d=a.charAt(c),e=d.charCodeAt(0);b[c+1]=goog.string.specialEscapeChars_[d]||(31<e&&127>e?d:goog.string.escapeChar(d))}b.push('"');return b.join("")};goog.string.escapeString=function(a){for(var b=[],c=0;c<a.length;c++)b[c]=goog.string.escapeChar(a.charAt(c));return b.join("")};
goog.string.escapeChar=function(a){if(a in goog.string.jsEscapeCache_)return goog.string.jsEscapeCache_[a];if(a in goog.string.specialEscapeChars_)return goog.string.jsEscapeCache_[a]=goog.string.specialEscapeChars_[a];var b=a,c=a.charCodeAt(0);if(31<c&&127>c)b=a;else{if(256>c){if(b="\\x",16>c||256<c)b+="0"}else b="\\u",4096>c&&(b+="0");b+=c.toString(16).toUpperCase()}return goog.string.jsEscapeCache_[a]=b};goog.string.toMap=function(a){for(var b={},c=0;c<a.length;c++)b[a.charAt(c)]=!0;return b};
goog.string.contains=function(a,b){return-1!=a.indexOf(b)};goog.string.countOf=function(a,b){return a&&b?a.split(b).length-1:0};goog.string.removeAt=function(a,b,c){var d=a;0<=b&&(b<a.length&&0<c)&&(d=a.substr(0,b)+a.substr(b+c,a.length-b-c));return d};goog.string.remove=function(a,b){var c=RegExp(goog.string.regExpEscape(b),"");return a.replace(c,"")};goog.string.removeAll=function(a,b){var c=RegExp(goog.string.regExpEscape(b),"g");return a.replace(c,"")};
goog.string.regExpEscape=function(a){return String(a).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,"\\$1").replace(/\x08/g,"\\x08")};goog.string.repeat=function(a,b){return Array(b+1).join(a)};goog.string.padNumber=function(a,b,c){a=goog.isDef(c)?a.toFixed(c):String(a);c=a.indexOf(".");-1==c&&(c=a.length);return goog.string.repeat("0",Math.max(0,b-c))+a};goog.string.makeSafe=function(a){return null==a?"":String(a)};goog.string.buildString=function(a){return Array.prototype.join.call(arguments,"")};
goog.string.getRandomString=function(){return Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^goog.now()).toString(36)};
goog.string.compareVersions=function(a,b){for(var c=0,d=goog.string.trim(String(a)).split("."),e=goog.string.trim(String(b)).split("."),f=Math.max(d.length,e.length),g=0;0==c&&g<f;g++){var h=d[g]||"",i=e[g]||"",j=RegExp("(\\d*)(\\D*)","g"),k=RegExp("(\\d*)(\\D*)","g");do{var m=j.exec(h)||["","",""],l=k.exec(i)||["","",""];if(0==m[0].length&&0==l[0].length)break;var c=0==m[1].length?0:parseInt(m[1],10),o=0==l[1].length?0:parseInt(l[1],10),c=goog.string.compareElements_(c,o)||goog.string.compareElements_(0==
m[2].length,0==l[2].length)||goog.string.compareElements_(m[2],l[2])}while(0==c)}return c};goog.string.compareElements_=function(a,b){return a<b?-1:a>b?1:0};goog.string.HASHCODE_MAX_=4294967296;goog.string.hashCode=function(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c),b%=goog.string.HASHCODE_MAX_;return b};goog.string.uniqueStringCounter_=2147483648*Math.random()|0;goog.string.createUniqueString=function(){return"goog_"+goog.string.uniqueStringCounter_++};
goog.string.toNumber=function(a){var b=Number(a);return 0==b&&goog.string.isEmpty(a)?NaN:b};goog.string.toCamelCase=function(a){return String(a).replace(/\-([a-z])/g,function(a,c){return c.toUpperCase()})};goog.string.toSelectorCase=function(a){return String(a).replace(/([A-Z])/g,"-$1").toLowerCase()};goog.string.toTitleCase=function(a,b){var c=goog.isString(b)?goog.string.regExpEscape(b):"\\s";return a.replace(RegExp("(^"+(c?"|["+c+"]+":"")+")([a-z])","g"),function(a,b,c){return b+c.toUpperCase()})};
goog.string.parseInt=function(a){isFinite(a)&&(a=String(a));return goog.isString(a)?/^\s*-?0x/i.test(a)?parseInt(a,16):parseInt(a,10):NaN};goog.userAgent={};goog.userAgent.ASSUME_IE=!1;goog.userAgent.ASSUME_GECKO=!1;goog.userAgent.ASSUME_WEBKIT=!1;goog.userAgent.ASSUME_MOBILE_WEBKIT=!1;goog.userAgent.ASSUME_OPERA=!1;goog.userAgent.ASSUME_ANY_VERSION=!1;goog.userAgent.BROWSER_KNOWN_=goog.userAgent.ASSUME_IE||goog.userAgent.ASSUME_GECKO||goog.userAgent.ASSUME_MOBILE_WEBKIT||goog.userAgent.ASSUME_WEBKIT||goog.userAgent.ASSUME_OPERA;
goog.userAgent.getUserAgentString=function(){return goog.global.navigator?goog.global.navigator.userAgent:null};goog.userAgent.getNavigator=function(){return goog.global.navigator};
goog.userAgent.init_=function(){goog.userAgent.detectedOpera_=!1;goog.userAgent.detectedIe_=!1;goog.userAgent.detectedWebkit_=!1;goog.userAgent.detectedMobile_=!1;goog.userAgent.detectedGecko_=!1;var a;if(!goog.userAgent.BROWSER_KNOWN_&&(a=goog.userAgent.getUserAgentString())){var b=goog.userAgent.getNavigator();goog.userAgent.detectedOpera_=0==a.indexOf("Opera");goog.userAgent.detectedIe_=!goog.userAgent.detectedOpera_&&-1!=a.indexOf("MSIE");goog.userAgent.detectedWebkit_=!goog.userAgent.detectedOpera_&&
-1!=a.indexOf("WebKit");goog.userAgent.detectedMobile_=goog.userAgent.detectedWebkit_&&-1!=a.indexOf("Mobile");goog.userAgent.detectedGecko_=!goog.userAgent.detectedOpera_&&!goog.userAgent.detectedWebkit_&&"Gecko"==b.product}};goog.userAgent.BROWSER_KNOWN_||goog.userAgent.init_();goog.userAgent.OPERA=goog.userAgent.BROWSER_KNOWN_?goog.userAgent.ASSUME_OPERA:goog.userAgent.detectedOpera_;goog.userAgent.IE=goog.userAgent.BROWSER_KNOWN_?goog.userAgent.ASSUME_IE:goog.userAgent.detectedIe_;
goog.userAgent.GECKO=goog.userAgent.BROWSER_KNOWN_?goog.userAgent.ASSUME_GECKO:goog.userAgent.detectedGecko_;goog.userAgent.WEBKIT=goog.userAgent.BROWSER_KNOWN_?goog.userAgent.ASSUME_WEBKIT||goog.userAgent.ASSUME_MOBILE_WEBKIT:goog.userAgent.detectedWebkit_;goog.userAgent.MOBILE=goog.userAgent.ASSUME_MOBILE_WEBKIT||goog.userAgent.detectedMobile_;goog.userAgent.SAFARI=goog.userAgent.WEBKIT;goog.userAgent.determinePlatform_=function(){var a=goog.userAgent.getNavigator();return a&&a.platform||""};
goog.userAgent.PLATFORM=goog.userAgent.determinePlatform_();goog.userAgent.ASSUME_MAC=!1;goog.userAgent.ASSUME_WINDOWS=!1;goog.userAgent.ASSUME_LINUX=!1;goog.userAgent.ASSUME_X11=!1;goog.userAgent.PLATFORM_KNOWN_=goog.userAgent.ASSUME_MAC||goog.userAgent.ASSUME_WINDOWS||goog.userAgent.ASSUME_LINUX||goog.userAgent.ASSUME_X11;
goog.userAgent.initPlatform_=function(){goog.userAgent.detectedMac_=goog.string.contains(goog.userAgent.PLATFORM,"Mac");goog.userAgent.detectedWindows_=goog.string.contains(goog.userAgent.PLATFORM,"Win");goog.userAgent.detectedLinux_=goog.string.contains(goog.userAgent.PLATFORM,"Linux");goog.userAgent.detectedX11_=!!goog.userAgent.getNavigator()&&goog.string.contains(goog.userAgent.getNavigator().appVersion||"","X11")};goog.userAgent.PLATFORM_KNOWN_||goog.userAgent.initPlatform_();
goog.userAgent.MAC=goog.userAgent.PLATFORM_KNOWN_?goog.userAgent.ASSUME_MAC:goog.userAgent.detectedMac_;goog.userAgent.WINDOWS=goog.userAgent.PLATFORM_KNOWN_?goog.userAgent.ASSUME_WINDOWS:goog.userAgent.detectedWindows_;goog.userAgent.LINUX=goog.userAgent.PLATFORM_KNOWN_?goog.userAgent.ASSUME_LINUX:goog.userAgent.detectedLinux_;goog.userAgent.X11=goog.userAgent.PLATFORM_KNOWN_?goog.userAgent.ASSUME_X11:goog.userAgent.detectedX11_;
goog.userAgent.determineVersion_=function(){var a="",b;goog.userAgent.OPERA&&goog.global.opera?(a=goog.global.opera.version,a="function"==typeof a?a():a):(goog.userAgent.GECKO?b=/rv\:([^\);]+)(\)|;)/:goog.userAgent.IE?b=/MSIE\s+([^\);]+)(\)|;)/:goog.userAgent.WEBKIT&&(b=/WebKit\/(\S+)/),b&&(a=(a=b.exec(goog.userAgent.getUserAgentString()))?a[1]:""));return goog.userAgent.IE&&(b=goog.userAgent.getDocumentMode_(),b>parseFloat(a))?String(b):a};
goog.userAgent.getDocumentMode_=function(){var a=goog.global.document;return a?a.documentMode:void 0};goog.userAgent.VERSION=goog.userAgent.determineVersion_();goog.userAgent.compare=function(a,b){return goog.string.compareVersions(a,b)};goog.userAgent.isVersionCache_={};goog.userAgent.isVersion=function(a){return goog.userAgent.ASSUME_ANY_VERSION||goog.userAgent.isVersionCache_[a]||(goog.userAgent.isVersionCache_[a]=0<=goog.string.compareVersions(goog.userAgent.VERSION,a))};
goog.userAgent.isDocumentModeCache_={};goog.userAgent.isDocumentMode=function(a){return goog.userAgent.isDocumentModeCache_[a]||(goog.userAgent.isDocumentModeCache_[a]=goog.userAgent.IE&&!!document.documentMode&&document.documentMode>=a)};goog.events={};goog.events.Listener=function(){goog.events.Listener.ENABLE_MONITORING&&(this.creationStack=Error().stack)};goog.events.Listener.counter_=0;goog.events.Listener.ENABLE_MONITORING=!1;goog.events.Listener.prototype.key=0;goog.events.Listener.prototype.removed=!1;goog.events.Listener.prototype.callOnce=!1;
goog.events.Listener.prototype.init=function(a,b,c,d,e,f){if(goog.isFunction(a))this.isFunctionListener_=!0;else if(a&&a.handleEvent&&goog.isFunction(a.handleEvent))this.isFunctionListener_=!1;else throw Error("Invalid listener argument");this.listener=a;this.proxy=b;this.src=c;this.type=d;this.capture=!!e;this.handler=f;this.callOnce=!1;this.key=++goog.events.Listener.counter_;this.removed=!1};
goog.events.Listener.prototype.handleEvent=function(a){return this.isFunctionListener_?this.listener.call(this.handler||this.src,a):this.listener.handleEvent.call(this.listener,a)};goog.object={};goog.object.forEach=function(a,b,c){for(var d in a)b.call(c,a[d],d,a)};goog.object.filter=function(a,b,c){var d={},e;for(e in a)b.call(c,a[e],e,a)&&(d[e]=a[e]);return d};goog.object.map=function(a,b,c){var d={},e;for(e in a)d[e]=b.call(c,a[e],e,a);return d};goog.object.some=function(a,b,c){for(var d in a)if(b.call(c,a[d],d,a))return!0;return!1};goog.object.every=function(a,b,c){for(var d in a)if(!b.call(c,a[d],d,a))return!1;return!0};
goog.object.getCount=function(a){var b=0,c;for(c in a)b++;return b};goog.object.getAnyKey=function(a){for(var b in a)return b};goog.object.getAnyValue=function(a){for(var b in a)return a[b]};goog.object.contains=function(a,b){return goog.object.containsValue(a,b)};goog.object.getValues=function(a){var b=[],c=0,d;for(d in a)b[c++]=a[d];return b};goog.object.getKeys=function(a){var b=[],c=0,d;for(d in a)b[c++]=d;return b};
goog.object.getValueByKeys=function(a,b){for(var c=goog.isArrayLike(b),d=c?b:arguments,c=c?0:1;c<d.length&&!(a=a[d[c]],!goog.isDef(a));c++);return a};goog.object.containsKey=function(a,b){return b in a};goog.object.containsValue=function(a,b){for(var c in a)if(a[c]==b)return!0;return!1};goog.object.findKey=function(a,b,c){for(var d in a)if(b.call(c,a[d],d,a))return d};goog.object.findValue=function(a,b,c){return(b=goog.object.findKey(a,b,c))&&a[b]};
goog.object.isEmpty=function(a){for(var b in a)return!1;return!0};goog.object.clear=function(a){for(var b in a)delete a[b]};goog.object.remove=function(a,b){var c;(c=b in a)&&delete a[b];return c};goog.object.add=function(a,b,c){if(b in a)throw Error('The object already contains the key "'+b+'"');goog.object.set(a,b,c)};goog.object.get=function(a,b,c){return b in a?a[b]:c};goog.object.set=function(a,b,c){a[b]=c};goog.object.setIfUndefined=function(a,b,c){return b in a?a[b]:a[b]=c};
goog.object.clone=function(a){var b={},c;for(c in a)b[c]=a[c];return b};goog.object.unsafeClone=function(a){var b=goog.typeOf(a);if("object"==b||"array"==b){if(a.clone)return a.clone();var b="array"==b?[]:{},c;for(c in a)b[c]=goog.object.unsafeClone(a[c]);return b}return a};goog.object.transpose=function(a){var b={},c;for(c in a)b[a[c]]=c;return b};goog.object.PROTOTYPE_FIELDS_="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
goog.object.extend=function(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<goog.object.PROTOTYPE_FIELDS_.length;f++)c=goog.object.PROTOTYPE_FIELDS_[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}};
goog.object.create=function(a){var b=arguments.length;if(1==b&&goog.isArray(arguments[0]))return goog.object.create.apply(null,arguments[0]);if(b%2)throw Error("Uneven number of arguments");for(var c={},d=0;d<b;d+=2)c[arguments[d]]=arguments[d+1];return c};goog.object.createSet=function(a){var b=arguments.length;if(1==b&&goog.isArray(arguments[0]))return goog.object.createSet.apply(null,arguments[0]);for(var c={},d=0;d<b;d++)c[arguments[d]]=!0;return c};goog.events.BrowserFeature={HAS_W3C_BUTTON:!goog.userAgent.IE||goog.userAgent.isDocumentMode(9),HAS_W3C_EVENT_SUPPORT:!goog.userAgent.IE||goog.userAgent.isDocumentMode(9),SET_KEY_CODE_TO_PREVENT_DEFAULT:goog.userAgent.IE&&!goog.userAgent.isVersion("8"),HAS_NAVIGATOR_ONLINE_PROPERTY:!goog.userAgent.WEBKIT||goog.userAgent.isVersion("528"),HAS_HTML5_NETWORK_EVENT_SUPPORT:goog.userAgent.GECKO&&goog.userAgent.isVersion("1.9b")||goog.userAgent.IE&&goog.userAgent.isVersion("8")||goog.userAgent.OPERA&&goog.userAgent.isVersion("9.5")||
goog.userAgent.WEBKIT&&goog.userAgent.isVersion("528"),HTML5_NETWORK_EVENTS_FIRE_ON_BODY:goog.userAgent.GECKO&&!goog.userAgent.isVersion("8")||goog.userAgent.IE&&!goog.userAgent.isVersion("9")};goog.debug.Error=function(a){Error.captureStackTrace?Error.captureStackTrace(this,goog.debug.Error):this.stack=Error().stack||"";a&&(this.message=String(a))};goog.inherits(goog.debug.Error,Error);goog.debug.Error.prototype.name="CustomError";goog.asserts={};goog.asserts.ENABLE_ASSERTS=goog.DEBUG;goog.asserts.AssertionError=function(a,b){b.unshift(a);goog.debug.Error.call(this,goog.string.subs.apply(null,b));b.shift();this.messagePattern=a};goog.inherits(goog.asserts.AssertionError,goog.debug.Error);goog.asserts.AssertionError.prototype.name="AssertionError";goog.asserts.doAssertFailure_=function(a,b,c,d){var e="Assertion failed";if(c)var e=e+(": "+c),f=d;else a&&(e+=": "+a,f=b);throw new goog.asserts.AssertionError(""+e,f||[]);};
goog.asserts.assert=function(a,b,c){goog.asserts.ENABLE_ASSERTS&&!a&&goog.asserts.doAssertFailure_("",null,b,Array.prototype.slice.call(arguments,2));return a};goog.asserts.fail=function(a,b){if(goog.asserts.ENABLE_ASSERTS)throw new goog.asserts.AssertionError("Failure"+(a?": "+a:""),Array.prototype.slice.call(arguments,1));};
goog.asserts.assertNumber=function(a,b,c){goog.asserts.ENABLE_ASSERTS&&!goog.isNumber(a)&&goog.asserts.doAssertFailure_("Expected number but got %s: %s.",[goog.typeOf(a),a],b,Array.prototype.slice.call(arguments,2));return a};goog.asserts.assertString=function(a,b,c){goog.asserts.ENABLE_ASSERTS&&!goog.isString(a)&&goog.asserts.doAssertFailure_("Expected string but got %s: %s.",[goog.typeOf(a),a],b,Array.prototype.slice.call(arguments,2));return a};
goog.asserts.assertFunction=function(a,b,c){goog.asserts.ENABLE_ASSERTS&&!goog.isFunction(a)&&goog.asserts.doAssertFailure_("Expected function but got %s: %s.",[goog.typeOf(a),a],b,Array.prototype.slice.call(arguments,2));return a};goog.asserts.assertObject=function(a,b,c){goog.asserts.ENABLE_ASSERTS&&!goog.isObject(a)&&goog.asserts.doAssertFailure_("Expected object but got %s: %s.",[goog.typeOf(a),a],b,Array.prototype.slice.call(arguments,2));return a};
goog.asserts.assertArray=function(a,b,c){goog.asserts.ENABLE_ASSERTS&&!goog.isArray(a)&&goog.asserts.doAssertFailure_("Expected array but got %s: %s.",[goog.typeOf(a),a],b,Array.prototype.slice.call(arguments,2));return a};goog.asserts.assertBoolean=function(a,b,c){goog.asserts.ENABLE_ASSERTS&&!goog.isBoolean(a)&&goog.asserts.doAssertFailure_("Expected boolean but got %s: %s.",[goog.typeOf(a),a],b,Array.prototype.slice.call(arguments,2));return a};
goog.asserts.assertInstanceof=function(a,b,c,d){goog.asserts.ENABLE_ASSERTS&&!(a instanceof b)&&goog.asserts.doAssertFailure_("instanceof check failed.",null,c,Array.prototype.slice.call(arguments,3));return a};goog.array={};goog.NATIVE_ARRAY_PROTOTYPES=!0;goog.array.peek=function(a){return a[a.length-1]};goog.array.ARRAY_PROTOTYPE_=Array.prototype;
goog.array.indexOf=goog.NATIVE_ARRAY_PROTOTYPES&&goog.array.ARRAY_PROTOTYPE_.indexOf?function(a,b,c){goog.asserts.assert(null!=a.length);return goog.array.ARRAY_PROTOTYPE_.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;if(goog.isString(a))return!goog.isString(b)||1!=b.length?-1:a.indexOf(b,c);for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1};
goog.array.lastIndexOf=goog.NATIVE_ARRAY_PROTOTYPES&&goog.array.ARRAY_PROTOTYPE_.lastIndexOf?function(a,b,c){goog.asserts.assert(null!=a.length);return goog.array.ARRAY_PROTOTYPE_.lastIndexOf.call(a,b,null==c?a.length-1:c)}:function(a,b,c){c=null==c?a.length-1:c;0>c&&(c=Math.max(0,a.length+c));if(goog.isString(a))return!goog.isString(b)||1!=b.length?-1:a.lastIndexOf(b,c);for(;0<=c;c--)if(c in a&&a[c]===b)return c;return-1};
goog.array.forEach=goog.NATIVE_ARRAY_PROTOTYPES&&goog.array.ARRAY_PROTOTYPE_.forEach?function(a,b,c){goog.asserts.assert(null!=a.length);goog.array.ARRAY_PROTOTYPE_.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=goog.isString(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)};goog.array.forEachRight=function(a,b,c){for(var d=a.length,e=goog.isString(a)?a.split(""):a,d=d-1;0<=d;--d)d in e&&b.call(c,e[d],d,a)};
goog.array.filter=goog.NATIVE_ARRAY_PROTOTYPES&&goog.array.ARRAY_PROTOTYPE_.filter?function(a,b,c){goog.asserts.assert(null!=a.length);return goog.array.ARRAY_PROTOTYPE_.filter.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=[],f=0,g=goog.isString(a)?a.split(""):a,h=0;h<d;h++)if(h in g){var i=g[h];b.call(c,i,h,a)&&(e[f++]=i)}return e};
goog.array.map=goog.NATIVE_ARRAY_PROTOTYPES&&goog.array.ARRAY_PROTOTYPE_.map?function(a,b,c){goog.asserts.assert(null!=a.length);return goog.array.ARRAY_PROTOTYPE_.map.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=Array(d),f=goog.isString(a)?a.split(""):a,g=0;g<d;g++)g in f&&(e[g]=b.call(c,f[g],g,a));return e};goog.array.reduce=function(a,b,c,d){if(a.reduce)return d?a.reduce(goog.bind(b,d),c):a.reduce(b,c);var e=c;goog.array.forEach(a,function(c,g){e=b.call(d,e,c,g,a)});return e};
goog.array.reduceRight=function(a,b,c,d){if(a.reduceRight)return d?a.reduceRight(goog.bind(b,d),c):a.reduceRight(b,c);var e=c;goog.array.forEachRight(a,function(c,g){e=b.call(d,e,c,g,a)});return e};
goog.array.some=goog.NATIVE_ARRAY_PROTOTYPES&&goog.array.ARRAY_PROTOTYPE_.some?function(a,b,c){goog.asserts.assert(null!=a.length);return goog.array.ARRAY_PROTOTYPE_.some.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=goog.isString(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return!0;return!1};
goog.array.every=goog.NATIVE_ARRAY_PROTOTYPES&&goog.array.ARRAY_PROTOTYPE_.every?function(a,b,c){goog.asserts.assert(null!=a.length);return goog.array.ARRAY_PROTOTYPE_.every.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=goog.isString(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&!b.call(c,e[f],f,a))return!1;return!0};goog.array.find=function(a,b,c){b=goog.array.findIndex(a,b,c);return 0>b?null:goog.isString(a)?a.charAt(b):a[b]};
goog.array.findIndex=function(a,b,c){for(var d=a.length,e=goog.isString(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return f;return-1};goog.array.findRight=function(a,b,c){b=goog.array.findIndexRight(a,b,c);return 0>b?null:goog.isString(a)?a.charAt(b):a[b]};goog.array.findIndexRight=function(a,b,c){for(var d=a.length,e=goog.isString(a)?a.split(""):a,d=d-1;0<=d;d--)if(d in e&&b.call(c,e[d],d,a))return d;return-1};goog.array.contains=function(a,b){return 0<=goog.array.indexOf(a,b)};
goog.array.isEmpty=function(a){return 0==a.length};goog.array.clear=function(a){if(!goog.isArray(a))for(var b=a.length-1;0<=b;b--)delete a[b];a.length=0};goog.array.insert=function(a,b){goog.array.contains(a,b)||a.push(b)};goog.array.insertAt=function(a,b,c){goog.array.splice(a,c,0,b)};goog.array.insertArrayAt=function(a,b,c){goog.partial(goog.array.splice,a,c,0).apply(null,b)};
goog.array.insertBefore=function(a,b,c){var d;2==arguments.length||0>(d=goog.array.indexOf(a,c))?a.push(b):goog.array.insertAt(a,b,d)};goog.array.remove=function(a,b){var c=goog.array.indexOf(a,b),d;(d=0<=c)&&goog.array.removeAt(a,c);return d};goog.array.removeAt=function(a,b){goog.asserts.assert(null!=a.length);return 1==goog.array.ARRAY_PROTOTYPE_.splice.call(a,b,1).length};goog.array.removeIf=function(a,b,c){b=goog.array.findIndex(a,b,c);return 0<=b?(goog.array.removeAt(a,b),!0):!1};
goog.array.concat=function(a){return goog.array.ARRAY_PROTOTYPE_.concat.apply(goog.array.ARRAY_PROTOTYPE_,arguments)};goog.array.toArray=function(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]};goog.array.clone=goog.array.toArray;
goog.array.extend=function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c],e;if(goog.isArray(d)||(e=goog.isArrayLike(d))&&d.hasOwnProperty("callee"))a.push.apply(a,d);else if(e)for(var f=a.length,g=d.length,h=0;h<g;h++)a[f+h]=d[h];else a.push(d)}};goog.array.splice=function(a,b,c,d){goog.asserts.assert(null!=a.length);return goog.array.ARRAY_PROTOTYPE_.splice.apply(a,goog.array.slice(arguments,1))};
goog.array.slice=function(a,b,c){goog.asserts.assert(null!=a.length);return 2>=arguments.length?goog.array.ARRAY_PROTOTYPE_.slice.call(a,b):goog.array.ARRAY_PROTOTYPE_.slice.call(a,b,c)};goog.array.removeDuplicates=function(a,b){for(var c=b||a,d={},e=0,f=0;f<a.length;){var g=a[f++],h=goog.isObject(g)?"o"+goog.getUid(g):(typeof g).charAt(0)+g;Object.prototype.hasOwnProperty.call(d,h)||(d[h]=!0,c[e++]=g)}c.length=e};
goog.array.binarySearch=function(a,b,c){return goog.array.binarySearch_(a,c||goog.array.defaultCompare,!1,b)};goog.array.binarySelect=function(a,b,c){return goog.array.binarySearch_(a,b,!0,void 0,c)};goog.array.binarySearch_=function(a,b,c,d,e){for(var f=0,g=a.length,h;f<g;){var i=f+g>>1,j;j=c?b.call(e,a[i],i,a):b(d,a[i]);0<j?f=i+1:(g=i,h=!j)}return h?f:~f};goog.array.sort=function(a,b){goog.asserts.assert(null!=a.length);goog.array.ARRAY_PROTOTYPE_.sort.call(a,b||goog.array.defaultCompare)};
goog.array.stableSort=function(a,b){for(var c=0;c<a.length;c++)a[c]={index:c,value:a[c]};var d=b||goog.array.defaultCompare;goog.array.sort(a,function(a,b){return d(a.value,b.value)||a.index-b.index});for(c=0;c<a.length;c++)a[c]=a[c].value};goog.array.sortObjectsByKey=function(a,b,c){var d=c||goog.array.defaultCompare;goog.array.sort(a,function(a,c){return d(a[b],c[b])})};
goog.array.isSorted=function(a,b,c){for(var b=b||goog.array.defaultCompare,d=1;d<a.length;d++){var e=b(a[d-1],a[d]);if(0<e||0==e&&c)return!1}return!0};goog.array.equals=function(a,b,c){if(!goog.isArrayLike(a)||!goog.isArrayLike(b)||a.length!=b.length)return!1;for(var d=a.length,c=c||goog.array.defaultCompareEquality,e=0;e<d;e++)if(!c(a[e],b[e]))return!1;return!0};goog.array.compare=function(a,b,c){return goog.array.equals(a,b,c)};
goog.array.compare3=function(a,b,c){for(var c=c||goog.array.defaultCompare,d=Math.min(a.length,b.length),e=0;e<d;e++){var f=c(a[e],b[e]);if(0!=f)return f}return goog.array.defaultCompare(a.length,b.length)};goog.array.defaultCompare=function(a,b){return a>b?1:a<b?-1:0};goog.array.defaultCompareEquality=function(a,b){return a===b};goog.array.binaryInsert=function(a,b,c){c=goog.array.binarySearch(a,b,c);return 0>c?(goog.array.insertAt(a,b,-(c+1)),!0):!1};
goog.array.binaryRemove=function(a,b,c){b=goog.array.binarySearch(a,b,c);return 0<=b?goog.array.removeAt(a,b):!1};goog.array.bucket=function(a,b){for(var c={},d=0;d<a.length;d++){var e=a[d],f=b(e,d,a);goog.isDef(f)&&(c[f]||(c[f]=[])).push(e)}return c};goog.array.repeat=function(a,b){for(var c=[],d=0;d<b;d++)c[d]=a;return c};goog.array.flatten=function(a){for(var b=[],c=0;c<arguments.length;c++){var d=arguments[c];goog.isArray(d)?b.push.apply(b,goog.array.flatten.apply(null,d)):b.push(d)}return b};
goog.array.rotate=function(a,b){goog.asserts.assert(null!=a.length);a.length&&(b%=a.length,0<b?goog.array.ARRAY_PROTOTYPE_.unshift.apply(a,a.splice(-b,b)):0>b&&goog.array.ARRAY_PROTOTYPE_.push.apply(a,a.splice(0,-b)));return a};goog.array.zip=function(a){if(!arguments.length)return[];for(var b=[],c=0;;c++){for(var d=[],e=0;e<arguments.length;e++){var f=arguments[e];if(c>=f.length)return b;d.push(f[c])}b.push(d)}};
goog.array.shuffle=function(a,b){for(var c=b||Math.random,d=a.length-1;0<d;d--){var e=Math.floor(c()*(d+1)),f=a[d];a[d]=a[e];a[e]=f}};goog.debug.entryPointRegistry={};goog.debug.EntryPointMonitor=function(){};goog.debug.entryPointRegistry.refList_=[];goog.debug.entryPointRegistry.monitors_=[];goog.debug.entryPointRegistry.monitorsMayExist_=!1;goog.debug.entryPointRegistry.register=function(a){goog.debug.entryPointRegistry.refList_[goog.debug.entryPointRegistry.refList_.length]=a;if(goog.debug.entryPointRegistry.monitorsMayExist_)for(var b=goog.debug.entryPointRegistry.monitors_,c=0;c<b.length;c++)a(goog.bind(b[c].wrap,b[c]))};
goog.debug.entryPointRegistry.monitorAll=function(a){goog.debug.entryPointRegistry.monitorsMayExist_=!0;for(var b=goog.bind(a.wrap,a),c=0;c<goog.debug.entryPointRegistry.refList_.length;c++)goog.debug.entryPointRegistry.refList_[c](b);goog.debug.entryPointRegistry.monitors_.push(a)};
goog.debug.entryPointRegistry.unmonitorAllIfPossible=function(a){var b=goog.debug.entryPointRegistry.monitors_;goog.asserts.assert(a==b[b.length-1],"Only the most recent monitor can be unwrapped.");for(var a=goog.bind(a.unwrap,a),c=0;c<goog.debug.entryPointRegistry.refList_.length;c++)goog.debug.entryPointRegistry.refList_[c](a);b.length--};goog.events.EventWrapper=function(){};goog.events.EventWrapper.prototype.listen=function(){};goog.events.EventWrapper.prototype.unlisten=function(){};goog.events.EventType={CLICK:"click",DBLCLICK:"dblclick",MOUSEDOWN:"mousedown",MOUSEUP:"mouseup",MOUSEOVER:"mouseover",MOUSEOUT:"mouseout",MOUSEMOVE:"mousemove",SELECTSTART:"selectstart",KEYPRESS:"keypress",KEYDOWN:"keydown",KEYUP:"keyup",BLUR:"blur",FOCUS:"focus",DEACTIVATE:"deactivate",FOCUSIN:goog.userAgent.IE?"focusin":"DOMFocusIn",FOCUSOUT:goog.userAgent.IE?"focusout":"DOMFocusOut",CHANGE:"change",SELECT:"select",SUBMIT:"submit",INPUT:"input",PROPERTYCHANGE:"propertychange",DRAGSTART:"dragstart",
DRAGENTER:"dragenter",DRAGOVER:"dragover",DRAGLEAVE:"dragleave",DROP:"drop",TOUCHSTART:"touchstart",TOUCHMOVE:"touchmove",TOUCHEND:"touchend",TOUCHCANCEL:"touchcancel",CONTEXTMENU:"contextmenu",ERROR:"error",HELP:"help",LOAD:"load",LOSECAPTURE:"losecapture",READYSTATECHANGE:"readystatechange",RESIZE:"resize",SCROLL:"scroll",UNLOAD:"unload",HASHCHANGE:"hashchange",PAGEHIDE:"pagehide",PAGESHOW:"pageshow",POPSTATE:"popstate",COPY:"copy",PASTE:"paste",CUT:"cut",BEFORECOPY:"beforecopy",BEFORECUT:"beforecut",
BEFOREPASTE:"beforepaste",ONLINE:"online",OFFLINE:"offline",MESSAGE:"message",CONNECT:"connect",TRANSITIONEND:goog.userAgent.WEBKIT?"webkitTransitionEnd":goog.userAgent.OPERA?"oTransitionEnd":"transitionend"};goog.disposable={};goog.disposable.IDisposable=function(){};goog.Disposable=function(){this.disposed_=!1;goog.Disposable.ENABLE_MONITORING&&(this.creationStack=Error().stack,goog.Disposable.instances_[goog.getUid(this)]=this)};goog.Disposable.ENABLE_MONITORING=!1;goog.Disposable.instances_={};goog.Disposable.getUndisposedObjects=function(){var a=[],b;for(b in goog.Disposable.instances_)goog.Disposable.instances_.hasOwnProperty(b)&&a.push(goog.Disposable.instances_[Number(b)]);return a};
goog.Disposable.clearUndisposedObjects=function(){goog.Disposable.instances_={}};goog.Disposable.prototype.isDisposed=function(){return!!this.disposed_};goog.Disposable.prototype.getDisposed=goog.Disposable.prototype.isDisposed;
goog.Disposable.prototype.dispose=function(){if(!this.disposed_){if(goog.Disposable.ENABLE_MONITORING){if(void 0==this.disposed_)throw Error(this+" did not call the goog.Disposable base constructor");var a=goog.getUid(this);delete goog.Disposable.instances_[a]}this.disposed_=!0;this.disposeInternal()}};goog.Disposable.prototype.registerDisposable=function(a){this.dependentDisposables_||(this.dependentDisposables_=[]);this.dependentDisposables_.push(a)};
goog.Disposable.prototype.addOnDisposeCallback=function(a,b){this.onDisposeCallbacks_||(this.onDisposeCallbacks_=[]);this.onDisposeCallbacks_.push(goog.bind(a,b))};goog.Disposable.prototype.disposeInternal=function(){this.dependentDisposables_&&goog.disposeAll.apply(null,this.dependentDisposables_);if(this.onDisposeCallbacks_)for(;this.onDisposeCallbacks_.length;)this.onDisposeCallbacks_.shift()()};goog.dispose=function(a){a&&"function"==typeof a.dispose&&a.dispose()};
goog.disposeAll=function(a){for(var b=0,c=arguments.length;b<c;++b){var d=arguments[b];goog.isArrayLike(d)?goog.disposeAll.apply(null,d):goog.dispose(d)}};goog.events.Event=function(a,b){this.type=a;this.currentTarget=this.target=b};goog.events.Event.prototype.disposeInternal=function(){};goog.events.Event.prototype.dispose=function(){};goog.events.Event.prototype.propagationStopped_=!1;goog.events.Event.prototype.defaultPrevented=!1;goog.events.Event.prototype.returnValue_=!0;goog.events.Event.prototype.stopPropagation=function(){this.propagationStopped_=!0};
goog.events.Event.prototype.preventDefault=function(){this.defaultPrevented=!0;this.returnValue_=!1};goog.events.Event.stopPropagation=function(a){a.stopPropagation()};goog.events.Event.preventDefault=function(a){a.preventDefault()};goog.reflect={};goog.reflect.object=function(a,b){return b};goog.reflect.sinkValue=function(a){goog.reflect.sinkValue[" "](a);return a};goog.reflect.sinkValue[" "]=goog.nullFunction;goog.reflect.canAccessProperty=function(a,b){try{return goog.reflect.sinkValue(a[b]),!0}catch(c){}return!1};goog.events.BrowserEvent=function(a,b){a&&this.init(a,b)};goog.inherits(goog.events.BrowserEvent,goog.events.Event);goog.events.BrowserEvent.MouseButton={LEFT:0,MIDDLE:1,RIGHT:2};goog.events.BrowserEvent.IEButtonMap=[1,4,2];goog.events.BrowserEvent.prototype.target=null;goog.events.BrowserEvent.prototype.relatedTarget=null;goog.events.BrowserEvent.prototype.offsetX=0;goog.events.BrowserEvent.prototype.offsetY=0;goog.events.BrowserEvent.prototype.clientX=0;
goog.events.BrowserEvent.prototype.clientY=0;goog.events.BrowserEvent.prototype.screenX=0;goog.events.BrowserEvent.prototype.screenY=0;goog.events.BrowserEvent.prototype.button=0;goog.events.BrowserEvent.prototype.keyCode=0;goog.events.BrowserEvent.prototype.charCode=0;goog.events.BrowserEvent.prototype.ctrlKey=!1;goog.events.BrowserEvent.prototype.altKey=!1;goog.events.BrowserEvent.prototype.shiftKey=!1;goog.events.BrowserEvent.prototype.metaKey=!1;
goog.events.BrowserEvent.prototype.platformModifierKey=!1;goog.events.BrowserEvent.prototype.event_=null;
goog.events.BrowserEvent.prototype.init=function(a,b){var c=this.type=a.type;goog.events.Event.call(this,c);this.target=a.target||a.srcElement;this.currentTarget=b;var d=a.relatedTarget;d?goog.userAgent.GECKO&&(goog.reflect.canAccessProperty(d,"nodeName")||(d=null)):c==goog.events.EventType.MOUSEOVER?d=a.fromElement:c==goog.events.EventType.MOUSEOUT&&(d=a.toElement);this.relatedTarget=d;this.offsetX=goog.userAgent.WEBKIT||void 0!==a.offsetX?a.offsetX:a.layerX;this.offsetY=goog.userAgent.WEBKIT||void 0!==
a.offsetY?a.offsetY:a.layerY;this.clientX=void 0!==a.clientX?a.clientX:a.pageX;this.clientY=void 0!==a.clientY?a.clientY:a.pageY;this.screenX=a.screenX||0;this.screenY=a.screenY||0;this.button=a.button;this.keyCode=a.keyCode||0;this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.platformModifierKey=goog.userAgent.MAC?a.metaKey:a.ctrlKey;this.state=a.state;this.event_=a;a.defaultPrevented&&this.preventDefault();
delete this.propagationStopped_};goog.events.BrowserEvent.prototype.isButton=function(a){return goog.events.BrowserFeature.HAS_W3C_BUTTON?this.event_.button==a:"click"==this.type?a==goog.events.BrowserEvent.MouseButton.LEFT:!!(this.event_.button&goog.events.BrowserEvent.IEButtonMap[a])};goog.events.BrowserEvent.prototype.isMouseActionButton=function(){return this.isButton(goog.events.BrowserEvent.MouseButton.LEFT)&&!(goog.userAgent.WEBKIT&&goog.userAgent.MAC&&this.ctrlKey)};
goog.events.BrowserEvent.prototype.stopPropagation=function(){goog.events.BrowserEvent.superClass_.stopPropagation.call(this);this.event_.stopPropagation?this.event_.stopPropagation():this.event_.cancelBubble=!0};
goog.events.BrowserEvent.prototype.preventDefault=function(){goog.events.BrowserEvent.superClass_.preventDefault.call(this);var a=this.event_;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,goog.events.BrowserFeature.SET_KEY_CODE_TO_PREVENT_DEFAULT)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(b){}};goog.events.BrowserEvent.prototype.getBrowserEvent=function(){return this.event_};goog.events.BrowserEvent.prototype.disposeInternal=function(){};goog.events.listeners_={};goog.events.listenerTree_={};goog.events.sources_={};goog.events.onString_="on";goog.events.onStringMap_={};goog.events.keySeparator_="_";
goog.events.listen=function(a,b,c,d,e){if(b){if(goog.isArray(b)){for(var f=0;f<b.length;f++)goog.events.listen(a,b[f],c,d,e);return null}var d=!!d,g=goog.events.listenerTree_;b in g||(g[b]={count_:0,remaining_:0});g=g[b];d in g||(g[d]={count_:0,remaining_:0},g.count_++);var g=g[d],h=goog.getUid(a),i;g.remaining_++;if(g[h]){i=g[h];for(f=0;f<i.length;f++)if(g=i[f],g.listener==c&&g.handler==e){if(g.removed)break;return i[f].key}}else i=g[h]=[],g.count_++;f=goog.events.getProxy();f.src=a;g=new goog.events.Listener;
g.init(c,f,a,b,d,e);c=g.key;f.key=c;i.push(g);goog.events.listeners_[c]=g;goog.events.sources_[h]||(goog.events.sources_[h]=[]);goog.events.sources_[h].push(g);a.addEventListener?(a==goog.global||!a.customEvent_)&&a.addEventListener(b,f,d):a.attachEvent(goog.events.getOnString_(b),f);return c}throw Error("Invalid event type");};
goog.events.getProxy=function(){var a=goog.events.handleBrowserEvent_,b=goog.events.BrowserFeature.HAS_W3C_EVENT_SUPPORT?function(c){return a.call(b.src,b.key,c)}:function(c){c=a.call(b.src,b.key,c);if(!c)return c};return b};goog.events.listenOnce=function(a,b,c,d,e){if(goog.isArray(b)){for(var f=0;f<b.length;f++)goog.events.listenOnce(a,b[f],c,d,e);return null}a=goog.events.listen(a,b,c,d,e);goog.events.listeners_[a].callOnce=!0;return a};
goog.events.listenWithWrapper=function(a,b,c,d,e){b.listen(a,c,d,e)};goog.events.unlisten=function(a,b,c,d,e){if(goog.isArray(b)){for(var f=0;f<b.length;f++)goog.events.unlisten(a,b[f],c,d,e);return null}d=!!d;a=goog.events.getListeners_(a,b,d);if(!a)return!1;for(f=0;f<a.length;f++)if(a[f].listener==c&&a[f].capture==d&&a[f].handler==e)return goog.events.unlistenByKey(a[f].key);return!1};
goog.events.unlistenByKey=function(a){if(!goog.events.listeners_[a])return!1;var b=goog.events.listeners_[a];if(b.removed)return!1;var c=b.src,d=b.type,e=b.proxy,f=b.capture;c.removeEventListener?(c==goog.global||!c.customEvent_)&&c.removeEventListener(d,e,f):c.detachEvent&&c.detachEvent(goog.events.getOnString_(d),e);c=goog.getUid(c);goog.events.sources_[c]&&(e=goog.events.sources_[c],goog.array.remove(e,b),0==e.length&&delete goog.events.sources_[c]);b.removed=!0;if(b=goog.events.listenerTree_[d][f][c])b.needsCleanup_=
!0,goog.events.cleanUp_(d,f,c,b);delete goog.events.listeners_[a];return!0};goog.events.unlistenWithWrapper=function(a,b,c,d,e){b.unlisten(a,c,d,e)};
goog.events.cleanUp_=function(a,b,c,d){if(!d.locked_&&d.needsCleanup_){for(var e=0,f=0;e<d.length;e++)d[e].removed?d[e].proxy.src=null:(e!=f&&(d[f]=d[e]),f++);d.length=f;d.needsCleanup_=!1;0==f&&(delete goog.events.listenerTree_[a][b][c],goog.events.listenerTree_[a][b].count_--,0==goog.events.listenerTree_[a][b].count_&&(delete goog.events.listenerTree_[a][b],goog.events.listenerTree_[a].count_--),0==goog.events.listenerTree_[a].count_&&delete goog.events.listenerTree_[a])}};
goog.events.removeAll=function(a,b,c){var d=0,e=null==b,f=null==c,c=!!c;if(null==a)goog.object.forEach(goog.events.sources_,function(a){for(var g=a.length-1;0<=g;g--){var h=a[g];if((e||b==h.type)&&(f||c==h.capture))goog.events.unlistenByKey(h.key),d++}});else if(a=goog.getUid(a),goog.events.sources_[a])for(var a=goog.events.sources_[a],g=a.length-1;0<=g;g--){var h=a[g];if((e||b==h.type)&&(f||c==h.capture))goog.events.unlistenByKey(h.key),d++}return d};
goog.events.getListeners=function(a,b,c){return goog.events.getListeners_(a,b,c)||[]};goog.events.getListeners_=function(a,b,c){var d=goog.events.listenerTree_;return b in d&&(d=d[b],c in d&&(d=d[c],a=goog.getUid(a),d[a]))?d[a]:null};goog.events.getListener=function(a,b,c,d,e){d=!!d;if(a=goog.events.getListeners_(a,b,d))for(b=0;b<a.length;b++)if(!a[b].removed&&a[b].listener==c&&a[b].capture==d&&a[b].handler==e)return a[b];return null};
goog.events.hasListener=function(a,b,c){var a=goog.getUid(a),d=goog.events.sources_[a];if(d){var e=goog.isDef(b),f=goog.isDef(c);return e&&f?(d=goog.events.listenerTree_[b],!!d&&!!d[c]&&a in d[c]):!e&&!f?!0:goog.array.some(d,function(a){return e&&a.type==b||f&&a.capture==c})}return!1};goog.events.expose=function(a){var b=[],c;for(c in a)a[c]&&a[c].id?b.push(c+" = "+a[c]+" ("+a[c].id+")"):b.push(c+" = "+a[c]);return b.join("\n")};
goog.events.getOnString_=function(a){return a in goog.events.onStringMap_?goog.events.onStringMap_[a]:goog.events.onStringMap_[a]=goog.events.onString_+a};goog.events.fireListeners=function(a,b,c,d){var e=goog.events.listenerTree_;return b in e&&(e=e[b],c in e)?goog.events.fireListeners_(e[c],a,b,c,d):!0};
goog.events.fireListeners_=function(a,b,c,d,e){var f=1,b=goog.getUid(b);if(a[b]){a.remaining_--;a=a[b];a.locked_?a.locked_++:a.locked_=1;try{for(var g=a.length,h=0;h<g;h++){var i=a[h];i&&!i.removed&&(f&=!1!==goog.events.fireListener(i,e))}}finally{a.locked_--,goog.events.cleanUp_(c,d,b,a)}}return Boolean(f)};goog.events.fireListener=function(a,b){a.callOnce&&goog.events.unlistenByKey(a.key);return a.handleEvent(b)};goog.events.getTotalListenerCount=function(){return goog.object.getCount(goog.events.listeners_)};
goog.events.dispatchEvent=function(a,b){var c=b.type||b,d=goog.events.listenerTree_;if(!(c in d))return!0;if(goog.isString(b))b=new goog.events.Event(b,a);else if(b instanceof goog.events.Event)b.target=b.target||a;else{var e=b,b=new goog.events.Event(c,a);goog.object.extend(b,e)}var e=1,f,d=d[c],c=!0 in d,g;if(c){f=[];for(g=a;g;g=g.getParentEventTarget())f.push(g);g=d[!0];g.remaining_=g.count_;for(var h=f.length-1;!b.propagationStopped_&&0<=h&&g.remaining_;h--)b.currentTarget=f[h],e&=goog.events.fireListeners_(g,
f[h],b.type,!0,b)&&!1!=b.returnValue_}if(!1 in d)if(g=d[!1],g.remaining_=g.count_,c)for(h=0;!b.propagationStopped_&&h<f.length&&g.remaining_;h++)b.currentTarget=f[h],e&=goog.events.fireListeners_(g,f[h],b.type,!1,b)&&!1!=b.returnValue_;else for(d=a;!b.propagationStopped_&&d&&g.remaining_;d=d.getParentEventTarget())b.currentTarget=d,e&=goog.events.fireListeners_(g,d,b.type,!1,b)&&!1!=b.returnValue_;return Boolean(e)};
goog.events.protectBrowserEventEntryPoint=function(a){goog.events.handleBrowserEvent_=a.protectEntryPoint(goog.events.handleBrowserEvent_)};
goog.events.handleBrowserEvent_=function(a,b){if(!goog.events.listeners_[a])return!0;var c=goog.events.listeners_[a],d=c.type,e=goog.events.listenerTree_;if(!(d in e))return!0;var e=e[d],f,g;if(!goog.events.BrowserFeature.HAS_W3C_EVENT_SUPPORT){f=b||goog.getObjectByName("window.event");var h=!0 in e,i=!1 in e;if(h){if(goog.events.isMarkedIeEvent_(f))return!0;goog.events.markIeEvent_(f)}var j=new goog.events.BrowserEvent;j.init(f,this);f=!0;try{if(h){for(var k=[],m=j.currentTarget;m;m=m.parentNode)k.push(m);
g=e[!0];g.remaining_=g.count_;for(var l=k.length-1;!j.propagationStopped_&&0<=l&&g.remaining_;l--)j.currentTarget=k[l],f&=goog.events.fireListeners_(g,k[l],d,!0,j);if(i){g=e[!1];g.remaining_=g.count_;for(l=0;!j.propagationStopped_&&l<k.length&&g.remaining_;l++)j.currentTarget=k[l],f&=goog.events.fireListeners_(g,k[l],d,!1,j)}}else f=goog.events.fireListener(c,j)}finally{k&&(k.length=0)}return f}d=new goog.events.BrowserEvent(b,this);return f=goog.events.fireListener(c,d)};
goog.events.markIeEvent_=function(a){var b=!1;if(0==a.keyCode)try{a.keyCode=-1;return}catch(c){b=!0}if(b||void 0==a.returnValue)a.returnValue=!0};goog.events.isMarkedIeEvent_=function(a){return 0>a.keyCode||void 0!=a.returnValue};goog.events.uniqueIdCounter_=0;goog.events.getUniqueId=function(a){return a+"_"+goog.events.uniqueIdCounter_++};goog.debug.entryPointRegistry.register(function(a){goog.events.handleBrowserEvent_=a(goog.events.handleBrowserEvent_)});goog.uri={};goog.uri.utils={};goog.uri.utils.CharCode_={AMPERSAND:38,EQUAL:61,HASH:35,QUESTION:63};goog.uri.utils.buildFromEncodedParts=function(a,b,c,d,e,f,g){var h=[];a&&h.push(a,":");c&&(h.push("//"),b&&h.push(b,"@"),h.push(c),d&&h.push(":",d));e&&h.push(e);f&&h.push("?",f);g&&h.push("#",g);return h.join("")};goog.uri.utils.splitRe_=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^/?#]*)@)?([\\w\\d\\-\\u0100-\\uffff.%]*)(?::([0-9]+))?)?([^?#]+)?(?:\\?([^#]*))?(?:#(.*))?$");
goog.uri.utils.ComponentIndex={SCHEME:1,USER_INFO:2,DOMAIN:3,PORT:4,PATH:5,QUERY_DATA:6,FRAGMENT:7};goog.uri.utils.split=function(a){return a.match(goog.uri.utils.splitRe_)};goog.uri.utils.decodeIfPossible_=function(a){return a&&decodeURIComponent(a)};goog.uri.utils.getComponentByIndex_=function(a,b){return goog.uri.utils.split(b)[a]||null};goog.uri.utils.getScheme=function(a){return goog.uri.utils.getComponentByIndex_(goog.uri.utils.ComponentIndex.SCHEME,a)};
goog.uri.utils.getEffectiveScheme=function(a){a=goog.uri.utils.getScheme(a);!a&&self.location&&(a=self.location.protocol,a=a.substr(0,a.length-1));return a?a.toLowerCase():""};goog.uri.utils.getUserInfoEncoded=function(a){return goog.uri.utils.getComponentByIndex_(goog.uri.utils.ComponentIndex.USER_INFO,a)};goog.uri.utils.getUserInfo=function(a){return goog.uri.utils.decodeIfPossible_(goog.uri.utils.getUserInfoEncoded(a))};
goog.uri.utils.getDomainEncoded=function(a){return goog.uri.utils.getComponentByIndex_(goog.uri.utils.ComponentIndex.DOMAIN,a)};goog.uri.utils.getDomain=function(a){return goog.uri.utils.decodeIfPossible_(goog.uri.utils.getDomainEncoded(a))};goog.uri.utils.getPort=function(a){return Number(goog.uri.utils.getComponentByIndex_(goog.uri.utils.ComponentIndex.PORT,a))||null};goog.uri.utils.getPathEncoded=function(a){return goog.uri.utils.getComponentByIndex_(goog.uri.utils.ComponentIndex.PATH,a)};
goog.uri.utils.getPath=function(a){return goog.uri.utils.decodeIfPossible_(goog.uri.utils.getPathEncoded(a))};goog.uri.utils.getQueryData=function(a){return goog.uri.utils.getComponentByIndex_(goog.uri.utils.ComponentIndex.QUERY_DATA,a)};goog.uri.utils.getFragmentEncoded=function(a){var b=a.indexOf("#");return 0>b?null:a.substr(b+1)};goog.uri.utils.setFragmentEncoded=function(a,b){return goog.uri.utils.removeFragment(a)+(b?"#"+b:"")};goog.uri.utils.getFragment=function(a){return goog.uri.utils.decodeIfPossible_(goog.uri.utils.getFragmentEncoded(a))};
goog.uri.utils.getHost=function(a){a=goog.uri.utils.split(a);return goog.uri.utils.buildFromEncodedParts(a[goog.uri.utils.ComponentIndex.SCHEME],a[goog.uri.utils.ComponentIndex.USER_INFO],a[goog.uri.utils.ComponentIndex.DOMAIN],a[goog.uri.utils.ComponentIndex.PORT])};goog.uri.utils.getPathAndAfter=function(a){a=goog.uri.utils.split(a);return goog.uri.utils.buildFromEncodedParts(null,null,null,null,a[goog.uri.utils.ComponentIndex.PATH],a[goog.uri.utils.ComponentIndex.QUERY_DATA],a[goog.uri.utils.ComponentIndex.FRAGMENT])};
goog.uri.utils.removeFragment=function(a){var b=a.indexOf("#");return 0>b?a:a.substr(0,b)};goog.uri.utils.haveSameDomain=function(a,b){var c=goog.uri.utils.split(a),d=goog.uri.utils.split(b);return c[goog.uri.utils.ComponentIndex.DOMAIN]==d[goog.uri.utils.ComponentIndex.DOMAIN]&&c[goog.uri.utils.ComponentIndex.SCHEME]==d[goog.uri.utils.ComponentIndex.SCHEME]&&c[goog.uri.utils.ComponentIndex.PORT]==d[goog.uri.utils.ComponentIndex.PORT]};
goog.uri.utils.assertNoFragmentsOrQueries_=function(a){if(goog.DEBUG&&(0<=a.indexOf("#")||0<=a.indexOf("?")))throw Error("goog.uri.utils: Fragment or query identifiers are not supported: ["+a+"]");};goog.uri.utils.appendQueryData_=function(a){if(a[1]){var b=a[0],c=b.indexOf("#");0<=c&&(a.push(b.substr(c)),a[0]=b=b.substr(0,c));c=b.indexOf("?");0>c?a[1]="?":c==b.length-1&&(a[1]=void 0)}return a.join("")};
goog.uri.utils.appendKeyValuePairs_=function(a,b,c){if(goog.isArray(b)){goog.asserts.assertArray(b);for(var d=0;d<b.length;d++)goog.uri.utils.appendKeyValuePairs_(a,String(b[d]),c)}else null!=b&&c.push("&",a,""===b?"":"=",goog.string.urlEncode(b))};goog.uri.utils.buildQueryDataBuffer_=function(a,b,c){goog.asserts.assert(0==Math.max(b.length-(c||0),0)%2,"goog.uri.utils: Key/value lists must be even in length.");for(c=c||0;c<b.length;c+=2)goog.uri.utils.appendKeyValuePairs_(b[c],b[c+1],a);return a};
goog.uri.utils.buildQueryData=function(a,b){var c=goog.uri.utils.buildQueryDataBuffer_([],a,b);c[0]="";return c.join("")};goog.uri.utils.buildQueryDataBufferFromMap_=function(a,b){for(var c in b)goog.uri.utils.appendKeyValuePairs_(c,b[c],a);return a};goog.uri.utils.buildQueryDataFromMap=function(a){a=goog.uri.utils.buildQueryDataBufferFromMap_([],a);a[0]="";return a.join("")};
goog.uri.utils.appendParams=function(a,b){return goog.uri.utils.appendQueryData_(2==arguments.length?goog.uri.utils.buildQueryDataBuffer_([a],arguments[1],0):goog.uri.utils.buildQueryDataBuffer_([a],arguments,1))};goog.uri.utils.appendParamsFromMap=function(a,b){return goog.uri.utils.appendQueryData_(goog.uri.utils.buildQueryDataBufferFromMap_([a],b))};goog.uri.utils.appendParam=function(a,b,c){return goog.uri.utils.appendQueryData_([a,"&",b,"=",goog.string.urlEncode(c)])};
goog.uri.utils.findParam_=function(a,b,c,d){for(var e=c.length;0<=(b=a.indexOf(c,b))&&b<d;){var f=a.charCodeAt(b-1);if(f==goog.uri.utils.CharCode_.AMPERSAND||f==goog.uri.utils.CharCode_.QUESTION)if(f=a.charCodeAt(b+e),!f||f==goog.uri.utils.CharCode_.EQUAL||f==goog.uri.utils.CharCode_.AMPERSAND||f==goog.uri.utils.CharCode_.HASH)return b;b+=e+1}return-1};goog.uri.utils.hashOrEndRe_=/#|$/;goog.uri.utils.hasParam=function(a,b){return 0<=goog.uri.utils.findParam_(a,0,b,a.search(goog.uri.utils.hashOrEndRe_))};
goog.uri.utils.getParamValue=function(a,b){var c=a.search(goog.uri.utils.hashOrEndRe_),d=goog.uri.utils.findParam_(a,0,b,c);if(0>d)return null;var e=a.indexOf("&",d);if(0>e||e>c)e=c;d+=b.length+1;return goog.string.urlDecode(a.substr(d,e-d))};goog.uri.utils.getParamValues=function(a,b){for(var c=a.search(goog.uri.utils.hashOrEndRe_),d=0,e,f=[];0<=(e=goog.uri.utils.findParam_(a,d,b,c));){d=a.indexOf("&",e);if(0>d||d>c)d=c;e+=b.length+1;f.push(goog.string.urlDecode(a.substr(e,d-e)))}return f};
goog.uri.utils.trailingQueryPunctuationRe_=/[?&]($|#)/;goog.uri.utils.removeParam=function(a,b){for(var c=a.search(goog.uri.utils.hashOrEndRe_),d=0,e,f=[];0<=(e=goog.uri.utils.findParam_(a,d,b,c));)f.push(a.substring(d,e)),d=Math.min(a.indexOf("&",e)+1||c,c);f.push(a.substr(d));return f.join("").replace(goog.uri.utils.trailingQueryPunctuationRe_,"$1")};goog.uri.utils.setParam=function(a,b,c){return goog.uri.utils.appendParam(goog.uri.utils.removeParam(a,b),b,c)};
goog.uri.utils.appendPath=function(a,b){goog.uri.utils.assertNoFragmentsOrQueries_(a);goog.string.endsWith(a,"/")&&(a=a.substr(0,a.length-1));goog.string.startsWith(b,"/")&&(b=b.substr(1));return goog.string.buildString(a,"/",b)};goog.uri.utils.StandardQueryParam={RANDOM:"zx"};goog.uri.utils.makeUnique=function(a){return goog.uri.utils.setParam(a,goog.uri.utils.StandardQueryParam.RANDOM,goog.string.getRandomString())};goog.events.EventTarget=function(){goog.Disposable.call(this)};goog.inherits(goog.events.EventTarget,goog.Disposable);goog.events.EventTarget.prototype.customEvent_=!0;goog.events.EventTarget.prototype.parentEventTarget_=null;goog.events.EventTarget.prototype.getParentEventTarget=function(){return this.parentEventTarget_};goog.events.EventTarget.prototype.setParentEventTarget=function(a){this.parentEventTarget_=a};
goog.events.EventTarget.prototype.addEventListener=function(a,b,c,d){goog.events.listen(this,a,b,c,d)};goog.events.EventTarget.prototype.removeEventListener=function(a,b,c,d){goog.events.unlisten(this,a,b,c,d)};goog.events.EventTarget.prototype.dispatchEvent=function(a){return goog.events.dispatchEvent(this,a)};goog.events.EventTarget.prototype.disposeInternal=function(){goog.events.EventTarget.superClass_.disposeInternal.call(this);goog.events.removeAll(this);this.parentEventTarget_=null};goog.Timer=function(a,b){goog.events.EventTarget.call(this);this.interval_=a||1;this.timerObject_=b||goog.Timer.defaultTimerObject;this.boundTick_=goog.bind(this.tick_,this);this.last_=goog.now()};goog.inherits(goog.Timer,goog.events.EventTarget);goog.Timer.MAX_TIMEOUT_=2147483647;goog.Timer.prototype.enabled=!1;goog.Timer.defaultTimerObject=goog.global.window;goog.Timer.intervalScale=0.8;goog.Timer.prototype.timer_=null;goog.Timer.prototype.getInterval=function(){return this.interval_};
goog.Timer.prototype.setInterval=function(a){this.interval_=a;this.timer_&&this.enabled?(this.stop(),this.start()):this.timer_&&this.stop()};goog.Timer.prototype.tick_=function(){if(this.enabled){var a=goog.now()-this.last_;0<a&&a<this.interval_*goog.Timer.intervalScale?this.timer_=this.timerObject_.setTimeout(this.boundTick_,this.interval_-a):(this.dispatchTick(),this.enabled&&(this.timer_=this.timerObject_.setTimeout(this.boundTick_,this.interval_),this.last_=goog.now()))}};
goog.Timer.prototype.dispatchTick=function(){this.dispatchEvent(goog.Timer.TICK)};goog.Timer.prototype.start=function(){this.enabled=!0;this.timer_||(this.timer_=this.timerObject_.setTimeout(this.boundTick_,this.interval_),this.last_=goog.now())};goog.Timer.prototype.stop=function(){this.enabled=!1;this.timer_&&(this.timerObject_.clearTimeout(this.timer_),this.timer_=null)};goog.Timer.prototype.disposeInternal=function(){goog.Timer.superClass_.disposeInternal.call(this);this.stop();delete this.timerObject_};
goog.Timer.TICK="tick";goog.Timer.callOnce=function(a,b,c){if(goog.isFunction(a))c&&(a=goog.bind(a,c));else if(a&&"function"==typeof a.handleEvent)a=goog.bind(a.handleEvent,a);else throw Error("Invalid listener argument");return b>goog.Timer.MAX_TIMEOUT_?-1:goog.Timer.defaultTimerObject.setTimeout(a,b||0)};goog.Timer.clear=function(a){goog.Timer.defaultTimerObject.clearTimeout(a)};goog.iter={};goog.iter.StopIteration="StopIteration"in goog.global?goog.global.StopIteration:Error("StopIteration");goog.iter.Iterator=function(){};goog.iter.Iterator.prototype.next=function(){throw goog.iter.StopIteration;};goog.iter.Iterator.prototype.__iterator__=function(){return this};
goog.iter.toIterator=function(a){if(a instanceof goog.iter.Iterator)return a;if("function"==typeof a.__iterator__)return a.__iterator__(!1);if(goog.isArrayLike(a)){var b=0,c=new goog.iter.Iterator;c.next=function(){for(;;){if(b>=a.length)throw goog.iter.StopIteration;if(b in a)return a[b++];b++}};return c}throw Error("Not implemented");};
goog.iter.forEach=function(a,b,c){if(goog.isArrayLike(a))try{goog.array.forEach(a,b,c)}catch(d){if(d!==goog.iter.StopIteration)throw d;}else{a=goog.iter.toIterator(a);try{for(;;)b.call(c,a.next(),void 0,a)}catch(e){if(e!==goog.iter.StopIteration)throw e;}}};goog.iter.filter=function(a,b,c){var d=goog.iter.toIterator(a),a=new goog.iter.Iterator;a.next=function(){for(;;){var a=d.next();if(b.call(c,a,void 0,d))return a}};return a};
goog.iter.range=function(a,b,c){var d=0,e=a,f=c||1;1<arguments.length&&(d=a,e=b);if(0==f)throw Error("Range step argument must not be zero");var g=new goog.iter.Iterator;g.next=function(){if(f>0&&d>=e||f<0&&d<=e)throw goog.iter.StopIteration;var a=d;d=d+f;return a};return g};goog.iter.join=function(a,b){return goog.iter.toArray(a).join(b)};goog.iter.map=function(a,b,c){var d=goog.iter.toIterator(a),a=new goog.iter.Iterator;a.next=function(){for(;;){var a=d.next();return b.call(c,a,void 0,d)}};return a};
goog.iter.reduce=function(a,b,c,d){var e=c;goog.iter.forEach(a,function(a){e=b.call(d,e,a)});return e};goog.iter.some=function(a,b,c){a=goog.iter.toIterator(a);try{for(;;)if(b.call(c,a.next(),void 0,a))return!0}catch(d){if(d!==goog.iter.StopIteration)throw d;}return!1};goog.iter.every=function(a,b,c){a=goog.iter.toIterator(a);try{for(;;)if(!b.call(c,a.next(),void 0,a))return!1}catch(d){if(d!==goog.iter.StopIteration)throw d;}return!0};
goog.iter.chain=function(a){var b=arguments,c=b.length,d=0,e=new goog.iter.Iterator;e.next=function(){try{if(d>=c)throw goog.iter.StopIteration;return goog.iter.toIterator(b[d]).next()}catch(a){if(a!==goog.iter.StopIteration||d>=c)throw a;d++;return this.next()}};return e};goog.iter.dropWhile=function(a,b,c){var d=goog.iter.toIterator(a),a=new goog.iter.Iterator,e=!0;a.next=function(){for(;;){var a=d.next();if(!e||!b.call(c,a,void 0,d))return e=!1,a}};return a};
goog.iter.takeWhile=function(a,b,c){var d=goog.iter.toIterator(a),a=new goog.iter.Iterator,e=!0;a.next=function(){for(;;)if(e){var a=d.next();if(b.call(c,a,void 0,d))return a;e=!1}else throw goog.iter.StopIteration;};return a};goog.iter.toArray=function(a){if(goog.isArrayLike(a))return goog.array.toArray(a);var a=goog.iter.toIterator(a),b=[];goog.iter.forEach(a,function(a){b.push(a)});return b};
goog.iter.equals=function(a,b){var a=goog.iter.toIterator(a),b=goog.iter.toIterator(b),c,d;try{for(;;){c=d=!1;var e=a.next();c=!0;var f=b.next();d=!0;if(e!=f)break}}catch(g){if(g!==goog.iter.StopIteration)throw g;if(c&&!d)return!1;if(!d)try{b.next()}catch(h){if(h!==goog.iter.StopIteration)throw h;return!0}}return!1};goog.iter.nextOrValue=function(a,b){try{return goog.iter.toIterator(a).next()}catch(c){if(c!=goog.iter.StopIteration)throw c;return b}};
goog.iter.product=function(a){if(goog.array.some(arguments,function(a){return!a.length})||!arguments.length)return new goog.iter.Iterator;var b=new goog.iter.Iterator,c=arguments,d=goog.array.repeat(0,c.length);b.next=function(){if(d){for(var a=goog.array.map(d,function(a,b){return c[b][a]}),b=d.length-1;0<=b;b--){goog.asserts.assert(d);if(d[b]<c[b].length-1){d[b]++;break}if(0==b){d=null;break}d[b]=0}return a}throw goog.iter.StopIteration;};return b};
goog.iter.cycle=function(a){var b=goog.iter.toIterator(a),c=[],d=0,a=new goog.iter.Iterator,e=!1;a.next=function(){var a=null;if(!e)try{return a=b.next(),c.push(a),a}catch(g){if(g!=goog.iter.StopIteration||goog.array.isEmpty(c))throw g;e=!0}a=c[d];d=(d+1)%c.length;return a};return a};goog.structs={};goog.structs.getCount=function(a){return"function"==typeof a.getCount?a.getCount():goog.isArrayLike(a)||goog.isString(a)?a.length:goog.object.getCount(a)};goog.structs.getValues=function(a){if("function"==typeof a.getValues)return a.getValues();if(goog.isString(a))return a.split("");if(goog.isArrayLike(a)){for(var b=[],c=a.length,d=0;d<c;d++)b.push(a[d]);return b}return goog.object.getValues(a)};
goog.structs.getKeys=function(a){if("function"==typeof a.getKeys)return a.getKeys();if("function"!=typeof a.getValues){if(goog.isArrayLike(a)||goog.isString(a)){for(var b=[],a=a.length,c=0;c<a;c++)b.push(c);return b}return goog.object.getKeys(a)}};goog.structs.contains=function(a,b){return"function"==typeof a.contains?a.contains(b):"function"==typeof a.containsValue?a.containsValue(b):goog.isArrayLike(a)||goog.isString(a)?goog.array.contains(a,b):goog.object.containsValue(a,b)};
goog.structs.isEmpty=function(a){return"function"==typeof a.isEmpty?a.isEmpty():goog.isArrayLike(a)||goog.isString(a)?goog.array.isEmpty(a):goog.object.isEmpty(a)};goog.structs.clear=function(a){"function"==typeof a.clear?a.clear():goog.isArrayLike(a)?goog.array.clear(a):goog.object.clear(a)};
goog.structs.forEach=function(a,b,c){if("function"==typeof a.forEach)a.forEach(b,c);else if(goog.isArrayLike(a)||goog.isString(a))goog.array.forEach(a,b,c);else for(var d=goog.structs.getKeys(a),e=goog.structs.getValues(a),f=e.length,g=0;g<f;g++)b.call(c,e[g],d&&d[g],a)};
goog.structs.filter=function(a,b,c){if("function"==typeof a.filter)return a.filter(b,c);if(goog.isArrayLike(a)||goog.isString(a))return goog.array.filter(a,b,c);var d,e=goog.structs.getKeys(a),f=goog.structs.getValues(a),g=f.length;if(e){d={};for(var h=0;h<g;h++)b.call(c,f[h],e[h],a)&&(d[e[h]]=f[h])}else{d=[];for(h=0;h<g;h++)b.call(c,f[h],void 0,a)&&d.push(f[h])}return d};
goog.structs.map=function(a,b,c){if("function"==typeof a.map)return a.map(b,c);if(goog.isArrayLike(a)||goog.isString(a))return goog.array.map(a,b,c);var d,e=goog.structs.getKeys(a),f=goog.structs.getValues(a),g=f.length;if(e){d={};for(var h=0;h<g;h++)d[e[h]]=b.call(c,f[h],e[h],a)}else{d=[];for(h=0;h<g;h++)d[h]=b.call(c,f[h],void 0,a)}return d};
goog.structs.some=function(a,b,c){if("function"==typeof a.some)return a.some(b,c);if(goog.isArrayLike(a)||goog.isString(a))return goog.array.some(a,b,c);for(var d=goog.structs.getKeys(a),e=goog.structs.getValues(a),f=e.length,g=0;g<f;g++)if(b.call(c,e[g],d&&d[g],a))return!0;return!1};
goog.structs.every=function(a,b,c){if("function"==typeof a.every)return a.every(b,c);if(goog.isArrayLike(a)||goog.isString(a))return goog.array.every(a,b,c);for(var d=goog.structs.getKeys(a),e=goog.structs.getValues(a),f=e.length,g=0;g<f;g++)if(!b.call(c,e[g],d&&d[g],a))return!1;return!0};goog.structs.Map=function(a,b){this.map_={};this.keys_=[];var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else a&&this.addAll(a)};goog.structs.Map.prototype.count_=0;goog.structs.Map.prototype.version_=0;goog.structs.Map.prototype.getCount=function(){return this.count_};
goog.structs.Map.prototype.getValues=function(){this.cleanupKeysArray_();for(var a=[],b=0;b<this.keys_.length;b++)a.push(this.map_[this.keys_[b]]);return a};goog.structs.Map.prototype.getKeys=function(){this.cleanupKeysArray_();return this.keys_.concat()};goog.structs.Map.prototype.containsKey=function(a){return goog.structs.Map.hasKey_(this.map_,a)};
goog.structs.Map.prototype.containsValue=function(a){for(var b=0;b<this.keys_.length;b++){var c=this.keys_[b];if(goog.structs.Map.hasKey_(this.map_,c)&&this.map_[c]==a)return!0}return!1};goog.structs.Map.prototype.equals=function(a,b){if(this===a)return!0;if(this.count_!=a.getCount())return!1;var c=b||goog.structs.Map.defaultEquals;this.cleanupKeysArray_();for(var d,e=0;d=this.keys_[e];e++)if(!c(this.get(d),a.get(d)))return!1;return!0};goog.structs.Map.defaultEquals=function(a,b){return a===b};
goog.structs.Map.prototype.isEmpty=function(){return 0==this.count_};goog.structs.Map.prototype.clear=function(){this.map_={};this.version_=this.count_=this.keys_.length=0};goog.structs.Map.prototype.remove=function(a){return goog.structs.Map.hasKey_(this.map_,a)?(delete this.map_[a],this.count_--,this.version_++,this.keys_.length>2*this.count_&&this.cleanupKeysArray_(),!0):!1};
goog.structs.Map.prototype.cleanupKeysArray_=function(){if(this.count_!=this.keys_.length){for(var a=0,b=0;a<this.keys_.length;){var c=this.keys_[a];goog.structs.Map.hasKey_(this.map_,c)&&(this.keys_[b++]=c);a++}this.keys_.length=b}if(this.count_!=this.keys_.length){for(var d={},b=a=0;a<this.keys_.length;)c=this.keys_[a],goog.structs.Map.hasKey_(d,c)||(this.keys_[b++]=c,d[c]=1),a++;this.keys_.length=b}};
goog.structs.Map.prototype.get=function(a,b){return goog.structs.Map.hasKey_(this.map_,a)?this.map_[a]:b};goog.structs.Map.prototype.set=function(a,b){goog.structs.Map.hasKey_(this.map_,a)||(this.count_++,this.keys_.push(a),this.version_++);this.map_[a]=b};goog.structs.Map.prototype.addAll=function(a){var b;a instanceof goog.structs.Map?(b=a.getKeys(),a=a.getValues()):(b=goog.object.getKeys(a),a=goog.object.getValues(a));for(var c=0;c<b.length;c++)this.set(b[c],a[c])};
goog.structs.Map.prototype.clone=function(){return new goog.structs.Map(this)};goog.structs.Map.prototype.transpose=function(){for(var a=new goog.structs.Map,b=0;b<this.keys_.length;b++){var c=this.keys_[b];a.set(this.map_[c],c)}return a};goog.structs.Map.prototype.toObject=function(){this.cleanupKeysArray_();for(var a={},b=0;b<this.keys_.length;b++){var c=this.keys_[b];a[c]=this.map_[c]}return a};goog.structs.Map.prototype.getKeyIterator=function(){return this.__iterator__(!0)};
goog.structs.Map.prototype.getValueIterator=function(){return this.__iterator__(!1)};goog.structs.Map.prototype.__iterator__=function(a){this.cleanupKeysArray_();var b=0,c=this.keys_,d=this.map_,e=this.version_,f=this,g=new goog.iter.Iterator;g.next=function(){for(;;){if(e!=f.version_)throw Error("The map has changed since the iterator was created");if(b>=c.length)throw goog.iter.StopIteration;var g=c[b++];return a?g:d[g]}};return g};
goog.structs.Map.hasKey_=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)};goog.net={};goog.net.ErrorCode={NO_ERROR:0,ACCESS_DENIED:1,FILE_NOT_FOUND:2,FF_SILENT_ERROR:3,CUSTOM_ERROR:4,EXCEPTION:5,HTTP_ERROR:6,ABORT:7,TIMEOUT:8,OFFLINE:9};
goog.net.ErrorCode.getDebugMessage=function(a){switch(a){case goog.net.ErrorCode.NO_ERROR:return"No Error";case goog.net.ErrorCode.ACCESS_DENIED:return"Access denied to content document";case goog.net.ErrorCode.FILE_NOT_FOUND:return"File not found";case goog.net.ErrorCode.FF_SILENT_ERROR:return"Firefox silently errored";case goog.net.ErrorCode.CUSTOM_ERROR:return"Application custom error";case goog.net.ErrorCode.EXCEPTION:return"An exception occurred";case goog.net.ErrorCode.HTTP_ERROR:return"Http response at 400 or 500 level";
case goog.net.ErrorCode.ABORT:return"Request was aborted";case goog.net.ErrorCode.TIMEOUT:return"Request timed out";case goog.net.ErrorCode.OFFLINE:return"The resource is not available offline";default:return"Unrecognized error code"}};goog.net.HttpStatus={CONTINUE:100,SWITCHING_PROTOCOLS:101,OK:200,CREATED:201,ACCEPTED:202,NON_AUTHORITATIVE_INFORMATION:203,NO_CONTENT:204,RESET_CONTENT:205,PARTIAL_CONTENT:206,MULTIPLE_CHOICES:300,MOVED_PERMANENTLY:301,FOUND:302,SEE_OTHER:303,NOT_MODIFIED:304,USE_PROXY:305,TEMPORARY_REDIRECT:307,BAD_REQUEST:400,UNAUTHORIZED:401,PAYMENT_REQUIRED:402,FORBIDDEN:403,NOT_FOUND:404,METHOD_NOT_ALLOWED:405,NOT_ACCEPTABLE:406,PROXY_AUTHENTICATION_REQUIRED:407,REQUEST_TIMEOUT:408,CONFLICT:409,GONE:410,LENGTH_REQUIRED:411,
PRECONDITION_FAILED:412,REQUEST_ENTITY_TOO_LARGE:413,REQUEST_URI_TOO_LONG:414,UNSUPPORTED_MEDIA_TYPE:415,REQUEST_RANGE_NOT_SATISFIABLE:416,EXPECTATION_FAILED:417,INTERNAL_SERVER_ERROR:500,NOT_IMPLEMENTED:501,BAD_GATEWAY:502,SERVICE_UNAVAILABLE:503,GATEWAY_TIMEOUT:504,HTTP_VERSION_NOT_SUPPORTED:505,QUIRK_IE_NO_CONTENT:1223};
goog.net.HttpStatus.isSuccess=function(a){switch(a){case goog.net.HttpStatus.OK:case goog.net.HttpStatus.CREATED:case goog.net.HttpStatus.ACCEPTED:case goog.net.HttpStatus.NO_CONTENT:case goog.net.HttpStatus.NOT_MODIFIED:case goog.net.HttpStatus.QUIRK_IE_NO_CONTENT:return!0;default:return!1}};goog.net.XmlHttpFactory=function(){};goog.net.XmlHttpFactory.prototype.cachedOptions_=null;goog.net.XmlHttpFactory.prototype.getOptions=function(){return this.cachedOptions_||(this.cachedOptions_=this.internalGetOptions())};goog.net.WrapperXmlHttpFactory=function(a,b){goog.net.XmlHttpFactory.call(this);this.xhrFactory_=a;this.optionsFactory_=b};goog.inherits(goog.net.WrapperXmlHttpFactory,goog.net.XmlHttpFactory);goog.net.WrapperXmlHttpFactory.prototype.createInstance=function(){return this.xhrFactory_()};goog.net.WrapperXmlHttpFactory.prototype.getOptions=function(){return this.optionsFactory_()};goog.net.XmlHttp=function(){return goog.net.XmlHttp.factory_.createInstance()};goog.net.XmlHttp.ASSUME_NATIVE_XHR=!1;goog.net.XmlHttp.getOptions=function(){return goog.net.XmlHttp.factory_.getOptions()};goog.net.XmlHttp.OptionType={USE_NULL_FUNCTION:0,LOCAL_REQUEST_ERROR:1};goog.net.XmlHttp.ReadyState={UNINITIALIZED:0,LOADING:1,LOADED:2,INTERACTIVE:3,COMPLETE:4};goog.net.XmlHttp.setFactory=function(a,b){goog.net.XmlHttp.setGlobalFactory(new goog.net.WrapperXmlHttpFactory(a,b))};
goog.net.XmlHttp.setGlobalFactory=function(a){goog.net.XmlHttp.factory_=a};goog.net.DefaultXmlHttpFactory=function(){goog.net.XmlHttpFactory.call(this)};goog.inherits(goog.net.DefaultXmlHttpFactory,goog.net.XmlHttpFactory);goog.net.DefaultXmlHttpFactory.prototype.createInstance=function(){var a=this.getProgId_();return a?new ActiveXObject(a):new XMLHttpRequest};
goog.net.DefaultXmlHttpFactory.prototype.internalGetOptions=function(){var a={};this.getProgId_()&&(a[goog.net.XmlHttp.OptionType.USE_NULL_FUNCTION]=!0,a[goog.net.XmlHttp.OptionType.LOCAL_REQUEST_ERROR]=!0);return a};
goog.net.DefaultXmlHttpFactory.prototype.getProgId_=function(){if(goog.net.XmlHttp.ASSUME_NATIVE_XHR)return"";if(!this.ieProgId_&&"undefined"==typeof XMLHttpRequest&&"undefined"!=typeof ActiveXObject){for(var a=["MSXML2.XMLHTTP.6.0","MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP","Microsoft.XMLHTTP"],b=0;b<a.length;b++){var c=a[b];try{return new ActiveXObject(c),this.ieProgId_=c}catch(d){}}throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");}return this.ieProgId_};
goog.net.XmlHttp.setGlobalFactory(new goog.net.DefaultXmlHttpFactory);goog.net.EventType={COMPLETE:"complete",SUCCESS:"success",ERROR:"error",ABORT:"abort",READY:"ready",READY_STATE_CHANGE:"readystatechange",TIMEOUT:"timeout",INCREMENTAL_DATA:"incrementaldata",PROGRESS:"progress"};goog.structs.Collection=function(){};goog.structs.Set=function(a){this.map_=new goog.structs.Map;a&&this.addAll(a)};goog.structs.Set.getKey_=function(a){var b=typeof a;return"object"==b&&a||"function"==b?"o"+goog.getUid(a):b.substr(0,1)+a};goog.structs.Set.prototype.getCount=function(){return this.map_.getCount()};goog.structs.Set.prototype.add=function(a){this.map_.set(goog.structs.Set.getKey_(a),a)};goog.structs.Set.prototype.addAll=function(a){for(var a=goog.structs.getValues(a),b=a.length,c=0;c<b;c++)this.add(a[c])};
goog.structs.Set.prototype.removeAll=function(a){for(var a=goog.structs.getValues(a),b=a.length,c=0;c<b;c++)this.remove(a[c])};goog.structs.Set.prototype.remove=function(a){return this.map_.remove(goog.structs.Set.getKey_(a))};goog.structs.Set.prototype.clear=function(){this.map_.clear()};goog.structs.Set.prototype.isEmpty=function(){return this.map_.isEmpty()};goog.structs.Set.prototype.contains=function(a){return this.map_.containsKey(goog.structs.Set.getKey_(a))};
goog.structs.Set.prototype.containsAll=function(a){return goog.structs.every(a,this.contains,this)};goog.structs.Set.prototype.intersection=function(a){for(var b=new goog.structs.Set,a=goog.structs.getValues(a),c=0;c<a.length;c++){var d=a[c];this.contains(d)&&b.add(d)}return b};goog.structs.Set.prototype.difference=function(a){var b=this.clone();b.removeAll(a);return b};goog.structs.Set.prototype.getValues=function(){return this.map_.getValues()};goog.structs.Set.prototype.clone=function(){return new goog.structs.Set(this)};
goog.structs.Set.prototype.equals=function(a){return this.getCount()==goog.structs.getCount(a)&&this.isSubsetOf(a)};goog.structs.Set.prototype.isSubsetOf=function(a){var b=goog.structs.getCount(a);if(this.getCount()>b)return!1;!(a instanceof goog.structs.Set)&&5<b&&(a=new goog.structs.Set(a));return goog.structs.every(this,function(b){return goog.structs.contains(a,b)})};goog.structs.Set.prototype.__iterator__=function(){return this.map_.__iterator__(!1)};goog.debug.catchErrors=function(a,b,c){var c=c||goog.global,d=c.onerror,e=!!b;goog.userAgent.WEBKIT&&!goog.userAgent.isVersion("535.3")&&(e=!e);c.onerror=function(b,c,h){d&&d(b,c,h);a({message:b,fileName:c,line:h});return e}};goog.debug.expose=function(a,b){if("undefined"==typeof a)return"undefined";if(null==a)return"NULL";var c=[],d;for(d in a)if(b||!goog.isFunction(a[d])){var e=d+" = ";try{e+=a[d]}catch(f){e+="*** "+f+" ***"}c.push(e)}return c.join("\n")};
goog.debug.deepExpose=function(a,b){var c=new goog.structs.Set,d=[],e=function(a,g){var h=g+"  ";try{if(goog.isDef(a))if(goog.isNull(a))d.push("NULL");else if(goog.isString(a))d.push('"'+a.replace(/\n/g,"\n"+g)+'"');else if(goog.isFunction(a))d.push(String(a).replace(/\n/g,"\n"+g));else if(goog.isObject(a))if(c.contains(a))d.push("*** reference loop detected ***");else{c.add(a);d.push("{");for(var i in a)if(b||!goog.isFunction(a[i]))d.push("\n"),d.push(h),d.push(i+" = "),e(a[i],h);d.push("\n"+g+"}")}else d.push(a);
else d.push("undefined")}catch(j){d.push("*** "+j+" ***")}};e(a,"");return d.join("")};goog.debug.exposeArray=function(a){for(var b=[],c=0;c<a.length;c++)goog.isArray(a[c])?b.push(goog.debug.exposeArray(a[c])):b.push(a[c]);return"[ "+b.join(", ")+" ]"};
goog.debug.exposeException=function(a,b){try{var c=goog.debug.normalizeErrorObject(a);return"Message: "+goog.string.htmlEscape(c.message)+'\nUrl: <a href="view-source:'+c.fileName+'" target="_new">'+c.fileName+"</a>\nLine: "+c.lineNumber+"\n\nBrowser stack:\n"+goog.string.htmlEscape(c.stack+"-> ")+"[end]\n\nJS stack traversal:\n"+goog.string.htmlEscape(goog.debug.getStacktrace(b)+"-> ")}catch(d){return"Exception trying to expose exception! You win, we lose. "+d}};
goog.debug.normalizeErrorObject=function(a){var b=goog.getObjectByName("window.location.href");if(goog.isString(a))return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c,d,e=!1;try{c=a.lineNumber||a.line||"Not available"}catch(f){c="Not available",e=!0}try{d=a.fileName||a.filename||a.sourceURL||b}catch(g){d="Not available",e=!0}return e||!a.lineNumber||!a.fileName||!a.stack?{message:a.message,name:a.name,lineNumber:c,fileName:d,stack:a.stack||"Not available"}:
a};goog.debug.enhanceError=function(a,b){var c="string"==typeof a?Error(a):a;c.stack||(c.stack=goog.debug.getStacktrace(arguments.callee.caller));if(b){for(var d=0;c["message"+d];)++d;c["message"+d]=String(b)}return c};
goog.debug.getStacktraceSimple=function(a){for(var b=[],c=arguments.callee.caller,d=0;c&&(!a||d<a);){b.push(goog.debug.getFunctionName(c));b.push("()\n");try{c=c.caller}catch(e){b.push("[exception trying to get caller]\n");break}d++;if(d>=goog.debug.MAX_STACK_DEPTH){b.push("[...long stack...]");break}}a&&d>=a?b.push("[...reached max depth limit...]"):b.push("[end]");return b.join("")};goog.debug.MAX_STACK_DEPTH=50;
goog.debug.getStacktrace=function(a){return goog.debug.getStacktraceHelper_(a||arguments.callee.caller,[])};
goog.debug.getStacktraceHelper_=function(a,b){var c=[];if(goog.array.contains(b,a))c.push("[...circular reference...]");else if(a&&b.length<goog.debug.MAX_STACK_DEPTH){c.push(goog.debug.getFunctionName(a)+"(");for(var d=a.arguments,e=0;e<d.length;e++){0<e&&c.push(", ");var f;f=d[e];switch(typeof f){case "object":f=f?"object":"null";break;case "string":break;case "number":f=String(f);break;case "boolean":f=f?"true":"false";break;case "function":f=(f=goog.debug.getFunctionName(f))?f:"[fn]";break;default:f=
typeof f}40<f.length&&(f=f.substr(0,40)+"...");c.push(f)}b.push(a);c.push(")\n");try{c.push(goog.debug.getStacktraceHelper_(a.caller,b))}catch(g){c.push("[exception trying to get caller]\n")}}else a?c.push("[...long stack...]"):c.push("[end]");return c.join("")};goog.debug.setFunctionResolver=function(a){goog.debug.fnNameResolver_=a};
goog.debug.getFunctionName=function(a){if(goog.debug.fnNameCache_[a])return goog.debug.fnNameCache_[a];if(goog.debug.fnNameResolver_){var b=goog.debug.fnNameResolver_(a);if(b)return goog.debug.fnNameCache_[a]=b}a=String(a);goog.debug.fnNameCache_[a]||(b=/function ([^\(]+)/.exec(a),goog.debug.fnNameCache_[a]=b?b[1]:"[Anonymous]");return goog.debug.fnNameCache_[a]};
goog.debug.makeWhitespaceVisible=function(a){return a.replace(/ /g,"[_]").replace(/\f/g,"[f]").replace(/\n/g,"[n]\n").replace(/\r/g,"[r]").replace(/\t/g,"[t]")};goog.debug.fnNameCache_={};goog.debug.LogRecord=function(a,b,c,d,e){this.reset(a,b,c,d,e)};goog.debug.LogRecord.prototype.sequenceNumber_=0;goog.debug.LogRecord.prototype.exception_=null;goog.debug.LogRecord.prototype.exceptionText_=null;goog.debug.LogRecord.ENABLE_SEQUENCE_NUMBERS=!0;goog.debug.LogRecord.nextSequenceNumber_=0;
goog.debug.LogRecord.prototype.reset=function(a,b,c,d,e){goog.debug.LogRecord.ENABLE_SEQUENCE_NUMBERS&&(this.sequenceNumber_="number"==typeof e?e:goog.debug.LogRecord.nextSequenceNumber_++);this.time_=d||goog.now();this.level_=a;this.msg_=b;this.loggerName_=c;delete this.exception_;delete this.exceptionText_};goog.debug.LogRecord.prototype.getLoggerName=function(){return this.loggerName_};goog.debug.LogRecord.prototype.getException=function(){return this.exception_};
goog.debug.LogRecord.prototype.setException=function(a){this.exception_=a};goog.debug.LogRecord.prototype.getExceptionText=function(){return this.exceptionText_};goog.debug.LogRecord.prototype.setExceptionText=function(a){this.exceptionText_=a};goog.debug.LogRecord.prototype.setLoggerName=function(a){this.loggerName_=a};goog.debug.LogRecord.prototype.getLevel=function(){return this.level_};goog.debug.LogRecord.prototype.setLevel=function(a){this.level_=a};
goog.debug.LogRecord.prototype.getMessage=function(){return this.msg_};goog.debug.LogRecord.prototype.setMessage=function(a){this.msg_=a};goog.debug.LogRecord.prototype.getMillis=function(){return this.time_};goog.debug.LogRecord.prototype.setMillis=function(a){this.time_=a};goog.debug.LogRecord.prototype.getSequenceNumber=function(){return this.sequenceNumber_};goog.debug.LogBuffer=function(){goog.asserts.assert(goog.debug.LogBuffer.isBufferingEnabled(),"Cannot use goog.debug.LogBuffer without defining goog.debug.LogBuffer.CAPACITY.");this.clear()};goog.debug.LogBuffer.getInstance=function(){goog.debug.LogBuffer.instance_||(goog.debug.LogBuffer.instance_=new goog.debug.LogBuffer);return goog.debug.LogBuffer.instance_};goog.debug.LogBuffer.CAPACITY=0;
goog.debug.LogBuffer.prototype.addRecord=function(a,b,c){var d=(this.curIndex_+1)%goog.debug.LogBuffer.CAPACITY;this.curIndex_=d;if(this.isFull_)return d=this.buffer_[d],d.reset(a,b,c),d;this.isFull_=d==goog.debug.LogBuffer.CAPACITY-1;return this.buffer_[d]=new goog.debug.LogRecord(a,b,c)};goog.debug.LogBuffer.isBufferingEnabled=function(){return 0<goog.debug.LogBuffer.CAPACITY};
goog.debug.LogBuffer.prototype.clear=function(){this.buffer_=Array(goog.debug.LogBuffer.CAPACITY);this.curIndex_=-1;this.isFull_=!1};goog.debug.LogBuffer.prototype.forEachRecord=function(a){var b=this.buffer_;if(b[0]){var c=this.curIndex_,d=this.isFull_?c:-1;do d=(d+1)%goog.debug.LogBuffer.CAPACITY,a(b[d]);while(d!=c)}};goog.debug.Logger=function(a){this.name_=a};goog.debug.Logger.prototype.parent_=null;goog.debug.Logger.prototype.level_=null;goog.debug.Logger.prototype.children_=null;goog.debug.Logger.prototype.handlers_=null;goog.debug.Logger.ENABLE_HIERARCHY=!0;goog.debug.Logger.ENABLE_HIERARCHY||(goog.debug.Logger.rootHandlers_=[]);goog.debug.Logger.Level=function(a,b){this.name=a;this.value=b};goog.debug.Logger.Level.prototype.toString=function(){return this.name};
goog.debug.Logger.Level.OFF=new goog.debug.Logger.Level("OFF",Infinity);goog.debug.Logger.Level.SHOUT=new goog.debug.Logger.Level("SHOUT",1200);goog.debug.Logger.Level.SEVERE=new goog.debug.Logger.Level("SEVERE",1E3);goog.debug.Logger.Level.WARNING=new goog.debug.Logger.Level("WARNING",900);goog.debug.Logger.Level.INFO=new goog.debug.Logger.Level("INFO",800);goog.debug.Logger.Level.CONFIG=new goog.debug.Logger.Level("CONFIG",700);goog.debug.Logger.Level.FINE=new goog.debug.Logger.Level("FINE",500);
goog.debug.Logger.Level.FINER=new goog.debug.Logger.Level("FINER",400);goog.debug.Logger.Level.FINEST=new goog.debug.Logger.Level("FINEST",300);goog.debug.Logger.Level.ALL=new goog.debug.Logger.Level("ALL",0);
goog.debug.Logger.Level.PREDEFINED_LEVELS=[goog.debug.Logger.Level.OFF,goog.debug.Logger.Level.SHOUT,goog.debug.Logger.Level.SEVERE,goog.debug.Logger.Level.WARNING,goog.debug.Logger.Level.INFO,goog.debug.Logger.Level.CONFIG,goog.debug.Logger.Level.FINE,goog.debug.Logger.Level.FINER,goog.debug.Logger.Level.FINEST,goog.debug.Logger.Level.ALL];goog.debug.Logger.Level.predefinedLevelsCache_=null;
goog.debug.Logger.Level.createPredefinedLevelsCache_=function(){goog.debug.Logger.Level.predefinedLevelsCache_={};for(var a=0,b;b=goog.debug.Logger.Level.PREDEFINED_LEVELS[a];a++){goog.debug.Logger.Level.predefinedLevelsCache_[b.value]=b;goog.debug.Logger.Level.predefinedLevelsCache_[b.name]=b}};
goog.debug.Logger.Level.getPredefinedLevel=function(a){goog.debug.Logger.Level.predefinedLevelsCache_||goog.debug.Logger.Level.createPredefinedLevelsCache_();return goog.debug.Logger.Level.predefinedLevelsCache_[a]||null};
goog.debug.Logger.Level.getPredefinedLevelByValue=function(a){goog.debug.Logger.Level.predefinedLevelsCache_||goog.debug.Logger.Level.createPredefinedLevelsCache_();if(a in goog.debug.Logger.Level.predefinedLevelsCache_)return goog.debug.Logger.Level.predefinedLevelsCache_[a];for(var b=0;b<goog.debug.Logger.Level.PREDEFINED_LEVELS.length;++b){var c=goog.debug.Logger.Level.PREDEFINED_LEVELS[b];if(c.value<=a)return c}return null};goog.debug.Logger.getLogger=function(a){return goog.debug.LogManager.getLogger(a)};
goog.debug.Logger.logToProfilers=function(a){goog.global.console&&(goog.global.console.timeStamp?goog.global.console.timeStamp(a):goog.global.console.markTimeline&&goog.global.console.markTimeline(a));goog.global.msWriteProfilerMark&&goog.global.msWriteProfilerMark(a)};goog.debug.Logger.prototype.getName=function(){return this.name_};
goog.debug.Logger.prototype.addHandler=function(a){if(goog.debug.Logger.ENABLE_HIERARCHY){if(!this.handlers_)this.handlers_=[];this.handlers_.push(a)}else{goog.asserts.assert(!this.name_,"Cannot call addHandler on a non-root logger when goog.debug.Logger.ENABLE_HIERARCHY is false.");goog.debug.Logger.rootHandlers_.push(a)}};goog.debug.Logger.prototype.removeHandler=function(a){var b=goog.debug.Logger.ENABLE_HIERARCHY?this.handlers_:goog.debug.Logger.rootHandlers_;return!!b&&goog.array.remove(b,a)};
goog.debug.Logger.prototype.getParent=function(){return this.parent_};goog.debug.Logger.prototype.getChildren=function(){if(!this.children_)this.children_={};return this.children_};goog.debug.Logger.prototype.setLevel=function(a){if(goog.debug.Logger.ENABLE_HIERARCHY)this.level_=a;else{goog.asserts.assert(!this.name_,"Cannot call setLevel() on a non-root logger when goog.debug.Logger.ENABLE_HIERARCHY is false.");goog.debug.Logger.rootLevel_=a}};goog.debug.Logger.prototype.getLevel=function(){return this.level_};
goog.debug.Logger.prototype.getEffectiveLevel=function(){if(!goog.debug.Logger.ENABLE_HIERARCHY)return goog.debug.Logger.rootLevel_;if(this.level_)return this.level_;if(this.parent_)return this.parent_.getEffectiveLevel();goog.asserts.fail("Root logger has no level set.");return null};goog.debug.Logger.prototype.isLoggable=function(a){return a.value>=this.getEffectiveLevel().value};goog.debug.Logger.prototype.log=function(a,b,c){this.isLoggable(a)&&this.doLogRecord_(this.getLogRecord(a,b,c))};
goog.debug.Logger.prototype.getLogRecord=function(a,b,c){var d=goog.debug.LogBuffer.isBufferingEnabled()?goog.debug.LogBuffer.getInstance().addRecord(a,b,this.name_):new goog.debug.LogRecord(a,String(b),this.name_);if(c){d.setException(c);d.setExceptionText(goog.debug.exposeException(c,arguments.callee.caller))}return d};goog.debug.Logger.prototype.shout=function(a,b){this.log(goog.debug.Logger.Level.SHOUT,a,b)};
goog.debug.Logger.prototype.severe=function(a,b){this.log(goog.debug.Logger.Level.SEVERE,a,b)};goog.debug.Logger.prototype.warning=function(a,b){this.log(goog.debug.Logger.Level.WARNING,a,b)};goog.debug.Logger.prototype.info=function(a,b){this.log(goog.debug.Logger.Level.INFO,a,b)};goog.debug.Logger.prototype.config=function(a,b){this.log(goog.debug.Logger.Level.CONFIG,a,b)};goog.debug.Logger.prototype.fine=function(a,b){this.log(goog.debug.Logger.Level.FINE,a,b)};
goog.debug.Logger.prototype.finer=function(a,b){this.log(goog.debug.Logger.Level.FINER,a,b)};goog.debug.Logger.prototype.finest=function(a,b){this.log(goog.debug.Logger.Level.FINEST,a,b)};goog.debug.Logger.prototype.logRecord=function(a){this.isLoggable(a.getLevel())&&this.doLogRecord_(a)};
goog.debug.Logger.prototype.doLogRecord_=function(a){goog.debug.Logger.logToProfilers("log:"+a.getMessage());if(goog.debug.Logger.ENABLE_HIERARCHY)for(var b=this;b;){b.callPublish_(a);b=b.getParent()}else for(var b=0,c;c=goog.debug.Logger.rootHandlers_[b++];)c(a)};goog.debug.Logger.prototype.callPublish_=function(a){if(this.handlers_)for(var b=0,c;c=this.handlers_[b];b++)c(a)};goog.debug.Logger.prototype.setParent_=function(a){this.parent_=a};
goog.debug.Logger.prototype.addChild_=function(a,b){this.getChildren()[a]=b};goog.debug.LogManager={};goog.debug.LogManager.loggers_={};goog.debug.LogManager.rootLogger_=null;goog.debug.LogManager.initialize=function(){if(!goog.debug.LogManager.rootLogger_){goog.debug.LogManager.rootLogger_=new goog.debug.Logger("");goog.debug.LogManager.loggers_[""]=goog.debug.LogManager.rootLogger_;goog.debug.LogManager.rootLogger_.setLevel(goog.debug.Logger.Level.CONFIG)}};goog.debug.LogManager.getLoggers=function(){return goog.debug.LogManager.loggers_};
goog.debug.LogManager.getRoot=function(){goog.debug.LogManager.initialize();return goog.debug.LogManager.rootLogger_};goog.debug.LogManager.getLogger=function(a){goog.debug.LogManager.initialize();return goog.debug.LogManager.loggers_[a]||goog.debug.LogManager.createLogger_(a)};goog.debug.LogManager.createFunctionForCatchErrors=function(a){return function(b){(a||goog.debug.LogManager.getRoot()).severe("Error: "+b.message+" ("+b.fileName+" @ Line: "+b.line+")")}};
goog.debug.LogManager.createLogger_=function(a){var b=new goog.debug.Logger(a);if(goog.debug.Logger.ENABLE_HIERARCHY){var c=a.lastIndexOf("."),d=a.substr(0,c),c=a.substr(c+1),d=goog.debug.LogManager.getLogger(d);d.addChild_(c,b);b.setParent_(d)}return goog.debug.LogManager.loggers_[a]=b};goog.net.XhrIo=function(a){goog.events.EventTarget.call(this);this.headers=new goog.structs.Map;this.xmlHttpFactory_=a||null};goog.inherits(goog.net.XhrIo,goog.events.EventTarget);goog.net.XhrIo.ResponseType={DEFAULT:"",TEXT:"text",DOCUMENT:"document",BLOB:"blob",ARRAY_BUFFER:"arraybuffer"};goog.net.XhrIo.prototype.logger_=goog.debug.Logger.getLogger("goog.net.XhrIo");goog.net.XhrIo.CONTENT_TYPE_HEADER="Content-Type";goog.net.XhrIo.HTTP_SCHEME_PATTERN=/^https?$/i;
goog.net.XhrIo.FORM_CONTENT_TYPE="application/x-www-form-urlencoded;charset=utf-8";goog.net.XhrIo.sendInstances_=[];goog.net.XhrIo.send=function(a,b,c,d,e,f){var g=new goog.net.XhrIo;goog.net.XhrIo.sendInstances_.push(g);b&&goog.events.listen(g,goog.net.EventType.COMPLETE,b);goog.events.listen(g,goog.net.EventType.READY,goog.partial(goog.net.XhrIo.cleanupSend_,g));f&&g.setTimeoutInterval(f);g.send(a,c,d,e)};goog.net.XhrIo.cleanup=function(){for(var a=goog.net.XhrIo.sendInstances_;a.length;)a.pop().dispose()};
goog.net.XhrIo.protectEntryPoints=function(a){goog.net.XhrIo.prototype.onReadyStateChangeEntryPoint_=a.protectEntryPoint(goog.net.XhrIo.prototype.onReadyStateChangeEntryPoint_)};goog.net.XhrIo.cleanupSend_=function(a){a.dispose();goog.array.remove(goog.net.XhrIo.sendInstances_,a)};goog.net.XhrIo.prototype.active_=!1;goog.net.XhrIo.prototype.xhr_=null;goog.net.XhrIo.prototype.xhrOptions_=null;goog.net.XhrIo.prototype.lastUri_="";goog.net.XhrIo.prototype.lastMethod_="";
goog.net.XhrIo.prototype.lastErrorCode_=goog.net.ErrorCode.NO_ERROR;goog.net.XhrIo.prototype.lastError_="";goog.net.XhrIo.prototype.errorDispatched_=!1;goog.net.XhrIo.prototype.inSend_=!1;goog.net.XhrIo.prototype.inOpen_=!1;goog.net.XhrIo.prototype.inAbort_=!1;goog.net.XhrIo.prototype.timeoutInterval_=0;goog.net.XhrIo.prototype.timeoutId_=null;goog.net.XhrIo.prototype.responseType_=goog.net.XhrIo.ResponseType.DEFAULT;goog.net.XhrIo.prototype.withCredentials_=!1;
goog.net.XhrIo.prototype.getTimeoutInterval=function(){return this.timeoutInterval_};goog.net.XhrIo.prototype.setTimeoutInterval=function(a){this.timeoutInterval_=Math.max(0,a)};goog.net.XhrIo.prototype.setResponseType=function(a){this.responseType_=a};goog.net.XhrIo.prototype.getResponseType=function(){return this.responseType_};goog.net.XhrIo.prototype.setWithCredentials=function(a){this.withCredentials_=a};goog.net.XhrIo.prototype.getWithCredentials=function(){return this.withCredentials_};
goog.net.XhrIo.prototype.send=function(a,b,c,d){if(this.xhr_)throw Error("[goog.net.XhrIo] Object is active with another request");b=b?b.toUpperCase():"GET";this.lastUri_=a;this.lastError_="";this.lastErrorCode_=goog.net.ErrorCode.NO_ERROR;this.lastMethod_=b;this.errorDispatched_=!1;this.active_=!0;this.xhr_=this.createXhr();this.xhrOptions_=this.xmlHttpFactory_?this.xmlHttpFactory_.getOptions():goog.net.XmlHttp.getOptions();this.xhr_.onreadystatechange=goog.bind(this.onReadyStateChange_,this);try{this.logger_.fine(this.formatMsg_("Opening Xhr")),
this.inOpen_=!0,this.xhr_.open(b,a,!0),this.inOpen_=!1}catch(e){this.logger_.fine(this.formatMsg_("Error opening Xhr: "+e.message));this.error_(goog.net.ErrorCode.EXCEPTION,e);return}var a=c||"",f=this.headers.clone();d&&goog.structs.forEach(d,function(a,b){f.set(b,a)});"POST"==b&&!f.containsKey(goog.net.XhrIo.CONTENT_TYPE_HEADER)&&f.set(goog.net.XhrIo.CONTENT_TYPE_HEADER,goog.net.XhrIo.FORM_CONTENT_TYPE);goog.structs.forEach(f,function(a,b){this.xhr_.setRequestHeader(b,a)},this);this.responseType_&&
(this.xhr_.responseType=this.responseType_);goog.object.containsKey(this.xhr_,"withCredentials")&&(this.xhr_.withCredentials=this.withCredentials_);try{this.timeoutId_&&(goog.Timer.defaultTimerObject.clearTimeout(this.timeoutId_),this.timeoutId_=null),0<this.timeoutInterval_&&(this.logger_.fine(this.formatMsg_("Will abort after "+this.timeoutInterval_+"ms if incomplete")),this.timeoutId_=goog.Timer.defaultTimerObject.setTimeout(goog.bind(this.timeout_,this),this.timeoutInterval_)),this.logger_.fine(this.formatMsg_("Sending request")),
this.inSend_=!0,this.xhr_.send(a),this.inSend_=!1}catch(g){this.logger_.fine(this.formatMsg_("Send error: "+g.message)),this.error_(goog.net.ErrorCode.EXCEPTION,g)}};goog.net.XhrIo.prototype.createXhr=function(){return this.xmlHttpFactory_?this.xmlHttpFactory_.createInstance():goog.net.XmlHttp()};
goog.net.XhrIo.prototype.timeout_=function(){"undefined"!=typeof goog&&this.xhr_&&(this.lastError_="Timed out after "+this.timeoutInterval_+"ms, aborting",this.lastErrorCode_=goog.net.ErrorCode.TIMEOUT,this.logger_.fine(this.formatMsg_(this.lastError_)),this.dispatchEvent(goog.net.EventType.TIMEOUT),this.abort(goog.net.ErrorCode.TIMEOUT))};
goog.net.XhrIo.prototype.error_=function(a,b){this.active_=!1;this.xhr_&&(this.inAbort_=!0,this.xhr_.abort(),this.inAbort_=!1);this.lastError_=b;this.lastErrorCode_=a;this.dispatchErrors_();this.cleanUpXhr_()};goog.net.XhrIo.prototype.dispatchErrors_=function(){this.errorDispatched_||(this.errorDispatched_=!0,this.dispatchEvent(goog.net.EventType.COMPLETE),this.dispatchEvent(goog.net.EventType.ERROR))};
goog.net.XhrIo.prototype.abort=function(a){this.xhr_&&this.active_&&(this.logger_.fine(this.formatMsg_("Aborting")),this.active_=!1,this.inAbort_=!0,this.xhr_.abort(),this.inAbort_=!1,this.lastErrorCode_=a||goog.net.ErrorCode.ABORT,this.dispatchEvent(goog.net.EventType.COMPLETE),this.dispatchEvent(goog.net.EventType.ABORT),this.cleanUpXhr_())};
goog.net.XhrIo.prototype.disposeInternal=function(){this.xhr_&&(this.active_&&(this.active_=!1,this.inAbort_=!0,this.xhr_.abort(),this.inAbort_=!1),this.cleanUpXhr_(!0));goog.net.XhrIo.superClass_.disposeInternal.call(this)};goog.net.XhrIo.prototype.onReadyStateChange_=function(){if(!this.inOpen_&&!this.inSend_&&!this.inAbort_)this.onReadyStateChangeEntryPoint_();else this.onReadyStateChangeHelper_()};goog.net.XhrIo.prototype.onReadyStateChangeEntryPoint_=function(){this.onReadyStateChangeHelper_()};
goog.net.XhrIo.prototype.onReadyStateChangeHelper_=function(){if(this.active_&&"undefined"!=typeof goog)if(this.xhrOptions_[goog.net.XmlHttp.OptionType.LOCAL_REQUEST_ERROR]&&this.getReadyState()==goog.net.XmlHttp.ReadyState.COMPLETE&&2==this.getStatus())this.logger_.fine(this.formatMsg_("Local request error detected and ignored"));else if(this.inSend_&&this.getReadyState()==goog.net.XmlHttp.ReadyState.COMPLETE)goog.Timer.defaultTimerObject.setTimeout(goog.bind(this.onReadyStateChange_,this),0);else if(this.dispatchEvent(goog.net.EventType.READY_STATE_CHANGE),
this.isComplete()){this.logger_.fine(this.formatMsg_("Request complete"));this.active_=!1;try{this.isSuccess()?(this.dispatchEvent(goog.net.EventType.COMPLETE),this.dispatchEvent(goog.net.EventType.SUCCESS)):(this.lastErrorCode_=goog.net.ErrorCode.HTTP_ERROR,this.lastError_=this.getStatusText()+" ["+this.getStatus()+"]",this.dispatchErrors_())}finally{this.cleanUpXhr_()}}};
goog.net.XhrIo.prototype.cleanUpXhr_=function(a){if(this.xhr_){var b=this.xhr_,c=this.xhrOptions_[goog.net.XmlHttp.OptionType.USE_NULL_FUNCTION]?goog.nullFunction:null;this.xhrOptions_=this.xhr_=null;this.timeoutId_&&(goog.Timer.defaultTimerObject.clearTimeout(this.timeoutId_),this.timeoutId_=null);a||this.dispatchEvent(goog.net.EventType.READY);try{b.onreadystatechange=c}catch(d){this.logger_.severe("Problem encountered resetting onreadystatechange: "+d.message)}}};
goog.net.XhrIo.prototype.isActive=function(){return!!this.xhr_};goog.net.XhrIo.prototype.isComplete=function(){return this.getReadyState()==goog.net.XmlHttp.ReadyState.COMPLETE};goog.net.XhrIo.prototype.isSuccess=function(){var a=this.getStatus();return goog.net.HttpStatus.isSuccess(a)||0===a&&!this.isLastUriEffectiveSchemeHttp_()};goog.net.XhrIo.prototype.isLastUriEffectiveSchemeHttp_=function(){var a=goog.uri.utils.getEffectiveScheme(String(this.lastUri_));return goog.net.XhrIo.HTTP_SCHEME_PATTERN.test(a)};
goog.net.XhrIo.prototype.getReadyState=function(){return this.xhr_?this.xhr_.readyState:goog.net.XmlHttp.ReadyState.UNINITIALIZED};goog.net.XhrIo.prototype.getStatus=function(){try{return this.getReadyState()>goog.net.XmlHttp.ReadyState.LOADED?this.xhr_.status:-1}catch(a){return this.logger_.warning("Can not get status: "+a.message),-1}};
goog.net.XhrIo.prototype.getStatusText=function(){try{return this.getReadyState()>goog.net.XmlHttp.ReadyState.LOADED?this.xhr_.statusText:""}catch(a){return this.logger_.fine("Can not get status: "+a.message),""}};goog.net.XhrIo.prototype.getLastUri=function(){return String(this.lastUri_)};goog.net.XhrIo.prototype.getResponseText=function(){try{return this.xhr_?this.xhr_.responseText:""}catch(a){return this.logger_.fine("Can not get responseText: "+a.message),""}};
goog.net.XhrIo.prototype.getResponseXml=function(){try{return this.xhr_?this.xhr_.responseXML:null}catch(a){return this.logger_.fine("Can not get responseXML: "+a.message),null}};goog.net.XhrIo.prototype.getResponseJson=function(a){if(this.xhr_){var b=this.xhr_.responseText;a&&0==b.indexOf(a)&&(b=b.substring(a.length));return goog.json.parse(b)}};
goog.net.XhrIo.prototype.getResponse=function(){try{if(!this.xhr_)return null;if("response"in this.xhr_)return this.xhr_.response;switch(this.responseType_){case goog.net.XhrIo.ResponseType.DEFAULT:case goog.net.XhrIo.ResponseType.TEXT:return this.xhr_.responseText;case goog.net.XhrIo.ResponseType.ARRAY_BUFFER:if("mozResponseArrayBuffer"in this.xhr_)return this.xhr_.mozResponseArrayBuffer}this.logger_.severe("Response type "+this.responseType_+" is not supported on this browser");return null}catch(a){return this.logger_.fine("Can not get response: "+
a.message),null}};goog.net.XhrIo.prototype.getResponseHeader=function(a){return this.xhr_&&this.isComplete()?this.xhr_.getResponseHeader(a):void 0};goog.net.XhrIo.prototype.getAllResponseHeaders=function(){return this.xhr_&&this.isComplete()?this.xhr_.getAllResponseHeaders():""};goog.net.XhrIo.prototype.getLastErrorCode=function(){return this.lastErrorCode_};goog.net.XhrIo.prototype.getLastError=function(){return goog.isString(this.lastError_)?this.lastError_:String(this.lastError_)};
goog.net.XhrIo.prototype.formatMsg_=function(a){return a+" ["+this.lastMethod_+" "+this.lastUri_+" "+this.getStatus()+"]"};goog.debug.entryPointRegistry.register(function(a){goog.net.XhrIo.prototype.onReadyStateChangeEntryPoint_=a(goog.net.XhrIo.prototype.onReadyStateChangeEntryPoint_)});fb.simplelogin.transports.XHR_=function(){window[CALLBACK_NAMESPACE]=window[CALLBACK_NAMESPACE]||{}};
fb.simplelogin.transports.XHR_.prototype.open=function(a,b,c){var d=this,e=new goog.net.XhrIo;goog.events.listen(e,"complete",function(){if(e.isSuccess()){var a=e.getResponseJson(),b=a.error||null;delete a.error;c&&c(b,a)}else c&&c(d.formatError_({code:"SERVER_ERROR",message:"An unknown server error occurred."}))});var a=a+"?",f;for(f in b)a+="&"+encodeURIComponent(f)+"="+encodeURIComponent(b[f]);e.send(a,"GET",null,{"content-type":"application/json"})};
fb.simplelogin.transports.XHR_.prototype.isAvailable=function(){return window.XMLHttpRequest&&"function"===typeof window.XMLHttpRequest};fb.simplelogin.transports.XHR_.prototype.formatError_=function(a){var b=Error(a.message||"");b.code=a.code||"UNKNOWN_ERROR";return b};fb.simplelogin.transports.XHR=new fb.simplelogin.transports.XHR_;fb.simplelogin.util.validation={};var VALID_EMAIL_REGEX_=/^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,6})+$/;fb.simplelogin.util.validation.validateArgCount=function(a,b,c,d){var e;d<b?e="at least "+b:d>c&&(e=0===c?"none":"no more than "+c);if(e)throw Error(a+" failed: Was called with "+d+(1===d?" argument.":" arguments.")+" Expects "+e+".");};fb.simplelogin.util.validation.isValidEmail=function(a){return goog.isString(a)&&VALID_EMAIL_REGEX_.test(a)};
fb.simplelogin.util.validation.isValidPassword=function(a){return goog.isString(a)};fb.simplelogin.util.validation.isValidNamespace=function(a){return goog.isString(a)};
fb.simplelogin.util.validation.errorPrefix_=function(a,b,c){var d="";switch(b){case 1:d=c?"first":"First";break;case 2:d=c?"second":"Second";break;case 3:d=c?"third":"Third";break;case 4:d=c?"fourth":"Fourth";break;default:fb.core.util.validation.assert(!1,"errorPrefix_ called with argumentNumber > 4.  Need to update it?")}return a+" failed: "+(d+" argument ")};
fb.simplelogin.util.validation.validateNamespace=function(a,b,c,d){if((!d||goog.isDef(c))&&!goog.isString(c))throw Error(fb.simplelogin.util.validation.errorPrefix_(a,b,d)+"must be a valid firebase namespace.");};fb.simplelogin.util.validation.validateCallback=function(a,b,c,d){if((!d||goog.isDef(c))&&!goog.isFunction(c))throw Error(fb.simplelogin.util.validation.errorPrefix_(a,b,d)+"must be a valid function.");};
fb.simplelogin.util.validation.validateString=function(a,b,c,d){if((!d||goog.isDef(c))&&!goog.isString(c))throw Error(fb.simplelogin.util.validation.errorPrefix_(a,b,d)+"must be a valid string.");};fb.simplelogin.util.validation.validateContextObject=function(a,b,c,d){if(!d||goog.isDef(c))if(!goog.isObject(c)||null===c)throw Error(fb.simplelogin.util.validation.errorPrefix_(a,b,d)+"must be a valid context object.");};var CALLBACK_NAMESPACE="_FirebaseSimpleLoginJSONP";fb.simplelogin.transports.JSONP_=function(){window[CALLBACK_NAMESPACE]=window[CALLBACK_NAMESPACE]||{}};fb.simplelogin.transports.JSONP_.prototype.open=function(a,b,c){var a=a+(/\?/.test(a)?"":"?"),a=a+"&transport=jsonp",d;for(d in b)a+="&"+encodeURIComponent(d)+"="+encodeURIComponent(b[d]);b=this.generateRequestId_();a+="&callback="+encodeURIComponent(CALLBACK_NAMESPACE+"."+b);this.registerCallback_(b,c);this.writeScriptTag_(b,a,c)};
fb.simplelogin.transports.JSONP_.prototype.generateRequestId_=function(){return"_FirebaseJSONP"+(new Date).getTime()+Math.floor(100*Math.random())};fb.simplelogin.transports.JSONP_.prototype.registerCallback_=function(a,b){var c=this;window[CALLBACK_NAMESPACE][a]=function(d){var e=d.error||null;delete d.error;b(e,d);c.removeCallback_(a)}};
fb.simplelogin.transports.JSONP_.prototype.removeCallback_=function(a){setTimeout(function(){delete window[CALLBACK_NAMESPACE][a];var b=document.getElementById(a);b&&b.parentNode.removeChild(b)},0)};
fb.simplelogin.transports.JSONP_.prototype.writeScriptTag_=function(a,b,c){var d=this;setTimeout(function(){try{var e=document.createElement("script");e.type="text/javascript";e.id=a;e.async=!0;e.src=b;e.onerror=function(){var b=document.getElementById(a);null!==b&&b.parentNode.removeChild(b);c&&c(d.formatError_({code:"SERVER_ERROR",message:"An unknown server error occurred."}))};var f=document.getElementsByTagName("script")[0];f.parentNode.insertBefore(e,f)}catch(g){c&&c(d.formatError_({code:"SERVER_ERROR",
message:"An unknown server error occurred."}))}},0)};fb.simplelogin.transports.JSONP_.prototype.formatError_=function(a){var b=Error(a.message||"");b.code=a.code||"UNKNOWN_ERROR";return b};fb.simplelogin.transports.JSONP=new fb.simplelogin.transports.JSONP_;fb.simplelogin.providers={};fb.simplelogin.providers.Password_=function(){};fb.simplelogin.providers.Password_.prototype.getTransport_=function(){return fb.simplelogin.transports.XHR.isAvailable()?fb.simplelogin.transports.XHR:fb.simplelogin.transports.JSONP};
fb.simplelogin.providers.Password_.prototype.login=function(a,b){var c=fb.simplelogin.Vars.getApiHost()+"/auth/firebase";if(!fb.simplelogin.util.validation.isValidNamespace(a.firebase))return b&&b(fb.simplelogin.Errors.get("INVALID_FIREBASE"));this.getTransport_().open(c,a,b)};
fb.simplelogin.providers.Password_.prototype.createUser=function(a,b){var c=fb.simplelogin.Vars.getApiHost()+"/auth/firebase/create";if(!fb.simplelogin.util.validation.isValidNamespace(a.firebase))return b&&b(fb.simplelogin.Errors.get("INVALID_FIREBASE"));if(!fb.simplelogin.util.validation.isValidEmail(a.email))return b&&b(fb.simplelogin.Errors.get("INVALID_EMAIL"));if(!fb.simplelogin.util.validation.isValidPassword(a.password))return b&&b(fb.simplelogin.Errors.get("INVALID_PASSWORD"));this.getTransport_().open(c,
a,b)};
fb.simplelogin.providers.Password_.prototype.changePassword=function(a,b){var c=fb.simplelogin.Vars.getApiHost()+"/auth/firebase/update";if(!fb.simplelogin.util.validation.isValidNamespace(a.firebase))return b&&b(fb.simplelogin.Errors.get("INVALID_FIREBASE"));if(!fb.simplelogin.util.validation.isValidEmail(a.email))return b&&b(fb.simplelogin.Errors.get("INVALID_EMAIL"));if(!fb.simplelogin.util.validation.isValidPassword(a.newPassword))return b&&b(fb.simplelogin.Errors.get("INVALID_PASSWORD"));this.getTransport_().open(c,
a,b)};
fb.simplelogin.providers.Password_.prototype.removeUser=function(a,b){var c=fb.simplelogin.Vars.getApiHost()+"/auth/firebase/remove";if(!fb.simplelogin.util.validation.isValidNamespace(a.firebase))return b&&b(fb.simplelogin.Errors.get("INVALID_FIREBASE"));if(!fb.simplelogin.util.validation.isValidEmail(a.email))return b&&b(fb.simplelogin.Errors.get("INVALID_EMAIL"));if(!fb.simplelogin.util.validation.isValidPassword(a.password))return b&&b(fb.simplelogin.Errors.get("INVALID_PASSWORD"));this.getTransport_().open(c,a,
b)};fb.simplelogin.providers.Password_.prototype.sendPasswordResetEmail=function(a,b){var c=fb.simplelogin.Vars.getApiHost()+"/auth/firebase/reset_password";if(!fb.simplelogin.util.validation.isValidNamespace(a.firebase))return b&&b(fb.simplelogin.Errors.get("INVALID_FIREBASE"));if(!fb.simplelogin.util.validation.isValidEmail(a.email))return b&&b(fb.simplelogin.Errors.get("INVALID_EMAIL"));this.getTransport_().open(c,a,b)};fb.simplelogin.providers.Password=new fb.simplelogin.providers.Password_;fb.simplelogin.transports.WindowsMetroAuthBroker_=function(){};
fb.simplelogin.transports.WindowsMetroAuthBroker_.prototype.open=function(a,b,c){var d,e,f,g,h,i;try{d=window.Windows.Foundation.Uri,e=window.Windows.Security.Authentication.Web.WebAuthenticationOptions,f=window.Windows.Security.Authentication.Web.WebAuthenticationBroker,g=f.authenticateAsync}catch(j){return c({code:"WINDOWS_METRO",message:'"Windows.Security.Authentication.Web.WebAuthenticationBroker" required when using Firebase Simple Login in Windows Metro context'})}h=!1;i=function(){var a=Array.prototype.slice.apply(arguments);
h||(h=!0,c.apply(null,a))};a=new d(a+"&transport=internal-redirect-hash");d=new d(fb.simplelogin.Vars.getApiHost()+"/blank/page.html");g(e.none,a,d).done(function(a){var b;if(a&&a.responseData)try{var c=fb.simplelogin.util.misc.parseUrl(a.responseData),d=fb.simplelogin.util.misc.parseQuerystring(decodeURIComponent(c.hash)),a={},e;for(e in d)a[e]=fb.simplelogin.util.json.eval(d[e]);b=a}catch(f){}b&&b.token&&b.user?i(null,b):b&&b.error?i(b.error):i({code:"UNKNOWN_ERROR",message:"An unknown error occurred."})},
function(){i({code:"UNKNOWN_ERROR",message:"An unknown error occurred."})})};fb.simplelogin.transports.WindowsMetroAuthBroker=new fb.simplelogin.transports.WindowsMetroAuthBroker_;fb.simplelogin.providers.Persona_=function(){};fb.simplelogin.providers.Persona_.prototype.login=function(a,b){navigator.id.watch({onlogin:function(a){b(a)},onlogout:function(){}});a=a||{};a.oncancel=function(){b(null)};navigator.id.request(a)};fb.simplelogin.providers.Persona=new fb.simplelogin.providers.Persona_;goog.net.Cookies=function(a){this.document_=a};goog.net.Cookies.MAX_COOKIE_LENGTH=3950;goog.net.Cookies.SPLIT_RE_=/\s*;\s*/;goog.net.Cookies.prototype.isEnabled=function(){return navigator.cookieEnabled};goog.net.Cookies.prototype.isValidName=function(a){return!/[;=\s]/.test(a)};goog.net.Cookies.prototype.isValidValue=function(a){return!/[;\r\n]/.test(a)};
goog.net.Cookies.prototype.set=function(a,b,c,d,e,f){if(!this.isValidName(a))throw Error('Invalid cookie name "'+a+'"');if(!this.isValidValue(b))throw Error('Invalid cookie value "'+b+'"');goog.isDef(c)||(c=-1);e=e?";domain="+e:"";d=d?";path="+d:"";f=f?";secure":"";c=0>c?"":0==c?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(goog.now()+1E3*c)).toUTCString();this.setCookie_(a+"="+b+e+d+c+f)};
goog.net.Cookies.prototype.get=function(a,b){for(var c=a+"=",d=this.getParts_(),e=0,f;f=d[e];e++){if(0==f.indexOf(c))return f.substr(c.length);if(f==a)return""}return b};goog.net.Cookies.prototype.remove=function(a,b,c){var d=this.containsKey(a);this.set(a,"",0,b,c);return d};goog.net.Cookies.prototype.getKeys=function(){return this.getKeyValues_().keys};goog.net.Cookies.prototype.getValues=function(){return this.getKeyValues_().values};goog.net.Cookies.prototype.isEmpty=function(){return!this.getCookie_()};
goog.net.Cookies.prototype.getCount=function(){return!this.getCookie_()?0:this.getParts_().length};goog.net.Cookies.prototype.containsKey=function(a){return goog.isDef(this.get(a))};goog.net.Cookies.prototype.containsValue=function(a){for(var b=this.getKeyValues_().values,c=0;c<b.length;c++)if(b[c]==a)return!0;return!1};goog.net.Cookies.prototype.clear=function(){for(var a=this.getKeyValues_().keys,b=a.length-1;0<=b;b--)this.remove(a[b])};
goog.net.Cookies.prototype.setCookie_=function(a){this.document_.cookie=a};goog.net.Cookies.prototype.getCookie_=function(){return this.document_.cookie};goog.net.Cookies.prototype.getParts_=function(){return(this.getCookie_()||"").split(goog.net.Cookies.SPLIT_RE_)};goog.net.Cookies.prototype.getKeyValues_=function(){for(var a=this.getParts_(),b=[],c=[],d,e,f=0;e=a[f];f++)d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));return{keys:b,values:c}};
goog.net.cookies=new goog.net.Cookies(document);goog.net.cookies.MAX_COOKIE_LENGTH=goog.net.Cookies.MAX_COOKIE_LENGTH;var cookieStoragePath="/",encryptionStorageKey="firebaseSessionKey",sessionPersistentStorageKey="firebaseSession",hasLocalStorage=fb.simplelogin.util.env.hasLocalStorage();fb.simplelogin.SessionStore_=function(){};
fb.simplelogin.SessionStore_.prototype.set=function(a,b){if(hasLocalStorage)try{var c=a.sessionKey,d=sjcl.encrypt(c,fb.simplelogin.util.json.stringify(a));localStorage.setItem(sessionPersistentStorageKey,fb.simplelogin.util.json.stringify(d));goog.net.cookies.set(encryptionStorageKey,c,b?86400*b:-1,cookieStoragePath,null,!1)}catch(e){}};
fb.simplelogin.SessionStore_.prototype.get=function(){if(hasLocalStorage){try{var a=goog.net.cookies.get(encryptionStorageKey),b=localStorage.getItem(sessionPersistentStorageKey);if(a&&b)return fb.simplelogin.util.json.eval(sjcl.decrypt(a,fb.simplelogin.util.json.eval(b)))}catch(c){}return null}};fb.simplelogin.SessionStore_.prototype.clear=function(){hasLocalStorage&&(localStorage.removeItem(sessionPersistentStorageKey),goog.net.cookies.remove(encryptionStorageKey,cookieStoragePath,null))};
fb.simplelogin.SessionStore=new fb.simplelogin.SessionStore_;fb.simplelogin.client=function(a,b,c,d){var e=a.toString(),f=null;window._FirebaseSimpleLogin=window._FirebaseSimpleLogin||{};window._FirebaseSimpleLogin.callbacks=window._FirebaseSimpleLogin.callbacks||[];window._FirebaseSimpleLogin.callbacks.push({cb:b,ctx:c});goog.isString(e)&&(b=e.indexOf("//"),0<=b&&(e=e.substring(b+2)),b=e.indexOf("."),0<=b&&(f=e.substring(0,b)));if(!goog.isString(f))throw Error("new FirebaseSimpleLogin(): First argument must be a valid Firebase reference (i.e. new Firebase(<firebaseURL>)).");
"file:"===window.location.protocol&&(!fb.simplelogin.util.env.isPhantomJS()&&!fb.simplelogin.util.env.isMobileCordovaInAppBrowser()&&console&&console.log)&&console.log("FirebaseSimpleLogin(): Due to browser security restrictions, loading applications via `file://*` URLs will prevent popup-based authentication providers from working properly. When testing locally, you'll need to run a barebones webserver on your machine rather than loading your test files via `file://*`. The easiest way to run a barebones server on your local machine is to `cd` to the root directory of your code and run `python -m SimpleHTTPServer`, which will allow you to access your content via `http://127.0.0.1:8000/*`.");
d&&fb.simplelogin.Vars.setApiHost(d);this.mRef=a;this.mNamespace=f;this.sessionLengthDays=null;this.mLoginStateChange=function(){for(var a=window._FirebaseSimpleLogin.callbacks||[],b=Array.prototype.slice.apply(arguments),c=0;c<a.length;c++){var d=a[c],e=!!b[0]||typeof d.user==="undefined";if(!e){var f,l;if(d.user&&d.user.firebaseAuthToken)f=d.user.firebaseAuthToken;if(b[1]&&b[1].firebaseAuthToken)l=b[1].firebaseAuthToken;e=(f||l)&&f!==l}window._FirebaseSimpleLogin.callbacks[c].user=b[1]||null;e&&
function(a,c){typeof a==="function"&&setTimeout(function(){a.apply(c,b)},0)}(d.cb,d.ctx)}};this.resumeSession()};fb.simplelogin.client.prototype.setApiHost=function(a){fb.simplelogin.Vars.setApiHost(a)};goog.exportSymbol("fb.simplelogin.client.prototype.setApiHost",fb.simplelogin.client.prototype.setApiHost);
fb.simplelogin.client.prototype.resumeSession=function(){var a=this,b;try{b=sessionStorage.getItem("firebaserequestId"),sessionStorage.removeItem("firebaserequestId")}catch(c){}if(b){var d=fb.simplelogin.transports.JSONP;fb.simplelogin.transports.XHR.isAvailable()&&(d=fb.simplelogin.transports.XHR);d.open(fb.simplelogin.Vars.getApiHost()+"/auth/session",{requestId:b,firebase:a.mNamespace},function(b,c){if(c&&c.token&&c.user)a.attemptAuth(c.token,c.user,true);else if(b){fb.simplelogin.SessionStore.clear();
a.mLoginStateChange(b)}else{fb.simplelogin.SessionStore.clear();a.mLoginStateChange(null,null)}})}else(b=fb.simplelogin.SessionStore.get())&&b.token&&b.user?a.attemptAuth(b.token,b.user,!1):a.mLoginStateChange(null,null)};
fb.simplelogin.client.prototype.attemptAuth=function(a,b,c){var d=this;this.mRef.auth(a,function(e,f){e?(fb.simplelogin.SessionStore.clear(),d.mLoginStateChange(null,null)):(c&&fb.simplelogin.SessionStore.set({token:a,user:b,sessionKey:b.sessionKey},d.sessionLengthDays),"function"==typeof f&&f(),delete b.sessionKey,b.firebaseAuthToken=a,d.mLoginStateChange(null,b))},function(){fb.simplelogin.SessionStore.clear();d.mLoginStateChange(null,null)})};
fb.simplelogin.client.prototype.login=function(){fb.simplelogin.util.validation.validateString(c,1,arguments[0],!1);var a=arguments[1]||{},b=arguments[0].toLowerCase(),c="FirebaseSimpleLogin.login("+b+")";if("password"===b){if(!fb.simplelogin.util.validation.isValidEmail(a.email))return this.mLoginStateChange(fb.simplelogin.Errors.get("INVALID_EMAIL"));if(!fb.simplelogin.util.validation.isValidPassword(a.password))return this.mLoginStateChange(fb.simplelogin.Errors.get("INVALID_PASSWORD"))}else("facebook"===
b||"github"===b||"google"===b||"persona"===b||"twitter"===b||"anonymous"===b)&&fb.simplelogin.util.validation.validateArgCount(c,1,2,arguments.length);this.sessionLengthDays=a.rememberMe?30:null;switch(b){case "anonymous":return this.loginAnonymously(a);case "facebook-token":return this.loginWithFacebookToken(a);case "github":return this.loginWithGithub(a);case "google-token":return this.loginWithGoogleToken(a);case "password":return this.loginWithPassword(a);case "persona":return this.loginWithPersona(a);
case "twitter-token":return this.loginWithTwitterToken(a);case "facebook":return a.access_token?this.loginWithFacebookToken(a):this.loginWithFacebook(a);case "google":return a.access_token?this.loginWithGoogleToken(a):this.loginWithGoogle(a);case "twitter":return a.oauth_token&&a.oauth_token_secret?this.loginWithTwitterToken(a):this.loginWithTwitter(a);default:throw Error("FirebaseSimpleLogin.login() failed: unrecognized authentication provider");}};
goog.exportSymbol("fb.simplelogin.client.prototype.login",fb.simplelogin.client.prototype.login);fb.simplelogin.client.prototype.loginAnonymously=function(a){var b=this;a.firebase=this.mNamespace;fb.simplelogin.transports.JSONP.open(fb.simplelogin.Vars.getApiHost()+"/auth/anonymous",a,function(a,d){a||!d.token?b.mLoginStateChange(fb.simplelogin.Errors.format(a),null):b.attemptAuth(d.token,d.user,!0)})};
fb.simplelogin.client.prototype.loginWithPassword=function(a){var b=this;a.firebase=this.mNamespace;fb.simplelogin.providers.Password.login(a,function(a,d){a||!d.token?b.mLoginStateChange(fb.simplelogin.Errors.format(a)):b.attemptAuth(d.token,d.user,!0)})};fb.simplelogin.client.prototype.loginWithGithub=function(a){a.height=850;a.width=950;this.loginViaOAuth("github",a)};fb.simplelogin.client.prototype.loginWithGoogle=function(a){a.height=650;a.width=575;this.loginViaOAuth("google",a)};
fb.simplelogin.client.prototype.loginWithFacebook=function(a){a.height=400;a.width=535;this.loginViaOAuth("facebook",a)};fb.simplelogin.client.prototype.loginWithTwitter=function(a){this.loginViaOAuth("twitter",a)};fb.simplelogin.client.prototype.loginWithFacebookToken=function(a){this.loginViaToken("facebook",a)};fb.simplelogin.client.prototype.loginWithGoogleToken=function(a){this.loginViaToken("google",a)};
fb.simplelogin.client.prototype.loginWithTwitterToken=function(a){this.loginViaToken("twitter",a)};
fb.simplelogin.client.prototype.loginWithPersona=function(a){var b=this;if(!navigator.id)throw Error("FirebaseSimpleLogin.login(persona): Unable to find Persona include.js");fb.simplelogin.providers.Persona.login(a,function(a){null===a?callback(fb.simplelogin.Errors.get("UNKNOWN_ERROR")):fb.simplelogin.transports.JSONP.open(fb.simplelogin.Vars.getApiHost()+"/auth/persona/token",{firebase:b.mNamespace,assertion:a},function(a,c){a||!c.token||!c.user?b.mLoginStateChange(fb.simplelogin.Errors.format(a),
null):b.attemptAuth(c.token,c.user,!0)})})};fb.simplelogin.client.prototype.logout=function(){fb.simplelogin.SessionStore.clear();this.mRef.unauth();this.mLoginStateChange(null,null)};goog.exportSymbol("fb.simplelogin.client.prototype.logout",fb.simplelogin.client.prototype.logout);
fb.simplelogin.client.prototype.loginViaToken=function(a,b){var b=b||{},c=this,d=fb.simplelogin.Vars.getApiHost()+"/auth/"+a+"/token?firebase="+c.mNamespace;fb.simplelogin.transports.JSONP.open(d,b,function(a,b){a||!b.token||!b.user?c.mLoginStateChange(fb.simplelogin.Errors.format(a),null):c.attemptAuth(b.token,b.user,!0)})};
fb.simplelogin.client.prototype.loginViaOAuth=function(a,b){var b=b||{},c=this,d=fb.simplelogin.Vars.getApiHost()+"/auth/"+a+"?firebase="+this.mNamespace;b.scope&&(d+="&scope="+b.scope);b.debug&&(d+="&debug="+b.debug);var e={menubar:0,location:0,resizable:0,scrollbars:1,status:0,dialog:1,width:700,height:375};b.height&&(e.height=b.height,delete b.height);b.width&&(e.width=b.width,delete b.width);var f=fb.simplelogin.util.env.isMobileCordovaInAppBrowser()?"mobile-phonegap":fb.simplelogin.util.env.isMobileTriggerIoTab()?
"mobile-triggerio":fb.simplelogin.util.env.isWindowsMetro()?"windows-metro":"desktop",g;if("desktop"===f){g="WinChan";var f=[],h;for(h in e)f.push(h+"="+e[h]);b.url+="&transport=winchan";b.relay_url=fb.simplelogin.Vars.getApiHost()+"/auth/channel";b.window_features=f.join(",")}else"mobile-phonegap"===f?g="CordovaInAppBrowser":"mobile-triggerio"===f?g="TriggerIoTab":"windows-metro"===f&&(g="WindowsMetroAuthBroker");if(b.preferRedirect||fb.simplelogin.util.env.isChromeiOS()||fb.simplelogin.util.env.isWindowsPhone()||
fb.simplelogin.util.env.isStandaloneiOS()||fb.simplelogin.util.env.isTwitteriOS()||fb.simplelogin.util.env.isFacebookiOS()){e=goog.string.getRandomString()+goog.string.getRandomString();try{sessionStorage.setItem("firebaserequestId",e)}catch(i){}d+="&requestId="+e+"&fb_redirect_uri="+encodeURIComponent(window.location.href);return window.location=d}fb.simplelogin.transports[g].open(d,b,function(a,b){if(b&&b.token&&b.user)c.attemptAuth(b.token,b.user,true);else{var d=a||{code:"UNKNOWN_ERROR",message:"An unknown error occurred."};
if(a==="unknown closed window")d={code:"USER_DENIED",message:"User cancelled the authentication request."};else if(b&&b.error)d=b.error;c.mLoginStateChange(fb.simplelogin.Errors.format(d),null)}})};fb.simplelogin.client.prototype.manageFirebaseUsers=function(a,b,c){b.firebase=this.mNamespace;fb.simplelogin.providers.Password[a](b,function(a,b){return a?c&&c(fb.simplelogin.Errors.format(a),null):c&&c(null,b)})};
fb.simplelogin.client.prototype.createUser=function(a,b,c){this.manageFirebaseUsers("createUser",{email:a,password:b},c)};goog.exportSymbol("fb.simplelogin.client.prototype.createUser",fb.simplelogin.client.prototype.createUser);fb.simplelogin.client.prototype.changePassword=function(a,b,c,d){this.manageFirebaseUsers("changePassword",{email:a,oldPassword:b,newPassword:c},function(a){return d&&d(a)})};goog.exportSymbol("fb.simplelogin.client.prototype.changePassword",fb.simplelogin.client.prototype.changePassword);
fb.simplelogin.client.prototype.removeUser=function(a,b,c){this.manageFirebaseUsers("removeUser",{email:a,password:b},function(a){return c&&c(a)})};goog.exportSymbol("fb.simplelogin.client.prototype.removeUser",fb.simplelogin.client.prototype.removeUser);fb.simplelogin.client.prototype.sendPasswordResetEmail=function(a,b){this.manageFirebaseUsers("sendPasswordResetEmail",{email:a},function(a){return b&&b(a)})};goog.exportSymbol("fb.simplelogin.client.prototype.sendPasswordResetEmail",fb.simplelogin.client.prototype.sendPasswordResetEmail);
fb.simplelogin.client.onOpen=function(a){fb.simplelogin.transports.WinChan.onOpen(a)};goog.exportSymbol("fb.simplelogin.client.onOpen",fb.simplelogin.client.onOpen);var FirebaseSimpleLogin=function(a,b,c,d){fb.simplelogin.util.validation.validateArgCount("new FirebaseSimpleLogin",1,4,arguments.length);fb.simplelogin.util.validation.validateCallback("new FirebaseSimpleLogin",2,b,!1);if(goog.isString(a))throw Error("new FirebaseSimpleLogin(): Oops, it looks like you passed a string instead of a Firebase reference (i.e. new Firebase(<firebaseURL>)).");var e=new fb.simplelogin.client(a,b,c,d);return{setApiHost:function(a){fb.simplelogin.util.validation.validateArgCount("FirebaseSimpleLogin.setApiHost",
1,1,arguments.length);e.setApiHost(a)},login:function(){e.login.apply(e,arguments)},logout:function(){fb.simplelogin.util.validation.validateArgCount("FirebaseSimpleLogin.logout",0,0,arguments.length);e.logout()},createUser:function(a,b,c){fb.simplelogin.util.validation.validateArgCount("FirebaseSimpleLogin.createUser",3,3,arguments.length);fb.simplelogin.util.validation.validateCallback("FirebaseSimpleLogin.createUser",3,c,!1);e.createUser(a,b,c)},changePassword:function(a,b,c,d){fb.simplelogin.util.validation.validateArgCount("FirebaseSimpleLogin.changePassword",
4,4,arguments.length);fb.simplelogin.util.validation.validateCallback("FirebaseSimpleLogin.changePassword",4,d,!1);e.changePassword(a,b,c,d)},removeUser:function(a,b,c){fb.simplelogin.util.validation.validateArgCount("FirebaseSimpleLogin.removeUser",3,3,arguments.length);fb.simplelogin.util.validation.validateCallback("FirebaseSimpleLogin.removeUser",3,c,!1);e.removeUser(a,b,c)},sendPasswordResetEmail:function(a,b){fb.simplelogin.util.validation.validateArgCount("FirebaseSimpleLogin.sendPasswordResetEmail",
2,2,arguments.length);fb.simplelogin.util.validation.validateCallback("FirebaseSimpleLogin.sendPasswordResetEmail",2,b,!1);e.sendPasswordResetEmail(a,b)}}};goog.exportSymbol("FirebaseSimpleLogin",FirebaseSimpleLogin);FirebaseSimpleLogin.onOpen=function(a){fb.simplelogin.client.onOpen(a)};goog.exportProperty(FirebaseSimpleLogin,"onOpen",FirebaseSimpleLogin.onOpen);})();


})();

(function() {


var Utils = window.Utils = {};

Utils.cookie = {

    get : function (name) {
        "use strict";
        var cookies = document.cookie.split(";"),
            index = cookies.length,
            cookieName,
            cookieBody;

        while (index--) {
            cookieName = cookies[index].substr(0, cookies[index].indexOf("="));
            cookieBody = cookies[index].substr(cookies[index].indexOf("=") + 1);
            cookieName = cookieName.replace(/^\s+|\s+$/g, "");
            if (cookieName === name) {
                return decodeURI(cookieBody);
            }
        }

        return false;
    },

    set : function (name, value, expires) {
        "use strict";
        var date = new Date();
        date.setDate(date.getDate() + expires);
        document.cookie = name + "=" + encodeURI(value) + ((expires === null) ? "" : "; expires=" + date.toUTCString());
    },

    del : function (name) {
        "use strict";
        document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    }
};

Utils.array = {

    inArray : function (a, v) {
        "use strict";
        return !!~a.indexOf(v);
    }

};

Utils.string = {

    capFirstLetter : function (s) {
        "use strict";
        return s.charAt(0).toUpperCase() + s.slice(1);
    },

    pluralize : function (s) {
        "use strict";
        var plural = s;
        if (plural.slice(-1) === 'y') {
            plural = plural.slice(0, -1) + 'ies';
        } else if (plural.slice(-1) === 's' && plural.slice(-2) !== 'es') {
            plural = plural.slice(0, -1) + 'es';
        } else {
            plural = plural + 's';
        }

        return plural;
    },

    underscoreToWords : function (s) {
        "use strict";
        return s.replace(/_/g, ' ');
    },

    capitalizeWords : function (sentence) {
        "use strict";
        return sentence.split(' ')
            .map(function (word) {
                return Utils.string.capFirstLetter(word);
            })
            .join(' ');
    }
};

Utils.animate = {

    Interval : function (callback, time) {
        "use strict";
        var delay = time ? parseInt(time, 10) : 0,

        //stores the time of last callback execution for
        // play/pause behavior and firefox shunt
            lastExecution = (new Date()).getTime(),

            timeout = false,

        //execute the callback and setup the next one
            once = function () {
                callback();
                timeout = setTimeout(
                    (function () { once(); }),
                    delay
                );
            },

        //shunt for firefox, which executes setTimeout
        // up to 50% early
            checkExecution = function () {
                var time = (new Date()).getTime() - lastExecution;
                if (time >= delay) {
                    return true;
                }
                timeout = setTimeout(
                    (function () {once(); }),
                    time
                );
                return false;
            },

        //stores the amount of time elapsed prior to a pause
            timeElapsed = 0;

        //initiate the callback loop
        timeout = setTimeout(
            (function () {once(); }),
            delay
        );

        Object.defineProperty(
            this,
            'delay',
            {
                get : function () { return delay; },
                set : function (v) { delay = parseInt(v, 10); }
            }
        );

        this.reset = function () {
            if (timeout !== false) {
                clearTimeout(timeout);
                timeout = false;
                timeElapsed = 0;
                lastExecution = (new Date()).getTime();
                timeout = setTimeout( (function () { once(); }), delay);
            }
        };

        this.pause = function () {
            if (timeout !== false) {
                clearTimeout(timeout);
                timeout = false;
                timeElapsed = (new Date()).getTime() - lastExecution;
            }
        };

        this.play = function () {
            lastExecution = (new Date()).getTime() - timeElapsed;
            timeout = setTimeout( (function () { once(); }), Math.max(0, delay - timeElapsed));
            timeElapsed = 0;
        };

    }

};


})();

(function() {

(function () {
    "use strict";
    /*
     -----------[ App Setup ]-------------
     */
    /*global Ember, window*/

    //initialize the App
    var OYM = window.OYM = Ember.Application.create({
        LOG_TRANSITIONS: true,
        LOG_BINDINGS: true,
        LOG_VIEW_LOOKUPS: true,
        LOG_STACKTRACE_ON_DEPRECATION: true,
        LOG_VERSION: true,
        debugMode: true,
        ready: function () {
            Ember.$("#loading").remove();
        }
    });

    //defer readiness until everything has loaded
    OYM.deferReadiness();


    OYM.Route = Ember.Route.extend({

        enter: function () {
            this._super();
            window.scrollTo(0, 0);
        }

    });

    OYM.AuthenticatedRoute = OYM.Route.extend({
        beforeModel : function (transition) {

            var sessionController = this.controllerFor('session');

            //ensure unnecessary ajax requests are aborted
            //this.get('store').adapterFor(OYM.Address).abortAll();

            if (!sessionController.get('isLoggedIn')) {
                sessionController.set('attemptedTransition', transition);
                this.transitionTo('session');
            }

        }
    });


    OYM.View = Ember.View.extend({
        tagName : 'section',
        classNames : ['contentSection'],
        classNameBindings : ['viewName'],
        viewName : ''
    });


}.call(window));

})();

(function() {

/*global WDD*/
OYM.Router.map(function () {
    "use strict";

    this.route('session', {path : '/login'});
    this.route('welcome', {path : '/'});
    this.resource('document', {path : '/documents'}, function () {
        this.route('single', { path : '/:document_id' });
    });

});

})();

(function() {

/*
 -----------[ REST / Ember-data Configuration ]-----------
 */

/*global DS, OYM, require, Ember */

//OYM.ApplicationSerializer = DS.RESTSerializer.extend({});

OYM.ApplicationAdapter = DS.FirebaseAdapter.extend({
    firebase: new Firebase("https://onyourmark.firebaseio.com/")
});

OYM.ApplicationAdapter.reopen({});

})();

(function() {

//global DS, Ember
var attr = window.attr = DS.attr,
    belongsTo = window.belongsTo = DS.belongsTo,
    hasMany = window.hasMany = DS.hasMany,
    Model = window.Model = DS.Model.extend({
        persistence : function () {
            "use strict";
            var isDirty = this.get('isDirty'),
                isNew = this.get('isNew'),
                isSaving = this.get('isSaving');
            return isSaving ? 'saving' :
                (isNew ? 'new' :
                    (isDirty ? 'dirty' :
                        'clean')
                    );
        }.property('isDirty', 'isNew', 'isSaving'),
        persistenceClass : function () {
            "use strict";
            return 'recordIs' + Utils.string.capFirstLetter(this.get('persistence'));
        }.property('persistence')
    });


})();

(function() {

OYM.Document = Model.extend({
    title : attr(''),
    content : attr(''),
    preview : function () {
        var content = this.get('content'),
            length = content.length;

        return (length > 140) ? content.substr(0, 137) + '...' : content;

    }.property('content').readOnly(),

    owner : belongsTo('user'),
    authors : hasMany('user')
});

})();

(function() {

OYM.User = Model.extend({
    image : attr(''),
    firstName : attr(''),
    lastName : attr(''),
    fullName : function () {
        var first = this.get('firstName'),
            last = this.get('lastName'),
            maxLength = 15;

        if (first.length > maxLength - 3) {
            return first.substr(0, maxLength);
        }
        if (first.length + last.length + 1 > maxLength) {
            return first + ' ' + last.substr(0, 1) + '.';
        }
        return first + ' ' + last;

    }.property('firstName', 'lastName').readOnly(),

    documents : hasMany('document', {inverse : 'owner'})
});

})();

(function() {

/*global OYM, Ember, Utils*/
(function () {
    "use strict";

    var App = this;

    App.ApplicationController = Ember.ArrayController.extend({

        needs : ['session'],

        renderTemplate : function () {
            this.render('growl/notification', {outlet : 'growl'});
        }

    });
    App.ApplicationRoute = App.Route.extend({

        actions : {
            silenceClick : function () {
                /* do nothing*/
            },

            logout : function () {
                this.controllerFor('session').logout();
            }
        }

    });
    App.ApplicationView = Ember.View.extend({
        classNames : ['container']
    });

}.call(OYM));

})();

(function() {

(function () {
    "use strict";

    var App = this;

    App.DocumentSingleController = Ember.ArrayController.extend({

        needs : ['session'],

        renderTemplate : function () {
            this.render('growl/notification', {outlet : 'growl'});
        }

    });
    App.DocumentSingleRoute = App.AuthenticatedRoute.extend({

       model : function () {
           return this.get('store').createRecord('document');
       }

    });
    App.DocumentSingleView = Ember.View.extend({
        classNames : ['container']
    });

}.call(OYM));

})();

(function() {

(function () {
    "use strict";

    var App = this;

    App.DocumentRoute = App.AuthenticatedRoute.extend({

        model : function () {
            return this.get('store').find('document');
        }

    });
    App.DocumentView = Ember.View.extend({
        templateName : 'document/list',
        classNames : ['container']
    });

}.call(OYM));

})();

(function() {

/*global Ember, OYM, Utils*/
(function () {
    "use strict";

    var App = this;

    App.SessionController = Ember.Controller.extend({

        isLoggedIn : false,

        user : null,

        hostname : window.location.port === '9000' ? 'http://0.0.0.0:8000' : '',

        attemptedTransition : null,

        firebase : null,
        fireAuth : null,

        logout : function () {


            var controller = this;

            Ember.$.ajax({
                type : 'GET',
                url : controller.get('hostname') + 'employees/logout/',
                success : function (m) {

                    Utils.cookie.del('EmberUser');

                    controller.set('isLoggedIn', false);
                    controller.set('username', '');

                    App.reset();
                    window.location.reload(true);

                },
                error : function (m) {
                    Ember.Logger.debug('unable to log out', m);
                }
            });
        },

        init : function () {
            this._super();

            var fireb = new Firebase('https://onyourmark.firebaseio.com'),
                controller = this;

            this.set('firebase', fireb);
            this.set('fireAuth', new FirebaseSimpleLogin(fireb, function(error, user) {
                if (error) {
                    // an error occurred while attempting login
                    console.log(error);
                } else if (user) {
                    // user authenticated with Firebase
                    console.log('User ID: ' + user.id + ', Provider: ' + user.provider);
                    controller.set('user', user);
                    controller.set('isLoggedIn', true);
                    controller.transitionToRoute('document');
                } else {
                    // user is logged out
                    controller.set('isLoggedIn', false);
                }
            }));
        }
    });

    App.SessionRoute = Ember.Route.extend({

        beforeModel : function (transition) {

            var controller = this.controllerFor('session');
            if (controller.get('isLoggedIn') && controller.get('attemptedTransition')) {
                controller.get('attemptedTransition').retry();
            } else if (controller.get('isLoggedIn')) {
                this.transitionTo('/');
            }
        },

        model : function () {
            return {
                email : null,
                password : null
            };
        },

        actions : {
            login : function () {

                var controller = this.controllerFor('session'),
                    auth = controller.get('fireAuth'),
                    model = this.modelFor('session');

                auth.login('password', {
                    email : model.email,
                    password : model.password,
                    rememberMe : true
                });
            },
            register : function () {
                var controller = this.controllerFor('session'),
                    auth = controller.get('fireAuth'),
                    model = this.modelFor('session');

                console.log('registering');
                auth.createUser(
                    model.email,
                    model.password,
                    function(error, user) {

                        if (!error) {
                            console.log('User Id: ' + user.id + ', Email: ' + user.email);
                            controller.transitionToRoute('document');
                        }
                        else
                            console.log('error registering:', error);
                    }
                );
            }
        }

    });

    App.SessionView = Ember.View.extend({
        templateName : 'session'
    });

}).call(OYM);

})();

(function() {

/*global OYM, Ember, Utils*/
(function () {
    "use strict";

    var App = this;

    App.WelcomeView = App.View.extend({
        classNames : ['container']
    });

}.call(OYM));

})();

(function() {

/*jshint eqeqeq:false */

/**
 * Provides A base view for building select like objects.
 */

/*global App, Utils*/
(function () {
    "use strict";

    var App = this,
        set = App.set,
        get = App.get,
        indexOf = App.EnumerableUtils.indexOf,
        forEach = App.EnumerableUtils.forEach,
        isArray = App.isArray,
        precompileTemplate = App.Handlebars.compile;

    App.SelectableOption = App.View.extend(App.ViewTargetActionSupport, {

        classNames : ['selectableItem'],
        classNameBindings : ['selected', 'status'],

        selected : function () {
            //App.Logger.debug('SelectableOption view: selection changed.');
            var value = get(this, 'content'),
                selection = get(this, 'parentView.controlledSelection');

            //App.Logger.debug('selection', selection);
            //App.Logger.debug('value', value);
            if (get(this, 'parentView.multiple')) {
                //App.Logger.debug('selection is multiple checking index:', indexOf(selection, value));
                return selection && indexOf(selection, value) > -1;
            }

            return value === selection.objectAt(0);

        }.property('value', 'parentView.controlledSelection.@each'),

        template : precompileTemplate('{{view.label}}'),

        label : function () {

            var labelPath = get(this, 'parentView.optionLabelPath');

            if (!labelPath) { return ''; }

            return get(this, labelPath);

        }.property('parentView.optionLabelPath', 'content'),

        status : function () {

            var statusPath = get(this, 'parentView.optionStatusClassPath');

            if (!statusPath) { return ''; }

            return get(this, statusPath);

        }.property('parentView.optionStatusClassPath', 'content'),

        mouseDown : function () {

            if (!get(this, 'parentView.disabled')) {

                this.triggerAction({
                    action : 'select',
                    actionContext : get(this, 'content'),
                    target : this.get('parentView'),
                    bubbles : false
                });

            }
        }

    });

    App.SelectableGroup = App.CollectionView.extend(App.ViewTargetActionSupport, {

        classNames : ['selectableGroup'],
        classNameBindings : ['label'],

        controlledSelectionBinding : 'parentView.controlledSelection',
        disabledBinding : 'parentView.disabled',
        multipleBinding : 'parentView.multiple',

        optionLabelPathBinding : 'parentView.optionLabelPath',
        optionStatusClassPathBinding : 'parentView.optionStatusClassPath',

        itemViewClassBinding: 'parentView.optionView',

        targetBinding : 'parentView'

    });

    /**
     @class Selectable
     @namespace App
     @extends App.View
     */
    App.Selectable = App.View.extend({

        //structure
        classNames : ['selectable'],

        classNameBindings : ['disabled'],

        defaultTemplate : precompileTemplate('{{#if view.optionGroupPath}}{{#each view.groupedContent}}<div class="selectableGroupLabel">{{label}}</div>{{view view.groupView content=content label=label}}{{/each}}{{else}}{{#each view.filteredContent}}{{view view.optionView content=this}}{{/each}}{{/if}}'),

        /**

         Indicates whether multiple options can be selected.

         @property multiple
         @type Boolean
         @default false
         */
        multiple : true,

        /**
         The `disabled` attribute of the input element. Indicates whether
         the element is disabled from interactions.

         @property disabled
         @type Boolean
         @default false
         */
        disabled : false,

        /**
         The list of options.

         If `optionLabelPath` and `optionValuePath` are not overridden, this should
         be a list of strings, which will serve simultaneously as labels and values.

         Otherwise, this should be a list of objects.

         @property content
         @type Array
         @default null
         */
        content : null,

        /**
         When `multiple` is `false`, the element of `content` that is currently
         selected, if any.

         When `multiple` is `true`, an array of such elements.

         Set `selection` not `value to set the initial value.

         @property selection
         @type Object or Array
         @default null
         */
        selection : null,

        controlledSelection : null,

        values : function () {
            var objects = get(this, 'controlledSelection'),
                valuePath = get(this, 'optionValuePath').replace(/^content\.?/, ''),
                multiple = get(this, 'multiple'),
                selection = get(this, 'selection'),
                values = [];

            if (!objects || App.typeOf(objects) !== 'array') {
                return null;
            }

            objects.forEach(function (object) {
                values.push(get(object, valuePath));
            });

            //update selection
            if (multiple) {
                //TODO this may cause an unforseen upgrade from an array to an App array
                set(this, 'selection', values);
            } else {
                set(this, 'selection', values[0]);
            }

            return values;
        }.property().volatile(),

        labels : function () {
            var objects = get(this, 'controlledSelection'),
                labelPath = get(this, 'optionLabelPath').replace(/^content\.?/, ''),
                labels = App.A();

            if (!objects || App.typeOf(objects) !== 'array') {
                return null;
            }

            objects.forEach(function (object) {
                labels.addObject(get(object, labelPath));
            });
            return labels;
        }.property().volatile(),

        /**
         @private

         In single selection mode (when `multiple` is `false`), value can be used to
         get the current selection's value or set the selection by it's value.

         In multiple selection mode, value can be used to get an array of the values
         represented by the `selection` array, or to set the selection by presence
         (see notes on presence).

         `Set by presence` During multiple selection mode, setting value operates
         mechanically identically to single selection, but magic hAppens underneath
         to support pushing the value to and splicing the value from arrays.  To do
         this you pass the object in both to set it and to remove it.

         Example:

         Given
         content = [{id:1},{id:2},{id:3}]
         selection = []
         optionValuePath = 'content.id'

         Then
         this.set('value' , {id:1}) => selection = [{id:1}]
         this.get('value') => '1'
         this.set('value' , {id:2}) => selection = [{id:1},{id:2}]
         this.get('value') => '1; 2'
         this.set('value' , {id:1}) => selection = [{id:2}]
         this.get('value') => '2'

         @property value
         @type String
         @default null
         */
        value : function (key, obj) {

            App.Logger.debug('value set called:', obj);
            var selection = get(this, 'controlledSelection'),
                index = indexOf(selection, obj);;

            //handle as array
            if (get(this, 'multiple')) {

                if (arguments.length === 2) {

                    if (index === -1) {
                        selection.addObject(obj);
                        //set(this, 'controlledSelection.[]', selection);
                    } else {
                        selection.removeObject(obj);
                        //set(this, 'controlledSelection.[]', selection);
                    }
                }

                return selection;
            }

            //handle as string
            if (arguments.length === 2) {
                if (index === -1) {
                    set(this, 'controlledSelection.[]', [obj]);
                } else {
                    set(this, 'controlledSelection.[]', []);
                }
            }

            //trigger change
            get(this, 'values');
            get(this, 'labels');
            return selection;

        }.property('controlledSelection'),

        /**
         The path of the option labels.

         @property optionLabelPath
         @type String
         @default 'content'
         */
        optionLabelPath : 'content',

        /**
         The path of the option labels.

         @property optionLabelPath
         @type String
         @default 'content'
         */
        optionValuePath : 'content',

        /**
         Path on the option to that should be bound as a class

         @property optionStatusClassPath
         @type String
         @default null
         */
        optionStatusClassPath : null,

        /**
         The path of the option group.
         `content` should be pre-sorted by `optionGroupPath`, set
         `sortContentByGroupPath` to `true` to have App.Selectable sort it.

         @property optionGroupPath
         @type String
         @default null
         */
        optionGroupPath : null,

        /**
         Determines whether to sort content by `optionGroupPath` or to rely on
         initial user order. WARNING this WILL replace content with a new content array

         @property sortContentByGroupPath
         @type Boolean
         @default false
         */
        sortContent : false,

        /**
         The view class for optgroup.

         @property groupView
         @type App.View
         @default As defined below.
         */
        groupView : App.SelectableGroup,

        optionView : App.SelectableOption,

        controlledContent : null,

        filteredContent : function () {
            return get(this, 'controlledContent');
        }.property('controlledContent', 'controlledContent.@each'),

        groupedContent : function () {
            var groupPath = get(this, 'optionGroupPath'),
                groupedContent = App.A(),
                content = get(this, 'filteredContent') || [];

            forEach(content, function (item) {
                var label = get(item, groupPath);

                if (get(groupedContent, 'lastObject.label') !== label) {
                    groupedContent.pushObject({
                        label: label,
                        content: App.A()
                    });
                }

                get(groupedContent, 'lastObject.content').push(item);
            });

            return groupedContent;
        }.property('optionGroupPath', 'filteredContent', 'filteredContent.@each'),

        getObjectByValue : function (objects, value, valuePath) {

            var object = null;

            if (!objects || App.typeOf(objects) !== 'array') {
                return null;
            }

            objects.forEach(function (obj) {
                if (get(obj, valuePath) === value) {
                    object = obj;
                }
            });
            return object;
        },

        init : function () {

            this._super();

            var selection = App.copy(get(this, 'selection')),
                self = this,
                controlledSelection = App.A(),
                multiple = get(this, 'multiple'),
                content = get(this, 'content'),
                valuePath = get(this, 'optionValuePath').replace(/^content\.?/, ''),
                labelPath = get(this, 'optionLabelPath').replace(/^content\.?/, ''),
                sortOptions = [];

            if (multiple) {
                if (!isArray(selection)) {
                    controlledSelection.addObject(this.getObjectByValue(content, selection, valuePath));
                } else {
                    controlledSelection.addObjects(selection.map(function (object) {
                        return self.getObjectByValue(object);
                    }));
                }
            } else if (isArray(selection)) {
                App.Logger.error('You specified `multiple=false` but provided an Array for selection.');
            } else {
                controlledSelection.addObject(this.getObjectByValue(content, selection, valuePath));
            }
            set(this, 'controlledSelection', controlledSelection);

            if (get(this, 'sortContent')) {
                if (get(this, 'optionGroupPath')) {
                    sortOptions.push(get(this, 'optionGroupPath'));
                }
                sortOptions.push(labelPath);
            }

            set(this, 'controlledContent', App.ArrayController.create({
                content : content,
                sortProperties : sortOptions,
                sortAscending : true
            }));
        },

        actions : {
            select : function (object) {
                set(this, 'value', object);
                return false;
            }
        }

    });

}).call(Ember);

})();

(function() {

/**

 Author: Chris Thoburn

 Ember Autocomplete is a complete autocomplete solution with support for option groups and label paths.

 */

/**
 @class Autocomplete
 @namespace App
 @extends App.View
 */
/*global Ember, Utils*/
(function () {
    "use strict";
    var App = this,
        set = App.set,
        get = App.get,
        indexOf = App.EnumerableUtils.indexOf,
        indexesOf = App.EnumerableUtils.indexesOf,
        forEach = App.EnumerableUtils.forEach,
        replace = App.EnumerableUtils.replace,
        isArray = App.isArray,
        precompileTemplate = App.Handlebars.compile,
        inArray = Utils.array.inArray;

    App.Autocomplete = App.Selectable.extend({

        //structure
        classNames      :   ['App-autocomplete', 'autocompleteBox'],
        classNameBindings : ['isFocused:focused:'],
        tagName         :   'ul',
        placeholder     :   'Search...',
        autofocus       :   false,
        defaultTemplate : precompileTemplate('{{#if view.multiple}}' +
            '{{#each view.controlledSelection}}' +
            '{{view view.Tag content=this}}' +
            '{{/each}}' +
            '{{/if}}' +
            '<li class="autocompleteTag selectableTag currentCompletionBox">' +
            '{{view view.textInput autofocus=view.autofocus ' +
            'value=view.searchString placeholder=view.placeholder ' +
            'class="autocomplete invisiBox"}}' +
            '<div class="autocompleteOptions selectable">' +
            '{{#if view.optionGroupPath}}' +
            '{{#each view.groupedContent}}' +
            '<div class="selectableGroupLabel">{{label}}</div>' +
            '{{view view.groupView content=content label=label}}' +
            '{{/each}}' +
            '{{else}}' +
            '{{#each view.filteredContent}}' +
            '{{view view.optionView content=this}}' +
            '{{/each}}' +
            '{{/if}}' +
            '</div>' +
            '</li>'
            ),

        Tag : App.View.extend(App.ViewTargetActionSupport, {
            tagName : 'li',
            classNames : ['autocompleteTag', 'selectableTag'],
            classNameBindings : ['status'],
            defaultTemplate : precompileTemplate('{{view.label}}<span {{action "removeTag" view.content target="view"}}>X</span>'),

            label : function () {

                var labelPath = get(this, 'parentView.optionLabelPath');

                if (!labelPath) { return ''; }

                App.Logger.debug('getting label', labelPath, get(this, labelPath));
                return get(this, labelPath);

            }.property('parentView.optionLabelPath', 'content'),

            status : function () {

                var statusPath = get(this, 'parentView.optionStatusClassPath');

                if (!statusPath) { return ''; }

                App.Logger.debug('getting status', statusPath);
                return get(this, statusPath);

            }.property('parentView.optionStatusClassPath', 'content'),

            actions : {
                removeTag : function () {
                    App.Logger.debug('removing tag');
                    this.triggerAction({
                        action : 'select',
                        actionContext : get(this, 'content'),
                        target : this.get('parentView'),
                        bubbles : false
                    });
                    return false;
                }
            },

            init : function () {
                App.Logger.debug('content init', get(this, 'content'));
                App.Logger.debug('label init', get(this, 'label'));
            }
        }),

        /**
         Allow us to edit the text field without automatically updating
         the value
         */
        searchString : '',

        multiple : false,
        disallowMultiple : true,
        disabled : false,
        content : null,
        selection : null,

        enforceOne : false,

        /**
         *
         */
        /*
         contentChangeObserver : function () {


         var searchString = this.get('searchString'),
         selection = this.get('controlledSelection.[]'),
         options = this.get('filteredContent'),
         enforce = this.get('enforceOne'),
         label = this.get('optionLabelPath').replace(/^content\.?/, '');

         if (enforce && !selection.length && options.length) {
         selection.addObject(options.objectAt(0));
         }

         }.observes('content'),
         */

        /**

         */
        labelsChangeObserver : function () {
            var labels = get(this, 'labels.[]'),
                multiple = get(this, 'multiple');

            if (!multiple) {
                App.Logger.debug('setting search string to first label', labels);
                set(this, 'searchString', labels.objectAt(0));
            } else {
                App.Logger.debug('setting search string to empty');
                set(this, 'searchString', '');
            }
        }.observes('labels', 'controlledSelection.@each'),


        /**
         @private

         True when the textInput has focus.

         To focus the textInput on initialization set `autofocus` to `true`

         @property isFocused
         @type Boolean
         @default false
         */
        isFocused : false,

        isHovered : false,

        /**
         @private

         The option to which a 'pre-selection' hovered state is given
         when the user utilizes up or down arrow keys to pick an option.

         @property hoveredOption
         @type Object
         @default null
         */
        hoveredOption : null,

        textInputElement : null,

        /**
         The view class for textfield

         @property textInput
         @type App.TextField
         @default As defined below.
         */
        textInput : App.TextField.extend(App.TargetActionSupport, {

            keyDown : function (e) {

                var options, last, index, newIndex,
                    selected,
                    currentString = get(this, 'value');

                if (e.keyCode === 8 && get(this, 'parentView.multiple') && currentString === '') {
                    selected = get(this, 'parentView.controlledSelection');
                    selected.removeObject(selected.objectAt(selected.length - 1));
                } else if (e.keyCode === 13) { //return

                    this.triggerAction({
                        action : 'select',
                        actionContext : get(this, 'parentView.hoveredOption'),
                        target : this.get('parentView'),
                        bubbles : false
                    });

                    //focus forward
                    if (!get(this, 'parentView.multiple')) {
                        App.$(":input:eq(" + App.$(":input").index(this.$()) + 1 + ")").focus();
                    } else {
                        ;// tag it
                    }

                    return false;

                } else if (get(this, 'parentView.multiple') && inArray([188, 13], e.keyCode)) {

                    //32 space shouldn't work since many items will have spaces
                    //return, space or comma: tab key should still be passed through to allow context switching
                    set(this, 'parentView.value', get(this, 'parentView.hoveredOption'));
                    return false;

                } else if (e.keyCode === 40) { //arrow down

                    options = get(this, 'parentView.filteredContent');
                    last = options.length - 1;
                    index = indexOf(
                        options,
                        get(this, 'parentView.hoveredOption')
                    );
                    newIndex = (index === last) ? last : index + 1;

                    App.Logger.debug(options, last, index, newIndex);
                    set(
                        this,
                        'parentView.hoveredOption',
                        options.objectAt(newIndex)
                    );
                    App.Logger.debug('hovered option is:', get(this, 'parentView.hoveredOption'));
                    return false;

                } else if (e.keyCode === 38) { //arrow up

                    options = this.get('parentView.filteredContent');
                    index = indexOf(
                        options,
                        this.get('parentView.hoveredOption')
                    );
                    newIndex = (index === 0) ? 0 : index - 1;

                    set(
                        this,
                        'parentView.hoveredOption',
                        options.objectAt(newIndex)
                    );
                    App.Logger.debug('hovered option is:', get(this, 'parentView.hoveredOption'));
                    return false;

                } else { //any other key
                    this.set(
                        'parentView.hoveredOption',
                        this.get('parentView.filteredContent').objectAt(0)
                    );
                }

            },

            focusOut : function (e) {

                set(this, 'parentView.isFocused', false);

                if (get(this, 'parentView.enforceOne')) {
                    if (!get(this, 'parentView.controlledSelection.length')) {
                        set(this, 'parentView.value', get(this, 'parentView.hoveredOption'));
                    }
                } else {
                    /*this.triggerAction({
                     action: 'change',
                     context : {
                     value : get(this, 'value'),
                     view : get(this, 'parentView')
                     },
                     target : 'parentView'
                     });*/
                }

            },

            focusIn : function () {
                set(this, 'parentView.isFocused', true);
            },

            autofocus : false,

            didInsertElement : function () {

                if (!!this.autofocus) {
                    this.$().focus();
                }

                set(this, 'parentView.textInputElement', this.$());
            }
        }),

        filteredContent : function () {

            var searchString = get(this, 'searchString'),
                content = get(this, 'controlledContent.[]'),
                selection = get(this, 'controlledSelection.[]'),
                multiple = get(this, 'multiple'),
                disallowMultiple = get(this, 'disallowMultiple'),
                label = get(this, 'optionLabelPath').replace(/^content\.?/, ''),
                regex = new RegExp(searchString, 'i'),
                opts;

            if (!content) {
                return [];
            }

            if (!searchString && !selection.length) {
                return content;
            }

            opts = content.filter(
                function (option) {
                    if (multiple && disallowMultiple && indexOf(selection, option) > -1) {
                        return false;
                    }
                    return get(option, label) ? get(option, label).match(regex) : false;
                }
            );

            set(this, 'hoveredOption', opts[0]);

            return opts;

        }.property('searchString', 'controlledSelection.@each', 'controlledContent.@each'),

        groupView : App.SelectableGroup.extend({

            hoveredOptionBinding : 'parentView.hoveredOption',

            textInputElementBinding : 'parentView.textInputElement',

            classNames : ['autocompleteGroup']


        }),
        /**
         The view class for option.

         @property optionView
         @type App.View
         @default As defined below.
         */
        optionView : App.SelectableOption.extend({

            classNames : ['autocompleteOption'],
            classNameBindings : ['hovered'],

            hovered : function () {
                var content = get(this, 'content'),
                    hovered = get(this, 'parentView.hoveredOption');

                return content === hovered;

            }.property('content', 'parentView.hoveredOption').readOnly(),

            mouseDown : function () {

                if (!get(this, 'parentView.disabled')) {

                    this.triggerAction({
                        action : 'select',
                        actionContext : get(this, 'content'),
                        target : this.get('parentView')
                    });

                    //focus forward
                    if (!get(this, 'parentView.multiple')) {
                        var element = get(this, 'parentView.textInputElement'),
                            index = App.$(":input").index(element) + 1;

                        App.$(":input:eq(" + index + ")").focus();
                    } else {
                        get(this, 'parentView.textInputElement').focus();
                    }

                }
            }

        }),

        didInsertElement : function () {
            this.labelsChangeObserver();
        }

    });
}).call(Ember);

})();

(function() {

(function () {
    "use strict";

    /*global Ember*/
    var precompileTemplate = Ember.Handlebars.compile;

    Ember.CarouselComponent = Ember.Component.extend({
        layout: precompileTemplate('<div class="carouselSlides">{{yield}}</div>'),
        classNames: ['carousel'],
        classNameBindings: ['sliding'],

        slideIndex : 0,
        currentSlideIndex : -1,
        slideIndexObserver : function () {
            var slideCount = this.get('slideCount'),
                slideIndex = this.get('slideIndex');

            if (slideIndex < 0) {
                this.set('slideIndex', slideCount - 1);
            } else if (slideIndex >= slideCount) {
                this.set('slideIndex', 0);
            }
            this.to(this.get('slideIndex'));
        }.observes('slideIndex'),

        //return a slideCount that updates dynamically when content changes
        slideCount : function () {
            var innerWrapper = this.$('.carouselSlides').eq(0),
                slides = this.$('.carouselSlide'),
                length = this.$('.carouselSlide').length;
            innerWrapper.css({
                width : '' + (length * 100) + '%'
            });
            slides.css({
                width : '' + (100 / length) + '%'
            });
            return length;
        }.property('content.@each'),

        didInsertElement : function () {
            //set content if it wasn't passed in directly
            if (!this.get('content')) {
                this.set('content', new Array(this.$('.carouselSlide').length));
            }

            //trigger initial slideCount
            this.get('slideCount');

            //trigger initial position
            this.to(this.get('slideIndex'));
        },


        prev: function () {
            if (this.get('sliding')) {
                return;
            }
            this.set('slideIndex', this.get('slideIndex') - 1);
        },
        next: function () {
            if (this.get('sliding')) {
                return;
            }
            this.set('slideIndex', this.get('slideIndex') + 1);
        },
        to: function (pos) {
            Ember.Logger.debug('sliding to', pos);
            var direction,
                self = this;
            if (!((0 <= pos && pos < this.get('slideCount')))) {
                return;
            }
            if (this.get('sliding')) {
                return this.$().one('slid', function () {
                    return self.to(pos);
                });
            }
            direction = pos > this.get('slideIndex') ? 'next' : 'prev';
            return this.slide(direction, pos);
        },
        /*
         Use slide to transition to any slide with any animation direction.
         E.g., by specifiying type = 'next' and next = first_slide_index, we can
         transition to the first slide by moving to the right.

         type: next | prev
         nextIndex: is the index of the next slide

         this works by getting the next index, appending pushing it either left
          or right, frame shifting the entire inner carousel, then fixing the carousel's
          location
         */
        slide: function (shiftType, nextIndex) {

            if (this.get('currentSlideIndex') === nextIndex) {
                Ember.Logger.debug('Slide: no index change.');
                return;
            }
            var innerWrapper = this.$('.carouselSlides').eq(0),
                self = this;

            //flag the carousel that the transition is occurring
            this.set('sliding', true);

            innerWrapper.animate(
                { left : '-' + (nextIndex * 100) + '%' },
                500,
                'swing',
                function () {
                    self.set('sliding', false);
                    self.set('currentSlideIndex', nextIndex);
                }
            );
        }
    });


    Ember.CarouselSlide = Ember.View.extend({
        classNames: ['carouselSlide']
    });

    Ember.Handlebars.helper('carousel-component', Ember.CarouselComponent);

    Ember.Handlebars.helper('carousel-slide', Ember.CarouselSlide);


}());

})();

(function() {

/**
 * Created by James Thoburn on 12/21/13.
 */

/*
 Loads all belongs To relationships recursively
 */
/*global Ember, DS*/
DS.Store.prototype.findRelated = function (type, id) {
    "use strict";

    var store = this,

        traversedRecords = [],

        //recursively find belongsTo relationships
        findRelatedRecords = function (record, parent) {

            traversedRecords.push(record);

            record.eachRelationship(function (r, n) {

                //ignore non-belongsTo relationships
                if (n.kind !== 'belongsTo' || !n.type) {
                    return;
                }

                //usually this will be an existing record
                var relatedRecord = record.get(n.key);

                //Ember.Logger.debug('relatedRecord get', relatedRecord);

                //but sometimes it will be an ID, if the ID isn't in the store
                //  we can be certain this record hasn't been altered
                if (relatedRecord == parseInt(relatedRecord, 10) && store.hasRecordForId(n.type.typeKey, relatedRecord)) {
                    relatedRecord = store.recordForId(n.type.typeKey, relatedRecord);
                }

                //append now
                if (!!relatedRecord && (!parent || relatedRecord !== parent)) {

                    record.set(n.key, relatedRecord);

                    //get related records for this record
                    if (traversedRecords.indexOf(relatedRecord) === -1) {
                        findRelatedRecords(relatedRecord, record);
                    }
                } else if (relatedRecord == parseInt(relatedRecord, 10) && !store.hasRecordForId(n.type.typeKey, relatedRecord)) {

                    //append by promise
                    store.findById(n.type.typeKey, relatedRecord).then(
                        function (relatedRecord) {

                            record.set(n.key, relatedRecord);

                            //get related records for this record
                            if (traversedRecords.indexOf(relatedRecord) === -1) {
                                findRelatedRecords(relatedRecord, record);
                            }

                        }
                    );
                }
                return;
            });
        };

    return this.find(type, id).then(function (record) {
        findRelatedRecords(record);
        return record;
    });

};

})();

(function() {


//signal the the APP is now loaded
//we do this at the beginning of the file
//because this is the last file
//and we need to bind the store first
/*global OYM, Ember*/
OYM.advanceReadiness();

var precompileTemplate = Ember.Handlebars.compile;

OYM.TextField = Ember.TextField.extend({
    attributeBindings : ['autofocus', 'name'],
    autofocus : false,
    didInsertElement : function () {
        "use strict";
        if (!!this.autofocus) {
            this.$().focus();
        }
    }

});

OYM.Checkbox = Ember.Checkbox.extend({
    attributeBindings : ['name']
});

OYM.liveNotes = Ember.View.extend({
    templateName : 'liveNotes',
    classNames : ['liveNotes'],
    tagName : 'div',
    name : '',
    value : '',
    helpText : 'All text areas can be formatted with <a href="http://daringfireball.net/projects/markdown/basics" target="_blank">Markdown</a>.  A live preview will appear to the right.',
    labelText : ''
});

OYM.helpText = Ember.View.extend({
    template : precompileTemplate('<span class="helpText">{{{view.value}}}</span>'),
    classNames : ['helpTextWrapper'],
    tagName : 'span',
    value : ''
});


})();

(function() {

var get = Ember.get, set = Ember.set, EmberHandlebars = Ember.Handlebars;

EmberHandlebars.registerHelper('group', function(options) {
    var data = options.data,
        fn   = options.fn,
        view = data.view,
        childView;

    childView = view.createChildView(Ember._MetamorphView, {
        context: get(view, 'context'),

        template: function(context, options) {
            options.data.insideGroup = true;
            return fn(context, options);
        }
    });

    view.appendChild(childView);
});

})();

(function() {

(function () {
    "use strict";

    /**
     * Created by Chris Thoburn on 12/22/13.
     *
     * based on Aaron Haurwitz's work located here: http://aaron.haurwitz.com/#!/posts/growllike-notifications-with-emberjs
     */

    /*global Ember, OYM*/
    var precompileTemplate = Ember.Handlebars.compile;

    this.GrowlNotifications = Ember.CollectionView.extend({

        classNames: ['growlNotifications'],

        contentBinding: 'Nexus.Growl.notifications',

        attributeBindings: ['style'],

        showTime: 6000,

        /*
         @property {View} Notification view class
         Determines what view class to render for each item in the content array.
         */
        itemViewClass: Ember.View.extend({

            template: precompileTemplate('<span class="icon"></span><a class="closeNotification" {{action "close" target="view"}}>X</a><strong class="notificationTitle">{{view.content.title}}</strong><p class="notificationText">{{view.content.sub}}</p>'),

            classNameBindings: [":growlNotification", "content.type", "content.closed", "isOpaque"],

            attributeBindings: ['style'],

            timeoutId: null,

            isOpaque: false,

            init: function () {
                var fn;
                this._super();
                fn = (function () {
                    return this.notifyPropertyChange("style");
                }).bind(this);
                this.set("_recomputeStyle", fn);
                return Ember.$(window).bind("resize", fn);
            },

            didInsertElement: function () {

                var type = this.get('content.type'),
                    showTime = this.get("parentView.showTime");

                if (type !== 'loading') {
                    if (type.indexOf('loadCompleted') !== -1 ) {
                        showTime = showTime / 4;
                    }
                    this.set("timeoutId", setTimeout((function () {
                        return this.send("close");
                    }).bind(this), showTime));
                }

                //make the notification
                return Ember.run.later(this, (function () {
                    return this.set("isOpaque", true);
                }), 1);

            },

            complete : function () {
                this.set("timeoutId", setTimeout((function () {
                    return this.send("close");
                }).bind(this), this.get("parentView.showTime") / 4));
            }.observes('content.type'),

            willDestroyElement: function () {
                return Ember.$(window).unbind('resize', this.get('_recomputeStyle'));
            },

            style: (function () {
                var column, index, type, notifications, rightPx, row, topPx, unitHeight, unitWidth, unitsPerColumn, viewportHeight, isLoading;
                type = this.get('content.type');
                isLoading = (type === 'loading' || type.indexOf('loadCompleted') !== -1);
                notifications = this.get('parentView.content').rejectProperty('closed', true);
                index = notifications.indexOf(this.get('content'));
                viewportHeight = Ember.$(window).height();
                unitHeight = isLoading ? 2 : 6;
                unitWidth = 21.5;
                unitsPerColumn = Math.floor(viewportHeight / unitHeight);
                column = Math.floor(index / unitsPerColumn);
                row = index % unitsPerColumn;
                if (index === -1) {
                    return '';
                }
                topPx = row * unitHeight;
                rightPx = column * unitWidth;
                return 'top: ' + topPx + 'rem; right: ' + rightPx + 'rem;';
            }).property('parentView.content.@each.closed'),

            actions: {
                close: function () {
                    this.set('isOpaque', false);
                    return setTimeout((function () {
                        this.get('parentView.content').removeObject(this.get('content'));
                        return clearTimeout(this.get("timeoutId"));
                    }).bind(this), 300);
                }
            }
        })
    });

    Ember.Handlebars.helper('growl', this.GrowlNotifications);

    /**
     Responsible for getting told about new notifications and storing them
     within an array.
     */
    this.Growl = Ember.Object.create({

        notifications: Ember.A(),

        /*
         An exposed method for pushing new notification.
         @param title {String} leading text
         @param sub {String} supporting text
         @param type {String} classification; used for display type

         error (red),
         failure (orange),
         warning (yellow),
         info (blue),
         success (green),
         general (grey),
         loading (white),
         loaded (white)
         */

        push: function (title, sub, type) {
            var notif;
            type = type || 'general';
            notif = Ember.Object.create({
                title: title,
                sub: sub,
                type: type,
                closed: false,
                complete : function (message, status) {
                    this.set('title', message);
                    this.set('type', 'loadCompleted ' + status);
                }
            });
            return this.get('notifications').pushObject(notif);
        }

    });

}).call(OYM);

})();

(function() {

//markdown helper
/*global Showdown, Handlebars*/
Ember.Handlebars.helper('markdown', function (value) {

    "use strict";

    if (!value) { return ''; }

    var converter = new Showdown.converter();
    return new Handlebars.SafeString(converter.makeHtml(value));
});


})();

(function() {

/*global Ember, WDD*//*
(function () {
    "use strict";
*/
    /*global Ember, WDD*/
   /* var precompileTemplate = Ember.Handlebars.compile;

    this.ModalDialouges = Ember.CollectionView.extend({

        classNames: ['modalDialogues'],

        contentBinding: 'WDD.Modal.dialogues',

        attributeBindings: ['style'],

        /*
         @property {View} Notification view class
         Determines what view class to render for each item in the content array.
         *//*
        itemViewClass: Ember.View.extend({

            template: precompileTemplate('<span class="icon"></span><a class="closeDialogue" {{action "close" target="view"}}>X</a><strong class="dialogueTitle">{{view.content.title}}</strong><p class="dialogueText">{{view.content.sub}}</p>'),

            classNameBindings: [":modalDialogue", "content.type", "content.closed", "isOpaque"],

            attributeBindings: ['style'],

            timeoutId: null,

            isOpaque: false,

            init: function () {
                var fn;
                this._super();
                fn = (function () {
                    return this.notifyPropertyChange("style");
                }).bind(this);
                this.set("_recomputeStyle", fn);
                return Ember.$(window).bind("resize", fn);
            },

            didInsertElement: function () {

                var type = this.get('content.type'),
                    showTime = this.get("parentView.showTime");

                if (type !== 'loading') {
                    if (type.indexOf('loadCompleted') !== -1 ) {
                        showTime = showTime / 4;
                    }
                    this.set("timeoutId", setTimeout((function () {
                        return this.send("close");
                    }).bind(this), showTime));
                }

                //make the notification
                return Ember.run.later(this, (function () {
                    return this.set("isOpaque", true);
                }), 1);

            },

            complete : function () {
                this.set("timeoutId", setTimeout((function () {
                    return this.send("close");
                }).bind(this), this.get("parentView.showTime") / 4));
            }.observes('content.type'),

            willDestroyElement: function () {
                return Ember.$(window).unbind('resize', this.get('_recomputeStyle'));
            },

            style: (function () {
                var column, index, type, notifications, rightPx, row, topPx, unitHeight, unitWidth, unitsPerColumn, viewportHeight, isLoading;
                type = this.get('content.type');
                isLoading = (type === 'loading' || type.indexOf('loadCompleted') !== -1);
                notifications = this.get('parentView.content').rejectProperty('closed', true);
                index = notifications.indexOf(this.get('content'));
                viewportHeight = Ember.$(window).height();
                unitHeight = isLoading ? 2 : 6;
                unitWidth = 21.5;
                unitsPerColumn = Math.floor(viewportHeight / unitHeight);
                column = Math.floor(index / unitsPerColumn);
                row = index % unitsPerColumn;
                if (index === -1) {
                    return '';
                }
                topPx = row * unitHeight;
                rightPx = column * unitWidth;
                return 'top: ' + topPx + 'rem; right: ' + rightPx + 'rem;';
            }).property('parentView.content.@each.closed'),

            actions: {
                close: function () {
                    this.set('isOpaque', false);
                    return setTimeout((function () {
                        this.get('parentView.content').removeObject(this.get('content'));
                        return clearTimeout(this.get("timeoutId"));
                    }).bind(this), 300);
                }
            }
        })
    });

    Ember.Handlebars.helper('modal', this.ModalDialogues);

    this.Modal = Ember.Object.create({

        dialogues : Ember.A(),

        push: function (title, content, allowReject) {
            var dialogue;
            dialogue = Ember.Object.create({
                title: title,
                content: content,
                allowReject: allowReject,
                closed: false
            });
            return this.get('notifications').pushObject(dialogue);
        }

    });
}.call(WDD));*/

})();

(function() {

/*global Ember*/
var precompileTemplate = Ember.Handlebars.compile;

Ember.slideToggle = Ember.View.extend({

    classNames : ['slideToggle'],

    classNameBindings : ['value::off'],

    template : precompileTemplate('<div class="slideToggleButton"></div>'),

    value : false,

    click : function (event) {
        this.set('value', !this.get('value'));
    }
});

})();

(function() {

/*global Ember, Utils*/
(function () {
    "use strict";

    Ember.ValidatedTextField = Ember.TextField.extend({

        attributeBindings : ['autofocus'],
        autofocus : false,

        classNameBindings : ['dType'],

        keyPress : function (e) {
            var value = this.get('value'),
                charCode = e.which || e.keyCode,
                newChar = String.fromCharCode(charCode),
                fullString = value + newChar,
                shouldPreventDefault = false;

            if (!newChar && newChar !== 0) {
                return;
            }

            switch (this.get('dType')) {
            case 'integer':
                shouldPreventDefault = ! (/^[0-9]+$/).test(fullString);
                break;

            case 'currency-us':

            case 'float':
                shouldPreventDefault = ! (/^[0-9]+(\.[0-9]*)?$/).test(fullString);
                break;

            case 'credit-card':
            case 'phone-us':
            case 'date':
                break;
            default:
                break;
            }
            if (shouldPreventDefault) {
                e.preventDefault();
                e.stopImmediatePropagation();
                return false;
            }
            return true;
        },

        didInsertElement : function () {
            if (!!this.autofocus) {
                this.$().focus();
            }
        },
        init : function () {
            this._super();
            switch (this.get('dType')) {
            case 'date':
                this.set('type', 'date');
                break;
            default:
                this.set('type', 'text');
                break;
            }
        }
    });

}());

})();

(function() {

//signify we're done loading.  deferReadiness() is called in app.js
OYM.advanceReadiness();

})();