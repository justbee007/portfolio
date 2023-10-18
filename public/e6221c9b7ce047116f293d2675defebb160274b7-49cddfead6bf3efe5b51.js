/*! For license information please see e6221c9b7ce047116f293d2675defebb160274b7-49cddfead6bf3efe5b51.js.LICENSE.txt */
(self.webpackChunkgatsby_starter_hello_world=self.webpackChunkgatsby_starter_hello_world||[]).push([[139],{5706:function(t,e,r){"use strict";var a=r(8812),n={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},o={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},s={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},i={};function c(t){return a.isMemo(t)?s:i[t.$$typeof]||n}i[a.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},i[a.Memo]=s;var l=Object.defineProperty,f=Object.getOwnPropertyNames,m=Object.getOwnPropertySymbols,d=Object.getOwnPropertyDescriptor,p=Object.getPrototypeOf,u=Object.prototype;t.exports=function t(e,r,a){if("string"!=typeof r){if(u){var n=p(r);n&&n!==u&&t(e,n,a)}var s=f(r);m&&(s=s.concat(m(r)));for(var i=c(e),y=c(r),h=0;h<s.length;++h){var g=s[h];if(!(o[g]||a&&a[g]||y&&y[g]||i&&i[g])){var b=d(r,g);try{l(e,g,b)}catch(v){}}}}return e}},7459:function(t,e,r){"use strict";r.d(e,{ZP:function(){return te}});var a=r(5893),n=r(7294),o=r.t(n,2);var s=function(){function t(t){var e=this;this._insertTag=function(t){var r;r=0===e.tags.length?e.insertionPoint?e.insertionPoint.nextSibling:e.prepend?e.container.firstChild:e.before:e.tags[e.tags.length-1].nextSibling,e.container.insertBefore(t,r),e.tags.push(t)},this.isSpeedy=void 0===t.speedy||t.speedy,this.tags=[],this.ctr=0,this.nonce=t.nonce,this.key=t.key,this.container=t.container,this.prepend=t.prepend,this.insertionPoint=t.insertionPoint,this.before=null}var e=t.prototype;return e.hydrate=function(t){t.forEach(this._insertTag)},e.insert=function(t){this.ctr%(this.isSpeedy?65e3:1)==0&&this._insertTag(function(t){var e=document.createElement("style");return e.setAttribute("data-emotion",t.key),void 0!==t.nonce&&e.setAttribute("nonce",t.nonce),e.appendChild(document.createTextNode("")),e.setAttribute("data-s",""),e}(this));var e=this.tags[this.tags.length-1];if(this.isSpeedy){var r=function(t){if(t.sheet)return t.sheet;for(var e=0;e<document.styleSheets.length;e++)if(document.styleSheets[e].ownerNode===t)return document.styleSheets[e]}(e);try{r.insertRule(t,r.cssRules.length)}catch(a){0}}else e.appendChild(document.createTextNode(t));this.ctr++},e.flush=function(){this.tags.forEach((function(t){return t.parentNode&&t.parentNode.removeChild(t)})),this.tags=[],this.ctr=0},t}(),i=Math.abs,c=String.fromCharCode,l=Object.assign;function f(t){return t.trim()}function m(t,e,r){return t.replace(e,r)}function d(t,e){return t.indexOf(e)}function p(t,e){return 0|t.charCodeAt(e)}function u(t,e,r){return t.slice(e,r)}function y(t){return t.length}function h(t){return t.length}function g(t,e){return e.push(t),t}var b=1,v=1,x=0,w=0,k=0,S="";function E(t,e,r,a,n,o,s){return{value:t,root:e,parent:r,type:a,props:n,children:o,line:b,column:v,length:s,return:""}}function $(t,e){return l(E("",null,null,"",null,null,0),t,{length:-t.length},e)}function C(){return k=w>0?p(S,--w):0,v--,10===k&&(v=1,b--),k}function N(){return k=w<x?p(S,w++):0,v++,10===k&&(v=1,b++),k}function O(){return p(S,w)}function _(){return w}function A(t,e){return u(S,t,e)}function z(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function j(t){return b=v=1,x=y(S=t),w=0,[]}function V(t){return S="",t}function M(t){return f(A(w-1,X(91===t?t+2:40===t?t+1:t)))}function P(t){for(;(k=O())&&k<33;)N();return z(t)>2||z(k)>3?"":" "}function Y(t,e){for(;--e&&N()&&!(k<48||k>102||k>57&&k<65||k>70&&k<97););return A(t,_()+(e<6&&32==O()&&32==N()))}function X(t){for(;N();)switch(k){case t:return w;case 34:case 39:34!==t&&39!==t&&X(k);break;case 40:41===t&&X(t);break;case 92:N()}return w}function I(t,e){for(;N()&&t+k!==57&&(t+k!==84||47!==O()););return"/*"+A(e,w-1)+"*"+c(47===t?t:N())}function R(t){for(;!z(O());)N();return A(t,w)}var T="-ms-",F="-moz-",q="-webkit-",L="comm",D="rule",W="decl",G="@keyframes";function B(t,e){for(var r="",a=h(t),n=0;n<a;n++)r+=e(t[n],n,t,e)||"";return r}function H(t,e,r,a){switch(t.type){case"@layer":if(t.children.length)break;case"@import":case W:return t.return=t.return||t.value;case L:return"";case G:return t.return=t.value+"{"+B(t.children,a)+"}";case D:t.value=t.props.join(",")}return y(r=B(t.children,a))?t.return=t.value+"{"+r+"}":""}function U(t){return V(Z("",null,null,null,[""],t=j(t),0,[0],t))}function Z(t,e,r,a,n,o,s,i,l){for(var f=0,u=0,h=s,b=0,v=0,x=0,w=1,k=1,S=1,E=0,$="",A=n,z=o,j=a,V=$;k;)switch(x=E,E=N()){case 40:if(108!=x&&58==p(V,h-1)){-1!=d(V+=m(M(E),"&","&\f"),"&\f")&&(S=-1);break}case 34:case 39:case 91:V+=M(E);break;case 9:case 10:case 13:case 32:V+=P(x);break;case 92:V+=Y(_()-1,7);continue;case 47:switch(O()){case 42:case 47:g(K(I(N(),_()),e,r),l);break;default:V+="/"}break;case 123*w:i[f++]=y(V)*S;case 125*w:case 59:case 0:switch(E){case 0:case 125:k=0;case 59+u:-1==S&&(V=m(V,/\f/g,"")),v>0&&y(V)-h&&g(v>32?Q(V+";",a,r,h-1):Q(m(V," ","")+";",a,r,h-2),l);break;case 59:V+=";";default:if(g(j=J(V,e,r,f,u,n,i,$,A=[],z=[],h),o),123===E)if(0===u)Z(V,e,j,j,A,o,h,i,z);else switch(99===b&&110===p(V,3)?100:b){case 100:case 108:case 109:case 115:Z(t,j,j,a&&g(J(t,j,j,0,0,n,i,$,n,A=[],h),z),n,z,h,i,a?A:z);break;default:Z(V,j,j,j,[""],z,0,i,z)}}f=u=v=0,w=S=1,$=V="",h=s;break;case 58:h=1+y(V),v=x;default:if(w<1)if(123==E)--w;else if(125==E&&0==w++&&125==C())continue;switch(V+=c(E),E*w){case 38:S=u>0?1:(V+="\f",-1);break;case 44:i[f++]=(y(V)-1)*S,S=1;break;case 64:45===O()&&(V+=M(N())),b=O(),u=h=y($=V+=R(_())),E++;break;case 45:45===x&&2==y(V)&&(w=0)}}return o}function J(t,e,r,a,n,o,s,c,l,d,p){for(var y=n-1,g=0===n?o:[""],b=h(g),v=0,x=0,w=0;v<a;++v)for(var k=0,S=u(t,y+1,y=i(x=s[v])),$=t;k<b;++k)($=f(x>0?g[k]+" "+S:m(S,/&\f/g,g[k])))&&(l[w++]=$);return E(t,e,r,0===n?D:c,l,d,p)}function K(t,e,r){return E(t,e,r,L,c(k),u(t,2,-2),0)}function Q(t,e,r,a){return E(t,e,r,W,u(t,0,a),u(t,a+1,-1),a)}var tt=function(t,e,r){for(var a=0,n=0;a=n,n=O(),38===a&&12===n&&(e[r]=1),!z(n);)N();return A(t,w)},et=function(t,e){return V(function(t,e){var r=-1,a=44;do{switch(z(a)){case 0:38===a&&12===O()&&(e[r]=1),t[r]+=tt(w-1,e,r);break;case 2:t[r]+=M(a);break;case 4:if(44===a){t[++r]=58===O()?"&\f":"",e[r]=t[r].length;break}default:t[r]+=c(a)}}while(a=N());return t}(j(t),e))},rt=new WeakMap,at=function(t){if("rule"===t.type&&t.parent&&!(t.length<1)){for(var e=t.value,r=t.parent,a=t.column===r.column&&t.line===r.line;"rule"!==r.type;)if(!(r=r.parent))return;if((1!==t.props.length||58===e.charCodeAt(0)||rt.get(r))&&!a){rt.set(t,!0);for(var n=[],o=et(e,n),s=r.props,i=0,c=0;i<o.length;i++)for(var l=0;l<s.length;l++,c++)t.props[c]=n[i]?o[i].replace(/&\f/g,s[l]):s[l]+" "+o[i]}}},nt=function(t){if("decl"===t.type){var e=t.value;108===e.charCodeAt(0)&&98===e.charCodeAt(2)&&(t.return="",t.value="")}};function ot(t,e){switch(function(t,e){return 45^p(t,0)?(((e<<2^p(t,0))<<2^p(t,1))<<2^p(t,2))<<2^p(t,3):0}(t,e)){case 5103:return q+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return q+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return q+t+F+t+T+t+t;case 6828:case 4268:return q+t+T+t+t;case 6165:return q+t+T+"flex-"+t+t;case 5187:return q+t+m(t,/(\w+).+(:[^]+)/,q+"box-$1$2"+T+"flex-$1$2")+t;case 5443:return q+t+T+"flex-item-"+m(t,/flex-|-self/,"")+t;case 4675:return q+t+T+"flex-line-pack"+m(t,/align-content|flex-|-self/,"")+t;case 5548:return q+t+T+m(t,"shrink","negative")+t;case 5292:return q+t+T+m(t,"basis","preferred-size")+t;case 6060:return q+"box-"+m(t,"-grow","")+q+t+T+m(t,"grow","positive")+t;case 4554:return q+m(t,/([^-])(transform)/g,"$1"+q+"$2")+t;case 6187:return m(m(m(t,/(zoom-|grab)/,q+"$1"),/(image-set)/,q+"$1"),t,"")+t;case 5495:case 3959:return m(t,/(image-set\([^]*)/,q+"$1$`$1");case 4968:return m(m(t,/(.+:)(flex-)?(.*)/,q+"box-pack:$3"+T+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+q+t+t;case 4095:case 3583:case 4068:case 2532:return m(t,/(.+)-inline(.+)/,q+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(y(t)-1-e>6)switch(p(t,e+1)){case 109:if(45!==p(t,e+4))break;case 102:return m(t,/(.+:)(.+)-([^]+)/,"$1"+q+"$2-$3$1"+F+(108==p(t,e+3)?"$3":"$2-$3"))+t;case 115:return~d(t,"stretch")?ot(m(t,"stretch","fill-available"),e)+t:t}break;case 4949:if(115!==p(t,e+1))break;case 6444:switch(p(t,y(t)-3-(~d(t,"!important")&&10))){case 107:return m(t,":",":"+q)+t;case 101:return m(t,/(.+:)([^;!]+)(;|!.+)?/,"$1"+q+(45===p(t,14)?"inline-":"")+"box$3$1"+q+"$2$3$1"+T+"$2box$3")+t}break;case 5936:switch(p(t,e+11)){case 114:return q+t+T+m(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return q+t+T+m(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return q+t+T+m(t,/[svh]\w+-[tblr]{2}/,"lr")+t}return q+t+T+t+t}return t}var st=[function(t,e,r,a){if(t.length>-1&&!t.return)switch(t.type){case W:t.return=ot(t.value,t.length);break;case G:return B([$(t,{value:m(t.value,"@","@"+q)})],a);case D:if(t.length)return function(t,e){return t.map(e).join("")}(t.props,(function(e){switch(function(t,e){return(t=e.exec(t))?t[0]:t}(e,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return B([$(t,{props:[m(e,/:(read-\w+)/,":-moz-$1")]})],a);case"::placeholder":return B([$(t,{props:[m(e,/:(plac\w+)/,":"+q+"input-$1")]}),$(t,{props:[m(e,/:(plac\w+)/,":-moz-$1")]}),$(t,{props:[m(e,/:(plac\w+)/,T+"input-$1")]})],a)}return""}))}}],it=function(t){var e=t.key;if("css"===e){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,(function(t){-1!==t.getAttribute("data-emotion").indexOf(" ")&&(document.head.appendChild(t),t.setAttribute("data-s",""))}))}var a=t.stylisPlugins||st;var n,o,i={},c=[];n=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+e+' "]'),(function(t){for(var e=t.getAttribute("data-emotion").split(" "),r=1;r<e.length;r++)i[e[r]]=!0;c.push(t)}));var l,f,m,d,p=[H,(d=function(t){l.insert(t)},function(t){t.root||(t=t.return)&&d(t)})],u=(f=[at,nt].concat(a,p),m=h(f),function(t,e,r,a){for(var n="",o=0;o<m;o++)n+=f[o](t,e,r,a)||"";return n});o=function(t,e,r,a){l=r,B(U(t?t+"{"+e.styles+"}":e.styles),u),a&&(y.inserted[e.name]=!0)};var y={key:e,sheet:new s({key:e,container:n,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:i,registered:{},insert:o};return y.sheet.hydrate(c),y};function ct(t,e,r){var a="";return r.split(" ").forEach((function(r){void 0!==t[r]?e.push(t[r]+";"):a+=r+" "})),a}var lt=function(t,e,r){var a=t.key+"-"+e.name;!1===r&&void 0===t.registered[a]&&(t.registered[a]=e.styles)},ft=function(t,e,r){lt(t,e,r);var a=t.key+"-"+e.name;if(void 0===t.inserted[e.name]){var n=e;do{t.insert(e===n?"."+a:"",n,t.sheet,!0),n=n.next}while(void 0!==n)}};var mt={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function dt(t){var e=Object.create(null);return function(r){return void 0===e[r]&&(e[r]=t(r)),e[r]}}var pt=/[A-Z]|^ms/g,ut=/_EMO_([^_]+?)_([^]*?)_EMO_/g,yt=function(t){return 45===t.charCodeAt(1)},ht=function(t){return null!=t&&"boolean"!=typeof t},gt=dt((function(t){return yt(t)?t:t.replace(pt,"-$&").toLowerCase()})),bt=function(t,e){switch(t){case"animation":case"animationName":if("string"==typeof e)return e.replace(ut,(function(t,e,r){return xt={name:e,styles:r,next:xt},e}))}return 1===mt[t]||yt(t)||"number"!=typeof e||0===e?e:e+"px"};function vt(t,e,r){if(null==r)return"";if(void 0!==r.__emotion_styles)return r;switch(typeof r){case"boolean":return"";case"object":if(1===r.anim)return xt={name:r.name,styles:r.styles,next:xt},r.name;if(void 0!==r.styles){var a=r.next;if(void 0!==a)for(;void 0!==a;)xt={name:a.name,styles:a.styles,next:xt},a=a.next;return r.styles+";"}return function(t,e,r){var a="";if(Array.isArray(r))for(var n=0;n<r.length;n++)a+=vt(t,e,r[n])+";";else for(var o in r){var s=r[o];if("object"!=typeof s)null!=e&&void 0!==e[s]?a+=o+"{"+e[s]+"}":ht(s)&&(a+=gt(o)+":"+bt(o,s)+";");else if(!Array.isArray(s)||"string"!=typeof s[0]||null!=e&&void 0!==e[s[0]]){var i=vt(t,e,s);switch(o){case"animation":case"animationName":a+=gt(o)+":"+i+";";break;default:a+=o+"{"+i+"}"}}else for(var c=0;c<s.length;c++)ht(s[c])&&(a+=gt(o)+":"+bt(o,s[c])+";")}return a}(t,e,r);case"function":if(void 0!==t){var n=xt,o=r(t);return xt=n,vt(t,e,o)}}if(null==e)return r;var s=e[r];return void 0!==s?s:r}var xt,wt=/label:\s*([^\s;\n{]+)\s*(;|$)/g;var kt=function(t,e,r){if(1===t.length&&"object"==typeof t[0]&&null!==t[0]&&void 0!==t[0].styles)return t[0];var a=!0,n="";xt=void 0;var o=t[0];null==o||void 0===o.raw?(a=!1,n+=vt(r,e,o)):n+=o[0];for(var s=1;s<t.length;s++)n+=vt(r,e,t[s]),a&&(n+=o[s]);wt.lastIndex=0;for(var i,c="";null!==(i=wt.exec(n));)c+="-"+i[1];var l=function(t){for(var e,r=0,a=0,n=t.length;n>=4;++a,n-=4)e=1540483477*(65535&(e=255&t.charCodeAt(a)|(255&t.charCodeAt(++a))<<8|(255&t.charCodeAt(++a))<<16|(255&t.charCodeAt(++a))<<24))+(59797*(e>>>16)<<16),r=1540483477*(65535&(e^=e>>>24))+(59797*(e>>>16)<<16)^1540483477*(65535&r)+(59797*(r>>>16)<<16);switch(n){case 3:r^=(255&t.charCodeAt(a+2))<<16;case 2:r^=(255&t.charCodeAt(a+1))<<8;case 1:r=1540483477*(65535&(r^=255&t.charCodeAt(a)))+(59797*(r>>>16)<<16)}return(((r=1540483477*(65535&(r^=r>>>13))+(59797*(r>>>16)<<16))^r>>>15)>>>0).toString(36)}(n)+c;return{name:l,styles:n,next:xt}},St=!!o.useInsertionEffect&&o.useInsertionEffect,Et=St||function(t){return t()},$t=(St||n.useLayoutEffect,{}.hasOwnProperty),Ct=n.createContext("undefined"!=typeof HTMLElement?it({key:"css"}):null);Ct.Provider;var Nt=function(t){return(0,n.forwardRef)((function(e,r){var a=(0,n.useContext)(Ct);return t(e,a,r)}))};var Ot=n.createContext({});var _t="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",At=function(t){var e=t.cache,r=t.serialized,a=t.isStringTag;return lt(e,r,a),Et((function(){return ft(e,r,a)})),null};var zt=Nt((function(t,e,r){var a=t.css;"string"==typeof a&&void 0!==e.registered[a]&&(a=e.registered[a]);var o=t[_t],s=[a],i="";"string"==typeof t.className?i=ct(e.registered,s,t.className):null!=t.className&&(i=t.className+" ");var c=kt(s,void 0,n.useContext(Ot));i+=e.key+"-"+c.name;var l={};for(var f in t)$t.call(t,f)&&"css"!==f&&f!==_t&&(l[f]=t[f]);return l.ref=r,l.className=i,n.createElement(n.Fragment,null,n.createElement(At,{cache:e,serialized:c,isStringTag:"string"==typeof o}),n.createElement(o,l))})),jt=(r(434),r(5706),a.Fragment);function Vt(t,e,r){return $t.call(e,"css")?a.jsx(zt,function(t,e){var r={};for(var a in e)$t.call(e,a)&&(r[a]=e[a]);return r[_t]=t,r}(t,e),r):a.jsx(t,e,r)}function Mt(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return kt(e)}var Pt=function(){var t=Mt.apply(void 0,arguments),e="animation-"+t.name;return{name:e,styles:"@keyframes "+e+"{"+t.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},Yt=function t(e){for(var r=e.length,a=0,n="";a<r;a++){var o=e[a];if(null!=o){var s=void 0;switch(typeof o){case"boolean":break;case"object":if(Array.isArray(o))s=t(o);else for(var i in s="",o)o[i]&&i&&(s&&(s+=" "),s+=i);break;default:s=o}s&&(n&&(n+=" "),n+=s)}}return n};var Xt=function(t){var e=t.cache,r=t.serializedArr;return Et((function(){for(var t=0;t<r.length;t++)ft(e,r[t],!1)})),null},It=Nt((function(t,e){var r=[],a=function(){for(var t=arguments.length,a=new Array(t),n=0;n<t;n++)a[n]=arguments[n];var o=kt(a,e.registered);return r.push(o),lt(e,o,!1),e.key+"-"+o.name},o={css:a,cx:function(){for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return function(t,e,r){var a=[],n=ct(t,a,r);return a.length<2?r:n+e(a)}(e.registered,a,Yt(r))},theme:n.useContext(Ot)},s=t.children(o);return!0,n.createElement(n.Fragment,null,n.createElement(Xt,{cache:e,serializedArr:r}),s)}));var Rt=Object.defineProperty,Tt=(t,e,r)=>(((t,e,r)=>{e in t?Rt(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r})(t,"symbol"!=typeof e?e+"":e,r),r),Ft=new Map,qt=new WeakMap,Lt=0,Dt=void 0;function Wt(t){return Object.keys(t).sort().filter((e=>void 0!==t[e])).map((e=>{return`${e}_${"root"===e?(r=t.root,r?(qt.has(r)||(Lt+=1,qt.set(r,Lt.toString())),qt.get(r)):"0"):t[e]}`;var r})).toString()}function Gt(t,e){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:Dt;if(void 0===window.IntersectionObserver&&void 0!==a){const n=t.getBoundingClientRect();return e(a,{isIntersecting:a,target:t,intersectionRatio:"number"==typeof r.threshold?r.threshold:0,time:0,boundingClientRect:n,intersectionRect:n,rootBounds:n}),()=>{}}const{id:n,observer:o,elements:s}=function(t){let e=Wt(t),r=Ft.get(e);if(!r){const a=new Map;let n;const o=new IntersectionObserver((e=>{e.forEach((e=>{var r;const o=e.isIntersecting&&n.some((t=>e.intersectionRatio>=t));t.trackVisibility&&void 0===e.isVisible&&(e.isVisible=o),null==(r=a.get(e.target))||r.forEach((t=>{t(o,e)}))}))}),t);n=o.thresholds||(Array.isArray(t.threshold)?t.threshold:[t.threshold||0]),r={id:e,observer:o,elements:a},Ft.set(e,r)}return r}(r);let i=s.get(t)||[];return s.has(t)||s.set(t,i),i.push(e),o.observe(t),function(){i.splice(i.indexOf(e),1),0===i.length&&(s.delete(t),o.unobserve(t)),0===s.size&&(o.disconnect(),Ft.delete(n))}}var Bt=class extends n.Component{constructor(t){super(t),Tt(this,"node",null),Tt(this,"_unobserveCb",null),Tt(this,"handleNode",(t=>{this.node&&(this.unobserve(),t||this.props.triggerOnce||this.props.skip||this.setState({inView:!!this.props.initialInView,entry:void 0})),this.node=t||null,this.observeNode()})),Tt(this,"handleChange",((t,e)=>{t&&this.props.triggerOnce&&this.unobserve(),function(t){return"function"!=typeof t.children}(this.props)||this.setState({inView:t,entry:e}),this.props.onChange&&this.props.onChange(t,e)})),this.state={inView:!!t.initialInView,entry:void 0}}componentDidUpdate(t){t.rootMargin===this.props.rootMargin&&t.root===this.props.root&&t.threshold===this.props.threshold&&t.skip===this.props.skip&&t.trackVisibility===this.props.trackVisibility&&t.delay===this.props.delay||(this.unobserve(),this.observeNode())}componentWillUnmount(){this.unobserve(),this.node=null}observeNode(){if(!this.node||this.props.skip)return;const{threshold:t,root:e,rootMargin:r,trackVisibility:a,delay:n,fallbackInView:o}=this.props;this._unobserveCb=Gt(this.node,this.handleChange,{threshold:t,root:e,rootMargin:r,trackVisibility:a,delay:n},o)}unobserve(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)}render(){const{children:t}=this.props;if("function"==typeof t){const{inView:e,entry:r}=this.state;return t({inView:e,entry:r,ref:this.handleNode})}const{as:e,triggerOnce:r,threshold:a,root:o,rootMargin:s,onChange:i,skip:c,trackVisibility:l,delay:f,initialInView:m,fallbackInView:d,...p}=this.props;return n.createElement(e||"div",{ref:this.handleNode,...p},t)}};function Ht(){let{threshold:t,delay:e,trackVisibility:r,rootMargin:a,root:o,triggerOnce:s,skip:i,initialInView:c,fallbackInView:l,onChange:f}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};var m;const[d,p]=n.useState(null),u=n.useRef(),[y,h]=n.useState({inView:!!c,entry:void 0});u.current=f,n.useEffect((()=>{if(i||!d)return;let n;return n=Gt(d,((t,e)=>{h({inView:t,entry:e}),u.current&&u.current(t,e),e.isIntersecting&&s&&n&&(n(),n=void 0)}),{root:o,rootMargin:a,threshold:t,trackVisibility:r,delay:e},l),()=>{n&&n()}}),[Array.isArray(t)?t.toString():t,d,o,a,s,i,r,l,e]);const g=null==(m=y.entry)?void 0:m.target,b=n.useRef();d||!g||s||i||b.current===g||(b.current=g,h({inView:!!c,entry:void 0}));const v=[p,y.inView,y.entry];return v.ref=v[0],v.inView=v[1],v.entry=v[2],v}var Ut=r(4946);Pt`
  from,
  20%,
  53%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0);
  }

  40%,
  43% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -30px, 0) scaleY(1.1);
  }

  70% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -15px, 0) scaleY(1.05);
  }

  80% {
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -4px, 0) scaleY(1.02);
  }
`,Pt`
  from,
  50%,
  to {
    opacity: 1;
  }

  25%,
  75% {
    opacity: 0;
  }
`,Pt`
  0% {
    transform: translateX(0);
  }

  6.5% {
    transform: translateX(-6px) rotateY(-9deg);
  }

  18.5% {
    transform: translateX(5px) rotateY(7deg);
  }

  31.5% {
    transform: translateX(-3px) rotateY(-5deg);
  }

  43.5% {
    transform: translateX(2px) rotateY(3deg);
  }

  50% {
    transform: translateX(0);
  }
`,Pt`
  0% {
    transform: scale(1);
  }

  14% {
    transform: scale(1.3);
  }

  28% {
    transform: scale(1);
  }

  42% {
    transform: scale(1.3);
  }

  70% {
    transform: scale(1);
  }
`,Pt`
  from,
  11.1%,
  to {
    transform: translate3d(0, 0, 0);
  }

  22.2% {
    transform: skewX(-12.5deg) skewY(-12.5deg);
  }

  33.3% {
    transform: skewX(6.25deg) skewY(6.25deg);
  }

  44.4% {
    transform: skewX(-3.125deg) skewY(-3.125deg);
  }

  55.5% {
    transform: skewX(1.5625deg) skewY(1.5625deg);
  }

  66.6% {
    transform: skewX(-0.78125deg) skewY(-0.78125deg);
  }

  77.7% {
    transform: skewX(0.390625deg) skewY(0.390625deg);
  }

  88.8% {
    transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
  }
`,Pt`
  from {
    transform: scale3d(1, 1, 1);
  }

  50% {
    transform: scale3d(1.05, 1.05, 1.05);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`,Pt`
  from {
    transform: scale3d(1, 1, 1);
  }

  30% {
    transform: scale3d(1.25, 0.75, 1);
  }

  40% {
    transform: scale3d(0.75, 1.25, 1);
  }

  50% {
    transform: scale3d(1.15, 0.85, 1);
  }

  65% {
    transform: scale3d(0.95, 1.05, 1);
  }

  75% {
    transform: scale3d(1.05, 0.95, 1);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`,Pt`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`,Pt`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`,Pt`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(0, -10px, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(0, 10px, 0);
  }
`,Pt`
  20% {
    transform: rotate3d(0, 0, 1, 15deg);
  }

  40% {
    transform: rotate3d(0, 0, 1, -10deg);
  }

  60% {
    transform: rotate3d(0, 0, 1, 5deg);
  }

  80% {
    transform: rotate3d(0, 0, 1, -5deg);
  }

  to {
    transform: rotate3d(0, 0, 1, 0deg);
  }
`,Pt`
  from {
    transform: scale3d(1, 1, 1);
  }

  10%,
  20% {
    transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
  }

  30%,
  50%,
  70%,
  90% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
  }

  40%,
  60%,
  80% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`,Pt`
  from {
    transform: translate3d(0, 0, 0);
  }

  15% {
    transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
  }

  30% {
    transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
  }

  45% {
    transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
  }

  60% {
    transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
  }

  75% {
    transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,Pt`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`,Pt`
  from {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Pt`
  from {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Pt`
  from {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Pt`
  from {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;const Zt=Pt`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;Pt`
  from {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Pt`
  from {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Pt`
  from {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Pt`
  from {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Pt`
  from {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Pt`
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Pt`
  from {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;function Jt(t,e){return r=>r?t():e()}function Kt(t){return Jt(t,(()=>null))}function Qt(t){return Kt((()=>({opacity:0})))(t)}const te=t=>{const{cascade:e=!1,damping:r=.5,delay:a=0,duration:o=1e3,fraction:s=0,keyframes:i=Zt,triggerOnce:c=!1,className:l,style:f,childClassName:m,childStyle:d,children:p,onVisibilityChange:u}=t,y=(0,n.useMemo)((()=>function(t){let{duration:e=1e3,delay:r=0,timingFunction:a="ease",keyframes:n=Zt,iterationCount:o=1}=t;return Mt`
    animation-duration: ${e}ms;
    animation-timing-function: ${a};
    animation-delay: ${r}ms;
    animation-name: ${n};
    animation-direction: normal;
    animation-fill-mode: both;
    animation-iteration-count: ${o};

    @media (prefers-reduced-motion: reduce) {
      animation: none;
    }
  `}({keyframes:i,duration:o})),[o,i]);return null==p?null:"string"==typeof(h=p)||"number"==typeof h||"boolean"==typeof h?Vt(re,{...t,animationStyles:y,children:String(p)}):(0,Ut.isFragment)(p)?Vt(ae,{...t,animationStyles:y}):Vt(jt,{children:n.Children.map(p,((i,p)=>{if(!(0,n.isValidElement)(i))return null;const h=a+(e?p*o*r:0);switch(i.type){case"ol":case"ul":return Vt(It,{children:e=>{let{cx:r}=e;return Vt(i.type,{...i.props,className:r(l,i.props.className),style:Object.assign({},f,i.props.style),children:Vt(te,{...t,children:i.props.children})})}});case"li":return Vt(Bt,{threshold:s,triggerOnce:c,onChange:u,children:t=>{let{inView:e,ref:r}=t;return Vt(It,{children:t=>{let{cx:a}=t;return Vt(i.type,{...i.props,ref:r,className:a(m,i.props.className),css:Kt((()=>y))(e),style:Object.assign({},d,i.props.style,Qt(!e),{animationDelay:h+"ms"})})}})}});default:return Vt(Bt,{threshold:s,triggerOnce:c,onChange:u,children:t=>{let{inView:e,ref:r}=t;return Vt("div",{ref:r,className:l,css:Kt((()=>y))(e),style:Object.assign({},f,Qt(!e),{animationDelay:h+"ms"}),children:Vt(It,{children:t=>{let{cx:e}=t;return Vt(i.type,{...i.props,className:e(m,i.props.className),style:Object.assign({},d,i.props.style)})}})})}})}}))});var h},ee={display:"inline-block",whiteSpace:"pre"},re=t=>{const{animationStyles:e,cascade:r=!1,damping:a=.5,delay:n=0,duration:o=1e3,fraction:s=0,triggerOnce:i=!1,className:c,style:l,children:f,onVisibilityChange:m}=t,{ref:d,inView:p}=Ht({triggerOnce:i,threshold:s,onChange:m});return Jt((()=>Vt("div",{ref:d,className:c,style:Object.assign({},l,ee),children:f.split("").map(((t,r)=>Vt("span",{css:Kt((()=>e))(p),style:{animationDelay:n+r*o*a+"ms"},children:t},r)))})),(()=>Vt(ae,{...t,children:f})))(r)},ae=t=>{const{animationStyles:e,fraction:r=0,triggerOnce:a=!1,className:n,style:o,children:s,onVisibilityChange:i}=t,{ref:c,inView:l}=Ht({triggerOnce:a,threshold:r,onChange:i});return Vt("div",{ref:c,className:n,css:Kt((()=>e))(l),style:Object.assign({},o,Qt(!l)),children:s})};Pt`
  from,
  20%,
  40%,
  60%,
  80%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  20% {
    transform: scale3d(1.1, 1.1, 1.1);
  }

  40% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  60% {
    opacity: 1;
    transform: scale3d(1.03, 1.03, 1.03);
  }

  80% {
    transform: scale3d(0.97, 0.97, 0.97);
  }

  to {
    opacity: 1;
    transform: scale3d(1, 1, 1);
  }
`,Pt`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(0, -3000px, 0) scaleY(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, 25px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, -10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, 5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,Pt`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(-3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(-10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,Pt`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(-25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(-5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,Pt`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(0, 3000px, 0) scaleY(5);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, 10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,Pt`
  20% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  50%,
  55% {
    opacity: 1;
    transform: scale3d(1.1, 1.1, 1.1);
  }

  to {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }
`,Pt`
  20% {
    transform: translate3d(0, 10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0) scaleY(3);
  }
`,Pt`
  20% {
    opacity: 1;
    transform: translate3d(20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0) scaleX(2);
  }
`,Pt`
  20% {
    opacity: 1;
    transform: translate3d(-20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0) scaleX(2);
  }
`,Pt`
  20% {
    transform: translate3d(0, -10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, 20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0) scaleY(3);
  }
`;Pt`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`,Pt`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }
`,Pt`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }
`,Pt`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
`,Pt`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }
`,Pt`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
`,Pt`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }
`,Pt`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
`,Pt`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }
`,Pt`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }
`,Pt`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }
`,Pt`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
`,Pt`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }
`;Pt`
  from {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg);
    animation-timing-function: ease-out;
  }

  40% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -190deg);
    animation-timing-function: ease-out;
  }

  50% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -170deg);
    animation-timing-function: ease-in;
  }

  80% {
    transform: perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)
      rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }

  to {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }
`,Pt`
  from {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`,Pt`
  from {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`,Pt`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    opacity: 0;
  }
`,Pt`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    opacity: 0;
  }
`;Pt`
  0% {
    animation-timing-function: ease-in-out;
  }

  20%,
  60% {
    transform: rotate3d(0, 0, 1, 80deg);
    animation-timing-function: ease-in-out;
  }

  40%,
  80% {
    transform: rotate3d(0, 0, 1, 60deg);
    animation-timing-function: ease-in-out;
    opacity: 1;
  }

  to {
    transform: translate3d(0, 700px, 0);
    opacity: 0;
  }
`,Pt`
  from {
    opacity: 0;
    transform: scale(0.1) rotate(30deg);
    transform-origin: center bottom;
  }

  50% {
    transform: rotate(-10deg);
  }

  70% {
    transform: rotate(3deg);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
`,Pt`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Pt`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
  }
`;Pt`
  from {
    transform: rotate3d(0, 0, 1, -200deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,Pt`
  from {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,Pt`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,Pt`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,Pt`
  from {
    transform: rotate3d(0, 0, 1, -90deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,Pt`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 200deg);
    opacity: 0;
  }
`,Pt`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }
`,Pt`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`,Pt`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`,Pt`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 90deg);
    opacity: 0;
  }
`;Pt`
  from {
    transform: translate3d(0, -100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,Pt`
  from {
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,Pt`
  from {
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,Pt`
  from {
    transform: translate3d(0, 100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,Pt`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, 100%, 0);
  }
`,Pt`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(-100%, 0, 0);
  }
`,Pt`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(100%, 0, 0);
  }
`,Pt`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, -100%, 0);
  }
