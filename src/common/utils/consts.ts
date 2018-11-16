import { RANKS, SUITS } from 'react-playing-cards';

export enum CELL_TYPES {
  CELL = 'cell',
  FOUNDATION = 'foundation',
  TABLEAU = 'tableau',
}

export const EMPTY_CELL_VALUE = 0;
export const KING_VALUE = 13;

export interface Card {
  suit: SUITS,
  rank: RANKS,
  value: number,
  color: string,
  id: string
}


export type Cell = Card[];

export const deck: Card[] = [
  { suit: SUITS.CLUBS, rank: RANKS.ACE, value: 1, color: 'black', id: 'AC' },
  { suit: SUITS.DIAMONDS, rank: RANKS.ACE, value: 1, color: 'red', id: 'AD' },
  { suit: SUITS.HEARTS, rank: RANKS.ACE, value: 1, color: 'red', id: 'AH' },
  { suit: SUITS.SPADES, rank: RANKS.ACE, value: 1, color: 'black', id: 'AS' },
  { suit: SUITS.CLUBS, rank: RANKS.TWO, value: 2, color: 'black', id: '2C' },
  { suit: SUITS.DIAMONDS, rank: RANKS.TWO, value: 2, color: 'red', id: '2D' },
  { suit: SUITS.HEARTS, rank: RANKS.TWO, value: 2, color: 'red', id: '2H' },
  { suit: SUITS.SPADES, rank: RANKS.TWO, value: 2, color: 'black', id: '2S' },
  { suit: SUITS.CLUBS, rank: RANKS.THREE, value: 3, color: 'black', id: '3C' },
  { suit: SUITS.DIAMONDS, rank: RANKS.THREE, value: 3, color: 'red', id: '3D' },
  { suit: SUITS.HEARTS, rank: RANKS.THREE, value: 3, color: 'red', id: '3H' },
  { suit: SUITS.SPADES, rank: RANKS.THREE, value: 3, color: 'black', id: '3S' },
  { suit: SUITS.CLUBS, rank: RANKS.FOUR, value: 4, color: 'black', id: '4C' },
  { suit: SUITS.DIAMONDS, rank: RANKS.FOUR, value: 4, color: 'red', id: '4D' },
  { suit: SUITS.HEARTS, rank: RANKS.FOUR, value: 4, color: 'red', id: '4H' },
  { suit: SUITS.SPADES, rank: RANKS.FOUR, value: 4, color: 'black', id: '4S' },
  { suit: SUITS.CLUBS, rank: RANKS.FIVE, value: 5, color: 'black', id: '5C' },
  { suit: SUITS.DIAMONDS, rank: RANKS.FIVE, value: 5, color: 'red', id: '5D' },
  { suit: SUITS.HEARTS, rank: RANKS.FIVE, value: 5, color: 'red', id: '5H' },
  { suit: SUITS.SPADES, rank: RANKS.FIVE, value: 5, color: 'black', id: '5S' },
  { suit: SUITS.CLUBS, rank: RANKS.SIX, value: 6, color: 'black', id: '6C' },
  { suit: SUITS.DIAMONDS, rank: RANKS.SIX, value: 6, color: 'red', id: '6D' },
  { suit: SUITS.HEARTS, rank: RANKS.SIX, value: 6, color: 'red', id: '6H' },
  { suit: SUITS.SPADES, rank: RANKS.SIX, value: 6, color: 'black', id: '6S' },
  { suit: SUITS.CLUBS, rank: RANKS.SEVEN, value: 7, color: 'black', id: '7C' },
  { suit: SUITS.DIAMONDS, rank: RANKS.SEVEN, value: 7, color: 'red', id: '7D' },
  { suit: SUITS.HEARTS, rank: RANKS.SEVEN, value: 7, color: 'red', id: '7H' },
  { suit: SUITS.SPADES, rank: RANKS.SEVEN, value: 7, color: 'black', id: '7S' },
  { suit: SUITS.CLUBS, rank: RANKS.EIGHT, value: 8, color: 'black', id: '8C' },
  { suit: SUITS.DIAMONDS, rank: RANKS.EIGHT, value: 8, color: 'red', id: '8D' },
  { suit: SUITS.HEARTS, rank: RANKS.EIGHT, value: 8, color: 'red', id: '8H' },
  { suit: SUITS.SPADES, rank: RANKS.EIGHT, value: 8, color: 'black', id: '8S' },
  { suit: SUITS.CLUBS, rank: RANKS.NINE, value: 9, color: 'black', id: '9C' },
  { suit: SUITS.DIAMONDS, rank: RANKS.NINE, value: 9, color: 'red', id: '9D' },
  { suit: SUITS.HEARTS, rank: RANKS.NINE, value: 9, color: 'red', id: '9H' },
  { suit: SUITS.SPADES, rank: RANKS.NINE, value: 9, color: 'black', id: '9S' },
  { suit: SUITS.CLUBS, rank: RANKS.TEN, value: 10, color: 'black', id: 'TC' },
  { suit: SUITS.DIAMONDS, rank: RANKS.TEN, value: 10, color: 'red', id: 'TD' },
  { suit: SUITS.HEARTS, rank: RANKS.TEN, value: 10, color: 'red', id: 'TH' },
  { suit: SUITS.SPADES, rank: RANKS.TEN, value: 10, color: 'black', id: 'TS' },
  { suit: SUITS.CLUBS, rank: RANKS.JACK, value: 11, color: 'black', id: 'JC' },
  { suit: SUITS.DIAMONDS, rank: RANKS.JACK, value: 11, color: 'red', id: 'JD' },
  { suit: SUITS.HEARTS, rank: RANKS.JACK, value: 11, color: 'red', id: 'JH' },
  { suit: SUITS.SPADES, rank: RANKS.JACK, value: 11, color: 'black', id: 'JS' },
  { suit: SUITS.CLUBS, rank: RANKS.QUEEN, value: 12, color: 'black', id: 'QC' },
  { suit: SUITS.DIAMONDS, rank: RANKS.QUEEN, value: 12, color: 'red', id: 'QD' },
  { suit: SUITS.HEARTS, rank: RANKS.QUEEN, value: 12, color: 'red', id: 'QH' },
  { suit: SUITS.SPADES, rank: RANKS.QUEEN, value: 12, color: 'black', id: 'QS' },
  { suit: SUITS.CLUBS, rank: RANKS.KING, value: 13, color: 'black', id: 'KC' },
  { suit: SUITS.DIAMONDS, rank: RANKS.KING, value: 13, color: 'red', id: 'KD' },
  { suit: SUITS.HEARTS, rank: RANKS.KING, value: 13, color: 'red', id: 'KH' },
  { suit: SUITS.SPADES, rank: RANKS.KING, value: 13, color: 'black', id: 'KS' },
];

export enum GAME_STATUS {
  NOT_STARTED = 'not-started',
  STARTED = 'started',
  FINISHED = 'finished',
}
