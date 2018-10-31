import { GAME_STATUS } from '../../../utils/consts';
import * as boardTypes from '../board-module/types';
import { AnyAction } from 'redux';

const getInitialState = () => ({
  status: GAME_STATUS.NOT_STARTED,
  number: null,
});


export default (state = getInitialState(), action: AnyAction) => {
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

