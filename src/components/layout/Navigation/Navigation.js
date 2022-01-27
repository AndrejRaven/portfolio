import React from 'react';
import { CssBaseline, AppBar, Toolbar, Typography } from "@mui/material";

import CustomAvatar from '../../elements/avatar/Avatar';



const Navigation = () =>  {

  return (
    <>
      <CssBaseline />
        <AppBar position="sticky" disablegutters='true'>
          <Toolbar sx={{justifyContent: 'space-between'}}>
            <Typography variant="h5">
              Andrej Babiak 
            </Typography>
            <CustomAvatar badgeHeight={15} badgeWidth={15} />
          </Toolbar>
        </AppBar>
    </>
  );
};

export default Navigation;

{/* <CssBaseline />
<AppBar position="sticky" disablegutters='true'>
  <Toolbar>
    <Typography variant="h6">
    Andrej Babiak 
    </Typography>
    <Badge
      overlap="circular"
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      badgeContent={<SmallAvatar style={{ border: 'none' }} alt="React" src={iconReact} />}
    >
      <Avatar alt="Andrej Babiak" src={avatar} />
    </Badge>
  </Toolbar>
</AppBar>
</> */}