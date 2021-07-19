import { Container, AppBar, Toolbar, Typography, makeStyles} from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  marginTop: {
    marginTop: theme.spacing(9),
  },
  footer: {
    justifyContent: 'center', 
  },
}));

const Footer = () => {

  const classes = useStyles();
    
  return(
    <AppBar position="static" color="primary" className={classes.marginTop}>
      <Container maxWidth="md">
        <Toolbar className={classes.footer}>
          <Typography variant="body1" color="inherit">
                © 2021 Andrej Babiak
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Footer;