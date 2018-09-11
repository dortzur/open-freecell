import produce from 'immer';
import { CELL_TYPES } from './consts';
import _ from 'lodash/fp';
const invariant = require('invariant');

const updateState = (state, move) =>
  produce(state, (draftState) => {
    draftState[move.source.type][move.source.index] = move.source.value;
    draftState[move.target.type][move.target.index] = move.target.value;
    return draftState;
  });
export const performMove = (state, move) => {
  const { source, target } = move;
  if (target.type === CELL_TYPES.CELL) {
    invariant(_.isEmpty(target.value), 'cell not empty');
    target.value.push(source.value.pop());
    return updateState(state, move);
  }
};
