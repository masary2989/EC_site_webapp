// import 'web3';

// Web3 = require('web3');

// KOVAN_DAI_ADDRESS = process.env.REACT_APP_KOVAN_DAI_ADDRESS;
export const KOVAN_DAI_ADDRESS = '0xC4375B7De8af5a38a93548eb8453a498222C4fF2';
export const KOVAN_MULTISIGPAYMENT_ADDRESS = '0x82b3d9da60f1c6acae4cfd04163856990639f876';
// KOVAN_OWNER_WALLET_ADDRESS = process.env.REACT_APP_KOVAN_OWNER_WALLET_ADDRESS;
export const KOVAN_OWNER_WALLET_ADDRESS = '0x61b12F6D46412aAe6F857FDF059E3e48D4ecF218';
// console.log('process.env', process.env.REACT_APP_INFURA_API_KEY);
const minABI = [
  {
    "constant": true,
    "inputs": [],
    "name": "name",
    "outputs": [
      {
        "name": "",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "spender",
        "type": "address"
      },
      {
        "name": "value",
        "type": "uint256"
      }
    ],
    "name": "approve",
    "outputs": [
      {
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "totalSupply",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "from",
        "type": "address"
      },
      {
        "name": "to",
        "type": "address"
      },
      {
        "name": "value",
        "type": "uint256"
      }
    ],
    "name": "transferFrom",
    "outputs": [
      {
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "INITIAL_SUPPLY",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "decimals",
    "outputs": [
      {
        "name": "",
        "type": "uint8"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "spender",
        "type": "address"
      },
      {
        "name": "addedValue",
        "type": "uint256"
      }
    ],
    "name": "increaseAllowance",
    "outputs": [
      {
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "owner",
        "type": "address"
      }
    ],
    "name": "balanceOf",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "symbol",
    "outputs": [
      {
        "name": "",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "spender",
        "type": "address"
      },
      {
        "name": "subtractedValue",
        "type": "uint256"
      }
    ],
    "name": "decreaseAllowance",
    "outputs": [
      {
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "to",
        "type": "address"
      },
      {
        "name": "value",
        "type": "uint256"
      }
    ],
    "name": "transfer",
    "outputs": [
      {
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "owner",
        "type": "address"
      },
      {
        "name": "spender",
        "type": "address"
      }
    ],
    "name": "allowance",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "from",
        "type": "address"
      },
      {
        "indexed": true,
        "name": "to",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "value",
        "type": "uint256"
      }
    ],
    "name": "Transfer",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "owner",
        "type": "address"
      },
      {
        "indexed": true,
        "name": "spender",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "value",
        "type": "uint256"
      }
    ],
    "name": "Approval",
    "type": "event"
  }
];

const multisigPaymentABI = [
  {
    "constant": false,
    "inputs": [
      {
        "name": "_contractAddress",
        "type": "address"
      }
    ],
    "name": "setDaiContractAddress",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "",
        "type": "address"
      },
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "userToTransactions",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "",
        "type": "uint256"
      },
      {
        "name": "",
        "type": "address"
      }
    ],
    "name": "confirmations",
    "outputs": [
      {
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_amount",
        "type": "uint256"
      }
    ],
    "name": "depositDai",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "userDeposit",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      },
      {
        "name": "",
        "type": "address"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "_transactionId",
        "type": "uint256"
      }
    ],
    "name": "userTransaction",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      },
      {
        "name": "",
        "type": "bool"
      },
      {
        "name": "",
        "type": "bool"
      },
      {
        "name": "",
        "type": "address"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_amount",
        "type": "uint256"
      },
      {
        "name": "_userAddress",
        "type": "address"
      }
    ],
    "name": "confirmSelling",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "profitWithdrawal",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [],
    "name": "renounceOwnership",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "exit",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "owner",
    "outputs": [
      {
        "name": "",
        "type": "address"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "isOwner",
    "outputs": [
      {
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "transactions",
    "outputs": [
      {
        "name": "amount",
        "type": "uint256"
      },
      {
        "name": "confirmed",
        "type": "bool"
      },
      {
        "name": "executed",
        "type": "bool"
      },
      {
        "name": "userAddress",
        "type": "address"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "userTransactions",
    "outputs": [
      {
        "name": "",
        "type": "uint256[]"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "ownerBalance",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_transactionId",
        "type": "uint256"
      }
    ],
    "name": "confirmPaying",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "MAX_OWNER_COUNT",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "transferOwnership",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "",
        "type": "address"
      }
    ],
    "name": "deposits",
    "outputs": [
      {
        "name": "depositAmount",
        "type": "uint256"
      },
      {
        "name": "userAddress",
        "type": "address"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "name": "_daiInterfaceAddress",
        "type": "address"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "payable": true,
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "name": "daiAddress",
        "type": "address"
      }
    ],
    "name": "ChangeDaiAddress",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "sender",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "value",
        "type": "uint256"
      }
    ],
    "name": "DepositEvent",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "sender",
        "type": "address"
      },
      {
        "indexed": true,
        "name": "transactionId",
        "type": "uint256"
      }
    ],
    "name": "OwnerConfirmation",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "sender",
        "type": "address"
      },
      {
        "indexed": true,
        "name": "transactionId",
        "type": "uint256"
      }
    ],
    "name": "UserConfirmation",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "sender",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "value",
        "type": "uint256"
      }
    ],
    "name": "UserExit",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "sender",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "value",
        "type": "uint256"
      }
    ],
    "name": "OwnerWithdrawal",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "previousOwner",
        "type": "address"
      },
      {
        "indexed": true,
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "OwnershipTransferred",
    "type": "event"
  },
];


