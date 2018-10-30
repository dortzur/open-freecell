import { combineReducers } from 'redux';
import board from './board-module/index';
import game from './game-module';

export default combineReducers({ board, game });
