const invariant = require('invariant');
const CELL_NOTATION = ['a', 'b', 'c', 'd'];
const TABLEAU_NOTATION = ['1', '2', '3', '4', '5', '6', '7', '8'];
const FOUNDATION_NOTATION = ['h'];
const getNotationStruct = (notation, index, value) => ({
  notation,
  index,
  value,
});

const parseNotationLetter = (state, notationLetter) => {
  if (CELL_NOTATION.includes(notationLetter)) {
    const index = CELL_NOTATION.indexOf(notationLetter);
    return getNotationStruct(notationLetter, index, state.cells[index]);
  }
  if (TABLEAU_NOTATION.includes(notationLetter)) {
    const index = TABLEAU_NOTATION.indexOf(notationLetter);
    return getNotationStruct(notationLetter, index, state.tableau[index]);
  } else if (FOUNDATION_NOTATION.includes(notationLetter)) {
    return getNotationStruct(notationLetter, null, state.foundation);
  }
  throw new Error('invalid notation');
};
export const parseNotation = (state, notation) => {
  const source = parseNotationLetter(state, notation[0]);
  const target = parseNotationLetter(state, notation[1]);
  invariant(source.value !== state.foundation, 'invalid notation');

  return { source, target };
};
