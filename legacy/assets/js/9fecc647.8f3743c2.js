"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8194],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>g});var a=n(7294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,a,i=function(t,e){if(null==t)return{};var n,a,i={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var o=a.createContext({}),u=function(t){var e=a.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},p=function(t){var e=u(t.components);return a.createElement(o.Provider,{value:e},t.children)},d="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,i=t.mdxType,r=t.originalType,o=t.parentName,p=s(t,["components","mdxType","originalType","parentName"]),d=u(n),m=i,g=d["".concat(o,".").concat(m)]||d[m]||c[m]||r;return n?a.createElement(g,l(l({ref:e},p),{},{components:n})):a.createElement(g,l({ref:e},p))}));function g(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var r=n.length,l=new Array(r);l[0]=m;var s={};for(var o in e)hasOwnProperty.call(e,o)&&(s[o]=e[o]);s.originalType=t,s[d]="string"==typeof t?t:i,l[1]=s;for(var u=2;u<r;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},689:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>o,contentTitle:()=>l,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>u});var a=n(7462),i=(n(7294),n(3905));const r={sidebar_position:12,title:"Improving testing and increasing confidence"},l="ADR 11: Improving testing and increasing confidence",s={unversionedId:"adrs/adr-011-improving-test-confidence",id:"version-v3.3.1-lsm/adrs/adr-011-improving-test-confidence",title:"Improving testing and increasing confidence",description:"Changelog",source:"@site/versioned_docs/version-v3.3.1-lsm/adrs/adr-011-improving-test-confidence.md",sourceDirName:"adrs",slug:"/adrs/adr-011-improving-test-confidence",permalink:"/interchain-security/legacy/adrs/adr-011-improving-test-confidence",draft:!1,tags:[],version:"v3.3.1-lsm",sidebarPosition:12,frontMatter:{sidebar_position:12,title:"Improving testing and increasing confidence"},sidebar:"tutorialSidebar",previous:{title:"Standalone to Consumer Changeover",permalink:"/interchain-security/legacy/adrs/adr-010-standalone-changeover"},next:{title:"Separate Releasing",permalink:"/interchain-security/legacy/adrs/adr-012-separate-releasing"}},o={},u=[{value:"Changelog",id:"changelog",level:2},{value:"Status",id:"status",level:2},{value:"Context",id:"context",level:2},{value:"Current state of testing",id:"current-state-of-testing",level:4},{value:"Unit testing",id:"unit-testing",level:3},{value:"Integration testing",id:"integration-testing",level:3},{value:"End-to-end testing",id:"end-to-end-testing",level:3},{value:"Decision",id:"decision",level:2},{value:"1. Connect specifications to code and tooling",id:"1-connect-specifications-to-code-and-tooling",level:3},{value:"Decision context and hypothesis",id:"decision-context-and-hypothesis",level:4},{value:"Main benefit",id:"main-benefit",level:4},{value:"2. Improve e2e tooling",id:"2-improve-e2e-tooling",level:3},{value:"Matrix tests",id:"matrix-tests",level:4},{value:"Introducing e2e regression testing",id:"introducing-e2e-regression-testing",level:4},{value:"Introducing e2e CometMock tests",id:"introducing-e2e-cometmock-tests",level:4},{value:"3. Introduce innovative testing approaches",id:"3-introduce-innovative-testing-approaches",level:3},{value:"Model",id:"model",level:4},{value:"Driver",id:"driver",level:4},{value:"Harness",id:"harness",level:4},{value:"Consequences",id:"consequences",level:2},{value:"Positive",id:"positive",level:3},{value:"Negative",id:"negative",level:3},{value:"Neutral",id:"neutral",level:3},{value:"References",id:"references",level:2}],p={toc:u},d="wrapper";function c(t){let{components:e,...r}=t;return(0,i.kt)(d,(0,a.Z)({},p,r,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"adr-11-improving-testing-and-increasing-confidence"},"ADR 11: Improving testing and increasing confidence"),(0,i.kt)("h2",{id:"changelog"},"Changelog"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"2023-08-11: Proposed, first draft of ADR.")),(0,i.kt)("h2",{id:"status"},"Status"),(0,i.kt)("p",null,"Proposed"),(0,i.kt)("h2",{id:"context"},"Context"),(0,i.kt)("p",null,"Testing, QA, and maintenance of interchain-security libraries is an ever-evolving area of software engineering we have to keep incrementally improving. The purpose of the QA process is to catch bugs as early as possible. In an ideal development workflow a bug should never reach production. A bug found in the specification stage is a lot cheaper to resolve than a bug discovered in production (or even in testnet). Ideally, all bugs should be found during the CI execution, and we hope that no bugs will ever even reach the testnet (although nothing can replace actual system stress test under load interacting with users)."),(0,i.kt)("p",null,"During development and testnet operation the following types of bugs were the most commonly found:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"improper iterator usage"),(0,i.kt)("li",{parentName:"ul"},"unbounded array access/iteration"),(0,i.kt)("li",{parentName:"ul"},"improper input handling and validation"),(0,i.kt)("li",{parentName:"ul"},"improper cached context usage"),(0,i.kt)("li",{parentName:"ul"},"non-determinism check (improper use of maps in go, relying on random values)"),(0,i.kt)("li",{parentName:"ul"},"KV store management and/or how keys are defined"),(0,i.kt)("li",{parentName:"ul"},"deserialization issues arising from consumer/provider versioning mismatch")),(0,i.kt)("p",null,"Such bugs can be discovered earlier with better tooling. Some of these bugs can induce increases in block times, chain halts, state corruption, or introduce an attack surface which is difficult to remove if other systems have started depending on that behavior."),(0,i.kt)("h4",{id:"current-state-of-testing"},"Current state of testing"),(0,i.kt)("p",null,"Our testing suites consist of multiple parts, each with their own trade-offs and benefits with regards to code coverage, complexity and confidence they provide."),(0,i.kt)("h3",{id:"unit-testing"},"Unit testing"),(0,i.kt)("p",null,"Unit testing is employed mostly for testing single-module functionality. It is the first step in testing and often the most practical. While highly important, unit tests often ",(0,i.kt)("strong",{parentName:"p"},"test a single piece of code")," and don't test relationships between different moving parts, this makes them less valuable when dealing with multi-module interactions."),(0,i.kt)("p",null,"Unit tests often employ mocks to abstract parts of the system that are not under test. Mocks are not equivalent to actual models and should not be treated as such."),(0,i.kt)("p",null,"Out of all the approaches used, unit testing has the most tools available and the coverage can simply be displayed as % of code lines tested. Although this is a very nice and very easy to understand metric, it does not speak about the quality of the test coverage."),(0,i.kt)("p",null,"Since distributed systems testing is a lot more involved, unit tests are oftentimes not sufficient to cover complex interactions. Unit tests are still necessary and helpful, but in cases where unit tests are not helpful e2e or integration tests should be favored."),(0,i.kt)("h3",{id:"integration-testing"},"Integration testing"),(0,i.kt)("p",null,"With integration testing we ",(0,i.kt)("strong",{parentName:"p"},"test the multi-module interactions")," while isolating them from the remainder of the system.\nIntegration tests can uncover bugs that are often missed by unit tests."),(0,i.kt)("p",null,"It is very difficult to gauge the actual test coverage imparted by integration tests and the available tooling is limited.\nIn interchain-security we employ the ",(0,i.kt)("inlineCode",{parentName:"p"},"ibc-go/testing")," framework to test interactions in-memory."),(0,i.kt)("p",null,"At present, integration testing does not involve the consensus layer - it is only concerned with application level state and logic."),(0,i.kt)("h3",{id:"end-to-end-testing"},"End-to-end testing"),(0,i.kt)("p",null,"In our context end-to-end testing comprises of tests that use the actual application binaries in an isolated environment (e.g. docker container). During test execution the inputs are meant to simulate actual user interaction, either by submitting transactions/queries using the command line or using gRPC/REST APIs and checking for state changes after an action has been performed. With this testing strategy we also include the consensus layer in all of our runs. This is the closest we can get to testing user interactions without starting a full testnet."),(0,i.kt)("p",null,"End-to-end testing strategies vary between different teams and projects and we strive to unify our approach to the best of our ability (at least for ICS and gaia)."),(0,i.kt)("p",null,"The available tooling does not give us significant (or relevant) line of code coverage information since most of the tools are geared towards analyzing unit tests and simple code branch evaluation."),(0,i.kt)("p",null,"We aim to adapt our best practices by learning from other similar systems and projects such as cosmos-sdk, ibc-go and CometBFT."),(0,i.kt)("h2",{id:"decision"},"Decision"),(0,i.kt)("h3",{id:"1-connect-specifications-to-code-and-tooling"},"1. Connect specifications to code and tooling"),(0,i.kt)("p",null,"Oftentimes, specifications are disconnected from the development and QA processes. This gives rise to problems where the specification does not reflect the actual state of the system and vice-versa.\nUsually specifications are just text files that are rarely used and go unmaintained after a while, resulting in consistency issues and misleading instructions/expectations about system behavior."),(0,i.kt)("h4",{id:"decision-context-and-hypothesis"},"Decision context and hypothesis"),(0,i.kt)("p",null,"Specifications written in a dedicated and executable specification language are easier to maintain than the ones written entirely in text.\nAdditionally, we can create models based on the specification OR make the model equivalent to a specification."),(0,i.kt)("p",null,"Models do not care about the intricacies of implementation and neither do specifications. Since both models and specifications care about concisely and accurately describing a system (such as a finite state machine), we see a benefit of adding model based tools (such as ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/informalsystems/quint"},"quint"),") to our testing and development workflows."),(0,i.kt)("h4",{id:"main-benefit"},"Main benefit"),(0,i.kt)("p",null,"MBT tooling can be used to generate test traces that can be executed by multiple different testing setups."),(0,i.kt)("h3",{id:"2-improve-e2e-tooling"},"2. Improve e2e tooling"),(0,i.kt)("h4",{id:"matrix-tests"},"Matrix tests"),(0,i.kt)("p",null,"Instead of only running tests against current ",(0,i.kt)("inlineCode",{parentName:"p"},"main")," branch we should adopt an approach where we also:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"run regression tests against different released software versions")," (",(0,i.kt)("inlineCode",{parentName:"li"},"ICS v1 vs v2 vs v3"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"run non-determinism tests to uncover issues quickly"))),(0,i.kt)("p",null,"Matrix tests can be implemented using ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/informalsystems/CometMock"},"CometMock")," and refactoring our current e2e CI setup."),(0,i.kt)("h4",{id:"introducing-e2e-regression-testing"},"Introducing e2e regression testing"),(0,i.kt)("p",null,"This e2e test suite would execute using a cronjob in our CI (nightly, multiple times a day etc.)"),(0,i.kt)("p",null,"Briefly, the same set of traces is run against different ",(0,i.kt)("strong",{parentName:"p"},"maintained")," versions of the software and the ",(0,i.kt)("inlineCode",{parentName:"p"},"main")," branch.\nThis would allow us to discover potential issues during development instead of in a testnet scenarios."),(0,i.kt)("p",null,"The most valuable issues that can be discovered in this way are ",(0,i.kt)("strong",{parentName:"p"},"state breaking changes"),", ",(0,i.kt)("strong",{parentName:"p"},"regressions")," and ",(0,i.kt)("strong",{parentName:"p"},"version incompatibilities"),"."),(0,i.kt)("p",null,"The setup is illustrated by the image below.\n",(0,i.kt)("img",{alt:"e2e matrix tests",src:n(1366).Z,width:"2170",height:"1624"})),(0,i.kt)("p",null,"This table explains which versions are tested against each other for the same set of test traces:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u2705 marks a passing test"),(0,i.kt)("li",{parentName:"ul"},"\u274c marks a failing test")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"th"},"USES: ICS v1 PROVIDER")),(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"th"},"start chain")),(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"th"},"add key")),(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"th"},"delegate")),(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"th"},"undelegate")),(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"th"},"redelegate")),(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"th"},"downtime")),(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"th"},"equivocation")),(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"th"},"stop chain")))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"v1 consumer (sdk45,ibc4.3)")),(0,i.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"v2 consumer (sdk45, ibc4.4)")),(0,i.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"v3 consumer (sdk47, ibc7)")),(0,i.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"main consumer")),(0,i.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,i.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,i.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,i.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,i.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,i.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,i.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,i.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"neutron")),(0,i.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"stride")),(0,i.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:null},"\u274c")))),(0,i.kt)("h4",{id:"introducing-e2e-cometmock-tests"},"Introducing e2e CometMock tests"),(0,i.kt)("p",null,"CometMock is a mock implementation of the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/cometbft/cometbft"},"CometBFT")," consensus engine. It supports most operations performed by CometBFT while also being lightweight and relatively easy to use."),(0,i.kt)("p",null,'CometMock tests allow more nuanced control of test scenarios because CometMock can "fool" the blockchain app into thinking that a certain number of blocks had passed.\n',(0,i.kt)("strong",{parentName:"p"},"This allows us to test very nuanced scenarios, difficult edge cases and long-running operations (such as unbonding operations).")),(0,i.kt)("p",null,"Examples of tests made easier with CometMock are listed below:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"regression tests"),(0,i.kt)("li",{parentName:"ul"},"non-determinism tests"),(0,i.kt)("li",{parentName:"ul"},"upgrade tests"),(0,i.kt)("li",{parentName:"ul"},"state-breaking changes")),(0,i.kt)("p",null,"With CometMock, the ",(0,i.kt)("strong",{parentName:"p"},"matrix test")," approach can also be used. The image below illustrates a CometMock setup that can be used to discover non-deterministic behavior and state-breaking changes.\n",(0,i.kt)("img",{alt:"e2e matrix tests",src:n(3809).Z,width:"3714",height:"2082"})),(0,i.kt)("p",null,"This table explains which versions are tested against each other for the same set of test traces:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u2705 marks a passing test"),(0,i.kt)("li",{parentName:"ul"},"\u274c marks a failing test")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"th"},"SCENARIO")),(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"th"},"start chain")),(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"th"},"add key")),(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"th"},"delegate")),(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"th"},"undelegate")),(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"th"},"redelegate")),(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"th"},"downtime")),(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"th"},"equivocation")),(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"th"},"stop chain")))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"v3 provi + v3 consu")),(0,i.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"main provi + main consu")),(0,i.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"commit provi + commit consu")),(0,i.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,i.kt)("td",{parentName:"tr",align:null},"\u274c")))),(0,i.kt)("p",null,"Briefly; multiple versions of the application are run against the same CometMock instance and any deviations in app behavior would result in ",(0,i.kt)("inlineCode",{parentName:"p"},"app hash")," errors (the apps would be in different states after performing the same set of actions)."),(0,i.kt)("h3",{id:"3-introduce-innovative-testing-approaches"},"3. Introduce innovative testing approaches"),(0,i.kt)("p",null,"When discussing e2e testing, some very important patterns emerge - especially if test traces are used instead of ad-hoc tests written by hand."),(0,i.kt)("p",null,"We see a unique opportunity to clearly identify concerns and modularize the testing architecture. "),(0,i.kt)("p",null,"The e2e testing frameworks can be split into a ",(0,i.kt)("strong",{parentName:"p"},"pipeline consisting of 3 parts: model, driver and harness"),"."),(0,i.kt)("h4",{id:"model"},"Model"),(0,i.kt)("p",null,"Model is the part of the system that can emulate the behavior of the system under test.\nIdeally, it is very close to the specification and is written in a specification language such as quint, TLA+ or similar.\nOne of the purposes of the model is that it can be used to generate test traces. "),(0,i.kt)("h4",{id:"driver"},"Driver"),(0,i.kt)("p",null,"The purpose of the driver is to accept test traces (generated by the model or written by hand), process them and provide inputs to the next part of the pipeline."),(0,i.kt)("p",null,"Basically, the driver sits between the model and the actual infrastructure on which the test traces are being executed on."),(0,i.kt)("h4",{id:"harness"},"Harness"),(0,i.kt)("p",null,"Harness is the infrastructure layer of the pipeline that accepts inputs from the driver."),(0,i.kt)("p",null,"There can be multiple harnesses as long as they can perform four things:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"bootstrap a test execution environment (local, docker, k8s\u2026)"),(0,i.kt)("li",{parentName:"ul"},"accept inputs from drivers"),(0,i.kt)("li",{parentName:"ul"},"perform the action specified by the driver"),(0,i.kt)("li",{parentName:"ul"},"report results after performing actions")),(0,i.kt)("h2",{id:"consequences"},"Consequences"),(0,i.kt)("p",null,"The procedure outlined in this ADR is not an all-or-nothing approach. Concepts introduced here do not rely on each other, so this ADR may only be applied partially without negative impact on test coverage and code confidence."),(0,i.kt)("h3",{id:"positive"},"Positive"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"introduction of maintainable MBT solutions")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'improvement over the current "difftest" setup that relies on an opinionated typescript model and go driver')),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"increased code coverage and confidence")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"using CometMock allows us to run more tests in less time"),(0,i.kt)("li",{parentName:"ul"},"adding matrix e2e tests allows us to quickly pinpoint differences between code versions")),(0,i.kt)("h3",{id:"negative"},"Negative"),(0,i.kt)("p",null,"It might be easier to forgo the MBT tooling and instead focus on pure property based testing"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/cosmos/interchain-security/pull/667"},"PBT proof of concept")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/flyingmutant/rapid"},"property based testing in go"))),(0,i.kt)("p",null,'The solutions are potentially expensive if we increase usage of the CI pipeline - this is fixed by running "expensive" tests using a cronjob, instead of running them on every commit.'),(0,i.kt)("h3",{id:"neutral"},"Neutral"),(0,i.kt)("p",null,"The process of changing development and testing process is not something that can be thought of and delivered quickly. Luckily, the changes can be rolled out incrementally without impacting existing workflows."),(0,i.kt)("h2",{id:"references"},"References"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Are there any relevant PR comments, issues that led up to this, or articles referenced for why we made the given design choice? If so link them here!")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/cosmos/gaia/issues/2427"},"https://github.com/cosmos/gaia/issues/2427")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/cosmos/gaia/issues/2420"},"https://github.com/cosmos/gaia/issues/2420")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/cosmos/ibc-go/tree/main/e2e"},"ibc-go e2e tests"))))}c.isMDXComponent=!0},3809:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/cometmock_matrix_test-714f36252aff9df4214823e3145d0ef5.png"},1366:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/matrix_e2e_tests-30681305077301daaf3097e1952b54bb.png"}}]);