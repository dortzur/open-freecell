import _ from 'lodash';
export const getCardsCount = (state) =>
  state.foundation
    .concat(state.tableau)
    .concat(state.cell)
    .reduce((count, cell) => count + cell.length, 0);
export const isCardsCountValid = (state) => getCardsCount(state) === 52;

const emptyTableauCount = (state) => state.tableau.filter(_.isEmpty).length;
const emptyCellCount = (state) => state.cell.filter(_.isEmpty).length;

export const isGameFinished = (state) =>
  emptyCellCount(state) + emptyTableauCount(state) ===
  state.tableau.length + state.cell.length;
