import { Grid} from '@material-ui/core';
import React from 'react';
import Flag from 'react-flagkit';



const Languages = () => {

  //   const classes = useStyles();  
      
  return(
    
    <Grid container
      spacing={5}
      justifyContent="center">
      <Grid item xs={3}><Flag country="PL" size={86} /> Polish</Grid>
      <Grid item xs={3}><Flag country="GB" size={86} /> English </Grid>     
      <Grid item xs={3}><Flag country="RU" size={86} /> Russian </Grid>             
      <Grid item xs={3}><Flag country="UA" size={86} /> Ukrainian </Grid>     
    </Grid>
  );

};

export default Languages;