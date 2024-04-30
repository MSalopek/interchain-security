"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3701],{3874:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=t(5893),r=t(1151);const o={sidebar_position:2},a="Terminology",s={id:"introduction/terminology",title:"Terminology",description:"You may have heard of one or multiple buzzwords thrown around in the cosmos and wider crypto ecosystem such shared security, interchain security, replicated security, cross chain validation, and mesh security. These terms will be clarified below, before diving into any introductions.",source:"@site/versioned_docs/version-v4.0.0/introduction/terminology.md",sourceDirName:"introduction",slug:"/introduction/terminology",permalink:"/interchain-security/introduction/terminology",draft:!1,unlisted:!1,tags:[],version:"v4.0.0",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/interchain-security/introduction/overview"},next:{title:"Interchain Security Parameters",permalink:"/interchain-security/introduction/params"}},c={},l=[{value:"Shared Security",id:"shared-security",level:2},{value:"Interchain Security",id:"interchain-security",level:2},{value:"Replicated Security",id:"replicated-security",level:2},{value:"Mesh security",id:"mesh-security",level:2},{value:"Consumer Chain",id:"consumer-chain",level:2},{value:"Standalone Chain",id:"standalone-chain",level:2},{value:"Changeover Procedure",id:"changeover-procedure",level:2}];function h(e){const i={a:"a",h1:"h1",h2:"h2",p:"p",strong:"strong",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.h1,{id:"terminology",children:"Terminology"}),"\n",(0,n.jsx)(i.p,{children:"You may have heard of one or multiple buzzwords thrown around in the cosmos and wider crypto ecosystem such shared security, interchain security, replicated security, cross chain validation, and mesh security. These terms will be clarified below, before diving into any introductions."}),"\n",(0,n.jsx)(i.h2,{id:"shared-security",children:"Shared Security"}),"\n",(0,n.jsx)(i.p,{children:"Shared security is a family of technologies that include optimistic rollups, zk-rollups, sharding and Interchain Security. Ie. any protocol or technology that can allow one blockchain to lend/share its proof-of-stake security with another blockchain or off-chain process."}),"\n",(0,n.jsx)(i.h2,{id:"interchain-security",children:"Interchain Security"}),"\n",(0,n.jsx)(i.p,{children:"Interchain Security is the Cosmos-specific category of Shared Security that uses IBC (Inter-Blockchain Communication), i.e. any shared security protocol built with IBC."}),"\n",(0,n.jsx)(i.h2,{id:"replicated-security",children:"Replicated Security"}),"\n",(0,n.jsx)(i.p,{children:'A particular protocol/implementation of Interchain Security that fully replicates the security and decentralization of a validator set across multiple blockchains. Replicated security has also been referred to as "Cross Chain Validation" or "Interchain Security V1", a legacy term for the same protocol. That is, a "provider chain" such as the Cosmos Hub can share its exact validator set with multiple consumer chains by communicating changes in its validator set over IBC. Note this documentation is focused on explaining the concepts from replicated security.'}),"\n",(0,n.jsx)(i.h2,{id:"mesh-security",children:"Mesh security"}),"\n",(0,n.jsxs)(i.p,{children:["A protocol built on IBC that allows delegators on a cosmos chain to re-delegate their stake to validators in another chain's own validator set, using the original chain's token (which remains bonded on the original chain). For a deeper exploration of mesh security, see ",(0,n.jsx)(i.a,{href:"https://informal.systems/blog/replicated-vs-mesh-security",children:"Replicated vs. Mesh Security on the Informal Blog"}),"."]}),"\n",(0,n.jsx)(i.h2,{id:"consumer-chain",children:"Consumer Chain"}),"\n",(0,n.jsx)(i.p,{children:"Chain that is secured by the validator set of the provider, instead of its own.\nReplicated security allows the provider chain validator set to validate blocks on the consumer chain."}),"\n",(0,n.jsx)(i.h2,{id:"standalone-chain",children:"Standalone Chain"}),"\n",(0,n.jsx)(i.p,{children:"Chain that is secured by its own validator set. This chain does not participate in replicated security."}),"\n",(0,n.jsx)(i.p,{children:'Standalone chains may sometimes be called "sovereign" - the terms are synonymous.'}),"\n",(0,n.jsx)(i.h2,{id:"changeover-procedure",children:"Changeover Procedure"}),"\n",(0,n.jsxs)(i.p,{children:["Chains that were not initially launched as consumers of replicated security can still participate in the protocol and leverage the economic security of the provider chain. The process where a standalone chain transitions to being a replicated consumer chain is called the ",(0,n.jsx)(i.strong,{children:"changeover procedure"})," and is part of the interchain security protocol. After the changeover, the new consumer chain will retain all existing state, including the IBC clients, connections and channels already established by the chain."]})]})}function d(e={}){const{wrapper:i}={...(0,r.a)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},1151:(e,i,t)=>{t.d(i,{Z:()=>s,a:()=>a});var n=t(7294);const r={},o=n.createContext(r);function a(e){const i=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function s(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),n.createElement(o.Provider,{value:i},e.children)}}}]);