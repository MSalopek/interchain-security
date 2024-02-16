"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5056],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(r),m=i,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||a;return r?n.createElement(f,o(o({ref:t},p),{},{components:r})):n.createElement(f,o({ref:t},p))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:i,o[1]=s;for(var c=2;c<a;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1990:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var n=r(7462),i=(r(7294),r(3905));const a={sidebar_position:6},o="Joining Stride",s={unversionedId:"validators/joining-stride",id:"validators/joining-stride",title:"Joining Stride",description:"Stride is the first consumer chain to perform the standalone to consumer changeover procedure and transition from a standalone validator set to using cosmoshub-4 validator set.",source:"@site/docs/validators/joining-stride.md",sourceDirName:"validators",slug:"/validators/joining-stride",permalink:"/interchain-security/legacy/validators/joining-stride",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Joining Neutron",permalink:"/interchain-security/legacy/validators/joining-neutron"},next:{title:"Frequently Asked Questions",permalink:"/interchain-security/legacy/faq"}},l={},c=[{value:"Note",id:"note",level:2},{value:"Resources",id:"resources",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...r}=e;return(0,i.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"joining-stride"},"Joining Stride"),(0,i.kt)("p",null,"Stride is the first consumer chain to perform the standalone to consumer changeover procedure and transition from a standalone validator set to using ",(0,i.kt)("inlineCode",{parentName:"p"},"cosmoshub-4")," validator set."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"stride-1")," network (mainnet) will perform a software upgrade and at height ",(0,i.kt)("inlineCode",{parentName:"p"},"4616678")," that will transition the network to using the Cosmos Hub's (",(0,i.kt)("inlineCode",{parentName:"p"},"cosmoshub-4"),") validator set."),(0,i.kt)("p",null," You can find instructions about the Stride consumer chain launch and joining the mainnet ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Stride-Labs/mainnet/tree/main/ics-instructions"},"here"),"."),(0,i.kt)("p",null," This ",(0,i.kt)("a",{parentName:"p",href:"https://app.excalidraw.com/l/9UFOCMAZLAI/5EVLj0WJcwt"},"Excalidraw graphic")," explains the timeline of Stride's changeover procedure."),(0,i.kt)("h2",{id:"note"},"Note"),(0,i.kt)("p",null,"Stride re-uses an existing ",(0,i.kt)("inlineCode",{parentName:"p"},"transfer")," channel to send consumer rewards to the provider chain, in order to preserve existing transfer IBC denom between ",(0,i.kt)("inlineCode",{parentName:"p"},"stride-1")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"cosmoshub-4"),"."),(0,i.kt)("h2",{id:"resources"},"Resources"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.stride.zone/docs"},"Stride docs")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://app.excalidraw.com/l/9UFOCMAZLAI/5EVLj0WJcwt"},"Changeover procedure timeline")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/Stride-Labs/mainnet/tree/main/ics-instructions"},"Changeover upgrade docs"))))}d.isMDXComponent=!0}}]);