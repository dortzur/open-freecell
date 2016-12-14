import {expect} from 'chai';
import {createDeck} from '../src/creators/game-creator';
import {kingOfClubs} from "./fixtures/cards";

describe('game-creator', () => {

  it('creates a deck of cards', () => {
    const deck = createDeck();
    expect(deck[51]).to.deep.eq(kingOfClubs);


    console.log(deck);
  });

});
