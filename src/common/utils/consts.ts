export enum CELL_TYPES {
  CELL = 'cell',
  FOUNDATION = 'foundation',
  TABLEAU = 'tableau',
}

export const EMPTY_CELL_VALUE = 0;
export const KING_VALUE = 13;

export interface Card {
  suit: string,
  rank: string,
  value: number,
  color: string,
  id: string
}

export type Cell = Array<Card>;

export const deck: Cell = [
  { suit: 'C', rank: 'A', value: 1, color: 'black', id: 'AC' },
  { suit: 'D', rank: 'A', value: 1, color: 'red', id: 'AD' },
  { suit: 'H', rank: 'A', value: 1, color: 'red', id: 'AH' },
  { suit: 'S', rank: 'A', value: 1, color: 'black', id: 'AS' },
  { suit: 'C', rank: '2', value: 2, color: 'black', id: '2C' },
  { suit: 'D', rank: '2', value: 2, color: 'red', id: '2D' },
  { suit: 'H', rank: '2', value: 2, color: 'red', id: '2H' },
  { suit: 'S', rank: '2', value: 2, color: 'black', id: '2S' },
  { suit: 'C', rank: '3', value: 3, color: 'black', id: '3C' },
  { suit: 'D', rank: '3', value: 3, color: 'red', id: '3D' },
  { suit: 'H', rank: '3', value: 3, color: 'red', id: '3H' },
  { suit: 'S', rank: '3', value: 3, color: 'black', id: '3S' },
  { suit: 'C', rank: '4', value: 4, color: 'black', id: '4C' },
  { suit: 'D', rank: '4', value: 4, color: 'red', id: '4D' },
  { suit: 'H', rank: '4', value: 4, color: 'red', id: '4H' },
  { suit: 'S', rank: '4', value: 4, color: 'black', id: '4S' },
  { suit: 'C', rank: '5', value: 5, color: 'black', id: '5C' },
  { suit: 'D', rank: '5', value: 5, color: 'red', id: '5D' },
  { suit: 'H', rank: '5', value: 5, color: 'red', id: '5H' },
  { suit: 'S', rank: '5', value: 5, color: 'black', id: '5S' },
  { suit: 'C', rank: '6', value: 6, color: 'black', id: '6C' },
  { suit: 'D', rank: '6', value: 6, color: 'red', id: '6D' },
  { suit: 'H', rank: '6', value: 6, color: 'red', id: '6H' },
  { suit: 'S', rank: '6', value: 6, color: 'black', id: '6S' },
  { suit: 'C', rank: '7', value: 7, color: 'black', id: '7C' },
  { suit: 'D', rank: '7', value: 7, color: 'red', id: '7D' },
  { suit: 'H', rank: '7', value: 7, color: 'red', id: '7H' },
  { suit: 'S', rank: '7', value: 7, color: 'black', id: '7S' },
  { suit: 'C', rank: '8', value: 8, color: 'black', id: '8C' },
  { suit: 'D', rank: '8', value: 8, color: 'red', id: '8D' },
  { suit: 'H', rank: '8', value: 8, color: 'red', id: '8H' },
  { suit: 'S', rank: '8', value: 8, color: 'black', id: '8S' },
  { suit: 'C', rank: '9', value: 9, color: 'black', id: '9C' },
  { suit: 'D', rank: '9', value: 9, color: 'red', id: '9D' },
  { suit: 'H', rank: '9', value: 9, color: 'red', id: '9H' },
  { suit: 'S', rank: '9', value: 9, color: 'black', id: '9S' },
  { suit: 'C', rank: 'T', value: 10, color: 'black', id: 'TC' },
  { suit: 'D', rank: 'T', value: 10, color: 'red', id: 'TD' },
  { suit: 'H', rank: 'T', value: 10, color: 'red', id: 'TH' },
  { suit: 'S', rank: 'T', value: 10, color: 'black', id: 'TS' },
  { suit: 'C', rank: 'J', value: 11, color: 'black', id: 'JC' },
  { suit: 'D', rank: 'J', value: 11, color: 'red', id: 'JD' },
  { suit: 'H', rank: 'J', value: 11, color: 'red', id: 'JH' },
  { suit: 'S', rank: 'J', value: 11, color: 'black', id: 'JS' },
  { suit: 'C', rank: 'Q', value: 12, color: 'black', id: 'QC' },
  { suit: 'D', rank: 'Q', value: 12, color: 'red', id: 'QD' },
  { suit: 'H', rank: 'Q', value: 12, color: 'red', id: 'QH' },
  { suit: 'S', rank: 'Q', value: 12, color: 'black', id: 'QS' },
  { suit: 'C', rank: 'K', value: 13, color: 'black', id: 'KC' },
  { suit: 'D', rank: 'K', value: 13, color: 'red', id: 'KD' },
  { suit: 'H', rank: 'K', value: 13, color: 'red', id: 'KH' },
  { suit: 'S', rank: 'K', value: 13, color: 'black', id: 'KS' },
];

export enum GAME_STATUS {
  NOT_STARTED = 'not-started',
  STARTED = 'started',
  FINISHED = 'finished',
}
