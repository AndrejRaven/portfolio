import {  Grid, makeStyles, Typography} from '@material-ui/core';
import React from 'react';
import {  SiEslint, SiVisualstudiocode, SiCanva, SiAdobephotoshop, SiJenkins, SiJira } from 'react-icons/si';


const useStyles = makeStyles((theme) => ({
  icon: {
    fontSize: '70px',
    [theme.breakpoints.down('md')]: {
      fontSize: '30px',
    },
  },
}));

const Tools = () => {

  const classes = useStyles();
      
  return(
    
    <Grid container
      spacing={2}
      justifyContent="center">
      <Grid item xs={6} sm={4} md={3} className={classes.icon}><SiEslint />
        <Typography>eslint</Typography></Grid>  
      <Grid item xs={6} sm={4} md={3}  className={classes.icon}><SiVisualstudiocode />
        <Typography>Visual Studio</Typography></Grid> 
      <Grid item xs={6} sm={4} md={3}  className={classes.icon}><SiCanva />
        <Typography>Canva</Typography></Grid> 
      <Grid item xs={6} sm={4} md={3} className={classes.icon}><SiAdobephotoshop />
        <Typography>Adobe photoshop</Typography></Grid> 
      <Grid item xs={6} sm={4} md={3}  className={classes.icon}><SiJenkins />
        <Typography>Jenkins</Typography></Grid>
      <Grid item xs={6} sm={4} md={3}  className={classes.icon}><SiJira />
        <Typography>Jira</Typography></Grid>         
    </Grid>
  );

};

export default Tools;