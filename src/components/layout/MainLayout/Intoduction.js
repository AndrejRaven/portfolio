import {
  Grid, Typography, Button, Stack
} from '@mui/material';
import { BsFillTelephoneFill, BsLinkedin, BsGithub } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';

import CustomContactLink from '../../elements/links/CustomContactLink';

const Introduction = () => {
  return (
    <Grid item xs={12} sm={9} md={6}>
      <Typography
        component="h1"
        variant="h2"
        color="inherit"
        textTransform='none'
      >
        Hi, I`m Andrej Babiak
      </Typography>
      <Typography
        variant="h4"
        color="inherit"
        paragraph>
        Frontend react developer
      </Typography>
      <CustomContactLink component={<BsFillTelephoneFill />} text={"+48575683129"} />
      <CustomContactLink component={<MdEmail />} text={"andrejbabak221@gmail.com"} />
      <CustomContactLink component={<BsLinkedin />} text={"https://www.linkedin.com/in/andrejbabiak/"} />
      <CustomContactLink component={<BsGithub />} text={"https://www.github.com/AndrejRaven/"} />
      <Stack spacing={2} direction="row">
        <Button sx={{ width: '180px', fontSize: 16 }} variant="contained" color="primary" href='mailto:https://andrejbabak221@gmail.com' target="_blank">
          Get in touch
        </Button>
        <Button sx={{ width: '180px', fontSize: 16 }} variant="contained" color="secondary" href='https://drive.google.com/drive/folders/1jxhwlhIdjhHno8veSkRNfBxEgiFFXJd-' target="_blank">
          View resume
        </Button>
      </Stack>
    </Grid>
  )
}

export default Introduction;