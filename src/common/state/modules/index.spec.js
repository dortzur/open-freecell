import gameReducer from './game-module';
import { startGame } from './game-module/actions/start-game';
import { performNotationMove } from './game-module/actions/perform-notation-move';
import { print } from '../../utils/print';
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

    state = gameReducer(state, performNotationMove('7a'));
    state = gameReducer(state, performNotationMove('7b'));
    state = gameReducer(state, performNotationMove('7c'));
    state = gameReducer(state, performNotationMove('7d'));
    state = gameReducer(state, performNotationMove('7h'));
    expect(state.tableau[0]).toHaveLength(7);
    expect(state.foundation[0][0].id).toEqual('AC');
    expect(state.foundation[1][0].id).toEqual('AH');
    expect(state.foundation[1][1].id).toEqual('2H');
    expect(() => gameReducer(state, performNotationMove('2h'))).toThrow();
    expect(() => gameReducer(state, performNotationMove('7h'))).toThrow();
  });

  it('should perform legal tableau moves', () => {
    state = gameReducer(state, performNotationMove('63'));
    state = gameReducer(state, performNotationMove('8a'));
    state = gameReducer(state, performNotationMove('86'));
    state = gameReducer(state, performNotationMove('72'));

    expect(() => gameReducer(state, performNotationMove('63'))).toThrow();
    state = gameReducer(state, performNotationMove('81'));

    state = gameReducer(state, performNotationMove('1b'));
    state = gameReducer(state, performNotationMove('2c'));
    state = gameReducer(state, performNotationMove('2d'));
    expect(() => gameReducer(state, performNotationMove('67'))).toThrow();
    state = gameReducer(state, performNotationMove('b1'));
    state = gameReducer(state, performNotationMove('67'));
    expect(state.tableau[6][6].id).toEqual('3H');
    expect(state.tableau[5][3].id).toEqual('2S');
    expect(state.tableau[0][7].id).toEqual('7H');
    expect(state.tableau[3][6].id).toEqual('5S');
  });
  it('should perform auto moves', () => {
    state = gameReducer(state, performNotationMove('63'));
    state = gameReducer(state, performNotationMove('8a'));
    state = gameReducer(state, performNotationMove('86'));
    state = gameReducer(state, performNotationMove('72'));
    state = gameReducer(state, performNotationMove('81'));
    // state = gameReducer(state, performNotationMove('81'));


    print(state);
  });
});
