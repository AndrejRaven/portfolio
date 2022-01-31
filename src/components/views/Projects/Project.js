import {
  Grid, Typography, Card, CardMedia, CardContent,
  CardActions, IconButton, CardHeader, Collapse
} from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Project = ({card, expandedId}) => {

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card>
        <CardHeader
          title={card.title}
          subheader={card.subhead}
        />
        <CardMedia
          component="img"
          height="194"
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
            onClick={() => handleExpandClick(card.id)}
            aria-expanded={expandedId === card.id}
            aria-label={`show more`}
          >
            <KeyboardArrowDownIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expandedId === card.id} timeout="auto" unmountOnExit>
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
  )
}

export default Project;