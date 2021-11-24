import {  Grid, makeStyles, Typography} from '@material-ui/core';
import React from 'react';
import { FaReact, FaHtml5, FaCss3Alt, FaSass } from 'react-icons/fa';
import { SiRedux, SiJavascript, SiGithub, SiBootstrap, SiMaterialUi } from 'react-icons/si';


const useStyles = makeStyles((theme) => ({
  icon: {
    fontSize: '70px',
    [theme.breakpoints.down('md')]: {
      fontSize: '30px',
    },
  },
}));

const Programming = () => {

  const classes = useStyles();
      
  return(
    
    <Grid container
      spacing={2}
      justifyContent="center">
      <Grid item xs={6} sm={4} md={3} className={classes.icon}><FaReact />
        <Typography>React</Typography></Grid>  
      <Grid item xs={6} sm={4} md={3} className={classes.icon}><FaHtml5 />
        <Typography>HTML5</Typography></Grid> 
      <Grid item xs={6} sm={4} md={3} className={classes.icon}><FaCss3Alt />
        <Typography>CSS3</Typography></Grid> 
      <Grid item xs={6} sm={4} md={3} className={classes.icon}><SiRedux />
        <Typography>Redux</Typography></Grid> 
      <Grid item xs={6} sm={4} md={3} className={classes.icon}><SiJavascript />
        <Typography>JavaScript/ES6</Typography></Grid> 
      <Grid item xs={6} sm={4} md={3} className={classes.icon}><SiGithub />
        <Typography>Git</Typography></Grid> 
      <Grid item xs={6} sm={4} md={3} className={classes.icon}><SiBootstrap />
        <Typography>Bootstrap</Typography></Grid> 
      <Grid item xs={6} sm={4} md={3} className={classes.icon}><FaSass />
        <Typography>Sass</Typography></Grid>  
      <Grid item xs={6} sm={4} md={3} className={classes.icon}><SiMaterialUi />
        <Typography>MaterialUi</Typography></Grid>        
    </Grid>
  );

};

export default Programming;