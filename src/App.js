import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import MainLayout from './components/layout/MainLayout/MainLayout';
// import Dashboard from './components/views/Dashboard/Dashboard.js';
import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import Navigation from './components/layout/Naviation/Navigation';
import Programming from './components/views/Skills/Programming';
import SoftSkills from './components/views/Skills/SoftSkills';
import Tools from './components/views/Skills/Tools';
import Languages from './components/views/Skills/Languages';

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
    fontFamily: 'Droid Sans',
    h1: {
      fontFamily: 'Lato',
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
      <BrowserRouter basename={'/programming'}>
        <Navigation />
        <MainLayout>
          <Switch>
            <Route exact path={`${process.env.PUBLIC_URL}/programming`} component={Programming} />
            <Route exact path={`${process.env.PUBLIC_URL}/softSkills`} component={SoftSkills} />
            <Route exact path={`${process.env.PUBLIC_URL}/tools`} component={Tools} />
            <Route exact path={`${process.env.PUBLIC_URL}/languages`} component={Languages} />
          </Switch>
        </MainLayout>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;