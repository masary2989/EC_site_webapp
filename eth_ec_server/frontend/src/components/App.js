/*
import React from "react";
import ReactDOM from "react-dom";
import DataProvider from "./DataProvider";
import Table from "./Table";
const App = () => (
  <DataProvider endpoint="api/products/" 
                render={data => <Table data={data} />} />
);
const wrapper = document.getElementById("app");
wrapper ? ReactDOM.render(<App />, wrapper) : null;
*/


import React, { Component } from 'react';
import 'web3';
import logo from './images/logo.svg';
import './App.css';

class App extends Component {
  constructor () {
    super();
    this.Web3 = require('web3');
    this.setupWeb3('kovan');

    this.INFURA_API_KEY = process.env.REACT_APP_INFURA_API_KEY;
    this.KOVAN_DAI_ADDRESS = process.env.REACT_APP_KOVAN_DAI_ADDRESS;
    this.KOVAN_OWNER_WALLET_ADDRESS = process.env.REACT_APP_KOVAN_OWNER_WALLET_ADDRESS;
    console.log('process.env', process.env.REACT_APP_INFURA_API_KEY);
    this.minABI = [
      // transfer
      {
        'constant': false,
        'inputs': [
          {
            'name': '_to',
            'type': 'address'
          },
          {
            'name': '_value',
            'type': 'uint256'
          }
        ],
        'name': 'transfer',
        'outputs': [
          {
            'name': '',
            'type': 'bool'
          }
        ],
        'type': 'function'
      }
    ];

    this.state = {
      useraddress: '',
      owneraddress: this.KOVAN_OWNER_WALLET_ADDRESS,
      price: undefined,
    };
  }

  setupWeb3(chain) {
    // set the provider you want from Web3.providers
    this.web3 = new this.Web3(this.Web3.givenProvider || new this.Web3.providers.HttpProvider(this.setChain(chain).node));
    console.log('web3', this.web3);
    console.log('version', this.web3.version);
    this.web3.eth.net.getNetworkType()
      .then((netType) => console.log('nettype', netType));
    this.web3.eth.getAccounts((err, accounts) => {
      if (err) {
        return;
      }
      // metamaskのアカウントで自動ログイン
      this.web3.eth.defaultAccount = accounts[0];
      this.setState({ useraddress: accounts[0] });
      console.log('account', accounts[0]);
    });
  }

  setChain(chain) {
    switch (chain) {
      case 'mainnet':
        return { node: 'https://mainnet.infura.io/v3/' + this.INFURA_API_KEY, 'id': 1 };
      case 'ropsten':
        return { node: 'https://ropsten.infura.io/v3/' + this.INFURA_API_KEY, 'id': 3 };
      case 'rinkeby':
        return { node: 'https://rinkeby.infura.io/v3/' + this.INFURA_API_KEY, 'id': 4 };
      case 'kovan':
        return { node: 'https://kovan.infura.io/v3/' + this.INFURA_API_KEY, 'id': 42 };
      default:
        return { node: 'https://mainnet.infura.io/v3/' + this.INFURA_API_KEY, 'id': 1 };
    }
  };

  pay(token, to, from, price) {
    if (price) {
      const tokenAddress = token;
      const toAddress = to;
      const fromAddress = from;
      console.log('tokenAddress', tokenAddress);
      console.log('toAddress', toAddress);
      console.log('fromAddress', fromAddress);
      console.log('price', price)

      // Use BigNumber
      const decimals = this.web3.utils.toBN(18);
      const amount = this.web3.utils.toBN(Number(price));
      console.log('amount', amount);
      console.log('decimals', decimals);

      // Get ERC20 Token contract instance
      const contract = new this.web3.eth.Contract(this.minABI, tokenAddress);

      // calculate ERC20 token amount
      let value = amount.mul(this.web3.utils.toBN(10).pow(decimals));

      // let value = 1;
      console.log('sendvalue', value);
      // call transfer function
      contract.methods.transfer(toAddress, value).send({ from: fromAddress })
        .on('transactionHash', function (hash) {
          console.log('hash', hash);
        });
    } else {
      console.log('please input price');
    }
  }

  viewBalance(token, to) {
    const tokenAddress = token;
    const toAddress = to;

    //  ABI とコントラクト（ERC20トークン）のアドレスから、コントラクトのインスタンスを取得
    const contract = new this.web3.eth.Contract(this.minABI, tokenAddress);
    console.log('contract', contract);

    // 引数にウォレットのアドレスを渡して、balanceOf 関数を呼ぶ
    contract.methods.balanceOf(toAddress).call().then((balance) => console.log('balance', balance));
  }

  render() {
    console.log("state", this.state)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React + web3 ECSystem</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p className="App-intro">
          useraddress<input type="text" name="useraddress" value={this.state.useraddress}
            onChange={(e) => this.setState({ useraddress: e.target.value })} />
        </p>
        <p className="App-intro">
          owneraddress<input type="text" name="owneraddress" value={this.state.owneraddress}
            onChange={(e) => this.setState({ owneraddress: e.target.value })} />
        </p>
        <p className="App-intro">
          price<input type="number" name="price" value={this.state.price}
            onChange={(e) => this.setState({ price: e.target.value })} />
        </p>
        <p className="App-intro" onClick={() => this.pay(this.KOVAN_DAI_ADDRESS, this.state.owneraddress, this.state.useraddress, this.state.price)}>
          click to pay
        </p>
        <p className="App-intro" onClick={() => this.viewBalance(this.KOVAN_DAI_ADDRESS, this.state.owneraddress)}>
          check Balance
        </p>
      </div>
    );
  }
}

export default App;
