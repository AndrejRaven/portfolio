import { Container, makeStyles, Typography, Avatar, Paper, Button, Grid, Badge, withStyles, Link } from '@material-ui/core';
import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import EmailIcon from '@material-ui/icons/Email';
import TelegramIcon from '@material-ui/icons/Telegram';
import avatar from '../../../static/images/avatar.jpg';
import iconReact from '../../../static/images/iconReact.svg';

const useStyles = makeStyles((theme) => ({

  mainFeaturesPost: {
    position: 'relative',
    color: theme.palette.common.white,
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
  marginTop: {
    marginTop: theme.spacing(9),
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    background: 'rgba(0,0,0,.5)',
  },
  margin: {
    margin: theme.spacing(1),
  },
  mainPhoto: {
    display: 'flex',
    flexDirection: 'row-reverse',
  },
  large: {
    width: theme.spacing(7) * 5,
    height: theme.spacing(7) * 5,
  },
  linkIcon: {
    color: '#fafafa',
    marginTop: '10px',
    '&:hover': {
      transform: 'scale(130%)',
      transition: '0.5s linear',
      color: theme.palette.primary.main,
    },
  },
}));

const SmallAvatar = withStyles((theme) => ({
  root: {
    width: theme.spacing(7),
    height: theme.spacing(7),
    border: `2px solid ${theme.palette.background.paper}`,
  },
}))(Avatar);

const About = () => {
  const classes = useStyles();
  
  return (
    <section className={classes.marginTop}>
      <Paper className={classes.mainFeaturesPost}
        style={{ backgroundImage: `url(https://i.postimg.cc/1XQmp7hx/react-background.jpg)` }}>
        <Container fixed>
          <div className={classes.overlay} />  
          <Grid container
            direction="row"
            justifyContent="center"
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
                            About me   
                </Typography>
                <Typography
                  variant="h5"
                  color="inherit"
                  paragraph>
                      Hi, I am Andrej,
                      frontend developer from Poland, currently living in Gdansk.I worked with such technologies like React and Redux,
                      Firebase and MaterialUi. I like to code and solving problems. My goal is to create pure performance code, stable
                      and in short terms.I like to stay active, travelsand sport. 
                </Typography>
                <Button variant="contained" color="primary" className={classes.margin} href='mailto:https://andrejbabak221@gmail.com' target="_blank">
                    Get in touch
                </Button>
                <Grid container spacing={3}>
                  <Grid item>
                    <Link
                      component="button"
                      variant="body2"
                      className={classes.linkIcon}
                      onClick={() => {
                        window.open('https://www.facebook.com/profile.php?id=100017253731056');
                      }}
                    >
                      <FacebookIcon />   
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link
                      component="button"
                      variant="body2"
                      className={classes.linkIcon}
                      onClick={() => {
                        window.open('https://www.linkedin.com/in/andrejBabiak');
                      }}
                    >
                      <LinkedInIcon />   
                    </Link> 
                  </Grid>
                  <Grid item>
                    <Link
                      component="button"
                      variant="body2"
                      className={classes.linkIcon}
                      onClick={() => {
                        window.open('https://www.instagram.com/babiak.andrei/');
                      }}
                    >
                      <InstagramIcon />  
                    </Link> 
                  </Grid>
                  <Grid item>
                    <Link
                      component="button"
                      variant="body2"
                      className={classes.linkIcon}
                      onClick={() => {
                        window.open('mailto:email@email.de');
                      }}
                    >
                      <EmailIcon />  
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link
                      component="button"
                      variant="body2"
                      className={classes.linkIcon}
                      onClick={() => {
                        window.open(' https://t.me/@RavenAndrej');
                      }}
                    >
                      <TelegramIcon />  
                    </Link> 
                  </Grid>
                </Grid>
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
    </section>   
  );};

export default About;