import gameReducer from './game-module';
import { startGame } from './game-module/actions/start-game';
import { performNotationMove } from './game-module/actions/perform-notation-move';

describe('game-module', () => {
  let state = null;
  beforeEach(() => {
    state = gameReducer(undefined, startGame(100));
  });

  it('should perform legal cell moves', () => {
    state = gameReducer(state, performNotationMove('1a'));
    expect(state.tableau[0]).toHaveLength(6);
    expect(state.cell[0]).toHaveLength(1);

    state = expect(() =>
      gameReducer(state, performNotationMove('1a'))
    ).toThrow();
  });

  it('should perform legal foundation moves', () => {
    state = gameReducer(undefined, startGame(106));
    state = gameReducer(state, performNotationMove('2h'));
    state = gameReducer(state, performNotationMove('8h'));
    expect(state.foundation[0][0].id).toEqual('AC');
    expect(state.foundation[1][0].id).toEqual('AH');
    expect(() => gameReducer(state, performNotationMove('2h'))).toThrow();
    //TODO add correct incremental test
  });
});
