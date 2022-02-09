import { useState, useEffect } from 'react';
import { Container, Grid } from '@mui/material';

import SectionHeader from '../../elements/sectionHeader/SectionHeader';
import { useHttp } from '../../../hooks/http.hook';
import Spiner from '../../elements/spiner/Spiner';
import Project from './Project';


const Projects = () => {
  const [cards, setCards] = useState([]);

  const { request } = useHttp();

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = () => {
    request("http://localhost:3001/cards").
      then(setCards)
  }



  return (
    <Container maxWidth='lg' sx={{ marginTop: '100px' }}>
      <SectionHeader text="My projects" />
      <Grid sx={{ marginTop: '50px' }} container spacing={2}>
        {
          cards.map( card => (
            <Project card={card} key={card.id} />
          ))
        }
      </Grid>
    </Container>);

};

export default Projects;

