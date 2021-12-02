import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import {AnimatedSwitch} from 'react-router-transition';
import MainLayout from './components/layout/MainLayout/MainLayout';
import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import Navigation from './components/layout/Naviation/Navigation';
import Programming from './components/views/Skills/Programming';
import SoftSkills from './components/views/Skills/SoftSkills';
import Tools from './components/views/Skills/Tools';
import Languages from './components/views/Skills/Languages';
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

  return (
    <ThemeProvider theme={theme}>
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