import _ from 'lodash/fp';
import { areSameColor, getTopCard, getValueDiff } from './utils';
import invariant from 'invariant';
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

export const getBottomCard = (resourceTarget) => {
  if (resourceTarget.value) {
    return resourceTarget.value[0];
  }
  return resourceTarget[0];
};
export const areDifferentColor = (cardA, cardB) => !areSameColor(cardA, cardB);
const getMovableCardsCount = (state) => {
  const emptyCells = state.cell.filter(_.isEmpty).length;
  const emptyTableau = state.tableau.filter(_.isEmpty).length;

  return (1 + emptyTableau) * (1 + emptyCells);
};
export const isDecrementalValueDiff = (sourceCard, targetCard) =>
  getValueDiff(sourceCard, targetCard) === -1;

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

export const handleTableau = (state, move) => {
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
