import {CELL_TYPES} from "../constants";
import {createGameDeck} from "./deck-creator";

import _times from "lodash/times";
import {getGameObj} from "../state/selectors";


const createCell = (cellType, cardStack = []) => ({type: cellType, stack: cardStack});
export const gameToString = (game) => {
  const gameObj = getGameObj({game});
  let string = "\n\n";
  gameObj.freeCells.concat(gameObj.homeCells).forEach((cell) => {
    if (cell.stack.length == 0) {
      string += "[  ]\t";
    } else {
      string = `[${cell.stack[0].notation}]\t`
    }
  });
  string += "\n\n";
  let j = 0;
  let emptyCount = 0;
  do {
    let line = "";
    for (let i = 0; i < 8; i++) {
      let card = gameObj.columnCells[i].stack[j];
      if (card == undefined || card.length == 0) {
        line += "[  ]\t";
        emptyCount++;
      } else {
        line += `[${card.notation}]\t`
      }
    }
    j++;
    line += "\n";
    if (emptyCount < 8) {
      emptyCount = 0;
      string += line;
      line = "";
    }
  } while (emptyCount < 8);
  return string;
};
export const printGame = (game) => console.log(gameToString(game));
export const createGame = (gameNumber) => {
  const deck = createGameDeck(gameNumber);
  const FCS = _times(4, () => createCell(CELL_TYPES.FREE_CELL));
  const HCS = _times(4, () => createCell(CELL_TYPES.HOME_CELL));
  const CCS = _times(8, () => createCell(CELL_TYPES.COLUMN_CELL));


  for (let i = 0; i < deck.length; i++) {
    CCS[i % 8].stack.push(deck[i]);
  }
  const game = FCS.concat(HCS).concat(CCS);
  game.toString = gameToString.bind(this, game);
  game.print = printGame.bind(this, game);
  return game;
};
