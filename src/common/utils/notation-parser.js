import { CELL_TYPES } from './consts';
const invariant = require('invariant');
export const CELL_NOTATION = ['a', 'b', 'c', 'd'];
export const TABLEAU_NOTATION = ['1', '2', '3', '4', '5', '6', '7', '8'];
export const FOUNDATION_NOTATION = ['h'];
const getNotationStruct = (notation, index, type, value) => ({
  notation,
  index,
  value,
  type,
});

const parseNotationLetter = (state, notationLetter) => {
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
  } else if (FOUNDATION_NOTATION.includes(notationLetter)) {
    return getNotationStruct(notationLetter, null, CELL_TYPES.FOUNDATION, [
      ...state.foundation,
    ]);
  }
  throw new Error('invalid notation');
};
export const parseNotation = (state, notation) => {
  const source = parseNotationLetter(state, notation[0]);
  const target = parseNotationLetter(state, notation[1]);
  invariant(source.type !== CELL_TYPES.FOUNDATION, 'invalid notation');

  return { source, target };
};
