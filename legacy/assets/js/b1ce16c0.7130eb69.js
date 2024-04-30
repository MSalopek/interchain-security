"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7652],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),h=a,m=d["".concat(s,".").concat(h)]||d[h]||p[h]||o;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},8110:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:2,title:"ADR Template"},i="ADR {ADR-NUMBER}:",l={unversionedId:"adrs/adr-template",id:"version-v2.0.0/adrs/adr-template",title:"ADR Template",description:"Changelog",source:"@site/versioned_docs/version-v2.0.0/adrs/adr-template.md",sourceDirName:"adrs",slug:"/adrs/adr-template",permalink:"/interchain-security/legacy/v2.0.0/adrs/adr-template",draft:!1,tags:[],version:"v2.0.0",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"ADR Template"},sidebar:"tutorialSidebar",previous:{title:"ADRs",permalink:"/interchain-security/legacy/v2.0.0/adrs/intro"},next:{title:"Key Assignment",permalink:"/interchain-security/legacy/v2.0.0/adrs/adr-001-key-assignment"}},s={},c=[{value:"Changelog",id:"changelog",level:2},{value:"Status",id:"status",level:2},{value:"Context",id:"context",level:2},{value:"Decision",id:"decision",level:2},{value:"Consequences",id:"consequences",level:2},{value:"Positive",id:"positive",level:3},{value:"Negative",id:"negative",level:3},{value:"Neutral",id:"neutral",level:3},{value:"References",id:"references",level:2}],u={toc:c},d="wrapper";function p(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"adr-adr-number-title"},"ADR {ADR-NUMBER}: {TITLE}"),(0,a.kt)("h2",{id:"changelog"},"Changelog"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"{date}: {changelog}")),(0,a.kt)("h2",{id:"status"},"Status"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},'A decision may be "proposed" if it hasn\'t been agreed upon yet, or "accepted" once it is agreed upon. If a later ADR changes or reverses a decision, it may be marked as "deprecated" or "superseded" with a reference to its replacement.')),(0,a.kt)("p",null,"{Deprecated|Proposed|Accepted}"),(0,a.kt)("h2",{id:"context"},"Context"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"This section contains all the context one needs to understand the current state, and why there is a problem. It should be as succinct as possible and introduce the high level idea behind the solution. ")),(0,a.kt)("h2",{id:"decision"},"Decision"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"This section explains all of the details of the proposed solution, including implementation details.\nIt should also describe affects / corollary items that may need to be changed as a part of this.\nIf the proposed change will be large, please also indicate a way to do the change to maximize ease of review.\n(e.g. the optimal split of things to do between separate PR's)")),(0,a.kt)("h2",{id:"consequences"},"Consequences"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},'This section describes the consequences, after applying the decision. All consequences should be summarized here, not just the "positive" ones.')),(0,a.kt)("h3",{id:"positive"},"Positive"),(0,a.kt)("h3",{id:"negative"},"Negative"),(0,a.kt)("h3",{id:"neutral"},"Neutral"),(0,a.kt)("h2",{id:"references"},"References"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Are there any relevant PR comments, issues that led up to this, or articles referrenced for why we made the given design choice? If so link them here!")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"{reference link}")))}p.isMDXComponent=!0}}]);