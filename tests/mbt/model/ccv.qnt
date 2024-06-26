// -*- mode: Bluespec; -*-
module ccv_types {
    import Time.* from "./libraries/Time"
    import extraSpells.* from "./libraries/extraSpells"

    type Node = str
    type Chain = str
    type Power = int
    type VscId = int
    type ValidatorSet = Node -> Power
    type Height = int
    // a list of validator sets per blocks, ordered by recency
    type VotingPowerHistory = List[ValidatorSet]

    // For key assignment, to differentiate Nodes
    // (on the provider) from the assigned
    // keys/addresses on consumers
    type ConsumerAddr = str

    type VscPacket =
        {   
            // the identifier for this packet
            id: VscId,
            // the new validator set. in the implementation, this would be a list of validator updates
            validatorSet: ValidatorSet,
            // the time at which the packet was sent.
            sendingTime: Time,
            // the time (on the receiver) at which the packet will time out
            timeoutTime: Time

        }

    type VscMaturedPacket = 
        {
            // the id of the VscPacket that matured
            id: VscId,
            // the time at which the packet was sent.
            sendingTime: Time,
            // the time (on the receiver) at which the packet will time out
            timeoutTime: Time
        }


    // state that each chain needs to store, whether consumer or provider.
    type ChainState = {
        // Stores the list of voting powers that corresponded to voting powers 
        // at blocks over the chains entire existence.
        // Voting powers should be ordered by recency in descending order.
        votingPowerHistory: VotingPowerHistory,

        // the current validator set on each chain.
        // this will be included in the next block, but might not be final yet,
        // e.g. there may be more modifications in the current block.
        currentValidatorSet: ValidatorSet,

        // the latest timestamp that was committed on chain
        lastTimestamp: Time,

        // the running timestamp of the current block (that will be put on chain when the block is ended)
        runningTimestamp: Time,
    }

    // utility function: returns a chain state that is initialized minimally.
    pure def GetEmptyChainState(): ChainState = 
        {
            votingPowerHistory: List(),
            currentValidatorSet: Map(),
            lastTimestamp: -1, // last timestamp -1 means that in the model, there was no block committed on chain yet.
            runningTimestamp: 0,
        }

    // Defines the current state of the provider chain. Essentially, all information here is stored by the provider on-chain (or could be derived purely by information that is on-chain).
    type ProviderState =
        {
            // the state that each chain needs to store
            chainState: ChainState,

            // Stores, for each consumer chain, the list of packets that have been sent to the consumer chain
            // and *have not been received yet*.
            // In the implementation, this would roughly be the unacknowledged packets on an ibc channel.
            outstandingPacketsToConsumer: Chain -> List[VscPacket],

            // the set of received VscMaturedPackets
            receivedMaturations: Set[VscMaturedPacket],

            // Stores VscPackets which have been sent but where the provider has *not received a response yet*.
            sentVscPacketsToConsumer: Chain -> List[VscPacket],

            // stores whether, in this block, the validator set has changed.
            // this is needed because the validator set might be considered to have changed, even though
            // it is still technically identical at our level of abstraction, e.g. a validator power change on the provider
            // might leave the validator set the same because a delegation and undelegation cancel each other out.
            providerValidatorSetChangedInThisBlock: bool,

            // stores, for each consumer chain, its current status -
            // not consumer, running, or stopped
            consumerStatus: Chain -> str,

            // a monotonic strictly increasing and positive ID that is used
            // to uniquely identify the Vscs sent to the consumer chains.
            runningVscId: int,

            // For every consumer chain, stores the consumer address assigned by each validator.
            validatorToConsumerAddr: Chain -> (Node -> ConsumerAddr),

            // For every consumer chain, holds the provider validator for each assigned consumer address.
            // Note that this is *not* precisely the reverse of validatorToConsumerAddr,
            // because when a validator changes their consumer addr,
            // the old one stays in this map until pruned.
            consumerAddrToValidator: Chain -> (ConsumerAddr -> Node),

            // For every consumer chain, stores whether the key assignment for the consumer chain has changed in this block.
            consumersWithAddrAssignmentChangesInThisBlock: Set[Chain],

            // the history of validator sets on the provider, but with the key assignments applied.
            // This is needed to check invariants about the validator set when key assignments are in play.
            keyAssignedValSetHistory: Chain -> VotingPowerHistory,

            // Stores the mapping from VSC ids to consumer validators addresses. Needed for pruning consumerAddrToValidator.
            consumerAddrsToPrune: Chain -> VscId -> List[ConsumerAddr],

            // For every sent VSCPacket, stores the key assignments that were applied to send it.
            keyAssignmentsForVSCPackets: VscId -> (Chain -> (Node -> ConsumerAddr))
        }

