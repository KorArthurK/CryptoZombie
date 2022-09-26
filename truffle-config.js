
const HDWalletProvider = require("truffle-hdwallet-provider");
//const LoomTruffleProvider = require('loom-truffle-provider');
const mnemonic = "wrestle miss coach wine truly purse coil vague mutual adjust escape lion";

const ACCOUNT_PRIVATE_KEY = "fc549d1eea09168730fb2cae8626ea2063b4dcf9b9293840cb9ef3257b925492";
const ALCHEMY_KEY = "9knJbIYiaWurTUWoAxH8P_CLcY_nYaCA";
const NETWORK="rinkeby";
const NFT_CONTRACT_ADDRESS="0x61E815D04578B3E251d5Dca28b7CA99378dF66FE";
// require('dotenv').config();
// const { MNEMONIC, PROJECT_ID } = process.env;

// const HDWalletProvider = require('@truffle/hdwallet-provider');

module.exports = {
  /**
   * Networks define how you connect to your ethereum client and let you set the
   * defaults web3 uses to send transactions. If you don't specify one truffle
   * will spin up a managed Ganache instance for you on port 9545 when you
   * run `develop` or `test`. You can ask a truffle command to use a specific
   * network from the command line, e.g
   *
   * $ truffle test --network <network-name>
   */

  
 
   networks: {
   
    mainnet: {
      provider: function () {
       
        //return new HDWalletProvider(mnemonic, `https://eth-mainnet.alchemyapi.io/v2/${ALCHEMY_KEY}`)
        return new HDWalletProvider(mnemonic, `https://mainnet.infura.io/v3/27c64a5a32534c03970551924f7ed2a6`)
      },
      network_id: "1"
    },
   
    rinkeby: {
     
      provider: function () {
       
        //return new HDWalletProvider(mnemonic, `https://eth-rinkeby.alchemyapi.io/v2/${ALCHEMY_KEY}`)
        return new HDWalletProvider(mnemonic, `https://rinkeby.infura.io/v3/27c64a5a32534c03970551924f7ed2a6`)
      },
     
      network_id: 4
    }

    // loom_testnet: {
    //   provider: function() {
    //       const privateKey = ACCOUNT_PRIVATE_KEY;
    //       const chainId = 'extdev-plasma-us1';
    //       const writeUrl = 'http://extdev-plasma-us1.dappchains.com:80/rpc';
    //       const readUrl = 'http://extdev-plasma-us1.dappchains.com:80/query';
    //       return new LoomTruffleProvider(chainId, writeUrl, readUrl, privateKey);
    //   },
    //   network_id: '9545242630824'
    // }
  },

  // Set default mocha options here, use special reporters, etc.
  mocha: {
    // timeout: 100000
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "0.8.0",      // Fetch exact version from solc-bin (default: truffle's version)
      // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
      // settings: {          // See the solidity docs for advice about optimization and evmVersion
      //  optimizer: {
      //    enabled: false,
      //    runs: 200
      //  },
      evmVersion: "byzantium"
      // settings: {          
      //   evmVersion: "london"
      // }
      // }
    }
  },

  // Truffle DB is currently disabled by default; to enable it, change enabled:
  // false to enabled: true. The default storage location can also be
  // overridden by specifying the adapter settings, as shown in the commented code below.
  //
  // NOTE: It is not possible to migrate your contracts to truffle DB and you should
  // make a backup of your artifacts to a safe location before enabling this feature.
  //
  // After you backed up your artifacts you can utilize db by running migrate as follows:
  // $ truffle migrate --reset --compile-all
  //
  // db: {
  //   enabled: false,
  //   host: "127.0.0.1",
  //   adapter: {
  //     name: "sqlite",
  //     settings: {
  //       directory: ".db"
  //     }
  //   }
  // }
};
