import {CELL_TYPES} from "../constants";
import {createGameDeck} from "./deck-creator";
import {gameToString, printGame} from "../services/print-service";
import _times from "lodash/times";


const createCell = (cellType, index) => ({type: cellType, index, stack: []});
export const createGame = (gameNumber) => {
  const deck = createGameDeck(gameNumber);
  const FCS = _times(4, (index) => createCell(CELL_TYPES.FREE_CELL, index));
  const HCS = _times(4, (index) => createCell(CELL_TYPES.HOME_CELL, index));
  const CCS = _times(8, (index) => createCell(CELL_TYPES.COLUMN_CELL, index));


  for (let i = 0; i < deck.length; i++) {
    CCS[i % 8].stack.push(deck[i]);
  }
  const game = FCS.concat(HCS).concat(CCS);
  game.toString = gameToString.bind(this, game);
  game.print = printGame.bind(this, game);
  return game;
};
