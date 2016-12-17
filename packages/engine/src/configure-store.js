import {createStore, applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'
import {errorMiddleware} from './state/middleware'
import createLogger from 'redux-logger'
import rootReducer from './state/reducer';

const loggerMiddleware = createLogger();

export default function configureStore(initialState) {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(
      thunkMiddleware,
      errorMiddleware
      // loggerMiddleware
    )
  )
}
