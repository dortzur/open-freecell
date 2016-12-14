import {RANKS, SUITS} from "../constants";
import {createCard} from "./card-creator";
export const createDeck = () => {
  const deck = [];
  for (let i = 0; i < 13; i++) {
    for (let j = 0; j < 4; j++) {
      const card = createCard(RANKS[i] + SUITS[j]);
      deck.push(card);
    }
  }
  return deck;
};

export const createGame = (gameNumber) => {

};
