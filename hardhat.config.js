require("dotenv").config();
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-web3"); //For openzeppelin
require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
require("hardhat-gas-reporter");
require("hardhat-abi-exporter");
require("solidity-coverage");
require("@typechain/hardhat");
require("@openzeppelin/hardhat-upgrades");

module.exports = {
  defaultNetwork: "hardhat",
  gasReporter: {
    showTimeSpent: true,
    currency: "USD",
  },
  networks: {
    hardhat: {
    },
    kovan: {
      url: "https://eth-kovan.alchemyapi.io/v2/" + process.env.ALCHEMY_API_KEY,
      accounts: process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : [],
      gasPrice: 10000000000,
    },
    rinkeby: {
      url: "https://rinkeby.infura.io/v3/144e7d1b899c49d9af171eaa0358f8e6",
      chainId: 4,
      accounts: process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : [],
      gasPrice: 10000000000,
    },
    bsctestnet: {
      url: "https://data-seed-prebsc-1-s1.binance.org:8545",
      chainId: 97,
      gasPrice: 20000000000,
      accounts: process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : [],
    },
  },
  solidity: {
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
        details: {
          yul: false
        }
      },
    },
    compilers: [
      {
        version: "0.8.2",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200
          }
        }
      },
      {
        version: "0.8.0",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200
          }
        }
      },
      {
        version: "0.7.5",
      },
      {
        version: "0.6.12",
      },
      {
        version: "0.6.6",
      },
      {
        version: "0.5.16",
      },
      {
        version: "0.4.26",
      },
      {
        version: "0.4.22",
      },
    ],
  },
  paths: {
    sources: "./contracts",
    tests: "./tests",
    cache: "./cache",
    artifacts: "./artifacts",
  },
  mocha: {
    timeout: 200000,
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
  abiExporter: {
    path: "./abi",
    clear: true,
    flat: true,
    spacing: 2,
  },
  typechain: {
    outDir: "types",
    target: "ethers-v5",
  },
};