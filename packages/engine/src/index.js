export {moveToColumnCell, moveToFreeCell, moveToHomeCell, newGame} from "./state/actions"
export reducer from "./state/reducer"
export {getGameObj, getHomeCells, getFreeCells, getColumnCells} from "./state/selectors";
export {printGame, gameToString} from "./services/print-service";
