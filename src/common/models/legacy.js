import _times from 'lodash/times';
import { srand } from '../utils';

export const SUITS = ['C', 'D', 'H', 'S'];
export const RANKS = [
  'A',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  'T',
  'J',
  'Q',
  'K',
];
export const CELL_TYPES = {
  HOME_CELL: 'HOME_CELL',
  FREE_CELL: 'FREE_CELL',
  COLUMN_CELL: 'COLUMN_CELL',
};
const getCardValue = (rank) => {
  switch (rank) {
    case 'A':
      return 1;
    case 'T':
      return 10;
    case 'J':
      return 11;
    case 'Q':
      return 12;
    case 'K':
      return 13;
    default:
      return Number.parseInt(rank);
  }
};
const getCardColor = (suit) => {
  if (suit === 'D' || suit === 'H') return 'red';
  return 'black';
};
export const createCard = (notation) => {
  const suit = notation[1];
  const rank = notation[0];
  const value = getCardValue(rank);
  const color = getCardColor(suit);

  return {
    suit,
    rank,
    value,
    color,
    notation,
  };
};

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

export const createGameDeck = (gameNumber) => {
  let deck = createDeck();
  const rand = srand(gameNumber);
  for (let i = deck.length - 1; i > 0; i--) {
    const r = rand() % (i + 1);
    const card = deck[r];
    deck[r] = deck[i];
    deck[i] = card;
  }
  return deck.reverse();
};

const createCell = (cellType, index) => ({ type: cellType, index, stack: [] });
export const createGame = (gameNumber) => {
  const deck = createGameDeck(gameNumber);
  const FCS = _times(4, (index) => createCell(CELL_TYPES.FREE_CELL, index));
  const HCS = _times(4, (index) => createCell(CELL_TYPES.HOME_CELL, index));
  const CCS = _times(8, (index) => createCell(CELL_TYPES.COLUMN_CELL, index));

  for (let i = 0; i < deck.length; i++) {
    CCS[i % 8].stack.push(deck[i]);
  }
  const game = FCS.concat(HCS).concat(CCS);
  return game;
};
