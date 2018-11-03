import { combineReducers } from 'redux';
import board, { BoardState } from './board-module/index';
import game from './game-module/index';

export interface State {
  board: BoardState
}

export default combineReducers({ board, game });
