const getCardValue = (rank) => {
  switch (rank) {
    case "A":
      return 1;
    case "T":
      return 10;
    case "J":
      return 11;
    case "Q":
      return 12;
    case "K":
      return 13;
    default:
      return Number.parseInt(rank);
  }

};
const getCardColor = (suit) => {
  if (suit == "D" || suit == "H") return "red";
  return "black";
};
export const createCard = (notation) => {

  const suit = notation[1];
  const rank = notation[0];
  const value = getCardValue(rank);
  const color = getCardColor(suit);

  return {
    suit, rank, value, color, notation
  };
};

