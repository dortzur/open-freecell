export const MOVE_TO_HOME_CELL = "MOVE_TO_HOME_CELL";
export const MOVE_TO_COLUMN_CELL = "MOVE_TO_COLUMN_CELL";
export const MOVE_TO_FREE_CELL = "MOVE_TO_FREE_CELL";
export const MOVE_ERROR = "MOVER_ERROR";
import {getSubStack, getAvailableMovesSimple, isCellEmpty, canStackColumnCell, canMoveToHomeCell} from "./selectors";
import {isMovableStack} from "../services/card-stack-service";
import {CELL_TYPES} from "../constants";
export const moveToHomeCell = (cardNotation, cellIndex) => (dispatch, getState) => {
  const state = getState();
  const subStack = getSubStack(state, {cardNotation});

  const canMove = canMoveToHomeCell(state, {stack: subStack, homeCellIndex: cellIndex});
  if (canMove) {
    return dispatch({type: MOVE_TO_HOME_CELL, payload: {subStack, cellIndex}})
  }
  return dispatch({type: MOVE_ERROR, payload: new Error("Can't move to home cell")});
};

export const moveToColumnCell = (cardNotation, cellIndex) => (dispatch, getState) => {
  const state = getState();
  const subStack = getSubStack(state, {cardNotation});
  const availableMoves = getAvailableMovesSimple(state);
  const isMovable = isMovableStack(subStack, availableMoves);


  if (!isMovable) {
    return dispatch({type: MOVE_ERROR, payload: new Error("Can't move these cards")});
  }
  if (!canStackColumnCell(state, {stack: subStack, columnCellIndex: cellIndex})) {
    return dispatch({type: MOVE_ERROR, payload: new Error("Can't stack column")});
  }
  return dispatch({type: MOVE_TO_COLUMN_CELL, payload: {subStack, cellIndex}})

};

export const moveToFreeCell = (cardNotation, cellIndex) => (dispatch, getState) => {
  const state = getState();

  const isEmpty = isCellEmpty(state, {cellType: CELL_TYPES.FREE_CELL, cellIndex});
  if (!isEmpty) {
    return dispatch({type: MOVE_ERROR, payload: new Error("Free cell not empty")});
  }
  const subStack = getSubStack(state, {cardNotation});
  if (subStack.length > 1) {
    return dispatch({type: MOVE_ERROR, payload: new Error("Can only move one card to free cell")});
  }

  return dispatch({type: MOVE_TO_FREE_CELL, payload: {subStack, cellIndex}});

};

