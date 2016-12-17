import {createStore, applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import rootReducer from './state/module';

const loggerMiddleware = createLogger();

export default function configureStore(initialState) {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(
      thunkMiddleware,
      // loggerMiddleware
    )
  )
}
