import {getGameObj} from "../state/selectors";
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
