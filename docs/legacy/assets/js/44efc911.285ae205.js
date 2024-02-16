"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[872],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>h});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var d=r.createContext({}),l=function(e){var n=r.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(d.Provider,{value:n},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,s=e.originalType,d=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=l(t),m=a,h=c["".concat(d,".").concat(m)]||c[m]||p[m]||s;return t?r.createElement(h,o(o({ref:n},u),{},{components:t})):r.createElement(h,o({ref:n},u))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var s=t.length,o=new Array(s);o[0]=m;var i={};for(var d in n)hasOwnProperty.call(n,d)&&(i[d]=n[d]);i.originalType=e,i[c]="string"==typeof e?e:a,o[1]=i;for(var l=2;l<s;l++)o[l]=t[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5336:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var r=t(7462),a=(t(7294),t(3905));const s={sidebar_position:3,title:"Key Assignment"},o="ADR 001: Key Assignment",i={unversionedId:"adrs/adr-001-key-assignment",id:"version-v3.1.0/adrs/adr-001-key-assignment",title:"Key Assignment",description:"Changelog",source:"@site/versioned_docs/version-v3.1.0/adrs/adr-001-key-assignment.md",sourceDirName:"adrs",slug:"/adrs/adr-001-key-assignment",permalink:"/interchain-security/legacy/v3.1.0/adrs/adr-001-key-assignment",draft:!1,tags:[],version:"v3.1.0",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Key Assignment"},sidebar:"tutorialSidebar",previous:{title:"ADR Template",permalink:"/interchain-security/legacy/v3.1.0/adrs/adr-template"},next:{title:"Jail Throttling",permalink:"/interchain-security/legacy/v3.1.0/adrs/adr-002-throttle"}},d={},l=[{value:"Changelog",id:"changelog",level:2},{value:"Status",id:"status",level:2},{value:"Context",id:"context",level:2},{value:"Decision",id:"decision",level:2},{value:"State required",id:"state-required",level:3},{value:"Protocol overview",id:"protocol-overview",level:3},{value:"Consequences",id:"consequences",level:2},{value:"Positive",id:"positive",level:3},{value:"Negative",id:"negative",level:3},{value:"Neutral",id:"neutral",level:3},{value:"References",id:"references",level:2}],u={toc:l},c="wrapper";function p(e){let{components:n,...t}=e;return(0,a.kt)(c,(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"adr-001-key-assignment"},"ADR 001: Key Assignment"),(0,a.kt)("h2",{id:"changelog"},"Changelog"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"2022-12-01: Initial Draft")),(0,a.kt)("h2",{id:"status"},"Status"),(0,a.kt)("p",null,"Accepted"),(0,a.kt)("h2",{id:"context"},"Context"),(0,a.kt)("p",null,"KeyAssignment is the name of the feature that allows validator operators to use different consensus keys for each consumer chain validator node that they operate."),(0,a.kt)("h2",{id:"decision"},"Decision"),(0,a.kt)("p",null,"It is possible to change the keys at any time by submitting a transaction (i.e., ",(0,a.kt)("inlineCode",{parentName:"p"},"MsgAssignConsumerKey"),")."),(0,a.kt)("h3",{id:"state-required"},"State required"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ValidatorConsumerPubKey")," - Stores the validator assigned keys for every consumer chain.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-golang"},"ConsumerValidatorsBytePrefix | len(chainID) | chainID | providerConsAddress -> consumerKey\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ValidatorByConsumerAddr")," - Stores the mapping from validator addresses on consumer chains to validator addresses on the provider chain. Needed for the consumer initiated slashing sub-protocol.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-golang"},"ValidatorsByConsumerAddrBytePrefix | len(chainID) | chainID | consumerConsAddress -> providerConsAddress\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"KeyAssignmentReplacements")," - Stores the key assignments that need to be replaced in the current block. Needed to apply the key assignments received in a block to the validator updates sent to the consumer chains.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-golang"},"KeyAssignmentReplacementsBytePrefix | len(chainID) | chainID | providerConsAddress -> abci.ValidatorUpdate{PubKey: oldConsumerKey, Power: currentPower},\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ConsumerAddrsToPrune")," - Stores the mapping from VSC ids to consumer validators addresses. Needed for pruning ",(0,a.kt)("inlineCode",{parentName:"li"},"ValidatorByConsumerAddr"),". ")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-golang"},"ConsumerAddrsToPruneBytePrefix | len(chainID) | chainID | vscID -> []consumerConsAddresses\n")),(0,a.kt)("h3",{id:"protocol-overview"},"Protocol overview"),(0,a.kt)("p",null,"On receiving a ",(0,a.kt)("inlineCode",{parentName:"p"},"MsgAssignConsumerKey(chainID, providerAddr, consumerKey)")," message:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-golang"},"// get validator from staking module  \nvalidator, found := stakingKeeper.GetValidator(providerAddr)\nif !found {\n    return ErrNoValidatorFound\n}\nproviderConsAddr := validator.GetConsAddr()\n\n// make sure consumer key is not in use\nconsumerAddr := utils.TMCryptoPublicKeyToConsAddr(consumerKey)\nif _, found := GetValidatorByConsumerAddr(ChainID, consumerAddr); found {\n    return ErrInvalidConsumerConsensusPubKey\n}\n\n// check whether the consumer chain is already registered\n// i.e., a client to the consumer was already created\nif _, consumerRegistered := GetConsumerClientId(chainID); consumerRegistered {\n    // get the previous key assigned for this validator on this consumer chain\n    oldConsumerKey, found := GetValidatorConsumerPubKey(chainID, providerConsAddr)\n    if found {\n        // mark this old consumer key as prunable once the VSCMaturedPacket\n        // for the current VSC ID is received\n        oldConsumerAddr := utils.TMCryptoPublicKeyToConsAddr(oldConsumerKey)\n        vscID := GetValidatorSetUpdateId()\n        AppendConsumerAddrsToPrune(chainID, vscID, oldConsumerAddr)\n    } else {\n        // the validator had no key assigned on this consumer chain\n        oldConsumerKey := validator.TmConsPublicKey()\n    }\n\n    // check whether the validator is valid, i.e., its power is positive\n    if currentPower := stakingKeeper.GetLastValidatorPower(providerAddr); currentPower > 0 {\n        // to enable multiple calls of AssignConsumerKey in the same block by the same validator\n        // the key assignment replacement should not be overwritten\n        if _, found := GetKeyAssignmentReplacement(chainID, providerConsAddr); !found {\n            // store old key and power for modifying the valset update in EndBlock\n            oldKeyAssignment := abci.ValidatorUpdate{PubKey: oldConsumerKey, Power: currentPower}\n            SetKeyAssignmentReplacement(chainID, providerConsAddr, oldKeyAssignment)\n        }\n    }\n} else {\n    // if the consumer chain is not registered, then remove the previous reverse mapping\n    if oldConsumerKey, found := GetValidatorConsumerPubKey(chainID, providerConsAddr); found {\n        oldConsumerAddr := utils.TMCryptoPublicKeyToConsAddr(oldConsumerKey)\n        DeleteValidatorByConsumerAddr(chainID, oldConsumerAddr)\n    }\n}\n\n\n// set the mapping from this validator's provider address to the new consumer key\nSetValidatorConsumerPubKey(chainID, providerConsAddr, consumerKey)\n\n// set the reverse mapping: from this validator's new consensus address \n// on the consumer to its consensus address on the provider\nSetValidatorByConsumerAddr(chainID, consumerAddr, providerConsAddr)\n")),(0,a.kt)("p",null,"When a new consumer chain is registered, i.e., a client to the consumer chain is created, the provider constructs the consumer CCV module part of the genesis state (see ",(0,a.kt)("inlineCode",{parentName:"p"},"MakeConsumerGenesis"),"). "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-golang"},"func (k Keeper) MakeConsumerGenesis(chainID string) (gen consumertypes.GenesisState, nextValidatorsHash []byte, err error) {\n    // ...\n    // get initial valset from the staking module\n    var updates []abci.ValidatorUpdate{}\n    stakingKeeper.IterateLastValidatorPowers(func(providerAddr sdk.ValAddress, power int64) (stop bool) {\n        validator := stakingKeeper.GetValidator(providerAddr)\n        providerKey := validator.TmConsPublicKey()\n        updates = append(updates, abci.ValidatorUpdate{PubKey: providerKey, Power: power})\n        return false\n    })\n\n    // applies the key assignment to the initial validator\n    for i, update := range updates {\n        providerAddr := utils.TMCryptoPublicKeyToConsAddr(update.PubKey)\n        if consumerKey, found := GetValidatorConsumerPubKey(chainID, providerAddr); found {\n            updates[i].PubKey = consumerKey\n        }\n    }\n    gen.InitialValSet = updates\n\n    // get a hash of the consumer validator set from the update\n    updatesAsValSet := tendermint.PB2TM.ValidatorUpdates(updates)\n    hash := tendermint.NewValidatorSet(updatesAsValSet).Hash()\n\n    return gen, hash, nil\n}\n")),(0,a.kt)("p",null,"On ",(0,a.kt)("inlineCode",{parentName:"p"},"EndBlock")," while queueing ",(0,a.kt)("inlineCode",{parentName:"p"},"VSCPacket"),"s to send to registered consumer chains:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-golang"},"func QueueVSCPackets() {\n    valUpdateID := GetValidatorSetUpdateId()\n    // get the validator updates from the staking module\n    valUpdates := stakingKeeper.GetValidatorUpdates()\n\n    IterateConsumerChains(func(chainID, clientID string) (stop bool) {\n        // apply the key assignment to the validator updates\n        valUpdates := ApplyKeyAssignmentToValUpdates(chainID, valUpdates)\n        // ..\n    })\n    // ...\n}\n\nfunc ApplyKeyAssignmentToValUpdates(\n    chainID string, \n    valUpdates []abci.ValidatorUpdate,\n) (newUpdates []abci.ValidatorUpdate) {\n    for _, valUpdate := range valUpdates {\n        providerAddr := utils.TMCryptoPublicKeyToConsAddr(valUpdate.PubKey)\n\n        // if a key assignment replacement is found, then\n        // remove the valupdate with the old consumer key\n        // and create two new valupdates\n        prevConsumerKey, _, found := GetKeyAssignmentReplacement(chainID, providerAddr)\n        if found {\n            // set the old consumer key's power to 0\n            newUpdates = append(newUpdates, abci.ValidatorUpdate{\n                PubKey: prevConsumerKey,\n                Power:  0,\n            })\n            // set the new consumer key's power to the power in the update\n            newConsumerKey := GetValidatorConsumerPubKey(chainID, providerAddr)\n            newUpdates = append(newUpdates, abci.ValidatorUpdate{\n                PubKey: newConsumerKey,\n                Power:  valUpdate.Power,\n            })\n            // delete key assignment replacement\n            DeleteKeyAssignmentReplacement(chainID, providerAddr)\n        } else {\n            // there is no key assignment replacement;\n            // check if the validator's key is assigned\n            consumerKey, found := k.GetValidatorConsumerPubKey(ctx, chainID, providerAddr)\n            if found {\n                // replace the update containing the provider key \n                // with an update containing the consumer key\n                newUpdates = append(newUpdates, abci.ValidatorUpdate{\n                    PubKey: consumerKey,\n                    Power:  valUpdate.Power,\n                })\n            } else {\n                // keep the same update\n                newUpdates = append(newUpdates, valUpdate)\n            }\n        }\n    }\n\n    // iterate over the remaining key assignment replacements\n    IterateKeyAssignmentReplacements(chainID, func(\n        pAddr sdk.ConsAddress,\n        prevCKey tmprotocrypto.PublicKey,\n        power int64,\n    ) (stop bool) {\n       // set the old consumer key's power to 0\n        newUpdates = append(newUpdates, abci.ValidatorUpdate{\n            PubKey: prevCKey,\n            Power:  0,\n        })\n        // set the new consumer key's power to the power in key assignment replacement\n        newConsumerKey := GetValidatorConsumerPubKey(chainID, pAddr)\n        newUpdates = append(newUpdates, abci.ValidatorUpdate{\n            PubKey: newConsumerKey,\n            Power:  power,\n        })\n        return false\n    })\n\n    // remove all the key assignment replacements\n   \n    return newUpdates\n}\n")),(0,a.kt)("p",null,"On receiving a ",(0,a.kt)("inlineCode",{parentName:"p"},"SlashPacket")," from a consumer chain with id ",(0,a.kt)("inlineCode",{parentName:"p"},"chainID")," for a infraction of a validator ",(0,a.kt)("inlineCode",{parentName:"p"},"data.Validator"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-golang"},"func HandleSlashPacket(chainID string, data ccv.SlashPacketData) (success bool, err error) {\n    // ...\n    // the slash packet validator address may be known only on the consumer chain;\n    // in this case, it must be mapped back to the consensus address on the provider chain\n    consumerAddr := sdk.ConsAddress(data.Validator.Address)\n    providerAddr, found := GetValidatorByConsumerAddr(chainID, consumerAddr)\n    if !found {\n        // the validator has the same key on the consumer as on the provider\n        providerAddr = consumer\n    }\n    // ...\n}\n")),(0,a.kt)("p",null,"On receiving a ",(0,a.kt)("inlineCode",{parentName:"p"},"VSCMatured"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-golang"},"func OnRecvVSCMaturedPacket(packet channeltypes.Packet, data ccv.VSCMaturedPacketData) exported.Acknowledgement {\n    // ...\n    // prune previous consumer validator address that are no longer needed\n    consumerAddrs := GetConsumerAddrsToPrune(chainID, data.ValsetUpdateId)\n    for _, addr := range consumerAddrs {\n        DeleteValidatorByConsumerAddr(chainID, addr)\n    }\n    DeleteConsumerAddrsToPrune(chainID, data.ValsetUpdateId)\n    // ...\n}\n")),(0,a.kt)("p",null,"On stopping a consumer chain:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-golang"},"func (k Keeper) StopConsumerChain(ctx sdk.Context, chainID string, closeChan bool) (err error) {\n    // ...\n    // deletes all the state needed for key assignments on this consumer chain\n    // ...\n}\n")),(0,a.kt)("h2",{id:"consequences"},"Consequences"),(0,a.kt)("h3",{id:"positive"},"Positive"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Validators can use different consensus keys on the consumer chains.")),(0,a.kt)("h3",{id:"negative"},"Negative"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"None")),(0,a.kt)("h3",{id:"neutral"},"Neutral"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The consensus state necessary to create a client to the consumer chain must use the hash returned by the ",(0,a.kt)("inlineCode",{parentName:"li"},"MakeConsumerGenesis")," method as the ",(0,a.kt)("inlineCode",{parentName:"li"},"nextValsHash"),"."),(0,a.kt)("li",{parentName:"ul"},"The consumer chain can no longer check the initial validator set against the consensus state on ",(0,a.kt)("inlineCode",{parentName:"li"},"InitGenesis"),".")),(0,a.kt)("h2",{id:"references"},"References"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/cosmos/interchain-security/issues/26"},"Key assignment issue"))))}p.isMDXComponent=!0}}]);