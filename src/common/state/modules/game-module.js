import { srand } from '../../utils';
import { deck } from '../../models/deck';
import normalizr from 'normalizr';
export const START_GAME = 'START_GAME';

export const startGame = (gameNumber) => {
  const gameDeck = { ...deck };
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

export default (state = {}, action) => {
  switch (action.type) {
    case START_GAME:{


    }
    default:{
      return state;
    }
  }

};
