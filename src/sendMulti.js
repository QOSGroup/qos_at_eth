const Web3 = require('web3');
const Tx = require('ethereumjs-tx');
const abis = require('./abis');

// connect to Infura node
const web3 = new Web3(new Web3.providers.HttpProvider('https://kovan.infura.io/v3/8cd86572c24a4c0181a1034fdccd3aaa'));
const tos = new Array("0x902ce1df6080fdb38545e282fba6fa1dd31dbbee",
"0xb6a9c69cfccfbe820a91b6755354353a3f43104e",
"0xa4411efc75b44c1fc3207ba590ff9b467354c9aa",
"0xecad0a2fec8829922146da8f84498016b85b0ebe",
"0x4a293afcab90e754bf118136cc26769ad37899c7",
"0x857934955e8821d70a4516607c179d179170756c",
"0x51596f2535883f63b4d79fa7bcfe7f7c1e3b6cd7",
"0x0c9dc55671622455a30f1ab8a7113eea59c7bb63",
"0x22f02d0038d343c536d43c6288f71dc32300c20d",
"0x72ce4976f0112e6ea8fda9352fe0293758d7ff2e",
"0xa6f3076fad3252f729f0378523fa38d2f6a7a3b7",
"0xeef9c8df9a8ef3b30bbdc7265456872623bfe00f",
"0x0bed96c0c6cba99d593b9f6a8ec9f8b8b671631d",
"0xcfce350af8a3b587cba9973f2d78110bfaf3fd13",
"0x6de143d2cc820c3657802f1a0d18af1a3c86cf93",
"0x4c5df27ca2d9754da60233d15cb54f35c0538419",
"0xb939280b9d12ea2ce6bdf04cdded1bfff030feb7",
"0xe0b8dface2d6ca54a4dd44a8571fcd05b8879628",
"0xdcf655823762df566b452dfbca8c8ddd1c1c3c98",
"0x6c24ed3d5ce96464263d94165b4134424f67a885",
"0xb70508c5c028cfc8467da85c573c041a805476a2",
"0x1c1092c3f2c37e178bed4a15e13fa0bd97ae3db3",
"0xd0af262cb850de8d8b2b5227af57fe5dc25256e1",
"0x606d2173c47604b6459cd7973f2d7129cb0c9297",
"0x9983610f0b8d64c5376b34cdccefa54222b2d9df",
"0x285059eec6d6c0392052f0147e0afd81c3a16d29",
"0xddf253260a3eb884a4c15f1a811a41774b16d69c",
"0x55698455fe9476d6437447e74673f25749d1b8bb",
"0xe10ad66fefa57a4bc084706249928ce276399529",
"0xd8b088717c220d778c55877b0831459d3b3dc2c5",
"0xed9f6cb031e22280976e8e54a6097f7391ce0a57",
"0x391fa17036c91923c81e56defff4bd9d4bb82b57",
"0xbcdb9662fba7efe11e7df57dc65827d72d1c837d",
"0xad55553fc802cdf16fea6a555d2c2bccd4d0d1d1",
"0x5b511b7069c0e024cdeffb35da10af9cabac4bf7",
"0x12c2c2df0a12ab14bab850cfce15f07463dfafbe",
"0x175a382ba96a5fc0b7c09ce22e1bf1b52a8867c6",
"0x5ade60563361a1401b946815f073e54cacf86c42",
"0x55c389c4837d248de74898d38cf17b288e49bc23",
"0x33cf965034a508b10f64998f63530c2f909f9aef",
"0xed09ad4ca2b989255607d61b35f49e731e8b9c6f",
"0x5cda105f8d12811aae906d30d092be3feb62792e",
"0x36f9cfc2ff04977821a06e1982a1efa6a772d47a",
"0x553db72c537b761f698101ac1518e544b11fc037",
"0x26bd6cda7f20521116fac0efd169107e825fb995",
"0x682d0b7be4a3197bd2b0214b0308eeea62db6e5d",
"0x9d708f0cbd748a723cf2f04865d4583690d47bd4",
"0x97d4dc4be08fb088c4ad8376dc1bfb0741d0ab05",
"0x88abd87dd3b3cea3e2429300b04d71c75b8a7c35",
"0xc094e23a17893d187bfc3762264ed67efc949f9f",
"0xb6c119dbcfaa30d3ffc38c69b7d51753360fe204",
"0xf2e7a4b135721b705780668fa14232cd05a7a58e",
"0xb87797a4d460fc5ff645879c2380f2d71df7859d",
"0xa4e826dce783c1a766f2f7d896c89ff7a117258b",
"0xdb45d0789c1e48790b39da6980554cae904b5174",
"0x4799ab98fc4e4949b63c89652001ea487073a73f",
"0x633623994280dffb76bf0c20e7e8f3f3fa5d3c87",
"0x5b8806da30c15aa7fd738c45bade2c203c9bcf89",
"0xa1f9c510de91c0fdee00e6f632b2a2e6b3ee6511",
"0x428414e62f747c0761c659ecf7cf6a88a86877c3",
"0x21aee9738300138dfbbd293351b05d747c07dc98",
"0x6200df11f2c7bef869d2ccf92026de89914043b3",
"0xcff8d2fa56fe90b320ebb72ae300e010e70c5646",
"0xf77bfac8bd4f8a7f0b5e49c2517dda9955589eb7",
"0x921037ec462b9525eb51899c735d6e6c07369757",
"0xf7f9debf8140f271798d87426d0e2b4236ca2fd3",
"0x29e1045dcfa140106650a5108eccd844b0e7ccfa",
"0xe3abcb0eb6bd933cda70c4a18a1cf73287ca27cb",
"0x584ad0c0254fe5d4971e8eebddcbb17c65345ca7",
"0x9cddbe885cd444c63843bfbf79f7bf26d64145a0",
"0xb3344bd3838e68ec66f07b058f8ea5efe076f4c8",
"0x30fe94e70b097ed2267beb83463e2206768a9abd",
"0xef89d65e4cd588f306c6536d88aaa3294d25b173",
"0x30348913a2eff191561185a0e4b9eba04e3393a3",
"0x8b9e54a6b5c323cb0a38d614252190bcf8d56ef4",
"0x3b6693408b92e629a8c019e51175c25db7029108",
"0xa2eb4aed4dfb2b3f9d51e16beb09b21774a607ea",
"0xd7ca38f9a9567ee1c3e874457c1602a1a1977b07",
"0x4f09535a0d915bc138daa4f79ada2e40f15a58be",
"0x644caf1e5c149238f5987cf75f42b2e65d0178c1",
"0xcd3ee01af301484a659c6853b446a58ce5b32f3e",
"0xa228ee4827e29d043471252dffc8f3f39c3f4227",
"0xd1e980afe76746bbe1a9a15d00884803b310e904",
"0xb0ab1e9d4d6a00d6e3ab61ff7b3e497857c277f9",
"0xb8dbebebb8728fb082fd1be88d57d53be0454eca",
"0xfbd5c7b1780989f8978b71a5ad56c177128c15d5",
"0xd8e6e8511c38ce6e11eefac4fed6bd423ca217f0",
"0xbf2768c76aba0c0dc8c7ebf0d7c792a7df7865f7",
"0x194626ad098f4194a73d3ef18f19bce53c754575",
"0xbd01b10c897e826f5eb121205b5b401ef109dc46",
"0xf9308e97a862bbae62bd1c65dcdcd8657d339a1e",
"0xd0359f22ed0e6ccb0930a39f24744c3180670081",
"0x9f44c5aa54a80ff7e528ba9c96893b475ba49ac2",
"0x585f659d80fc7743ca285ceadefb1a935d6397e5",
"0xa5ceeb82f7f2f1c7903d8961a5266a5b71f0d608",
"0x9c4fd987f3e285f88b74bf60c78e3e029b84b1f9",
"0xfd67aec325a198495b5d5cc66738a816f4c9e1c7",
"0xea8d0a4d76e92e582e5c386042a46fbaf3482b42",
"0xac86d7a218a0a23de24e2df6019e5a0337012408",
"0x98b645887480a56f8a5052c333ad623069bb284a");

