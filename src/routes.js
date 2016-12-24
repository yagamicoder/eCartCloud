import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import Login from './views/Login/LoginView';
import Home from './views/Home/HomeView';
import FuelSavingsPage from './containers/FuelSavingsPage'; // eslint-disable-line import/no-named-as-default
import AboutPage from './components/AboutPage.js';
import NotFoundPage from './components/NotFoundPage.js';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Login}/>
    <Route path="welcome" component={Home}/>
    <Route path="about" component={AboutPage}/>
    <Route path="*" component={NotFoundPage}/>
  </Route>
);
