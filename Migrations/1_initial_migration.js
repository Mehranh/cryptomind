const Migrations = artifacts.require("Migrations");

const CryptomindToken  = artifacts.require("CryptomindToken");
module.exports = function (deployer) {
  deployer.deploy(Migrations);
  deployer.deploy(CryptomindToken);
};
