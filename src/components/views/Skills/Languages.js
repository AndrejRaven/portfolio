import { Grid, Typography, useTheme} from '@mui/material';
import Flag from 'react-flagkit';


const Languages = () => {

  return(
    
    <Grid container
      alignItems="center"
      justifyContent="center"
      >
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