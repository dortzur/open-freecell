import produce from 'immer';
import { CELL_TYPES } from './consts';
import _ from 'lodash/fp';
import { RANKS } from 'react-playing-cards';
const invariant = require('invariant');

const getTopCard = (resourceTarget) =>
  resourceTarget.value[resourceTarget.value.length - 1];

const updateState = (state, move) =>
  produce(state, (draftState) => {
    if (move.source.type !== CELL_TYPES.FOUNDATION) {
      draftState[move.source.type][move.source.index] = move.source.value;
    }

    if (move.target.type !== CELL_TYPES.FOUNDATION) {
      draftState[move.target.type][move.target.index] = move.target.value;
    }

    return draftState;
  });

const getSuitFoundation = (state, suit) =>
  state.foundation.reduce((acc, foundationCell) => {
    if (!_.isEmpty(foundationCell) && foundationCell[0].suit === suit) {
      acc = foundationCell;
    } else if (!acc && _.isEmpty(foundationCell)) {
      acc = foundationCell;
    }
    return acc;
  }, null);

export const performMove = (state, move) => {
  const { source, target } = move;
  if (target.type === CELL_TYPES.CELL) {
    invariant(_.isEmpty(target.value), 'cell not empty');
    target.value.push(source.value.pop());
  } else if (target.type === CELL_TYPES.FOUNDATION) {
    const card = getTopCard(source);
    const foundationCell = getSuitFoundation(state, card.suit);
    if (_.isEmpty(foundationCell) && card.rank !== RANKS.ACE) {
      throw new Error('illegal move');
    }
    if (card.rank === RANKS.ACE) {
      foundationCell.push(source.value.pop());
    } else {
    //  TODO handle case of incremental card
    }
  }
  return updateState(state, move);
};