    // utility function: returns a provider state that is initialized minimally.
    pure def GetEmptyProviderState(): ProviderState = 
        {
            chainState: GetEmptyChainState,
            outstandingPacketsToConsumer: Map(),
            receivedMaturations: Set(),
            sentVscPacketsToConsumer: Map(),
            providerValidatorSetChangedInThisBlock: false,
            consumerStatus: Map(),
            runningVscId: 0,
            validatorToConsumerAddr: Map(),
            keyAssignedValSetHistory: Map(),
            consumerAddrToValidator: Map(),
            consumerAddrsToPrune: Map(),
            keyAssignmentsForVSCPackets: Map(),
            consumersWithAddrAssignmentChangesInThisBlock: Set()
        }
        

    // Defines the current state of a consumer chain. This information is accessible to that consumer on-chain.
    type ConsumerState = {
        // the state that each chain needs to store
        chainState: ChainState,

        // stores the received vscpackets in descending order of recency,
        // i.e. newest first.
        receivedVscPackets: List[VscPacket],

        // Stores the maturation times for VscPackets received by this consumer
        // in the same order as they are in the receivedVscPackets.
        maturationTimes: List[(VscPacket, Time)],

        // Stores the list of packets that have been sent to the provider chain by this consumer
        // and have not been received yet.
        // ordered by recency, so the head is the oldest packet.
        // In the implementation, essentially unacknowledged IBC packets.
        outstandingPacketsToProvider: List[VscMaturedPacket],
    }

    // utility function: returns a consumer state that is initialized minimally.
    pure def GetEmptyConsumerState(): ConsumerState = 
        {
            chainState: GetEmptyChainState,
            maturationTimes: List(),
            outstandingPacketsToProvider: List(),
            receivedVscPackets: List(),
        }

    // the state of the protocol consists of the composition of the state of one provider chain with potentially many consumer chains.
    type ProtocolState = {
        providerState: ProviderState,
        // the state of each consumer chain.
        // note that we assume that this contains all consumer chains that may ever exist,
        // and consumer chains that are currently not running will have providerState.consumerStatus == NOT_CONSUMER or STOPPED.
        consumerStates: Chain -> ConsumerState
    }

    // gets a protocol state that is initialized minimally.
    pure def GetEmptyProtocolState(): ProtocolState = 
        {
            providerState: GetEmptyProviderState,
            consumerStates: Map(),
        }

    type Error = str

    // we return either a result or an error.
    // if hasError() is true, newState may be arbitrary, but the error will be meaningful.
    // if hasError() is false, error may be arbitrary, but newState will be meaningful.
    type Result = {
        newState: ProtocolState,
        error: Error
    }

    pure def Ok(newState: ProtocolState): Result = {
        {
            newState: newState,
            error: ""
        }
    }

    pure def Err(msg: str): Result = {
        {
            newState: {
                GetEmptyProtocolState
            },
            error: msg
        }
    }

    pure def hasError(result: Result): bool = result.error != ""

    // possible consumer statuses
    pure val STOPPED = "stopped" // the chain was once a consumer chain, but has been voluntarily dropped by the provider.
    pure val TIMEDOUT = "timedout" // the chain has timed out and was dropped by the provider. This is only used for involuntary drops.
    pure val RUNNING = "running" // the chain is currently a consumer chain. Running chains are those that get sent VscPackets.
    pure val NOT_CONSUMER = "not consumer" // the chain has never been a consumer chain, and is available to become one.
    // When a chain is dropped, it cannot become a consumer again - we assume that would be done by another consumer becoming running.

    // the provider chain.
    // given as a pure val so that we can switch cases based on
    // whether a chain is the provider or not
    pure val PROVIDER_CHAIN = "provider"
}

module ccv {
    // Implements the core logic of the cross-chain validation protocol.

    // Things that are not modelled:
    // * Reward distribution
    // * Slashes

    // Things that explicitly are modelled:
    // * Validator set changes are propagated from provider to consumers
    // * Vsc packets mature

    // We assume that packet receive + ack happen synchronously, 
    // i.e. when the packet is delivered, the ack is delivered right afterwards.
    // This is because it is nontrivial in practice to get a relayer to relay a packet, but not its ack.
    
