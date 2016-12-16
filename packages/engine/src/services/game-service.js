export const gameToString = (game) => {
  let string = "";
  game.FCS.concat(game.HCS).forEach((cell, index) => {
    if (cell.length == 0) {
      string += "[  ]\t";
    } else {
      string = `[${cell[0].notation}]`
    }
  });
  string += "\n\n";
  let j = 0;
  let emptyCount = 0;
  do {
    let line = "";
    for (let i = 0; i < 8; i++) {
      let card = game.CCS[i][j];
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
