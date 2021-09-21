import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import {AnimatedSwitch} from 'react-router-transition';
import MainLayout from './components/layout/MainLayout/MainLayout';
// import Dashboard from './components/views/Dashboard/Dashboard.js';
import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import Navigation from './components/layout/Naviation/Navigation';
import Programming from './components/views/Skills/Programming';
import SoftSkills from './components/views/Skills/SoftSkills';
import Tools from './components/views/Skills/Tools';
import Languages from './components/views/Skills/Languages';
import styles from './styles.scss';

const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#261826',
    },
    secondary: {
      main: '#8FA6A1',
    },
  },
  typography: {
    fontFamily: 'Slabo 27px',
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