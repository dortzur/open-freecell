import configureStore from "../src/configure-store";

import {createGame} from "../src/creators/game-creator";
const game = createGame(1)
const store = configureStore({game});

// You would import the action from your codebase in a real scenario


import {expect} from 'chai';
import {moveToColumnCell, moveToFreeCell, moveToHomeCell} from '../src/state/module';

describe('actions', () => {
  it('moves card to home cell', () => {
    store.dispatch(moveToHomeCell("AD", 2));
  })

});
