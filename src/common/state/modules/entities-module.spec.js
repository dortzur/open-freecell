import { startGame } from './game-module';
import entitiesReducer from './entities-module';

describe('entities-module', () => {
  it('creates game 100', () => {
    const actionResult = startGame(100);
    expect(entitiesReducer(undefined, actionResult)).toMatchSnapshot();
  });
});
