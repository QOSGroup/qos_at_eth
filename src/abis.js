let senderABI = JSON.parse(require('fs').readFileSync(`../build/contracts/MultiSender.json`).toString()).abi;
let erc20ABI = JSON.parse(require('fs').readFileSync(`../build/contracts/IERC20.json`).toString()).abi;

module.exports = {
    multiSender: function () {
        return senderABI;
    },
    
    erc20: function () {
        return erc20ABI;
    },
}