    import Time.* from "./libraries/Time"
    import extraSpells.* from "./libraries/extraSpells"
    import ccv_types.*
    import ccv_utils.* from "./ccv_utils"
  

    // ===================
    // PROTOCOL PARAMETERS
    // ===================

    // the set of all possible consumer chains.
    const ConsumerChains: Set[Chain]

    // For each chain, this defines the time between the initiation of an unbonding and its maturation.
    const UnbondingPeriodPerChain: Chain -> int

    // The maximum time duration between sending any VscPacket to any consumer chain and receiving the
    // corresponding VscMaturedPacket, without timing out the consumer chain and consequently removing it.
    const VscTimeout: int

    // The timeoutTimestamp for sent packets. Can differ by chain.
    const CcvTimeout: Chain -> int

    // The trusting period on each chain.
    // If headers on a channel between two chains are not updated within this period,
    // they expire and the channel will be closed.
    const TrustingPeriodPerChain: Chain -> int

    // ===================
    // PROTOCOL LOGIC contains the meat of the protocol
    // functions here roughly correspond to API calls that can be triggered from external sources
    // ===================
    
    // the power of a validator on the provider chain is changed by the given amount. We do not care how this happens,
    // e.g. via undelegations, or delegations, ...
    pure def votingPowerChange(currentState: ProtocolState, validator: Node, amount: int): Result = {
            pure val currentValidatorSet = currentState.providerState.chainState.currentValidatorSet
            pure val oldVotingPower = if (currentValidatorSet.keys().contains(validator)) currentValidatorSet.get(validator) else 0
            if (amount == 0) {
                Err("Voting power cannot change by zero!")
            } else if (oldVotingPower == 0) {
                Err("Voting power cannot be changed for a validator that is not in the current validator set!")
            } else {
                pure val newVotingPower = oldVotingPower + amount
                pure val newValidatorSet = currentValidatorSet.put(validator, if(newVotingPower >= 0) newVotingPower else 0)
                // if the new validator set contains no validators with positive voting power, the validator set is invalid
                if (newValidatorSet.values().filter(votingPower => votingPower > 0).size() == 0) {
                    Err("Voting power change resulted in empty validator set!")
                } else {
                    // set the validator set changed flag
                    val newProviderState = currentState.providerState.with(
                        "providerValidatorSetChangedInThisBlock", true
                    )
                    pure val tmpState = currentState.with(
                        "providerState", newProviderState
                    )
                    pure val newState = setProviderValidatorSet(tmpState, newValidatorSet)
                    Ok(newState)
                }
            }
    }

    // Delivers the next queued VscMaturedPacket from a consumer chain to the provider chain.
    // Arguments are the currentState and the the consumer chain, from which the packet will be delivered.
    // If this packet will time out on the provider on delivery,
    // the consumer will be dropped.
    // The first return is the result of the operation, the second result is a boolean
    // that indicates whether the consumer timed out or not.
    // If the result has an error, the second return should be ignored.
    pure def deliverPacketToProvider(currentState: ProtocolState, sender: Chain): (Result, bool) = {
        if (not(isRunningConsumer(sender, currentState.providerState))) {
            (Err("Sender is not currently a consumer - must have 'running' status!"), false)
        } else if (length(currentState.consumerStates.get(sender).outstandingPacketsToProvider) == 0) {
            (Err("No outstanding packets to deliver"), false)
        } else {
            val packet = currentState.consumerStates.get(sender).outstandingPacketsToProvider.head()
            if(packet.timeoutTime <= currentState.providerState.chainState.runningTimestamp) {
                // drop consumer
                val result = stopConsumers(
                    currentState.providerState.consumerStatus,
                    Set(),
                    Set(sender)
                )

                val newConsumerStatus = result._1
                val err = result._2
                if (err != "") {
                    (Err(err), false)
                } else {
                    val newProviderState = currentState.providerState.with(
                        "consumerStatus", newConsumerStatus
                    )
                    val newState: ProtocolState = currentState.with(
                        "providerState", newProviderState
                    )
                    (Ok(newState), true) // true because the packet timed out
                }
            } else {
                // the packet has not timed out, so receive it on the provider
                val result = recvPacketOnProvider(currentState, sender, packet)
                val tmpState = result.newState
                if (result.hasError()) {
                    (result, false)
                } else {
                    (Ok(removeOutstandingPacketFromConsumer(tmpState, sender)), false) // false because the packet did not time out
                }
            }
        }
    }   

