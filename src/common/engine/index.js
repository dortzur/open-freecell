import produce from 'immer';
import { CELL_TYPES, EMPTY_CELL_VALUE, KING_VALUE } from '../utils/consts';
import _ from 'lodash/fp';
import { RANKS } from 'react-playing-cards';
import {
  CELL_NOTATION,
  parseNotation,
  TABLEAU_NOTATION,
} from '../utils/notation-parser';

const getMinFoundationValue = (state) =>
  state.foundation.reduce((lowestValue, cell) => {
    if (_.isEmpty(cell)) return EMPTY_CELL_VALUE;
    const card = getTopCard(cell);
    return card.value < lowestValue ? card.value : lowestValue;
  }, KING_VALUE);

const shouldCellAutoMove = (state, cell) => {
  if (_.isEmpty(cell)) return false;

  const topCard = getTopCard(cell);
  if (topCard.rank === RANKS.ACE) return true;

  const foundationCell = getSuitFoundation(state, topCard.suit);
  const minValue = getMinFoundationValue(state);

  if (
    !_.isEmpty(foundationCell) &&
    isFoundationStackable(cell, foundationCell) &&
    topCard.value - minValue <= 2
  ) {
    return true;
  }
};

const getAutoMove = (state) => {
  let autoMove = state.tableau.reduce(
    (move, cell, index) =>
      !move && shouldCellAutoMove(state, cell)
        ? parseNotation(state, `${TABLEAU_NOTATION[index]}h`)
        : move,
    null
  );

  if (!autoMove) {
    autoMove = state.cell.reduce(
      (move, cell, index) =>
        !move && shouldCellAutoMove(state, cell)
          ? parseNotation(state, `${CELL_NOTATION[index]}h`)
          : move,
      null
    );
  }
  return autoMove || state;
};
export const performAutoMoves = (state) => {
  let move = getAutoMove(state);
  while (move !== state) {
    state = performMove(state, move);
    move = getAutoMove(state);
  }
  return state;
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

const getMovableCardsCount = (state) => {
  const emptyCells = state.cell.filter(_.isEmpty).length;
  const emptyTableau = state.tableau.filter(_.isEmpty).length;

  return (1 + emptyTableau) * (1 + emptyCells);
};
const areTableauCardsStackable = (sourceCard, targetCard) =>
  areDifferentColor(sourceCard, targetCard) &&
  isDecrementalValueDiff(sourceCard, targetCard);

const areCellsStackable = (sourceCell, targetCell) =>
  areTableauCardsStackable(getBottomCard(sourceCell), getTopCard(targetCell));

const getMovableStack = (state, move) => {
  const sourceCell = [...move.source.value];
  const stack = [sourceCell.pop()];
  const movableCardsCount = getMovableCardsCount(state);
  while (
    sourceCell.length > 0 &&
    areCellsStackable(stack, sourceCell) &&
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
  const stackLength = movableStack.length;

  if (_.isEmpty(target.value)) {
    pushStack(movableStack, target.value);
    popStack(source.value, stackLength);
  } else {
    const targetTopCard = getTopCard(target);
    while (
      movableStack.length > 0 &&
      !areTableauCardsStackable(getBottomCard(movableStack), targetTopCard)
    ) {
      movableStack.shift();
    }
    invariant(movableStack.length > 0, 'illegal move');

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
