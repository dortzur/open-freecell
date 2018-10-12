export const getCardsCount = (state) =>
  state.foundation
    .concat(state.tableau)
    .concat(state.cell)
    .reduce((count, cell) => count + cell.length, 0);
export const isCardsCountValid = (state) => getCardsCount(state) === 52;