    // Delivers the next queued VscPacket from the provider chain to a consumer chain.
    // Arguments are the current state and the consumer chain, to which the packet will be delivered.
    // If this packet will time out on the consumer on delivery,
    // the consumer will be dropped.
    // The first return is the result of the operation, the second result is a boolean
    // that indicates whether the consumer timed out or not.
    // If the result has an error, the second return should be ignored.
    pure def deliverPacketToConsumer(currentState: ProtocolState, receiver: Chain): (Result, bool) = {
        if (not(isRunningConsumer(receiver, currentState.providerState))) {
            (Err("Receiver is not currently a consumer - must have 'running' status!"), false)
        } else if (length(currentState.providerState.outstandingPacketsToConsumer.get(receiver)) == 0) {
            (Err("No outstanding packets to deliver"), false)
        } else {
            val packet = currentState.providerState.outstandingPacketsToConsumer.get(receiver).head()
            // check if the consumer timed out
            if (packet.timeoutTime <= currentState.consumerStates.get(receiver).chainState.runningTimestamp) {
                // drop consumer
                val result = stopConsumers(
                    currentState.providerState.consumerStatus,
                    Set(),
                    Set(receiver)
                )

                val newConsumerStatus = result._1
                val err = result._2
                if (err != "") {
                    (Err(err), false)
                } else {
                    val newProviderState = currentState.providerState.with(
                        "consumerStatus", newConsumerStatus
                    )
                    val newState: ProtocolState = currentState.with(
                        "providerState", newProviderState
                    )
                    (Ok(newState), true) // true because the packet timed out
                }
            } else {
                // the packet has not timed out, so receive it on the consumer
                val result = recvPacketOnConsumer(currentState, receiver, packet, UnbondingPeriodPerChain.get(receiver))
                val tmpState = result.newState
                if (result.hasError()) {
                    (result, false)
                } else {
                    (Ok(removeOutstandingPacketFromProvider(tmpState, receiver)), false) // false because the packet did not time out
                }
            }
        }
    }



    /// Ends a block on the provider. This means that the current validator set is committed on chain,
    /// packets are queued, and the next block is started. Also, consumers that have passed
    /// the VscTimeout without responding to a pending vscpacket are dropped.
    pure def endAndBeginBlockForProvider(
        currentState: ProtocolState,
        // by how much the timestamp should be advanced,
        // i.e. the timestamp for the next block is oldTimestamp + timeAdvancement
        timeAdvancement: Time,
        // a set of consumers that were not consumers before, but should be set to running now.
        consumersToStart: Set[Chain],
        // a set of consumers that were running before, but should be set to stopped now.
        // This argument only needs to contain "voluntary" stops -
        // forced stops, e.g. because a consumer timed out,
        // will be added automatically. 
        consumersToStop: Set[Chain]): Result = {
        val currentProviderState = currentState.providerState
        
        // check for vsc timeouts
        val timedOutConsumers = getRunningConsumers(currentProviderState).filter(
            consumer => 
            val res = TimeoutDueToVscTimeout(currentState, consumer, VscTimeout)
            res._1
        )
        
        // for each consumer chain, apply the key assignment to the current validator set
        val currentValSets = ConsumerChains.mapBy(
            (consumer) => 
            currentProviderState.applyKeyAssignmentToValSet(
                consumer, 
                currentProviderState.chainState.currentValidatorSet
            )
        )
        // store the current validator set with the key assignments applied in the history
        val newKeyAssignedValSetHistory = currentValSets.keys().mapBy(
            (consumer) => 
            currentProviderState.keyAssignedValSetHistory
                .getOrElse(consumer, List()) // get the existing history (empty list if no history yet)
                .prepend(currentValSets.get(consumer)) // prepend the current validator set with key assignments applied
        )

        // run the shared core chainState logic
        val newChainState = currentProviderState.chainState.endAndBeginBlockShared(timeAdvancement)
        val providerStateAfterTimeAdvancement = 
            {...currentProviderState, chainState: newChainState, keyAssignedValSetHistory: newKeyAssignedValSetHistory}
        val tmpState = currentState.with(
            "providerState", providerStateAfterTimeAdvancement
        )
        

        // send vsc packets (will be a noop if no sends are necessary)
        val providerStateAfterSending =
            providerStateAfterTimeAdvancement.sendVscPackets(
                currentProviderState.chainState.runningTimestamp,
                CcvTimeout.get(PROVIDER_CHAIN)
            )


        // start/stop chains
        val res = providerStateAfterSending.consumerStatus.StartStopConsumers(
            consumersToStart,
            consumersToStop,
            timedOutConsumers
        )
        val newConsumerStatus = res._1
        val err = res._2
        val providerStateAfterConsumerAdvancement = providerStateAfterSending.with(
            "consumerStatus", newConsumerStatus
        ).with(
            "providerValidatorSetChangedInThisBlock", false
        )

        if (err != "") {
            Err(err)
        } else {
            // for each consumer we just set to running, set its initial validator set to be the current one on the provider...
            val valSet = providerStateAfterConsumerAdvancement.chainState.currentValidatorSet
            val newConsumerStateMap =
                tmpState.consumerStates.keys().mapBy(
                    (consumer) => 
                    if (consumersToStart.contains(consumer)) {
                        // ...modified by the key assignments for the consumer
                        val consValSet = applyKeyAssignmentToValSet(providerStateAfterConsumerAdvancement, consumer, valSet)
                        val currentConsumerState: ConsumerState = tmpState.consumerStates.get(consumer)
                        val newConsumerState: ConsumerState = currentConsumerState.with(
                            "chainState", currentConsumerState.chainState.with(
                                "currentValidatorSet", consValSet
                            ).with(
                                "votingPowerHistory",
                                List(consValSet)
                            ).with(
                                "lastTimestamp", 
                                providerStateAfterConsumerAdvancement.chainState.lastTimestamp
                            ).with(
                                "runningTimestamp", 
                                providerStateAfterConsumerAdvancement.chainState.runningTimestamp
                            )
                        )
                        newConsumerState
                    } else {
                        currentState.consumerStates.get(consumer)
                    }
                )
            val newState = tmpState.with(
                "providerState", providerStateAfterConsumerAdvancement
            ).with(
                "consumerStates", newConsumerStateMap
            )

            Ok(newState)
        }
    }

