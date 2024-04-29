"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[74],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),h=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=h(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=h(n),p=a,m=d["".concat(c,".").concat(p)]||d[p]||u[p]||o;return n?r.createElement(m,i(i({ref:t},l),{},{components:n})):r.createElement(m,i({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:a,i[1]=s;for(var h=2;h<o;h++)i[h]=n[h];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},6584:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>h});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:5,title:"Frequently Asked Questions",slug:"/faq"},i=void 0,s={unversionedId:"frequently-asked-questions",id:"version-v3.2.0/frequently-asked-questions",title:"Frequently Asked Questions",description:"What is the meaning of Validator Set Replication?",source:"@site/versioned_docs/version-v3.2.0/frequently-asked-questions.md",sourceDirName:".",slug:"/faq",permalink:"/interchain-security/legacy/v3.2.0/faq",draft:!1,tags:[],version:"v3.2.0",sidebarPosition:5,frontMatter:{sidebar_position:5,title:"Frequently Asked Questions",slug:"/faq"},sidebar:"tutorialSidebar",previous:{title:"Joining Stride",permalink:"/interchain-security/legacy/v3.2.0/validators/joining-stride"},next:{title:"ADRs",permalink:"/interchain-security/legacy/v3.2.0/adrs/intro"}},c={},h=[{value:"What is the meaning of Validator Set Replication?",id:"what-is-the-meaning-of-validator-set-replication",level:2},{value:"What is a consumer chain?",id:"what-is-a-consumer-chain",level:2},{value:"What happens to consumer if provider is down?",id:"what-happens-to-consumer-if-provider-is-down",level:2},{value:"What happens to provider if consumer is down?",id:"what-happens-to-provider-if-consumer-is-down",level:2},{value:"Can I run the provider and consumer chains on the same machine?",id:"can-i-run-the-provider-and-consumer-chains-on-the-same-machine",level:2},{value:"Can the consumer chain have its own token?",id:"can-the-consumer-chain-have-its-own-token",level:2},{value:"How are Tx fees paid on consumer?",id:"how-are-tx-fees-paid-on-consumer",level:2},{value:"Are there any restrictions the consumer chains need to abide by?",id:"are-there-any-restrictions-the-consumer-chains-need-to-abide-by",level:2},{value:"What&#39;s in it for the validators and stakers?",id:"whats-in-it-for-the-validators-and-stakers",level:2},{value:"Can the consumer chain have its own governance?",id:"can-the-consumer-chain-have-its-own-governance",level:2},{value:"Can validators opt-out of replicated security?",id:"can-validators-opt-out-of-replicated-security",level:2},{value:"How does Equivocation Governance Slashing work?",id:"how-does-equivocation-governance-slashing-work",level:2},{value:"Can Consumer Chains perform Software Upgrades?",id:"can-consumer-chains-perform-software-upgrades",level:2},{value:"How can I connect to the testnets?",id:"how-can-i-connect-to-the-testnets",level:2},{value:"How do I start using ICS?",id:"how-do-i-start-using-ics",level:2},{value:"Which relayers are supported?",id:"which-relayers-are-supported",level:2},{value:"How does key delegation work in ICS?",id:"how-does-key-delegation-work-in-ics",level:2}],l={toc:h},d="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"what-is-the-meaning-of-validator-set-replication"},"What is the meaning of Validator Set Replication?"),(0,a.kt)("p",null,"VSR simply means that the same validator set is used to secure both the provider and consumer chains. VSR is ensured through ICS protocol which keeps consumers up to date with the validator set of the provider."),(0,a.kt)("h2",{id:"what-is-a-consumer-chain"},"What is a consumer chain?"),(0,a.kt)("p",null,"Consumer chain is blockchain operated by the same validator operators as the provider chain. The ICS protocol ensures the validator set replication properties (informs consumer chain about the current state of the validator set on the provider)"),(0,a.kt)("p",null,"Consumer chains are run on infrastructure (virtual or physical machines) distinct from the provider, have their own configurations and operating requirements."),(0,a.kt)("h2",{id:"what-happens-to-consumer-if-provider-is-down"},"What happens to consumer if provider is down?"),(0,a.kt)("p",null,"In case the provider chain halts or experiences difficulties the consumer chain will keep operating - the provider chain and consumer chains represent different networks, which only share the validator set."),(0,a.kt)("p",null,"The consumer chain will not halt if the provider halts because they represent distinct networks and distinct infrastructures. Provider chain liveness does not impact consumer chain liveness."),(0,a.kt)("p",null,"However, if the ",(0,a.kt)("inlineCode",{parentName:"p"},"trusting_period")," (currently 5 days for protocol safety reasons) elapses without receiving any updates from the provider, the consumer chain will essentially transition to a Proof of Authority chain.\nThis means that the validator set on the consumer will be the last validator set of the provider that the consumer knows about."),(0,a.kt)("p",null,'Steps to recover from this scenario and steps to "release" the validators from their duties will be specified at a later point.\nAt the very least, the consumer chain could replace the validator set, remove the ICS module and perform a genesis restart. The impact of this on the IBC clients and connections is currently under careful consideration.'),(0,a.kt)("h2",{id:"what-happens-to-provider-if-consumer-is-down"},"What happens to provider if consumer is down?"),(0,a.kt)("p",null,"Consumer chains do not impact the provider chain.\nThe ICS protocol is concerned only with validator set replication and the only communication that the provider requires from the consumer is information about validator activity (essentially keeping the provider informed about slash events)."),(0,a.kt)("h2",{id:"can-i-run-the-provider-and-consumer-chains-on-the-same-machine"},"Can I run the provider and consumer chains on the same machine?"),(0,a.kt)("p",null,"Yes, but you should favor running them in separate environments so failure of one machine does not impact your whole operation."),(0,a.kt)("h2",{id:"can-the-consumer-chain-have-its-own-token"},"Can the consumer chain have its own token?"),(0,a.kt)("p",null,"As any other cosmos-sdk chain the consumer chain can issue its own token, manage inflation parameters and use them to pay gas fees."),(0,a.kt)("h2",{id:"how-are-tx-fees-paid-on-consumer"},"How are Tx fees paid on consumer?"),(0,a.kt)("p",null,"The consumer chain operates as any other cosmos-sdk chain. The ICS protocol does not impact the normal chain operations."),(0,a.kt)("h2",{id:"are-there-any-restrictions-the-consumer-chains-need-to-abide-by"},"Are there any restrictions the consumer chains need to abide by?"),(0,a.kt)("p",null,"No. Consumer chains are free to choose how they wish to operate, which modules to include, use CosmWASM in a permissioned or a permissionless way.\nThe only thing that separates consumer chains from standalone chains is that they share their validator set with the provider chain."),(0,a.kt)("h2",{id:"whats-in-it-for-the-validators-and-stakers"},"What's in it for the validators and stakers?"),(0,a.kt)("p",null,"The consumer chains sends a portion of its fees and inflation as reward to the provider chain as defined by ",(0,a.kt)("inlineCode",{parentName:"p"},"consumer_redistribution_fraction"),". The rewards are distributed (sent to the provider) every ",(0,a.kt)("inlineCode",{parentName:"p"},"blocks_per_distribution_transmission"),"."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"  ",(0,a.kt)("inlineCode",{parentName:"p"},"consumer_redistribution_fraction")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"blocks_per_distribution_transmission")," are parameters defined in the ",(0,a.kt)("inlineCode",{parentName:"p"},"ConsumerAdditionProposal")," used to create the consumer chain. These parameters can be changed via consumer chain governance.")),(0,a.kt)("h2",{id:"can-the-consumer-chain-have-its-own-governance"},"Can the consumer chain have its own governance?"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Yes.")),(0,a.kt)("p",null,'In that case the validators are not necessarily part of the governance structure. Instead, their place in governance is replaced by "representatives" (governors). The representatives do not need to run validators, they simply represent the interests of a particular interest group on the consumer chain.'),(0,a.kt)("p",null,"Validators can also be representatives but representatives are not required to run validator nodes."),(0,a.kt)("p",null,"This feature discerns between validator operators (infrastructure) and governance representatives which further democratizes the ecosystem. This also reduces the pressure on validators to be involved in on-chain governance."),(0,a.kt)("h2",{id:"can-validators-opt-out-of-replicated-security"},"Can validators opt-out of replicated security?"),(0,a.kt)("p",null,"At present, the validators cannot opt-out of validating consumer chains."),(0,a.kt)("p",null,"There are multiple opt-out mechanisms under active research."),(0,a.kt)("h2",{id:"how-does-equivocation-governance-slashing-work"},"How does Equivocation Governance Slashing work?"),(0,a.kt)("p",null,"To avoid potential attacks directed at provider chain validators, a new mechanism was introduced:"),(0,a.kt)("p",null,"When a validator double-signs on the consumer chain, a special type of slash packet is relayed to the provider chain. The provider will store information about the double signing validator and allow a governance proposal to be submitted.\nIf the double-signing proposal passes, the offending validator will be slashed on the provider chain and tombstoned. Tombstoning will permanently exclude the validator from the active set of the provider."),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"An equivocation proposal cannot be submitted for a validator that did not double sign on any of the consumer chains.")),(0,a.kt)("h2",{id:"can-consumer-chains-perform-software-upgrades"},"Can Consumer Chains perform Software Upgrades?"),(0,a.kt)("p",null,"Consumer chains are standalone chains, in the sense that they can run arbitrary logic and use any modules they want (ie CosmWASM)."),(0,a.kt)("p",null,"Consumer chain upgrades are unlikely to impact the provider chain, as long as there are no changes to the ICS module."),(0,a.kt)("h2",{id:"how-can-i-connect-to-the-testnets"},"How can I connect to the testnets?"),(0,a.kt)("p",null,"Check out the ",(0,a.kt)("a",{parentName:"p",href:"/interchain-security/legacy/v3.2.0/validators/joining-testnet"},"Joining Replicated Security testnet")," section."),(0,a.kt)("h2",{id:"how-do-i-start-using-ics"},"How do I start using ICS?"),(0,a.kt)("p",null,"To become a consumer chain use this ",(0,a.kt)("a",{parentName:"p",href:"/interchain-security/legacy/v3.2.0/consumer-development/onboarding"},"checklist")," and check the ",(0,a.kt)("a",{parentName:"p",href:"/interchain-security/legacy/v3.2.0/consumer-development/app-integration"},"App integration section")),(0,a.kt)("h2",{id:"which-relayers-are-supported"},"Which relayers are supported?"),(0,a.kt)("p",null,"Currently supported versions:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Hermes 1.4.1"),(0,a.kt)("li",{parentName:"ul"},"Support for the CCV module was added to the Go ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/cosmos/relayer"},"relayer")," in v2.2.0 but v2.4.0 has significant performance fixes which makes it the earliest suggested version to use.")),(0,a.kt)("h2",{id:"how-does-key-delegation-work-in-ics"},"How does key delegation work in ICS?"),(0,a.kt)("p",null,"You can check the ",(0,a.kt)("a",{parentName:"p",href:"/interchain-security/legacy/v3.2.0/features/key-assignment"},"Key Assignment Guide")," for specific instructions."))}u.isMDXComponent=!0}}]);