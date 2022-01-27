import {Typography} from '@mui/material';

const SectionHeader = ({text}) => {
  return (
    <Typography
        component="h2"
        variant="h2"
        color="inherit"
        sx={{ textAlign: 'center' }}
        gutterBottom
      >
        {text}
      </Typography>
  )
}

export default SectionHeader;