import "@nomiclabs/hardhat-waffle";
import "@nomiclabs/hardhat-etherscan";
import "@typechain/hardhat";
import "hardhat-gas-reporter";
import "hardhat-contract-sizer";
import "solidity-coverage";

import "./tasks/accounts";

import { resolve } from "path";

import { config as dotenvConfig } from "dotenv";
import { HardhatUserConfig } from "hardhat/config";
import { NetworkUserConfig } from "hardhat/types";

dotenvConfig({ path: resolve(__dirname, "./.env") });

const chainIds = {
  ganache: 1337,
  goerli: 5,
  hardhat: 31337,
  kovan: 42,
  mainnet: 1,
  rinkeby: 4,
  ropsten: 3,
  mumbai: 80001,
  polygon: 137,
  optgoerli: 420,
  arbgoerli: 421613,
  optimism: 10,
  zkEVM: 1442,
  polygonzkEVM: 1101,
};

// // Ensure that we have all the environment variables we need.
// const mnemonic = process.env.MNEMONIC;
// if (!mnemonic) {
//   throw new Error("Please set your MNEMONIC in a .env file");
// }

// const infuraApiKey = process.env.INFURA_API_KEY;
// if (!infuraApiKey) {
//   throw new Error("Please set your INFURA_API_KEY in a .env file");
// }

// let alchemyapiKey = process.env.FORK;

// const etherscanApiKey = process.env.ETHERSCAN_API_KEY;

function createTestnetConfig(
  network: keyof typeof chainIds,
): NetworkUserConfig {
  const url: string =
    network == "polygonzkEVM"
      ? "https://zkevm-rpc.com"
      : "https://rpc.public.zkevm-test.net";
  return {
    accounts: [
      "430db2f72c04e31fcf2e34888fc50e10663a1f2d39c2e7cd01d5dd86e19f97bc",
    ],
    chainId: chainIds[network],
    url,
    // gas: 2100000,
    gasPrice: 300000000000,
  };
}
const coinMarketCapKey = process.env.COIN_MARKETCAP;

const config: HardhatUserConfig = {
  defaultNetwork: "hardhat",
  gasReporter: {
    currency: "USD",
    coinmarketcap: coinMarketCapKey,
    gasPrice: 48,
    enabled: process.env.REPORT_GAS ? true : false,
    excludeContracts: [],
    src: "./contracts",
  },
  networks: {
    hardhat: {
      allowUnlimitedContractSize: true,
      accounts: {
        //mnemonic,
      },
      chainId: chainIds.hardhat,
    },

    goerli: createTestnetConfig("goerli"),
    kovan: createTestnetConfig("kovan"),
    rinkeby: createTestnetConfig("rinkeby"),
    ropsten: createTestnetConfig("ropsten"),
    mainnet: createTestnetConfig("mainnet"),
    mumbai: createTestnetConfig("mumbai"),
    polygon: createTestnetConfig("polygon"),
    optgoerli: createTestnetConfig("optgoerli"),
    arbgoerli: createTestnetConfig("arbgoerli"),
    optimism: createTestnetConfig("optimism"),
    zkEVM: createTestnetConfig("zkEVM"),
    polygonzkEVM: createTestnetConfig("polygonzkEVM"),
  },
  mocha: {
    timeout: 50000,
  },
  paths: {
    artifacts: "./artifacts",
    cache: "./cache",
    sources: "./contracts",
    tests: "./test",
  },
  solidity: {
    compilers: [
      {
        version: "0.7.6",
        settings: {
          metadata: {
            // Not including the metadata hash
            // https://github.com/paulrberg/solidity-template/issues/31
            bytecodeHash: "none",
          },
          // You should disable the optimizer when debugging
          // https://hardhat.org/hardhat-network/#solidity-optimizer-support
          optimizer: {
            enabled: true,
            runs: 10,
          },
        },
      },
    ],
  },
  typechain: {
    outDir: "typechain",
    target: "ethers-v5",
  },
  etherscan: {
    apiKey: {
      zkEVM: "2RQMY1GRQD38KP8DQX8KEP9DDEFKVK38HJ",
    },
    customChains: [
      {
        network: "zkEVM",
        chainId: 1442,
        urls: {
          apiURL: "https://explorer.public.zkevm-test.net/api",
          browserURL: "https://testnet-zkevm.polygonscan.com/",
        },
      },
    ],
  },
  contractSizer: {
    alphaSort: true,
    runOnCompile: true,
    disambiguatePaths: false,
  },
};

export default config;
