/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
  /*
   *
   * ************************ PoS Section ********************************
   *
   * This section includes the official product documentation and
   * developer guides for Polygon PoS Mainnet.
   *
   * **********************************************************************
   *
   */

  pos: [
    {
      type: "html",
      value: "Polygon PoS",
      className: "sidebar-title",
    },
    "pos/index",
    "pos/getting-started",
    "pos/what-is-polygon-pos",
    {
      type: "category",
      label: "Assets",
      link: {
        type: "generated-index",
      },
      items: ["pos/assets/matic", "pos/assets/pol"],
    },
    {
      type: "html",
      value: "Users",
      className: "sidebar-title",
    },
    {
      type: "category",
      label: "Create an Account",
      link: {
        type: "generated-index",
      },
      items: [
        "tools/wallets/getting-started",
        {
          type: "category",
          label: "Polygon Wallet Suite",
          link: {
            type: "generated-index",
          },
          items: [
            "tools/wallets/polygon-web-wallet/web-wallet-v3-guide",
            "tools/wallets/adding-a-custom-token",
          ],
        },
        {
          type: "category",
          label: "Third-Party Apps",
          link: {
            type: "generated-index",
          },
          items: [
            {
              type: "category",
              label: "Metamask",
              link: {
                type: "generated-index",
              },
              items: [
                "tools/wallets/metamask/overview",
                "tools/wallets/metamask/hello",
                "tools/wallets/metamask/config-polygon-on-metamask",
                "tools/wallets/metamask/custom-tokens",
                "tools/wallets/metamask/multiple-accounts",
              ],
            },
            {
              type: "category",
              label: "Venly",
              link: {
                type: "generated-index",
              },
              items: [
                "tools/wallets/venly/intro",
                "tools/wallets/venly/create-wallet",
                "tools/wallets/venly/network",
                "tools/wallets/venly/custom-tokens",
              ],
            },
            "tools/wallets/metamask/config-polygon-on-wallet-link",
            "tools/wallets/fortmatic",
            "tools/wallets/portis",
            "tools/wallets/torus",
            "tools/wallets/walletconnect",
            "tools/wallets/slashauth",
            "tools/wallets/plaid-wallet-onboard",
            "tools/wallets/particle-network",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Delegate Your Tokens",
      link: {
        type: "generated-index",
      },
      items: [
        "delegate/delegate",
        "delegate/delegator-faq",
        "delegate/staking-faq",
      ],
    },
    {
      type: "html",
      value: "Developers",
      className: "sidebar-title",
    },
    {
      type: "category",
      label: "System Design",
      link: {
        type: "generated-index",
      },
      collapsed: true,
      items: [
        "pos/polygon-architecture",
        /*
        {
          type: "category",
          label: "Native Token",
          link: {
            type: "generated-index",
          },
          items: [
            "pos/design/token/gas-token",
            "pos/design/token/pol",
          ],
        },
        */
        {
          type: "category",
          label: "Consensus",
          link: {
            type: "generated-index",
          },
          items: [
            {
              type: "category",
              label: "Heimdall",
              link: {
                type: "generated-index",
              },
              collapsed: true,
              items: [
                "pos/design/heimdall/overview",
                {
                  type: "category",
                  label: "Core Concepts",
                  link: {
                    type: "generated-index",
                  },
                  items: [
                    "pos/design/heimdall/peppermint",
                    "pos/design/heimdall/encoder",
                    "pos/design/heimdall/transactions",
                    "pos/design/heimdall/stdtx",
                    "pos/design/heimdall/types",
                    "pos/design/heimdall/validators",
                    "pos/design/heimdall/checkpoint",
                    "pos/design/heimdall/validator-key-management",
                    "pos/design/heimdall/antehandler",
                  ],
                },
                {
                  type: "category",
                  label: "Modules",
                  link: {
                    type: "generated-index",
                  },
                  items: [
                    "pos/design/heimdall/modules/auth",
                    "pos/design/heimdall/modules/bank",
                    //"pos/design/heimdall/modules/asance",
                    "pos/design/heimdall/modules/staking",
                    "pos/design/heimdall/modules/checkpoint",
                    "pos/design/heimdall/modules/bor",
                    "pos/design/heimdall/modules/topup",
                    "pos/design/heimdall/modules/clerk",
                    "pos/design/heimdall/modules/chainmanager",
                  ],
                },
              ],
            },
            "pos/design/bor/overview",
            {
              type: "category",
              label: "Validators",
              link: {
                type: "generated-index",
              },
              collapsed: true,
              items: [
                "pos/design/validator/architecture",
                "pos/design/validator/responsibilities",
                "pos/design/validator/core-components/staking",
                //"maintain/polygon-basics/liquid-delegation",
                "pos/design/validator/rewards",
                {
                  type: "category",
                  label: "Core Components",
                  link: {
                    type: "generated-index",
                  },
                  items: [
                    "pos/design/validator/core-components/heimdall-chain",
                    "pos/design/validator/core-components/checkpoint-mechanism",
                    "pos/design/validator/core-components/key-management",
                    "pos/design/validator/core-components/derivatives",
                    "pos/design/validator/core-components/proposers-producers-selection",
                    "pos/design/validator/core-components/proposer-bonus",
                    "pos/design/validator/core-components/transaction-fees",
                    "pos/design/validator/core-components/state-sync-mechanism",
                  ],
                },
              ],
            },
          ],
        },
        {
          type: "category",
          label: "Bridges",
          link: {
            type: "generated-index",
          },
          collapsed: true,
          items: [
            "pos/design/bridge/ethereum-polygon/getting-started",
            "pos/design/bridge/ethereum-polygon/submit-mapping-request",
            {
              type: "category",
              label: "FxPortal",
              link: {
                type: "generated-index",
              },
              items: [
                "pos/design/bridge/l1-l2-communication/fx-portal",
                "pos/design/bridge/ethereum-polygon/mintable-assets",
                "pos/design/bridge/l1-l2-communication/state-transfer",
              ],
            },
            {
              type: "category",
              label: "State Sync",
              link: {
                type: "generated-index",
              },
              collapsed: true,
              items: [
                "pos/design/bridge/state-sync/state-sync",
                "pos/design/bridge/state-sync/how-state-sync-works",
              ],
            },
          ],
        },
        {
          type: "category",
          label: "Transactions",
          link: {
            type: "generated-index",
          },
          collapsed: true,
          items: [
            "pos/design/transactions/eip1559",
            {
              type: "category",
              label: "Account Abstraction",
              link: {
                type: "generated-index",
              },
              items: [
                "pos/design/transactions/meta-transactions/account-abstraction",
                "pos/design/transactions/meta-transactions/eip4337",
                "pos/design/transactions/meta-transactions/meta-transactions",
                "pos/design/transactions/meta-transactions/network-agnostics",
              ],
            },
          ],
        },
        // "home/architecture/security-models",
      ],
    },
    {
      type: "category",
      label: "Build a dApp",
      link: {
        type: "generated-index",
      },
      items: [
        {
          type: "category",
          label: "Deploy a Contract",
          link: {
            type: "generated-index",
          },
          items: [
            {
              type: "category",
              label: "Ethereum Tools",
              link: {
                type: "generated-index",
              },
              items: [
                "tools/ethereum/remix",
                "tools/ethereum/truffle",
                "tools/ethereum/hardhat",
                "tools/ethereum/replit",
              ],
            },
            {
              type: "category",
              label: "Service Providers",
              link: {
                type: "generated-index",
              },
              items: [
                "pos/deploy/alchemy",
                "pos/deploy/chainide",
                "pos/deploy/chainstack",
                "pos/deploy/getblock",
                "pos/deploy/quicknode",
                "pos/deploy/smartpress",
                "pos/deploy/thirdweb",
              ],
            },
          ],
        },
        {
          type: "category",
          label: "Integrate Real-World Data",
          link: {
            type: "generated-index",
          },
          items: [
            "tools/oracles/getting-started",
            "tools/oracles/api3",
            {
              type: "category",
              label: "Band Protocol",
              link: {
                type: "generated-index",
              },
              items: [
                "tools/oracles/bandchain",
                "tools/oracles/bandstandarddataset",
              ],
            },
            "tools/oracles/chainlink",
            "tools/oracles/optimisticoracle",
            "tools/oracles/razor",
            "tools/oracles/tellor",
            "tools/oracles/umb",
          ],
        },
        {
          type: "category",
          label: "Store Your Data",
          link: {
            type: "generated-index",
          },
          items: [
            "tools/storage/ipfs",
            "tools/storage/filecoinhelpers",
            "tools/storage/crusthelpers",
            "tools/storage/nftstorage",
            //"pos/develop/nftstorage",
          ],
        },
        {
          type: "category",
          label: "Analyze Your Data",
          link: {
            type: "generated-index",
          },
          items: [
            {
              type: "category",
              label: "The Graph",
              link: {
                type: "generated-index",
              },
              items: [
                "tools/data/the-graph/overview",
                "tools/data/the-graph/graph-data",
                "tools/data/the-graph/graph-entities",
                "tools/data/the-graph/graph-queries",
              ],
            },
            "tools/data/flair",
            "tools/data/covalent",
            "tools/data/parsiq",
            //"pos/develop/dapp-fauna-polygon-react",
          ],
        },
        /*
        {
          type: "category",
          label: "Frequently Asked Questions",
          link: {
            type: "generated-index",
          },
          items: ["tools/faqs/wallet-bridge-faq"],
        },
        */
      ],
    },
    //"pos/develop/did-implementation",
    {
      type: "category",
      label: "Core Contracts",
      link: {
        type: "generated-index",
      },
      collapsed: true,
      items: [
        "pos/reference/contracts/genesis-contracts",
        "pos/reference/contracts/stakingmanager",
        "pos/reference/contracts/delegation",
      ],
    },
    {
      type: "html",
      value: "Operators",
      className: "sidebar-title",
    },
    {
      type: "category",
      label: "Operate a Node",
      link: {
        type: "generated-index",
      },
      collapsed: true,
      items: [
        "pos/validator/validator-node-system-requirements",
        {
          type: "category",
          label: "Run a Full Node",
          link: {
            type: "generated-index",
          },
          items: [
            "pos/operate/node/full-node-binaries",
            "pos/operate/node/full-node-docker",
            "pos/operate/node/full-node-ansible",
            "pos/operate/node/full-node-packages",
            "pos/operate/node/full-node-gcp",
          ],
        },
        "pos/operate/node/erigon-client",
      ],
    },
    {
      type: "category",
      label: "Become a Validator",
      link: {
        type: "generated-index",
      },
      collapsed: true,
      items: [
        "pos/validator/kb/how-to",
        {
          type: "category",
          label: "Run a Validator",
          link: {
            type: "generated-index",
          },
          items: [
            "pos/validator/run-validator/run-validator-binaries",
            "pos/validator/run-validator/run-validator-ansible",
            "pos/validator/run-validator/run-validator-packages",
          ],
        },
        {
          type: "category",
          label: "Stake Your Validator",
          link: {
            type: "generated-index",
          },
          items: [
            "pos/validator/validator-staking-operations",
            "pos/validator/validator-commission-operations",
            "pos/validator/topup-heimdall-fee",
          ],
        },
        "pos/validator/validator-performance-overview",
        {
          type: "category",
          label: "Troubleshooting",
          link: {
            type: "generated-index",
          },
          items: [
            "pos/validator/kb/known-issues",
            "pos/validator/issues/reporting-issues",
          ],
        },
        //"pos/validator/bloxroute",
        //"maintain/glossary",
      ],
    },
    "pos/reference/snapshot-instructions-heimdall-bor",
    "pos/reference/default-ports",
    "pos/reference/pos-common-commands",
    "pos/reference/pos-errors",
    "pos/pos-faqs",
    {
      type: "html",
      value: "Governance",
      className: "sidebar-title",
    },
    "pos/governance-pos",
    {
      type: "category",
      label: "Proposals",
      link: {
        type: "generated-index",
      },
      items: [
        "pips/pips-overview",
        "pips/how-to-propose",
        "pips/pips-forum",
        "pips/pips-community-guidelines",
      ],
    },
  ],

  /*
   *
   * *************************** Matic.js Section *************************
   *
   * This section includes the official product documentation and
   * reference material for Matic.JS.
   *
   * **********************************************************************
   *
   */

  maticjs: [
    {
      type: "html",
      value: "MaticJS SDK",
      className: "sidebar-title",
    },
    "tools/matic-js/get-started",
    "tools/matic-js/api-architecture",
    "tools/matic-js/installation",
    {
      type: "category",
      label: "Setup",
      link: {
        type: "generated-index",
      },
      items: [
        "tools/matic-js/setup/index",
        "tools/matic-js/setup/web3",
        "tools/matic-js/setup/ethers",
      ],
    },
    {
      type: "category",
      label: "PoS Network",
      link: {
        type: "generated-index",
      },
      items: [
        "tools/matic-js/pos/index",
        {
          type: "category",
          label: "ERC20",
          link: {
            type: "generated-index",
          },
          items: [
            "tools/matic-js/pos/erc20/index",
            "tools/matic-js/pos/erc20/get-balance",
            "tools/matic-js/pos/erc20/approve",
            "tools/matic-js/pos/erc20/approve-max",
            "tools/matic-js/pos/erc20/get-allowance",
            "tools/matic-js/pos/erc20/deposit",
            "tools/matic-js/pos/erc20/transfer",
            "tools/matic-js/pos/erc20/withdraw-start",
            "tools/matic-js/pos/erc20/withdraw-exit",
            "tools/matic-js/pos/erc20/withdraw-exit-faster",
            "tools/matic-js/pos/erc20/is-withdraw-exited",
          ],
        },
        {
          type: "category",
          label: "ERC721",
          link: {
            type: "generated-index",
          },
          items: [
            "tools/matic-js/pos/erc721/index",
            "tools/matic-js/pos/erc721/get-tokens-count",
            "tools/matic-js/pos/erc721/get-token-id-at-index-for-user",
            "tools/matic-js/pos/erc721/get-all-tokens",
            "tools/matic-js/pos/erc721/is-approved",
            "tools/matic-js/pos/erc721/is-approved-all",
            "tools/matic-js/pos/erc721/approve",
            "tools/matic-js/pos/erc721/approve-all",
            "tools/matic-js/pos/erc721/deposit",
            "tools/matic-js/pos/erc721/deposit-many",
            "tools/matic-js/pos/erc721/withdraw-start",
            "tools/matic-js/pos/erc721/withdraw-start-many",
            "tools/matic-js/pos/erc721/withdraw-exit",
            "tools/matic-js/pos/erc721/withdraw-exit-many",
            "tools/matic-js/pos/erc721/withdraw-exit-faster",
            "tools/matic-js/pos/erc721/withdraw-exit-faster-many",
            "tools/matic-js/pos/erc721/is-withdraw-exited",
            "tools/matic-js/pos/erc721/is-withdraw-exited-many",
            "tools/matic-js/pos/erc721/transfer",
            "tools/matic-js/pos/erc721/withdraw-start-with-meta-data",
          ],
        },
        {
          type: "category",
          label: "ERC1155",
          link: {
            type: "generated-index",
          },
          items: [
            "tools/matic-js/pos/erc1155/get-balance",
            "tools/matic-js/pos/erc1155/approve-all",
            "tools/matic-js/pos/erc1155/approve-all-for-mintable",
            "tools/matic-js/pos/erc1155/is-approved-all",
            "tools/matic-js/pos/erc1155/deposit",
            "tools/matic-js/pos/erc1155/deposit-many",
            "tools/matic-js/pos/erc1155/withdraw-start",
            "tools/matic-js/pos/erc1155/withdraw-start-many",
            "tools/matic-js/pos/erc1155/withdraw-exit",
            "tools/matic-js/pos/erc1155/withdraw-exit-faster",
            "tools/matic-js/pos/erc1155/withdraw-exit-many",
            "tools/matic-js/pos/erc1155/withdraw-exit-faster-many",
            "tools/matic-js/pos/erc1155/is-withdraw-exited",
            "tools/matic-js/pos/erc1155/is-withdraw-exited-many",
            "tools/matic-js/pos/erc1155/transfer",
          ],
        },
        "tools/matic-js/pos/is-check-pointed",
        "tools/matic-js/pos/is-deposited",
        "tools/matic-js/pos/deposit-ether",
      ],
    },
    "tools/matic-js/fx-portal",
    "tools/matic-js/set-proof-api",
    {
      type: "category",
      label: "Advanced",
      link: {
        type: "generated-index",
      },
      items: [
        "tools/matic-js/advanced/abi-manager",
        "tools/matic-js/advanced/plugin",
        "tools/matic-js/advanced/exit-util",
      ],
    },
  ],

  /*
   *
   * *************************** Chain Indexer Framework Section *************************
   *
   * This section includes the official product documentation and
   * reference material for chain-indexer-framework
   *
   * **********************************************************************
   *
   */

  chainindexerframework: [
    {
      type: "html",
      value: "Chain Indexer Framework",
      className: "sidebar-title",
    },
    "tools/chain-indexer-framework/overview",
    "tools/chain-indexer-framework/usage",
  ],
  
  

  contribute: [
    "contribute/contributor-guidelines",
    "contribute/bug-bounty-program",
    {
      type: "category",
      label: "Style Guide",
      link: {
        type: "generated-index",
      },
      collapsed: true,
      items: ["contribute/writing-style", "contribute/tutorial-template"],
    },
    "contribute/translate",
  ],

  /*
   *
   * ************************** zkEVM Section *************************
   *
   * This section includes the official product documentation and
   * developer guides for Polygon zkEVM.
   *
   * **********************************************************************
   *
   */

  zkevm: [
    {
      type: "html",
      value: "Polygon zkEVM",
      className: "sidebar-title",
    },
    "zkevm/index",
    "zkevm/introduction",
    "zkevm/develop",
    {
      type: "category",
      label: "Start Building",
      link: {
        type: "generated-index",
      },
      collapsed: true,
      items: [
        "zkevm/bridge-to-zkevm",
        {
          type: "category",
          label: "Smart Contracts",
          link: {
            type: "generated-index",
          },
          collapsed: true,
          items: [
            "zkevm/guides/write-smart-contract",
            "zkevm/guides/using-foundry",
            "zkevm/guides/using-hardhat",
            "zkevm/guides/verify-smart-contract",
            "zkevm/guides/zkevmbridge-guides"
          ],
        },
        {
          type: "category",
          label: "MaticJS SDK",
          link: {
            type: "generated-index",
          },
          collapsed: true,
          items: [
            "zkevm/maticjs/install-sdk",
            "zkevm/maticjs/initialize-zkevm",
            "zkevm/maticjs/zkevm-client-erc20",
            "zkevm/maticjs/common-methods",
          ],
        },
        "zkevm/guides/zkevm-faucet",
        "zkevm/zkevm-gas-station",
      ],
    },
    {
      type: "category",
      label: "Setup zkNode",
      link: {
        type: "generated-index",
      },
      collapsed: true,
      items: ["zkevm/setup-local-node", "zkevm/setup-production-node"],
    },
    {
      type: "category",
      label: "Deploy zkEVM",
      link: {
        type: "generated-index",
      },
      collapsed: true,
      items: [
        "zkevm/deploy-fullzkevm",
        "zkevm/step2-fullzkevm",
        "zkevm/step3-fullzkevm",
        "zkevm/step4-fullzkevm",
        "zkevm/step5-fullzkevm",
        "zkevm/step6-fullzkevm",
        "zkevm/setup-goerlinode",
      ],
    },
    // {
    //   type: "category",
    //   label: "Release Notes",
    //   link: {
    //     type: "generated-index",
    //   },
    //   collapsed: true,
    //   items: ["zkevm/releases/july-release"],
    // },
    {
      type: "category",
      label: "FAQs",
      link: {
        type: "generated-index",
      },
      collapsed: true,
      items: [
        "zkevm/faq/zkevm-general-faq",
        "zkevm/faq/zkevm-protocol-faq",
        "zkevm/faq/zkevm-eth-faq",
        "zkevm/risk-disclosure",
      ],
    },
    "zkevm/open-source-repos",
  ],
  /*
   *
   * ************************** Edge Section *************************
   *
   * This section includes the official product documentation and
   * developer guides for Polygon Edge.
   *
   * **********************************************************************
   *
   */

  edge: [
    {
      type: "html",
      value: "Polygon Edge",
      className: "sidebar-title",
    },
    "edge/index",
    "edge/what-is-edge",
    "edge/operate/quickstart",
    {
      type: "category",
      label: "System Design",
      link: {
        type: "generated-index",
      },
      collapsed: true,
      items: [
        "edge/design/overview",
        {
          type: "category",
          label: "Consensus",
          link: {
            type: "generated-index",
          },
          items: [
            "edge/design/consensus/polybft/polybft-overview",
            "edge/design/consensus/polybft/ibft-overview",
          ],
        },
        {
          type: "category",
          label: "Bridge",
          link: {
            type: "generated-index",
          },
          items: [
            "edge/design/bridge/overview",
            "edge/design/bridge/statesync",
            "edge/design/bridge/checkpoint",
            {
              type: "category",
              label: "Assets",
              link: {
                type: "generated-index",
              },
              items: [
                "edge/design/bridge/assets/erc/erc20",
                "edge/design/bridge/assets/erc/erc721",
                "edge/design/bridge/assets/erc/erc1155",
              ],
            },
          ],
        },
        "edge/design/libp2p",
        {
          type: "category",
          label: "Runtime",
          link: {
            type: "generated-index",
          },
          items: [
            "edge/design/runtime/runtime",
            "edge/design/runtime/runtime-allowlist",
          ],
        },
        "edge/design/blockchain",
        "edge/design/mempool",
        "edge/design/txpool",
        "edge/design/txrelayer",
        "edge/design/json-rpc",
        "edge/design/grpc",
      ],
    },
    {
      type: "category",
      label: "Build an Edge-Powered Chain",
      link: {
        type: "generated-index",
      },
      collapsed: true,
      items: [
        {
          type: "category",
          label: "Prepare Your Environment",
          link: {
            type: "generated-index",
          },
          collapsed: true,
          items: ["edge/operate/requirements", "edge/operate/install"],
        },
        "edge/operate/ibft-to-polybft",
        {
          type: "category",
          label: "Deploy a Chain",
          link: {
            type: "generated-index",
          },
          items: [
            "edge/operate/deploy/deploy-index",
            "edge/operate/deploy/spawn-test-chain",
            "edge/operate/deploy/how-to-generate-genesis",
            "edge/operate/deploy/how-to-configure-rootchain",
            "edge/operate/deploy/genesis-validators",
            "edge/operate/deploy/how-to-start",
          ],
        },
        {
          type: "category",
          label: "Operate Your Chain",
          link: {
            type: "generated-index",
          },
          collapsed: true,
          items: [
            {
              type: "category",
              label: "Access Control",
              link: {
                type: "generated-index",
              },
              collapsed: true,
              items: [
                "edge/operate/deploy/access-control/allowlist-add-remove",
              ],
            },
            {
              type: "category",
              label: "Staking",
              link: {
                type: "generated-index",
              },
              collapsed: true,
              items: [
                "edge/operate/deploy/staking/how-to-stake",
                "edge/operate/deploy/staking/unstake",
              ],
            },
            {
              type: "category",
              label: "Transfers",
              link: {
                type: "generated-index",
              },
              collapsed: true,
              items: [
                "edge/operate/deploy/transfers/cross-chain-deposit",
                "edge/operate/deploy/transfers/cross-chain-withdraw",
              ],
            },
          ],
        },
        {
          type: "category",
          label: "Upgrade Your Chain",
          link: {
            type: "generated-index",
          },
          collapsed: true,
          items: [
            "edge/operate/deploy/upgrades/how-to-upgrade",
            "edge/operate/deploy/upgrades/v1.1-hardforks",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Reference",
      link: {
        type: "generated-index",
      },
      collapsed: true,
      items: [
        "edge/operate/param-reference",
        {
          type: "category",
          label: "Smart Contract Interfaces",
          link: {
            type: "generated-index",
          },
          collapsed: true,
          items: [
            {
              type: "category",
              label: "ERC-20",
              link: {
                type: "generated-index",
              },
              items: [
                "edge/interfaces/erc20/native-erc20",
                "edge/interfaces/erc20/childerc20",
                "edge/interfaces/erc20/childerc20-predicate",
                "edge/interfaces/erc20/rooterc20-predicate",
              ],
            },
            {
              type: "category",
              label: "ERC-721",
              link: {
                type: "generated-index",
              },
              items: [
                "edge/interfaces/erc721/childerc721",
                "edge/interfaces/erc721/childerc721-predicate",
                "edge/interfaces/erc721/rooterc721-predicate",
              ],
            },
            {
              type: "category",
              label: "ERC-1155",
              link: {
                type: "generated-index",
              },
              items: [
                "edge/interfaces/erc1155/childerc1155",
                "edge/interfaces/erc1155/childerc1155-predicate",
                "edge/interfaces/erc1155/rooterc1155-predicate",
              ],
            },
            "edge/interfaces/eip1559-interface",
            {
              type: "category",
              label: "Network",
              link: {
                type: "generated-index",
              },
              items: [
                "edge/interfaces/network/checkpoint-manager",
                "edge/interfaces/network/exit-helper",
                "edge/interfaces/network/state-receiver",
                "edge/interfaces/network/state-sender",
              ],
            },
            {
              type: "category",
              label: "Validators",
              link: {
                type: "generated-index",
              },
              items: [
                "edge/interfaces/validators/validator",
                "edge/interfaces/validators/validator-set-base",
                "edge/interfaces/validators/root-validator-set",
              ],
            },
            {
              type: "category",
              label: "Staking",
              link: {
                type: "generated-index",
              },
              items: [
                "edge/interfaces/staking/stake-manager-interface",
                "edge/interfaces/staking/supernets-manager-interface",
                "edge/interfaces/staking/custom-supernet-manager-interface",
              ],
            },
            {
              type: "category",
              label: "Cryptography",
              link: {
                type: "generated-index",
              },
              items: [
                "edge/interfaces/cryptography/bls",
                "edge/interfaces/cryptography/bn256g2",
              ],
            },
          ],
        },
        {
          type: "category",
          label: "RPC API Reference",
          link: {
            type: "generated-index",
          },
          collapsed: true,
          items: [
            "edge/api/json-rpc-eth",
            "edge/api/json-rpc-net",
            "edge/api/json-rpc-web3",
            "edge/api/json-rpc-txpool",
            "edge/api/json-rpc-debug",
            "edge/api/json-rpc-bridge",
          ],
        },
        "edge/operate/performance",
      ],
    },
    "edge/faq",
  ],
  /*
   *
   * ************************** CDK Section *************************
   *
   * This section includes the official product documentation and
   * developer guides for Polygon CDK.
   *
   * **********************************************************************
   *
   */

  cdk: [
    {
      type: "html",
      value: "Polygon Chain Development Kit",
      className: "sidebar-title",
    },
    "cdk/index",
    "cdk/what-is-polygon-cdk",
    "cdk/validium/quickstart",
    "cdk/validium/validium-attributes",
    "cdk/validium/dac-overview",
    "cdk/validium/differences-validium-zkevm",
    "cdk/validium/allowlists",
    "cdk/cdk-program",
  ],

  /*
   *
   * ***************************** Specs Section **************************
   *
   * This section includes specifications, reference material, academia,
   * and research-grade material related to the Polygon stack.
   *
   * **********************************************************************
   *
   */

  specs: [
    //"specs/index",
    {
      type: "html",
      value: "Pre-Specifications",
      className: "sidebar-title",
    },
    {
      type: "category",
      label: "zkEVM",
      link: {
        type: "generated-index",
      },
      collapsed: true,
      items: [
        "zkevm/architecture",
        {
          type: "category",
          label: "zkEVM Protocol",
          link: {
            type: "generated-index",
          },
          collapsed: true,
          items: [
            "zkevm/protocol/protocol-components",
            "zkevm/protocol/state-management",
            {
              type: "category",
              label: "Transaction Life Cycle",
              link: {
                type: "generated-index",
              },
              items: [
                "zkevm/protocol/l2-transaction-cycle-intro",
                "zkevm/protocol/transaction-execution",
                "zkevm/protocol/transaction-batching",
                "zkevm/protocol/transaction-sequencing",
                "zkevm/protocol/transaction-aggregation",
              ],
            },
            "zkevm/protocol/incentive-mechanism",
            "zkevm/protocol/upgradability",
            "zkevm/protocol/admin-role",
            "zkevm/protocol/zkevm-upgrades-process",
            "zkevm/protocol/security-council",
            {
              type: "category",
              label: "Malfunction Resistance",
              link: {
                type: "generated-index",
              },
              items: [
                "zkevm/protocol/sequencer-resistance",
                "zkevm/protocol/aggregator-resistance",
                "zkevm/protocol/emergency-state",
              ],
            },
            {
              type: "category",
              label: "zkEVM Bridge",
              link: {
                type: "generated-index",
              },
              items: [
                "zkevm/protocol/zkevm-bridge",
                "zkevm/protocol/exit-tree",
                "zkevm/protocol/bridge-smart-contract",
                "zkevm/protocol/flow-of-asset",
              ],
            },
            "zkevm/protocol/lxly-bridge",
            "zkevm/protocol/evm-diff",
          ],
        },
        "zkevm/zknode/zknode-overview",
        {
          type: "category",
          label: "zkProver",
          link: {
            type: "generated-index",
          },
          collapsed: true,
          items: [
            "zkevm/zkProver/overview",
            {
              type: "category",
              label: "Basic Concepts",
              link: {
                type: "generated-index",
              },
              items: [
                "zkevm/zkProver/zkprover-design",
                {
                  type: "category",
                  label: "mFibonacci SM",
                  link: {
                    type: "generated-index",
                  },
                  items: [
                    "zkevm/zkProver/mfibonacci-overview",
                    "zkevm/zkProver/mfibonacci-example",
                    "zkevm/zkProver/commitment-scheme",
                    "zkevm/zkProver/verification-scheme",
                    "zkevm/zkProver/pil-stark",
                    "zkevm/zkProver/pil-stark-demo",
                  ],
                },
                {
                  type: "category",
                  label: "Generic SM",
                  link: {
                    type: "generated-index",
                  },
                  items: [
                    "zkevm/zkProver/intro-generic-sm",
                    "zkevm/zkProver/exec-trace-correct",
                    "zkevm/zkProver/ending-program",
                    "zkevm/zkProver/program-counter",
                    "zkevm/zkProver/plookup",
                  ],
                },
              ],
            },
            {
              type: "category",
              label: "Main State Machine",
              link: {
                type: "generated-index",
              },
              items: [
                "zkevm/zkProver/evm-basics",
                "zkevm/zkProver/intro-main-sm",
                "zkevm/zkProver/the-processor",
              ],
            },
            {
              type: "category",
              label: "STARK Recursion",
              link: {
                type: "generated-index",
              },
              items: [
                "zkevm/zkProver/intro-stark-recursion",
                "zkevm/zkProver/proving-tools",
                "zkevm/zkProver/circom-intro-brief",
                "zkevm/zkProver/stark-recursion-detail",
                "zkevm/zkProver/recursion-sub-process",
                "zkevm/zkProver/proving-architecture",
                "zkevm/zkProver/circom-in-zkprover",
                "zkevm/zkProver/proving-setup-phase",
                "zkevm/zkProver/intermediate-recursion-steps",
                "zkevm/zkProver/final-recursion-step",
                "zkevm/zkProver/proof-generation-phase",
              ],
            },
            {
              type: "category",
              label: "Storage SM",
              link: {
                type: "generated-index",
              },
              items: [
                "zkevm/zkProver/intro-storage-sm",
                "zkevm/zkProver/sparse-merkle-tree",
                "zkevm/zkProver/simple-smt",
                "zkevm/zkProver/detailed-smt-concepts",
                "zkevm/zkProver/basic-smt-ops",
                "zkevm/zkProver/construct-key-path",
                "zkevm/zkProver/storage-sm-mechanism",
                "zkevm/zkProver/executor-pil",
              ],
            },
            "zkevm/zkProver/arithmetic-sm",
            "zkevm/zkProver/binary-sm",
            "zkevm/zkProver/memory-sm",
            "zkevm/zkProver/mem-align-sm",
            {
              type: "category",
              label: "Hashing SM",
              link: {
                type: "generated-index",
              },
              items: [
                "zkevm/zkProver/intro-hashing-sm",
                "zkevm/zkProver/keccak-framework",
                "zkevm/zkProver/paddingkk-sm",
                "zkevm/zkProver/paddingkk-bit-sm",
                "zkevm/zkProver/bits2field-sm",
                "zkevm/zkProver/keccakf-sm",
                "zkevm/zkProver/poseidon-sm",
              ],
            },
          ],
        },
        {
          type: "category",
          label: "zk Assembly",
          link: {
            type: "generated-index",
          },
          collapsed: true,
          items: [
            "zkevm/zkASM/introduction",
            "zkevm/zkASM/basic-syntax",
            "zkevm/zkASM/some-examples",
          ],
        },
        {
          type: "category",
          label: "Polynomial Identity Language",
          link: {
            type: "generated-index",
          },
          collapsed: true,
          items: [
            "zkevm/PIL/introduction",
            "zkevm/PIL/simple-program",
            "zkevm/PIL/pil-compile",
            "zkevm/PIL/pil-config",
            "zkevm/PIL/cyclic-nature",
            "zkevm/PIL/pil-arguments",
            "zkevm/PIL/connect-programs",
            "zkevm/PIL/public-values",
            "zkevm/PIL/permutation-arg",
            "zkevm/PIL/connect-arg",
            "zkevm/PIL/pil-plonk",
            "zkevm/PIL/filling-polynomial",
            "zkevm/PIL/generate-proof",
          ],
        },
      ],
    },
  ],
};
