"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5548],{3972:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>h,contentTitle:()=>o,default:()=>l,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var i=t(5893),r=t(1151);const s={sidebar_position:5,title:"Frequently Asked Questions",slug:"/faq"},o=void 0,a={id:"frequently-asked-questions",title:"Frequently Asked Questions",description:"What is the meaning of Validator Set Replication?",source:"@site/versioned_docs/version-v4.1.0/frequently-asked-questions.md",sourceDirName:".",slug:"/faq",permalink:"/interchain-security/v4.1.0/faq",draft:!1,unlisted:!1,tags:[],version:"v4.1.0",sidebarPosition:5,frontMatter:{sidebar_position:5,title:"Frequently Asked Questions",slug:"/faq"},sidebar:"tutorialSidebar",previous:{title:"Joining Stride",permalink:"/interchain-security/v4.1.0/validators/joining-stride"},next:{title:"ADRs",permalink:"/interchain-security/v4.1.0/adrs/intro"}},h={},c=[{value:"What is the meaning of Validator Set Replication?",id:"what-is-the-meaning-of-validator-set-replication",level:2},{value:"What is a consumer chain?",id:"what-is-a-consumer-chain",level:2},{value:"What happens to consumer if provider is down?",id:"what-happens-to-consumer-if-provider-is-down",level:2},{value:"What happens to provider if consumer is down?",id:"what-happens-to-provider-if-consumer-is-down",level:2},{value:"Can I run the provider and consumer chains on the same machine?",id:"can-i-run-the-provider-and-consumer-chains-on-the-same-machine",level:2},{value:"Can the consumer chain have its own token?",id:"can-the-consumer-chain-have-its-own-token",level:2},{value:"How are Tx fees paid on consumer?",id:"how-are-tx-fees-paid-on-consumer",level:2},{value:"Are there any restrictions the consumer chains need to abide by?",id:"are-there-any-restrictions-the-consumer-chains-need-to-abide-by",level:2},{value:"What&#39;s in it for the validators and stakers?",id:"whats-in-it-for-the-validators-and-stakers",level:2},{value:"Can the consumer chain have its own governance?",id:"can-the-consumer-chain-have-its-own-governance",level:2},{value:"Can validators opt-out of replicated security?",id:"can-validators-opt-out-of-replicated-security",level:2},{value:"How does Equivocation Governance Slashing work?",id:"how-does-equivocation-governance-slashing-work",level:2},{value:"Can Consumer Chains perform Software Upgrades?",id:"can-consumer-chains-perform-software-upgrades",level:2},{value:"How can I connect to the testnets?",id:"how-can-i-connect-to-the-testnets",level:2},{value:"How do I start using ICS?",id:"how-do-i-start-using-ics",level:2},{value:"Which relayers are supported?",id:"which-relayers-are-supported",level:2},{value:"How does key delegation work in ICS?",id:"how-does-key-delegation-work-in-ics",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"what-is-the-meaning-of-validator-set-replication",children:"What is the meaning of Validator Set Replication?"}),"\n",(0,i.jsx)(n.p,{children:"VSR simply means that the same validator set is used to secure both the provider and consumer chains. VSR is ensured through ICS protocol which keeps consumers up to date with the validator set of the provider."}),"\n",(0,i.jsx)(n.h2,{id:"what-is-a-consumer-chain",children:"What is a consumer chain?"}),"\n",(0,i.jsx)(n.p,{children:"Consumer chain is blockchain operated by the same validator operators as the provider chain. The ICS protocol ensures the validator set replication properties (informs consumer chain about the current state of the validator set on the provider)"}),"\n",(0,i.jsx)(n.p,{children:"Consumer chains are run on infrastructure (virtual or physical machines) distinct from the provider, have their own configurations and operating requirements."}),"\n",(0,i.jsx)(n.h2,{id:"what-happens-to-consumer-if-provider-is-down",children:"What happens to consumer if provider is down?"}),"\n",(0,i.jsx)(n.p,{children:"In case the provider chain halts or experiences difficulties the consumer chain will keep operating - the provider chain and consumer chains represent different networks, which only share the validator set."}),"\n",(0,i.jsx)(n.p,{children:"The consumer chain will not halt if the provider halts because they represent distinct networks and distinct infrastructures. Provider chain liveness does not impact consumer chain liveness."}),"\n",(0,i.jsxs)(n.p,{children:["However, if the ",(0,i.jsx)(n.code,{children:"trusting_period"})," (currently 5 days for protocol safety reasons) elapses without receiving any updates from the provider, the consumer chain will essentially transition to a Proof of Authority chain.\nThis means that the validator set on the consumer will be the last validator set of the provider that the consumer knows about."]}),"\n",(0,i.jsx)(n.p,{children:'Steps to recover from this scenario and steps to "release" the validators from their duties will be specified at a later point.\nAt the very least, the consumer chain could replace the validator set, remove the ICS module and perform a genesis restart. The impact of this on the IBC clients and connections is currently under careful consideration.'}),"\n",(0,i.jsx)(n.h2,{id:"what-happens-to-provider-if-consumer-is-down",children:"What happens to provider if consumer is down?"}),"\n",(0,i.jsx)(n.p,{children:"Consumer chains do not impact the provider chain.\nThe ICS protocol is concerned only with validator set replication and the only communication that the provider requires from the consumer is information about validator activity (essentially keeping the provider informed about slash events)."}),"\n",(0,i.jsx)(n.h2,{id:"can-i-run-the-provider-and-consumer-chains-on-the-same-machine",children:"Can I run the provider and consumer chains on the same machine?"}),"\n",(0,i.jsx)(n.p,{children:"Yes, but you should favor running them in separate environments so failure of one machine does not impact your whole operation."}),"\n",(0,i.jsx)(n.h2,{id:"can-the-consumer-chain-have-its-own-token",children:"Can the consumer chain have its own token?"}),"\n",(0,i.jsx)(n.p,{children:"As any other cosmos-sdk chain the consumer chain can issue its own token, manage inflation parameters and use them to pay gas fees."}),"\n",(0,i.jsx)(n.h2,{id:"how-are-tx-fees-paid-on-consumer",children:"How are Tx fees paid on consumer?"}),"\n",(0,i.jsx)(n.p,{children:"The consumer chain operates as any other cosmos-sdk chain. The ICS protocol does not impact the normal chain operations."}),"\n",(0,i.jsx)(n.h2,{id:"are-there-any-restrictions-the-consumer-chains-need-to-abide-by",children:"Are there any restrictions the consumer chains need to abide by?"}),"\n",(0,i.jsx)(n.p,{children:"No. Consumer chains are free to choose how they wish to operate, which modules to include, use CosmWASM in a permissioned or a permissionless way.\nThe only thing that separates consumer chains from standalone chains is that they share their validator set with the provider chain."}),"\n",(0,i.jsx)(n.h2,{id:"whats-in-it-for-the-validators-and-stakers",children:"What's in it for the validators and stakers?"}),"\n",(0,i.jsxs)(n.p,{children:["The consumer chains sends a portion of its fees and inflation as reward to the provider chain as defined by ",(0,i.jsx)(n.code,{children:"ConsumerRedistributionFraction"}),". The rewards are distributed (sent to the provider) every ",(0,i.jsx)(n.code,{children:"BlocksPerDistributionTransmission"}),"."]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"ConsumerRedistributionFraction"})," and ",(0,i.jsx)(n.code,{children:"BlocksPerDistributionTransmission"})," are parameters defined in the ",(0,i.jsx)(n.code,{children:"ConsumerAdditionProposal"})," used to create the consumer chain. These parameters can be changed via consumer chain governance."]})}),"\n",(0,i.jsx)(n.h2,{id:"can-the-consumer-chain-have-its-own-governance",children:"Can the consumer chain have its own governance?"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Yes."})}),"\n",(0,i.jsx)(n.p,{children:'In that case the validators are not necessarily part of the governance structure. Instead, their place in governance is replaced by "representatives" (governors). The representatives do not need to run validators, they simply represent the interests of a particular interest group on the consumer chain.'}),"\n",(0,i.jsx)(n.p,{children:"Validators can also be representatives but representatives are not required to run validator nodes."}),"\n",(0,i.jsx)(n.p,{children:"This feature discerns between validator operators (infrastructure) and governance representatives which further democratizes the ecosystem. This also reduces the pressure on validators to be involved in on-chain governance."}),"\n",(0,i.jsx)(n.h2,{id:"can-validators-opt-out-of-replicated-security",children:"Can validators opt-out of replicated security?"}),"\n",(0,i.jsx)(n.p,{children:"At present, the validators cannot opt-out of validating consumer chains."}),"\n",(0,i.jsx)(n.p,{children:"There are multiple opt-out mechanisms under active research."}),"\n",(0,i.jsx)(n.h2,{id:"how-does-equivocation-governance-slashing-work",children:"How does Equivocation Governance Slashing work?"}),"\n",(0,i.jsx)(n.p,{children:"To avoid potential attacks directed at provider chain validators, a new mechanism was introduced:"}),"\n",(0,i.jsx)(n.p,{children:"When a validator double-signs on the consumer chain, a special type of slash packet is relayed to the provider chain. The provider will store information about the double signing validator and allow a governance proposal to be submitted.\nIf the double-signing proposal passes, the offending validator will be slashed on the provider chain and tombstoned. Tombstoning will permanently exclude the validator from the active set of the provider."}),"\n",(0,i.jsx)(n.admonition,{type:"caution",children:(0,i.jsx)(n.p,{children:"An equivocation proposal cannot be submitted for a validator that did not double sign on any of the consumer chains."})}),"\n",(0,i.jsx)(n.h2,{id:"can-consumer-chains-perform-software-upgrades",children:"Can Consumer Chains perform Software Upgrades?"}),"\n",(0,i.jsx)(n.p,{children:"Consumer chains are standalone chains, in the sense that they can run arbitrary logic and use any modules they want (ie CosmWASM)."}),"\n",(0,i.jsx)(n.p,{children:"Consumer chain upgrades are unlikely to impact the provider chain, as long as there are no changes to the ICS module."}),"\n",(0,i.jsx)(n.h2,{id:"how-can-i-connect-to-the-testnets",children:"How can I connect to the testnets?"}),"\n",(0,i.jsxs)(n.p,{children:["Check out the ",(0,i.jsx)(n.a,{href:"/interchain-security/v4.1.0/validators/joining-testnet",children:"Joining Replicated Security testnet"})," section."]}),"\n",(0,i.jsx)(n.h2,{id:"how-do-i-start-using-ics",children:"How do I start using ICS?"}),"\n",(0,i.jsxs)(n.p,{children:["To become a consumer chain use this ",(0,i.jsx)(n.a,{href:"/interchain-security/v4.1.0/consumer-development/onboarding",children:"checklist"})," and check the ",(0,i.jsx)(n.a,{href:"/interchain-security/v4.1.0/consumer-development/app-integration",children:"App integration section"})]}),"\n",(0,i.jsx)(n.h2,{id:"which-relayers-are-supported",children:"Which relayers are supported?"}),"\n",(0,i.jsx)(n.p,{children:"Currently supported versions:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Hermes 1.4.1"}),"\n",(0,i.jsxs)(n.li,{children:["Support for the CCV module was added to the Go ",(0,i.jsx)(n.a,{href:"https://github.com/cosmos/relayer",children:"relayer"})," in v2.2.0 but v2.4.0 has significant performance fixes which makes it the earliest suggested version to use."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"how-does-key-delegation-work-in-ics",children:"How does key delegation work in ICS?"}),"\n",(0,i.jsxs)(n.p,{children:["You can check the ",(0,i.jsx)(n.a,{href:"/interchain-security/v4.1.0/features/key-assignment",children:"Key Assignment Guide"})," for specific instructions."]})]})}function l(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>o});var i=t(7294);const r={},s=i.createContext(r);function o(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);