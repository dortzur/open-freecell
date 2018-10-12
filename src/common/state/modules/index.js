import { combineReducers } from 'redux';
import board from './board-module';
import game from './game-module';

export default combineReducers({ board, game });
