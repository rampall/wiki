---
id: overview
title: Heimdall
sidebar: Heimdall
description: Heimdall is the heart of the Polygon network
keywords:
  - docs
  - matic
  - polygon
  - heimdall
  - cosmos
  - peppermint
image: https://matic.network/banners/matic-network-16x9.png 
---

Heimdall is the heart of the Polygon PoS network. It is the proof-of-stake verifier layer, which is responsible for checkpointing the representation of blocks to the Ethereum mainnet. It also manages the validators settings, block producer selection, the state-sync mechanism between Ethereum and Polygon and other essential aspects of the system.

It is built on a customized version of the **Cosmos-SDK**, a framework for building blockchains and a forked version of Tendermint, called [Peppermint](https://github.com/maticnetwork/tendermint/tree/peppermint).

## Key Concepts
### Checkpoints
Checkpoints are the most crucial part of the Polygon network. They represent snapshots of the Bor chain state and are supposed to be attested by ⅔+ of the validator set before they are validated and submitted on the contracts deployed on Ethereum.

Checkpoints are important for two reasons:

1. Providing finality on the root chain.
2. Providing proof of burn in withdrawal of assets.
Heimdall layer handles the aggregation of blocks produced by Bor into a Merkle tree and publishes the Merkle root periodically to the root chain. The periodic publishing of snapshots of Bor is called a [checkpoint](#checkpoint).

Overview of the process:

1. A subset of active validators from the pool is selected to act as block producers for a certain period of time called a span. These block producers are responsible for creating blocks and broadcasting the created blocks on the network.
2. A checkpoint includes the Merkle root hash of all blocks created during any given interval. All nodes validate the Merkle root hash and attach their signature to it.
3. A selected proposer from the validator set is responsible for collecting all signatures for a particular checkpoint and committing the checkpoint on the Ethereum mainnet.

The responsibility of creating blocks and proposing checkpoints is variably dependent on a validator’s stake ratio in the overall pool.

### State Sync
State Sync is another key part of the Heimdall architecture. Here is how it works:
Whenever a token transfer between Ethereum and Polygon network happens, a contract deployed on Ethereum called `iStateReceiver`is called, which emits an event broadcasting the transfer data.
The bridge listens to the events coming from the `iStateReceiver` contract, processes them and also performs sanity check on all that data. This data is then checked and gathered by Heimdall, which will also make it available for Bor.
At the end of a span, the Bor component will look for new events coming from Heimdall. If so, Bor will add this event to its new state and tokens on L1 be locked whereas the tokens on L2 will become available.   

### Transactions
Transactions are comprised of metadata held in contexts and messages that trigger state changes within a module, through the module's Handler.
The handler of the Auth module checks and validates the transaction. After the verification, it checks the balance of the sender for enough fees and deduct fees in case of successful transaction inclusion. 

## Validators
A validator on the Heimdall layer:

- Validates all the blocks since the last checkpoint.
- Creates a Merkle tree of the block hashes.
- Publishes the Merkle root hash to the Ethereum mainnet.

:::note
Check the [<ins>Validators section</ins>](/docs/category/become-a-validator/) if you want to read more about system requirements, validator node setup or any other validator-related information.
:::

### Validator Key Management
Each validator uses two keys to manage validator-related activities on Polygon. The Signer key is kept on the node and is generally considered a hot wallet, whereas the Owner key is supposed to be kept very secure, tends to be used infrequently, and is generally considered a cold wallet. The staked funds are controlled by the Owner key.

This separation of responsibilities has been done to ensure an efficient tradeoff between security and ease of use. Both keys are Ethereum-compatible addresses and work exactly in the same manner. It is possible to have the same Owner and Signer keys.

## Modules
Polygon PoS implementation involves many modules managing specific functionalities of the network. For instance, there is the [Checkpoint module](https://github.com/maticnetwork/heimdall/tree/master/checkpoint) that manages checkpoint-related functionalities for Heimdall as well as the [Bank module](https://github.com/maticnetwork/heimdall/tree/master/bank) that handles its account balance and transfers. 

:::info 
If you are interested in knowing more about each of the Heimdall modules, check [<ins>the Heimdall Github repository</ins>](https://github.com/maticnetwork/heimdall/tree/master). Each module has its own README, which is highly technical and more oriented for developers and builders.
:::
