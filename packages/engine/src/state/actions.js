export const MOVE_TO_HOME_CELL = "MOVE_TO_HOME_CELL";
export const MOVE_TO_COLUMN_CELL = "MOVE_TO_COLUMN_CELL";
export const MOVE_TO_FREE_CELL = "MOVE_TO_FREE_CELL";


export const moveToHomeCell = (card, index) => (dispatch) => {
  dispatch({type: MOVE_TO_HOME_CELL, payload: {card, index}})
};
export const moveToColumnCell = (topCard, index) => (dispatch) => {
  console.log("ACTION", topCard, index);
  return dispatch({type: MOVE_TO_COLUMN_CELL, payload: {}})
};

export const moveToFreeCell = (card, index) => {
};



