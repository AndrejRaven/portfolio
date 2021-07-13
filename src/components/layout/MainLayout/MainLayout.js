import { Container, Badge, Paper, makeStyles, withStyles,  
  Grid, Avatar, Typography, Button, Card, CardMedia, CardContent,
  CardActions, IconButton, CardHeader, Collapse, AppBar, Toolbar } from '@material-ui/core';
import React from 'react';
import { FaReact, FaHtml5, FaCss3Alt, FaSass } from 'react-icons/fa';
import { SiRedux, SiJavascript, SiGithub, SiBootstrap, SiMaterialUi } from 'react-icons/si';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import EmailIcon from '@material-ui/icons/Email';
import TelegramIcon from '@material-ui/icons/Telegram';
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

const SmallAvatar = withStyles((theme) => ({
  root: {
    width: theme.spacing(7),
    height: theme.spacing(7),
    border: `2px solid ${theme.palette.background.paper}`,
  },
}))(Avatar);


const MainLayout = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  

  return (
    <>
      <main>
        <Paper className={classes.mainFeaturesPost}
          style={{ backgroundImage: `url(https://source.unsplash.com/random)`}}>
          <Container fixed>
            <div className={classes.overlay} />  
            <Grid container
              direction="row"
              justifyContent="center"
              alignItems="center"
            >
              <Grid item sm={6}>
                <div className={classes.mainFeaturesPostContent}>
                  <Typography
                    component="h1"
                    variant="h3"
                    color="inherit"
                    gutterBottom
                  >
                            Hi i`m Andrej Babiak    
                  </Typography>
                  <Typography
                    variant="h5"
                    color="inherit"
                    paragraph>
                        Frontend developer with great passion and seeking of new oportunities
                  </Typography>
                  <Button variant="contained" color="primary" className={classes.margin}>
                    Get in touch
                  </Button>
                  <Button variant="contained" color="secondary" className={classes.margin}>
                    View resume
                  </Button>
                </div> 
              </Grid>
              <Grid item sm={6}>
                <div className={classes.mainFeaturesPostImage}>
                  <div className={classes.root}>
                    <Badge
                      overlap="circle"
                      anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right',
                      }}
                      badgeContent={<SmallAvatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />}
                    >
                      <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" className={classes.large} />
                    </Badge>
                  </div>
                </div>
              </Grid>
            </Grid>
          </Container>
        </Paper>  
      </main>
      <Container maxWidth='lg'
        className={classes.marginTop}
      >
        <Paper elevation={3}
          className={classes.paper}  >
          <Grid container
            spacing={2}
            justifyContent="center"
          >
            <Grid item xs={12}>
              <Typography 
                component="h1"
                variant="h3"
                color="inherit"
                gutterBottom
              >My technology stack</Typography>  
              <Button className={classes.margin}>
                    Programming
              </Button>
              <Button className={classes.margin}>
                    Tools
              </Button>
              <Button className={classes.margin}>
                    Soft skills
              </Button>
              <Button className={classes.margin}>
                    Languages
              </Button>
              <Grid container
                spacing={2}
                justifyContent="center">
                <Grid item xs={3} className={classes.icon}><FaReact size={70} /></Grid>  
                <Grid item xs={3} className={classes.icon}><FaHtml5 size={70} /></Grid> 
                <Grid item xs={3} className={classes.icon}><FaCss3Alt size={70} /></Grid> 
                <Grid item xs={3} className={classes.icon}><SiRedux size={70} /></Grid> 
                <Grid item xs={3} className={classes.icon}><SiJavascript size={70} /></Grid> 
                <Grid item xs={3} className={classes.icon}><SiGithub size={70} /></Grid> 
                <Grid item xs={3} className={classes.icon}><SiBootstrap size={70} /></Grid> 
                <Grid item xs={3} className={classes.icon}><FaSass size={70} /></Grid>  
                <Grid item xs={3} className={classes.icon}><SiMaterialUi size={70} /></Grid>        
              </Grid>  
            </Grid>  
          </Grid>
          <Grid container
            spacing={2}
            justifyContent="center"
          >
            <Grid item xs={12}>
              <Typography 
                component="h1"
                variant="h3"
                color="inherit"
                gutterBottom
              >My technology stack</Typography>  
              <Grid container
                spacing={2}
                justifyContent="center">
                <Grid item xs={3} className={classes.icon}><FaReact size={70} /></Grid>  
                <Grid item xs={3} className={classes.icon}><FaHtml5 size={70} /></Grid> 
                <Grid item xs={3} className={classes.icon}><FaCss3Alt size={70} /></Grid>      
              </Grid>  
            </Grid>  
          </Grid>
          <Grid container
            spacing={2}
            justifyContent="center"
          >
            <Grid item xs={12}>
              <Typography 
                component="h1"
                variant="h3"
                color="inherit"
                gutterBottom
              >My technology stack</Typography>  
              <Grid container
                spacing={2}
                justifyContent="center">
                <Grid item xs={3} className={classes.icon}><FaReact size={70} /></Grid>  
                <Grid item xs={3} className={classes.icon}><FaHtml5 size={70} /></Grid> 
                <Grid item xs={3} className={classes.icon}><FaCss3Alt size={70} /></Grid>      
              </Grid>  
            </Grid>  
          </Grid>
          <Grid container
            spacing={2}
            justifyContent="center"
          >
            <Grid item xs={12}>
              <Typography 
                component="h1"
                variant="h3"
                color="inherit"
                gutterBottom
              >My technology stack</Typography>  
              <Grid container
                spacing={2}
                justifyContent="center">
                <Grid item xs={3} className={classes.icon}><FaReact size={70} /></Grid>  
                <Grid item xs={3} className={classes.icon}><FaHtml5 size={70} /></Grid> 
                <Grid item xs={3} className={classes.icon}><FaCss3Alt size={70} /></Grid>      
              </Grid>  
            </Grid>  
          </Grid>
        </Paper>
      </Container>
      <section className={classes.marginTop}>
        <Paper className={classes.mainFeaturesPost}
          style={{ backgroundImage: `url(https://source.unsplash.com/random)`}}>
          <Container fixed>
            <div className={classes.overlay} />  
            <Grid container
              direction="row"
              justifyContent="center"
              alignItems="center"
            >
              <Grid item sm={6}>
                <div className={classes.mainFeaturesPostContent}>
                  <Typography
                    component="h1"
                    variant="h3"
                    color="inherit"
                    gutterBottom
                  >
                            About me   
                  </Typography>
                  <Typography
                    variant="h5"
                    color="inherit"
                    paragraph>
                      lorem lorem lorem ewjjgewj kjgnjwkjw fvqjknvewkj efvkewje fqwekfnqkq jqfwnwkq qjkfnwen njqkjkqjkgfq nfqnqkqfnekjejkg qjfgenk qngekjvn nqnjkfewgnkj
                       newjngknwe jkgewnkgk ngwenjkw k kjengkjewkgw nkgjweknjg n kwgekjwgenjkjwn jkenejgjkwgjw njwegnjk njg njk nwjg newjkwkjwegjkwnbgew k
                  </Typography>
                  <Button variant="contained" color="primary" className={classes.margin}>
                    Get in touch
                  </Button>
                  <Grid container spacing={3}>
                    <Grid item>
                      <FacebookIcon />  
                    </Grid>
                    <Grid item>
                      <LinkedInIcon />  
                    </Grid>
                    <Grid item>
                      <InstagramIcon />  
                    </Grid>
                    <Grid item>
                      <EmailIcon />  
                    </Grid>
                    <Grid item>
                      <TelegramIcon />  
                    </Grid>
                  </Grid>
                </div> 
              </Grid>
              <Grid item sm={6}>
                <div className={classes.mainFeaturesPostImage}>
                  <div className={classes.root}>
                    <Badge
                      overlap="circle"
                      anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right',
                      }}
                      badgeContent={<SmallAvatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />}
                    >
                      <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" className={classes.large} />
                    </Badge>
                  </div>
                </div>
              </Grid>
            </Grid>
          </Container>
        </Paper>  
      </section>
      <Container maxWidth='lg'>
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
          <Grid item xs={4} className={classes.marginTopCard}>
            <Card className={classes.cardRoot}>
              <CardHeader
                avatar={
                  <Avatar aria-label="recipe" className={classes.avatar}>
            R
                  </Avatar>
                }
                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                }
                title="Shrimp and Chorizo Paella"
                subheader="September 14, 2016"
              />
              <CardMedia
                className={classes.media}
                image="/static/images/cards/paella.jpg"
                title="Paella dish"
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
          This impressive paella is a perfect party dish and a fun meal to cook together with your
          guests. Add 1 cup of frozen peas along with the mussels, if you like.
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
                    [classes.expandOpen]: expanded,
                  })}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
                >
                  <ShareIcon />
                </IconButton>
              </CardActions>
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography paragraph>Method:</Typography>
                  <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
            minutes.
                  </Typography>
                  <Typography paragraph>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
            heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
            browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken
            and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and
            pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
            saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
                  </Typography>
                  <Typography paragraph>
            Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
            without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
            medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook
            again without stirring, until mussels have opened and rice is just tender, 5 to 7
            minutes more. (Discard any mussels that don’t open.)
                  </Typography>
                  <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then serve.
                  </Typography>
                </CardContent>
              </Collapse>
            </Card>
          </Grid>
          <Grid item xs={4} className={classes.marginTopCard}>
            <Card className={classes.cardRoot}>
              <CardHeader
                avatar={
                  <Avatar aria-label="recipe" className={classes.avatar}>
            R
                  </Avatar>
                }
                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                }
                title="Shrimp and Chorizo Paella"
                subheader="September 14, 2016"
              />
              <CardMedia
                className={classes.media}
                image="/static/images/cards/paella.jpg"
                title="Paella dish"
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
          This impressive paella is a perfect party dish and a fun meal to cook together with your
          guests. Add 1 cup of frozen peas along with the mussels, if you like.
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
                    [classes.expandOpen]: expanded,
                  })}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
                >
                  <ShareIcon />
                </IconButton>
              </CardActions>
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography paragraph>Method:</Typography>
                  <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
            minutes.
                  </Typography>
                  <Typography paragraph>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
            heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
            browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken
            and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and
            pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
            saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
                  </Typography>
                  <Typography paragraph>
            Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
            without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
            medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook
            again without stirring, until mussels have opened and rice is just tender, 5 to 7
            minutes more. (Discard any mussels that don’t open.)
                  </Typography>
                  <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then serve.
                  </Typography>
                </CardContent>
              </Collapse>
            </Card>
          </Grid>
          <Grid item xs={4} className={classes.marginTopCard}>
            <Card className={classes.cardRoot}>
              <CardHeader
                avatar={
                  <Avatar aria-label="recipe" className={classes.avatar}>
            R
                  </Avatar>
                }
                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                }
                title="Shrimp and Chorizo Paella"
                subheader="September 14, 2016"
              />
              <CardMedia
                className={classes.media}
                image="/static/images/cards/paella.jpg"
                title="Paella dish"
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
          This impressive paella is a perfect party dish and a fun meal to cook together with your
          guests. Add 1 cup of frozen peas along with the mussels, if you like.
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
                    [classes.expandOpen]: expanded,
                  })}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
                >
                  <ShareIcon />
                </IconButton>
              </CardActions>
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography paragraph>Method:</Typography>
                  <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
            minutes.
                  </Typography>
                  <Typography paragraph>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
            heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
            browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken
            and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and
            pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
            saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
                  </Typography>
                  <Typography paragraph>
            Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
            without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
            medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook
            again without stirring, until mussels have opened and rice is just tender, 5 to 7
            minutes more. (Discard any mussels that don’t open.)
                  </Typography>
                  <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then serve.
                  </Typography>
                </CardContent>
              </Collapse>
            </Card>
          </Grid>
          <Grid item xs={4} className={classes.marginTopCard}>
            <Card className={classes.cardRoot}>
              <CardHeader
                avatar={
                  <Avatar aria-label="recipe" className={classes.avatar}>
            R
                  </Avatar>
                }
                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                }
                title="Shrimp and Chorizo Paella"
                subheader="September 14, 2016"
              />
              <CardMedia
                className={classes.media}
                image="/static/images/cards/paella.jpg"
                title="Paella dish"
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
          This impressive paella is a perfect party dish and a fun meal to cook together with your
          guests. Add 1 cup of frozen peas along with the mussels, if you like.
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
                    [classes.expandOpen]: expanded,
                  })}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
                >
                  <ShareIcon />
                </IconButton>
              </CardActions>
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography paragraph>Method:</Typography>
                  <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
            minutes.
                  </Typography>
                  <Typography paragraph>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
            heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
            browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken
            and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and
            pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
            saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
                  </Typography>
                  <Typography paragraph>
            Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
            without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
            medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook
            again without stirring, until mussels have opened and rice is just tender, 5 to 7
            minutes more. (Discard any mussels that don’t open.)
                  </Typography>
                  <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then serve.
                  </Typography>
                </CardContent>
              </Collapse>
            </Card>
          </Grid>
          <Grid item xs={4} className={classes.marginTopCard}>
            <Card className={classes.cardRoot}>
              <CardHeader
                avatar={
                  <Avatar aria-label="recipe" className={classes.avatar}>
            R
                  </Avatar>
                }
                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                }
                title="Shrimp and Chorizo Paella"
                subheader="September 14, 2016"
              />
              <CardMedia
                className={classes.media}
                image="/static/images/cards/paella.jpg"
                title="Paella dish"
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
          This impressive paella is a perfect party dish and a fun meal to cook together with your
          guests. Add 1 cup of frozen peas along with the mussels, if you like.
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
                    [classes.expandOpen]: expanded,
                  })}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
                >
                  <ShareIcon />
                </IconButton>
              </CardActions>
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography paragraph>Method:</Typography>
                  <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
            minutes.
                  </Typography>
                  <Typography paragraph>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
            heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
            browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken
            and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and
            pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
            saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
                  </Typography>
                  <Typography paragraph>
            Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
            without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
            medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook
            again without stirring, until mussels have opened and rice is just tender, 5 to 7
            minutes more. (Discard any mussels that don’t open.)
                  </Typography>
                  <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then serve.
                  </Typography>
                </CardContent>
              </Collapse>
            </Card>
          </Grid>
          <Grid item xs={4} className={classes.marginTopCard}>
            <Card className={classes.cardRoot}>
              <CardHeader
                avatar={
                  <Avatar aria-label="recipe" className={classes.avatar}>
            R
                  </Avatar>
                }
                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                }
                title="Shrimp and Chorizo Paella"
                subheader="September 14, 2016"
              />
              <CardMedia
                className={classes.media}
                image="/static/images/cards/paella.jpg"
                title="Paella dish"
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
          This impressive paella is a perfect party dish and a fun meal to cook together with your
          guests. Add 1 cup of frozen peas along with the mussels, if you like.
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
                    [classes.expandOpen]: expanded,
                  })}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
                >
                  <ShareIcon />
                </IconButton>
              </CardActions>
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography paragraph>Method:</Typography>
                  <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
            minutes.
                  </Typography>
                  <Typography paragraph>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
            heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
            browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken
            and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and
            pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
            saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
                  </Typography>
                  <Typography paragraph>
            Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
            without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
            medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook
            again without stirring, until mussels have opened and rice is just tender, 5 to 7
            minutes more. (Discard any mussels that don’t open.)
                  </Typography>
                  <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then serve.
                  </Typography>
                </CardContent>
              </Collapse>
            </Card>
          </Grid>
        </Grid>
      </Container>
      <AppBar position="static" color="primary" className={classes.marginTop}>
        <Container maxWidth="md">
          <Toolbar className={classes.footer}>
            <Typography variant="body1" color="inherit">
                © 2021 Andrej Babiak
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

MainLayout.propTypes = {
  
};

export default MainLayout;