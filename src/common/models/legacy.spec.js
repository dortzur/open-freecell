import { createGame, createDeck } from './legacy';

describe('legacy', () => {
  it('creates game 100', () => {
    const game = createGame(100);
    expect(game).toMatchSnapshot();
  });
});
