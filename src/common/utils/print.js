import produce from 'immer';
import chalk from 'chalk';
import { SUITS } from 'react-playing-cards';

const getSuitTextSymbol = (card) => {
  switch (card.suit) {
    case SUITS.CLUBS:
      return '♣';
    case SUITS.HEARTS:
      return '♥';
    case SUITS.DIAMONDS:
      return '♦';
    case SUITS.SPADES:
      return '♠';
  }
};
const toSimpleCards = (cell) =>
  cell.map((card) => `${getSuitTextSymbol(card)}${card.id}`);

const toSimpleState = (state) =>
  produce(state, (draftState) =>
    Object.entries(draftState).reduce((acc, [key, value]) => {
      acc[key] = value.map(toSimpleCards);
      return acc;
    }, {})
  );

export const print = (state) => {
  console.log(toSimpleState(state));
};
