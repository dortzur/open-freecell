import {expect} from 'chai';
import {createDeck, createGameDeck} from '../src/creators/game-creator';
import {kingOfClubs} from "./fixtures/cards";

describe('game-creator', () => {

  it('creates a deck of cards', () => {
    const deck = createDeck();
    expect(deck[51]).to.deep.eq(kingOfClubs);
  });

  it('creates a game deck according to MS game numbers', () => {

    let deck = createGameDeck(1);
    expect(deck[0].notation).to.eq("JD");
    expect(deck[51].notation).to.eq("6H");

    deck = createGameDeck(617);
    expect(deck[0].notation).to.eq("7D");
    expect(deck[51].notation).to.eq("4H");
  })
});
