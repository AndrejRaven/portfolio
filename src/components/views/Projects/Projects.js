import { Container, makeStyles,  
  Grid, Avatar, Typography, Card, CardMedia, CardContent,
  CardActions, IconButton, CardHeader, Collapse} from '@material-ui/core';
import React from 'react';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { cards } from '../../../data/cardProjectData.json';
import clsx from 'clsx';



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
        
  },
  paper: {
    padding: theme.spacing(9),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  mainFeaturesPost: {
    position: 'relative',
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    minHeight: '50vh',
  },
  mainFeaturesPostContent: {
    position: 'relative',
    padding: theme.spacing(6),
  },
  mainFeaturesPostImage: {
    position: 'relative',
    padding: theme.spacing(5),
    marginLeft: theme.spacing(2),
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    background: 'rgba(0,0,0,.3)',
  },
  large: {
    width: theme.spacing(7) * 5,
    height: theme.spacing(7) * 5,
  },
  margin: {
    margin: theme.spacing(1),
  },
  marginTop: {
    marginTop: theme.spacing(9),
  },
  marginTopCard: {
    marginTop: theme.spacing(3),
  },
  icon: {
    background: theme.palette.grey[400], 
  },
  cardRoot: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: theme.palette.error,
  },
  footer: {
    justifyContent: 'center', 
  },
}));


const Projects = () => {

  const classes = useStyles();
  const [expandedId, setExpandedId] = React.useState(-1);
  
  const handleExpandClick = (i) => {
    setExpandedId(expandedId === i ? -1 : i);
  };


  return (
      
    <Container maxWidth='lg' className={classes.marginTop}>
      <Grid container align='center'>
        <Grid item xs={12}>
          <Typography
            component="h1"
            variant="h3"
            color="inherit"
            gutterBottom
          >
        My projects  
          </Typography>         
        </Grid>  
        {cards.map((card, i) => (
          <Grid item xs={4} className={classes.marginTopCard} key={card.id}>
            <Card className={classes.cardRoot}>
              <CardHeader
                avatar={
                  <Avatar aria-label="recipe" className={classes.avatar}>
                    {card.avatar}
                  </Avatar>
                }
                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                }
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
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
                <IconButton
                  className={clsx(classes.expand, {
                    [classes.expandOpen]: expandedId,
                  })}
                  onClick={() => handleExpandClick(i)}
                  aria-expanded={expandedId === i}
                  aria-label="show more"
                >
                  <ShareIcon />
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
        ))}
      </Grid>
    </Container>); 
  
};  
    
export default Projects;