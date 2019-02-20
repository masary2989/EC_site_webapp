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


class ItemGrid extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [], loaded: false, placeholder: '' };
  }

  componentDidMount() {
    fetch('api/products')
      .then((response) => {
        if (response.status !== 200) {
          return this.setState({ placeholder: 'Something went wrong' });
        }
        return response.json();
      })
      .then(data => this.setState({ data, loaded: true }));
  }

  render() {
    console.log('in ItemGrid', this.state);
    const { classes } = this.props;
    const cards = [];
    for (let i = 0; i < this.state.data.length; i++) {
      cards[i] = i;
    }
    console.log('in ItemGrid', cards);
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
                    {this.state.data[card].name}
                  </Typography>
                  <Typography>
                    {this.state.data[card].message}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary">
                    {'\xA5 ' + String(this.state.data[card].price) + ' / xxxx Dai'}
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

ItemGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ItemGrid);
