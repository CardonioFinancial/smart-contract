// var Migrations = artifacts.require("./Migrations.sol");
const CDOToken = artifacts.require("CDOToken.sol");

module.exports = async (deployer) => {
  await deployer.deploy(CDOToken, '0x16ca0a59730c7473f064a6956c4cf98c0d563f49', '0xb9b112f7e6dbdf3a96a7bb73adf7c4f80a14ec6a');
  console.log('CDOToken address: ', CDOToken.address);
};