(self.webpackChunkpuh_faq=self.webpackChunkpuh_faq||[]).push([[79],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(r),d=a,b=s["".concat(c,".").concat(d)]||s[d]||m[d]||i;return r?n.createElement(b,o(o({ref:t},u),{},{components:r})):n.createElement(b,o({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=s;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},7326:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return o},metadata:function(){return l},toc:function(){return c},default:function(){return u}});var n=r(2122),a=r(9756),i=(r(7294),r(3905)),o={id:"Webmail",title:"Webmail hinzuf\xfcgen"},l={unversionedId:"webspace/Webmail",id:"webspace/Webmail",isDocsHomePage:!1,title:"Webmail hinzuf\xfcgen",description:"Schritt 1",source:"@site/docs/webspace/Webmail.md",sourceDirName:"webspace",slug:"/webspace/Webmail",permalink:"/docs/webspace/Webmail",editUrl:"https://github.com/PuhHosting/FAQ/edit/master/docs/webspace/Webmail.md",version:"current",lastUpdatedBy:"Alex G",lastUpdatedAt:1620058542,formattedLastUpdatedAt:"3.5.2021",frontMatter:{id:"Webmail",title:"Webmail hinzuf\xfcgen"},sidebar:"someSidebar",previous:{title:"Zertifikat erstellen",permalink:"/docs/webspace/ZertifikatErstellen"},next:{title:"Nextcloud Login Fehler beheben",permalink:"/docs/webspace/NextcloudLoginFehler"}},c=[],p={toc:c};function u(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Schritt 1")),(0,i.kt)("p",null,"Gehe in deine DNS Einstellungen deiner Domain und f\xfcge folgende Eintr\xe4ge hinzu."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"Record"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Inhalt"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Priorit\xe4t"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"A"),(0,i.kt)("td",{parentName:"tr",align:"center"},"mail"),(0,i.kt)("td",{parentName:"tr",align:"center"},"IPv4 des Webhostes"),(0,i.kt)("td",{parentName:"tr",align:"center"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"A"),(0,i.kt)("td",{parentName:"tr",align:"center"},"webmail"),(0,i.kt)("td",{parentName:"tr",align:"center"},"IPv4 des Webhostes"),(0,i.kt)("td",{parentName:"tr",align:"center"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"MX"),(0,i.kt)("td",{parentName:"tr",align:"center"},"@"),(0,i.kt)("td",{parentName:"tr",align:"center"},"mail.DEINE.DOMAIN"),(0,i.kt)("td",{parentName:"tr",align:"center"},"1")))),(0,i.kt)("p",null,"Wichtig ist bei Cloudflare verwalteten Domains, dass du bei dem A Record die Wolke auf grau hast (Nur DNS)."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Schritt 2")),(0,i.kt)("p",null,"\xdcberpr\xfcfe, ob du im Browser Webmail aufrufen kannst\n",(0,i.kt)("img",{parentName:"p",src:"https://screen.magic-pics.tk/FOku9/LeNahugi08.png/raw",alt:null})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Fertig!")))}u.isMDXComponent=!0}}]);