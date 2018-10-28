//var StarNotary = artifacts.require("./StarNotary.sol");

//module.exports = function(deployer) {
//  deployer.deploy(StarNotary);
//};


var Migrations = artifacts.require("./Migrations.sol");

module.exports = function(deployer) {
  deployer.deploy(Migrations);
};