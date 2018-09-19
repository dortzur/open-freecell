import produce from 'immer';
import { CELL_TYPES } from './consts';
import _ from 'lodash/fp';
import { RANKS } from 'react-playing-cards';
const invariant = require('invariant');

const getTopCard = (resourceTarget) => {
  if (resourceTarget.value) {
    return resourceTarget.value[resourceTarget.value.length - 1];
  }
  return resourceTarget[resourceTarget.length - 1];
};

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
const areSameColor = (cardA, cardB) => cardA.color === cardB.color;
const areIncrementalValue = (sourceCard, foundationCard) =>
  sourceCard.value - foundationCard.value === 1;

const isFoundationStackable = (sourceCell, foundationCell) => {
  const sourceCard = getTopCard(sourceCell);
  const foundationCard = getTopCard(foundationCell);

  return (
    areSameColor(sourceCard, foundationCard) &&
    areIncrementalValue(sourceCard, foundationCard)
  );
};

const handleCell = (state, move) => {
  const { source, target } = move;
  invariant(_.isEmpty(target.value), 'cell not empty');
  target.value.push(source.value.pop());
};
const handleFoundation = (state, move) => {
  const { source } = move;
  const card = getTopCard(source);
  const foundationCell = getSuitFoundation(state, card.suit);

  if (_.isEmpty(foundationCell)) {
    invariant(card.rank === RANKS.ACE, 'illegal move');
    foundationCell.push(source.value.pop());
  } else {
    invariant(isFoundationStackable(source, foundationCell), 'illegal move');
    foundationCell.push(source.value.pop());
  }
};
export const performMove = (state, move) => {
  switch (move.target.type) {
    case CELL_TYPES.CELL:
      handleCell(state, move);
      break;
    case CELL_TYPES.FOUNDATION:
      handleFoundation(state, move);
      break;
  }

  return updateState(state, move);
};
