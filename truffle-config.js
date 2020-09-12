
var HDWalletProvider = require("truffle-hdwallet-provider");
require('dotenv').config()  // Store environment-specific variable from '.env' to process.env


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
   ropsten: {
      provider: () => new HDWalletProvider("eagle enemy couch behind secret pistol slender impose logic dose rent luxury", "https://ropsten.infura.io/v3/f148ade8054b4f85a6934744240f48dc"),
      network_id: 3,
      gas: 3000000,
      gasPrice: 10000000000
    }
},


 compilers: {
     solc: {
       version: "0.6.12"
     }
  }
};