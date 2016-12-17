const MOVE_TO_HOME_CELL = "MOVE_TO_HOME_CELL";
const MOVE_TO_COLUMN_CELL = "MOVE_TO_COLUMN_CELL";
const MOVE_TO_FREE_CELL = "MOVE_TO_FREE_CELL";
import {getStack} from "./selectors";

export const moveToHomeCell = (cardNotation, index) => (dispatch, getState) => {
  const state = getState();
  const stack = getStack(state, {cardNotation});

  // dispatch({type: MOVE_TO_HOME_CELL, payload: {card, index}});
};
export const moveToColumnCell = (topCard, index) => (dispatch) => {
  console.log("ACTION", topCard, index);
  return dispatch({type: MOVE_TO_COLUMN_CELL, payload: {}})
};

export const moveToFreeCell = (card, index) => {
};


const initialState = {game: {}};
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




