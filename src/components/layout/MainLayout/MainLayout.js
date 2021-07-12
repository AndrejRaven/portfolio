import { Container, Badge, Paper, makeStyles, withStyles, Grid, Avatar, Typography, Button } from '@material-ui/core';
import React from 'react';
import { FaReact, FaHtml5, FaCss3Alt, FaSass } from 'react-icons/fa';
import { SiRedux, SiJavascript, SiGithub, SiBootstrap, SiMaterialUi } from 'react-icons/si';


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
  color: {
    background: theme.palette.grey[400], 
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
                      overlap="circle"
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
      <Container maxWidth='lg'>
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
              <Grid container
                spacing={2}
                justifyContent="center">
                <Grid item xs={3} className={classes.color}><FaReact size={70} /></Grid>  
                <Grid item xs={3} className={classes.color}><FaHtml5 size={70} /></Grid> 
                <Grid item xs={3} className={classes.color}><FaCss3Alt size={70} /></Grid> 
                <Grid item xs={3} className={classes.color}><SiRedux size={70} /></Grid> 
                <Grid item xs={3} className={classes.color}><SiJavascript size={70} /></Grid> 
                <Grid item xs={3} className={classes.color}><SiGithub size={70} /></Grid> 
                <Grid item xs={3} className={classes.color}><SiBootstrap size={70} /></Grid> 
                <Grid item xs={3} className={classes.color}><FaSass size={70} /></Grid>  
                <Grid item xs={3} className={classes.color}><SiMaterialUi size={70} /></Grid>        
              </Grid>  
            </Grid>  
          </Grid>
        </Paper>
      </Container>
    </>
  );
};

MainLayout.propTypes = {
  
};

export default MainLayout;