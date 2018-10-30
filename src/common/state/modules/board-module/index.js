import produce from 'immer';
import * as types from './types';
import { parseNotation } from '../../../utils/notation-parser';
import { performMove } from '../../../engine';
import { performAutoMoves } from '../../../engine';

const getInitialState = () => ({
  foundation: [[], [], [], []],
  cell: [[], [], [], []],
  tableau: [[], [], [], [], [], [], [], []],
});

export default (state = getInitialState(), action) => {
  switch (action.type) {
    case types.START_GAME: {

      const { gameDeck } = action.payload;
      const deck = [...gameDeck];
      state.tableau = produce(state.tableau, (tableau) =>
        deck.reduce((tableau, card, index) => {
          tableau[index % 8].push(card);
          return tableau;
        }, tableau),
      );

      return { ...state };
    }
    case types.PERFORM_NOTATION_MOVE: {
      const { notation } = action.payload;
      const move = parseNotation(state, notation);
      return performAutoMoves(performMove(state, move));
    }

    default: {
      return state;
    }
  }
};
