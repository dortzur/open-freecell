import { startGame } from './game-module/actions/start-game';
import entitiesReducer from './entities-module';

describe('entities-module', () => {
  let state = null;
  beforeEach(() => {
    const actionResult = startGame(100);
    state = entitiesReducer(undefined, actionResult);
  });
  it('should create game 100', () => {
    expect(state).toMatchSnapshot();
  });
});
