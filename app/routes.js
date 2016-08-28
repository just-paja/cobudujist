// These are the pages you can go to.
// They are all wrapped in the App component, which should contain the navbar etc
// See http://blog.mxstbr.com/2016/01/react-apps-with-pages for more information
// about the code splitting business
import React from 'react';

import { IndexRoute, Route } from 'react-router';

import App from './containers/App';

import HomeSagas from './containers/HomePage/sagas';
import HomePage from './containers/HomePage';

import NotFoundPage from './containers/NotFoundPage';

const sagas = [HomeSagas];

export default function createRoutes(store) {
  sagas.forEach(list => list.map(store.runSaga));

  return (
    <Route component={App} path="/">
      <IndexRoute name="home" component={HomePage} />
      <Route name="recipe" path="/recipe/:recipe" />
      <Route name="notfound" path="*" component={NotFoundPage} />
    </Route>
  );
}
