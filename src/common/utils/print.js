import produce from 'immer';

const toSimpleCards = (cell) => cell.map((card) => (card ? card.id : card));

const toSimpleState = (state) =>
  produce(state, (draftState) =>
    Object.entries(draftState).reduce((acc, [key, value]) => {
      acc[key] = value.map(toSimpleCards);
      return acc;
    }, {})
  );

export const print = (state) => console.log(toSimpleState(state));
