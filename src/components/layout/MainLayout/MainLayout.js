import {Container, Grid, Stack} from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

import CustomAvatar from '../../elements/avatar/Avatar';
import Introduction from './Intoduction';
import Projects from '../../views/Projects/Projects';
import Skills from '../../views/Skills/Skills';
import EducationJobs from '../../views/EducationJobs/EducationJobs'



const MainLayout = () => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <>
      <main style={{ position: 'relative'}}>
        <Container fixed sx={{ paddingTop: '20px' }}>
          <Grid container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Introduction />
            <Grid item xs={12} sm={9} md={6}>
              <Stack justifyContent="center" alignItems="center" sx={mobile && { marginTop: 5 }}>
                <CustomAvatar badgeHeight={!mobile ? 40 : 50} badgeWidth={!mobile ? 40 : 50} avatarWidth={150} avatarHeight={150} />
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