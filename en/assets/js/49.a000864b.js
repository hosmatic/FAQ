"use strict";(self.webpackChunkpuh_faq=self.webpackChunkpuh_faq||[]).push([[49],{3649:function(e,n,t){t.d(n,{s:function(){return u},Z:function(){return a}});var r=t(7294),o=/{\w+}/g,i="{}";function u(e,n){var t=[],u=e.replace(o,(function(e){var o=e.substr(1,e.length-2),u=null==n?void 0:n[o];if(void 0!==u){var a=r.isValidElement(u)?u:String(u);return t.push(a),i}return e}));return 0===t.length?e:t.every((function(e){return"string"==typeof e}))?u.split(i).reduce((function(e,n,r){var o;return e.concat(n).concat(null!==(o=t[r])&&void 0!==o?o:"")}),""):u.split(i).reduce((function(e,n,o){return[].concat(e,[r.createElement(r.Fragment,{key:o},n,t[o])])}),[])}function a(e){var n=e.children,t=e.values;if("string"!=typeof n)throw console.warn("Illegal <Interpolate> children",n),new Error("The Docusaurus <Interpolate> component only accept simple string values");return u(n,t)}},6742:function(e,n,t){t.d(n,{Z:function(){return v}});var r=t(9756),o=t(7294),i=t(3727),u=t(2263),a=t(3919),c=t(412),l=(0,o.createContext)({collectLink:function(){}}),s=t(4996),f=t(8780),d=["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"];var v=function(e){var n,t,v=e.isNavLink,p=e.to,g=e.href,m=e.activeClassName,h=e.isActive,b=e["data-noBrokenLinkCheck"],w=e.autoAddBaseUrl,y=void 0===w||w,E=(0,r.Z)(e,d),C=(0,u.Z)().siteConfig,P=C.trailingSlash,k=C.baseUrl,S=(0,s.C)().withBaseUrl,Z=(0,o.useContext)(l),O=p||g,A=(0,a.Z)(O),M=null==O?void 0:O.replace("pathname://",""),U=void 0!==M?(t=M,y&&function(e){return e.startsWith("/")}(t)?S(t):t):void 0;U&&A&&(U=(0,f.applyTrailingSlash)(U,{trailingSlash:P,baseUrl:k}));var D,L=(0,o.useRef)(!1),N=v?i.OL:i.rU,_=c.Z.canUseIntersectionObserver;(0,o.useEffect)((function(){return!_&&A&&null!=U&&window.docusaurus.prefetch(U),function(){_&&D&&D.disconnect()}}),[U,_,A]);var j=null!==(n=null==U?void 0:U.startsWith("#"))&&void 0!==n&&n,x=!U||!A||j;return U&&A&&!j&&!b&&Z.collectLink(U),x?o.createElement("a",Object.assign({href:U},O&&!A&&{target:"_blank",rel:"noopener noreferrer"},E)):o.createElement(N,Object.assign({},E,{onMouseEnter:function(){L.current||null==U||(window.docusaurus.preload(U),L.current=!0)},innerRef:function(e){var n,t;_&&e&&A&&(n=e,t=function(){null!=U&&window.docusaurus.prefetch(U)},(D=new window.IntersectionObserver((function(e){e.forEach((function(e){n===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(D.unobserve(n),D.disconnect(),t())}))}))).observe(n))},to:U||""},v&&{isActive:h,activeClassName:m}))}},9052:function(e,n,t){t.d(n,{I:function(){return a},Z:function(){return c}});var r=t(7294),o=t(3649),i=t(4644);function u(e){var n,t=e.id,r=e.message;return null!==(n=i[null!=t?t:r])&&void 0!==n?n:r}function a(e,n){var t,r=e.message,i=null!==(t=u({message:r,id:e.id}))&&void 0!==t?t:r;return(0,o.s)(i,n)}function c(e){var n,t=e.children,i=e.id,a=e.values;if("string"!=typeof t)throw console.warn("Illegal <Translate> children",t),new Error("The Docusaurus <Translate> component only accept simple string values");var c=null!==(n=u({message:t,id:i}))&&void 0!==n?n:t;return r.createElement(o.Z,{values:a},c)}},3919:function(e,n,t){function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!r(e)}t.d(n,{b:function(){return r},Z:function(){return o}})},4996:function(e,n,t){t.d(n,{C:function(){return i},Z:function(){return u}});var r=t(2263),o=t(3919);function i(){var e=(0,r.Z)().siteConfig,n=(e=void 0===e?{}:e).baseUrl,t=void 0===n?"/":n,i=e.url;return{withBaseUrl:function(e,n){return function(e,n,t,r){var i=void 0===r?{}:r,u=i.forcePrependBaseUrl,a=void 0!==u&&u,c=i.absolute,l=void 0!==c&&c;if(!t)return t;if(t.startsWith("#"))return t;if((0,o.b)(t))return t;if(a)return n+t;var s=t.startsWith(n)?t:n+t.replace(/^\//,"");return l?e+s:s}(i,t,e,n)}}}function u(e,n){return void 0===n&&(n={}),(0,i().withBaseUrl)(e,n)}},1217:function(e,n,t){t.d(n,{Z:function(){return a}});var r=t(7294),o=t(9105),i=t(3018),u=t(4996);function a(e){var n=e.title,t=e.description,a=e.keywords,c=e.image,l=(0,i.LU)().image,s=(0,i.pe)(n),f=(0,u.Z)(c||l,{absolute:!0});return r.createElement(o.Z,null,n&&r.createElement("title",null,s),n&&r.createElement("meta",{property:"og:title",content:s}),t&&r.createElement("meta",{name:"description",content:t}),t&&r.createElement("meta",{property:"og:description",content:t}),a&&r.createElement("meta",{name:"keywords",content:Array.isArray(a)?a.join(","):a}),f&&r.createElement("meta",{property:"og:image",content:f}),f&&r.createElement("meta",{name:"twitter:image",content:f}))}},3783:function(e,n,t){var r=t(7294),o=t(412),i="desktop",u="mobile",a="ssr";function c(){return o.Z.canUseDOM?window.innerWidth>996?i:u:a}n.Z=function(){var e=(0,r.useState)((function(){return c()})),n=e[0],t=e[1];return(0,r.useEffect)((function(){if(o.Z.canUseDOM){return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e),clearTimeout(undefined)}}function e(){t(c())}}),[]),n}},3018:function(e,n,t){t.d(n,{pl:function(){return de},zF:function(){return T},HX:function(){return g},PO:function(){return H},L5:function(){return re},Cv:function(){return G},Cn:function(){return Q},kM:function(){return ue},WA:function(){return l},os:function(){return m},Mg:function(){return w},_f:function(){return s},bc:function(){return p},l5:function(){return d},nT:function(){return ve},uR:function(){return U},J:function(){return ie},be:function(){return pe},SL:function(){return S},g8:function(){return Y},D9:function(){return k},LU:function(){return o},pe:function(){return y}});var r=t(2263);function o(){return(0,r.Z)().siteConfig.themeConfig}var i="localStorage";function u(e){if(void 0===e&&(e=i),"undefined"==typeof window)throw new Error("Browser storage is not available on Node.js/Docusaurus SSR process.");if("none"===e)return null;try{return window[e]}catch(t){return n=t,a||(console.warn("Docusaurus browser storage is not available.\nPossible reasons: running Docusaurus in an iframe, in an incognito browser session, or using too strict browser privacy settings.",n),a=!0),null}var n}var a=!1;var c={get:function(){return null},set:function(){},del:function(){}};var l=function(e,n){if("undefined"==typeof window)return function(e){function n(){throw new Error('Illegal storage API usage for storage key "'+e+'".\nDocusaurus storage APIs are not supposed to be called on the server-rendering process.\nPlease only call storage APIs in effects and event handlers.')}return{get:n,set:n,del:n}}(e);var t=u(null==n?void 0:n.persistence);return null===t?c:{get:function(){return t.getItem(e)},set:function(n){return t.setItem(e,n)},del:function(){return t.removeItem(e)}}};function s(e){void 0===e&&(e=i);var n=u(e);if(!n)return[];for(var t=[],r=0;r<n.length;r+=1){var o=n.key(r);null!==o&&t.push(o)}return t}var f=t(5977);function d(){var e=(0,r.Z)(),n=e.siteConfig,t=n.baseUrl,o=n.url,i=e.i18n,u=i.defaultLocale,a=i.currentLocale,c=(0,f.TH)().pathname,l=a===u?t:t.replace("/"+a+"/","/"),s=c.replace(t,"");return{createUrl:function(e){var n=e.locale;return""+(e.fullyQualified?o:"")+function(e){return e===u?""+l:""+l+e+"/"}(n)+s}}}var v=/title=(["'])(.*?)\1/;function p(e){var n,t;return null!==(t=null===(n=null==e?void 0:e.match(v))||void 0===n?void 0:n[2])&&void 0!==t?t:""}var g="default";function m(e,n){return"docs-"+e+"-"+n}var h=t(907),b=!!h._r,w=function(e,n){var t=function(e){return!e||(null==e?void 0:e.endsWith("/"))?e:e+"/"};return t(e)===t(n)},y=function(e){var n=(0,r.Z)().siteConfig,t=void 0===n?{}:n,o=t.title,i=t.titleDelimiter,u=void 0===i?"|":i;return e&&e.trim().length?e.trim()+" "+u+" "+o:o},E=t(7294),C=["zero","one","two","few","many","other"];function P(e){return C.filter((function(n){return e.includes(n)}))}P(["one","other"]);function k(e){var n=(0,E.useRef)();return(0,E.useEffect)((function(){n.current=e})),n.current}function S(e){var n=(0,f.TH)(),t=k(n),r=(0,E.useRef)(!0);(0,E.useEffect)((function(){r.current?r.current=!1:e({location:n,previousLocation:t})}),[n])}var Z=t(9756),O=t(412),A=["collapsed"],M=["lazy"];function U(e){var n=e.initialState,t=(0,E.useState)(null!=n&&n),r=t[0],o=t[1],i=(0,E.useCallback)((function(){o((function(e){return!e}))}),[]);return{collapsed:r,setCollapsed:o,toggleCollapsed:i}}var D={display:"none",overflow:"hidden",height:"0px"},L={display:"block",overflow:"visible",height:"auto"};function N(e,n){var t=n?D:L;e.style.display=t.display,e.style.overflow=t.overflow,e.style.height=t.height}function _(e){var n=e.collapsibleRef,t=e.collapsed,r=e.animation,o=(0,E.useRef)(!1);(0,E.useEffect)((function(){var e,i=n.current;function u(){var e,n,t=i.scrollHeight;return{transition:"height "+(null!==(e=null==r?void 0:r.duration)&&void 0!==e?e:function(e){var n=e/36;return Math.round(10*(4+15*Math.pow(n,.25)+n/5))}(t))+"ms "+(null!==(n=null==r?void 0:r.easing)&&void 0!==n?n:"ease-in-out"),height:t+"px"}}function a(){var e=u();i.style.transition=e.transition,i.style.height=e.height}if(!o.current)return N(i,t),void(o.current=!0);return i.style.willChange="height",e=requestAnimationFrame((function(){t?(a(),requestAnimationFrame((function(){i.style.height=D.height,i.style.overflow=D.overflow}))):(i.style.display="block",requestAnimationFrame((function(){a()})))})),function(){return cancelAnimationFrame(e)}}),[n,t,r])}function j(e){if(!O.Z.canUseDOM)return e?D:L}function x(e){var n=e.as,t=void 0===n?"div":n,r=e.collapsed,o=e.children,i=e.animation,u=e.onCollapseTransitionEnd,a=e.className,c=e.disableSSRStyle,l=(0,E.useRef)(null);return _({collapsibleRef:l,collapsed:r,animation:i}),E.createElement(t,{ref:l,style:c?void 0:j(r),onTransitionEnd:function(e){if("height"===e.propertyName){var n=l.current,t=n.style.height;r||parseInt(t,10)!==n.scrollHeight||(N(n,!1),null==u||u(!1)),t===D.height&&(N(n,!0),null==u||u(!0))}},className:a},o)}function I(e){var n=e.collapsed,t=(0,Z.Z)(e,A),r=(0,E.useState)(!n),o=r[0],i=r[1];(0,E.useLayoutEffect)((function(){n||i(!0)}),[n]);var u=(0,E.useState)(n),a=u[0],c=u[1];return(0,E.useLayoutEffect)((function(){o&&c(n)}),[o,n]),o?E.createElement(x,Object.assign({},t,{collapsed:a})):null}function T(e){var n=e.lazy,t=(0,Z.Z)(e,M),r=n?I:x;return E.createElement(r,Object.assign({},t))}var R=t(6010),B="details_2Ziz",V="isClient_1Fil",W="collapsibleContent_3OHp",z=["summary","children"];function F(e){return!!e&&("SUMMARY"===e.tagName||F(e.parentElement))}function q(e,n){return!!e&&(e===n||q(e.parentElement,n))}var H=function(e){var n,t=e.summary,o=e.children,i=(0,Z.Z)(e,z),u=(0,r.Z)().isClient,a=(0,E.useRef)(null),c=U({initialState:!i.open}),l=c.collapsed,s=c.setCollapsed,f=(0,E.useState)(i.open),d=f[0],v=f[1];return E.createElement("details",Object.assign({},i,{ref:a,open:d,"data-collapsed":l,className:(0,R.Z)(B,(n={},n[V]=u,n),i.className),onMouseDown:function(e){F(e.target)&&e.detail>1&&e.preventDefault()},onClick:function(e){e.stopPropagation();var n=e.target;F(n)&&q(n,a.current)&&(e.preventDefault(),l?(s(!1),v(!0)):s(!0))}}),t,E.createElement(T,{lazy:!1,collapsed:l,disableSSRStyle:!0,onCollapseTransitionEnd:function(e){s(e),v(!e)}},E.createElement("div",{className:W},o)))};var J=(0,E.createContext)(null);function Q(e){var n=e.children;return E.createElement(J.Provider,{value:(0,E.useState)(null)},n)}function X(){var e=(0,E.useContext)(J);if(null===e)throw new Error("MobileSecondaryMenuProvider was not used correctly, context value is null");return e}function Y(){var e=X()[0];if(e){var n=e.component;return function(t){return E.createElement(n,Object.assign({},e.props,t))}}return function(){}}function G(e){var n,t=e.component,r=e.props,o=X()[1],i=(n=r,(0,E.useMemo)((function(){return n}),[].concat(Object.keys(n),Object.values(n))));return(0,E.useEffect)((function(){o({component:t,props:i})}),[o,t,i]),(0,E.useEffect)((function(){return function(){return o(null)}}),[o]),null}var K=function(e){return"docs-preferred-version-"+e},$={save:function(e,n,t){l(K(e),{persistence:n}).set(t)},read:function(e,n){return l(K(e),{persistence:n}).get()},clear:function(e,n){l(K(e),{persistence:n}).del()}};function ee(e){var n=e.pluginIds,t=e.versionPersistence,r=e.allDocsData;var o={};return n.forEach((function(e){o[e]=function(e){var n=$.read(e,t);return r[e].versions.some((function(e){return e.name===n}))?{preferredVersionName:n}:($.clear(e,t),{preferredVersionName:null})}(e)})),o}function ne(){var e=(0,h._r)(),n=o().docs.versionPersistence,t=(0,E.useMemo)((function(){return Object.keys(e)}),[e]),r=(0,E.useState)((function(){return function(e){var n={};return e.forEach((function(e){n[e]={preferredVersionName:null}})),n}(t)})),i=r[0],u=r[1];return(0,E.useEffect)((function(){u(ee({allDocsData:e,versionPersistence:n,pluginIds:t}))}),[e,n,t]),[i,(0,E.useMemo)((function(){return{savePreferredVersion:function(e,t){$.save(e,n,t),u((function(n){var r;return Object.assign({},n,((r={})[e]={preferredVersionName:t},r))}))}}}),[u])]}var te=(0,E.createContext)(null);function re(e){var n=e.children;return b?E.createElement(oe,null,n):E.createElement(E.Fragment,null,n)}function oe(e){var n=e.children,t=ne();return E.createElement(te.Provider,{value:t},n)}function ie(e){void 0===e&&(e="default");var n=(0,h.zh)(e),t=function(){var e=(0,E.useContext)(te);if(!e)throw new Error('Can\'t find docs preferred context, maybe you forgot to use the "DocsPreferredVersionContextProvider"?');return e}(),r=t[0],o=t[1],i=r[e].preferredVersionName;return{preferredVersion:i?n.versions.find((function(e){return e.name===i})):null,savePreferredVersionName:(0,E.useCallback)((function(n){o.savePreferredVersion(e,n)}),[o])}}var ue={page:{blogListPage:"blog-list-page",blogPostPage:"blog-post-page",blogTagsListPage:"blog-tags-list-page",blogTagsPostPage:"blog-tags-post-page",docPage:"doc-page",mdxPage:"mdx-page"},wrapper:{main:"main-wrapper",blogPages:"blog-wrapper",docPages:"docs-wrapper",mdxPages:"mdx-wrapper"}},ae=l("docusaurus.announcement.dismiss"),ce=l("docusaurus.announcement.id"),le=function(){return"true"===ae.get()},se=function(e){return ae.set(String(e))},fe=(0,E.createContext)(null),de=function(e){var n=e.children,t=function(){var e=o().announcementBar,n=(0,r.Z)().isClient,t=(0,E.useState)((function(){return!!n&&le()})),i=t[0],u=t[1];(0,E.useEffect)((function(){u(le())}),[]);var a=(0,E.useCallback)((function(){se(!0),u(!0)}),[]);return(0,E.useEffect)((function(){if(e){var n=e.id,t=ce.get();"annoucement-bar"===t&&(t="announcement-bar");var r=n!==t;ce.set(n),r&&se(!1),!r&&le()||u(!1)}}),[]),(0,E.useMemo)((function(){return{isClosed:i,close:a}}),[i])}();return E.createElement(fe.Provider,{value:t},n)},ve=function(){var e=(0,E.useContext)(fe);if(!e)throw new Error("useAnnouncementBar(): AnnouncementBar not found in React context: make sure to use the AnnouncementBarProvider on top of the tree");return e};function pe(){var e=(0,r.Z)().siteConfig.baseUrl;return(0,f.TH)().pathname.replace(e,"/")}},8802:function(e,n){Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e,n){var t=n.trailingSlash,r=n.baseUrl;if(e.startsWith("#"))return e;if(void 0===t)return e;var o,i=e.split(/[#?]/)[0],u="/"===i||i===r?i:(o=i,t?function(e){return e.endsWith("/")?e:e+"/"}(o):function(e){return e.endsWith("/")?e.slice(0,-1):e}(o));return e.replace(i,u)}},8780:function(e,n,t){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(n,"__esModule",{value:!0}),n.uniq=n.applyTrailingSlash=void 0;var o=t(8802);Object.defineProperty(n,"applyTrailingSlash",{enumerable:!0,get:function(){return r(o).default}});var i=t(9964);Object.defineProperty(n,"uniq",{enumerable:!0,get:function(){return r(i).default}})},9964:function(e,n){Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e){return Array.from(new Set(e))}},6010:function(e,n,t){function r(e){var n,t,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=r(e[n]))&&(o&&(o+=" "),o+=t);else for(n in e)e[n]&&(o&&(o+=" "),o+=n);return o}function o(){for(var e,n,t=0,o="";t<arguments.length;)(e=arguments[t++])&&(n=r(e))&&(o&&(o+=" "),o+=n);return o}t.d(n,{Z:function(){return o}})}}]);