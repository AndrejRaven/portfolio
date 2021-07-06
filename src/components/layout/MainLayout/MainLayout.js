import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const MainLayout = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Typography component="div" style={{ backgroundColor: '#F1F1F1', height: '100vh' }}>
            
        </Typography>
      </Container>
    </React.Fragment>
  );
};

MainLayout.propTypes = {
  
};

export default MainLayout;