import _findIndex from "lodash/findIndex";
export const getFreeCells = ({game}) => game.slice(0, 4);
export const getHomeCells = ({game}) => game.slice(4, 8);
export const getColumnCells = ({game}) => game.slice(8, 16);

export const getGameObj = ({game}) => ({
  freeCells: getFreeCells({game}),
  homeCells: getHomeCells({game}),
  columnCells: getColumnCells({game})
});
export const getStack = ({game}, {cardNotation}) => {
  const cell = game.find((cell) => {
    return cell.stack.filter((card) => card.notation == cardNotation).length > 0;
  });
  const cardIndex = _findIndex(cell.stack, (card) => cardNotation == card.notation);
  const stack = cell.stack.slice(cardIndex, cell.stack.length);
  stack.cell = cell;
  return stack;
};
