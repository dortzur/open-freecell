import { START_GAME } from './game-module';
import { normalize } from 'normalizr';
import schema from '../schema';
import { createGameDeck } from '../../utils';
export default (state = {}, action) => {
  switch (action.type) {
    case START_GAME: {
      const { gameDeck } = action.payload;
      const data = normalize({ deck: gameDeck }, schema);
      return { ...state, cards: data.entities.cards };
    }
    default: {
      return state;
    }
  }
};
