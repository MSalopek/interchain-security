"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6755],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=i,u=d["".concat(l,".").concat(m)]||d[m]||h[m]||o;return n?a.createElement(u,r(r({ref:t},c),{},{components:n})):a.createElement(u,r({ref:t},c))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:i,r[1]=s;for(var p=2;p<o;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2668:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=n(7462),i=(n(7294),n(3905));const o={sidebar_position:5},r="Changeover Procedure",s={unversionedId:"consumer-development/changeover-procedure",id:"version-v3.2.0/consumer-development/changeover-procedure",title:"Changeover Procedure",description:"Chains that were not initially launched as consumers of replicated security can still participate in the protocol and leverage the economic security of the provider chain. The process where a standalone chain transitions to being a replicated consumer chain is called the changeover procedure and is part of the interchain security protocol. After the changeover, the new consumer chain will retain all existing state, including the IBC clients, connections and channels already established by the chain.",source:"@site/versioned_docs/version-v3.2.0/consumer-development/changeover-procedure.md",sourceDirName:"consumer-development",slug:"/consumer-development/changeover-procedure",permalink:"/interchain-security/legacy/v3.2.0/consumer-development/changeover-procedure",draft:!1,tags:[],version:"v3.2.0",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Offboarding Checklist",permalink:"/interchain-security/legacy/v3.2.0/consumer-development/offboarding"},next:{title:"Overview",permalink:"/interchain-security/legacy/v3.2.0/validators/overview"}},l={},p=[{value:"Overview",id:"overview",level:2},{value:"1. ConsumerAddition proposal submitted to the <code>provider</code> chain",id:"1-consumeraddition-proposal-submitted-to-the-provider-chain",level:3},{value:"2. upgrade proposal on standalone chain",id:"2-upgrade-proposal-on-standalone-chain",level:3},{value:"3. spawn time is reached",id:"3-spawn-time-is-reached",level:3},{value:"4. standalone chain upgrade",id:"4-standalone-chain-upgrade",level:3},{value:"Notes",id:"notes",level:4},{value:"Onboarding Checklist",id:"onboarding-checklist",level:2},{value:"1. Complete testing &amp; integration",id:"1-complete-testing--integration",level:2},{value:"2. Create an Onboarding Repository",id:"2-create-an-onboarding-repository",level:2},{value:"3. Submit a ConsumerChainAddition Governance Proposal to the provider",id:"3-submit-a-consumerchainaddition-governance-proposal-to-the-provider",level:2},{value:"3. Submit an Upgrade Proposal &amp; Prepare for Changeover",id:"3-submit-an-upgrade-proposal--prepare-for-changeover",level:2},{value:"4. Upgrade time \ud83d\ude80",id:"4-upgrade-time-",level:2}],c={toc:p},d="wrapper";function h(e){let{components:t,...n}=e;return(0,i.kt)(d,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"changeover-procedure"},"Changeover Procedure"),(0,i.kt)("p",null,"Chains that were not initially launched as consumers of replicated security can still participate in the protocol and leverage the economic security of the provider chain. The process where a standalone chain transitions to being a replicated consumer chain is called the ",(0,i.kt)("strong",{parentName:"p"},"changeover procedure")," and is part of the interchain security protocol. After the changeover, the new consumer chain will retain all existing state, including the IBC clients, connections and channels already established by the chain."),(0,i.kt)("p",null,"The relevant protocol specifications are available below:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/cosmos/ibc/blob/main/spec/app/ics-028-cross-chain-validation/overview_and_basic_concepts.md#channel-initialization-existing-chains"},"ICS-28 with existing chains"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/interchain-security/legacy/v3.2.0/adrs/adr-010-standalone-changeover"},"ADR in ICS repo"))),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"Standalone to consumer changeover procedure can rougly be separated into 4 parts:"),(0,i.kt)("h3",{id:"1-consumeraddition-proposal-submitted-to-the-provider-chain"},"1. ConsumerAddition proposal submitted to the ",(0,i.kt)("inlineCode",{parentName:"h3"},"provider")," chain"),(0,i.kt)("p",null,'The proposal is equivalent to the "normal" ConsumerAddition proposal submitted by new consumer chains.'),(0,i.kt)("p",null,"However, here are the most important notes and differences between a new consumer chain and a standalone chain performing a changeover:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"chain_id")," must be equal to the standalone chain id"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"initial_height")," field has additional rules to abide by:")),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre"},'{\n...\n    "initial_height" : {\n        // must correspond to current revision number of standalone chain\n        // e.g. stride-1 => "revision_number": 1\n        "revision_number": 1,\n\n        // must correspond to a height that is at least 1 block after the upgrade\n        // that will add the `consumer` module to the standalone chain\n        // e.g. "upgrade_height": 100 => "revision_height": 101\n        "revision_height": 1,\n    },\n...\n}\n')),(0,i.kt)("p",{parentName:"admonition"},"RevisionNumber: 0, RevisionHeight: 111")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"genesis_hash")," can be safely ignored because the chain is already running. A hash of the standalone chain's initial genesis may be used")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"binary_hash")," may not be available ahead of time. All chains performing the changeover go through rigorous testing - if bugs are caught and fixed the hash listed in the proposal may not be the most recent one.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"spawn_time")," listed in the proposal MUST be before the ",(0,i.kt)("inlineCode",{parentName:"p"},"upgrade_height")," listed in the the upgrade proposal on the standalone chain."),(0,i.kt)("admonition",{parentName:"li",type:"caution"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("inlineCode",{parentName:"p"},"spawn_time")," must occur before the ",(0,i.kt)("inlineCode",{parentName:"p"},"upgrade_height")," on the standalone chain is reached becasue the ",(0,i.kt)("inlineCode",{parentName:"p"},"provider")," chain must generate the ",(0,i.kt)("inlineCode",{parentName:"p"},"ConsumerGenesis")," that contains the ",(0,i.kt)("strong",{parentName:"p"},"validator set")," that will be used after the changeover."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"unbonding_period")," must correspond to the value used on the standalone chain. Otherwise, the clients used for the ccv protocol may be incorrectly initialized.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"distribution_transmission_channel")," ",(0,i.kt)("strong",{parentName:"p"},"should be set"),"."))),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Populating ",(0,i.kt)("inlineCode",{parentName:"p"},"distribution_transmission_channel")," will enable the standalone chain to re-use one of the existing channels to the provider for consumer chain rewards distribution. This will preserve the ",(0,i.kt)("inlineCode",{parentName:"p"},"ibc denom")," that may already be in use."),(0,i.kt)("p",{parentName:"admonition"},"If the parameter is not set, a new channel will be created.")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"ccv_timeout_period")," has no important notes")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"transfer_timeout_period")," has no important notes")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"consumer_redistribution_fraction")," has no important notes")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"blocks_per_distribution_transmission")," has no important notes")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"historical_entries")," has no important notes"))),(0,i.kt)("h3",{id:"2-upgrade-proposal-on-standalone-chain"},"2. upgrade proposal on standalone chain"),(0,i.kt)("p",null,"The standalone chain creates an upgrade proposal to include the ",(0,i.kt)("inlineCode",{parentName:"p"},"interchain-security/x/ccv/consumer")," module."),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"The upgrade height in the proposal should correspond to a height that is after the ",(0,i.kt)("inlineCode",{parentName:"p"},"spawn_time")," in the consumer addition proposal submitted to the ",(0,i.kt)("inlineCode",{parentName:"p"},"provider")," chain.")),(0,i.kt)("p",null,"Otherwise, the upgrade is indistinguishable from a regular on-chain upgrade proposal."),(0,i.kt)("h3",{id:"3-spawn-time-is-reached"},"3. spawn time is reached"),(0,i.kt)("p",null,"When the ",(0,i.kt)("inlineCode",{parentName:"p"},"spawn_time")," is reached on the ",(0,i.kt)("inlineCode",{parentName:"p"},"provider")," it will generate a ",(0,i.kt)("inlineCode",{parentName:"p"},"ConsumerGenesis")," that contains the validator set that will supercede the ",(0,i.kt)("inlineCode",{parentName:"p"},"standalone")," validator set."),(0,i.kt)("p",null,"This ",(0,i.kt)("inlineCode",{parentName:"p"},"ConsumerGenesis")," must be available on the standalone chain during the on-chain upgrade."),(0,i.kt)("h3",{id:"4-standalone-chain-upgrade"},"4. standalone chain upgrade"),(0,i.kt)("p",null,"Performing the on-chain upgrade on the standalone chain will add the ",(0,i.kt)("inlineCode",{parentName:"p"},"ccv/consumer")," module and allow the chain to become a ",(0,i.kt)("inlineCode",{parentName:"p"},"consumer")," of replicated security."),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"ConsumerGenesis")," must be exported to a file and placed in the correct folder on the standalone chain before the upgade."),(0,i.kt)("p",{parentName:"admonition"},"The file must be placed at the exact specified location, otherwise the upgrade will not be executed correctly."),(0,i.kt)("p",{parentName:"admonition"},"Usually the file is placed in ",(0,i.kt)("inlineCode",{parentName:"p"},"$NODE_HOME/config"),", but the file name and the exact directory is dictated by the upgrade code on the ",(0,i.kt)("inlineCode",{parentName:"p"},"standalone")," chain."),(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"please check exact instructions provided by the ",(0,i.kt)("inlineCode",{parentName:"li"},"standalone")," chain team"))),(0,i.kt)("p",null,"After the ",(0,i.kt)("inlineCode",{parentName:"p"},"genesis.json")," file has been made available, the process is equivalent to a normal on-chain upgrade. The standalone validator set will sign the next couple of blocks before transferring control to ",(0,i.kt)("inlineCode",{parentName:"p"},"provider")," validator set."),(0,i.kt)("p",null,"The standalone validator set can still be slashed for any infractions if evidence is submitted within the ",(0,i.kt)("inlineCode",{parentName:"p"},"unboding_period"),"."),(0,i.kt)("h4",{id:"notes"},"Notes"),(0,i.kt)("p",null,"The changeover procedure may be updated in the future to create a seamless way of providing the validator set information to the standalone chain."),(0,i.kt)("h2",{id:"onboarding-checklist"},"Onboarding Checklist"),(0,i.kt)("p",null,"This onboarding checklist is slightly different from the one under ",(0,i.kt)("a",{parentName:"p",href:"/interchain-security/legacy/v3.2.0/consumer-development/onboarding"},"Onboarding")),(0,i.kt)("p",null,"Additionally, you can check the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/cosmos/testnets/blob/master/replicated-security/CONSUMER_LAUNCH_GUIDE.md"},"testnet repo")," for a comprehensive guide on preparing and launching consumer chains."),(0,i.kt)("h2",{id:"1-complete-testing--integration"},"1. Complete testing & integration"),(0,i.kt)("ul",{className:"contains-task-list"},(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","test integration with gaia"),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","test your protocol with supported relayer versions (minimum hermes 1.4.1)"),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","test the changeover procedure"),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","reach out to the ICS team if you are facing issues")),(0,i.kt)("h2",{id:"2-create-an-onboarding-repository"},"2. Create an Onboarding Repository"),(0,i.kt)("p",null,"To help validators and other node runners onboard onto your chain, please prepare a repository with information on how to run your chain."),(0,i.kt)("p",null,"This should include (at minimum):"),(0,i.kt)("ul",{className:"contains-task-list"},(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","genesis.json with CCV data (after spawn time passes)"),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","information about relevant seed/peer nodes you are running"),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","relayer information (compatible versions)"),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","copy of your governance proposal (as JSON)"),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","a script showing how to start your chain and connect to peers (optional)"),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","take feedback from other developers, validators and community regarding your onboarding repo and make improvements where applicable")),(0,i.kt)("p",null,"Example of such a repository can be found ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/hyphacoop/ics-testnets/tree/main/game-of-chains-2022/sputnik"},"here"),"."),(0,i.kt)("h2",{id:"3-submit-a-consumerchainaddition-governance-proposal-to-the-provider"},"3. Submit a ConsumerChainAddition Governance Proposal to the provider"),(0,i.kt)("p",null,"Before you submit a ",(0,i.kt)("inlineCode",{parentName:"p"},"ConsumerChainAddition")," proposal, please provide a ",(0,i.kt)("inlineCode",{parentName:"p"},"spawn_time")," that is ",(0,i.kt)("strong",{parentName:"p"},"before")," the the ",(0,i.kt)("inlineCode",{parentName:"p"},"upgrade_height")," of the upgrade that will introduce the ",(0,i.kt)("inlineCode",{parentName:"p"},"ccv module")," to your chain."),(0,i.kt)("admonition",{type:"danger"},(0,i.kt)("p",{parentName:"admonition"},"If the ",(0,i.kt)("inlineCode",{parentName:"p"},"spawn_time")," happens after your ",(0,i.kt)("inlineCode",{parentName:"p"},"upgrade_height")," the provider will not be able to communicate the new validator set to be used after the changeover.")),(0,i.kt)("p",null,"Additionally, reach out to the community via the ",(0,i.kt)("a",{parentName:"p",href:"https://forum.cosmos.network/"},"forum")," to formalize your intention to become an ICS consumer, gather community support and accept feedback from the community, validators and developers."),(0,i.kt)("ul",{className:"contains-task-list"},(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","determine your chain's spawn time"),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","determine consumer chain parameters to be put in the proposal"),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","take note to include a link to your onboarding repository")),(0,i.kt)("p",null,"Example of a consumer chain addition proposal."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'// ConsumerAdditionProposal is a governance proposal on the provider chain to spawn a new consumer chain or add a standalone chain.\n// If it passes, then all validators on the provider chain are expected to validate the consumer chain at spawn time.\n// It is recommended that spawn time occurs after the proposal end time and that it is scheduled to happen before the standalone chain upgrade\n// that sill introduce the ccv module.\n{\n    // Title of the proposal\n    "title": "Changeover Standalone chain",\n    // Description of the proposal\n    // format the text as a .md file and include the file in your onboarding repository\n    "description": ".md description of your chain and all other relevant information",\n    // Proposed chain-id of the new consumer chain.\n    // Must be unique from all other consumer chain ids of the executing provider chain.\n    "chain_id": "standalone-1",\n    // Initial height of new consumer chain.\n    // For a completely new chain, this will be {0,1}.\n    "initial_height" : {\n        // must correspond to current revision number of standalone chain\n        // e.g. standalone-1 => "revision_number": 1\n        "revision_number": 1,\n\n        // must correspond to a height that is at least 1 block after the upgrade\n        // that will add the `consumer` module to the standalone chain\n        // e.g. "upgrade_height": 100 => "revision_height": 101\n        "revision_number": 1,\n    },\n    // Hash of the consumer chain genesis state without the consumer CCV module genesis params.\n    // => not relevant for changeover procedure\n    "genesis_hash": "d86d756e10118e66e6805e9cc476949da2e750098fcc7634fd0cc77f57a0b2b0",\n    // Hash of the consumer chain binary that should be run by validators on standalone chain upgrade\n    // => not relevant for changeover procedure as it may become stale\n    "binary_hash": "376cdbd3a222a3d5c730c9637454cd4dd925e2f9e2e0d0f3702fc922928583f1",\n    // Time on the provider chain at which the consumer chain genesis is finalized and all validators\n    // will be responsible for starting their consumer chain validator node.\n    "spawn_time": "2023-02-28T20:40:00.000000Z",\n    // Unbonding period for the consumer chain.\n    // It should should be smaller than that of the provider.\n    "unbonding_period": 86400000000000,\n    // Timeout period for CCV related IBC packets.\n    // Packets are considered timed-out after this interval elapses.\n    "ccv_timeout_period": 259200000000000,\n    // IBC transfer packets will timeout after this interval elapses.\n    "transfer_timeout_period": 1800000000000,\n    // The fraction of tokens allocated to the consumer redistribution address during distribution events.\n    // The fraction is a string representing a decimal number. For example "0.75" would represent 75%.\n    // The reward amount distributed to the provider is calculated as: 1 - consumer_redistribution_fraction.\n    "consumer_redistribution_fraction": "0.75",\n    // BlocksPerDistributionTransmission is the number of blocks between IBC token transfers from the consumer chain to the provider chain.\n    // eg. send rewards to the provider every 1000 blocks\n    "blocks_per_distribution_transmission": 1000,\n    // The number of historical info entries to persist in store.\n    // This param is a part of the cosmos sdk staking module. In the case of\n    // a ccv enabled consumer chain, the ccv module acts as the staking module.\n    "historical_entries": 10000,\n    // The ID of a token transfer channel used for the Reward Distribution\n    // sub-protocol. If DistributionTransmissionChannel == "", a new transfer\n    // channel is created on top of the same connection as the CCV channel.\n    // Note that transfer_channel_id is the ID of the channel end on the consumer chain.\n    // it is most relevant for chains performing a standalone to consumer changeover\n    // in order to maintan the existing ibc transfer channel\n    "distribution_transmission_channel": "channel-123"  // NOTE: use existing transfer channel if available\n}\n')),(0,i.kt)("h2",{id:"3-submit-an-upgrade-proposal--prepare-for-changeover"},"3. Submit an Upgrade Proposal & Prepare for Changeover"),(0,i.kt)("p",null,"This proposal should add the ccv ",(0,i.kt)("inlineCode",{parentName:"p"},"consumer")," module to your chain."),(0,i.kt)("ul",{className:"contains-task-list"},(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","proposal ",(0,i.kt)("inlineCode",{parentName:"li"},"upgrade_height")," must happen after ",(0,i.kt)("inlineCode",{parentName:"li"},"spawn_time")," in the ",(0,i.kt)("inlineCode",{parentName:"li"},"ConsumerAdditionProposal")),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","advise validators about the exact procedure for your chain and point them to your onboarding repository")),(0,i.kt)("h2",{id:"4-upgrade-time-"},"4. Upgrade time \ud83d\ude80"),(0,i.kt)("ul",{className:"contains-task-list"},(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","after ",(0,i.kt)("inlineCode",{parentName:"li"},"spawn_time"),", request ",(0,i.kt)("inlineCode",{parentName:"li"},"ConsumerGenesis")," from the ",(0,i.kt)("inlineCode",{parentName:"li"},"provider")," and place it in ",(0,i.kt)("inlineCode",{parentName:"li"},"<CURRENT_USER_HOME_DIR>/.sovereign/config/genesis.json")),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","upgrade the binary to the one listed in your ",(0,i.kt)("inlineCode",{parentName:"li"},"UpgradeProposal"))),(0,i.kt)("p",null,'The chain starts after at least 66.67% of standalone voting power comes online. The consumer chain is considered interchain secured once the "old" validator set signs a couple of blocks and transfers control to the ',(0,i.kt)("inlineCode",{parentName:"p"},"provider")," validator set."),(0,i.kt)("ul",{className:"contains-task-list"},(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","provide a repo with onboarding instructions for validators (it should already be listed in the proposal)"),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","genesis.json after ",(0,i.kt)("inlineCode",{parentName:"li"},"spawn_time")," obtained from ",(0,i.kt)("inlineCode",{parentName:"li"},"provider")," (MUST contain the initial validator set)"),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","maintenance & emergency contact info (relevant discord, telegram, slack or other communication channels)")))}h.isMDXComponent=!0}}]);