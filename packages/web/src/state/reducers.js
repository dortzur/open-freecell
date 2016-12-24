import {combineReducers} from "redux";
// import {routerReducer} from 'react-router-redux'
// import {reducer as reduxAsyncConnect} from 'redux-connect'
import {reducer as engineReducer} from "open-freecell-engine"

export default combineReducers({
    engine: engineReducer
});
