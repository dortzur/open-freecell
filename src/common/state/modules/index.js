import { combineReducers } from 'redux';
import entities from './entities-module';
import game from './game-module';

export default combineReducers({ entities, game });
