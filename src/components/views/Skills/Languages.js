import { Grid, makeStyles, Typography} from '@material-ui/core';
import React from 'react';
import Flag from 'react-flagkit';


const useStyles = makeStyles((theme) => ({
  icon: {
    width: '140px',
    height: '100px',
    margin: '10px 30px',
    [theme.breakpoints.down('md')]: {
      width: '80px',
      height: '60px',
    },
  },
}));


const Languages = () => {
  const classes = useStyles();
      
  return(
    
    <Grid container
      spacing={2}
      justifyContent="center"
      alignItems="center">
      <Grid item xs={12} md={3}>
        <Flag country="PL" className={classes.icon} />
        <Typography>Polish</Typography></Grid>
      <Grid item xs={12} md={3}>
        <Flag country="GB" className={classes.icon} />
        <Typography>English</Typography></Grid>     
      <Grid item xs={12} md={3}>
        <Flag country="RU" className={classes.icon} />
        <Typography>Russian</Typography></Grid>             
      <Grid item xs={12} md={3}>
        <Flag country="UA" className={classes.icon} />
        <Typography>Ukrainian</Typography></Grid>     
    </Grid>
  );

};

export default Languages;