import { normalize } from 'normalizr';
import schema from '../../schema';
import produce from 'immer';
import * as types from './types';
import { parseNotation } from '../../../utils/notation-parser';
import { performMove } from '../../../utils/engine';

const initialState = {
  foundation: [[], [], [], []],
  cell: [[], [], [], []],
  tableau: [[], [], [], [], [], [], [], []],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.START_GAME: {
      const { gameDeck } = action.payload;

      state.tableau = produce(state.tableau, (tableau) =>
        gameDeck.reduce((tableau, card, index) => {
          tableau[index % 8].push(card);
          return tableau;
        }, tableau)
      );

      return { ...state };
    }
    case types.PERFORM_NOTATION_MOVE: {
      const { notation } = action.payload;
      const move = parseNotation(state, notation);
      return performMove(state, move);
    }
    default: {
      return state;
    }
  }
};