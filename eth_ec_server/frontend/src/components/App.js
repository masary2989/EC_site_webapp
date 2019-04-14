import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Web3 from 'web3';
import logo from './images/logo.svg';
import './App.css';
import NavBar from './NavBar';
import ItemGrid from './ItemGrid';
import ProductDetail from './ProductDetail';
import PurchaseConfirmation from './PurchaseConfirmation';
import PurchaseHistory from './PurchaseHistory';
import NoMatch from './NoMatch';
import {
  pay,
  viewBalance,
  KOVAN_OWNER_WALLET_ADDRESS,
} from './web3_logics';

class Home extends Component {
  constructor() {
    super();
    this.Web3 = Web3;
    this.setupWeb3('kovan');

    // this.INFURA_API_KEY = process.env.REACT_APP_INFURA_API_KEY;

    this.state = {
      useraddress: '',
      owneraddress: KOVAN_OWNER_WALLET_ADDRESS,
      price: undefined,
    };
  }

  setupWeb3(chain) {
    // set the provider you want from Web3.providers
    // this.web3 = new this.Web3(this.Web3.givenProvider || new this.Web3.providers.HttpProvider(setChain(chain).node));
    this.web3 = new this.Web3(this.Web3.givenProvider);
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

  render() {
    console.log("in Appjs", this.state);
    return (
      <div className="App">
        <NavBar />
        <ItemGrid />
      </div>
    );
  }
}

const apiUrl = 'http://52.199.226.124:8000/';
// const apiUrl = 'http://localhost:8000/';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/productdetail/:id" render={({ match }) => <ProductDetail match={match} apiUrl={apiUrl} />} />
      <Route path="/purchaseconfirmation/:id/:gid" component={PurchaseConfirmation} />
      <Route path="/purchasehistory" component={PurchaseHistory} />
      <Route component={NoMatch} />
    </Switch>
  </BrowserRouter>
);

export default App;
