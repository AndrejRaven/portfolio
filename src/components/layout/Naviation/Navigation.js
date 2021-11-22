import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
// import PhoneIcon from '@material-ui/icons/Phone';
import CssBaseline from '@material-ui/core/CssBaseline';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  color: {
    color: theme.palette.text.primary,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.down('md')]: {
      marginRight: theme.spacing(1),
    },
  },
  title: {
    flexGrow: 1,
  },
  nav: {
    [theme.breakpoints.down('md')]: {
      display: 'none',
    }, 
  },
}));

const Navigation = () =>  {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <div className={classes.root}>
        <AppBar position="sticky" disablegutters='true' className={classes.color}>
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
            Andrej Babiak 
            </Typography>
            <div className={classes.nav}>
              <Button color="inherit" href="#skills">Skills</Button>
              <Button color="inherit" href="#projects">Projects</Button>
              <Button color="inherit" href="#eduwork">Education / Work Expiriance</Button>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    </React.Fragment>
  );
};

export default Navigation;