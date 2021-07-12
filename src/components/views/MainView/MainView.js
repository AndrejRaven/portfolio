import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    
  },
  paper: {
    padding: theme.spacing(9),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

const MainView = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid item xs={12}>

      </Grid>
    </div>
  );
};

export default MainView;