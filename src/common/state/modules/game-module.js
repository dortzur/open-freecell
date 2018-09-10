import { normalize } from 'normalizr';
import schema from '../schema';
import produce from 'immer';
import _ from 'lodash/fp';
import { createGameDeck } from '../../utils';
export const START_GAME = 'START_GAME';
const initialState = {
  foundations: [[], [], [], []],
  cells: [[], [], [], []],
  tableau: [[], [], [], [], [], [], [], []],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case START_GAME: {
      const { gameDeck } = action.payload;

      const data = normalize({ deck: gameDeck }, schema);
      const deck = data.result.deck;

      state.tableau = produce(state.tableau, (tableau) =>
        deck.reduce((tableau, card, index) => {
          tableau[index % 8].push(card);
          return tableau;
        }, tableau)
      );

      return { ...state };
    }
    default: {
      return state;
    }
  }
};

export const startGame = (gameNumber) => {
  const gameDeck = createGameDeck(gameNumber);
  return {
    type: START_GAME,
    payload: { gameDeck },
  };
};

const getCard = (state, id) => state.entities.cards[id];
