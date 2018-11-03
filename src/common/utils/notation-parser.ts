import { Cell, CELL_TYPES } from './consts';
import { BoardState } from '../state/modules/board-module';
import { getBottomCard, getSuitFoundation } from '../engine/utils';

const invariant = require('invariant');
export const CELL_NOTATION = ['a', 'b', 'c', 'd'];
export const TABLEAU_NOTATION = ['1', '2', '3', '4', '5', '6', '7', '8'];
export const FOUNDATION_NOTATION = ['h'];

export interface NotationStruct {
  notation: string,
  index: number,
  type: CELL_TYPES,
  value: Cell
}

const getNotationStruct = (notation: string, index: number, type: CELL_TYPES, value: Cell): NotationStruct => ({
  notation,
  index,
  value,
  type,
});


export interface Move {
  source: NotationStruct,
  target: NotationStruct
}

const parseNotationLetter = (state: BoardState, notationLetter: string, suit?: string): NotationStruct => {
  if (CELL_NOTATION.includes(notationLetter)) {
    const index = CELL_NOTATION.indexOf(notationLetter);
    return getNotationStruct(notationLetter, index, CELL_TYPES.CELL, [
      ...state.cell[index],
    ]);
  }
  if (TABLEAU_NOTATION.includes(notationLetter)) {
    const index = TABLEAU_NOTATION.indexOf(notationLetter);
    return getNotationStruct(notationLetter, index, CELL_TYPES.TABLEAU, [
      ...state.tableau[index],
    ]);
  } else if (FOUNDATION_NOTATION.includes(notationLetter) && suit) {
    const foundationCell = getSuitFoundation(state, suit);
    const index = state.foundation.indexOf(foundationCell);
    return getNotationStruct(notationLetter, index, CELL_TYPES.FOUNDATION, foundationCell);
  }
  throw new Error('invalid notation');
};

export const parseNotation = (state: BoardState, notation: string): Move => {
  const source = parseNotationLetter(state, notation[0]);

  const bottomCard = getBottomCard(source.value);
  const target = parseNotationLetter(state, notation[1], bottomCard && bottomCard.suit);
  invariant(source.type !== CELL_TYPES.FOUNDATION, 'invalid notation');

  return { source, target };
};



