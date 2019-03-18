import React, { Component } from 'react';
import { withRouter } from 'react-router';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import Web3 from 'web3';
import './App.css';
import NavBar from './NavBar'; import {
  pay,
  confirmPay,
  KOVAN_OWNER_WALLET_ADDRESS,
} from './web3_logics';
import AmagifImage from './images/amagif.png';

const styles = theme => ({
  detailLayout: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 60,
  },
  detailimage: {
    flex: 1,
    marginTop: 100,
    marginLeft: 100,
  },
  purchaseoptions: {
    display: 'flex',
    flexDirection: 'column',
    flex: 2,
    marginLeft: -50,
  },
  purchaseoption1: {
    textAlign: 'center',
  },
  purchaseoption2: {
    textAlign: 'center',
    marginTop: 20,
  },
  purchaseoption3: {
    alignItems: 'center',
    marginTop: 20,
    marginLeft: '18%',
    display: 'flex',
    flexDirection: 'row',
    height: 100,
    width: 500,
  },
  card: {
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  cardDisable: {
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'lightGray',
  },
  cardButton: {
    height: '100%',
    width: '100%',
  },
  buyButton: {
    height: 60,
    width: '30%',
    backgroundColor: 'orange',
    marginLeft: '38%',
    marginTop: 30,
  },
  purchaseoption4: {
    textAlign: 'center',
    color: 'white',
  },
});


class ProductDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      useraddress: '',
      owneraddress: KOVAN_OWNER_WALLET_ADDRESS,
      price: undefined,
      choosedGas: 1,
      data: [],
      loaded: false,
      placeholder: '',
      email: '',
    };
    this.Web3 = Web3;
    this.setupWeb3('kovan');
  }

  componentDidMount() {
    fetch(this.props.apiUrl + 'api/products')
      .then((response) => {
        if (response.status !== 200) {
          return this.setState({ placeholder: 'Something went wrong' });
        }
        return response.json();
      })
      .then(data => {
        this.setState({ data, loaded: true });
      });
  }

  setupWeb3(chain) {
    // set the provider you want from Web3.providers
    // this.web3 = new this.Web3(this.Web3.givenProvider || new this.Web3.providers.HttpProvider(setChain(chain).node));
    this.setedWeb3 = new this.Web3(this.Web3.givenProvider);
    console.log('web3', this.setedWeb3);
    console.log('version', this.setedWeb3.version);
    this.setedWeb3.eth.net.getNetworkType()
      .then((netType) => console.log('nettype', netType));
    this.setedWeb3.eth.getAccounts((err, accounts) => {
      if (err) {
        return;
      }
      // metamaskのアカウントで自動ログイン
      this.setedWeb3.eth.defaultAccount = accounts[0];
      this.setState({ useraddress: accounts[0] });
      console.log('account', accounts[0]);
    });
  }

  render() {
    const { classes } = this.props;
    const { id } = this.props.match.params;
    const gas = {
      0: 10,
      1: 5,
      2: 1,
    };
    if (this.state.loaded) {
      if (!this.state.price) {
        this.setState({ price: this.state.data[id].price / 1000 + 0.5 });
      }
      return (
        <div>
          <NavBar />
          <div className={classes.detailLayout}>
            <div className={classes.detailimage}>
              <img src={AmagifImage} />
            </div>
            <div className={classes.purchaseoptions}>
              <Typography
                className={classes.purchaseoption1}
                color='inherit'
                variant="h3"
              >
                {this.state.data[id].name}
              </Typography>
              <Typography
                className={classes.purchaseoption2}
                color='inherit'
                variant="h5"
              >
                {'\xA5 ' + String(this.state.data[id].price) + ' / xxxx Dai'}
              </Typography>
              <Typography
                className={classes.purchaseoption2}
                color='inherit'
                variant="h5"
              >
                The number will be displayed
                <br />
                on the page after purchase.
              </Typography>
              <Typography
                className={classes.purchaseoption2}
                color='inherit'
                variant="h5"
              >
                Choose Transaction fee
              </Typography>
              <div className={classes.purchaseoption3}>
                <Card
                  className={
                    this.state.choosedGas === 0 ? classes.cardDisable : classes.card
                  }
                >
                  <Button
                    className={classes.cardButton}
                    disabled={this.state.choosedGas === 0}
                    onClick={() => this.setState({ choosedGas: 0 })}
                  >
                    <Typography variant="h6">
                      Fastest
                      <br />
                      {'normal ×' + String(gas[0])}
                    </Typography>
                  </Button>
                </Card>
                <Card
                  className={
                    this.state.choosedGas === 1 ? classes.cardDisable : classes.card
                  }
                >
                  <Button
                    className={classes.cardButton}
                    disabled={this.state.choosedGas === 1}
                    onClick={() => this.setState({ choosedGas: 1 })}
                  >
                    <Typography variant="h6">
                      Fast
                      <br />
                      {'normal ×' + String(gas[1])}
                    </Typography>
                  </Button>
                </Card>
                <Card
                  className={
                    this.state.choosedGas === 2 ? classes.cardDisable : classes.card
                  }
                >
                  <Button
                    className={classes.cardButton}
                    disabled={this.state.choosedGas === 2}
                    onClick={() => this.setState({ choosedGas: 2 })}
                  >
                    <Typography variant="h6">
                      Slow
                      <br />
                      {'normal ×' + String(gas[2])}
                    </Typography>
                  </Button>
                </Card>
              </div>
              <form>
                <label>
                  Gift Email Address:
                  <input
                    type="text"
                    value={this.state.email}
                    onChange={event => this.setState({ email: event.target.value })}
                  />
                </label>
              </form>
              <Button
                className={classes.buyButton}
                onClick={() => {
                  if (this.state.email === '') { return; }
                  const userPost = {
                    method: 'POST',
                    mode: 'cors',
                    body: JSON.stringify({
                      name: 'Anonymous',
                      email: this.state.email,
                      walletAddress: this.state.useraddress,
                      message: 'Anonymous',
                    }),
                    headers: new Headers({
                      dataType: 'json',
                      'Content-Type': 'application/json',
                    }),
                  };
                  console.log('in p det userPost', userPost);
                  const payPromise = () => {
                    // Promiseクラスのインスタンスを関数の戻り値にする
                    // Promiseクラスのコンストラクタの引数には関数を渡す
                    // その関数は、resolve関数とreject関数を引数に取り、戻り値は無し
                    return new Promise ((resolve, reject) => pay(
                      this.setedWeb3,
                      this.state.owneraddress,
                      this.state.useraddress,
                      this.state.price,
                      gas[this.state.choosedGas],
                      this.props.history.push,
                      this.props.apiUrl,
                      resolve,
                      reject,
                      id,
                      this.state.email,
                      this.state.data[id].price,
                    ));
                  };
                  fetch(this.props.apiUrl + 'api/users/', userPost)
                    .then((userResponse) => {
                      this.user = userResponse;
                      return payPromise();
                    })
                    .then((transactionCounts) => {
                      console.log('in p d reach order');

                      this.user.json().then(response => {
                        const data = response;
                        console.log('in pd transactionCounts', transactionCounts);
                        this.transactionCount = Number(transactionCounts[transactionCounts.length-1]);
                        console.log('in pd transactionCount', this.transactionCount);
                        const orderPost = {
                          method: 'POST',
                          mode: 'cors',
                          body: JSON.stringify({
                            uid: data.id,
                            contract_tx: this.transactionCount, // 0no toki kanngaeru
                            pid: [Number(id)+1], // 0 ha nai
                            message: 'Anonymous order',
                            payment: this.state.price,
                          }),
                          headers: new Headers({
                            dataType: 'json',
                            'Content-Type': 'application/json',
                          }),
                        };
                        console.log('in p d response user', orderPost);

                        return fetch(this.props.apiUrl + 'api/orders/', orderPost)
                      })
                        .then(() => {
                          console.log('in p detail when after pay');
                          confirmPay(
                            this.setedWeb3,
                            this.state.useraddress,
                            gas[this.state.choosedGas],
                            this.transactionCount,
                          );
                          this.props.history
                            .push(`/purchaseconfirmation/${id}/${ this.state.choosedGas }`);
                        });
                    });
                }}
              >
                <Typography
                  className={classes.purchaseoption4}
                  color='inherit'
                  variant="h4"
                >
                  buy
                </Typography>
              </Button>
            </div>
          </div>
        </div>
      );
    }
    return <div />;
  }
}

ProductDetail.propTypes = {
  classes: PropTypes.object.isRequired,
  apiUrl: PropTypes.string.isRequired,
};

export default withRouter(withStyles(styles)(ProductDetail));
