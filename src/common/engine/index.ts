import produce from 'immer';
import { Cell, CELL_TYPES, EMPTY_CELL_VALUE, KING_VALUE } from '../utils/consts';
import _ from 'lodash/fp';
import { RANKS } from 'react-playing-cards';
import {
  CELL_NOTATION, Move,
  parseNotation,
  TABLEAU_NOTATION,
} from '../utils/notation-parser';

import { handleCell } from './handle-cell';
import { handleFoundation } from './handle-foundation';
import { handleTableau } from './handle-tableau';
import {
  getSuitFoundation,
  getTopCard,
  isFoundationStackable,
} from './utils';
import { BoardState } from '../state/modules/board-module';

const getMinFoundationValue = (state: BoardState) =>
  state.foundation.reduce((lowestValue, cell) => {
    if (_.isEmpty(cell)) return EMPTY_CELL_VALUE;
    const card = getTopCard(cell);
    return card.value < lowestValue ? card.value : lowestValue;
  }, KING_VALUE);

const shouldCellAutoMove = (state: BoardState, cell: Cell) => {
  if (_.isEmpty(cell)) return false;

  const topCard = getTopCard(cell);
  if (topCard.rank === RANKS.ACE) return true;

  const foundationCell = getSuitFoundation(state, topCard.suit);
  const minValue = getMinFoundationValue(state);

  return !_.isEmpty(foundationCell) &&
    isFoundationStackable(cell, foundationCell) &&
    topCard.value - minValue <= 2;

};

const getAutoMove = (state: BoardState) => {
  let autoMove = state.tableau.reduce(
    (move: Move | null, cell: Cell, index: number) =>
      !move && shouldCellAutoMove(state, cell)
        ? parseNotation(state, `${TABLEAU_NOTATION[index]}h`)
        : move,
    null,
  );

  if (!autoMove) {
    autoMove = state.cell.reduce(
      (move: Move | null, cell: Cell, index: number) =>
        !move && shouldCellAutoMove(state, cell)
          ? parseNotation(state, `${CELL_NOTATION[index]}h`)
          : move,
      null,
    );
  }
  return autoMove || state;
};
export const performAutoMoves = (state: BoardState) => {
  let move = getAutoMove(state);
  while (move !== state) {
    state = performMove(state, <Move>move);
    move = getAutoMove(state);
  }
  return state;
};
const updateState = (state: BoardState, move: Move) =>
  produce(state, (draftState) => {
    if (move.source.type !== CELL_TYPES.FOUNDATION) {
      draftState[move.source.type][move.source.index] = move.source.value;
    }

    if (move.target.type !== CELL_TYPES.FOUNDATION) {
      draftState[move.target.type][move.target.index] = move.target.value;
    }

    return draftState;
  });

export const performMove = (state: BoardState, move: Move) => {
  switch (move.target.type) {
    case CELL_TYPES.CELL:
      handleCell(state, move);
      break;
    case CELL_TYPES.FOUNDATION:
      handleFoundation(state, move);
      break;
    case CELL_TYPES.TABLEAU:
      handleTableau(state, move);
      break;
  }

  return updateState(state, move);
};
