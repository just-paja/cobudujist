// These are the pages you can go to.
// They are all wrapped in the App component, which should contain the navbar etc
// See http://blog.mxstbr.com/2016/01/react-apps-with-pages for more information
// about the code splitting business
import { getAsyncInjectors } from './utils/asyncInjectors';

import App from './containers/App';

import HomeReducer from './containers/HomePage/reducer';
import HomeSagas from './containers/HomePage/sagas';
import HomePage from './containers/HomePage';

import NotFoundPage from './containers/NotFoundPage';

export default function createRoutes(store) {
  // Create reusable async injectors using getAsyncInjectors factory
  const { injectReducer, injectSagas } = getAsyncInjectors(store);

  return [
    {
      component: App,
      childRoutes: [
        {
          path: '/',
          name: 'home',
          getComponent(nextState, next) {
            injectReducer('home', HomeReducer);
            injectSagas(HomeSagas);
            next(null, HomePage);
          },
        },
        {
          path: '*',
          name: 'notfound',
          getComponent(nextState, next) {
            next(null, NotFoundPage);
          },
        },
      ],
    },
  ];
}
