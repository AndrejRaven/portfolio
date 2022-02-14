import {Container, Grid, Stack} from '@mui/material';

import CustomAvatar from '../../elements/avatar/Avatar';
import Introduction from './Intoduction';
import Background from '../../elements/background/Background';
import Projects from '../../views/Projects/Projects';
import Skills from '../../views/Skills/Skills';
import EducationJobs from '../../views/EducationJobs/EducationJobs'



const MainLayout = () => {

  return (
    <>
      <main style={{ position: 'relative'}}>
        <Background />
        <Container fixed sx={{ paddingTop: '100px' }}>
          <Grid container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Introduction />
            <Grid item xs={12} sm={9} md={6}>
              <Stack justifyContent="center" alignItems="center">
                <CustomAvatar badgeHeight={50} badgeWidth={50} avatarWidth={250} avatarHeight={250} />
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </main>
      <Projects />
      <Skills />
      <EducationJobs />
    </>
  );
};


export default MainLayout;