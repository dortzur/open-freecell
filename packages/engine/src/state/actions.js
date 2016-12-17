export const MOVE_TO_HOME_CELL = "MOVE_TO_HOME_CELL";
export const MOVE_TO_COLUMN_CELL = "MOVE_TO_COLUMN_CELL";
export const MOVE_TO_FREE_CELL = "MOVE_TO_FREE_CELL";
import {getSubStack, getAvailableMovesSimple} from "./selectors";
import {isMovableStack} from "../services/card-stack-service";
export const moveToHomeCell = (cardNotation, index) => (dispatch, getState) => {
};
export const moveToColumnCell = (cardNotation, index) => (dispatch, getState) => {
  const state = getState();
  const subStack = getSubStack(state, {cardNotation});
  const availableMoves = getAvailableMovesSimple(state);
  const isMovable = isMovableStack(subStack, availableMoves);


  if (!isMovable) {
    dispatch({type: MOVE_TO_COLUMN_CELL, payload: new Error("Can't move these cards")})
  }
};

export const moveToFreeCell = (card, index) => {
};

