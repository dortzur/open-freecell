export const areCardsStackable = (topCard, bottomCard) => {
  return (topCard.value - bottomCard.value == -1) && (topCard.color !== bottomCard.color);
};