const amounts = new Array(870000, 110000, 60000, 840000, 20000, 360000, 90000, 220000, 50000, 160000, 820000, 200000, 510000, 690000, 110000, 790000, 660000, 850000, 620000, 620000, 990000, 670000, 530000, 330000, 670000, 330000, 710000, 500000, 580000, 830000, 450000, 330000, 710000, 380000, 960000, 230000, 710000, 410000, 920000, 100000, 900000, 550000, 300000, 480000, 410000, 520000, 450000, 880000, 40000, 470000, 230000, 330000, 90000, 770000, 100000, 300000, 340000, 650000, 30000, 210000, 800000, 930000, 240000, 440000, 350000, 530000, 360000, 960000, 570000, 970000, 890000, 430000, 540000, 620000, 460000, 180000, 850000, 330000, 820000, 730000, 320000, 460000, 690000, 410000, 20000, 150000, 70000, 120000, 80000, 430000, 280000, 860000, 400000, 520000, 240000, 620000, 780000, 710000, 380000, 380000);

var nonceF = 0;
// const decimals = 4;

if(tos.length != amounts.length){
    console.log("tos and amounts do not have the same length: " + tos.length + ":" + amounts.length);
    return
}

const qosTokenAddress = '0x11a3c8B9A9b98966313231869b0eE5550944808C';
const senderAddress = '0x4454ebcB2F9183314a80D6560e03fE3E880d3f0f';

