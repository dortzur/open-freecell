import produce from 'immer';
import { CELL_TYPES } from './consts';
import _ from 'lodash/fp';
import { RANKS } from 'react-playing-cards';
import { parseNotation } from './notation-parser';

const performAutoMove = (state) => {
  let autoMove = state.tableau.reduce((move, cells) => {
    if (move) return move;
    return move;
  }, null);

  if (!autoMove) {
    autoMove = state.cell.reduce((move, cells) => {
      if (move) return move;
      return move;
    }, null);
  }

  return autoMove || state;
};
export const performAutoMoves = (state) => {
  return performAutoMove(state);
};
const invariant = require('invariant');

const getTopCard = (resourceTarget) => {
  if (resourceTarget.value) {
    return resourceTarget.value[resourceTarget.value.length - 1];
  }
  return resourceTarget[resourceTarget.length - 1];
};
const getBottomCard = (resourceTarget) => {
  if (resourceTarget.value) {
    return resourceTarget.value[0];
  }
  return resourceTarget[0];
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
    .filter(([key]) => ['tableau', 'cell'].includes(key))
    .reduce((acc, [key, value]) => {
      acc += value.reduce((acc, cell) => (cell.length === 0 ? ++acc : acc), 0);
      return acc;
    }, 0);

const getMovableCardsCount = (state) => 1 + emptyCellCount(state);
const areTableauCardsStackable = (sourceCard, targetCard) =>
  areDifferentColor(sourceCard, targetCard) &&
  isDecrementalValueDiff(sourceCard, targetCard);

const areTopCardsStackable = (sourceCell, targetCell) =>
  areTableauCardsStackable(getTopCard(sourceCell), getTopCard(targetCell));

const getMovableStack = (state, move) => {
  const sourceCell = [...move.source.value];
  const stack = [sourceCell.pop()];
  const movableCardsCount = getMovableCardsCount(state);

  while (
    sourceCell.length > 0 &&
    areTopCardsStackable(stack, sourceCell) &&
    stack.length < movableCardsCount
  ) {
    stack.unshift(sourceCell.pop());
  }

  return stack;
};
const pushStack = (stack, targetTableauCell) => {
  while (stack.length > 0) {
    targetTableauCell.push(stack.shift());
  }
};

const popStack = (cell, count) => {
  for (let i = 0; i < count; i++) {
    cell.pop();
  }
};

const handleTableau = (state, move) => {
  const movableStack = getMovableStack(state, move);
  const { target, source } = move;

  if (_.isEmpty(target.value)) {
    pushStack(movableStack, target.value);
  } else {
    const targetTopCard = getTopCard(target);
    while (
      movableStack.length > 0 &&
      !areTableauCardsStackable(getBottomCard(movableStack), targetTopCard)
    ) {
      movableStack.shift();
    }
    invariant(movableStack.length > 0, 'illegal move');

    const stackLength = movableStack.length;
    pushStack(movableStack, target.value);
    popStack(source.value, stackLength);
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
    case CELL_TYPES.TABLEAU:
      handleTableau(state, move);
      break;
  }

  return updateState(state, move);
};