    pure def endAndBeginBlockForConsumer(
        currentState: ProtocolState,
        chain: Chain,
        // by how much the timestamp of the chain should be advanced for the next block
        timeAdvancement: Time): Result = {
            if (not(currentState.consumerStates.keys().contains(chain))) {
                // if the chain is not a consumer, return an error
                Err("chain is not a consumer")
            } else {
                val currentConsumerState: ConsumerState = currentState.consumerStates.get(chain)
                val oldChainState: ChainState = currentConsumerState.chainState
                val newChainState: ChainState = currentConsumerState.chainState.endAndBeginBlockShared(timeAdvancement)
                val newConsumerState: ConsumerState = currentConsumerState.with(
                    "chainState", newChainState
                )
                val maturedPackets = newConsumerState.maturationTimes.select(
                    pair =>
                    val packet = pair._1 
                    val maturationTime: Time = pair._2
                    // important: this uses the last committed timestamp, not the running timestamp!
                    maturationTime <= newChainState.lastTimestamp
                ).transform(pair => pair._1)
                val newMaturationTimes = newConsumerState.maturationTimes.select(
                    pair =>
                    val packet = pair._1 
                    val maturationTime: Time = pair._2
                    // important: this uses the last committed timestamp, not the running timestamp!

                    maturationTime > newChainState.lastTimestamp
                )
                val newOutstandingPackets = newConsumerState.outstandingPacketsToProvider.concat(
                    maturedPackets.transform(
                        packet => {
                            id: packet.id, 
                            // it is important to use the oldChainState here, since this happens during EndBlock
                            sendingTime: oldChainState.runningTimestamp,
                            timeoutTime: oldChainState.runningTimestamp + CcvTimeout.get(chain)
                        }
                    )
                )
                val newConsumerState2: ConsumerState = newConsumerState.with(
                    "maturationTimes", newMaturationTimes
                ).with(
                    "outstandingPacketsToProvider", newOutstandingPackets
                )
                val newConsumerStates = currentState.consumerStates.set(chain, newConsumerState2)
                val newState: ProtocolState = currentState.with(
                    "consumerStates", newConsumerStates
                )
                Ok(newState)
            }
    }

