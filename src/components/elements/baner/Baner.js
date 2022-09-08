import { useState, useEffect } from 'react'
import { Button,
         Box, 
         Typography, 
         Stack, 
         Paper, 
         Slide } from "@mui/material";

const Banner = ({ direction, reverse, children}) => {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    handleChange(true)
  }, [])

  const handleChange = (boolean) => {
    setChecked(boolean);
  };

  return (
    <Box sx={{ display: 'flex',flexDirection: reverse ? 'row-reverse' : 'row'}}>
      <Slide direction={direction} in={checked} timeout={1000} mountOnEnter unmountOnExit>
        <Paper elevation={12} sx={{ width: '80%', padding: '40px 20px'}}>
          {children}
        </Paper>
      </Slide>
    </Box>
  )
}

export default Banner