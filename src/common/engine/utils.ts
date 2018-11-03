import _ from 'lodash/fp';
import { Card, Cell } from '../utils/consts';
import { BoardState } from '../state/modules/board-module';


export const getTopCard = (resourceTarget: Cell): Card =>
  resourceTarget[resourceTarget.length - 1];

export const getBottomCard = (resourceTarget: Cell) => resourceTarget[0];

export const getSuitFoundation = (state: BoardState, suit: string): Cell =>
  <Cell>state.foundation.reduce((acc: null | Cell, foundationCell): Cell => {
    if (!_.isEmpty(foundationCell) && foundationCell[0].suit === suit) {
      acc = foundationCell;
    } else if (!acc && _.isEmpty(foundationCell)) {
      acc = foundationCell;
    }
    return <Cell>acc;
  }, null);

export const areSameColor = (cardA: Card, cardB: Card) => cardA.color === cardB.color;

export const isIncrementalValueDiff = (sourceCard: Card, targetCard: Card) =>
  getValueDiff(sourceCard, targetCard) === 1;

export const getValueDiff = (sourceCard: Card, targetCard: Card) =>
  sourceCard.value - targetCard.value;

export const isFoundationStackable = (sourceCell: Cell, foundationCell: Cell) => {
  const sourceCard = getTopCard(sourceCell);
  const foundationCard = getTopCard(foundationCell);

  return (
    areSameColor(sourceCard, foundationCard) &&
    isIncrementalValueDiff(sourceCard, foundationCard)
  );
};
