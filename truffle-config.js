
require('dotenv').config();
const HDWalletProvider = require('truffle-hdwallet-provider');
// MNEMONIC_PHRASE and INFURA_KEY are mentioned in .env file
const mnemonic = process.env.MNEMONIC_PHRASE;
const infuraKey = process.env.INFURA_KEY;

module.exports = {
  // Uncommenting the defaults below 
  // provides for an easier quick-start with Ganache.
  // You can also follow this format for other networks;
  // see <http://truffleframework.com/docs/advanced/configuration>
  // for more details on how to specify configuration options!
  //
 networks: {
  development: {
    host: "127.0.0.1",
    port: 7545,
    network_id: "*"
  },
  test: {
    host: "127.0.0.1",
    port: 7545,
    network_id: "*"
  },
   "ropsten-infura": {
        provider: () => new HDWalletProvider(mnemonic, 'https://ropsten.infura.io/v3/' + infuraKey, 0),
        network_id: 3,
        gas: 5500000,
        gasPrice: 100000000000,
        timeoutBlocks: 200,
    }
}


 compilers: {
     solc: {
       version: "0.6.12"
     }
  }
};