import {createStore, applyMiddleware, compose} from "redux";
import reduxPromise from "redux-promise";
import reduxThunk from "redux-thunk";
import reduxLogger from "redux-logger";
import {reducer } from "open-freecell-engine"

// import {routerMiddleware} from 'react-router-redux'
// import {browserHistory} from "react-router";

const middleware = applyMiddleware(reduxThunk, reduxPromise, /*routerMiddleware(browserHistory)*/);
const enhancer = compose(middleware);
export default function configureStore() {
    return createStore(reducer, enhancer);
};
