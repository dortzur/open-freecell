import _ from 'lodash/fp';

export const getTopCard = (resourceTarget) => {
  if (resourceTarget.value) {
    return resourceTarget.value[resourceTarget.value.length - 1];
  }
  return resourceTarget[resourceTarget.length - 1];
};
export const getSuitFoundation = (state, suit) =>
  state.foundation.reduce((acc, foundationCell) => {
    if (!_.isEmpty(foundationCell) && foundationCell[0].suit === suit) {
      acc = foundationCell;
    } else if (!acc && _.isEmpty(foundationCell)) {
      acc = foundationCell;
    }
    return acc;
  }, null);

export const areSameColor = (cardA, cardB) => cardA.color === cardB.color;

export const isIncrementalValueDiff = (sourceCard, targetCard) =>
  getValueDiff(sourceCard, targetCard) === 1;

export const getValueDiff = (sourceCard, targetCard) =>
  sourceCard.value - targetCard.value;

export const isFoundationStackable = (sourceCell, foundationCell) => {
  const sourceCard = getTopCard(sourceCell);
  const foundationCard = getTopCard(foundationCell);

  return (
    areSameColor(sourceCard, foundationCard) &&
    isIncrementalValueDiff(sourceCard, foundationCard)
  );
};
