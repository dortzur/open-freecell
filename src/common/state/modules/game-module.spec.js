import gameReducer from './game-module';
import { startGame } from './game-module/actions/start-game';

describe('game-module', () => {
  let state = null;
  beforeEach(() => {
    const actionResult = startGame(100);
    state = gameReducer(undefined, actionResult);
  });

  it('should create game 100', () => {
    expect(state).toMatchSnapshot();
  });
});
