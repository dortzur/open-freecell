import gameReducer from './game-module';
import { startGame } from './game-module/actions/start-game';

describe('game-module', () => {
  it('creates game 100', () => {
    const actionResult = startGame(100);
    expect(actionResult).toMatchSnapshot();
    expect(gameReducer(undefined, actionResult)).toMatchSnapshot();
  });
});
