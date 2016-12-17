import {expect} from "chai";
import {kingOfSpades, jackOfSpades, queenOfHearts, tenOfDiamonds} from "./fixtures/cards";
import {areCardsStackable} from "../src/services/card-service";
import {createCard} from "../src/creators/card-creator";

describe("cards", () => {
  it("creates cards properly", () => {
    expect(createCard("KS")).to.deep.equal(kingOfSpades);
    expect(createCard("JS")).to.deep.equal(jackOfSpades);
    expect(createCard("QH")).to.deep.equal(queenOfHearts);
    expect(createCard("TD")).to.deep.equal(tenOfDiamonds);
  });

  it('stack cards properly', () => {
    expect(areCardsStackable(tenOfDiamonds, jackOfSpades)).to.be.true;
    expect(areCardsStackable(queenOfHearts, kingOfSpades)).to.be.true;
    expect(areCardsStackable(jackOfSpades, tenOfDiamonds)).to.be.false;
    expect(areCardsStackable(jackOfSpades, kingOfSpades)).to.be.false;
    expect(areCardsStackable(kingOfSpades, queenOfHearts)).to.be.false;
    expect(areCardsStackable(kingOfSpades, tenOfDiamonds)).to.be.false;
    expect(areCardsStackable(queenOfHearts, tenOfDiamonds)).to.be.false;
  });

});