async function sendSigned(txData, privKey, cb) {
    const transaction = new Tx(txData);
    await transaction.sign(Buffer.from(privKey, 'hex'));
    const serializedTx = transaction.serialize().toString('hex');
    console.log('........................................................');
    // web3.eth.sendSignedTransaction('0x' + serializedTx, cb);
    return new Promise((resolve, reject) => {
        console.log('serializedTx ', serializedTx)
        web3.eth.sendSignedTransaction('0x' + serializedTx).on("receipt",(receipt) => {
            console.log('receipt ', receipt)
            resolve(receipt);
        }).on('confirmation ',(confNumber, receipt) => {
            console.log(confNumber);
            resolve(receipt);
        }).on('error ', (err) => {
            console.log(err);
            throw err;
        });
    })
}

async function sendTX(fromAddress, privKey, toAddress, action, actionName) {
    const txCount = await web3.eth.getTransactionCount(fromAddress, 'pending') + nonceF; 
    const txData = {
      nonce: web3.utils.toHex(txCount),
      gasLimit: web3.utils.toHex(8000000),
      gasPrice: web3.utils.toHex(20e9),
      to: toAddress,
      from: fromAddress,
      data: action.encodeABI()
    };
    nonceF ++;
    await sendSigned(txData, privKey);
}

async function sendMulti() {
    const sender = new web3.eth.Contract(abis.multiSender(), senderAddress);
    const erc20 = new web3.eth.Contract(abis.erc20(), qosTokenAddress);
    var totalValue = 0;
    for (a of amounts) {
        totalValue += a;
    }
    try {
        console.log('Total value to transfer: ' + totalValue);
        const balance = await erc20.methods.balanceOf(senderAddress).call({from:`${process.env.TEAMADDRESS}`});
        if (balance < totalValue) {
            console.log("Insufficient balance");
            return;
        } 
        const sendAction = sender.methods.transferMulti(tos, amounts);
        await sendTX(`${process.env.TEAMADDRESS}`, `${process.env.TEAMKEY}`, senderAddress, sendAction, 'transferMulti');
    } catch (e) {
        console.log(e);
    }
    
}

sendMulti().then();