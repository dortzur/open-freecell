import {expect} from 'chai';
import {createDeck, createGameDeck, createGame} from '../src/creators/game-creator';

import {kingOfClubs} from "./fixtures/cards";

describe('game-creator', () => {
  it('prints a game', () => {
    const gameA = createGame(1);
    console.log(gameA.toString());
  });
  it('creates a deck of cards', () => {
    const deck = createDeck();
    expect(deck[51]).to.deep.eq(kingOfClubs);
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
    const gameA = createGame(1);
    const gameB = createGame(617);

    expect(gameA.CCS[0][0].notation).to.eq("JD");
    expect(gameA.CCS[7][5].notation).to.eq("TC");
    expect(gameB.CCS[0][0].notation).to.eq("7D");
    expect(gameB.CCS[7][5].notation).to.eq("QH");

  });

});
