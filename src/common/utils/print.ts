import produce from 'immer';
import { SUITS } from 'react-playing-cards';
import { Card, Cell } from './consts';
import { BoardState } from '../state/modules/board-module';

const getSuitTextSymbol = (card: Card) => {
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
  return null;
};
const toSimpleCards = (cell: Cell) =>
  cell.map((card) => `${getSuitTextSymbol(card)}${card.id}`);

const toSimpleState = (state: object) =>
  produce(state, (draftState) =>
    Object.entries(draftState).reduce((acc, [key, value]) => {
      acc[key] = value.map(toSimpleCards);
      return acc;
    }, {}),
  );

export const print = (state: BoardState) => {
  console.log(toSimpleState(state));
};
