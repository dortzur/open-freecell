import { App } from '../common/components';
import { Provider } from 'react-redux';
import React from 'react';
import configureStore from '../common/state/store/configureStore';
import express from 'express';
import qs from 'qs';
import { renderToString } from 'react-dom/server';
import serialize from 'serialize-javascript';
import { startGame } from '../common/state/modules/board-module/actions/start-game';
import {
  MuiThemeProvider,
  createMuiTheme,
  createGenerateClassName,
} from '@material-ui/core/styles';
import { SheetsRegistry } from 'react-jss/lib/jss';
import JssProvider from 'react-jss/lib/JssProvider';

const assets = require(process.env.RAZZLE_ASSETS_MANIFEST);

const server = express();

server
  .disable('x-powered-by')
  .use(express.static(process.env.RAZZLE_PUBLIC_DIR))
  .get('/*', (req, res) => {
    // Read the counter from the request, if provided
    const params = qs.parse(req.query);

    // Compile an initial state
    const preloadedState = {};

    // Create a new Redux store instance
    const store = configureStore(preloadedState);
    store.dispatch(startGame(100));

    const theme = createMuiTheme({});
    const sheetsManager = new Map();
    const generateClassName = createGenerateClassName();
    const sheetsRegistry = new SheetsRegistry();
    // Render the component to a string
    const markup = renderToString(
      <JssProvider
        registry={sheetsRegistry}
        generateClassName={generateClassName}>
        <MuiThemeProvider theme={theme} sheetsManager={sheetsManager}>
          <Provider store={store}>
            <App />
          </Provider>
        </MuiThemeProvider>
      </JssProvider>
    );
    const css = sheetsRegistry.toString();

    // Grab the initial state from our Redux store
    const finalState = store.getState();

    res.send(`<!doctype html>
    <html lang="">
    <head>
        <meta
  name="viewport"
  content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"/>
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta charSet='utf-8' />
        <title>Open Freecell</title>
        <style id="jss-server-side">${css}</style>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        ${
          assets.client.css
            ? `<link rel="stylesheet" href="${assets.client.css}">`
            : ''
        }
          ${
            process.env.NODE_ENV === 'production'
              ? `<script src="${assets.client.js}" defer></script>`
              : `<script src="${assets.client.js}" defer crossorigin></script>`
          }
    </head>
    <body>
        <div id="root">${markup}</div>
        <script>
          window.__PRELOADED_STATE__ = ${serialize(finalState)}
        </script>
    </body>
</html>`);
  });

export default server;
