import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const styles = theme => ({
  t404: {
    width: 500,
    marginLeft: '50%',
  },
  t404text: {
    marginLeft: '50%',
  },
});

class NoMatch extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.t404}>
        <text className={classes.t404text}>
          404 Page Not Found...
        </text>
      </div>
    );
  }
}

NoMatch.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NoMatch);
