import { combineReducers } from 'redux';
import board from './board-module/index';
import game from './game-module/index';

export default combineReducers({ board, game });
