import { Container, makeStyles, Typography, Avatar, Paper, List, ListItem, Grid, ListItemAvatar, ListItemText } from '@material-ui/core';
import React from 'react';
import knteu from '../../../static/images/knteu.svg';
import caIcon from '../../../static/images/caIcon.png';
import udemy from '../../../static/images/udemy.png';
import kodilla from '../../../static/images/kodilla.png';
import europroduct from '../../../static/images/europroduct.png';
import lgLogo from '../../../static/images/lgLogo.png';
import shcenker from '../../../static/images/shcenker.png';
import meblomak from '../../../static/images/meblomak.png';
import dhl from '../../../static/images/dhl.png';

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
}));

const EducationJobs = () => {
  const classes = useStyles();

  return (
    <section className={classes.marginTop} id="#eduwork">
      <Paper className={classes.mainFeaturesPost} style={{ background: 'linear-gradient(13deg, rgba(160,131,175,1) 45%, rgba(236,230,239,1) 100%)'}}>
        <Container fixed> 
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
                      <Avatar src={knteu} />
                    </ListItemAvatar>
                    <ListItemText primary="Chmielnitsky College of Trade and Economy
                        " secondary="Sep 1, 2007 - May 31, 2010" />
                  </ListItem>
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar src={knteu} />
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
                      <Avatar src={caIcon} />
                    </ListItemAvatar>
                    <ListItemText primary="Codeacademy.com" secondary=" 2018 - 2019" />
                  </ListItem>
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar src={udemy} />
                    </ListItemAvatar>
                    <ListItemText primary="Udemy course Selenium Java" secondary="2019 - 2020" />
                  </ListItem>
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar src={udemy} />
                    </ListItemAvatar>
                    <ListItemText primary="Udemy course Frontend Developer" secondary="2020 - 2021" />
                  </ListItem>
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar src={kodilla} />
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
                      <Avatar src={europroduct} />
                    </ListItemAvatar>
                    <ListItemText primary="Europroduct | Kiev, Ukraine
                        " secondary="2012 - 2013 | Merchandiser" />
                  </ListItem>
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar src={lgLogo} />
                    </ListItemAvatar>
                    <ListItemText primary="Leader-group | Chmielnitski , Ukraina
                        " secondary="2013 - 2016 | Sales Representative" />
                  </ListItem>
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar src={lgLogo} />
                    </ListItemAvatar>
                    <ListItemText primary="Leader-group | Chmielnitski, Ukraina
                        " secondary="2016 - 2018 | Management and accounting" />
                  </ListItem>
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar src={shcenker} />
                    </ListItemAvatar>
                    <ListItemText primary="DB Schenker | Goleniow, Poland
                        " secondary="2018 - 2019 | Warehouse worker" />
                  </ListItem>
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar src={meblomak} />
                    </ListItemAvatar>
                    <ListItemText primary="Meblomak | Rumia, Poland
                        " secondary="2019 - 2019 | Warehouse worker" />
                  </ListItem>
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar src={dhl} />
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

  );};

export default EducationJobs;  