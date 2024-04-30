"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9681],{7598:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>d});var s=i(5893),t=i(1151);const a={sidebar_position:1},r="Overview",o={id:"validators/overview",title:"Overview",description:"We advise that you join the Replicated Security testnet to gain hands-on experience with running consumer chains.",source:"@site/versioned_docs/version-v4.0.0/validators/overview.md",sourceDirName:"validators",slug:"/validators/overview",permalink:"/interchain-security/validators/overview",draft:!1,unlisted:!1,tags:[],version:"v4.0.0",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Consumer Genesis Transformation",permalink:"/interchain-security/consumer-development/consumer-genesis-transformation"},next:{title:"Joining Replicated Security testnet",permalink:"/interchain-security/validators/joining-testnet"}},c={},d=[{value:"Startup sequence overview",id:"startup-sequence-overview",level:2},{value:"1. Consumer Chain init + 2. Genesis generation",id:"1-consumer-chain-init--2-genesis-generation",level:3},{value:"3. Submit Proposal",id:"3-submit-proposal",level:3},{value:"4. CCV Genesis state generation",id:"4-ccv-genesis-state-generation",level:3},{value:"5. Updating the genesis file",id:"5-updating-the-genesis-file",level:3},{value:"6. Chain start",id:"6-chain-start",level:3},{value:"7. Creating IBC connections",id:"7-creating-ibc-connections",level:3},{value:"Downtime Infractions",id:"downtime-infractions",level:2},{value:"Double-signing Infractions",id:"double-signing-infractions",level:2},{value:"Key assignment",id:"key-assignment",level:2},{value:"References:",id:"references",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"overview",children:"Overview"}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["We advise that you join the ",(0,s.jsx)(n.a,{href:"https://github.com/cosmos/testnets/tree/master/replicated-security",children:"Replicated Security testnet"})," to gain hands-on experience with running consumer chains."]})}),"\n",(0,s.jsx)(n.p,{children:"At present, replicated security requires all validators of the provider chain (ie. Cosmos Hub) to run validator nodes for all governance-approved consumer chains."}),"\n",(0,s.jsxs)(n.p,{children:["Once a ",(0,s.jsx)(n.code,{children:"ConsumerAdditionProposal"})," passes, validators need to prepare to run the consumer chain binaries (these will be linked in their proposals) and set up validator nodes on governance-approved consumer chains."]}),"\n",(0,s.jsx)(n.p,{children:"Provider chain and consumer chains represent standalone chains that only share the validator set ie. the same validator operators are tasked with running all chains."}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsx)(n.p,{children:"To validate a consumer chain and be eligible for rewards validators are required to be in the active set of the provider chain (first 180 validators for Cosmos Hub)."})}),"\n",(0,s.jsx)(n.h2,{id:"startup-sequence-overview",children:"Startup sequence overview"}),"\n",(0,s.jsxs)(n.p,{children:["Consumer chains cannot start and be secured by the validator set of the provider unless a ",(0,s.jsx)(n.code,{children:"ConsumerAdditionProposal"})," is passed.\nEach proposal contains defines a ",(0,s.jsx)(n.code,{children:"spawn_time"})," - the timestamp when the consumer chain genesis is finalized and the consumer chain clients get initialized on the provider."]}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["Validators are required to run consumer chain binaries only after ",(0,s.jsx)(n.code,{children:"spawn_time"})," has passed."]})}),"\n",(0,s.jsx)(n.p,{children:"Please note that any additional instructions pertaining to specific consumer chain launches will be available before spawn time. The chain start will be stewarded by the Cosmos Hub team and the teams developing their respective consumer chains."}),"\n",(0,s.jsxs)(n.p,{children:["The image below illustrates the startup sequence\n",(0,s.jsx)(n.img,{alt:"startup",src:i(9558).Z+"",width:"942",height:"632"})]}),"\n",(0,s.jsx)(n.h3,{id:"1-consumer-chain-init--2-genesis-generation",children:"1. Consumer Chain init + 2. Genesis generation"}),"\n",(0,s.jsxs)(n.p,{children:["Consumer chain team initializes the chain genesis.json and prepares binaries which will be listed in the ",(0,s.jsx)(n.code,{children:"ConsumerAdditionProposal"})]}),"\n",(0,s.jsx)(n.h3,{id:"3-submit-proposal",children:"3. Submit Proposal"}),"\n",(0,s.jsxs)(n.p,{children:["Consumer chain team (or their advocates) submits a ",(0,s.jsx)(n.code,{children:"ConsumerAdditionProposal"}),".\nThe most important parameters for validators are:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"spawn_time"})," - the time after which the consumer chain must be started"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"genesis_hash"})," - hash of the pre-ccv genesis.json; the file does not contain any validator info -> the information is available only after the proposal is passed and ",(0,s.jsx)(n.code,{children:"spawn_time"})," is reached"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"binary_hash"})," - hash of the consumer chain binary used to validate the software builds"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"4-ccv-genesis-state-generation",children:"4. CCV Genesis state generation"}),"\n",(0,s.jsxs)(n.p,{children:["After reaching ",(0,s.jsx)(n.code,{children:"spawn_time"})," the provider chain will automatically create the CCV validator states that will be used to populate the corresponding fields in the consumer chain ",(0,s.jsx)(n.code,{children:"genesis.json"}),". The CCV validator set consists of the validator set on the provider at ",(0,s.jsx)(n.code,{children:"spawn_time"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"The state can be queried on the provider chain (in this case the Cosmos Hub):"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:" gaiad query provider consumer-genesis <consumer chain ID> -o json > ccvconsumer_genesis.json\n"})}),"\n",(0,s.jsxs)(n.p,{children:["This is used by the launch coordinator to create the final ",(0,s.jsx)(n.code,{children:"genesis.json"})," that will be distributed to validators in step 5."]}),"\n",(0,s.jsx)(n.h3,{id:"5-updating-the-genesis-file",children:"5. Updating the genesis file"}),"\n",(0,s.jsxs)(n.p,{children:["Upon reaching the ",(0,s.jsx)(n.code,{children:"spawn_time"})," the initial validator set state will become available on the provider chain. The initial validator set is included in the ",(0,s.jsx)(n.strong,{children:"final genesis.json"})," of the consumer chain."]}),"\n",(0,s.jsx)(n.h3,{id:"6-chain-start",children:"6. Chain start"}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsx)(n.p,{children:"The consumer chain will start producing blocks as soon as 66.67% of the provider chain's voting power comes online (on the consumer chain). The relayer should be started after block production commences."})}),"\n",(0,s.jsxs)(n.p,{children:["The new ",(0,s.jsx)(n.code,{children:"genesis.json"})," containing the initial validator set will be distributed to validators by the consumer chain team (launch coordinator). Each validator should use the provided ",(0,s.jsx)(n.code,{children:"genesis.json"})," to start their consumer chain node."]}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["Please pay attention to any onboarding repositories provided by the consumer chain teams.\nRecommendations are available in ",(0,s.jsx)(n.a,{href:"/interchain-security/consumer-development/onboarding",children:"Consumer Onboarding Checklist"}),".\nAnother comprehensive guide is available in the ",(0,s.jsx)(n.a,{href:"https://github.com/cosmos/testnets/blob/master/replicated-security/CONSUMER_LAUNCH_GUIDE.md",children:"Replicated Security testnet repo"}),"."]})}),"\n",(0,s.jsx)(n.h3,{id:"7-creating-ibc-connections",children:"7. Creating IBC connections"}),"\n",(0,s.jsx)(n.p,{children:"Finally, to fully establish replicated security an IBC relayer is used to establish connections and create the required channels."}),"\n",(0,s.jsx)(n.admonition,{type:"warning",children:(0,s.jsx)(n.p,{children:"The relayer can establish the connection only after the consumer chain starts producing blocks."})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"hermes create connection --a-chain <consumer chain ID> --a-client 07-tendermint-0 --b-client <client assigned by provider chain> \nhermes create channel --a-chain <consumer chain ID> --a-port consumer --b-port provider --order ordered --a-connection connection-0 --channel-version 1\nhermes start\n"})}),"\n",(0,s.jsx)(n.h2,{id:"downtime-infractions",children:"Downtime Infractions"}),"\n",(0,s.jsxs)(n.p,{children:["At present, the consumer chain can report evidence about downtime infractions to the provider chain. The ",(0,s.jsx)(n.code,{children:"min_signed_per_window"})," and ",(0,s.jsx)(n.code,{children:"signed_blocks_window"})," can be different on each consumer chain and are subject to changes via consumer chain governance."]}),"\n",(0,s.jsxs)(n.admonition,{type:"info",children:[(0,s.jsx)(n.p,{children:"Causing a downtime infraction on any consumer chain will not incur a slash penalty. Instead, the offending validator will be jailed on the provider chain and consequently on all consumer chains."}),(0,s.jsxs)(n.p,{children:["To unjail, the validator must wait for the jailing period to elapse on the provider chain and ",(0,s.jsx)(n.a,{href:"https://hub.cosmos.network/main/validators/validator-setup.html#unjail-validator",children:"submit an unjail transaction"})," on the provider chain. After unjailing on the provider, the validator will be unjailed on all consumer chains."]}),(0,s.jsxs)(n.p,{children:["More information is available in ",(0,s.jsx)(n.a,{href:"/interchain-security/features/slashing#downtime-infractions",children:"Downtime Slashing documentation"})]})]}),"\n",(0,s.jsx)(n.h2,{id:"double-signing-infractions",children:"Double-signing Infractions"}),"\n",(0,s.jsxs)(n.p,{children:["To learn more about equivocation handling in replicated security check out the ",(0,s.jsx)(n.a,{href:"/interchain-security/features/slashing",children:"Slashing"})," documentation section."]}),"\n",(0,s.jsx)(n.h2,{id:"key-assignment",children:"Key assignment"}),"\n",(0,s.jsx)(n.p,{children:"Validators can use different consensus keys on the provider and each of the consumer chains. The consumer chain consensus key must be registered on the provider before use."}),"\n",(0,s.jsxs)(n.p,{children:["For more information check out the ",(0,s.jsx)(n.a,{href:"/interchain-security/features/key-assignment",children:"Key assignment overview and guide"})]}),"\n",(0,s.jsx)(n.h2,{id:"references",children:"References:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://hub.cosmos.network/main/validators/validator-faq.html",children:"Cosmos Hub Validators FAQ"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://hub.cosmos.network/main/validators/validator-setup.html",children:"Cosmos Hub Running a validator"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://github.com/cosmos/testnets/blob/master/replicated-security/CONSUMER_LAUNCH_GUIDE.md#chain-launch",children:"Startup Sequence"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://hub.cosmos.network/main/validators/validator-setup.html#unjail-validator",children:"Submit Unjailing Transaction"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},9558:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/hypha-consumer-start-process-2141109f76c584706dd994d7965fd692.svg"},1151:(e,n,i)=>{i.d(n,{Z:()=>o,a:()=>r});var s=i(7294);const t={},a=s.createContext(t);function r(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);