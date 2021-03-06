import * as types from '../types';
import { createGameDeck } from '../../../../utils';

export const startGame = (gameNumber: number) => {
  const gameDeck = createGameDeck(gameNumber);
  return {
    type: types.START_GAME,
    payload: { gameDeck, gameNumber },
  };
};
