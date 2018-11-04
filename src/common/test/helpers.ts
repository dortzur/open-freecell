import _ from 'lodash';
import { BoardState } from '../state/modules/board-module';

export const getCardsCount = (state: BoardState) =>
  state.foundation
    .concat(state.tableau)
    .concat(state.cell)
    .reduce((count, cell) => count + cell.length, 0);
export const isCardsCountValid = (state: BoardState) => getCardsCount(state) === 52;

const emptyTableauCount = (state: BoardState) => state.tableau.filter(_.isEmpty).length;
const emptyCellCount = (state: BoardState) => state.cell.filter(_.isEmpty).length;

export const isGameFinished = (state: BoardState) =>
  emptyCellCount(state) + emptyTableauCount(state) ===
  state.tableau.length + state.cell.length;
