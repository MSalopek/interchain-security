"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[823],{5927:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>c,toc:()=>h});var i=o(5893),t=o(1151);const r={sidebar_position:1},a="Developing an ICS consumer chain",c={id:"consumer-development/app-integration",title:"Developing an ICS consumer chain",description:"When developing an ICS consumer chain, besides just focusing on your chain's logic you should aim to allocate time to ensure that your chain is compatible with the ICS protocol.",source:"@site/versioned_docs/version-v5.0.0-rc0/consumer-development/app-integration.md",sourceDirName:"consumer-development",slug:"/consumer-development/app-integration",permalink:"/interchain-security/v5.0.0-rc0/consumer-development/app-integration",draft:!1,unlisted:!1,tags:[],version:"v5.0.0-rc0",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Consumer Initiated Slashing",permalink:"/interchain-security/v5.0.0-rc0/features/slashing"},next:{title:"Consumer Chain Governance",permalink:"/interchain-security/v5.0.0-rc0/consumer-development/consumer-chain-governance"}},s={},h=[{value:"Basic consumer chain",id:"basic-consumer-chain",level:2},{value:"Democracy consumer chain",id:"democracy-consumer-chain",level:2},{value:"Standalone chain to consumer chain changeover",id:"standalone-chain-to-consumer-chain-changeover",level:2}];function l(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"developing-an-ics-consumer-chain",children:"Developing an ICS consumer chain"}),"\n",(0,i.jsx)(n.p,{children:"When developing an ICS consumer chain, besides just focusing on your chain's logic you should aim to allocate time to ensure that your chain is compatible with the ICS protocol.\nTo help you on your journey, the ICS team has provided multiple examples of a minimum viable consumer chain applications."}),"\n",(0,i.jsx)(n.h2,{id:"basic-consumer-chain",children:"Basic consumer chain"}),"\n",(0,i.jsxs)(n.p,{children:["The source code for the example app can be found ",(0,i.jsx)(n.a,{href:"https://github.com/cosmos/interchain-security/tree/main/app/consumer",children:"here"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"Please note that consumer chains do not implement the staking module - the validator set is replicated from the provider, meaning that the provider and the consumer use the same validator set and their stake on the provider directly determines their stake on the consumer.\nAt present there is no opt-in mechanism available, so all validators of the provider must also validate on the provider chain."}),"\n",(0,i.jsxs)(n.p,{children:["Your chain should import the consumer module from ",(0,i.jsx)(n.code,{children:"x/consumer"})," and register it in the correct places in your ",(0,i.jsx)(n.code,{children:"app.go"}),".\nThe ",(0,i.jsx)(n.code,{children:"x/consumer"})," module will allow your chain to communicate with the provider using the ICS protocol. The module handles all IBC communication with the provider, and it is a simple drop-in.\nYou should not need to manage or override any code from the ",(0,i.jsx)(n.code,{children:"x/consumer"})," module."]}),"\n",(0,i.jsx)(n.h2,{id:"democracy-consumer-chain",children:"Democracy consumer chain"}),"\n",(0,i.jsxs)(n.p,{children:["The source code for the example app can be found ",(0,i.jsx)(n.a,{href:"https://github.com/cosmos/interchain-security/tree/main/app/consumer-democracy",children:"here"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["This type of consumer chain wraps the basic CosmosSDK ",(0,i.jsx)(n.code,{children:"x/distribution"}),", ",(0,i.jsx)(n.code,{children:"x/staking"})," and ",(0,i.jsx)(n.code,{children:"x/governance"})," modules allowing the consumer chain to perform democratic actions such as participating and voting within the chain's governance system."]}),"\n",(0,i.jsxs)(n.p,{children:["This allows the consumer chain to leverage those modules while also using the ",(0,i.jsx)(n.code,{children:"x/consumer"})," module."]}),"\n",(0,i.jsx)(n.p,{children:'With these modules enabled, the consumer chain can mint its own governance tokens, which can then be delegated to prominent community members which are referred to as "representatives" (as opposed to "validators" in standalone chains). The token may have different use cases besides just voting on governance proposals.'}),"\n",(0,i.jsx)(n.h2,{id:"standalone-chain-to-consumer-chain-changeover",children:"Standalone chain to consumer chain changeover"}),"\n",(0,i.jsx)(n.p,{children:"This feature is being actively worked on. Information will be provided at a later time."})]})}function d(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},1151:(e,n,o)=>{o.d(n,{Z:()=>c,a:()=>a});var i=o(7294);const t={},r=i.createContext(t);function a(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);