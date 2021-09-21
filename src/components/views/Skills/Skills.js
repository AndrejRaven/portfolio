/* eslint-disable react/no-children-prop */
import { Container, Button, Paper, Grid, Typography, makeStyles} from '@material-ui/core';
import React from 'react';
import {
  Switch,
  Link,
  Route,  
} from 'react-router-dom';
import Programming from './Programming';
import SoftSkills from './SoftSkills';
import Tools from './Tools';
import Languages from './Languages';



const useStyles = makeStyles((theme) => ({
  marginTop: {
    marginTop: theme.spacing(9),
  },
  paper: {
    padding: theme.spacing(9),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    background: theme.palette.grey[100], 
  },
  margin: {
    margin: theme.spacing(1),
  },
  icon: {
    background: theme.palette.grey[400], 
  },
}));

const Skills = () => {

  const classes = useStyles();


  return(
    <Container maxWidth='lg'

      className={classes.marginTop}
    >
      <Paper elevation={3}
        className={classes.paper}  >
        <Grid container
          spacing={2}
          justifyContent="center"
        >
          <Grid item xs={12}>
            <Typography 
              component="h1"
              variant="h3"
              color="inherit"
              gutterBottom
            >My technology stack</Typography>  
            <Link to={`/`}><Button className={classes.margin}>Programming</Button></Link>
            <Link to={`/tools`}><Button className={classes.margin}>Tools</Button></Link>
            <Link to={`/softSkills`}><Button className={classes.margin}>Soft skills</Button></Link>
            <Link to={`/languages`}><Button className={classes.margin}>Languages</Button></Link>
          </Grid>
          <div className={classes.content}>
            <Switch>
              <Route exact path={`${process.env.PUBLIC_URL}/`} component={Programming} />
              <Route exact path={`${process.env.PUBLIC_URL}/softSkills`} component={SoftSkills} />
              <Route exact path={`${process.env.PUBLIC_URL}/tools`} component={Tools} />
              <Route exact path={`${process.env.PUBLIC_URL}/languages`} component={Languages} />
            </Switch>
          </div>  
        </Grid>
      </Paper>
    </Container>
  );
};

export default Skills;