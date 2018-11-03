import React from 'react';
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from '../common/state/store/configureStore';
import { App } from '../common/components/index';
import 'typeface-roboto';
import { theme } from '../common/styles';
import { MuiThemeProvider } from '@material-ui/core';

const store = configureStore(window.__PRELOADED_STATE__);

hydrate(
  <MuiThemeProvider theme={theme}>
    <Provider store={store}>
      <App/>
    </Provider>
  </MuiThemeProvider>
  ,
  document.getElementById('root'),
);

if (module.hot) {
  module.hot.accept();
}
