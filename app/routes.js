// These are the pages you can go to.
// They are all wrapped in the App component, which should contain the navbar etc
// See http://blog.mxstbr.com/2016/01/react-apps-with-pages for more information
// about the code splitting business
import { getAsyncInjectors } from './utils/asyncInjectors';

const loadModule = (cb) => (componentModule) => {
  cb(null, componentModule.default);
};

import HomeReducer from './containers/HomePage/reducer';
import HomeSagas from './containers/HomePage/sagas';
import HomePage from './containers/HomePage';

import NotFoundPage from './containers/NotFoundPage';

export default function createRoutes(store) {
  // Create reusable async injectors using getAsyncInjectors factory
  const { injectReducer, injectSagas } = getAsyncInjectors(store);

  return [
    {
      path: '/',
      name: 'home',
      getComponent(nextState, cb) {
        const renderRoute = loadModule(cb);

        injectReducer('home', HomeReducer);
        injectSagas(HomeSagas);
        renderRoute(HomePage);
      },
    }, {
      path: '*',
      name: 'notfound',
      getComponent(nextState, cb) {
        loadModule(cb)(NotFoundPage);
      },
    },
  ];
}
