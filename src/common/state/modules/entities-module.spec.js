import { startGame } from './game-module/actions/start-game';
import entitiesReducer from './entities-module';

describe('entities-module', () => {
  let state = null;
  beforeEach(() => {
    state = entitiesReducer(undefined, startGame(100));
  });
  it('should create game 100', () => {
    expect(state).toMatchSnapshot();
  });
});
