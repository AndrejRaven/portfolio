import {  Grid, makeStyles} from '@material-ui/core';
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
    background: theme.palette.grey[400], 
  },
}));

const Tools = () => {

  const classes = useStyles();
      
  return(
    
    <Grid container
      spacing={2}
      justifyContent="center">
      <Grid item xs={3} className={classes.icon}><SiEslint size={70} /></Grid>  
      <Grid item xs={3} className={classes.icon}><SiVisualstudiocode size={70} /></Grid> 
      <Grid item xs={3} className={classes.icon}><SiCanva size={70} /></Grid> 
      <Grid item xs={3} className={classes.icon}><SiAdobephotoshop size={70} /></Grid> 
      <Grid item xs={3} className={classes.icon}><SiJenkins size={70} /></Grid>
      <Grid item xs={3} className={classes.icon}><SiJira size={70} /></Grid>         
    </Grid>
  );

};

export default Tools;