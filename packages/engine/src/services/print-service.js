import {getGameObj} from "../state/selectors";
const colors = require('colors');
export const gameToString = (game) => {
  const gameObj = getGameObj({game});
  let string = "\n\n";
  string += cellsToString(gameObj.freeCells, {singleLine: true});
  string += cellsToString(gameObj.homeCells, {padding: true});
  string += "\n\n";
  string += cellsToString(gameObj.columnCells);
  return string;
};
function cellsToString(cells, options = {}) {
  let string = "";
  let j = 0;
  const length = cells.length;
  let emptyCount = 0;
  do {
    let line = "";
    for (let i = 0; i < length; i++) {
      let card = cells[i].stack[j];
      if (card == undefined || card.length == 0) {
        line += "[  ]\t".green;
        emptyCount++;
      } else {
        line += `[${card.notation}]\t`.bgWhite[card.color];
      }
    }
    j++;
    if (!options.singleLine) {
      line += "\n";
    }
    if (options.padding) {
      line += "\t\t\t\t\t\t\t\t"
    }
    if (emptyCount < length || string.length == 0) {
      emptyCount = 0;
      string += line;
      line = "";
    }
  } while (emptyCount < length);
  return string;
}
export const printGame = (game) => console.log(gameToString(game));
