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
const areDifferentColor = (cardA, cardB) => !areSameColor(cardA, cardB);

const getValueDiff = (sourceCard, targetCard) =>
  sourceCard.value - targetCard.value;

const isIncrementalValueDiff = (sourceCard, targetCard) =>
  getValueDiff(sourceCard, targetCard) === 1;

const isDecrementalValueDiff = (sourceCard, targetCard) =>
  getValueDiff(sourceCard, targetCard) === -1;

const isFoundationStackable = (sourceCell, foundationCell) => {
  const sourceCard = getTopCard(sourceCell);
  const foundationCard = getTopCard(foundationCell);

  return (
    areSameColor(sourceCard, foundationCard) &&
    isIncrementalValueDiff(sourceCard, foundationCard)
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
const emptyCellCount = (state) =>
  Object.entries(state)
    .filter(([key, value]) => ['tableau', 'cell'].includes(key))
    .reduce((acc, [key, value]) => (value.length === 0 ? ++acc : acc), 0);

const movableCardsCount = (state) => 1 + emptyCellCount(state);
const areTableauCardsStackable = (sourceCard, targetCard) =>
  areDifferentColor(sourceCard, targetCard) &&
  isDecrementalValueDiff(sourceCard, targetCard);
const getStackableStack = (sourceCell, tableauCell) => {
  sourceCell = [...sourceCell];
  tableauCell = [...tableauCell];

  const topTableauCard = getTopCard(tableauCell);
  const topSourceCard = getTopCard(sourceCell);

  invariant(
    areTableauCardsStackable(topSourceCard, topTableauCard),
    'illegal move'
  );

  const stack = [sourceCell.pop()];
  const movableCardsCount = movableCardsCount(state);

  let canStackMore = true;
  while (
    canStackMore &&
    sourceCell.length > 0 &&
    stack.length < movableCardsCount
  ) {}

  return stack;
};

const handleTableau = (state, move) => {
  const stack = getStackableStack(move.source.value, move.target.source.value);

};

export const performMove = (state, move) => {
  switch (move.target.type) {
    case CELL_TYPES.CELL:
      handleCell(state, move);
      break;
    case CELL_TYPES.FOUNDATION:
      handleFoundation(state, move);
      break;
    case CELL_TYPES.TABLEAU:
      handleTableau(state, move);
      break;
  }

  return updateState(state, move);
};
