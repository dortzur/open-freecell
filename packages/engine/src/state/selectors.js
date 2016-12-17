import _findIndex from "lodash/findIndex";
import {CELL_TYPES} from "../constants";
import {areStacksStackable, canStackHomeCell} from "../services/card-stack-service"
export const getFreeCells = ({game}) => game.slice(0, 4);
export const getHomeCells = ({game}) => game.slice(4, 8);
export const getColumnCells = ({game}) => game.slice(8, 16);

export const getGameObj = ({game}) => ({
  freeCells: getFreeCells({game}),
  homeCells: getHomeCells({game}),
  columnCells: getColumnCells({game})
});
export const getSubStack = ({game}, {cardNotation}) => {
  const cell = game.find((cell) => {
    return cell.stack.filter((card) => card.notation == cardNotation).length > 0;
  });
  const cardIndex = _findIndex(cell.stack, (card) => cardNotation == card.notation);
  const stack = cell.stack.slice(cardIndex, cell.stack.length);
  stack.cell = cell;
  return stack;
};
export const getAvailableMovesSimple = ({game}) => {
  return getFreeCells({game}).concat(getColumnCells({game}))
    .filter((cell) => cell.stack.length == 0).length+1;
};

export const getCell =
  ({game}, {cellType, cellIndex}) => game.find((cell) => cell.type == cellType && cell.index == cellIndex);

export const isCellEmpty =
  ({game}, {cellType, cellIndex}) => getCell({game}, {cellType, cellIndex}).stack.length == 0;

export const canStackColumnCell = ({game}, {stack, columnCellIndex}) => {
  const columnCell = getCell({game}, {cellType: CELL_TYPES.COLUMN_CELL, cellIndex: columnCellIndex})
  return areStacksStackable(stack, columnCell.stack)
};
export const canMoveToHomeCell = ({game}, {stack, homeCellIndex}) => {
  const homeCell = getCell({game}, {cellType: CELL_TYPES.HOME_CELL, cellIndex: homeCellIndex})
  if(stack.length!==1) {
    return false;
  }
  const card = stack[0];

  return canStackHomeCell(card, homeCell.stack);
};
