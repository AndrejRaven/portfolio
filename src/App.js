import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import MainLayout from './components/layout/MainLayout/MainLayout';
// import Dashboard from './components/views/Dashboard/Dashboard.js';
import { Provider } from 'react-redux';
import Navigation from './components/layout/Naviation/Navigation';
import store from './redux/store';
import Programming from './components/views/Skills/Programming';
import SoftSkills from './components/views/Skills/SoftSkills';
import Tools from './components/views/Skills/Tools';
import Languages from './components/views/Skills/Languages';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter basename={'/'}>
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
    </Provider>
  );
}

export default App;