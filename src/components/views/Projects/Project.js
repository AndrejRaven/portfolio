import { useState } from 'react';
import {
  Grid, Typography, Card, CardMedia, CardContent,
  CardActions, IconButton, CardHeader, Collapse, Divider
} from '@mui/material';
import { styled } from '@mui/material/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const Project = ({ card }) => {
  const [expandedId, setExpandedId] = useState(false);

  const handleExpandClick = () => {
    setExpandedId(!expandedId);
  };

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card>
        <CardHeader
          title={card.title}
          subheader={card.subhead}
        />
        <Divider sx={{margin: 1}} />
        <CardMedia
          component="img"
          height="194"
          image={card.cardMedia.image}
          title={card.cardMedia.title}
        />
        <Divider sx={{margin: 1}} />
        <CardContent>
          <Typography sx={{minHeight: 90, marginTop: 2}} variant="h6" color="textSecondary" component="p">
            {card.cardContent}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <ExpandMore
            expand={expandedId}
            onClick={handleExpandClick}
            aria-expanded={expandedId}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expandedId} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography variant="h5" paragraph>{card.cardContentColapse.firstParagraph}</Typography>
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