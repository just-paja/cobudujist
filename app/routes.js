// These are the pages you can go to.
// They are all wrapped in the App component, which should contain the navbar etc
// See http://blog.mxstbr.com/2016/01/react-apps-with-pages for more information
// about the code splitting business
import React from 'react';

import { IndexRoute, Route } from 'react-router';

import App from './containers/App';

import HomePage from './containers/HomePage';
import RecipePage from './containers/RecipePage';

import NotFoundPage from './containers/NotFoundPage';

export default function createRoutes() {
  return (
    <Route component={App} path="/">
      <IndexRoute name="home" component={HomePage} />
      <Route name="recipe" path="/recipe/:recipe" component={RecipePage} />
      <Route name="notfound" path="*" component={NotFoundPage} />
    </Route>
  );
}
