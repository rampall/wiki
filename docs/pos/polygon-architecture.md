---
id: polygon-architecture
title: Architecture Overview
sidebar_label: Overview
description: Introduction to the architecture of Polygon PoS blockchain.
keywords:
  - architecture
  - polygon
  - pos
  - wiki
  - research
image: https://wiki.polygon.technology/img/polygon-logo.png
---

import useBaseUrl from '@docusaurus/useBaseUrl';

The Polygon PoS Network has a three-layer architecture:

* **Ethereum layer** — a set of contracts on the Ethereum mainnet.
* **Heimdall layer** — a set of proof-of-stake Heimdall nodes running parallel to the Ethereum mainnet, monitoring the set of staking contracts deployed on the Ethereum mainnet and committing the Polygon Network checkpoints to the Ethereum mainnet. Heimdall is based on Tendermint.
* **Bor layer** — a set of block-producing Bor nodes shuffled by Heimdall nodes. Bor is based on Go Ethereum.

<img src={useBaseUrl("img/staking/architecture.png")} />

Currently, developers can use PoS for state transitions for which predicates have
been written, such as ERC20, ERC721, asset swaps, or other custom predicates.
they can use PoS.

To enable the PoS mechanism on our platform, a set of **staking** management contracts are deployed on
Ethereum, and a set of incentivized validators running **Heimdall** and **Bor** nodes. Ethereum is
the first basechain Polygon supports, but Polygon intends to offer support for additional basechains to
enable an interoperable decentralized Layer 2 blockchain platform based on community suggestions and consensus.

<img src={useBaseUrl("img/matic/Architecture.png")} />

## Staking Contracts

To enable the Proof of Stake (PoS) mechanism on Polygon, the system employs a set of staking management contracts on the Ethereum mainnet.

The staking contracts implement the following features:

* Anyone can stake MATIC tokens on the staking contracts on the Ethereum mainnet and join the system as a validator.
* Earn staking rewards for validating state transitions on the Polygon Network.
* Save checkpoints on the Ethereum mainnet.

The PoS mechanism also acts as a mitigation to the data unavailability problem for the Polygon sidechains.

## Heimdall

Heimdall is the proof of stake validation layer that handles the aggregation of blocks produced by Bor into a Merkle tree and publishes the Merkle root periodically to the root chain. The periodic publishing of snapshots of Bor is called checkpoints.

More details on Heimdall are available on the [Heimdall architecture](/docs/pos/design/heimdall/overview) guide.

## Bor

Bor is Polygon's block producer layer - the entity responsible for aggregating transactions into blocks.  Currently, it is a basic Geth implementation with custom changes done to the consensus algorithm.

Block producers are a subnet of the validators and are periodically shuffled via committee selection on Heimdall in durations termed
as a `span` in Polygon. Blocks are produced at the **Bor** node, and the VM is EVM-compatible.
Blocks produced on Bor are also validated periodically by Heimdall nodes, and a checkpoint consisting of
the Merkle tree hash of a set of blocks on Bor is committed to Ethereum periodically.

More details are available on the [Bor architecture](/docs/pos/design/bor/overview) guide.

## Resources

* [Bor Architecture](/docs/pos/design/bor/overview)
* [Heimdall Architecture](/docs/pos/design/heimdall/overview)
