import configureStore, { sagaMiddleware } from '../../app/store';
import createRoutes from '../../app/routes';
import Helmet from 'react-helmet';
import Html from '../components/Html.react';
import React from 'react';
import serialize from 'serialize-javascript';
import useragent from 'useragent';

import HomePageSagas from '../../app/containers/HomePage/sagas';

import { createMemoryHistory } from 'history';
import { END } from 'redux-saga';
import { IntlProvider } from 'react-intl';
import { Provider } from 'react-redux';
import { renderToStaticMarkup, renderToString } from 'react-dom/server';
import { RouterContext, match } from 'react-router';

const isProduction = process.env.NODE_ENV === 'production';
const getAppHtml = (store, renderProps) => renderToString(
  <Provider store={store}>
    <IntlProvider locale="cs">
      <RouterContext {...renderProps} />
    </IntlProvider>
  </Provider>
);

function getScriptHtml(clientState, headers, hostname, appJsFilename) {
  let scriptHtml = '';

  const ua = useragent.is(headers['user-agent']);
  const needIntlPolyfill = ua.safari || (ua.ie && ua.version < '11');
  if (needIntlPolyfill) {
    scriptHtml += `
      <script src="/node_modules/intl/dist/Intl.min.js"></script>
      <script src="/node_modules/intl/locale-data/jsonp/en-US.js"></script>
    `;
  }

  const appScriptSrc = `/${appJsFilename}`;

  // Note how clientState is serialized. JSON.stringify is anti-pattern.
  // https://github.com/yahoo/serialize-javascript#user-content-automatic-escaping-of-html-characters
  return `${scriptHtml}
    <script>
      window.__INITIAL_STATE__ = ${serialize(clientState)};
    </script>
    <script src="/reactBoilerplateDeps.dll.js"></script>
    <script src="${appScriptSrc}"></script>
  `;
}

const renderPage = (store, renderProps, req) => {
  const clientState = store.getState();
  const { headers, hostname } = req;
  const appHtml = getAppHtml(store, renderProps);
  const helmet = Helmet.rewind();
  const scriptHtml = getScriptHtml(clientState, headers, hostname, 'main.js');
  const staticHtml = renderToStaticMarkup(
    <Html
      appCssFilename={'/test.css'}
      bodyHtml={`<div id="app">${appHtml}</div>${scriptHtml}`}
      helmet={helmet}
      isProduction={isProduction}
    />
  );

  return `<!DOCTYPE html>${staticHtml}`;
};

export default function render(req, res, next) {
  const initialState = {
    device: {
      isMobile: ['phone', 'gtablet'].indexOf(req.device.type) > -1,
    },
    server: {
      host: req.get('host'),
      protocol: req.protocol,
    },
  };

  const history = createMemoryHistory();
  const store = configureStore(initialState, history);
  const location = history.createLocation(req.url);
  const routes = createRoutes(store);

  match({ routes, location }, async (error, redirectLocation, renderProps) => {
    if (error) {
      next(error);
    } else if (redirectLocation) {
      res.redirect(301, redirectLocation.pathname + redirectLocation.search);
    } else if (renderProps) {
      const rootTask = sagaMiddleware.run(HomePageSagas[0]);
      getAppHtml(store, renderProps);
      store.dispatch(END);
      rootTask.done.then(() => {
        const html = renderPage(store, renderProps, req);
        const status = renderProps.routes.some(route => route.path === '*') ? 404 : 200;
        res
          .status(status)
          .header('Content-type', 'text/html; charset=utf-8')
          .send(html);
      });
    } else {
      res.status(404).send('Page not found');
    }
  });
}
