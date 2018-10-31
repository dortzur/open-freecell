import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../modules/index';
import { composeWithDevTools } from 'redux-devtools-extension';


const configureStore = (preloadedState: object) => {
  const store = createStore(
    rootReducer,
    preloadedState,
    composeWithDevTools(applyMiddleware(thunk)),
  );

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../modules', () => {
      const nextRootReducer = require('../modules/index').default;
      store.replaceReducer(nextRootReducer);
    });
  }
  if (global.window) {
    window.__DEV_STORE__ = store;
  }
  return store;
};

export default configureStore;
