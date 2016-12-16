import {handleActions} from "redux-actions";
import {MOVE_TO_HOME_CELL, MOVE_TO_COLUMN_CELL, MOVE_TO_FREE_CELL} from "./actions";

const initialState = {game: {}};


export default  (state = initialState, action) => {
  const {type, payload}=action;
  switch (type) {
    case MOVE_TO_HOME_CELL: {
      console.log("REDUCER", payload);
      return {...state};
    }
    default:
      return state;

  }
};




