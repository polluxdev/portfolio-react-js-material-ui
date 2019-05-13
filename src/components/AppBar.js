import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {Link} from "react-router-dom";

const styles = {
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -18,
    marginRight: 10,
  },
};

function DenseAppBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar variant="dense">
        <Link to='/home'>
            <Typography variant="h5" className={classes.grow}>
              Home
            </Typography>
          </Link>&nbsp;&nbsp;
          <Link to='/profile'>
            <Typography variant="h5" className={classes.grow}>
              Profile
            </Typography>
          </Link>&nbsp;&nbsp;
          <Link to='/contact'>
            <Typography variant="h5" className={classes.grow}>
              Contact
            </Typography>
          </Link>&nbsp;&nbsp;
          <Link to='/portfolio'>
            <Typography variant="h5" className={classes.grow}>
              Portofolio
            </Typography>
          </Link>&nbsp;&nbsp;
        </Toolbar>
      </AppBar>
    </div>
  );
}

DenseAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DenseAppBar);