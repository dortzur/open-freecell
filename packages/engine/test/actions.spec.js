import configureStore from "../src/configure-store";

import {createGame} from "../src/creators/game-creator";
const game = createGame(1);
const store = configureStore({game});
// You would import the action from your codebase in a real scenario


import {expect} from 'chai';
import {moveToColumnCell, moveToFreeCell, moveToHomeCell} from '../src/state/actions';

describe('actions', () => {
  it('moves an invalid card to home cell', () => {
    store.dispatch(moveToHomeCell("AD", 2));
  });
  it('moves an invalid card to column cell', () => {
    store.dispatch(moveToColumnCell("AD", 2));
    expect(store.getState().error).to.be.ok;
  });

  it('moves an invalid card to free cell', () => {
    store.dispatch(moveToFreeCell("AD", 2));
    expect(store.getState().error).to.be.ok;
  });

  it('moves a valid card to free cell', () => {
    game.print();
    store.dispatch(moveToFreeCell("TC", 2));
    game.print();
  });

  it('moves a valid card to column cell', () => {
    // console.log(game.toString());
    store.dispatch(moveToColumnCell("AD", 2));
    // expect(store.getState().error).to.be.not.ok;
  })


});
