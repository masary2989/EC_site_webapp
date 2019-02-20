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
    console.log('in ProductDetail', this.state);
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
                  fetch(this.props.apiUrl + 'api/users/', userPost)
                    .then((userResponse) => pay(
                      this.setedWeb3,
                      this.state.owneraddress,
                      this.state.useraddress,
                      this.state.price,
                      gas[this.state.choosedGas],
                      this.props.history.push,
                      this.props.apiUrl,
                      id,
                    )
                      .then((userResponse) => {
                        console.log('in p d reach order');
                        const data = userResponse.json();
                        const orderPost = {
                          method: 'POST',
                          body: JSON.stringify({
                            uid: data.uid,
                            contract_tx: 1, // naosu
                            pid: [id],
                            message: 'Anonymous order',
                            payment: this.state.price,
                          }),
                          headers: new Headers({
                            dataType: 'json',
                            'Content-Type': 'application/json',
                          }),
                        };
                        fetch(this.props.apiUrl + 'api/orders/', orderPost)
                      }))
                    .then(() => {
                      console.log('in p deta when after pay');
                      this.props.history
                        .push(`/purchaseconfirmation/${id}/${ this.state.choosedGas }`);
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
