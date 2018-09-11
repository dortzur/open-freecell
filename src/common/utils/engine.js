import produce from 'immer';
import { CELL_TYPES } from './consts';
import _ from 'lodash/fp';
const invariant = require('invariant');

const getTopCard = (resourceTarget) =>
  resourceTarget.value[resourceTarget.value.length - 1];

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
  } else if (target.type === CELL_TYPES.FOUNDATION) {
    const card = getTopCard(source);
    console.log('CCC',card)
  } else {
  }

  return updateState(state, move);
};
