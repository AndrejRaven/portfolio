import { Container, Typography, Paper, List,  Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';

import knteu from '../../../static/images/knteu.png';
import caIcon from '../../../static/images/caIcon.png';
import udemy from '../../../static/images/udemy.png';
import kodilla from '../../../static/images/kodilla.png';
import europroduct from '../../../static/images/europroduct.png';
import lgLogo from '../../../static/images/lgLogo.png';
import shcenker from '../../../static/images/shcenker.png';
import meblomak from '../../../static/images/meblomak.png';
import dhl from '../../../static/images/dhl.png';

import EduJobItem from '../../elements/eduJobItem/EduJobItem';

const useStyles = makeStyles((theme) => ({

  mainFeaturesPost: {
    position: 'relative',
    color: theme.palette.text.primary,
    marginBottom: theme.spacing(4),
    paddingTop: theme.spacing(8),
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    minHeight: '70vh',
    [theme.breakpoints.down('sm')]: {
      marginBottom: theme.spacing(2),
      paddingTop: theme.spacing(4),
    },
  },
  mainFeaturesPostContent: {
    position: 'relative',
    padding: theme.spacing(6),
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(2),
    },
  },
  marginTop: {
    marginTop: theme.spacing(9),
  },
}));

const EducationJobs = () => {
  const classes = useStyles();

  return (
    <section className={classes.marginTop} id="#eduwork">
      <Paper className={classes.mainFeaturesPost}>
        <Container fixed> 
          <Grid container
            direction="row"
            justifyContent="center"
          >
            <Grid item sm={6}>
              <div className={classes.mainFeaturesPostContent}>
                <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                  Education 
                </Typography>
                <Typography component="h3" variant="h5" color="inherit" gutterBottom>
                  Standart education 
                </Typography>
                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                  <EduJobItem icon={knteu}
                   name="Chmielnitsky College of Trade and Economy"
                   years="Sep 1, 2007 - May 31, 2010" />
                   <EduJobItem icon={knteu}
                   name="Kiev University of Trade and Economy"
                   years="Sep 1, 2010 - May 31, 2013" />
                </List>
                <Typography component="h3" variant="h5" color="inherit" gutterBottom>
                  Side education 
                </Typography>
                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                  <EduJobItem icon={caIcon}
                    name="Codeacademy.com"
                    years="2018 - 2019" />
                  <EduJobItem icon={udemy}
                    name="Udemy course Selenium Java"
                    years="2019 - 2020" />
                  <EduJobItem icon={udemy}
                    name="Udemy course Frontend Developer"
                    years="2020 - 2021" />
                  <EduJobItem icon={kodilla}
                    name="Kodilla.com.pl Frontend Developer"
                    years="2020 - 2021" />
                </List>
              </div> 
            </Grid>
            <Grid item sm={6}>
              <div className={classes.mainFeaturesPostContent}>
                <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                  Work expiriance 
                </Typography>
                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                  <EduJobItem icon={europroduct}
                      name="Europroduct | Kiev, Ukraine"
                      years="2012 - 2013 | Merchandiser" />
                  <EduJobItem icon={lgLogo}
                      name="Leader-group | Chmielnitski , Ukraine"
                      years="2013 - 2016 | Sales Representative" />
                  <EduJobItem icon={lgLogo}
                      name="Leader-group | Chmielnitski , Ukraine"
                      years="2016 - 2018 | Management and accounting" />
                  <EduJobItem icon={shcenker}
                      name="DB Schenker | Goleniow, Poland"
                      years="2018 - 2019 | Warehouse worker" />
                  <EduJobItem icon={meblomak}
                      name="Meblomak | Rumia, Poland"
                      years="2019 - 2019 | Warehouse worker" />
                  <EduJobItem icon={dhl}
                      name="DHL | Gdansk, Poland"
                      years="2019 - 2021 | Courier" />
                </List>
              </div> 
            </Grid>
          </Grid>  
        </Container>
      </Paper>  
    </section>

  );};

export default EducationJobs;  