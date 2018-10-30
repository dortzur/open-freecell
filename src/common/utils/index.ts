import { deck } from './consts';

export const srand = (seed: number) => () => {
  seed = (seed * 214013 + 2531011) & 0x7fffffff;
  return seed >> 16;
};

export const createGameDeck = (gameNumber: number) => {
  const gameDeck = [...deck];
  const rand = srand(gameNumber);
  for (let i = gameDeck.length - 1; i > 0; i--) {
    const r = rand() % (i + 1);
    const card = gameDeck[r];
    gameDeck[r] = gameDeck[i];
    gameDeck[i] = card;
  }
  gameDeck.reverse();
  return gameDeck;
};
