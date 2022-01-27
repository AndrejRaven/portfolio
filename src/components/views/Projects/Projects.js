import { useState, useEffect } from 'react';
import {
  Container,
  Grid, Typography, Card, CardMedia, CardContent,
  CardActions, IconButton, CardHeader, Collapse
} from '@mui/material';
// import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

import SectionHeader from '../../elements/sectionHeader/SectionHeader';
import { useHttp } from '../../../hooks/http.hook';
import Spiner from '../../elements/spiner/Spiner';


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

    <Container maxWidth='lg' sx={{ marginTop: '50px' }}>
      <SectionHeader text="My projects" />
      <Grid container>
      {cards !== [] ? 
        cards.map((card, i) => {
          <Grid item xs={12} sm={6} md={4} key={card.id}>
          <Card>
            <CardHeader
              title={card.title}
              subheader={card.subhead}
            />
            <CardMedia
              image={card.cardMedia.image}
              title={card.cardMedia.title}
            />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                {card.cardContent}
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton
                onClick={() => handleExpandClick(i)}
                aria-expanded={expandedId === i}
                aria-label={`show more`}
              >
              </IconButton>
            </CardActions>
            <Collapse in={expandedId === i} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography paragraph>{card.cardContentColapse.firstParagraph}</Typography>
                <Typography paragraph>
                  {card.cardContentColapse.secondParagraph}
                </Typography>
                <Typography paragraph>
                  {card.cardContentColapse.thirdParagraph}
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
        </Grid>
        })
        : 
      <Grid item xs={12}><Spiner /></Grid>
      }
      </Grid>
    </Container>);

};

export default Projects;

{/* {cards.map((card, i) => (
          <Grid item xs={12} sm={6} md={4} className={classes.marginTopCard} key={card.id}>
            <Card className={classes.cardRoot}>
              <CardHeader
                title={card.title}
                subheader={card.subhead}
              />
              <CardMedia
                className={classes.media}
                image={card.cardMedia.image}
                title={card.cardMedia.title}
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  {card.cardContent}
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton
                  className={clsx(classes.expand, {
                    [classes.expandOpen]: expandedId,
                  })}
                  onClick={() => handleExpandClick(i)}
                  aria-expanded={expandedId === i}
                  aria-label={`show more`}
                >
                </IconButton>
              </CardActions>
              <Collapse in={expandedId === i} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography paragraph>{card.cardContentColapse.firstParagraph}</Typography>
                  <Typography paragraph>
                    {card.cardContentColapse.secondParagraph}
                  </Typography>
                  <Typography paragraph>
                    {card.cardContentColapse.thirdParagraph}
                  </Typography>
                </CardContent>
              </Collapse>
            </Card>
          </Grid>
        ))} */}