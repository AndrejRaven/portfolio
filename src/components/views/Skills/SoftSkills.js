import {  Grid, makeStyles, Typography} from '@material-ui/core';
import React from 'react';
import { FaBrain, FaRegSmileBeam, FaMagic } from 'react-icons/fa';
import { TiMessages} from 'react-icons/ti';
import { GiAk47, GiRollingEnergy, GiChainLightning, GiYinYang, GiTrophy } from 'react-icons/gi';



const useStyles = makeStyles((theme) => ({
  icon: {
    fontSize: '70px',
    [theme.breakpoints.down('md')]: {
      fontSize: '30px',
    },
  },
}));

const SoftSkills = () => {

  const classes = useStyles();
      
  return(
    
    <Grid container
      spacing={2}
      justifyContent="center">
      <Grid item xs={6} md={3} className={classes.icon}><TiMessages />
        <Typography >Comunicated</Typography></Grid>  
      <Grid item xs={6} md={3} className={classes.icon}><GiTrophy />
        <Typography >Results-oriented</Typography></Grid> 
      <Grid item xs={6} md={3} className={classes.icon}><GiChainLightning />
        <Typography >Team player</Typography></Grid> 
      <Grid item xs={6} md={3} className={classes.icon}><FaBrain />
        <Typography >Trainable</Typography></Grid> 
      <Grid item xs={6} md={3} className={classes.icon}><GiAk47 />
        <Typography >Troubleshoting</Typography></Grid> 
      <Grid item xs={6} md={3} className={classes.icon}><FaRegSmileBeam />
        <Typography >Motivated</Typography></Grid> 
      <Grid item xs={6} md={3} className={classes.icon}><FaMagic />
        <Typography >Creative</Typography></Grid> 
      <Grid item xs={6} md={3} className={classes.icon}><GiRollingEnergy />
        <Typography >Energy</Typography></Grid>  
      <Grid item xs={6} md={3} className={classes.icon}><GiYinYang />
        <Typography >Work-life balance</Typography></Grid>        
    </Grid>
  );

};

export default SoftSkills;