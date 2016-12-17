import {MOVE_TO_HOME_CELL, MOVE_TO_COLUMN_CELL, MOVE_TO_FREE_CELL} from "./actions";
import {CELL_TYPES} from "../constants";
import _differenceBy from "lodash/differenceBy";
const initialState = {game: []};

const performMove = (game, subStack, cellType, cellIndex) => {
  return game.map((cell) => {
    if (cell.index == cellIndex && cell.type == cellType) {
      cell.stack = cell.stack.concat(subStack);
      return cell;
    }
    if (cell.index == subStack.cell.index && cell.type == subStack.cell.type) {
      cell.stack = _differenceBy(cell.stack, subStack, 'notation');
      return cell;
    }
    return cell;
  });
};

export default  (state = initialState, action) => {
  const {type, payload}=action;
  if (action.error) {
    return state;
  }
  switch (type) {
    case MOVE_TO_HOME_CELL: {
      const {subStack, cellIndex}=payload;
      state.game = performMove(state.game, subStack, CELL_TYPES.HOME_CELL, cellIndex);
      return {...state};
    }
    case MOVE_TO_FREE_CELL: {
      const {subStack, cellIndex}=payload;
      state.game = performMove(state.game, subStack, CELL_TYPES.FREE_CELL, cellIndex);
      return {...state};
    }
    case MOVE_TO_COLUMN_CELL: {
      const {subStack, cellIndex}=payload;
      state.game = performMove(state.game, subStack, CELL_TYPES.COLUMN_CELL, cellIndex);
      return {...state};
    }
    default:
      return state;
  }
};




