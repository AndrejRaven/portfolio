import React from 'react';
import { Button, Grid, Toolbar } from "@mui/material";



const Navigation = () =>  {

  return (
    <Toolbar>
        <Grid container justifyContent="space-between">
          <Grid>
            <Button>Dark mode</Button>
            <Button>Raven</Button>
          </Grid>
          <Grid>
            <Button>Skills</Button>
            <Button>Projects</Button>
            <Button>Education</Button>
            <Button>Work expirience</Button>
            <Button>Contact</Button>
          </Grid>
        </Grid>
      </Toolbar>
  );
};

export default Navigation;