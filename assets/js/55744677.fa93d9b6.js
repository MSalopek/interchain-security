"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[443],{4942:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>o,contentTitle:()=>t,default:()=>h,frontMatter:()=>s,metadata:()=>d,toc:()=>c});var a=n(5893),i=n(1151);const s={sidebar_position:3},t="Withdrawing consumer chain validator rewards",d={id:"validators/withdraw_rewards",title:"Withdrawing consumer chain validator rewards",description:"Here are example steps for withdrawing rewards from consumer chains in the provider chain",source:"@site/versioned_docs/version-v4.1.0/validators/withdraw_rewards.md",sourceDirName:"validators",slug:"/validators/withdraw_rewards",permalink:"/interchain-security/v4.1.0/validators/withdraw_rewards",draft:!1,unlisted:!1,tags:[],version:"v4.1.0",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Joining Replicated Security testnet",permalink:"/interchain-security/v4.1.0/validators/joining-testnet"},next:{title:"Validator Instructions for Changeover Procedure",permalink:"/interchain-security/v4.1.0/validators/changeover-procedure"}},o={},c=[{value:"Querying validator rewards",id:"querying-validator-rewards",level:2},{value:"Withdrawing rewards and commission",id:"withdrawing-rewards-and-commission",level:2},{value:"1. Withdraw rewards",id:"1-withdraw-rewards",level:3},{value:"2. Confirm withdrawal",id:"2-confirm-withdrawal",level:3}];function l(e){const r={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.h1,{id:"withdrawing-consumer-chain-validator-rewards",children:"Withdrawing consumer chain validator rewards"}),"\n",(0,a.jsx)(r.p,{children:"Here are example steps for withdrawing rewards from consumer chains in the provider chain"}),"\n",(0,a.jsxs)(r.admonition,{type:"info",children:[(0,a.jsxs)(r.p,{children:["The examples used are from ",(0,a.jsx)(r.code,{children:"rs-testnet"}),", the replicated security persistent testnet."]}),(0,a.jsxs)(r.p,{children:["Validator operator address: ",(0,a.jsx)(r.code,{children:"cosmosvaloper1e5yfpc8l6g4808fclmlyd38tjgxuwshnmjkrq6"}),"\nSelf-delegation address: ",(0,a.jsx)(r.code,{children:"cosmos1e5yfpc8l6g4808fclmlyd38tjgxuwshn7xzkvf"})]})]}),"\n",(0,a.jsx)(r.p,{children:"Prior to withdrawing rewards, query balances for self-delegation address:"}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-bash",children:'gaiad q bank balances cosmos1e5yfpc8l6g4808fclmlyd38tjgxuwshn7xzkvf\n\nbalances:\n- amount: "1000000000000"\n  denom: uatom\npagination:\n  next_key: null\n  total: "0"\n'})}),"\n",(0,a.jsx)(r.h2,{id:"querying-validator-rewards",children:"Querying validator rewards"}),"\n",(0,a.jsx)(r.p,{children:"Query rewards for the validator address:"}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-bash",children:'gaiad q distribution rewards cosmos1e5yfpc8l6g4808fclmlyd38tjgxuwshn7xzkvf cosmosvaloper1e5yfpc8l6g4808fclmlyd38tjgxuwshnmjkrq6\n\nrewards:\n- amount: "158.069895000000000000"\n  denom: ibc/2CB0E87E2A742166FEC0A18D6FBF0F6AD4AA1ADE694792C1BD6F5E99088D67FD\n- amount: "841842390516.072526500000000000"\n  denom: uatom\n'})}),"\n",(0,a.jsxs)(r.p,{children:["The ",(0,a.jsx)(r.code,{children:"ibc/2CB0E87E2A742166FEC0A18D6FBF0F6AD4AA1ADE694792C1BD6F5E99088D67FD"})," denom represents rewards from a consumer chain."]}),"\n",(0,a.jsx)(r.h2,{id:"withdrawing-rewards-and-commission",children:"Withdrawing rewards and commission"}),"\n",(0,a.jsx)(r.h3,{id:"1-withdraw-rewards",children:"1. Withdraw rewards"}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-bash",children:"gaiad tx distribution withdraw-rewards cosmosvaloper1e5yfpc8l6g4808fclmlyd38tjgxuwshnmjkrq6 --from cosmos1e5yfpc8l6g4808fclmlyd38tjgxuwshn7xzkvf --commission --chain-id provider --gas auto --fees 500uatom -b block -y\n\ntxhash: A7E384FB1958211B43B7C06527FC7D4471FB6B491EE56FDEA9C5634D76FF1B9A\n"})}),"\n",(0,a.jsx)(r.h3,{id:"2-confirm-withdrawal",children:"2. Confirm withdrawal"}),"\n",(0,a.jsx)(r.p,{children:"After withdrawing rewards self-delegation address balance to confirm rewards were withdrawn:"}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-bash",children:'gaiad q bank balances cosmos1e5yfpc8l6g4808fclmlyd38tjgxuwshn7xzkvf\n\nbalances:\n- amount: "216"\n  denom: ibc/2CB0E87E2A742166FEC0A18D6FBF0F6AD4AA1ADE694792C1BD6F5E99088D67FD\n- amount: "2233766225342"\n  denom: uatom\npagination:\n  next_key: null\n  total: "0"\n'})})]})}function h(e={}){const{wrapper:r}={...(0,i.a)(),...e.components};return r?(0,a.jsx)(r,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},1151:(e,r,n)=>{n.d(r,{Z:()=>d,a:()=>t});var a=n(7294);const i={},s=a.createContext(i);function t(e){const r=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),a.createElement(s.Provider,{value:r},e.children)}}}]);