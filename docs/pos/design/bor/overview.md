---
id: overview
title: Bor
description: The Bor node is basically the blockchain operator
sidebar: Bor
keywords:
  - docs
  - matic
  - polygon
  - bor
  - geth
image: https://matic.network/banners/matic-network-16x9.png
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Bor is our Block producer layer, which, in sync with Heimdall, selects the producers and verifiers for each span and sprint.

The Bor node or the Block Producer implementation is basically the EVM-compatible blockchain operator. Currently, it is a Geth implementation with custom changes done to the consensus algorithm. 

Polygon PoS uses dual-consensus architecture on the Polygon Network to optimise for speed and decentralisation.

## Architecture

<img src={useBaseUrl("img/Bor/matic_structure.png")}/>

On Polygon, the node is designed with a two-layer implementation represented by Heimdall(Validator Layer) and Bor(Block Producer Layer).

1. Heimdall
    - Proof-of-Stake verification
    - Checkpointing blocks on Ethereum main chain
    - Validator and Rewards Management
    - Ensuring Sync with Ethereum main chain
    - Decentralised Bridge
2. Bor
    - Polygon Chain
    - EVM Compatible VM
    - Proposers and Producer set selection
    - SystemCall
    - Fee Model

:::info

Bor is state chain in Polygon architecture. It is a fork of Geth [https://github.com/ethereum/go-ethereum](https://github.com/ethereum/go-ethereum) with a new consensus called Bor.

Source: [https://github.com/maticnetwork/bor](https://github.com/maticnetwork/bor)

:::

### Polygon Chain

This chain is a separate blockchain that is attached to Ethereum using a two-way peg. The two-way peg enables the interchangeability of assets between Ethereum and Polygon.

### EVM Compatible VM

The Ethereum Virtual Machine (EVM) is a powerful, sandboxed virtual stack embedded within each full Polygon node, responsible for executing contract bytecode. Contracts are typically written in high-level languages, like Solidity, then compiled to EVM bytecode.

### Proposers and Producers Selection

Block Producers for the Bor layer are a committee selected from the Validator pool on the basis of their stake, which happens at regular intervals and is shuffled periodically. These intervals are decided by the Validator's governance with regard to dynasty and network.

The ratio of Stake/Staking power specifies the probability to be selected as a member of the block producer committee.

<img src={useBaseUrl("img/Bor/bor-span.png")} />

#### Selection Process

1. Validators are given slots proportionally according to their stake.
2. Using historical Ethereum block data as seed, we shuffle this array.
3. Now depending on Producer count*(maintained by validator's governance)*, validators are taken from the top. 
4. Using this validator set and Tendermint's proposer selection algorithm, we choose a producer for every sprint on Bor.

## Core Concepts

### MATIC as the Native token (Gas token)

Bor has a MATIC token as a native token similar to ETH in Ethereum. It is often called the gas token. 

In addition to that, Bor provides an in-built wrapped ERC20 token for the native token (similar to WETH token), which means applications can use wrapped MATIC ERC20 tokens in their applications without creating their own wrapped ERC20 version of the Matic native token.

Wrapped ERC20 token is deployed at `0000000000000000000000000000000000001010` as `[MRC20.sol](https://github.com/maticnetwork/contracts/blob/develop/contracts/child/MRC20.sol)` on Bor as one of the genesis contracts.

### Fees

Native token is used as fees while sending transactions on Bor. This prevents spamming on Bor and provides incentives to block Producers from running the chain for longer periods and discourages bad behavior.

A transaction sender defines `GasLimit` and `GasPrice` for each transaction and broadcasts it on Bor. Each producer can then define how much minimum gas price they can accept. If the user-defined `GasPrice` on the transaction is the same or greater than the producer-defined gas price, the producer will accept the transaction and include it in the next available block. This enables each producer to allow its own minimum gas price requirement.

Transaction fees are deducted from the sender's account in the native token.

Collected fees for all transactions in a block are transferred to the producer's account using a coinbase transfer. Since having more staking power increases the probability of becoming a producer, it will allow a validator with high staking power to collect more rewards (in terms of fees) accordingly.

### Deposit native token

A user can receive native token by depositing MATIC tokens on Ethereum main-chain to `DepositManager` contract (deployed on Ethereum chain). Source: [https://github.com/maticnetwork/contracts/blob/develop/contracts/root/depositManager/DepositManager.sol#L68](https://github.com/maticnetwork/contracts/blob/develop/contracts/root/depositManager/DepositManager.sol#L68)

Users can move Matic ERC20 token (Native token) or any other ERC20 tokens from the Ethereum chain to the Bor chain.

### Withdraw native token

Withdraw from the Bor chain to Ethereum chain works exactly like any other ERC20 token. A user can call the `withdraw` function on ERC20 contract and deploy it on Bor, at `0000000000000000000000000000000000001010`  to initiate the withdraw process for the same.  

## Built-in contracts (Genesis contracts)

Bor starts with three built-in contracts, often called genesis contracts. These contracts are available at block 0. Source: [https://github.com/maticnetwork/genesis-contracts](https://github.com/maticnetwork/genesis-contracts)

Below are the details for each genesis contract.

### Bor validator set

The [BorValidatorSet.sol](https://github.com/maticnetwork/genesis-contracts/blob/master/contracts/BorValidatorSet.sol) contract manages the validator set for spans. Having a current validator set and span information into a contract allows other contracts to use that information. Since Bor uses producers from Heimdall (external source), it uses systemCall to change the contract state.

For the first sprint, all producers are defined in `BorValidatorSet.sol` directly.

### State receiver

The [StateReceiver](https://github.com/maticnetwork/genesis-contracts/blob/master/contracts/StateReceiver.sol) contract provides a mechanism for receiving and storing state data from other contracts and notifying interested parties (i.e., contracts) of state changes.
The state-sync mechanism allows for the transfer of state data from the Ethereum chain to Bor.

### MATIC ERC20 token

The [Matic ER20 Tokwn contract](https://github.com/maticnetwork/contracts/blob/develop/contracts/child/MaticChildERC20.sol) is a special contract that wraps the native coin (like $ETH in Ethereum) and provides an ERC20 token interface. Example: `transfer` on this contract transfers native tokens. `withdraw` method in ERC20 token allows users to move their tokens from Bor to the Ethereum chain.

### SystemCall Interface

SystemCall is an internal operator address that is under EVM. This helps to maintain the state for Block Producers for every sprint. A System Call is triggered towards the end of a sprint and a request is made for the new list of Block Producers. Once the state is updated, changes are received after block generation on Bor to all the Validators.

## Span Management

Span is a logically defined set of blocks for which a set of validators is chosen from among all the available validators. Heimdall will select the committee of producers out of all validators. The producers will include a subset of validators depending upon the number of validators in the system.

## State Management (State-sync)

State management sends the state from the Ethereum chain to Bor chain. It is called `state-sync`. This is a way to move data from the Ethereum chain to Bor chain.

## Transaction Speed

Bor currently works as expected with ~2 to 4 seconds' block time with 100 validators and 4 block producers. After multiple stress-testing with huge number of transactions, the exact block time will is decided.

Using sprint-based architecture helps Bor to create faster bulk blocks without changing the producer during the current sprint. Having a delay between two sprints makes other producers receive a broadcasted block, often called as `producerDelay`

Note that the time between two sprints is higher than normal blocks to buffer to reduce the latency issues between multiple producers.

## Consensus

Bor consensus is inspired by Clique consensus: [https://eips.ethereum.org/EIPS/eip-225](https://eips.ethereum.org/EIPS/eip-225). Clique works with multiple pre-defined producers. All producers vote on new producers using Clique APIs. They take turns creating blocks.

Bor fetches new producers through span and a sprint management mechanism.

### Validators

Polygon is a Proof-of-stake system. Anyone can stake their Matic token on Ethereum smart-contract, "staking contract", and become a validator for the system.

Once validators are active on Heimdall they get selected as producers through `bor` module.

### Span

A logically defined set of blocks for which a set of validators is chosen from among all the available validators. Heimdall provides span details through span-details APIs.

Each validator in span contains voting power. Based on their power, they get selected as block producers. Higher power, a higher probability of becoming block producers. Bor uses Tendermint's algorithm for the same. 

### Sprint

A set of blocks within a span for which only a single block producer is chosen to produce blocks. The sprint size is a factor of span size. 

Apart from the current proposer, Bor also selects back-up producers.

### Authorizing a block

The producers in Bor are also called signers, since to authorize a block for the network, the producer needs to sign the block's hash containing **everything except the signature itself**. This means that the hash contains every field of the header, and also the `extraData` with the exception of the 65-byte signature suffix.

This hash is signed using the standard `secp256k1` curve, and the resulting 65-byte signature is embedded into the `extraData` as the trailing 65-byte suffix.

Each signed block is assigned to a difficulty that puts weight on the Block. In-turn signing weighs more (`DIFF_INTURN) than out-of-turn one (`DIFF_NOTURN`).


#### Out-of-turn signing

Bor chooses multiple block producers as a backup when an in-turn producer doesn't produce a block. This could happen for a variety of reasons:

- The block producer node is down
- The block producer is trying to withhold the block
- The block producer is not producing a block intentionally.

When the above happens, Bor's backup mechanism is used.

At any point in time, the validators set is stored as an array sorted based on their signer address. Assume, that the validator set is ordered as A, B, C, D and that it is C's turn to produce a block. If C doesn't produce a block within a sufficient amount of time, it becomes D's turn to produce one. If D doesn't, then A and then B.

However, since there will be some time before C produces and propagates a block, the backup validators will wait a certain amount of time before starting to produce a block. This time delay is called wiggle.

#### Wiggle

Wiggle is the time that a producer should wait before starting to produce a block.

- Say the last block (n-1) was produced at time `t`.
- We enforce a minimum time delay between the current and next block by a variable parameter `Period`.
- In ideal conditions, C will wait for `Period` and then produce and propagate the block. Since block times in Polygon are being designed to be quite low (2-4s), the propagation delay is also assumed to be the same value as `Period`.
- So if D doesn't see a new block in time `2 * Period`, D immediately starts producing a block. Specifically, D's wiggle time is defined as `2 * Period * (pos(d) - pos(c))` where `pos(d) = 3` and `pos(c) = 2` in the validator set. Assuming, `Period = 1`, wiggle for D is 2s.
- Now if D also doesn't produce a block, A will start producing one when the wiggle time of `2 * Period * (pos(a) + len(validatorSet) - pos(c)) = 4s` has elapsed.
- Simmilary, wiggle for C is `6s`

#### Resolving forks

While the above mechanism adds to the robustness of the chain to a certain extent, it introduces the possibility of forks. It could actually be possible that C produced a block, but there was a larger than expected delay in propagation and hence D also produced a block, so that leads to at least 2 forks.

The resolution is simple - choose the chain with higher difficulty. But then the question is how do we define difficulty of a block in our setup?

#### Difficulty

- The difficulty for a block that is produced by an in-turn signer (say c) is defined to be the highest = `len(validatorSet)`.
- Since D is the producer who is next in line; if and when the situation arises that D is producing the block; the difficulty for the block will be defined just like in wiggle as `len(validatorSet) - (pos(d) - pos(c))` which is `len(validatorSet) - 1`
- Difficulty for block being produced by A while acting as a backup becomes `len(validatorSet) - (pos(a) + len(validatorSet) - pos(c))` which is `2`

Now having defined the difficulty of each block, the difficulty of a fork is simply the sum of the difficulties of the blocks in that fork. In the case when a fork has to be chosen, the one with higher difficulty is chosen, since that is a reflection of the fact that blocks were produced by in-turn block producers. This is simply to provide some sense of finality to the user on Bor.

### View Change

After each span, Bor changes view. It means that it fetches new producers for the next span.

#### Commit span

When the current span is about to end (specifically at the end of the second-last sprint in the span), Bor pulls a new span from Heimdall. This is a simple HTTP call to the Heimdall node. Once this data is fetched, a `commitSpan` call is made to the BorValidatorSet genesis contract through System call.

Bor also sets producers bytes into the header of the block. This is necessary while fast-syncing Bor. During fast-sync, Bor syncs headers in bulk and validates if blocks are created by authorized producers.

At the start of each Sprint, Bor fetches header bytes from the previous header for next producers and starts creating blocks based on `ValidatorSet` algorithm.

Here is how header looks like for a block:

```js
header.Extra = header.Vanity + header.ProducerBytes /* optional */ + header.Seal
```

### State sync from Ethereum Chain

Bor provides a mechanism where some specific events on the main Ethereum chain are relayed to Bor.

1. Any contract on Ethereum may call [syncState](https://github.com/maticnetwork/contracts/blob/develop/contracts/root/stateSyncer/StateSender.sol#L33) in `StateSender.sol`. This call emits `StateSynced` event: https://github.com/maticnetwork/contracts/blob/develop/contracts/root/stateSyncer/StateSender.sol#L38

  ```js
  event StateSynced(uint256 indexed id, address indexed contractAddress, bytes data)
  ```

2. Heimdall listens to these events and calls `function proposeState(uint256 stateId)` in `StateReceiver.sol`  - thus acting as a store for the pending state change ids. Note that the `proposeState` transaction will be processed even with a 0 gas fee as long as it is made by one of the validators in the current validator set: https://github.com/maticnetwork/genesis-contracts/blob/master/contracts/StateReceiver.sol#L24

3. At the start of every sprint, Bor pulls the details about the pending state changes using the states from Heimdall and commits them to the Bor state using a system call. See `commitState` here: https://github.com/maticnetwork/genesis-contracts/blob/f85d0409d2a99dff53617ad5429101d9937e3fc3/contracts/StateReceiver.sol#L41
