import { startGame } from './game-module/actions/start-game';
import entitiesReducer from './entities-module';

describe('entities-module', () => {
  it('creates game 100', () => {
    const actionResult = startGame(100);
    expect(entitiesReducer(undefined, actionResult)).toMatchSnapshot();
  });
});
