import React from 'react';
import PropTypes from 'prop-types';
import {Theme, withStyles} from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

interface CircularIndeterminateStyles {
  progress: {
    margin: number
  }
}

const styles = (theme: Theme) => ({
  progress: {
    margin: theme.spacing.unit * 2,
  },
});

function CircularIndeterminate(props: any) {
  const { classes } = props;
  return (
    <div>
      <CircularProgress className={classes.progress} />
    </div>
  );
}

CircularIndeterminate.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CircularIndeterminate);
