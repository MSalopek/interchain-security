"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3938],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),h=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=h(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=h(a),u=i,m=c["".concat(s,".").concat(u)]||c[u]||p[u]||r;return a?n.createElement(m,o(o({ref:t},d),{},{components:a})):n.createElement(m,o({ref:t},d))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:i,o[1]=l;for(var h=2;h<r;h++)o[h]=a[h];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},7142:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>h});var n=a(7462),i=(a(7294),a(3905));const r={sidebar_position:3,title:"Jail Throttling"},o="ADR 002: Jail Throttling",l={unversionedId:"adrs/adr-002-throttle",id:"version-v3.3.1-lsm/adrs/adr-002-throttle",title:"Jail Throttling",description:"Changelog",source:"@site/versioned_docs/version-v3.3.1-lsm/adrs/adr-002-throttle.md",sourceDirName:"adrs",slug:"/adrs/adr-002-throttle",permalink:"/interchain-security/legacy/adrs/adr-002-throttle",draft:!1,tags:[],version:"v3.3.1-lsm",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Jail Throttling"},sidebar:"tutorialSidebar",previous:{title:"Key Assignment",permalink:"/interchain-security/legacy/adrs/adr-001-key-assignment"},next:{title:"Equivocation governance proposal",permalink:"/interchain-security/legacy/adrs/adr-003-equivocation-gov-proposal"}},s={},h=[{value:"Changelog",id:"changelog",level:2},{value:"Status",id:"status",level:2},{value:"Context",id:"context",level:2},{value:"Decision",id:"decision",level:2},{value:"Required State",id:"required-state",level:3},{value:"Params",id:"params",level:3},{value:"Protocol Overview",id:"protocol-overview",level:3},{value:"OnRecvSlashPacket",id:"onrecvslashpacket",level:4},{value:"OnRecvVSCMaturedPacket",id:"onrecvvscmaturedpacket",level:4},{value:"Endblocker",id:"endblocker",level:4},{value:"Slash Meter Replenishment",id:"slash-meter-replenishment",level:5},{value:"Handle Leading VSCMaturedPackets",id:"handle-leading-vscmaturedpackets",level:5},{value:"Handle Throttle Queues",id:"handle-throttle-queues",level:5},{value:"System Properties",id:"system-properties",level:3},{value:"Main Throttling Property",id:"main-throttling-property",level:3},{value:"How Unjailing Affects the Main Throttling Property",id:"how-unjailing-affects-the-main-throttling-property",level:3},{value:"Consequences",id:"consequences",level:2},{value:"Positive",id:"positive",level:3},{value:"Negative",id:"negative",level:3},{value:"Neutral",id:"neutral",level:3},{value:"References",id:"references",level:2}],d={toc:h},c="wrapper";function p(e){let{components:t,...a}=e;return(0,i.kt)(c,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"adr-002-jail-throttling"},"ADR 002: Jail Throttling"),(0,i.kt)("h2",{id:"changelog"},"Changelog"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"2023-01-26: Initial Draft"),(0,i.kt)("li",{parentName:"ul"},"2023-02-07: Property refined, ADR ready to review/merge"),(0,i.kt)("li",{parentName:"ul"},"2023-11-22: Refactor for better understanding")),(0,i.kt)("h2",{id:"status"},"Status"),(0,i.kt)("p",null,"Accepted"),(0,i.kt)("h2",{id:"context"},"Context"),(0,i.kt)("p",null,"The CCV spec is based around the assumption that the provider binary and all consumers binaries are non-malicious, and follow the defined protocols.\nIn practice, this assumption may not hold.\nA malicious consumer binary could potentially include code which is able to send many slash/jail packets at once to the provider."),(0,i.kt)("p",null,"Before the throttling feature was implemented, the following attack was possible.\nAttacker(s) would create provider validators just below the provider's active set.\nUsing a malicious consumer binary, slash packets would be relayed to the provider, that would slash/jail a significant portion (or all) of honest validator at once.\nControl of the provider would then pass over to the attackers' validators.\nThis enables the attacker(s) to halt the provider.\nOr even worse, commit arbitrary state on the provider, potentially stealing all tokens bridged to the provider over IBC."),(0,i.kt)("h2",{id:"decision"},"Decision"),(0,i.kt)("p",null,"The throttling feature was designed to slow down the mentioned attack from above, allowing validators and the community to appropriately respond to the attack,\ni.e., this feature limits (enforced by on-chain params) the rate that the provider validator set can be jailed over time."),(0,i.kt)("h3",{id:"required-state"},"Required State"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Slash meter:")," There exists one slash meter on the provider which stores an amount of voting power (integer), corresponding to an allowance of validators that can be jailed over time.\nThis meter is initialized to a certain value on genesis, decremented by the amount of voting power jailed whenever a slash packet is handled, and periodically replenished as decided by on-chain params."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Global entry queue:"),' There exists a single queue which stores "global slash entries".\nThese entries allow the provider to appropriately handle slash packets sent from any consumer in FIFO ordering.\nThis queue is responsible for coordinating the order that slash packets (from multiple chains) are handled over time.'),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Per-chain data queue:"),' For each established consumer, there exists a queue which stores "throttled packet data",\ni.e.,pending slash packet data is queued together with pending VSC matured packet data in FIFO ordering.\nOrder is enforced by IBC sequence number.\nThese "per-chain" queues are responsible for coordinating the order that slash packets are handled in relation to VSC matured packets from the same chain.'),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Note:")," The reason for a multiple-queue design is the ",(0,i.kt)("em",{parentName:"p"},"VSC Maturity and Slashing Order")," property (see ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/cosmos/ibc/blob/main/spec/app/ics-028-cross-chain-validation/system_model_and_properties.md#consumer-initiated-slashing"},"spec"),").\nThere are other ways to ensure such a property (like a queue of linked lists, etc.), but the proposed approach seemed to be the most understandable and easiest to implement with a KV store."),(0,i.kt)("h3",{id:"params"},"Params"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"SlashMeterReplenishPeriod")," -- the period after which the slash meter is replenished. "),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"SlashMeterReplenishFraction")," -- the portion (in range ","[0, 1]",") of total voting power that is replenished to the slash meter when a replenishment occurs. This param also serves as a maximum fraction of total voting power that the slash meter can hold."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"MaxThrottledPackets")," -- the maximum amount of throttled slash or vsc matured packets that can be queued from a single consumer before the provider chain halts, it should be set to a large value.\nThis param would allow provider binaries to panic deterministically in the event that packet throttling results in a large amount of state-bloat. In such a scenario, packet throttling could prevent a violation of safety caused by a malicious consumer, at the cost of provider liveness."),(0,i.kt)("h3",{id:"protocol-overview"},"Protocol Overview"),(0,i.kt)("h4",{id:"onrecvslashpacket"},"OnRecvSlashPacket"),(0,i.kt)("p",null,"Upon the provider receiving a slash packet from any of the established consumers during block execution, two things occur:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"A global slash entry is queued."),(0,i.kt)("li",{parentName:"ol"},"The data of such a packet is added to the per-chain queue.")),(0,i.kt)("h4",{id:"onrecvvscmaturedpacket"},"OnRecvVSCMaturedPacket"),(0,i.kt)("p",null,"Upon the provider receiving a VSCMatured packet from any of the established consumers during block execution, the VSCMatured packet data is added to the per-chain queue."),(0,i.kt)("h4",{id:"endblocker"},"Endblocker"),(0,i.kt)("p",null,"In the ",(0,i.kt)("inlineCode",{parentName:"p"},"EndBlock")," of the provider CCV module, there are three actions performed:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"replenish the slash meter;"),(0,i.kt)("li",{parentName:"ul"},"handle the leading ",(0,i.kt)("inlineCode",{parentName:"li"},"VSCMaturedPackets"),";"),(0,i.kt)("li",{parentName:"ul"},"and handle the throttle queues.")),(0,i.kt)("h5",{id:"slash-meter-replenishment"},"Slash Meter Replenishment"),(0,i.kt)("p",null,"Once the slash meter becomes not full, it'll be replenished after ",(0,i.kt)("inlineCode",{parentName:"p"},"SlashMeterReplenishPeriod")," by incrementing the meter with its allowance for the replenishment block, where ",(0,i.kt)("inlineCode",{parentName:"p"},"allowance")," = ",(0,i.kt)("inlineCode",{parentName:"p"},"SlashMeterReplenishFraction")," * ",(0,i.kt)("inlineCode",{parentName:"p"},"currentTotalVotingPower"),".\nThe slash meter will never exceed its current allowance (function of the total voting power for the block) in value. "),(0,i.kt)("p",null,"Note a few things:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"The slash meter can go negative in value, and will do so when handling a single slash packet that jails a validator with significant voting power.\nIn such a scenario, the slash meter may take multiple replenishment periods to once again reach a positive value (or 0), meaning no other slash packets may be handled for multiple replenishment periods."),(0,i.kt)("li",{parentName:"ol"},"Total voting power of a chain changes over time, especially as validators are jailed.\nAs validators are jailed, total voting power decreases, and so does the jailing allowance.\nSee below for more detailed throttling property discussion."),(0,i.kt)("li",{parentName:"ol"},"The voting power allowance added to the slash meter during replenishment will always be greater than or equal to 1.\nIf the ",(0,i.kt)("inlineCode",{parentName:"li"},"SlashMeterReplenishFraction")," is set too low, integer rounding will put this minimum value into effect.\nThat is, if ",(0,i.kt)("inlineCode",{parentName:"li"},"SlashMeterReplenishFraction")," * ",(0,i.kt)("inlineCode",{parentName:"li"},"currentTotalVotingPower")," < 1, then the effective allowance would be 1.\nThis min value of allowance ensures that there's some packets handled over time, even if that is a very long time.\nIt's a crude solution to an edge case caused by too small of a replenishment fraction.")),(0,i.kt)("p",null,"The behavior described above is achieved by executing ",(0,i.kt)("inlineCode",{parentName:"p"},"CheckForSlashMeterReplenishment()")," every ",(0,i.kt)("inlineCode",{parentName:"p"},"EndBlock"),", BEFORE ",(0,i.kt)("inlineCode",{parentName:"p"},"HandleThrottleQueues()")," is executed."),(0,i.kt)("h5",{id:"handle-leading-vscmaturedpackets"},"Handle Leading VSCMaturedPackets"),(0,i.kt)("p",null,"In every block, it is possible that ",(0,i.kt)("inlineCode",{parentName:"p"},"VSCMaturedPacket"),' data was queued before any slash packet data.\nSince this "leading" VSCMatured packet data does not have to be throttled (see ',(0,i.kt)("em",{parentName:"p"},"VSC Maturity and Slashing Order"),"), we can handle all VSCMatured packet data at the head of the queue, before the any throttling or packet data handling logic executes."),(0,i.kt)("h5",{id:"handle-throttle-queues"},"Handle Throttle Queues"),(0,i.kt)("p",null,"In every ",(0,i.kt)("inlineCode",{parentName:"p"},"EndBlock"),", the following logic is executed to handle data from the throttle queues."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"meter := getSlashMeter()\n\n// Keep iterating as long as the meter has a positive (or 0) value, and global slash entries exist \nwhile meter.IsPositiveOrZero() && entriesExist() {\n     // Get next entry in queue\n     entry := getNextGlobalSlashEntry()\n     // Decrement slash meter by the voting power that will be removed from the valset from handling this slash packet\n     valPower := entry.getValPower()\n     meter = meter - valPower\n     // Using the per-chain queue, handle the single slash packet using its queued data,\n     // then handle all trailing VSCMatured packets for this consumer\n     handleSlashPacketAndTrailingVSCMaturedPackets(entry)\n     // Delete entry in global queue, delete handled data\n     entry.Delete()\n     deleteThrottledSlashPacketData()\n     deleteTrailingVSCMaturedPacketData()\n}\n")),(0,i.kt)("h3",{id:"system-properties"},"System Properties"),(0,i.kt)("p",null,"All CCV system properties should be maintained by implementing this feature, see ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/cosmos/ibc/blob/main/spec/app/ics-028-cross-chain-validation/system_model_and_properties.md#consumer-initiated-slashing"},"CCV spec - Consumer Initiated Slashing"),"."),(0,i.kt)("p",null,"One implementation-specific property introduced is that if any of the chain-specific packet data queues become larger than ",(0,i.kt)("inlineCode",{parentName:"p"},"MaxThrottledPackets"),", then the provider binary will panic, and the provider chain will halt.\nTherefore this param should be set carefully. See ",(0,i.kt)("inlineCode",{parentName:"p"},"SetThrottledPacketDataSize"),".\nThis behavior ensures that if the provider binaries are queuing up more packet data than machines can handle, the provider chain halts deterministically between validators."),(0,i.kt)("h3",{id:"main-throttling-property"},"Main Throttling Property"),(0,i.kt)("p",null,"Using on-chain params and the sub protocol defined, slash packet throttling is implemented such that the following property holds under some conditions."),(0,i.kt)("p",null,"First, we introduce the following definitions:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'A consumer initiated slash attack "starts" when the first slash packet from such an attack is received by the provider.'),(0,i.kt)("li",{parentName:"ul"},'The "initial validator set" for the attack is the validator set that existed on the provider when the attack started.'),(0,i.kt)("li",{parentName:"ul"},"There is a list of honest validators such that if they are jailed, ",(0,i.kt)("inlineCode",{parentName:"li"},"X"),"% of the initial validator set will be jailed.")),(0,i.kt)("p",null,"For the Throttling Property to hold, the following assumptions must be true:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"We assume the total voting power of the chain (as a function of delegations) does not increase over the course of the attack."),(0,i.kt)("li",{parentName:"ol"},"No validator has more than ",(0,i.kt)("inlineCode",{parentName:"li"},"SlashMeterReplenishFraction")," of total voting power on the provider."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"SlashMeterReplenishFraction")," is large enough that ",(0,i.kt)("inlineCode",{parentName:"li"},"SlashMeterReplenishFraction")," * ",(0,i.kt)("inlineCode",{parentName:"li"},"currentTotalVotingPower")," > 1,\ni.e., the replenish fraction is set high enough that we can ignore the effects of rounding."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"SlashMeterReplenishPeriod")," is sufficiently longer than the time it takes to produce a block.")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Note if these assumptions do not hold, throttling will still slow down the described attack in most cases, just not in a way that can be succinctly described. It's possible that more complex properties can be defined.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Throttling Property"),": The time it takes to jail/tombstone ",(0,i.kt)("inlineCode",{parentName:"p"},"X"),"% of the initial validator set will be greater than or equal to\n$\\mathit{SlashMeterReplenishPeriod} \\cdot \\frac{X}{\\mathit{SlashMeterReplenishFraction}} - 2 \\cdot \\mathit{SlashMeterReplenishPeriod}$."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Intuition")),(0,i.kt)("p",{parentName:"blockquote"},"Let's use the following notation:"),(0,i.kt)("ul",{parentName:"blockquote"},(0,i.kt)("li",{parentName:"ul"},"$C$: Number of replenishment cycles"),(0,i.kt)("li",{parentName:"ul"},"$P$: $\\mathit{SlashMeterReplenishPeriod}$"),(0,i.kt)("li",{parentName:"ul"},"$F$: $\\mathit{SlashMeterReplenishFraction}$"),(0,i.kt)("li",{parentName:"ul"},"$V_{\\mathit{max}}$: Max power of a validator as a fraction of total voting power")),(0,i.kt)("p",{parentName:"blockquote"},"In $C$ number of replenishment cycles, the fraction of total voting power that can be removed, $a$, is $a \\leq F \\cdot C + V",(0,i.kt)("em",{parentName:"p"},"{\\mathit{max}}$ (where $V"),"{\\mathit{max}}$ is there to account for the power fraction of the last validator removed, one which pushes the meter to the negative value)."),(0,i.kt)("p",{parentName:"blockquote"},"So, we need at least $C \\geq \\frac{a - V_{\\mathit{max}}}{F}$ cycles to remove $a$ fraction of the total voting power."),(0,i.kt)("p",{parentName:"blockquote"},"Since we defined the start of the attack to be the moment when the first slash request arrives, then $F$ fraction of the initial validator set can be jailed immediately. For the remaining $X - F$ fraction of the initial validator set to be jailed, it takes at least $C \\geq \\frac{(X - F) - V",(0,i.kt)("em",{parentName:"p"},"{\\mathit{max}}}{F}$ cycles. Using the assumption that $V"),"{\\mathit{max}} \\leq F$ (assumption 2), we get $C \\geq \\frac{X - 2F}{F}$ cycles."),(0,i.kt)("p",{parentName:"blockquote"},"In order to execute $C$ cycles, we need $C \\cdot P$ time."),(0,i.kt)("p",{parentName:"blockquote"},"Thus, jailing the remaining $X - F$ fraction of the initial validator set corresponds to $\\frac{P \\cdot (X - 2F)}{F}$ time."),(0,i.kt)("p",{parentName:"blockquote"},"In other words, the attack must take at least $\\frac{P \\cdot X}{F} - 2P$ time (in the units of replenish period $P$).")),(0,i.kt)("p",null,"This property is useful because it allows us to reason about the time it takes to jail a certain percentage of the initial provider validator set from consumer initiated slash requests.\nFor example, if ",(0,i.kt)("inlineCode",{parentName:"p"},"SlashMeterReplenishFraction")," is set to ",(0,i.kt)("inlineCode",{parentName:"p"},"0.06"),", then it takes no less than 4 replenishment periods to jail 33% of the initial provider validator set on the Cosmos Hub.\nNote that as of writing this on 11/29/22, the Cosmos Hub does not have a validator with more than 6% of total voting power."),(0,i.kt)("p",null,"Note also that 4 replenishment period is a worst case scenario that depends on well crafted attack timings."),(0,i.kt)("h3",{id:"how-unjailing-affects-the-main-throttling-property"},"How Unjailing Affects the Main Throttling Property"),(0,i.kt)("p",null,"Note that the jailing allowance is directly proportional to the current total voting power of the provider chain. Therefore, if honest validators don't unjail themselves during the attack, the total voting power of the provider chain will decrease over the course of the attack, and the attack will be slowed down, main throttling property is maintained."),(0,i.kt)("p",null,"If honest validators do unjail themselves, the total voting power of the provider chain will still not become higher than when the attack started (unless new token delegations happen), therefore the main property is still maintained. Moreover, honest validators unjailing themselves helps prevent the attacking validators from gaining control of the provider."),(0,i.kt)("p",null,"In summary, the throttling mechanism as designed has desirable properties whether or not honest validators unjail themselves over the course of the attack."),(0,i.kt)("h2",{id:"consequences"},"Consequences"),(0,i.kt)("h3",{id:"positive"},"Positive"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The described attack is slowed down in seemingly all cases."),(0,i.kt)("li",{parentName:"ul"},"If certain assumptions hold, the described attack is slowed down in a way that can be precisely time-bounded.")),(0,i.kt)("h3",{id:"negative"},"Negative"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Throttling introduces a vector for a malicious consumer chain to halt the provider, see issue below.\nHowever, this is sacrificing liveness in a edge case scenario for the sake of security.\nAs an improvement, ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/cosmos/interchain-security/issues/713"},"using retries")," would fully prevent this attack vector.")),(0,i.kt)("h3",{id:"neutral"},"Neutral"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Additional state is introduced to the provider chain."),(0,i.kt)("li",{parentName:"ul"},"VSCMatured and slash packet data is not always handled in the same block that it is received.")),(0,i.kt)("h2",{id:"references"},"References"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/cosmos/interchain-security/issues/404"},"Original issue inspiring throttling feature")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/cosmos/interchain-security/issues/594"},"Issue on DOS vector")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/cosmos/interchain-security/issues/685"},"Consideration of another attack vector"))))}p.isMDXComponent=!0}}]);