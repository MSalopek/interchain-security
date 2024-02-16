"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3813],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),u=i,h=d["".concat(c,".").concat(u)]||d[u]||m[u]||o;return n?a.createElement(h,r(r({ref:t},p),{},{components:n})):a.createElement(h,r({ref:t},p))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:i,r[1]=s;for(var l=2;l<o;l++)r[l]=n[l];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1670:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var a=n(7462),i=(n(7294),n(3905));const o={sidebar_position:3,title:"Onboarding Checklist"},r="Consumer Onboarding Checklist",s={unversionedId:"consumer-development/onboarding",id:"consumer-development/onboarding",title:"Onboarding Checklist",description:"The following checklists will aid in onboarding a new consumer chain to replicated security.",source:"@site/docs/consumer-development/onboarding.md",sourceDirName:"consumer-development",slug:"/consumer-development/onboarding",permalink:"/interchain-security/legacy/consumer-development/onboarding",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Onboarding Checklist"},sidebar:"tutorialSidebar",previous:{title:"Consumer Chain Governance",permalink:"/interchain-security/legacy/consumer-development/consumer-chain-governance"},next:{title:"Offboarding Checklist",permalink:"/interchain-security/legacy/consumer-development/offboarding"}},c={},l=[{value:"1. Complete testing &amp; integration",id:"1-complete-testing--integration",level:2},{value:"2. Create an Onboarding Repository",id:"2-create-an-onboarding-repository",level:2},{value:"3. Submit a Governance Proposal",id:"3-submit-a-governance-proposal",level:2},{value:"4. Launch",id:"4-launch",level:2}],p={toc:l},d="wrapper";function m(e){let{components:t,...n}=e;return(0,i.kt)(d,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"consumer-onboarding-checklist"},"Consumer Onboarding Checklist"),(0,i.kt)("p",null,"The following checklists will aid in onboarding a new consumer chain to replicated security."),(0,i.kt)("p",null,"Additionally, you can check the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/cosmos/testnets/blob/master/replicated-security/CONSUMER_LAUNCH_GUIDE.md"},"testnet repo")," for a comprehensive guide on preparing and launching consumer chains."),(0,i.kt)("h2",{id:"1-complete-testing--integration"},"1. Complete testing & integration"),(0,i.kt)("ul",{className:"contains-task-list"},(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","test integration with gaia"),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","test your protocol with supported relayer versions (minimum hermes 1.4.1)"),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","reach out to the ICS team if you are facing issues")),(0,i.kt)("h2",{id:"2-create-an-onboarding-repository"},"2. Create an Onboarding Repository"),(0,i.kt)("p",null,"To help validators and other node runners onboard onto your chain, please prepare a repository with information on how to run your chain."),(0,i.kt)("p",null,"This should include (at minimum):"),(0,i.kt)("ul",{className:"contains-task-list"},(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","genesis.json without CCV data (before the proposal passes)"),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","genesis.json with CCV data (after spawn time passes). Check if CCV data needs to be transformed (see ",(0,i.kt)("a",{parentName:"li",href:"/interchain-security/legacy/consumer-development/consumer-genesis-transformation"},"Transform Consumer Genesis"),")"),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","information about relevant seed/peer nodes you are running"),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","relayer information (compatible versions)"),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","copy of your governance proposal (as JSON)"),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","a script showing how to start your chain and connect to peers (optional)"),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","take feedback from other developers, validators and community regarding your onboarding repo and make improvements where applicable")),(0,i.kt)("p",null,"Example of such a repository can be found ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/hyphacoop/ics-testnets/tree/main/game-of-chains-2022/sputnik"},"here"),"."),(0,i.kt)("h2",{id:"3-submit-a-governance-proposal"},"3. Submit a Governance Proposal"),(0,i.kt)("p",null,"Before you submit a ",(0,i.kt)("inlineCode",{parentName:"p"},"ConsumerChainAddition")," proposal, please consider allowing at least a day between your proposal passing and the chain spawn time. This will allow the validators, other node operators and the community to prepare for the chain launch.\nIf possible, please set your spawn time so people from different parts of the globe can be available in case of emergencies. Ideally, you should set your spawn time to be between 12:00 UTC and 20:00 UTC so most validator operators are available and ready to respond to any issues."),(0,i.kt)("p",null,"Additionally, reach out to the community via the ",(0,i.kt)("a",{parentName:"p",href:"https://forum.cosmos.network/"},"forum")," to formalize your intention to become an ICS consumer, gather community support and accept feedback from the community, validators and developers."),(0,i.kt)("ul",{className:"contains-task-list"},(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","determine your chain's spawn time"),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","determine consumer chain parameters to be put in the proposal"),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","take note to include a link to your onboarding repository"),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","describe the purpose and benefits of running your chain")),(0,i.kt)("p",null,"Example of a consumer chain addition proposal."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'// ConsumerAdditionProposal is a governance proposal on the provider chain to spawn a new consumer chain.\n// If it passes, then all validators on the provider chain are expected to validate the consumer chain at spawn time.\n// It is recommended that spawn time occurs after the proposal end time.\n{\n    // Title of the proposal\n    "title": "Add consumer chain",\n    // Description of the proposal\n    // format the text as a .md file and include the file in your onboarding repository\n    "description": ".md description of your chain and all other relevant information",\n    // Proposed chain-id of the new consumer chain.\n    // Must be unique from all other consumer chain ids of the executing provider chain.\n    "chain_id": "newchain-1",\n    // Initial height of new consumer chain.\n    // For a completely new chain, this will be {0,1}.\n    "initial_height" : {\n        "revision_height": 0,\n        "revision_number": 1,\n    },\n    // Hash of the consumer chain genesis state without the consumer CCV module genesis params.\n    // It is used for off-chain confirmation of genesis.json validity by validators and other parties.\n    "genesis_hash": "d86d756e10118e66e6805e9cc476949da2e750098fcc7634fd0cc77f57a0b2b0",\n    // Hash of the consumer chain binary that should be run by validators on chain initialization.\n    // It is used for off-chain confirmation of binary validity by validators and other parties.\n    "binary_hash": "376cdbd3a222a3d5c730c9637454cd4dd925e2f9e2e0d0f3702fc922928583f1",\n    // Time on the provider chain at which the consumer chain genesis is finalized and all validators\n    // will be responsible for starting their consumer chain validator node.\n    "spawn_time": "2023-02-28T20:40:00.000000Z",\n    // Unbonding period for the consumer chain.\n    // It should be smaller than that of the provider.\n    "unbonding_period": 86400000000000,\n    // Timeout period for CCV related IBC packets.\n    // Packets are considered timed-out after this interval elapses.\n    "ccv_timeout_period": 259200000000000,\n    // IBC transfer packets will timeout after this interval elapses.\n    "transfer_timeout_period": 1800000000000,\n    // The fraction of tokens allocated to the consumer redistribution address during distribution events.\n    // The fraction is a string representing a decimal number. For example "0.75" would represent 75%.\n    // The reward amount distributed to the provider is calculated as: 1 - consumer_redistribution_fraction.\n    "consumer_redistribution_fraction": "0.75",\n    // BlocksPerDistributionTransmission is the number of blocks between IBC token transfers from the consumer chain to the provider chain.\n    // eg. send rewards to the provider every 1000 blocks\n    "blocks_per_distribution_transmission": 1000,\n    // The number of historical info entries to persist in store.\n    // This param is a part of the cosmos sdk staking module. In the case of\n    // a ccv enabled consumer chain, the ccv module acts as the staking module.\n    "historical_entries": 10000,\n    // The ID of a token transfer channel used for the Reward Distribution\n    // sub-protocol. If DistributionTransmissionChannel == "", a new transfer\n    // channel is created on top of the same connection as the CCV channel.\n    // Note that transfer_channel_id is the ID of the channel end on the consumer chain.\n    // it is most relevant for chains performing a sovereign to consumer changeover\n    // in order to maintain the existing ibc transfer channel\n    "distribution_transmission_channel": "channel-123"\n}\n')),(0,i.kt)("h2",{id:"4-launch"},"4. Launch"),(0,i.kt)("p",null,"The consumer chain starts after at least 66.67% of all provider's voting power comes online. The consumer chain is considered interchain secured once the appropriate CCV channels are established and the first validator set update is propagated from the provider to the consumer"),(0,i.kt)("ul",{className:"contains-task-list"},(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","provide a repo with onboarding instructions for validators (it should already be listed in the proposal)"),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","genesis.json with ccv data populated (MUST contain the initial validator set)"),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","maintenance & emergency contact info (relevant discord, telegram, slack or other communication channels)"),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","have a block explorer in place to track chain activity & health")))}m.isMDXComponent=!0}}]);