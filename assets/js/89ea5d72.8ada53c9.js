"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6216],{4652:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>l,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var i=s(5893),t=s(1151);const r={sidebar_position:2,title:"Joining Replicated Security testnet"},o=void 0,a={id:"validators/joining-testnet",title:"Joining Replicated Security testnet",description:"Introduction",source:"@site/versioned_docs/version-v4.0.0/validators/joining-testnet.md",sourceDirName:"validators",slug:"/validators/joining-testnet",permalink:"/interchain-security/validators/joining-testnet",draft:!1,unlisted:!1,tags:[],version:"v4.0.0",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Joining Replicated Security testnet"},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/interchain-security/validators/overview"},next:{title:"Withdrawing consumer chain validator rewards",permalink:"/interchain-security/validators/withdraw_rewards"}},c={},d=[{value:"Introduction",id:"introduction",level:2},{value:"Joining the provider chain",id:"joining-the-provider-chain",level:2},{value:"Initialization",id:"initialization",level:2},{value:"Joining consumer chains",id:"joining-consumer-chains",level:2},{value:"Re-using consensus key",id:"re-using-consensus-key",level:2},{value:"Assigning consensus keys",id:"assigning-consensus-keys",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,i.jsxs)(n.p,{children:["This short guide will teach you how to join the ",(0,i.jsx)(n.a,{href:"https://github.com/cosmos/testnets/tree/master/replicated-security",children:"Replicated Security testnet"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"The experience gained in the testnet will prepare you for validating interchain secured chains."}),"\n",(0,i.jsxs)(n.admonition,{type:"tip",children:[(0,i.jsx)(n.p,{children:"Provider and consumer chain represent distinct networks and infrastructures operated by the same validator set."}),(0,i.jsxs)(n.p,{children:["For general information about running cosmos-sdk based chains check out the ",(0,i.jsx)(n.a,{href:"https://hub.cosmos.network/main/validators/validator-setup.html",children:"validator basics"})," and ",(0,i.jsx)(n.a,{href:"https://docs.cosmos.network/main/run-node/run-node",children:"Running a Node section"})," of Cosmos SDK docs"]})]}),"\n",(0,i.jsx)(n.h2,{id:"joining-the-provider-chain",children:"Joining the provider chain"}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsx)(n.p,{children:"At present, all validators of the provider chain must also validate all governance approved consumer chains. The consumer chains cannot have a validator set different than the provider, which means they cannot introduce validators that are not also validating the provider chain."})}),"\n",(0,i.jsxs)(n.p,{children:["A comprehensive guide is available ",(0,i.jsx)(n.a,{href:"https://github.com/cosmos/testnets/tree/master/replicated-security/provider",children:"here"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"initialization",children:"Initialization"}),"\n",(0,i.jsxs)(n.p,{children:["First, initialize your ",(0,i.jsx)(n.code,{children:"$NODE_HOME"})," using the ",(0,i.jsx)(n.code,{children:"provider"})," chain binary."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"NODE_MONIKER=<your_node>\nCHAIN_ID=provider\nNODE_HOME=<path_to_your_home>\n\ngaiad init $NODE_MONIKER --chain-id $CHAIN_ID --home $NODE_HOME\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Add your key to the keyring - more details available ",(0,i.jsx)(n.a,{href:"https://docs.cosmos.network/main/run-node/keyring",children:"here"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["In this example we will use the ",(0,i.jsx)(n.code,{children:"test"})," keyring-backend. This option is not safe to use in production."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"gaiad keys add <key_moniker> --keyring-backend test\n\n# save the address as variable for later use\nMY_VALIDATOR_ADDRESS=$(gaiad keys show my_validator -a --keyring-backend test)\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Before issuing any transactions, use the ",(0,i.jsx)(n.code,{children:"provider"})," testnet faucet to add funds to your address."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'curl https://faucet.rs-testnet.polypore.xyz/request?address=$MY_VALIDATOR_ADDRESS&chain=provider\n\n# example output:\n{\n    "address": "cosmos17p3erf5gv2436fd4vyjwmudakts563a497syuz",\n    "amount": "10000000uatom",\n    "chain": "provider",\n    "hash": "10BFEC53C80C9B649B66549FD88A0B6BCF09E8FCE468A73B4C4243422E724985",\n    "status": "success"\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Then, use the account associated with the keyring to issue a ",(0,i.jsx)(n.code,{children:"create-validator"})," transaction which will register your validator on chain."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'gaiad tx staking create-validator \\\n  --amount=1000000uatom \\\n  --pubkey=$(gaiad tendermint show-validator) \\\n  --moniker="choose a moniker" \\\n  --chain-id=$CHAIN_ID" \\\n  --commission-rate="0.10" \\\n  --commission-max-rate="0.20" \\\n  --commission-max-change-rate="0.01" \\\n  --min-self-delegation="1000000" \\\n  --gas="auto" \\\n  --gas-prices="0.0025uatom" \\\n  --from=<key_moniker>\n'})}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["Check this ",(0,i.jsx)(n.a,{href:"https://hub.cosmos.network/main/validators/validator-setup.html#edit-validator-description",children:"guide"})," to edit your validator."]})}),"\n",(0,i.jsxs)(n.p,{children:["After this step, your validator is created and you can start your node and catch up to the rest of the network. It is recommended that you use ",(0,i.jsx)(n.code,{children:"statesync"})," to catch up to the rest of the network."]}),"\n",(0,i.jsxs)(n.p,{children:["You can use this script to modify your ",(0,i.jsx)(n.code,{children:"config.toml"})," with the required statesync parameters."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"# create the statesync script\n$: cd $NODE_HOME\n$: touch statesync.sh\n$ chmod 700 statesync.sh # make executable\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Paste the following instructions into the ",(0,i.jsx)(n.code,{children:"statesync.sh"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'#!/bin/bash\n\nSNAP_RPC="https://rpc.provider-state-sync-01.rs-testnet.polypore.xyz:443"\n\nLATEST_HEIGHT=$(curl -s $SNAP_RPC/block | jq -r .result.block.header.height); \\\nBLOCK_HEIGHT=$((LATEST_HEIGHT - 2000)); \\\nTRUST_HASH=$(curl -s "$SNAP_RPC/block?height=$BLOCK_HEIGHT" | jq -r .result.block_id.hash)\n\nsed -i.bak -E "s|^(enable[[:space:]]+=[[:space:]]+).*$|\\1true| ; \\\ns|^(rpc_servers[[:space:]]+=[[:space:]]+).*$|\\1\\"$SNAP_RPC,$SNAP_RPC\\"| ; \\\ns|^(trust_height[[:space:]]+=[[:space:]]+).*$|\\1$BLOCK_HEIGHT| ; \\\ns|^(trust_hash[[:space:]]+=[[:space:]]+).*$|\\1\\"$TRUST_HASH\\"|" $NODE_HOME/config/config.toml\n'})}),"\n",(0,i.jsx)(n.p,{children:"Then, you can execute the script:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"$: ./statesync.sh # setup config.toml for statesync\n"})}),"\n",(0,i.jsx)(n.p,{children:"Finally, copy the provider genesis and start your node:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'$: GENESIS_URL=https://github.com/cosmos/testnets/raw/master/replicated-security/provider/provider-genesis.json\n$: wget $GENESIS_URL -O genesis.json\n$: genesis.json $NODE_HOME/config/genesis.json\n# start the service\n$: gaiad start --x-crisis-skip-assert-invariants --home $NODE_HOME --p2p.seeds="08ec17e86dac67b9da70deb20177655495a55407@provider-seed-01.rs-testnet.polypore.xyz:26656,4ea6e56300a2f37b90e58de5ee27d1c9065cf871@provider-seed-02.rs-testnet.polypore.xyz:26656"\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Additional scripts to setup your nodes are available ",(0,i.jsx)(n.a,{href:"https://github.com/cosmos/testnets/blob/master/replicated-security/provider/join-rs-provider.sh",children:"here"})," and ",(0,i.jsx)(n.a,{href:"https://github.com/cosmos/testnets/blob/master/replicated-security/provider/join-rs-provider-cv.sh",children:"here"}),". The scripts will configure your node and create the required services - the scripts only work in linux environments."]}),"\n",(0,i.jsx)(n.h2,{id:"joining-consumer-chains",children:"Joining consumer chains"}),"\n",(0,i.jsxs)(n.admonition,{type:"tip",children:[(0,i.jsx)(n.p,{children:"Once you reach the active set on the provider chain, you will be required to validate all available consumer chains."}),(0,i.jsxs)(n.p,{children:["You can use the same consensus key on all consumer chains, or opt to use a different key on each consumer chain.\nCheck out this ",(0,i.jsx)(n.a,{href:"/interchain-security/features/key-assignment",children:"guide"})," to learn more about key assignment in replicated security."]})]}),"\n",(0,i.jsx)(n.p,{children:"To join consumer chains, simply replicate the steps above for each consumer using the correct consumer chain binaries."}),"\n",(0,i.jsxs)(n.admonition,{type:"info",children:[(0,i.jsxs)(n.p,{children:["When running the provider chain and consumers on the same machine please update the ",(0,i.jsx)(n.code,{children:"PORT"})," numbers for each of them and make sure they do not overlap (otherwise the binaries will not start)."]}),(0,i.jsx)(n.p,{children:"Important ports to re-configure:"}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"--rpc.laddr"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"--p2p.laddr"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"--api.address"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"--grpc.address"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"--grpc-web.address"})}),"\n"]})]}),"\n",(0,i.jsx)(n.h2,{id:"re-using-consensus-key",children:"Re-using consensus key"}),"\n",(0,i.jsxs)(n.p,{children:["To reuse the key on the provider and consumer chains, simply initialize your consumer chain and place the ",(0,i.jsx)(n.code,{children:"priv_validator_key.json"})," into the home directory of your consumer chain (",(0,i.jsx)(n.code,{children:"<consumer_home>/config/priv_validator_key.json"}),")."]}),"\n",(0,i.jsx)(n.p,{children:"When you start the chain, the consensus key will be the same on the provider and the consumer chain."}),"\n",(0,i.jsx)(n.h2,{id:"assigning-consensus-keys",children:"Assigning consensus keys"}),"\n",(0,i.jsx)(n.p,{children:"Whenever you initialize a new node, it will be configured with a consensus key you can use."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'# machine running consumer chain\nconsumerd init <node_moniker> --home <home_path> --chain-id consumer-1\n\n# use the output of this command to get the consumer chain consensus key\nconsumerd tendermint show-validator\n# output: {"@type":"/cosmos.crypto.ed25519.PubKey","key":"<key>"}\n'})}),"\n",(0,i.jsx)(n.p,{children:"Then, let the provider know which key you will be using for the consumer chain:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"# machine running the provider chain\ngaiad tx provider assign-consensus-key consumer-1 '<consumer_pubkey>' --from <key_moniker> --home $NODE_HOME --gas 900000 -b sync -y -o json\n"})}),"\n",(0,i.jsxs)(n.p,{children:["After this step, you are ready to copy the consumer genesis into your nodes's ",(0,i.jsx)(n.code,{children:"/config"})," folder, start your consumer chain node and catch up to the network."]})]})}function l(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>a,a:()=>o});var i=s(7294);const t={},r=i.createContext(t);function o(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);