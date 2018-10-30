import { GAME_STATUS } from '../../../utils/consts';
import * as boardTypes from '../board-module/types';


interface Payload {
  gameNumber: number
}

interface Action {
  type: string,
  payload: Payload
}

const getInitialState = () => ({
  status: GAME_STATUS.NOT_STARTED,
  number: null,
});

export default (state = getInitialState(), action: Action) => {
  switch (action.type) {
    case boardTypes.START_GAME: {
      const { gameNumber } = action.payload;
      return { ...state, status: GAME_STATUS.STARTED, number: gameNumber };
    }
    default: {
      return state;
    }
  }
};
