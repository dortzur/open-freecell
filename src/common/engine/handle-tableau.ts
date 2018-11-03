import _ from 'lodash/fp';
import { areSameColor, getBottomCard, getTopCard, getValueDiff } from './utils';
import invariant from 'invariant';
import { Card, Cell } from '../utils/consts';
import { BoardState } from '../state/modules/board-module';
import { Move } from '../utils/notation-parser';

const pushStack = (stack: Cell, targetTableauCell: Cell) => {
  while (stack.length > 0) {
    targetTableauCell.push(<Card>stack.shift());
  }
};

const popStack = (cell: Cell, count: number) => {
  for (let i = 0; i < count; i++) {
    cell.pop();
  }
};


export const areDifferentColor = (cardA: Card, cardB: Card) => !areSameColor(cardA, cardB);
const getMovableCardsCount = (state: BoardState) => {
  const emptyCells = state.cell.filter(_.isEmpty).length;
  const emptyTableau = state.tableau.filter(_.isEmpty).length;

  return (1 + emptyTableau) * (1 + emptyCells);
};
export const isDecrementalValueDiff = (sourceCard: Card, targetCard: Card) =>
  getValueDiff(sourceCard, targetCard) === -1;

const areTableauCardsStackable = (sourceCard: Card, targetCard: Card) =>
  areDifferentColor(sourceCard, targetCard) &&
  isDecrementalValueDiff(sourceCard, targetCard);

const areCellsStackable = (sourceCell: Cell, targetCell: Cell) =>
  areTableauCardsStackable(getBottomCard(sourceCell), getTopCard(targetCell));

const getMovableStack = (state: BoardState, move: Move) => {
  const sourceCell = [...move.source.value];
  const stack = [<Card>sourceCell.pop()];
  const movableCardsCount = getMovableCardsCount(state);
  while (
    sourceCell.length > 0 &&
    areCellsStackable(stack, sourceCell) &&
    stack.length < movableCardsCount
    ) {
    stack.unshift(<Card>sourceCell.pop());
  }
  return stack;
};

export const handleTableau = (state: BoardState, move: Move) => {
  const movableStack = getMovableStack(state, move);
  const { target, source } = move;
  const stackLength = movableStack.length;

  if (_.isEmpty(target.value)) {
    pushStack(movableStack, target.value);
    popStack(source.value, stackLength);
  } else {
    const targetTopCard = getTopCard(target.value);
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
