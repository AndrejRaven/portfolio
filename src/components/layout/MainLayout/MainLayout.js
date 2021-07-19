import { Container, Badge, Paper, makeStyles, withStyles,  
  Grid, Avatar, Typography, Button } from '@material-ui/core';
import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import EmailIcon from '@material-ui/icons/Email';
import TelegramIcon from '@material-ui/icons/Telegram';
import Projects from '../../views/Projects/Projects';
import Footer from '../../views/Footer/Footer';
import Skills from '../../views/Skills/Skills';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(9),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  mainFeaturesPost: {
    position: 'relative',
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    minHeight: '50vh',
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
  marginTop: {
    marginTop: theme.spacing(9),
  },
  marginTopCard: {
    marginTop: theme.spacing(3),
  },
  icon: {
    background: theme.palette.grey[400], 
  },
  cardRoot: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: theme.palette.error,
  },
  footer: {
    justifyContent: 'center', 
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
          style={{ backgroundImage: `url(https://source.unsplash.com/random)`}}>
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
                            Hi i`m Andrej Babiak    
                  </Typography>
                  <Typography
                    variant="h5"
                    color="inherit"
                    paragraph>
                        Frontend developer with great passion and seeking of new oportunities
                  </Typography>
                  <Button variant="contained" color="primary" className={classes.margin}>
                    Get in touch
                  </Button>
                  <Button variant="contained" color="secondary" className={classes.margin}>
                    View resume
                  </Button>
                </div> 
              </Grid>
              <Grid item sm={6}>
                <div className={classes.mainFeaturesPostImage}>
                  <div className={classes.root}>
                    <Badge
                      overlap="circular"
                      anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right',
                      }}
                      badgeContent={<SmallAvatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />}
                    >
                      <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" className={classes.large} />
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
      <section className={classes.marginTop}>
        <Paper className={classes.mainFeaturesPost}
          style={{ backgroundImage: `url(https://source.unsplash.com/random)`}}>
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
                      lorem lorem lorem ewjjgewj kjgnjwkjw fvqjknvewkj efvkewje fqwekfnqkq jqfwnwkq qjkfnwen njqkjkqjkgfq nfqnqkqfnekjejkg qjfgenk qngekjvn nqnjkfewgnkj
                       newjngknwe jkgewnkgk ngwenjkw k kjengkjewkgw nkgjweknjg n kwgekjwgenjkjwn jkenejgjkwgjw njwegnjk njg njk nwjg newjkwkjwegjkwnbgew k
                  </Typography>
                  <Button variant="contained" color="primary" className={classes.margin}>
                    Get in touch
                  </Button>
                  <Grid container spacing={3}>
                    <Grid item>
                      <FacebookIcon />  
                    </Grid>
                    <Grid item>
                      <LinkedInIcon />  
                    </Grid>
                    <Grid item>
                      <InstagramIcon />  
                    </Grid>
                    <Grid item>
                      <EmailIcon />  
                    </Grid>
                    <Grid item>
                      <TelegramIcon />  
                    </Grid>
                  </Grid>
                </div> 
              </Grid>
              <Grid item sm={6}>
                <div className={classes.mainFeaturesPostImage}>
                  <div className={classes.root}>
                    <Badge
                      overlap="circular"
                      anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right',
                      }}
                      badgeContent={<SmallAvatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />}
                    >
                      <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" className={classes.large} />
                    </Badge>
                  </div>
                </div>
              </Grid>
            </Grid>
          </Container>
        </Paper>  
      </section>
      <Footer />
    </>
  );
};

MainLayout.propTypes = {
  
};

export default MainLayout;