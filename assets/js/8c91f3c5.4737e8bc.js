"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[606],{7607:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>l,frontMatter:()=>r,metadata:()=>t,toc:()=>d});var i=s(5893),a=s(1151);const r={sidebar_position:1},o="Key Assignment",t={id:"features/key-assignment",title:"Key Assignment",description:"Key Assignment (aka. as key delegation) allows validator operators to use different consensus keys for each consumer chain validator node that they operate.",source:"@site/versioned_docs/version-v4.0.0/features/key-assignment.md",sourceDirName:"features",slug:"/features/key-assignment",permalink:"/interchain-security/features/key-assignment",draft:!1,unlisted:!1,tags:[],version:"v4.0.0",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Technical Specification",permalink:"/interchain-security/introduction/technical-specification"},next:{title:"Reward Distribution",permalink:"/interchain-security/features/reward-distribution"}},c={},d=[{value:"Rules",id:"rules",level:2},{value:"Adding a key",id:"adding-a-key",level:2},{value:"Changing a key",id:"changing-a-key",level:2},{value:"Removing a key",id:"removing-a-key",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"key-assignment",children:"Key Assignment"}),"\n",(0,i.jsx)(n.p,{children:"Key Assignment (aka. as key delegation) allows validator operators to use different consensus keys for each consumer chain validator node that they operate.\nThere are various reasons to use different consensus keys on different chains, but the main benefit is that validator's provider chain consensus key cannot be compromised if their consumer chain node (or other infrastructure) gets compromised. Interchain security module adds queries and transactions for assigning keys on consumer chains."}),"\n",(0,i.jsxs)(n.p,{children:["The feature is outlined in this ",(0,i.jsx)(n.a,{href:"/interchain-security/adrs/adr-001-key-assignment",children:"ADR-001"})]}),"\n",(0,i.jsxs)(n.p,{children:["By sending an ",(0,i.jsx)(n.code,{children:"AssignConsumerKey"})," transaction, validators are able to indicate which consensus key they will be using to validate a consumer chain. On receiving the transaction, if the key assignment is valid, the provider will use the assigned consensus key when it sends future voting power updates to the consumer that involve the validator."]}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsx)(n.p,{children:"Key assignment is handled only by the provider chain - the consumer chains are not aware of the fact that different consensus keys represent the same validator entity."})}),"\n",(0,i.jsx)(n.h2,{id:"rules",children:"Rules"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"a key can be assigned before the consumer addition proposal passes on the provider"}),"\n",(0,i.jsx)(n.li,{children:"validator A cannot assign consumer key K to consumer chain X if there is already a validator B (B!=A) using K on the provider"}),"\n",(0,i.jsx)(n.li,{children:"validator A cannot assign consumer key K to consumer chain X if there is already a validator B using K on X"}),"\n",(0,i.jsx)(n.li,{children:"a new validator on the provider cannot use a consensus key K if K is already used by any validator on any consumer chain"}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsx)(n.p,{children:"Validators can use a different key for each consumer chain."})}),"\n",(0,i.jsx)(n.h2,{id:"adding-a-key",children:"Adding a key"}),"\n",(0,i.jsx)(n.p,{children:"First, create a new node on the consumer chain using the equivalent:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"consumerd init <moniker>\n"})}),"\n",(0,i.jsx)(n.p,{children:"Then query your node for the consensus key."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'consumerd tendermint show-validator # {"@type":"/cosmos.crypto.ed25519.PubKey","key":"<key>"}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Then, make an ",(0,i.jsx)(n.code,{children:"assign-consensus-key"})," transaction on the provider chain in order to inform the provider chain about the consensus key you will be using for a specific consumer chain."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"gaiad tx provider assign-consensus-key <consumer-chain-id> '<pubkey>' --from <tx-signer> --home <home_dir> --gas 900000 -b sync -y -o json\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"consumer-chain-id"})," is the string identifier of the consumer chain, as assigned on the provider chain"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"consumer-pub-key"})," has the following format ",(0,i.jsx)(n.code,{children:'{"@type":"/cosmos.crypto.ed25519.PubKey","key":"<key>"}'})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Check that the key was assigned correctly by querying the provider:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"gaiad query provider validator-consumer-key <consumer-chain-id> cosmosvalcons1e....3xsj3ayzf4uv6\n"})}),"\n",(0,i.jsxs)(n.p,{children:["You must use a ",(0,i.jsx)(n.code,{children:"valcons"})," address. You can obtain it by querying your node on the provider ",(0,i.jsx)(n.code,{children:"gaiad tendermint show-address"})]}),"\n",(0,i.jsx)(n.p,{children:"OR"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"gaiad query provider validator-provider-key <consumer-chain-id> consumervalcons1e....123asdnoaisdao\n"})}),"\n",(0,i.jsxs)(n.p,{children:["You must use a ",(0,i.jsx)(n.code,{children:"valcons"})," address. You can obtain it by querying your node on the consumer ",(0,i.jsx)(n.code,{children:"consumerd tendermint show-address"})]}),"\n",(0,i.jsx)(n.p,{children:"OR"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"gaiad query provider all-pairs-valconsensus-address <consumer-chain-id>\n"})}),"\n",(0,i.jsxs)(n.p,{children:["You just need to use the ",(0,i.jsx)(n.code,{children:"chainId"})," of consumer to query all pairs valconsensus address with ",(0,i.jsx)(n.code,{children:"consumer-pub-key"})," for each of pair"]}),"\n",(0,i.jsx)(n.h2,{id:"changing-a-key",children:"Changing a key"}),"\n",(0,i.jsx)(n.p,{children:"To change your key, simply repeat all of the steps listed above. Take note that your old key will be remembered for at least the unbonding period of the consumer chain so any slashes can be correctly applied"}),"\n",(0,i.jsx)(n.h2,{id:"removing-a-key",children:"Removing a key"}),"\n",(0,i.jsxs)(n.p,{children:["To remove a key, simply switch it back to the consensus key you have assigned on the provider chain by following steps in the ",(0,i.jsx)(n.code,{children:"Adding a key"})," section and using your provider consensus key."]})]})}function l(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>t,a:()=>o});var i=s(7294);const a={},r=i.createContext(a);function o(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);