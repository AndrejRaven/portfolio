import { Grid, Typography, useTheme} from '@mui/material';
import Flag from 'react-flagkit';

const iconClass = `{
    width: '140px',
    height: '100px',
    margin: '10px 30px',
    // [theme.breakpoints.down('md')]: {
    //   width: '80px',
    //   height: '60px',
    // }
}`;

const Languages = () => {
  const theme = useTheme();

  return(
    
    <Grid container
      alignItems="center"
      justifyContent="center"
      sx={{ backgroundColor: 'red'}}>
      <Grid item xs={12} sm={3} sx={{ '& img': { width: '140px', height: '160px', m: '10px 30px'} }}>
        <Flag country="PL" />
        <Typography variant='h5'>Polish</Typography></Grid>
      <Grid item xs={12}  sm={3} sx={{ '& img': { width: '140px', height: '160px', m: '10px 30px'} }}>
        <Flag country="GB" />
        <Typography variant='h5'>English</Typography></Grid>     
      <Grid item xs={12}  sm={3} sx={{ '& img': { width: '140px', height: '160px', m: '10px 30px'} }}>
        <Flag country="RU" />
        <Typography variant='h5'>Russian</Typography></Grid>             
      <Grid item xs={12}  sm={3} sx={{ '& img': { width: '140px', height: '160px', m: '10px 30px'} }}>
        <Flag country="UA" />
        <Typography variant='h5'>Ukrainian</Typography></Grid>     
    </Grid>
  );

};

export default Languages;