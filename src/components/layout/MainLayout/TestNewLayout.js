import { useState, useEffect } from 'react'
import {
  Button,
  Box,
  Grid,
  Toolbar,
  Typography,
  Container,
  Stack,
  Paper,
  Slide
} from "@mui/material";

import Navigation from '../Navigation/Navigation';
import Banner from '../../elements/baner/Baner';
import Spacer from '../../elements/spacer/Spacer';
import TestCarousel from '../../elements/test-carousel/TestCarousel';

const TestNewLayout = () => {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    handleChange(true)
  }, [])

  const handleChange = (boolean) => {
    setChecked(boolean);
  };

  return (
    <>
      <Navigation />
      <Container>
        <Spacer space={3} />
        <Banner direction='right'>
          <Typography variant="h2" sx={{ paddingTop: 2 }}>Hi! I am Andrii Babiak</Typography>
          <Typography variant="h4" sx={{ paddingTop: 2 }}>Front end React Developer</Typography>
          <Typography sx={{ paddingTop: 1 }}>My main goal is to deliver safe and fast web expirience for my client.</Typography>
          <Typography>
            I started my front-end adventure in 2020 and continue to improve my skills.
            Till now I learned HTML, CSS, JavaScript and React library. I build some projects
            using diferent libraries such as Redux, react-router-dom and Mui, Bootstrap.
          </Typography>
          <Typography>
            If you are looking for Frontend developer for full time or part time job,
            please feel free to conact me and we will discuss details.
          </Typography>
          <Stack direction='row' spacing={3} sx={{ marginTop: 3 }}>
            <Button variant='contained'>Call me</Button>
            <Button variant='outlined'>Send me email</Button>
          </Stack>
        </Banner>
        <Spacer space={3} />
        <Banner reverse direction="left">
          <Typography variant="h2" sx={{ paddingTop: 2 }}>Why hire me?</Typography>
          <Typography sx={{ paddingTop: 1 }}>
            You are looking for frontend developer with good comunication skills?
            You in the right page! This page was created to help you get to know me a little
            better and show my skills.You are looking for frontend developer with good comunication skills?
            You in the right page! This page was created to help you get to know me a little
            better and show my skills.You are looking for frontend developer with good comunication skills?
            You in the right page! This page was created to help you get to know me a little
            better and show my skills.
          </Typography>
          <Button sx={{ marginTop: 3 }} variant='outlined'>Reach me in LinkedIn</Button>
        </Banner>
      </Container>
      <Spacer space={5} />
      <Box>
        <TestCarousel />
        <Box sx={{ marginTop: 5, textAlign: 'center'}}>
          <Button sx={{ padding: '10px 50px'}} variant='outlined'>View all projects</Button>
        </Box>
      </Box>
      <Spacer space={5} />
    </>
  )
}

export default TestNewLayout;