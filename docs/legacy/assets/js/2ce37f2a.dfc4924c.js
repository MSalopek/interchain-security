"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2979],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var i=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=i.createContext({}),c=function(e){var n=i.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=c(e.components);return i.createElement(l.Provider,{value:n},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},u=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(t),u=a,m=d["".concat(l,".").concat(u)]||d[u]||h[u]||r;return t?i.createElement(m,o(o({ref:n},p),{},{components:t})):i.createElement(m,o({ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,o=new Array(r);o[0]=u;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[d]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<r;c++)o[c]=t[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}u.displayName="MDXCreateElement"},5094:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var i=t(7462),a=(t(7294),t(3905));const r={sidebar_position:1},o="Overview",s={unversionedId:"validators/overview",id:"version-v3.3.0/validators/overview",title:"Overview",description:"We advise that you join the Replicated Security testnet to gain hands-on experience with running consumer chains.",source:"@site/versioned_docs/version-v3.3.0/validators/overview.md",sourceDirName:"validators",slug:"/validators/overview",permalink:"/interchain-security/legacy/v3.3.0/validators/overview",draft:!1,tags:[],version:"v3.3.0",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Consumer Genesis Transformation",permalink:"/interchain-security/legacy/v3.3.0/consumer-development/consumer-genesis-transformation"},next:{title:"Joining Replicated Security testnet",permalink:"/interchain-security/legacy/v3.3.0/validators/joining-testnet"}},l={},c=[{value:"Startup sequence overview",id:"startup-sequence-overview",level:2},{value:"1. Consumer Chain init + 2. Genesis generation",id:"1-consumer-chain-init--2-genesis-generation",level:3},{value:"3. Submit Proposal",id:"3-submit-proposal",level:3},{value:"4. CCV Genesis state generation",id:"4-ccv-genesis-state-generation",level:3},{value:"5. Updating the genesis file",id:"5-updating-the-genesis-file",level:3},{value:"6. Chain start",id:"6-chain-start",level:3},{value:"7. Creating IBC connections",id:"7-creating-ibc-connections",level:3},{value:"Downtime Infractions",id:"downtime-infractions",level:2},{value:"Double-signing Infractions",id:"double-signing-infractions",level:2},{value:"Key assignment",id:"key-assignment",level:2},{value:"References:",id:"references",level:2}],p={toc:c},d="wrapper";function h(e){let{components:n,...r}=e;return(0,a.kt)(d,(0,i.Z)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"overview"},"Overview"),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"We advise that you join the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/cosmos/testnets/tree/master/replicated-security"},"Replicated Security testnet")," to gain hands-on experience with running consumer chains.")),(0,a.kt)("p",null,"At present, replicated security requires all validators of the provider chain (ie. Cosmos Hub) to run validator nodes for all governance-approved consumer chains."),(0,a.kt)("p",null,"Once a ",(0,a.kt)("inlineCode",{parentName:"p"},"ConsumerAdditionProposal")," passes, validators need to prepare to run the consumer chain binaries (these will be linked in their proposals) and set up validator nodes on governance-approved consumer chains."),(0,a.kt)("p",null,"Provider chain and consumer chains represent standalone chains that only share the validator set ie. the same validator operators are tasked with running all chains."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"To validate a consumer chain and be eligible for rewards validators are required to be in the active set of the provider chain (first 180 validators for Cosmos Hub).")),(0,a.kt)("h2",{id:"startup-sequence-overview"},"Startup sequence overview"),(0,a.kt)("p",null,"Consumer chains cannot start and be secured by the validator set of the provider unless a ",(0,a.kt)("inlineCode",{parentName:"p"},"ConsumerAdditionProposal")," is passed.\nEach proposal contains defines a ",(0,a.kt)("inlineCode",{parentName:"p"},"spawn_time")," - the timestamp when the consumer chain genesis is finalized and the consumer chain clients get initialized on the provider."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Validators are required to run consumer chain binaries only after ",(0,a.kt)("inlineCode",{parentName:"p"},"spawn_time")," has passed.")),(0,a.kt)("p",null,"Please note that any additional instructions pertaining to specific consumer chain launches will be available before spawn time. The chain start will be stewarded by the Cosmos Hub team and the teams developing their respective consumer chains."),(0,a.kt)("p",null,"The image below illustrates the startup sequence\n",(0,a.kt)("img",{alt:"startup",src:t(7728).Z,width:"942",height:"632"})),(0,a.kt)("h3",{id:"1-consumer-chain-init--2-genesis-generation"},"1. Consumer Chain init + 2. Genesis generation"),(0,a.kt)("p",null,"Consumer chain team initializes the chain genesis.json and prepares binaries which will be listed in the ",(0,a.kt)("inlineCode",{parentName:"p"},"ConsumerAdditionProposal")),(0,a.kt)("h3",{id:"3-submit-proposal"},"3. Submit Proposal"),(0,a.kt)("p",null,"Consumer chain team (or their advocates) submits a ",(0,a.kt)("inlineCode",{parentName:"p"},"ConsumerAdditionProposal"),".\nThe most important parameters for validators are:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"spawn_time")," - the time after which the consumer chain must be started"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"genesis_hash")," - hash of the pre-ccv genesis.json; the file does not contain any validator info -> the information is available only after the proposal is passed and ",(0,a.kt)("inlineCode",{parentName:"li"},"spawn_time")," is reached"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"binary_hash")," - hash of the consumer chain binary used to validate the software builds")),(0,a.kt)("h3",{id:"4-ccv-genesis-state-generation"},"4. CCV Genesis state generation"),(0,a.kt)("p",null,"After reaching ",(0,a.kt)("inlineCode",{parentName:"p"},"spawn_time")," the provider chain will automatically create the CCV validator states that will be used to populate the corresponding fields in the consumer chain ",(0,a.kt)("inlineCode",{parentName:"p"},"genesis.json"),". The CCV validator set consists of the validator set on the provider at ",(0,a.kt)("inlineCode",{parentName:"p"},"spawn_time"),"."),(0,a.kt)("p",null,"The state can be queried on the provider chain (in this case the Cosmos Hub):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"}," gaiad query provider consumer-genesis <consumer chain ID> -o json > ccvconsumer_genesis.json\n")),(0,a.kt)("p",null,"This is used by the launch coordinator to create the final ",(0,a.kt)("inlineCode",{parentName:"p"},"genesis.json")," that will be distributed to validators in step 5."),(0,a.kt)("h3",{id:"5-updating-the-genesis-file"},"5. Updating the genesis file"),(0,a.kt)("p",null,"Upon reaching the ",(0,a.kt)("inlineCode",{parentName:"p"},"spawn_time")," the initial validator set state will become available on the provider chain. The initial validator set is included in the ",(0,a.kt)("strong",{parentName:"p"},"final genesis.json")," of the consumer chain."),(0,a.kt)("h3",{id:"6-chain-start"},"6. Chain start"),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"The consumer chain will start producing blocks as soon as 66.67% of the provider chain's voting power comes online (on the consumer chain). The relayer should be started after block production commences.")),(0,a.kt)("p",null,"The new ",(0,a.kt)("inlineCode",{parentName:"p"},"genesis.json")," containing the initial validator set will be distributed to validators by the consumer chain team (launch coordinator). Each validator should use the provided ",(0,a.kt)("inlineCode",{parentName:"p"},"genesis.json")," to start their consumer chain node."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Please pay attention to any onboarding repositories provided by the consumer chain teams.\nRecommendations are available in ",(0,a.kt)("a",{parentName:"p",href:"/interchain-security/legacy/v3.3.0/consumer-development/onboarding"},"Consumer Onboarding Checklist"),".\nAnother comprehensive guide is available in the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/cosmos/testnets/blob/master/replicated-security/CONSUMER_LAUNCH_GUIDE.md"},"Replicated Security testnet repo"),".")),(0,a.kt)("h3",{id:"7-creating-ibc-connections"},"7. Creating IBC connections"),(0,a.kt)("p",null,"Finally, to fully establish replicated security an IBC relayer is used to establish connections and create the required channels."),(0,a.kt)("admonition",{type:"warning"},(0,a.kt)("p",{parentName:"admonition"},"The relayer can establish the connection only after the consumer chain starts producing blocks.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"hermes create connection --a-chain <consumer chain ID> --a-client 07-tendermint-0 --b-client <client assigned by provider chain> \nhermes create channel --a-chain <consumer chain ID> --a-port consumer --b-port provider --order ordered --a-connection connection-0 --channel-version 1\nhermes start\n")),(0,a.kt)("h2",{id:"downtime-infractions"},"Downtime Infractions"),(0,a.kt)("p",null,"At present, the consumer chain can report evidence about downtime infractions to the provider chain. The ",(0,a.kt)("inlineCode",{parentName:"p"},"min_signed_per_window")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"signed_blocks_window")," can be different on each consumer chain and are subject to changes via consumer chain governance."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Causing a downtime infraction on any consumer chain will not incur a slash penalty. Instead, the offending validator will be jailed on the provider chain and consequently on all consumer chains."),(0,a.kt)("p",{parentName:"admonition"},"To unjail, the validator must wait for the jailing period to elapse on the provider chain and ",(0,a.kt)("a",{parentName:"p",href:"https://hub.cosmos.network/main/validators/validator-setup.html#unjail-validator"},"submit an unjail transaction")," on the provider chain. After unjailing on the provider, the validator will be unjailed on all consumer chains."),(0,a.kt)("p",{parentName:"admonition"},"More information is available in ",(0,a.kt)("a",{parentName:"p",href:"/interchain-security/legacy/v3.3.0/features/slashing#downtime-infractions"},"Downtime Slashing documentation"))),(0,a.kt)("h2",{id:"double-signing-infractions"},"Double-signing Infractions"),(0,a.kt)("p",null,"To learn more about equivocation handling in replicated security check out the ",(0,a.kt)("a",{parentName:"p",href:"/interchain-security/legacy/v3.3.0/features/slashing"},"Slashing")," documentation section."),(0,a.kt)("h2",{id:"key-assignment"},"Key assignment"),(0,a.kt)("p",null,"Validators can use different consensus keys on the provider and each of the consumer chains. The consumer chain consensus key must be registered on the provider before use."),(0,a.kt)("p",null,"For more information check our the ",(0,a.kt)("a",{parentName:"p",href:"/interchain-security/legacy/v3.3.0/features/key-assignment"},"Key assignment overview and guide")),(0,a.kt)("h2",{id:"references"},"References:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://hub.cosmos.network/main/validators/validator-faq.html"},"Cosmos Hub Validators FAQ")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://hub.cosmos.network/main/validators/validator-setup.html"},"Cosmos Hub Running a validator")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/cosmos/testnets/blob/master/replicated-security/CONSUMER_LAUNCH_GUIDE.md#chain-launch"},"Startup Sequence")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://hub.cosmos.network/main/validators/validator-setup.html#unjail-validator"},"Submit Unjailing Transaction"))))}h.isMDXComponent=!0},7728:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/hypha-consumer-start-process-2141109f76c584706dd994d7965fd692.svg"}}]);