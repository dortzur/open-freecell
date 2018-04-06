import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../modules';
import { composeWithDevTools } from 'redux-devtools-extension';

const configureStore = (preloadedState) => {
  const store = createStore(
    rootReducer,
    preloadedState,
    composeWithDevTools(applyMiddleware(thunk))
  );

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../modules', () => {
      const nextRootReducer = require('../modules').default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
};

export default configureStore;
