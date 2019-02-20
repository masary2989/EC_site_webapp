import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import classNames from 'classnames';
// import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import AmagifImage from './images/amagif.png';

const styles = theme => ({
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  cardGrid: {
    padding: `${theme.spacing.unit * 8}px 0`,
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    // paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing.unit * 6,
  },
});


class HistoryList extends Component {
  render() {
    const { classes } = this.props;
    const cards = [1, 5, 3];
    const values = [500, 1000, 2000, 3000, 5000, 10000];
    return (
      <div className={classNames(classes.layout, classes.cardGrid)}>
        {/* End hero unit */}
        <Grid container spacing={40}>
          {cards.map(card => (
            <Grid item key={card} sm={6} md={4} lg={3}>
              <NavLink
                to={`/productdetail/${card}`}
              >
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  title="Image title"
                >
                  <img src={AmagifImage} />
                </CardMedia>
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Amazon.co.jp eGift Card
                  </Typography>
                  <Typography>
                    It is an amazon gift card of Japan.
                    After purchase, you will receive an e-mail
                    with code written for your e-mail address.
                    Cancellation after purchase can not be done.
                  </Typography>
                  <Typography style={{ marginTop: 10 }}>
                    Order date 2019/01/31 21:31:51
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary">
                    {'\xA5 ' + String(values[card]) + ' / xxxx Dai'}
                  </Button>
                </CardActions>
              </Card>
              </NavLink>
            </Grid>
          ))}
        </Grid>
      </div>
    );
  }
}

HistoryList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HistoryList);
