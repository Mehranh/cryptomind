
const CryptomindToken  = artifacts.require("CryptomindToken");
module.exports = function (deployer) {
  
  deployer.deploy(CryptomindToken);
};
