import { Grid, Typography} from '@material-ui/core';
import React from 'react';
import Flag from 'react-flagkit';





const Languages = () => {
  
      
  return(
    
    <Grid container
      spacing={5}
      justifyContent="center">
      <Grid item xs={3}>
        <Flag country="PL" size={86} />
        <Typography>Polish</Typography></Grid>
      <Grid item xs={3}>
        <Flag country="GB" size={86} />
        <Typography>English</Typography></Grid>     
      <Grid item xs={3}>
        <Flag country="RU" size={86} />
        <Typography>Russian</Typography></Grid>             
      <Grid item xs={3}>
        <Flag country="UA" size={86} />
        <Typography>Ukrainian</Typography></Grid>     
    </Grid>
  );

};

export default Languages;