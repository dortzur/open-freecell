import {expect} from 'chai';
import {createDeck, createGameDeck, createGame} from '../src/creators/game-creator';
import {createCard} from '../src/creators/card-creator';

import {getGameObj, getAvailableMovesSimple} from "../src/state/selectors";

describe('game-creator', () => {

  it('prints a game', () => {
    const gameA = createGame(1);
    // console.log(gameA.toString());
  });
  it('creates a deck of cards', () => {
    const deck = createDeck();
    expect(deck[51]).to.deep.eq(createCard("KS"));
  });

  it('creates a game deck according to MS game numbers', () => {

    const deckA = createGameDeck(1);
    const deckB = createGameDeck(617);

    expect(deckA[0].notation).to.eq("JD");
    expect(deckA[51].notation).to.eq("6H");
    expect(deckB[0].notation).to.eq("7D");
    expect(deckB[51].notation).to.eq("4H");
  });
  it('creates a game according to MS game numbers', () => {
    const gameA = getGameObj({game: createGame(1)});
    const gameB = getGameObj({game: createGame(617)});

    expect(gameA.columnCells[0].stack[0].notation).to.eq("JD");
    expect(gameA.columnCells[7].stack[5].notation).to.eq("TC");
    expect(gameB.columnCells[0].stack[0].notation).to.eq("7D");
    expect(gameB.columnCells[7].stack[5].notation).to.eq("QH");

  });
  it('calculates available moves',()=>{
    const game = createGame(1);
    expect(getAvailableMovesSimple({game})).to.eq(4);
  })
});