`;Pt`
  from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  50% {
    opacity: 1;
  }
`,Pt`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,Pt`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,Pt`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,Pt`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,Pt`
  from {
    opacity: 1;
  }

  50% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  to {
    opacity: 0;
  }
`,Pt`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,Pt`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(-2000px, 0, 0);
  }
`,Pt`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(2000px, 0, 0);
  }
`,Pt`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`},1574:function(t,e){"use strict";var r,a=Symbol.for("react.element"),n=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),l=Symbol.for("react.context"),f=Symbol.for("react.server_context"),m=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),p=Symbol.for("react.suspense_list"),u=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),h=Symbol.for("react.offscreen");function g(t){if("object"==typeof t&&null!==t){var e=t.$$typeof;switch(e){case a:switch(t=t.type){case o:case i:case s:case d:case p:return t;default:switch(t=t&&t.$$typeof){case f:case l:case m:case y:case u:case c:return t;default:return e}}case n:return e}}}r=Symbol.for("react.module.reference"),e.isFragment=function(t){return g(t)===o}},4946:function(t,e,r){"use strict";t.exports=r(1574)},165:function(t,e){"use strict";var r="function"==typeof Symbol&&Symbol.for,a=r?Symbol.for("react.element"):60103,n=r?Symbol.for("react.portal"):60106,o=r?Symbol.for("react.fragment"):60107,s=r?Symbol.for("react.strict_mode"):60108,i=r?Symbol.for("react.profiler"):60114,c=r?Symbol.for("react.provider"):60109,l=r?Symbol.for("react.context"):60110,f=r?Symbol.for("react.async_mode"):60111,m=r?Symbol.for("react.concurrent_mode"):60111,d=r?Symbol.for("react.forward_ref"):60112,p=r?Symbol.for("react.suspense"):60113,u=r?Symbol.for("react.suspense_list"):60120,y=r?Symbol.for("react.memo"):60115,h=r?Symbol.for("react.lazy"):60116,g=r?Symbol.for("react.block"):60121,b=r?Symbol.for("react.fundamental"):60117,v=r?Symbol.for("react.responder"):60118,x=r?Symbol.for("react.scope"):60119;function w(t){if("object"==typeof t&&null!==t){var e=t.$$typeof;switch(e){case a:switch(t=t.type){case f:case m:case o:case i:case s:case p:return t;default:switch(t=t&&t.$$typeof){case l:case d:case h:case y:case c:return t;default:return e}}case n:return e}}}function k(t){return w(t)===m}e.AsyncMode=f,e.ConcurrentMode=m,e.ContextConsumer=l,e.ContextProvider=c,e.Element=a,e.ForwardRef=d,e.Fragment=o,e.Lazy=h,e.Memo=y,e.Portal=n,e.Profiler=i,e.StrictMode=s,e.Suspense=p,e.isAsyncMode=function(t){return k(t)||w(t)===f},e.isConcurrentMode=k,e.isContextConsumer=function(t){return w(t)===l},e.isContextProvider=function(t){return w(t)===c},e.isElement=function(t){return"object"==typeof t&&null!==t&&t.$$typeof===a},e.isForwardRef=function(t){return w(t)===d},e.isFragment=function(t){return w(t)===o},e.isLazy=function(t){return w(t)===h},e.isMemo=function(t){return w(t)===y},e.isPortal=function(t){return w(t)===n},e.isProfiler=function(t){return w(t)===i},e.isStrictMode=function(t){return w(t)===s},e.isSuspense=function(t){return w(t)===p},e.isValidElementType=function(t){return"string"==typeof t||"function"==typeof t||t===o||t===m||t===i||t===s||t===p||t===u||"object"==typeof t&&null!==t&&(t.$$typeof===h||t.$$typeof===y||t.$$typeof===c||t.$$typeof===l||t.$$typeof===d||t.$$typeof===b||t.$$typeof===v||t.$$typeof===x||t.$$typeof===g)},e.typeOf=w},8812:function(t,e,r){"use strict";t.exports=r(165)},3161:function(t,e,r){"use strict";r.d(e,{Z:function(){return l}});var a=r(7294),n=r(1082);var o=()=>{const{0:t,1:e}=(0,a.useState)(!1);return a.createElement("nav",{className:"bg-transperant"},a.createElement("div",{className:"max-w-7xl mx-auto px-8 py-5"},a.createElement("div",{className:"flex items-center justify-between h-16"},a.createElement("div",{className:"w-full justify-between flex items-center "},a.createElement("a",{href:"https://abhinavmanoj.github.io/Protfolio-/",className:"text-white flex-shrink-0 font-poppins"},"Home"),a.createElement("div",{className:"hidden md:block"},a.createElement("div",{className:"ml-10 flex items-baseline space-x-4"},a.createElement(n.Link,{className:"text-white opacity-50 hover:opacity-100 px-3 py-2 rounded-md text-sm font-medium font-poppins",to:"/about"},"About"),a.createElement(n.Link,{className:"text-white opacity-50 hover:opacity-100 px-3 py-2 rounded-md text-sm font-medium font-poppins",to:"/education"},"Education"),a.createElement(n.Link,{className:"text-white opacity-50 hover:opacity-100 px-3 py-2 rounded-md text-sm font-medium font-poppins",to:"/work"},"Work"),a.createElement(n.Link,{className:"text-white opacity-50 hover:opacity-100 px-3 py-2 rounded-md text-sm font-medium font-poppins",to:"/projects"},"Projects"),a.createElement(n.Link,{className:"text-white opacity-50 hover:opacity-100 px-3 py-2 rounded-md text-sm font-medium font-poppins",to:"/contact"},"Contact")))),a.createElement("div",{className:"-mr-2 flex md:hidden"},a.createElement("button",{onClick:()=>e(!t),className:"text-gray-800 dark:text-white hover:text-gray-300 inline-flex items-center justify-center p-2 rounded-md focus:outline-none"},a.createElement("svg",{width:"20",height:"20",fill:"white",className:"h-8 w-8",viewBox:"0 0 1792 1792",xmlns:"http://www.w3.org/2000/svg"},a.createElement("path",{d:"M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z"})))))),t&&a.createElement("div",{className:"md:hidden"},a.createElement("div",{className:"md-px-2 pt-2 pb-3 space-y-1 sm:px-3"},a.createElement("a",{className:"text-gray-300 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium",href:"/"},"Home"),a.createElement("a",{className:"text-gray-800 dark:text-white block px-3 py-2 rounded-md text-base font-medium",href:"/about"},"About"),a.createElement("a",{className:"text-gray-300 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium",href:"/education"},"Education"),a.createElement("a",{className:"text-gray-300 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium",href:"/work"},"Work"))))};var s=t=>{let{placeholder:e,type:r,name:n}=t;return a.createElement("input",{placeholder:e,type:r,name:n,className:"px-2 py-2 mt-2 w-full bg-white bg-opacity-20 border-transparent flex-1 appearance-none text-white font-poppins focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent sm:width-full md:width-full xxs:text-sm"})};var i=t=>{let{title:e,colorClass:r,textColor:n,type:o,marginClass:s}=t;return a.createElement("button",{type:o,className:`${r} ${n} ${s} px-3 mt-3 py-2 ml-1 rounded-lg text-sm transform scale-100 transition hover:scale-110 active:scal\n      -95 focus:outline-none focus:ring-1 focus:ring-offset-1 sm:width-full md:width-full lg:width-full`},e)};var c=()=>a.createElement("div",{className:"max-w-7xl mx-auto p-20 mt-10 bg-lightblack rounded-xl sm:grid-flow-row"},a.createElement("div",{className:"grid grid-cols-2 xxs:grid-cols-1 lg:grid-cols-2"},a.createElement("div",null,a.createElement("h1",{className:"text-white text-4xl text-bold"},"Send me your thoughts/opprtunities"),a.createElement("p",{className:"text-white text-sm mt-5 opacity-50"},"I am always looking forward to learn, teach new techs! If you have any opportunities suited for me, or you simply want to connect with me, send me a message.")),a.createElement("div",{className:"px-20"},a.createElement("form",{action:"https://formsubmit.co/3f272500a4cd189cbe16187ff6c039a2",method:"POST"},a.createElement(s,{placeholder:"FullName",type:"text",name:"fullname"}),a.createElement("br",null),a.createElement(s,{placeholder:"Email",type:"email",name:"email"}),a.createElement("br",null),a.createElement(s,{placeholder:"Subject",type:"text",name:"subject"}),a.createElement("br",null),a.createElement("input",{className:"h-24 w-full px-2 py-2 mt-2 bg-white bg-opacity-20 border-transparent flex-3 appearance-none text-white font-poppins focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent sm:width-full md:width-full xxs:text-sm",placeholder:"Message",type:"text",name:"msg"}),a.createElement("br",null),a.createElement(i,{colorClass:"bg-gradient-to-r from-blue-300 to-green-400 ",title:"Send Message",textColor:"text-white",type:"submit",marginClass:"ml-1"})))));var l=t=>{let{children:e}=t;return a.createElement("div",null,a.createElement(o,null),e,a.createElement(c,null))}},434:function(t){function e(){return t.exports=e=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(t[a]=r[a])}return t},t.exports.__esModule=!0,t.exports.default=t.exports,e.apply(this,arguments)}t.exports=e,t.exports.__esModule=!0,t.exports.default=t.exports}}]);
//# sourceMappingURL=e6221c9b7ce047116f293d2675defebb160274b7-49cddfead6bf3efe5b51.js.map