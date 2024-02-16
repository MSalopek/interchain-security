"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9117],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>f});var n=t(7294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var d=n.createContext({}),c=function(e){var r=n.useContext(d),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},u=function(e){var r=c(e.components);return n.createElement(d.Provider,{value:r},e.children)},l="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,o=e.originalType,d=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),l=c(t),m=i,f=l["".concat(d,".").concat(m)]||l[m]||p[m]||o;return t?n.createElement(f,a(a({ref:r},u),{},{components:t})):n.createElement(f,a({ref:r},u))}));function f(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=m;var s={};for(var d in r)hasOwnProperty.call(r,d)&&(s[d]=r[d]);s.originalType=e,s[l]="string"==typeof e?e:i,a[1]=s;for(var c=2;c<o;c++)a[c]=t[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},4071:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>d,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=t(7462),i=(t(7294),t(3905));const o={sidebar_position:2},a="Reward distribution",s={unversionedId:"features/reward-distribution",id:"version-v2.0.0/features/reward-distribution",title:"Reward distribution",description:"Consumer chains have the option of sharing their block rewards (inflation tokens) and fees with provider chain validators and delegators.",source:"@site/versioned_docs/version-v2.0.0/features/reward-distribution.md",sourceDirName:"features",slug:"/features/reward-distribution",permalink:"/interchain-security/legacy/v2.0.0/features/reward-distribution",draft:!1,tags:[],version:"v2.0.0",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Key Assignment",permalink:"/interchain-security/legacy/v2.0.0/features/key-assignment"},next:{title:"ICS Provider Proposals",permalink:"/interchain-security/legacy/v2.0.0/features/proposals"}},d={},c=[{value:"Parameters",id:"parameters",level:2},{value:"<code>consumer_redistribution_fraction</code>",id:"consumer_redistribution_fraction",level:3},{value:"<code>blocks_per_distribution_transmission</code>",id:"blocks_per_distribution_transmission",level:3},{value:"<code>transfer_timeout_period</code>",id:"transfer_timeout_period",level:3},{value:"<code>distribution_transmission_channel</code>",id:"distribution_transmission_channel",level:3},{value:"<code>provider_fee_pool_addr_str</code>",id:"provider_fee_pool_addr_str",level:3}],u={toc:c},l="wrapper";function p(e){let{components:r,...t}=e;return(0,i.kt)(l,(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"reward-distribution"},"Reward distribution"),(0,i.kt)("p",null,"Consumer chains have the option of sharing their block rewards (inflation tokens) and fees with provider chain validators and delegators.\nIn replicated security block rewards and fees are periodically sent from the consumer to the provider according to consumer chain parameters using an IBC transfer channel that gets created during consumer chain initialization."),(0,i.kt)("p",null,"Reward distribution on the provider is handled by the distribution module - validators and delegators receive a fraction of the consumer chain tokens as staking rewards.\nThe distributed reward tokens are IBC tokens and therefore cannot be staked on the provider chain."),(0,i.kt)("p",null,"Sending and distributing rewards from consumer chains to provider chain is handled by the ",(0,i.kt)("inlineCode",{parentName:"p"},"Reward Distribution")," sub-protocol."),(0,i.kt)("h2",{id:"parameters"},"Parameters"),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"The following chain parameters dictate consumer chain distribution amount and frequency.\nThey are set at consumer genesis and ",(0,i.kt)("inlineCode",{parentName:"p"},"blocks_per_distribution_transmission"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"consumer_redistribution_fraction"),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"transfer_timeout_period")," must be provided in every ",(0,i.kt)("inlineCode",{parentName:"p"},"ConsumerChainAddition")," proposal.")),(0,i.kt)("h3",{id:"consumer_redistribution_fraction"},(0,i.kt)("inlineCode",{parentName:"h3"},"consumer_redistribution_fraction")),(0,i.kt)("p",null,'The fraction of tokens sent from consumer to provider during distribution events. The fraction is a string representing a decimal number. For example "0.75" would represent 75%.'),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Example:"),(0,i.kt)("p",{parentName:"admonition"},"With ",(0,i.kt)("inlineCode",{parentName:"p"},"consumer_redistribution_fraction")," set to ",(0,i.kt)("inlineCode",{parentName:"p"},"0.75")," the consumer chain would send 75% of its block rewards and accumulated fees to the consumer chain and the remaining 25% to the provider chain every ",(0,i.kt)("inlineCode",{parentName:"p"},"n")," blocks where ",(0,i.kt)("inlineCode",{parentName:"p"},"n == blocks_per_distribution_transmission"),".")),(0,i.kt)("h3",{id:"blocks_per_distribution_transmission"},(0,i.kt)("inlineCode",{parentName:"h3"},"blocks_per_distribution_transmission")),(0,i.kt)("p",null,"The number of blocks between IBC token transfers from the consumer chain to the provider chain."),(0,i.kt)("h3",{id:"transfer_timeout_period"},(0,i.kt)("inlineCode",{parentName:"h3"},"transfer_timeout_period")),(0,i.kt)("p",null,"Timeout period for consumer chain reward distribution IBC packets."),(0,i.kt)("h3",{id:"distribution_transmission_channel"},(0,i.kt)("inlineCode",{parentName:"h3"},"distribution_transmission_channel")),(0,i.kt)("p",null,"Provider chain IBC channel used for receiving consumer chain reward distribution token transfers. This is automatically set during the consumer-provider handshake procedure."),(0,i.kt)("h3",{id:"provider_fee_pool_addr_str"},(0,i.kt)("inlineCode",{parentName:"h3"},"provider_fee_pool_addr_str")),(0,i.kt)("p",null,"Provider chain fee pool address used for receiving consumer chain reward distribution token transfers. This is automatically set during the consumer-provider handshake procedure."))}p.isMDXComponent=!0}}]);