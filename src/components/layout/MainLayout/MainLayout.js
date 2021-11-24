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
import { useMediaQuery } from '@material-ui/core';

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
    [theme.breakpoints.down('sm')]: {
      marginBottom: theme.spacing(2),
      paddingTop: theme.spacing(4),
      minHeight: '80vh',
    },
    [theme.breakpoints.down('md')]: {
      marginBottom: theme.spacing(3),
      paddingTop: theme.spacing(6),
      minHeight: '50vh',
    },
  },
  mainFeaturesPostContent: {
    position: 'relative',
    padding: theme.spacing(6),
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(2),
    },
    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(5),
    },
  },
  mainFeaturesPostImage: {
    position: 'relative',
    padding: theme.spacing(5),
    marginLeft: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
    [theme.breakpoints.up('sm')]: {
      display: 'inline',
    },
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
    [theme.breakpoints.down('sm')]: {
      width: theme.spacing(5) * 2,
      height: theme.spacing(5) * 2,
    },
    [theme.breakpoints.down('md')]: {
      width: theme.spacing(7) * 3,
      height: theme.spacing(7) * 3,
    },
  },
  margin: {
    marginRight: theme.spacing(2),
    marginTop: theme.spacing(1),
  },
  mainPhoto: {
    display: 'flex',
    flexDirection: 'row-reverse',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'row',
    },
    [theme.breakpoints.up('sm')]: {
      flexDirection: 'flex',
    },
  },
  buttonContainer: {
    marginTop: '10%',
    [theme.breakpoints.down('sm')]: {
      display: 'grid',
      marginTop: '50%',
    },
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
      marginTop: '20%',
    },
  },
}));

const SmallAvatar = withStyles((theme) => ({
  root: {
    width: theme.spacing(7),
    height: theme.spacing(7),
    border: `2px solid ${theme.palette.background.paper}`,
    [theme.breakpoints.down('sm')]: {
      width: theme.spacing(3),
      height: theme.spacing(3),
    },
    [theme.breakpoints.down('md')]: {
      width: theme.spacing(5),
      height: theme.spacing(5),
    },
  },
}))(Avatar);


const MainLayout = () => {
  const isSmallScreen = useMediaQuery(theme => theme.breakpoints.down('sm'));

  const buttonProps = {
    size: isSmallScreen ? 'medium' : 'large',
  };
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
              <Grid item xs={12} sm={9} md={6}>
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
                  <div className={classes.buttonContainer}>
                    <Button variant="contained" {...buttonProps} color="primary" className={classes.margin} href='mailto:https://andrejbabak221@gmail.com' target="_blank">
                    Get in touch
                    </Button>
                    <Button variant="contained" {...buttonProps} color="secondary" className={classes.margin} href='https://drive.google.com/file/d/12N6U9i8NQMXcEQgjAPoFA5krBTwGUSww/view?usp=sharing' target="_blank">
                    View resume
                    </Button>
                  </div>
                </div> 
              </Grid>
              <Grid item xs={12} sm={3} md={6}>
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