import React from 'react';
import {BrowserRouter , Route, Routes} from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from "@mui/material";

// import Navigation from './components/layout/Navigation/Navigation';
import TestNewLayout from './components/layout/MainLayout/TestNewLayout';
import MainLayout from './components/layout/MainLayout/MainLayout';
import muiTheme from './styles/muiTheme';
import Programming from './components/views/Skills/Programming';
import SoftSkills from './components/views/Skills/SoftSkills';
import Tools from './components/views/Skills/Tools';
import Languages from './components/views/Skills/Languages';

function App() {
  return (
    <ThemeProvider theme={muiTheme}>
      <BrowserRouter>
      <CssBaseline />
        <TestNewLayout>
          <Routes>
            <Route exact path={'/'} element={<Programming />} />
            <Route exact path={`/softSkills`} component={SoftSkills} />
            <Route exact path={`/tools`} component={Tools} />
            <Route exact path={`/languages`} component={Languages} />
          </Routes>
        </TestNewLayout>
      </BrowserRouter >
    </ThemeProvider>
  );
}

export default App;