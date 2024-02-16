"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5685],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>w});var a=t(7294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=a.createContext({}),d=function(e){var r=a.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},c=function(e){var r=d(e.components);return a.createElement(l.Provider,{value:r},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},u=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(t),u=n,w=p["".concat(l,".").concat(u)]||p[u]||m[u]||i;return t?a.createElement(w,o(o({ref:r},c),{},{components:t})):a.createElement(w,o({ref:r},c))}));function w(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=t.length,o=new Array(i);o[0]=u;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s[p]="string"==typeof e?e:n,o[1]=s;for(var d=2;d<i;d++)o[d]=t[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},6896:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var a=t(7462),n=(t(7294),t(3905));const i={sidebar_position:3},o="Withdrawing consumer chain validator rewards",s={unversionedId:"validators/withdraw_rewards",id:"version-v3.2.0/validators/withdraw_rewards",title:"Withdrawing consumer chain validator rewards",description:"Here are example steps for withdrawing rewards from consumer chains in the provider chain",source:"@site/versioned_docs/version-v3.2.0/validators/withdraw_rewards.md",sourceDirName:"validators",slug:"/validators/withdraw_rewards",permalink:"/interchain-security/legacy/v3.2.0/validators/withdraw_rewards",draft:!1,tags:[],version:"v3.2.0",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Joining Replicated Security testnet",permalink:"/interchain-security/legacy/v3.2.0/validators/joining-testnet"},next:{title:"Validator instructions for Changeover Procedure",permalink:"/interchain-security/legacy/v3.2.0/validators/changeover-procedure"}},l={},d=[{value:"Querying validator rewards",id:"querying-validator-rewards",level:2},{value:"Withdrawing rewards and commission",id:"withdrawing-rewards-and-commission",level:2},{value:"1. Withdraw rewards",id:"1-withdraw-rewards",level:3},{value:"2. Confirm withdrawal",id:"2-confirm-withdrawal",level:3}],c={toc:d},p="wrapper";function m(e){let{components:r,...t}=e;return(0,n.kt)(p,(0,a.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"withdrawing-consumer-chain-validator-rewards"},"Withdrawing consumer chain validator rewards"),(0,n.kt)("p",null,"Here are example steps for withdrawing rewards from consumer chains in the provider chain"),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"The examples used are from ",(0,n.kt)("inlineCode",{parentName:"p"},"rs-testnet"),", the replicated security persistent testnet."),(0,n.kt)("p",{parentName:"admonition"},"Validator operator address: ",(0,n.kt)("inlineCode",{parentName:"p"},"cosmosvaloper1e5yfpc8l6g4808fclmlyd38tjgxuwshnmjkrq6"),"\nSelf-delegation address: ",(0,n.kt)("inlineCode",{parentName:"p"},"cosmos1e5yfpc8l6g4808fclmlyd38tjgxuwshn7xzkvf"))),(0,n.kt)("p",null,"Prior to withdrawing rewards, query balances for self-delegation address:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'gaiad q bank balances cosmos1e5yfpc8l6g4808fclmlyd38tjgxuwshn7xzkvf\n\nbalances:\n- amount: "1000000000000"\n  denom: uatom\npagination:\n  next_key: null\n  total: "0"\n')),(0,n.kt)("h2",{id:"querying-validator-rewards"},"Querying validator rewards"),(0,n.kt)("p",null,"Query rewards for the validator address:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'gaiad q distribution rewards cosmos1e5yfpc8l6g4808fclmlyd38tjgxuwshn7xzkvf cosmosvaloper1e5yfpc8l6g4808fclmlyd38tjgxuwshnmjkrq6\n\nrewards:\n- amount: "158.069895000000000000"\n  denom: ibc/2CB0E87E2A742166FEC0A18D6FBF0F6AD4AA1ADE694792C1BD6F5E99088D67FD\n- amount: "841842390516.072526500000000000"\n  denom: uatom\n')),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"ibc/2CB0E87E2A742166FEC0A18D6FBF0F6AD4AA1ADE694792C1BD6F5E99088D67FD")," denom represents rewards from a consumer chain."),(0,n.kt)("h2",{id:"withdrawing-rewards-and-commission"},"Withdrawing rewards and commission"),(0,n.kt)("h3",{id:"1-withdraw-rewards"},"1. Withdraw rewards"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"gaiad tx distribution withdraw-rewards cosmosvaloper1e5yfpc8l6g4808fclmlyd38tjgxuwshnmjkrq6 --from cosmos1e5yfpc8l6g4808fclmlyd38tjgxuwshn7xzkvf --commission --chain-id provider --gas auto --fees 500uatom -b block -y\n\ntxhash: A7E384FB1958211B43B7C06527FC7D4471FB6B491EE56FDEA9C5634D76FF1B9A\n")),(0,n.kt)("h3",{id:"2-confirm-withdrawal"},"2. Confirm withdrawal"),(0,n.kt)("p",null,"After withdrawing rewards self-delegation address balance to confirm rewards were withdrawn:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'gaiad q bank balances cosmos1e5yfpc8l6g4808fclmlyd38tjgxuwshn7xzkvf\n\nbalances:\n- amount: "216"\n  denom: ibc/2CB0E87E2A742166FEC0A18D6FBF0F6AD4AA1ADE694792C1BD6F5E99088D67FD\n- amount: "2233766225342"\n  denom: uatom\npagination:\n  next_key: null\n  total: "0"\n')))}m.isMDXComponent=!0}}]);