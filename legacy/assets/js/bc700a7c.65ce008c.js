"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5202],{3905:(e,t,a)=>{a.d(t,{Zo:()=>h,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},h=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),d=c(a),p=r,m=d["".concat(l,".").concat(p)]||d[p]||u[p]||i;return a?n.createElement(m,o(o({ref:t},h),{},{components:a})):n.createElement(m,o({ref:t},h))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},9439:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=a(7462),r=(a(7294),a(3905));const i={sidebar_position:7,title:"Throttle with retries"},o=void 0,s={unversionedId:"adrs/adr-008-throttle-retries",id:"version-v3.1.0/adrs/adr-008-throttle-retries",title:"Throttle with retries",description:"ADR 008: Throttle with retries",source:"@site/versioned_docs/version-v3.1.0/adrs/adr-008-throttle-retries.md",sourceDirName:"adrs",slug:"/adrs/adr-008-throttle-retries",permalink:"/interchain-security/legacy/v3.1.0/adrs/adr-008-throttle-retries",draft:!1,tags:[],version:"v3.1.0",sidebarPosition:7,frontMatter:{sidebar_position:7,title:"Throttle with retries"},sidebar:"tutorialSidebar",previous:{title:"Equivocation governance proposal",permalink:"/interchain-security/legacy/v3.1.0/adrs/adr-003-equivocation-gov-proposal"},next:{title:"Soft Opt-Out",permalink:"/interchain-security/legacy/v3.1.0/adrs/adr-009-soft-opt-out"}},l={},c=[{value:"ADR 008: Throttle with retries",id:"adr-008-throttle-with-retries",level:2},{value:"Changelog",id:"changelog",level:2},{value:"Status",id:"status",level:2},{value:"Context",id:"context",level:2},{value:"Decision",id:"decision",level:2},{value:"Consumer changes",id:"consumer-changes",level:3},{value:"Provider changes",id:"provider-changes",level:3},{value:"Why the provider can handle VSCMatured packets immediately",id:"why-the-provider-can-handle-vscmatured-packets-immediately",level:3},{value:"Splitting of PRs",id:"splitting-of-prs",level:3},{value:"Consequences",id:"consequences",level:2},{value:"Positive",id:"positive",level:3},{value:"Negative",id:"negative",level:3},{value:"Neutral",id:"neutral",level:3},{value:"References",id:"references",level:2}],h={toc:c},d="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(d,(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"adr-008-throttle-with-retries"},"ADR 008: Throttle with retries"),(0,r.kt)("h2",{id:"changelog"},"Changelog"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"6/9/23: Initial draft")),(0,r.kt)("h2",{id:"status"},"Status"),(0,r.kt)("p",null,"Accepted"),(0,r.kt)("h2",{id:"context"},"Context"),(0,r.kt)("p",null,"For context on why the throttling mechanism exists, see ",(0,r.kt)("a",{parentName:"p",href:"/interchain-security/legacy/v3.1.0/adrs/adr-002-throttle"},"ADR 002"),"."),(0,r.kt)("p",null,"Note the terms slash throttling and jail throttling are synonymous, since in replicated security a ",(0,r.kt)("inlineCode",{parentName:"p"},"SlashPacket")," simply jails a validator for downtime infractions.  "),(0,r.kt)("p",null,"Currently the throttling mechanism is designed so that provider logic (slash meter, etc.) dictates how many slash packets can be handled over time. Throttled slash packets are persisted on the provider, leading to multiple possible issues. Namely:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"If slash or vsc matured packets are actually throttled/queued on the provider, state can grow and potentially lead to a DoS attack. We have short term solutions around this, but overall they come with their own weaknesses. See ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/cosmos/interchain-security/issues/594"},"#594"),"."),(0,r.kt)("li",{parentName:"ul"},"If a jailing attack described in ",(0,r.kt)("a",{parentName:"li",href:"/interchain-security/legacy/v3.1.0/adrs/adr-002-throttle"},"ADR 002")," were actually to be carried out with the current throttling design, we'd likely have to halt the provider, and perform an emergency upgrade and/or migration to clear the queues of slash packets that were deemed to be malicious. Alternatively, validators would just have to ",(0,r.kt)("em",{parentName:"li"},"tough it out")," and wait for the queues to clear, during which all/most validators would be jailed. Right after being jailed, vals would have to unjail themselves promptly to ensure safety. The synchronous coordination required to maintain safety in such a scenario is not ideal.")),(0,r.kt)("p",null,"So what's the solution? We can improve the throttling mechanism to instead queue/persist relevant data on each consumer, and have consumers retry slash requests as needed."),(0,r.kt)("h2",{id:"decision"},"Decision"),(0,r.kt)("h3",{id:"consumer-changes"},"Consumer changes"),(0,r.kt)("p",null,"Note the consumer already queues up both slash and vsc matured packets via ",(0,r.kt)("inlineCode",{parentName:"p"},"AppendPendingPacket"),". Those packets are dequeued every endblock in ",(0,r.kt)("inlineCode",{parentName:"p"},"SendPackets")," and sent to the provider."),(0,r.kt)("p",null,"Instead, we will now introduce the following logic on endblock:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Slash packets will always be sent to the provider once they're at the head of the queue. However, once sent, the consumer will not send any trailing vsc matured packets from the queue until the provider responds with an ack that the slash packet has been handled (ie. val was jailed). That is, slash packets block the sending of trailing vsc matured packets in the consumer queue."),(0,r.kt)("li",{parentName:"ul"},"If two slash packets are at the head of the queue, the consumer will send the first slash packet, and then wait for a success ack from the provider before sending the second slash packet. This seems like it'd simplify implementation."),(0,r.kt)("li",{parentName:"ul"},"VSC matured packets at the head of the queue (ie. NOT trailing a slash packet) can be sent immediately, and do not block any other packets in the queue, since the provider always handles them immediately.")),(0,r.kt)("p",null,"To prevent the provider from having to keep track of what slash packets have been rejected, the consumer will have to retry the sending of slash packets over some period of time. This can be achieved with an on-chain consumer param. The suggested param value would probably be 1/2 of the provider's ",(0,r.kt)("inlineCode",{parentName:"p"},"SlashMeterReplenishmentPeriod"),", although it doesn't matter too much as long as the param value is sane."),(0,r.kt)("p",null,"Note to prevent weird edge case behavior, a retry would not be attempted until either a success ack or failure ack has been recv from the provider."),(0,r.kt)("p",null,"With the behavior described, we maintain very similar behavior to the current throttling mechanism regarding the timing that slash and vsc matured packets are handled on the provider. Obviously the queueing and blocking logic is moved, and the two chains would have to send more messages between one another (only in the case the throttling mechanism is triggered)."),(0,r.kt)("p",null,"In the normal case, when no or a few slash packets are being sent, the VSCMaturedPackets will not be delayed, and hence unbonding will not be delayed."),(0,r.kt)("h3",{id:"provider-changes"},"Provider changes"),(0,r.kt)("p",null,"The main change needed for the provider is the removal of queuing logic for slash and vsc matured packets upon being received."),(0,r.kt)("p",null,"Instead, the provider will consult the slash meter to determine if a slash packet can be handled immediately. If not, the provider will return an ack message to the consumer communicating that the slash packet could not be handled, and needs to be sent again in the future (retried)."),(0,r.kt)("p",null,"VSCMatured packets will always be handled immediately upon being received by the provider."),(0,r.kt)("p",null,"Note ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/cosmos/ibc/blob/main/spec/app/ics-028-cross-chain-validation/system_model_and_properties.md#consumer-initiated-slashing"},"spec"),". Specifically the section on ",(0,r.kt)("em",{parentName:"p"},"VSC Maturity and Slashing Order"),". Previously the onus was on the provider to maintain this property via queuing packets and handling them FIFO."),(0,r.kt)("p",null,"Now this property will be maintained by the consumer sending packets in the correct order, and blocking the sending of VSCMatured packets as needed. Then, the ordered IBC channel will ensure that Slash/VSCMatured packets are received in the correct order on the provider."),(0,r.kt)("p",null,"The provider's main responsibility regarding throttling will now be to determine if a recv slash packet can be handled via slash meter etc., and appropriately ack to the sending consumer."),(0,r.kt)("h3",{id:"why-the-provider-can-handle-vscmatured-packets-immediately"},"Why the provider can handle VSCMatured packets immediately"),(0,r.kt)("p",null,"First we answer, what does a VSCMatured packet communicate to the provider? A VSCMatured packet communicates that a VSC has been applied to a consumer long enough that infractions committed on the consumer could have been submitted."),(0,r.kt)("p",null,"If the consumer is following the queuing/blocking protocol described. No bad behavior occurs, ",(0,r.kt)("inlineCode",{parentName:"p"},"VSC Maturity and Slashing Order")," property is maintained."),(0,r.kt)("p",null,"If a consumer sends VSCMatured packets too leniently: The consumer is malicious and sending duplicate vsc matured packets, or sending the packets sooner than the ccv protocol specifies. In this scenario, the provider needs to handle vsc matured packets immediately to prevent DOS, state bloat, or other issues. The only possible negative outcome is that the malicious consumer may not be able to jail a validator who should have been jailed. The malicious behavior only creates a negative outcome for the chain that is being malicious."),(0,r.kt)("p",null,"If a consumer blocks the sending of VSCMatured packets: The consumer is malicious and blocking vsc matured packets that should have been sent. This will block unbonding only up until the VSC timeout period has elapsed. At that time, the consumer is removed. Again the malicious behavior only creates a negative outcome for the chain that is being malicious."),(0,r.kt)("h3",{id:"splitting-of-prs"},"Splitting of PRs"),(0,r.kt)("p",null,"We could split this feature into two PRs, one affecting the consumer and one affecting the provider, along with a third PR which could setup a clever way to upgrade the provider in multiple steps, ensuring that queued slash packets at upgrade time are handled properly."),(0,r.kt)("h2",{id:"consequences"},"Consequences"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Consumers will now have to manage their own queues, and retry logic."),(0,r.kt)("li",{parentName:"ul"},"Consumers still aren't trustless, but the provider is now less susceptible to mismanaged or malicious consumers."),(0,r.kt)("li",{parentName:"ul"},'Recovering from the "jailing attack" is more elegant.'),(0,r.kt)("li",{parentName:"ul"},"Some issues like ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/cosmos/interchain-security/issues/1001"},"#1001")," will now be handled implicitly by the improved throttling mechanism."),(0,r.kt)("li",{parentName:"ul"},"Slash and vsc matured packets can be handled immediately once recv by the provider if the slash meter allows."),(0,r.kt)("li",{parentName:"ul"},"In general, we reduce the amount of computation that happens in the provider end-blocker.")),(0,r.kt)("h3",{id:"positive"},"Positive"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'We no longer have to reason about a "global queue" and a "chain specific queue", and keeping those all in-sync. Now slash and vsc matured packet queuing is handled on each consumer individually.'),(0,r.kt)("li",{parentName:"ul"},"Due to the above, the throttling protocol becomes less complex overall."),(0,r.kt)("li",{parentName:"ul"},"We no longer have to worry about throttle related DoS attack on the provider, since no queuing exists on the provider.")),(0,r.kt)("h3",{id:"negative"},"Negative"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Increased number of IBC packets being relayed anytime throttling logic is triggered."),(0,r.kt)("li",{parentName:"ul"},"Consumer complexity increases, since consumers now have manage queuing themselves, and implement packet retry logic.")),(0,r.kt)("h3",{id:"neutral"},"Neutral"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Core throttling logic on the provider remains unchanged, ie. slash meter, replenishment cycles, etc.")),(0,r.kt)("h2",{id:"references"},"References"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/cosmos/interchain-security/issues/713"},"EPIC")," tracking the changes proposed by this ADR"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/interchain-security/legacy/v3.1.0/adrs/adr-002-throttle"},"ADR 002: Jail Throttling")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/cosmos/interchain-security/issues/594"},"#594"))))}u.isMDXComponent=!0}}]);