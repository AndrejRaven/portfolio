import { useTheme } from '@mui/material/styles';
import {  Grid, Typography} from '@mui/material';

const SkillIcon = ({icon, text}) => {
  const theme = useTheme();

  return (
    <Grid item xs={6} sm={4} md={3} sx={{ 
      fontSize: '70px',
      [theme.breakpoints.down('md')]: {
        fontSize: '30px',
        }, 
    }}>
      {icon}
      <Typography variant='h6'>{text}</Typography>
    </Grid>  
  )
}

export default SkillIcon;