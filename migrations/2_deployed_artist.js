const Migrations = artifacts.require("Artist");

module.exports = function(deployer) {
  deployer.deploy(Migrations);
};
