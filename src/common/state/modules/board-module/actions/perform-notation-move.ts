import * as types from '../types';

export const performNotationMove = (notation: string) => ({
  type: types.PERFORM_NOTATION_MOVE,
  payload: { notation },
});
