(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{108:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),i=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var b=i.a.createContext({}),p=function(e){var t=i.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return i.a.createElement(b.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,m=u["".concat(c,".").concat(d)]||u[d]||s[d]||o;return n?i.a.createElement(m,a(a({ref:t},b),{},{components:n})):i.a.createElement(m,a({ref:t},b))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=d;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:r,c[1]=a;for(var b=2;b<o;b++)c[b]=n[b];return i.a.createElement.apply(null,c)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},91:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return a})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(4),i=n(10),o=(n(0),n(108)),c={id:"gitverbinden",title:"Domain mit Git-Repository verbinden"},a={unversionedId:"webspace/gitverbinden",id:"webspace/gitverbinden",isDocsHomePage:!1,title:"Domain mit Git-Repository verbinden",description:"Schritt 1",source:"@site/docs/webspace/gitverbinden.md",slug:"/webspace/gitverbinden",permalink:"/en/docs/webspace/gitverbinden",editUrl:"https://github.com/PuhHosting/FAQ/edit/master/docs/webspace/gitverbinden.md",version:"current",lastUpdatedBy:"Alex G",lastUpdatedAt:1620058706,formattedLastUpdatedAt:"5/3/2021",sidebar:"someSidebar",previous:{title:"Nextcloud Login Fehler beheben",permalink:"/en/docs/webspace/NextcloudLoginFehler"},next:{title:"NodeJS beantragen",permalink:"/en/docs/webspace/nodejs"}},l=[],b={toc:l};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Schritt 1")),Object(o.b)("p",null,'Klicke auf "Git"\n',Object(o.b)("img",{parentName:"p",src:"https://screen.r-it.link/Zono0/ROVeLAcu18.png/raw",alt:null})),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Schritt 2")),Object(o.b)("p",null,"Hohle dir von deinem GitHub-Repository den SSH-Link\n",Object(o.b)("img",{parentName:"p",src:"https://screen.r-it.link/Zono0/TOGOjihi97.png/raw",alt:null})),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Schritt 3")),Object(o.b)("p",null,"F\xfcge diesen in Plesk ein\n",Object(o.b)("img",{parentName:"p",src:"https://screen.r-it.link/Zono0/NOnAGiji09.png/raw",alt:null})),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Schritt 4")),Object(o.b)("p",null,"Kopiere den SSH-Key vom Webserver (1) und f\xfcge ihn in den Bereich f\xfcr SSH-Keys in Github ein (2). Klicke nun in Plesk auf Ok.\n",Object(o.b)("img",{parentName:"p",src:"https://screen.r-it.link/Zono0/FOwUHaBA43.png/raw",alt:null}),"(1)\n",Object(o.b)("img",{parentName:"p",src:"https://screen.r-it.link/Zono0/heBaKIxe62.png/raw",alt:null}),"(2)"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Schritt 5 ")),Object(o.b)("p",null,"Gehe in den Repositoryeinstellungen\n",Object(o.b)("img",{parentName:"p",src:"https://screen.r-it.link/Zono0/jILEjEdo26.png/raw",alt:null})),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Schritt 6")),Object(o.b)("p",null,"Kopiere dir die Webhook-URL\n",Object(o.b)("img",{parentName:"p",src:"https://screen.r-it.link/Zono0/XItegUhu13.png/raw",alt:null})),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Schritt 7")),Object(o.b)("p",null,"F\xfcge diese in Github ein, damit Plesk informiert wird, wenn Du einen Push machst\n",Object(o.b)("img",{parentName:"p",src:"https://screen.r-it.link/Zono0/riWoGEdA22.png/raw",alt:null}),"\n",Object(o.b)("img",{parentName:"p",src:"https://screen.r-it.link/Zono0/roVuGELo58.png/raw",alt:null})),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Fertig nun kannst du auf deinem GitHub reposirtory arbeiten und immer, wennd Du entwas pushst, dann wird deine Website auch aktualisiert!")))}p.isMDXComponent=!0}}]);