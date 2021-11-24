import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import {AnimatedSwitch} from 'react-router-transition';
import { Box } from '@material-ui/core';
import MainLayout from './components/layout/MainLayout/MainLayout';
// import Dashboard from './components/views/Dashboard/Dashboard.js';
import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import Navigation from './components/layout/Naviation/Navigation';
import Programming from './components/views/Skills/Programming';
import SoftSkills from './components/views/Skills/SoftSkills';
import Tools from './components/views/Skills/Tools';
import Languages from './components/views/Skills/Languages';
import Particles from 'react-tsparticles';
import styles from './styles.scss';

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 1024,
      lg: 1200,
      xl: 1536,
    },
  },
  palette: {
    type: 'light',
    primary: {
      main: '#0D1E40',
    },
    secondary: {
      main: '#734D6C',
    },
    text: {
      primary: '#9AC1D9',
    },
  },
  typography: {
    fontFamily: [
      'Helvetica Neue',
      'Arial',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Carattere"',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    h1: {
      fontFamily: 'Carattere',
    },
    h3: {
      fontFamily: 'Carattere',
    },
    h2: {
      fontFamily: 'Carattere',
    },
  },
  common: {
    color: {
      light: '#9AC1D9',
    },
  },
  props: {
    MuiButton: {
      size: 'small',
    },
    MuiButtonGroup: {
      size: 'small',
    },
    MuiCheckbox: {
      size: 'small',
    },
    MuiFab: {
      size: 'small',
    },
    MuiFormControl: {
      margin: 'dense',
      size: 'small',
    },
    MuiFormHelperText: {
      margin: 'dense',
    },
    MuiIconButton: {
      size: 'small',
    },
    MuiInputBase: {
      margin: 'dense',
    },
    MuiInputLabel: {
      margin: 'dense',
    },
    MuiRadio: {
      size: 'small',
    },
    MuiSwitch: {
      size: 'small',
    },
    MuiTextField: {
      margin: 'dense',
      size: 'small',
    },
  },
});

theme.typography.h3 = {
  fontSize: '3rem',
  [theme.breakpoints.down('md')]: {
    fontSize: '2rem',
    textTransform: 'uppercase',
  },
};

theme.typography.h5 = {
  fontSize: '1.5rem',
  [theme.breakpoints.down('md')]: {
    fontSize: '1.2rem',
  },
};

function App() {

  const particlesInit = (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ zIndex: '-1', position: 'relative'}}>
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
            background: {
              color: {
                value: '#0D2840',
              },
            },
            fpsLimit: 60,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: 'push',
                },
                onHover: {
                  enable: true,
                  mode: 'repulse',
                },
                resize: true,
              },
              modes: {
                bubble: {
                  distance: 400,
                  duration: 2,
                  opacity: 0.8,
                  size: 60,
                },
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 100,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: '#734D6C',
              },
              links: {
                color: '#734D6C',
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
              },
              collisions: {
                enable: true,
              },
              move: {
                direction: 'none',
                enable: true,
                outMode: 'out',
                random: true,
                speed: 1,
                straight: false,
                bounce: false,
              },
              number: {
                density: {
                  enable: true,
                  value_area: 600,
                },
                value: 80,
                limit: 100,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: 'circle',
              },
              size: {
                random: true,
                value: 5,
              },
            },
            detectRetina: true,
          }}
        />
      </Box>
      <BrowserRouter basename={'/'}>
        <Navigation />
        <MainLayout>
          <AnimatedSwitch
            atEnter={{ opacity: 0 }}
            atLeave={{ opacity: 0 }}
            atActive={{ opacity: 1 }}
            className={styles.switchWrapper}
          >
            <Route exact path={`/`} component={Programming} />
            <Route exact path={`/softSkills`} component={SoftSkills} />
            <Route exact path={`/tools`} component={Tools} />
            <Route exact path={`/languages`} component={Languages} />
          </AnimatedSwitch>
        </MainLayout>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;