    // Validator providerNode assigns their address for the consumer to be the consumerAddress.
    pure def assignConsumerKey(currentState: ProtocolState, consumer: Chain, providerNode: Node, consumerAddr: ConsumerAddr): Result = {
        // rule 1: validator A cannot assign consumer key K to consumer chain X
        // if there is already a validator B (B!=A) using K on the provider
        pure val provCurValSet = currentState.providerState.chainState.currentValidatorSet
        if (provCurValSet.keys().exists(node => node != providerNode and node == consumerAddr)) {
            Err("validator A cannot assign consumer key K to consumer chain X
            if there is already a validator B (B!=A) using K on the provider")
        } else {
            // rule 2: validator A cannot assign consumer key K to consumer chain X if
            // there is already a validator B using K on X
            pure val valByConsAddr = currentState.providerState.consumerAddrToValidator.getOrElse(consumer, Map())
            if (valByConsAddr.keys().contains(consumerAddr)) {
                Err("consumer key is already in use on the consumer chain")
            } else {
                // this key can be assigned
                
                // get the old assigned key
                pure val consKeyByVal = currentState.providerState.validatorToConsumerAddr.getOrElse(consumer, Map())
                pure val p = if (consKeyByVal.keys().contains(providerNode)) {
                    // providerNode had previously assigned a consumer key
                    (consKeyByVal.get(providerNode), true)
                } else {
                    (providerNode, false)
                }
                // the consumer address that was previously associated with the node
                pure val oldConsAddr = p._1
                // whether the old address was explicitly assigned, or the default key
                pure val prevAssigned = p._2
                
                // set the old address for pruning, if it was assigned
                pure val tmpState = if (prevAssigned) {
                    AppendConsumerAddrToPrune(currentState, oldConsAddr, consumer)
                } else {
                    currentState
                }

                // check whether the validator has positive power
                pure val provValSet = currentState.providerState.chainState.currentValidatorSet
                pure val provValPower = if (provValSet.keys().contains(providerNode)) provValSet.get(providerNode) else 0
                pure val consumersWithAddrAssignmentChangesInThisBlock = 
                    if (provValPower > 0) {
                        // if the consumer has positive power, the relevant key assignment for the consumer changed
                        currentState.providerState.consumersWithAddrAssignmentChangesInThisBlock.union(Set(consumer))
                    } else {
                        // otherwise, the consumer doesn't need to know about the change, so no change
                        currentState.providerState.consumersWithAddrAssignmentChangesInThisBlock
                    }
                pure val tmpStateAfterKeyAssignmentReplacement = tmpState.with(
                    "providerState", tmpState.providerState.with(
                        "consumersWithAddrAssignmentChangesInThisBlock", consumersWithAddrAssignmentChangesInThisBlock
                    )
                )
                
                pure val newvalidatorToConsumerAddr = currentState.providerState.validatorToConsumerAddr.put(
                    consumer,
                    currentState.providerState.validatorToConsumerAddr.getOrElse(consumer, Map()).put(
                        providerNode,
                        consumerAddr
                    )
                )

                pure val newconsumerAddrToValidator = currentState.providerState.consumerAddrToValidator.put(
                    consumer,
                    currentState.providerState.consumerAddrToValidator.getOrElse(consumer, Map()).put(
                        consumerAddr,
                        providerNode
                    )
                )

                pure val newProviderState = tmpStateAfterKeyAssignmentReplacement.providerState.with(
                    "validatorToConsumerAddr", newvalidatorToConsumerAddr
                ).with(
                    "consumerAddrToValidator", newconsumerAddrToValidator
                )

                Ok(
                    tmpStateAfterKeyAssignmentReplacement.with(
                        "providerState", newProviderState
                    )
                )
            }
        }
    }

    // ===================
    // ASSUMPTIONS ON MODEL PARAMETERS
    // ===================

    run UnbondingPeriodPositiveTest =
        UnbondingPeriodPerChain.keys().forall(chain => UnbondingPeriodPerChain.get(chain) > 0)

    run VscTimeoutPositiveTest =
        VscTimeout > 0

    run CcvTimeoutPositiveTest =
        CcvTimeout.keys().forall(chain => CcvTimeout.get(chain) > 0)

    run CcvTimeoutLargerThanUnbondingPeriodTest =
        UnbondingPeriodPerChain.values().forall(
            value => CcvTimeout.get(PROVIDER_CHAIN) > value
        )

    run ProviderIsNotAConsumerTest =
        not(ConsumerChains.contains(PROVIDER_CHAIN))

    // ccv timeout contains exactly consumers and provider, no other chains
    run CcvTimeoutKeysTest =
        CcvTimeout.keys() == ConsumerChains.union(Set(PROVIDER_CHAIN))

    // unbonding period contains exactly consumers and provider, no other chains
    run UnbondingPeriodKeysTest =
        UnbondingPeriodPerChain.keys() == ConsumerChains.union(Set(PROVIDER_CHAIN))
}
