import produce from 'immer';
import * as types from './types';
import { parseNotation } from '../../../utils/notation-parser';
import { performMove } from '../../../engine/index';
import { performAutoMoves } from '../../../engine/index';
import { Cell } from '../../../utils/consts';
import { AnyAction } from 'redux';

export interface BoardState {
  foundation: Array<Cell>
  cell: Array<Cell>,
  tableau: Array<Cell>
}

const getInitialState = (): BoardState => ({
  foundation: [[], [], [], []],
  cell: [[], [], [], []],
  tableau: [[], [], [], [], [], [], [], []],
});

export default (state = getInitialState(), action: AnyAction) => {
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
