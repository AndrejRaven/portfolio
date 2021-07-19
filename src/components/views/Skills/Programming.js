import {  Grid, makeStyles} from '@material-ui/core';
import React from 'react';
import { FaReact, FaHtml5, FaCss3Alt, FaSass } from 'react-icons/fa';
import { SiRedux, SiJavascript, SiGithub, SiBootstrap, SiMaterialUi } from 'react-icons/si';


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

const Programming = () => {

  const classes = useStyles();
      
  return(
    
    <Grid container
      spacing={2}
      justifyContent="center">
      <Grid item xs={3} className={classes.icon}><FaReact size={70} /></Grid>  
      <Grid item xs={3} className={classes.icon}><FaHtml5 size={70} /></Grid> 
      <Grid item xs={3} className={classes.icon}><FaCss3Alt size={70} /></Grid> 
      <Grid item xs={3} className={classes.icon}><SiRedux size={70} /></Grid> 
      <Grid item xs={3} className={classes.icon}><SiJavascript size={70} /></Grid> 
      <Grid item xs={3} className={classes.icon}><SiGithub size={70} /></Grid> 
      <Grid item xs={3} className={classes.icon}><SiBootstrap size={70} /></Grid> 
      <Grid item xs={3} className={classes.icon}><FaSass size={70} /></Grid>  
      <Grid item xs={3} className={classes.icon}><SiMaterialUi size={70} /></Grid>        
    </Grid>
  );

};

export default Programming;