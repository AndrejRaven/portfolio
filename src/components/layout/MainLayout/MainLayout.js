import { Container, Badge, Paper, makeStyles, withStyles,  
  Grid, Avatar, Typography, Button } from '@material-ui/core';
import React from 'react';
import Projects from '../../views/Projects/Projects';
import About from '../../views/About/About';
import EducationJobs from '../../views/EducationJobs/EducationJobs';
import Footer from '../../views/Footer/Footer';
import Skills from '../../views/Skills/Skills';
import avatar from '../../../static/images/avatar.jpg';
import iconReact from '../../../static/images/iconReact.svg';

const useStyles = makeStyles((theme) => ({
  mainFeaturesPost: {
    position: 'relative',
    color: '#9AC1D9',
    marginBottom: theme.spacing(4),
    paddingTop: theme.spacing(8),
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    minHeight: '70vh',
  },
  mainFeaturesPostContent: {
    position: 'relative',
    padding: theme.spacing(6),
  },
  mainFeaturesPostImage: {
    position: 'relative',
    padding: theme.spacing(5),
    marginLeft: theme.spacing(2),
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    background: 'rgba(0,0,0,.3)',
  },
  large: {
    width: theme.spacing(7) * 5,
    height: theme.spacing(7) * 5,
  },
  margin: {
    margin: theme.spacing(1),
  },
  mainPhoto: {
    display: 'flex',
    flexDirection: 'row-reverse',
  },
}));

const SmallAvatar = withStyles((theme) => ({
  root: {
    width: theme.spacing(7),
    height: theme.spacing(7),
    border: `2px solid ${theme.palette.background.paper}`,
  },
}))(Avatar);


const MainLayout = () => {
  const classes = useStyles();
  

  return (
    <>
      <main>
        <Paper className={classes.mainFeaturesPost}
          style={{ backgroundImage: `url(https://i.postimg.cc/RFPBb8jm/pexels-suzy-hazelwood-1629236.jpg)`}}>
          <Container fixed>
            <div className={classes.overlay} />  
            <Grid container
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Grid item sm={6}>
                <div className={classes.mainFeaturesPostContent}>
                  <Typography
                    component="h1"
                    variant="h3"
                    color="inherit"
                    gutterBottom
                  >
                            Hi, I`m Andrej Babiak    
                  </Typography>
                  <Typography
                    variant="h5"
                    color="inherit"
                    paragraph>
                        Frontend react developer 
                  </Typography>
                  <Button variant="contained" size="large" color="primary" className={classes.margin} href='mailto:https://andrejbabak221@gmail.com' target="_blank">
                    Get in touch
                  </Button>
                  <Button variant="contained" size="large" color="secondary" className={classes.margin} href='https://drive.google.com/file/d/12N6U9i8NQMXcEQgjAPoFA5krBTwGUSww/view?usp=sharing' target="_blank">
                    View resume
                  </Button>
                </div> 
              </Grid>
              <Grid item sm={6}>
                <div className={classes.mainFeaturesPostImage}>
                  <div className={classes.mainPhoto}>
                    <Badge
                      overlap="circular"
                      anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right',
                      }}
                      badgeContent={<SmallAvatar style={{ border: 'none' }} alt="React" src={iconReact} />}
                    >
                      <Avatar alt="Andrej Babiak" src={avatar} className={classes.large} />
                    </Badge>
                  </div>
                </div>
              </Grid>
            </Grid>
          </Container>
        </Paper>               
      </main>
      <Skills />                
      <Projects />
      <EducationJobs />
      <About />
      <Footer />
    </>
  );
};

MainLayout.propTypes = {
  
};

export default MainLayout;