import React from 'react';
import {BrowserRouter , Route, Routes} from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from "@mui/material";

// import Navigation from './components/layout/Navigation/Navigation';
import MainLayout from './components/layout/MainLayout/MainLayout';
import muiTheme from './styles/muiTheme';
import Programming from './components/views/Skills/Programming';

function App() {
  return (
    <ThemeProvider theme={muiTheme}>
      <BrowserRouter>
      <CssBaseline />
        <MainLayout>
          <Routes>
            <Route exact path={'/'} element={<Programming />} />
            {/* <Route exact path={`/softSkills`} component={SoftSkills} />
            <Route exact path={`/tools`} component={Tools} />
            <Route exact path={`/languages`} component={Languages} /> */}
          </Routes>
        </MainLayout>
      </BrowserRouter >
    </ThemeProvider>
  );
}

export default App;