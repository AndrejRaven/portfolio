import { Container, Badge, Paper, makeStyles, withStyles,  
  Grid, Avatar, Typography, Button, List, ListItem, ListItemAvatar, ListItemText } from '@material-ui/core';
import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import EmailIcon from '@material-ui/icons/Email';
import TelegramIcon from '@material-ui/icons/Telegram';
import Projects from '../../views/Projects/Projects';
import Footer from '../../views/Footer/Footer';
import Skills from '../../views/Skills/Skills';
import avatar from '../../../static/images/avatar.jpg';
import iconReact from '../../../static/images/iconReact.svg';


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
    paddingTop: theme.spacing(8),
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    minHeight: '70vh',
  },
  curve: {
    position: 'absolute',
    bottom: '-4px',
    left: 0,
    width: '100%',
    overflow: 'hidden',
    lineHeight: 0,
    transform: 'rotate(180deg)',
  },
  svg: {
    position: 'relative',
    display: 'block',
    width: 'calc(100% + 1.3px)',
    height: '120px',
    fill: '#fafafa',
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
  mainPhoto: {
    display: 'flex',
    flexDirection: 'row-reverse',
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
          <div className={classes.curve}>
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className={classes.svg}>
              <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="shape-fill"></path>
              <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="shape-fill"></path>
              <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="shape-fill"></path>
            </svg>
          </div>
        </Paper>               
      </main>
      <Skills />                
      <Projects />
      <section className={classes.marginTop}>
        <Paper className={classes.mainFeaturesPost}>
          <Container fixed>
            <div className={classes.overlay} />  
            <Grid container
              direction="row"
              justifyContent="center"
            >
              <Grid item sm={6}>
                <div className={classes.mainFeaturesPostContent}>
                  <Typography
                    component="h1"
                    variant="h3"
                    color="inherit"
                    gutterBottom
                  >
                            Education 
                  </Typography>
                  <Typography
                    component="h3"
                    variant="h5"
                    color="inherit"
                    gutterBottom
                  >
                            Standart education 
                  </Typography>
                  <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar>
                          <FacebookIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText primary="Chmielnitsky College of Trade and Economy
                        " secondary="Sep 1, 2007 - May 31, 2010" />
                    </ListItem>
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar>
                          <FacebookIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText primary="Kiev University of Trade and Economy" secondary="Sep 1, 2010 - May 31, 2014" />
                    </ListItem>
                  </List>
                  <Typography
                    component="h3"
                    variant="h5"
                    color="inherit"
                    gutterBottom
                  >
                            Side education 
                  </Typography>
                  <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar>
                          <FacebookIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText primary="Codeacademy.com" secondary=" 2018 - 2019" />
                    </ListItem>
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar>
                          <FacebookIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText primary="Udemy course Selenium Java" secondary="2019 - 2020" />
                    </ListItem>
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar>
                          <FacebookIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText primary="Udemy course Frontend Developer" secondary="2020 - 2021" />
                    </ListItem>
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar>
                          <FacebookIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText primary="Kodilla.com.pl Frontend Developer" secondary="2020 - 2021" />
                    </ListItem>
                  </List>
                </div> 
              </Grid>
              <Grid item sm={6}>
                <div className={classes.mainFeaturesPostContent}>
                  <Typography
                    component="h1"
                    variant="h3"
                    color="inherit"
                    gutterBottom
                  >
                            Work expiriance 
                  </Typography>
                  <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar>
                          <FacebookIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText primary="Agro-import | Kiev, Ukraine
                        " secondary="2012 - 2013 | Merchandiser" />
                    </ListItem>
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar>
                          <FacebookIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText primary="Leader-group | Chmielnitski , Ukraina
                        " secondary="2013 - 2016 | Sales Representative" />
                    </ListItem>
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar>
                          <FacebookIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText primary="Leader-group | Chmielnitski, Ukraina
                        " secondary="2016 - 2018 | Management and accounting" />
                    </ListItem>
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar>
                          <FacebookIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText primary="DB Schenker | Goleniow, Poland
                        " secondary="2018 - 2019 | Warehouse worker" />
                    </ListItem>
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar>
                          <FacebookIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText primary="Meblomak | Rumia, Poland
                        " secondary="2019 - 2019 | Warehouse worker" />
                    </ListItem>
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar>
                          <FacebookIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText primary="DHL | Gdansk, Poland
                        " secondary="2019 - 2021 | Courier" />
                    </ListItem>
                  </List>
                </div> 
              </Grid>
            </Grid>  
          </Container>
        </Paper>  
      </section>
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
                  <div className={classes.mainPhoto}>
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