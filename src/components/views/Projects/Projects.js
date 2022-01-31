import { useState, useEffect } from 'react';
import {
  Container,
  Grid, Typography, Card, CardMedia, CardContent,
  CardActions, IconButton, CardHeader, Collapse
} from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import SectionHeader from '../../elements/sectionHeader/SectionHeader';
import { useHttp } from '../../../hooks/http.hook';
import Spiner from '../../elements/spiner/Spiner';
import Project from './Project';


const Projects = () => {
  const [cards, setCards] = useState([]);
  const [expandedId, setExpandedId] = useState(-1);


  const { request } = useHttp();

  useEffect(() => {
    fetchProjects();
  }, []);

  useEffect(() => {
    console.log(cards);
  }, [cards]);

  const fetchProjects = () => {
    request("http://localhost:3001/cards").
      then(setCards)
  }



  return (
    <Container maxWidth='lg' sx={{ marginTop: '100px' }}>
      <SectionHeader text="My projects" />
      <Grid sx={{ marginTop: '50px' }} container spacing={2}>
        {
          cards.map((card, i) => (
            <Project card={card} expandedId={expandedId} key={card.id} />
          ))
        }
      </Grid>
    </Container>);

};

export default Projects;

