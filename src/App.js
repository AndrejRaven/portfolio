import React from 'react';
import {BrowserRouter, Switch} from 'react-router-dom';
import MainLayout from './components/layout/MainLayout/MainLayout';
// import Dashboard from './components/views/Dashboard/Dashboard.js';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter basename={'/'}>
        <MainLayout>
          <p>Hello</p>
          <Switch>
            {/* <Route exact path={`${process.env.PUBLIC_URL}/`} component={Dashboard} /> */}
          </Switch>
        </MainLayout>
      </BrowserRouter>
    </Provider>
  );
}

export default App;