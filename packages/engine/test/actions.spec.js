import configureStore from "../src/configure-store";

import {createGame} from "../src/creators/game-creator";
const game = createGame(1);


import {expect} from 'chai';
import {moveToColumnCell, moveToFreeCell, moveToHomeCell} from '../src/state/actions';

describe('actions', () => {
  it('moves an invalid card to home cell', () => {
    const store = configureStore({game});
    store.dispatch(moveToHomeCell("AD", 2));
  });
  it('moves an invalid card to column cell', () => {
    const store = configureStore({game});
    store.dispatch(moveToColumnCell("AD", 2));
    // expect(store.getState().error).to.be.ok;
  });

  it('moves an invalid card to free cell', () => {
    const store = configureStore({game});
    store.dispatch(moveToFreeCell("AD", 2));
    // expect(store.getState().error).to.be.ok;
  });


  it('make valid card moves', () => {
    const store = configureStore({game});
    game.print();
    store.dispatch(moveToFreeCell("TC", 2));
    game.print();
    store.dispatch(moveToColumnCell("7D", 6));
    game.print();
    store.dispatch(moveToColumnCell("6H", 7));
    game.print();
    store.dispatch(moveToColumnCell("6C", 6));
    game.print();
    store.dispatch(moveToColumnCell("7S", 4));
    game.print();
    store.dispatch(moveToColumnCell("8H", 1));
    game.print();
    store.dispatch(moveToColumnCell("3C", 4));
    game.print();
    store.dispatch(moveToColumnCell("2H", 4));
    game.print();
    store.dispatch(moveToFreeCell("3D", 1));
    game.print();
    store.dispatch(moveToFreeCell("2C", 0));
    game.print();
    store.dispatch(moveToHomeCell("AC", 0));
    game.print();
    store.dispatch(moveToHomeCell("AS", 1));
    game.print();
    store.dispatch(moveToHomeCell("2C", 0));
    game.print();
    store.dispatch(moveToHomeCell("2H", 2));
    game.print();
    store.dispatch(moveToFreeCell("8D", 0));
    game.print();
    store.dispatch(moveToColumnCell("3D", 2));
    game.print();
    store.dispatch(moveToFreeCell("3H", 1));
    game.print();
    store.dispatch(moveToColumnCell("5H", 0));
    game.print();
    store.dispatch(moveToColumnCell("4S", 0));
    game.print();

  })


});
