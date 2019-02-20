
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Web3 from 'web3';
import './App.css';
import NavBar from './NavBar';
import {
  pay,
  viewBalance,
  KOVAN_OWNER_WALLET_ADDRESS,
} from './web3_logics';
import AmagifImage from './images/amagif.png';

const styles = theme => ({
  confirmedMes: {
    display: 'flex',
    justifyContent: 'center',
  },
  confirmedMes1: {
    textAlign: 'center',
    marginTop: 40,
  },
  confirmedMes2: {
    textAlign: 'center',
    marginTop: 70,
  },
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


class PurchaseConfirmation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      useraddress: '',
      owneraddress: KOVAN_OWNER_WALLET_ADDRESS,
      price: undefined,
      choosedGas: Number(this.props.match.params.gid),
    };
  }

  render() {
    console.log(this.state);
    const { classes } = this.props;
    const { id } = this.props.match.params;
    const values = {
      1: 500, 2: 1000, 3: 2000, 4: 3000, 5: 5000, 6: 10000,
    };
    const gas = {
      0: 100,
      1: 50,
      2: 10,
    };
    console.log(id);
    return (
      <div>
        <NavBar />
        <div
          className={classes.confirmedMes}
        >
          <div>
            <Typography
              className={classes.confirmedMes1}
              color="inherit"
              variant="h2"
            >
              Thank you!
            </Typography>
            <Typography
              className={classes.confirmedMes1}
              color="inherit"
              variant="h4"
            >
              {`Gift Number ${1234567890}`}
            </Typography>
            <Typography
              className={classes.confirmedMes2}
              color="inherit"
              variant="h6"
            >
              What you bought is below.
            </Typography>
          </div>
        </div>
        <div className={classes.detailLayout}>
          <div className={classes.detailimage}>
            <img src={AmagifImage} />
          </div>
          <div className={classes.purchaseoptions}>
            <Typography
              className={classes.purchaseoption1}
              color="inherit"
              variant="h3"
            >
              Amazon.co.jp eGift Card
            </Typography>
            <Typography
              className={classes.purchaseoption2}
              color="inherit"
              variant="h5"
            >
              {'\xA5 ' + String(values[id]) + ' / xxxx Dai'}
            </Typography>
            <Typography
              className={classes.purchaseoption2}
              color="inherit"
              variant="h5"
            >
              The number will be displayed
              <br />
              on the page after purchase.
            </Typography>
            <Typography
              className={classes.purchaseoption2}
              color="inherit"
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
                  disabled
                >
                  <Typography variant="h6">
                    Fastest
                    <br />
                    {'\xA5 ' + String(gas[0])}
                    <br />
                    {'xxxx Dai'}
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
                  disabled
                >
                  <Typography variant="h6">
                    Fast
                    <br />
                    {'\xA5 ' + String(gas[1])}
                    <br />
                    {'xxxx Dai'}
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
                  disabled
                >
                  <Typography variant="h6">
                    Slow
                    <br />
                    {'\xA5 ' + String(gas[2])}
                    <br />
                    {'xxxx Dai'}
                  </Typography>
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

PurchaseConfirmation.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PurchaseConfirmation);
