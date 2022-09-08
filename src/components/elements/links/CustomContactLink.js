import { Link, Box, Icon, Divider, Typography } from '@mui/material';
import theme from '../../../styles/muiTheme';

const CustomContactLink = ({ component, text, type }) => {
  return (
    <Link sx={{
      marginBottom: 2,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      textDecoration: 'none',
      transition: `${theme.transitions.create(['color', 'transform'], {
        duration: theme.transitions.duration.short,
      })}`,
      '&:hover': {
        color: 'green',
        '& span': {
         border: '1px solid  green',
        },
      },
    }} >
      <Icon sx={{
         borderRadius: '50%',
         border: '1px solid black',
         minWidth: 50,
         minHeight: 50,
         display: 'flex',
         justifyContent: 'center',
         alignItems: 'center',
         }}>
        {component}
      </Icon>
      <Divider orientation="vertical" sx={{height: "100%", padding: 2}} />
      <Typography variant="h6" sx={{
        width: '100%',
      }} >{text}</Typography>
    </Link>
  );
}

export default CustomContactLink;
