import { START_GAME } from './game-module';
import normalizr from 'normalizr';

export default (state = {}, action) => {
  switch (action.type) {
    case START_GAME: {
    }
    default: {
      return state;
    }
  }
};
