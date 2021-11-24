import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import Avatar from '@material-ui/core/Avatar';
import avatar from '../../../static/images/avatar.jpg';
import iconReact from '../../../static/images/iconReact.svg';
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
    [theme.breakpoints.down('sm')]: {
      marginRight: theme.spacing(1),
    },
  },
  title: {
    flexGrow: 1,
  },
  avatar: {
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
}));

const SmallAvatar = withStyles((theme) => ({
  root: {
    width: theme.spacing(7),
    height: theme.spacing(7),
    border: `2px solid ${theme.palette.background.paper}`,
    [theme.breakpoints.down('sm')]: {
      width: theme.spacing(3),
      height: theme.spacing(3),
    },
  },
}))(Avatar);

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
            <Badge
              className={classes.avatar}
              overlap="circular"
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              badgeContent={<SmallAvatar style={{ border: 'none' }} alt="React" src={iconReact} />}
            >
              <Avatar alt="Andrej Babiak" src={avatar} className={classes.large} />
            </Badge>
          </Toolbar>
        </AppBar>
      </div>
    </React.Fragment>
  );
};

export default Navigation;