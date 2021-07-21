import {  Grid, makeStyles, Typography} from '@material-ui/core';
import React from 'react';
import {  SiEslint, SiVisualstudiocode, SiCanva, SiAdobephotoshop, SiJenkins, SiJira } from 'react-icons/si';


const useStyles = makeStyles((theme) => ({
  marginTop: {
    marginTop: theme.spacing(9),
  },
  paper: {
    padding: theme.spacing(9),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  margin: {
    margin: theme.spacing(1),
  },
  icon: {
    
  },
}));

const Tools = () => {

  const classes = useStyles();
      
  return(
    
    <Grid container
      spacing={2}
      justifyContent="center">
      <Grid item xs={3} className={classes.icon}><SiEslint size={70} />
        <Typography>eslint</Typography></Grid>  
      <Grid item xs={3} className={classes.icon}><SiVisualstudiocode size={70} />
        <Typography>Visual Studio</Typography></Grid> 
      <Grid item xs={3} className={classes.icon}><SiCanva size={70} />
        <Typography>Canva</Typography></Grid> 
      <Grid item xs={3} className={classes.icon}><SiAdobephotoshop size={70} />
        <Typography>Adobe photoshop</Typography></Grid> 
      <Grid item xs={3} className={classes.icon}><SiJenkins size={70} />
        <Typography>Jenkins</Typography></Grid>
      <Grid item xs={3} className={classes.icon}><SiJira size={70} />
        <Typography>Jira</Typography></Grid>         
    </Grid>
  );

};

export default Tools;