"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3986],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>w});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),d=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},c=function(e){var r=d(e.components);return n.createElement(l.Provider,{value:r},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=d(t),u=a,w=m["".concat(l,".").concat(u)]||m[u]||p[u]||i;return t?n.createElement(w,o(o({ref:r},c),{},{components:t})):n.createElement(w,o({ref:r},c))}));function w(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=u;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s[m]="string"==typeof e?e:a,o[1]=s;for(var d=2;d<i;d++)o[d]=t[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},9896:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var n=t(7462),a=(t(7294),t(3905));const i={},o="Withdrawing consumer chain validator rewards",s={unversionedId:"validators/withdraw_rewards",id:"version-v2.4.0-lsm/validators/withdraw_rewards",title:"Withdrawing consumer chain validator rewards",description:"Here are example steps for withdrawing rewards from consumer chains in the provider chain",source:"@site/versioned_docs/version-v2.4.0-lsm/validators/withdraw_rewards.md",sourceDirName:"validators",slug:"/validators/withdraw_rewards",permalink:"/interchain-security/legacy/v2.4.0-lsm/validators/withdraw_rewards",draft:!1,tags:[],version:"v2.4.0-lsm",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Joining Replicated Security testnet",permalink:"/interchain-security/legacy/v2.4.0-lsm/validators/joining-testnet"},next:{title:"Frequently Asked Questions",permalink:"/interchain-security/legacy/v2.4.0-lsm/faq"}},l={},d=[{value:"Querying validator rewards",id:"querying-validator-rewards",level:2},{value:"Withdrawing rewards and commission",id:"withdrawing-rewards-and-commission",level:2},{value:"1. Withdraw rewards",id:"1-withdraw-rewards",level:3},{value:"2. Confirm withdrawal",id:"2-confirm-withdrawal",level:3}],c={toc:d},m="wrapper";function p(e){let{components:r,...t}=e;return(0,a.kt)(m,(0,n.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"withdrawing-consumer-chain-validator-rewards"},"Withdrawing consumer chain validator rewards"),(0,a.kt)("p",null,"Here are example steps for withdrawing rewards from consumer chains in the provider chain"),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"The examples used are from ",(0,a.kt)("inlineCode",{parentName:"p"},"rs-testnet"),", the replicated security persistent testnet."),(0,a.kt)("p",{parentName:"admonition"},"Validator operator address: ",(0,a.kt)("inlineCode",{parentName:"p"},"cosmosvaloper1e5yfpc8l6g4808fclmlyd38tjgxuwshnmjkrq6"),"\nSelf-delegation address: ",(0,a.kt)("inlineCode",{parentName:"p"},"cosmos1e5yfpc8l6g4808fclmlyd38tjgxuwshn7xzkvf"))),(0,a.kt)("p",null,"Prior to withdrawing rewards, query balances for self-delegation address:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'gaiad q bank balances cosmos1e5yfpc8l6g4808fclmlyd38tjgxuwshn7xzkvf\n\nbalances:\n- amount: "1000000000000"\n  denom: uatom\npagination:\n  next_key: null\n  total: "0"\n')),(0,a.kt)("h2",{id:"querying-validator-rewards"},"Querying validator rewards"),(0,a.kt)("p",null,"Query rewards for the validator address:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'gaiad q distribution rewards cosmos1e5yfpc8l6g4808fclmlyd38tjgxuwshn7xzkvf cosmosvaloper1e5yfpc8l6g4808fclmlyd38tjgxuwshnmjkrq6\n\nrewards:\n- amount: "158.069895000000000000"\n  denom: ibc/2CB0E87E2A742166FEC0A18D6FBF0F6AD4AA1ADE694792C1BD6F5E99088D67FD\n- amount: "841842390516.072526500000000000"\n  denom: uatom\n')),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"ibc/2CB0E87E2A742166FEC0A18D6FBF0F6AD4AA1ADE694792C1BD6F5E99088D67FD")," denom represents rewards from a consumer chain."),(0,a.kt)("h2",{id:"withdrawing-rewards-and-commission"},"Withdrawing rewards and commission"),(0,a.kt)("h3",{id:"1-withdraw-rewards"},"1. Withdraw rewards"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"gaiad tx distribution withdraw-rewards cosmosvaloper1e5yfpc8l6g4808fclmlyd38tjgxuwshnmjkrq6 --from cosmos1e5yfpc8l6g4808fclmlyd38tjgxuwshn7xzkvf --commission --chain-id provider --gas auto --fees 500uatom -b block -y\n\ntxhash: A7E384FB1958211B43B7C06527FC7D4471FB6B491EE56FDEA9C5634D76FF1B9A\n")),(0,a.kt)("h3",{id:"2-confirm-withdrawal"},"2. Confirm withdrawal"),(0,a.kt)("p",null,"After withdrawing rewards self-delegation address balance to confirm rewards were withdrawn:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'gaiad q bank balances cosmos1e5yfpc8l6g4808fclmlyd38tjgxuwshn7xzkvf\n\nbalances:\n- amount: "216"\n  denom: ibc/2CB0E87E2A742166FEC0A18D6FBF0F6AD4AA1ADE694792C1BD6F5E99088D67FD\n- amount: "2233766225342"\n  denom: uatom\npagination:\n  next_key: null\n  total: "0"\n')))}p.isMDXComponent=!0}}]);