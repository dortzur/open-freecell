
import gameReducer, {startGame} from './game-module';

describe('legacy', () => {
  it('creates game 100', () => {

    const actionResult = startGame(100);
    expect(actionResult).toMatchSnapshot();
    expect(gameReducer(undefined, actionResult)).toMatchSnapshot();


  });
});
