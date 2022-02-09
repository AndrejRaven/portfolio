import { Container, Button, Paper, Grid, Typography } from '@mui/material';
import {
  Routes,
  Link,
  Route,
} from 'react-router-dom';
import Programming from './Programming';
import SoftSkills from './SoftSkills';
import Tools from './Tools';
import Languages from './Languages';

const Skills = () => {

  return (
    <Container maxWidth='lg' sx={{ marginTop: '100px', marginBottom: '100px'}}>
      <Paper elevation={3} sx={{ textAlign: 'center' }} >
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
            <Link to={`/`}><Button sx={{ margin: 1, fontSize: 16 }}>Programming</Button></Link>
            <Link to={`/tools`}><Button sx={{ margin: 1, fontSize: 16 }}>Tools</Button></Link>
            <Link to={`/softSkills`}><Button sx={{ margin: 1, fontSize: 16 }}>Soft skills</Button></Link>
            <Link to={`/languages`}><Button sx={{ margin: 1, fontSize: 16 }}>Languages</Button></Link>
          </Grid>
          <div>
            <Grid container
              spacing={2}
              justifyContent="center"
              alignItems="center"
              sx={{  minHeight: '500px' }}>
              <Routes>
                <Route exact path={`/`} element={<Programming />} />
                <Route exact path={`/softSkills`} element={<SoftSkills />} />
                <Route exact path={`/tools`} element={<Tools />} />
                <Route exact path={`/languages`} element={<Languages />} />
              </Routes>
            </Grid>
          </div>
        </Grid>
      </Paper>
    </Container>
  );
};

export default Skills;