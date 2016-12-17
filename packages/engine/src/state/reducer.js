import {MOVE_TO_HOME_CELL, MOVE_TO_FREE_CELL} from "./actions";
const initialState = {game: []};
export default  (state = initialState, action) => {
  const {type, payload}=action;
  if (action.error) {
    return {...state, error: action};
  } else {
    if (state.error) {
      delete state.error;
    }
  }
  switch (type) {
    case MOVE_TO_HOME_CELL: {
      return {...state};
    }
    case MOVE_TO_FREE_CELL: {
      return {...state};
    }
    default:
      return state;
  }
};




