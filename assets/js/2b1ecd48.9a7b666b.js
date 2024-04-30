"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1543],{3342:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var i=t(5893),o=t(1151);const r={sidebar_position:1},a="Overview",s={id:"introduction/overview",title:"Overview",description:"Replicated security (aka interchain security V1) is an open sourced IBC application which allows cosmos blockchains to lease their proof-of-stake security to one another.",source:"@site/versioned_docs/version-v4.1.0/introduction/overview.md",sourceDirName:"introduction",slug:"/introduction/overview",permalink:"/interchain-security/v4.1.0/introduction/overview",draft:!1,unlisted:!1,tags:[],version:"v4.1.0",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Interchain Security Docs",permalink:"/interchain-security/v4.1.0/"},next:{title:"Terminology",permalink:"/interchain-security/v4.1.0/introduction/terminology"}},c={},l=[{value:"Why Replicated Security?",id:"why-replicated-security",level:2},{value:"Core protocol",id:"core-protocol",level:2},{value:"Downtime Slashing",id:"downtime-slashing",level:3},{value:"Tokenomics and Rewards",id:"tokenomics-and-rewards",level:3}];function d(e){const n={a:"a",admonition:"admonition",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"overview",children:"Overview"}),"\n",(0,i.jsxs)(n.admonition,{type:"info",children:[(0,i.jsx)(n.p,{children:"Replicated security (aka interchain security V1) is an open sourced IBC application which allows cosmos blockchains to lease their proof-of-stake security to one another."}),(0,i.jsx)("br",{}),(0,i.jsx)(n.p,{children:'Replicated security allows anyone to launch a "consumer" blockchain using the same validator set as the "provider" blockchain by creating a governance proposal. If the proposal is accepted, provider chain validators start validating the consumer chain as well. Consumer chains will therefore inherit the full security and decentralization of the provider.'})]}),"\n",(0,i.jsx)(n.h2,{id:"why-replicated-security",children:"Why Replicated Security?"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Full provider security. At launch, consumer chains are secured by the full validator set and market cap of the provider chain."}),"\n",(0,i.jsx)(n.li,{children:"Independent block-space. Transactions on consumer chains do not compete with any other applications. This means that there will be no unexpected congestion, and performance will generally be much better than on a shared smart contract platform such as Ethereum."}),"\n",(0,i.jsx)(n.li,{children:"Projects keep majority of gas fees. Depending on configuration, these fees either go to the project\u2019s community DAO, or can be used in the protocol in other ways."}),"\n",(0,i.jsx)(n.li,{children:"No validator search. Consumer chains do not have their own validator sets, and so do not need to find validators one by one. A governance vote will take place for a chain to get adopted by the provider validators which will encourage participation and signal strong buy-in into the project's long-term success."}),"\n",(0,i.jsx)(n.li,{children:"Instant sovereignty. Consumers can run arbitrary app logic similar to standalone chains. At any time in the future, a consumer chain can elect to become a completely standalone chain, with its own validator set."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"core-protocol",children:"Core protocol"}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["Protocol specification is available as ",(0,i.jsx)(n.a,{href:"https://github.com/cosmos/ibc/blob/main/spec/app/ics-028-cross-chain-validation/overview_and_basic_concepts.md",children:"ICS-028"})," in the IBC repository."]})}),"\n",(0,i.jsx)(n.p,{children:"Once an IBC connection and proper channel is established between a provider and consumer chain, the provider will continually send validator set updates to the consumer over IBC. The consumer uses these validator set updates to update its own validator set in Comet. Thus, the provider validator set is effectively replicated on the consumer."}),"\n",(0,i.jsx)(n.p,{children:"To ensure the security of the consumer chain, provider delegators cannot unbond their tokens until the unbonding periods of each consumer chain has passed. In practice this will not be noticeable to the provider delegators, since consumer chains will be configured to have a slightly shorter unbonding period than the provider."}),"\n",(0,i.jsx)(n.h3,{id:"downtime-slashing",children:"Downtime Slashing"}),"\n",(0,i.jsx)(n.p,{children:"If downtime is initiated by a validator on a consumer chain, a downtime packet will be relayed to the provider to jail that validator for a set amount of time. The validator who committed downtime will then miss out on staking rewards for the configured jailing period."}),"\n",(0,i.jsx)(n.h3,{id:"tokenomics-and-rewards",children:"Tokenomics and Rewards"}),"\n",(0,i.jsx)(n.p,{children:"Consumer chains are free to create their own native token which can be used for fees, and can be created on the consumer chain in the form of inflationary rewards. These rewards can be used to incentivize user behavior, for example, LPing or staking. A portion of these fees and rewards will be sent to provider chain stakers, but that proportion is completely customizable by the developers, and subject to governance."})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>s,a:()=>a});var i=t(7294);const o={},r=i.createContext(o);function a(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);