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
    /*global Ember, window, ENV*/

    //allow query params
    ENV = {FEATURES: {'query-params': true}};

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

    this.route('session');
    this.resource('stream', {path : '/'}, function () {
        this.route('single', { path : '/:stream_id' });
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

}.call(OYM));

})();

(function() {

/*global Ember, OYM, Utils*/
(function () {
    "use strict";

    var App = this;

    App.SessionController = Ember.Controller.extend({

        isLoggedIn : false,

        username : '',

        hostname : window.location.port === '9000' ? 'http://0.0.0.0:8000' : '',

        attemptedTransition : null,

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
            this.set('isLoggedIn',  !!Utils.cookie.get('EmberUser'));
            this.set('username', Utils.cookie.get('EmberUser'));
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

        actions : {
            login : function () {

                if (window.location.hostname === '') {
                    this.controllerFor("session").set('isLoggedIn', true);
                    Utils.cookie.set('EmberUser', 'offline user');
                    return;
                }

                Ember.$('#loginButton').addClass('working');

                var route = this,

                    controller = this.controllerFor('session'),

                    setSession = function (m) {

                        //set the Utils.cookies
                        Utils.cookie.set('EmberUser', m.data.username, 7);
                        window.location.reload(true);

                    },

                    loginError = function (m, t, a) {

                        var message,
                            button = Ember.$('#loginButton'),
                            position = button.position(),
                            width = button.width(),
                            e;

                        if (t === 'error') {

                            switch (m.statusCode()) {
                            case 401:
                                message = 'Invalid login credentials.';
                                break;
                            case 403:
                                message = 'You do not have sufficient access privileges.';
                                break;
                            case 404:
                                message = 'The server is currently down or login path is misconfigured.';
                                break;
                            case 500:
                                message = 'The server is currently down.';
                                break;
                            default:
                                message = 'Error connecting to authentication server.';
                                break;
                            }
                        } else if (m.status) {
                            message = 'Invalid login credentials.';
                        } else if (a < 1) {
                            message = 'Login successful but unable initiate a session.';
                        } else {
                            message = 'An error occurred and login failed.';
                        }
                        button.removeClass('working').after(
                            '<span class="errorWrapper" style="display: none; top:' +
                                position.top + 'px; left:' + (position.left + width + 25) +
                                'px;"><span class="errorMessage">' + message +
                                '</span></span>'
                        );

                        e = button.next();

                        e.fadeIn(
                            1000,
                            (function () {
                                setTimeout(
                                    (function () {
                                        e.fadeOut(
                                            1000,
                                            (function () {e.remove(); })
                                        );
                                    }),
                                    3000
                                );
                            })
                        );



                    },
                    attemptsRemaining = 2,
                    request = {
                        type : 'POST',
                        url : controller.get('hostname') + '/employees/login/',

                        data : {
                            username : Ember.$('#login input[type=text]').eq(0).val(),
                            password : Ember.$('#login input[type=password]').eq(0).val()
                        },

                        success : function (m) {

                            if (m.status && m.status === 'Authentication failed.') {
                                loginError(m);
                            }

                            //retry validation if authentication didn't return a username
                            if (!!m.data.username) {
                                setSession(m);
                            } else if (attemptsRemaining--) {
                                Ember.$.ajax(request);
                            } else {
                                loginError(m, 'success', attemptsRemaining);
                            }

                        },

                        error : function (jqXHR) { loginError(jqXHR, 'error'); }
                    };

                Ember.$.ajax(request);

            }
        }

    });

    App.SessionView = Ember.View.extend({
        templateName : 'session'
    });

}).call(OYM);

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

/*global jQuery, animateLogo*/
OYM.Logo = Ember.View.extend({
    templateName : 'logo',
    classNames : ['logo'],
    classNameBindings : ['isDark:dark:'],
    isDark : false,
    tagName : 'div',
    runNum : 1,
    mouseEnter : function () {
        "use strict";
        animateLogo(this.$(), this.runNum);
    },
    didInsertElement : function () {
        "use strict";
        if (this.runNum < 0) {
            animateLogo(this.$(), this.runNum);
        }
    }
});


OYM.collapseToggle = Ember.View.extend({

    template : precompileTemplate('<div class="collapseToggle"><span></span></div>'),
    classNames : ['collapseToggleWrapper'],
    classNameBindings : ['isCollapsed:collapsed:'],
    isCollapsed : false,
    collapses : '',
    orgWidth : '',
    //direction : 'left',
	click : function(event){
				var	box = jQuery(event.target).parents( this.collapses ).eq(0),
					isCollapsed = this.isCollapsed;

				if (!this.orgWidth) {
                    this.set('orgWidth',box.width());
                }

				this.set('isCollapsed',!isCollapsed);
				box.animate({'width' : (isCollapsed ? this.orgWidth+'px' : '0')});
				
		}
});

OYM.searchInputField = Ember.View.extend({
		templateName		:	'searchInputField'
	,	name						:	''
	,	value						:	''
	,	matchesMultiple	:	false
	,	options					:	false
});

OYM.searchInput =	OYM.TextField.extend({
			attributeBindings	:	['value','data-0','data-75','onFocus','onBlur']
		,	value	:	''
		,	'data-0'	:	''
		,	'data-75'	:	''
		,	onFocus	:	"jQuery('#searchBox').parent().addClass('focused');"
		,	onBlur	:	"jQuery('#searchBox').parent().removeClass('focused');"
		,	placeholder : "SEARCH: Jobs, Portfolios, Clients..."
		,	autofocus  : "autofocus"
		,	keyUp	:	function(){  this.process( this.parser.parse(this.value));  }
	//	,	parser	:	 OYM.Search.create()
		,	process:	function(o){ console.log('processing',o);}
	
		});


/*
	Extended Form Fields that include validation checks
*/
OYM.validatedField = OYM.TextField.extend({
		focusNow				:	function(){}
	,	labelText				:	''
	,	helpText					:	false
	
	/*
		successText is displayed if the field is validated
		warningText is displayed if the field in currently unable to be validated
		errorText is displayed if the field is invalid
		
		IF DEFINED
			softText  is the message displayed to the user letting them know
			that their validation failed but that they can continue with potentially invalid data
			softRule is the rule that the value MUST pass in order to not be an error

	*/
	,	successText			:	''
	,	warningText			:	''
	,	errorText				:	''
	,	canContinueText	:	null
	,	canContinueRule	:	null
	
	,	dataType				:	''
		
		/*
			Validates value based on dataType
			throws Error : unknown dataType if unrecognized dataType
		*/
	,	valueObserver		:	function(){}
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