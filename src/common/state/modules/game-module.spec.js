import gameReducer from './game-module';
import { startGame } from './game-module/actions/start-game';
import { performNotationMove } from './game-module/actions/perform-notation-move';

describe('game-module', () => {
  let state = null;
  beforeEach(() => {
    state = gameReducer(undefined, startGame(100));
  });

  it('should create game 100', () => {
    expect(state).toMatchSnapshot();
  });
  it('should perform legal moves', () => {
    state = gameReducer(state, performNotationMove('1a'));
  });
});
