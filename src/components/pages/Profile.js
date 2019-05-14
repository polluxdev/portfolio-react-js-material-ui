import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import avatar from './avatar.jpg';
import ProfileContent from './ProfileContent';

const styles = {
  bigAvatar: {
    margin: 50,
    width: 200,
    height: 200,
  },
};

function ImageAvatars(props) {
  const { classes } = props;
  return (
    <div>
    <Grid container justify="center" alignItems="center">
      <Avatar alt="Fahmi Nur Rosyid" src={avatar} className={classes.bigAvatar} />
    </Grid>
    <ProfileContent/>
    </div>
  );
}

ImageAvatars.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ImageAvatars);