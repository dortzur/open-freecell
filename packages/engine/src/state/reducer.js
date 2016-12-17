import {MOVE_TO_HOME_CELL } from "./actions";
const initialState = {game: []};
export default  (state = initialState, action) => {
  const {type, payload}=action;
  switch (type) {
    case MOVE_TO_HOME_CELL: {
      return {...state};
    }
    default:
      return state;

  }
};




