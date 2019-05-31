var senderContract = artifacts.require("./MultiSender");

module.exports = function(deployer, network) {
  // deployment steps
  if (network == 'development') {
    defaultAccount = '0x6bb020103ce81a942ae76082f50760ccf98e9743';
    deployer.deploy(senderContract, '0x11a3c8B9A9b98966313231869b0eE5550944808C').then(() => {
      console.log('Deployed at: ', senderContract.address);
    });
  }
  if (network.toLowerCase().indexOf('kovan') >= 0 || network.toLowerCase().indexOf('ropsten') >= 0) {
    deployer.deploy(senderContract, '0x11a3c8B9A9b98966313231869b0eE5550944808C', {from: '0x489c4b0A490a641e5C730814Fa277C48e8eF1DF8'}).then(() => {
      console.log('Deployed at: ', senderContract.address);
    });
  }
  
};