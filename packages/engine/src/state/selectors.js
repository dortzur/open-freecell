export const getAllCells = ({game}) => game.FCS.concat(game.HCS).concat(game.CCS);
export const getStack = ({game}, {cardNotation}) => {
  const result = getAllCells({game}).find((cell) => {
    return cell.filter((card) => card.notation == cardNotation).length > 0;
  });
  console.log(result);

};
