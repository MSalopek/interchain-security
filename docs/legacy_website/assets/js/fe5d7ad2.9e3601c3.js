"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5863],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>v});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=l(n),h=r,v=u["".concat(c,".").concat(h)]||u[h]||p[h]||i;return n?o.createElement(v,a(a({ref:t},d),{},{components:n})):o.createElement(v,a({ref:t},d))}));function v(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:r,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},8636:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var o=n(7462),r=(n(7294),n(3905));const i={sidebar_position:1},a="Overview",s={unversionedId:"introduction/overview",id:"version-v2.0.0/introduction/overview",title:"Overview",description:"Replicated security (aka interchain security V1) is an open sourced IBC application which allows cosmos blockchains to lease their proof-of-stake security to one another.",source:"@site/versioned_docs/version-v2.0.0/introduction/overview.md",sourceDirName:"introduction",slug:"/introduction/overview",permalink:"/interchain-security/legacy/v2.0.0/introduction/overview",draft:!1,tags:[],version:"v2.0.0",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Interchain Security Docs",permalink:"/interchain-security/legacy/v2.0.0/"},next:{title:"Terminology",permalink:"/interchain-security/legacy/v2.0.0/introduction/terminology"}},c={},l=[{value:"Why Replicated Security?",id:"why-replicated-security",level:2},{value:"Core protocol",id:"core-protocol",level:2},{value:"Downtime Slashing",id:"downtime-slashing",level:3},{value:"Equivocation (Double Sign) Slashing",id:"equivocation-double-sign-slashing",level:3},{value:"Tokenomics and Rewards",id:"tokenomics-and-rewards",level:3}],d={toc:l},u="wrapper";function p(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"overview"},"Overview"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Replicated security (aka interchain security V1) is an open sourced IBC application which allows cosmos blockchains to lease their proof-of-stake security to one another."),(0,r.kt)("br",null),'Replicated security allows anyone to launch a "consumer" blockchain using the same validator set as the "provider" blockchain by creating a governance proposal. If the proposal is accepted, provider chain validators start validating the consumer chain as well. Consumer chains will therefore inherit the full security and decentralization of the provider.'),(0,r.kt)("h2",{id:"why-replicated-security"},"Why Replicated Security?"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Full provider security. At launch, consumer chains are secured by the full validator set and market cap of the provider chain."),(0,r.kt)("li",{parentName:"ul"},"Independent block-space. Transactions on consumer chains do not compete with any other applications. This means that there will be no unexpected congestion, and performance will generally be much better than on a shared smart contract platform such as Ethereum."),(0,r.kt)("li",{parentName:"ul"},"Projects keep majority of gas fees. Depending on configuration, these fees either go to the project\u2019s community DAO, or can be used in the protocol in other ways."),(0,r.kt)("li",{parentName:"ul"},"No validator search. Consumer chains do not have their own validator sets, and so do not need to find validators one by one. A governance vote will take place for a chain to get adopted by the provider validators which will encourage participation and signal strong buy-in into the project's long-term success."),(0,r.kt)("li",{parentName:"ul"},"Instant sovereignty. Consumers can run arbitrary app logic similar to standalone chains. At any time in the future, a consumer chain can elect to become a completely standalone chain, with its own validator set.")),(0,r.kt)("h2",{id:"core-protocol"},"Core protocol"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Protocol specification is available as ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/cosmos/ibc/blob/main/spec/app/ics-028-cross-chain-validation/overview_and_basic_concepts.md"},"ICS-028")," in the IBC repository.")),(0,r.kt)("p",null,"Once an IBC connection and proper channel is established between a provider and consumer chain, the provider will continually send validator set updates to the consumer over IBC. The consumer uses these validator set updates to update its own validator set in Comet. Thus, the provider validator set is effectively replicated on the consumer."),(0,r.kt)("p",null,"To ensure the security of the consumer chain, provider delegators cannot unbond their tokens until the unbonding periods of each consumer chain has passed. In practice this will not be noticeable to the provider delegators, since consumer chains will be configured to have a slightly shorter unbonding period than the provider."),(0,r.kt)("h3",{id:"downtime-slashing"},"Downtime Slashing"),(0,r.kt)("p",null,"If downtime is initiated by a validator on a consumer chain, a downtime packet will be relayed to the provider to jail that validator for a set amount of time. The validator who committed downtime will then miss out on staking rewards for the configured jailing period."),(0,r.kt)("h3",{id:"equivocation-double-sign-slashing"},"Equivocation (Double Sign) Slashing"),(0,r.kt)("p",null,"Evidence of equivocation must be submitted to provider governance and be voted on. This behavior is an extra safeguard before a validator is slashed, and may be replaced by a more automated system in the future."),(0,r.kt)("h3",{id:"tokenomics-and-rewards"},"Tokenomics and Rewards"),(0,r.kt)("p",null,"Consumer chains are free to create their own native token which can be used for fees, and can be created on the consumer chain in the form of inflationary rewards. These rewards can be used to incentivize user behavior, for example, LPing or staking. A portion of these fees and rewards will be sent to provider chain stakers, but that proportion is completely customizable by the developers, and subject to governance."))}p.isMDXComponent=!0}}]);