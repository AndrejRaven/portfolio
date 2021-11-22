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
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Navigation = () =>  {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <div className={classes.root}>
        <AppBar position="sticky" disablegutters='true'>
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
            Andrej Babiak 
            </Typography>
            <Button color="inherit" href="#skills">Skills</Button>
            <Button color="inherit" href="#projects">Projects</Button>
            <Button color="inherit" href="#eduwork">Education / Work Expiriance</Button>
          </Toolbar>
        </AppBar>
      </div>
    </React.Fragment>
  );
};

export default Navigation;