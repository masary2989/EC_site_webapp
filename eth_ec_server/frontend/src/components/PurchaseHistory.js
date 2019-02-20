import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Web3 from 'web3';
import logo from './images/logo.svg';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import './App.css';
import NavBar from './NavBar';
import HistoryList from './HistoryList';
import {
  pay,
  viewBalance,
  KOVAN_OWNER_WALLET_ADDRESS,
} from './web3_logics';
import AmagifImage from './images/amagif.png';


const styles = theme => ({
  toptitle: {
    textAlign: 'left',
    marginTop: 50,
    marginLeft: 50,
  },
})

class PurchaseHistory extends Component {
  constructor() {
    super();
    this.state = {
      useraddress: '',
      owneraddress: KOVAN_OWNER_WALLET_ADDRESS,
      price: undefined,
    };
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <NavBar />
        <Typography className={classes.toptitle} variant="h5" color="inherit" noWrap>
          Purchase History
        </Typography>
        <HistoryList />
      </div>
    );
  }
}


PurchaseHistory.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PurchaseHistory);
