import * as types from '../types';
export const performMove = (notation) => ({
  type: types.PERFORM_MOVE,
  payload: { notation },
});
