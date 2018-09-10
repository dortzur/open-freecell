import { srand } from '../../utils';
import { deck } from '../../models/deck';
import { normalize } from 'normalizr';
import schema from '../schema';
import produce from 'immer';
import _ from 'lodash/fp';
export const START_GAME = 'START_GAME';
const initialState = {
  foundations: [[], [], [], []],
  cells: [[], [], [], []],
  tableau: [[], [], [], [], [], [], [], []],
};

export default (state = initialState , action) => {
  switch (action.type) {
    case START_GAME: {
      const data = normalize({ deck: action.payload.gameDeck }, schema);
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
  const gameDeck = [...deck];
  const rand = srand(gameNumber);
  for (let i = gameDeck.length - 1; i > 0; i--) {
    const r = rand() % (i + 1);
    const card = gameDeck[r];
    gameDeck[r] = gameDeck[i];
    gameDeck[i] = card;
  }
  gameDeck.reverse();
  return { type: START_GAME, payload: { gameDeck } };
};

const getCard = (state, id) => state.entities.cards[id];
