import { srand } from '../../utils';
import { deck } from '../../models/deck';
import { normalize } from 'normalizr';
import schema from '../schema';

export const START_GAME = 'START_GAME';

export default (state = {}, action) => {
  switch (action.type) {
    case START_GAME: {
      const data = normalize({ deck: action.payload.gameDeck }, schema);
      return { ...state, deck: data.result.deck };
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
