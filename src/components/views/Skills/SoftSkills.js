import {  Grid, makeStyles, Typography} from '@material-ui/core';
import React from 'react';
import { FaBrain, FaRegSmileBeam, FaMagic } from 'react-icons/fa';
import { TiMessages} from 'react-icons/ti';
import { GiAk47, GiRollingEnergy, GiChainLightning, GiYinYang, GiTrophy } from 'react-icons/gi';



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

const SoftSkills = () => {

  const classes = useStyles();
      
  return(
    
    <Grid container
      spacing={2}
      justifyContent="center">
      <Grid item xs={3} className={classes.icon}><TiMessages size={70} />
        <Typography>Comunicated</Typography></Grid>  
      <Grid item xs={3} className={classes.icon}><GiTrophy size={70} />
        <Typography>Results-oriented</Typography></Grid> 
      <Grid item xs={3} className={classes.icon}><GiChainLightning size={70} />
        <Typography>Team player</Typography></Grid> 
      <Grid item xs={3} className={classes.icon}><FaBrain size={70} />
        <Typography>Trainable</Typography></Grid> 
      <Grid item xs={3} className={classes.icon}><GiAk47 size={70} />
        <Typography>Troubleshoting</Typography></Grid> 
      <Grid item xs={3} className={classes.icon}><FaRegSmileBeam size={70} />
        <Typography>Motivated</Typography></Grid> 
      <Grid item xs={3} className={classes.icon}><FaMagic size={70} />
        <Typography>Creative</Typography></Grid> 
      <Grid item xs={3} className={classes.icon}><GiRollingEnergy size={70} />
        <Typography>Energy</Typography></Grid>  
      <Grid item xs={3} className={classes.icon}><GiYinYang size={70} />
        <Typography>Work-life balance</Typography></Grid>        
    </Grid>
  );

};

export default SoftSkills;