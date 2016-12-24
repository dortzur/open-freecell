import {createStore, applyMiddleware, compose} from "redux";
import rootReducer from "./reducers";
import reduxPromise from "redux-promise";
import reduxThunk from "redux-thunk";
import reduxLogger from "redux-logger";

// import {routerMiddleware} from 'react-router-redux'
// import {browserHistory} from "react-router";

const middleware = applyMiddleware(reduxThunk, reduxPromise, /*routerMiddleware(browserHistory)*/);
const enhancer = compose(middleware,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default function configureStore() {
    return createStore(rootReducer, enhancer);
};