export const setChain = (chain) => {
  switch (chain) {
    case 'mainnet':
      return { node: 'https://mainnet.infura.io/v3/' + INFURA_API_KEY, 'id': 1 };
    case 'ropsten':
      return { node: 'https://ropsten.infura.io/v3/' + INFURA_API_KEY, 'id': 3 };
    case 'rinkeby':
      return { node: 'https://rinkeby.infura.io/v3/' + INFURA_API_KEY, 'id': 4 };
    case 'kovan':
      return { node: 'https://kovan.infura.io/v3/' + INFURA_API_KEY, 'id': 42 };
    default:
      return { node: 'https://mainnet.infura.io/v3/' + INFURA_API_KEY, 'id': 1 };
  }
};


export const pay = (
  setedWeb3,
  to,
  from,
  price,
  choosedGas,
  navigateProp,
  apiUrl,
  resolve,
  reject,
  pid,
  email,
  pValue) => {
  if (price) {
    const tokenAddress = KOVAN_DAI_ADDRESS;
    const multisigPaymentAddress = KOVAN_MULTISIGPAYMENT_ADDRESS;
    const toAddress = to;
    const fromAddress = from;
    /*
    console.log('tokenAddress', tokenAddress);
    console.log('paymentAddress', multisigPaymentAddress);
    console.log('toAddress', toAddress);
    console.log('fromAddress', fromAddress);
    console.log('price', price);
    console.log('gasPrice', choosedGas);
    */
    const { web3 } = window;

    // Get ERC20 Token contract instance
    const tokenContract = new setedWeb3.eth.Contract(minABI, tokenAddress);
    const multisigPaymentContract = new setedWeb3
      .eth.Contract(multisigPaymentABI, multisigPaymentAddress);

    // calculate ERC20 token amount
    // let value = amount.mul(setedWeb3.utils.toBN(10, 10).pow(decimals));
    // let value = amount.mod(setedWeb3.utils.toBN(1000000000000000000));
    const value = web3.toWei(price, 'ether');
    const conf = {
      method: "post",
      mode: 'cors',
      body: JSON.stringify({
        amount: price,
        u_address: from,
        pValue,
        email,
      }),
      headers: new Headers({ "Content-Type": "application/json" })
    };
    console.log('--------- conf', conf);
    // console.log('value', value);
    // call transfer function
    // get gas price
    setedWeb3.eth.getGasPrice()
      .then((gasPrice) => {
        // console.log('gasPrice', gasPrice);
        // approve token
        tokenContract.methods.approve(multisigPaymentAddress, value).send({
          from: fromAddress,
          gasPrice: gasPrice * choosedGas,
        })
          .then((tokenhash) => {
            // console.log('tokenhash', tokenhash);
            // deposit token
            return multisigPaymentContract.methods.depositDai(value).send({
              from: fromAddress,
              gasPrice: gasPrice * choosedGas,
            })
              .then((paymenthash) => {
                console.log('paymenthash', paymenthash);
                return paymenthash;
              })
              .then(() => fetch(apiUrl + 'api/confirmselling/', conf))
              .then((response) => {
                console.log('end logics');
                if (response.status !== 200) {
                  console.log('responce status bad', response.status);
                  return Promise.reject(false);
                }
                // navigateProp(`/purchaseconfirmation/${pid}/${choosedGas}`);
                // return Promise.resolve(response.json());
                multisigPaymentContract.methods.userTransactions().call({
                  from: fromAddress,
                  gasPrice: gasPrice * choosedGas,
                })
                  .then((transactionCount) => {
                    console.log('responce status ok', transactionCount);
                    return resolve(transactionCount);
                  });
              });
          });
      });
  } else {
    console.log('please input price');
    return reject(false);
  }
};

export const confirmPay = (
  setedWeb3,
  from,
  choosedGas,
  transactionCount,
) => {
  const multisigPaymentAddress = KOVAN_MULTISIGPAYMENT_ADDRESS;
  const fromAddress = from;
  console.log('start confirmPay',transactionCount);
  const multisigPaymentContract = new setedWeb3
    .eth.Contract(multisigPaymentABI, multisigPaymentAddress);
  setedWeb3.eth.getGasPrice()
    .then((gasPrice) => {
      console.log('reach gasP', gasPrice, transactionCount);
      return multisigPaymentContract
        .methods.confirmPaying(transactionCount)
        // .methods.confirmPaying(51)
        .send({
          from: fromAddress,
          gasPrice: gasPrice * choosedGas,
        });
    })
    .then(() => {
      console.log('in logic resolve confirmPay');
      return 'success';
    })
    .catch((e) => {
      console.log('in logic reject confirmPay', e);
      return 'fail';
    });
};


export const viewBalance = (setedWeb3, to) => {
  const tokenAddress = KOVAN_DAI_ADDRESS;
  const toAddress = to;

  // ABI とコントラクト（ERC20トークン）のアドレスから、コントラクトのインスタンスを取得
  const contract = new setedWeb3.eth.Contract(minABI, tokenAddress);
  console.log('contract', contract);

  // 引数にウォレットのアドレスを渡して、balanceOf 関数を呼ぶ
  contract.methods.balanceOf(toAddress).call()
    .then(balance => console.log('balance', balance));
};
