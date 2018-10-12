import gameReducer from './';
import { startGame } from './actions/start-game';
import { performNotationMove } from './actions/perform-notation-move';
import { print } from '../../../utils/print';
import { isCardsCountValid, isGameFinished } from '../../../test/helpers';
describe('board-module', () => {
  let state = null;
  beforeEach(() => {
    state = gameReducer(undefined, startGame(100));
  });

  it('should perform legal cell moves', () => {
    state = gameReducer(state, performNotationMove('1a'));
    expect(state.tableau[0]).toHaveLength(6);
    expect(state.cell[0]).toHaveLength(1);

    expect(isCardsCountValid(state)).toBeTrue();
    state = expect(() =>
      gameReducer(state, performNotationMove('1a'))
    ).toThrow();
  });

  it('should perform legal foundation moves', () => {
    state = gameReducer(undefined, startGame(106));
    state = gameReducer(state, performNotationMove('7a'));
    state = gameReducer(state, performNotationMove('7b'));
    state = gameReducer(state, performNotationMove('7c'));
    state = gameReducer(state, performNotationMove('7d'));
    expect(state.tableau[0]).toHaveLength(7);
    expect(state.foundation[0][0].id).toEqual('AC');
    expect(state.foundation[1][0].id).toEqual('AH');
    expect(state.foundation[1][1].id).toEqual('2H');
    expect(() => gameReducer(state, performNotationMove('2h'))).toThrow();
    expect(() => gameReducer(state, performNotationMove('7h'))).toThrow();

    expect(isCardsCountValid(state)).toBeTrue();
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
    expect(state.tableau[5][2].id).toEqual('6H');
    expect(state.tableau[0][7].id).toEqual('7H');
    expect(state.tableau[3][6].id).toEqual('5S');
    expect(isCardsCountValid(state)).toBeTrue();
  });
  it('should perform auto moves', () => {
    state = gameReducer(state, performNotationMove('63'));
    state = gameReducer(state, performNotationMove('8a'));
    state = gameReducer(state, performNotationMove('86'));
    state = gameReducer(state, performNotationMove('72'));
    state = gameReducer(state, performNotationMove('81'));
    state = gameReducer(state, performNotationMove('6b'));
    state = gameReducer(state, performNotationMove('6c'));
    expect(state.foundation[0][1].id).toEqual('2S');
    expect(state.foundation[1][0].id).toEqual('AH');
    expect(isCardsCountValid(state)).toBeTrue();
  });

  it('should run full game 100', () => {
    state = gameReducer(state, performNotationMove('72'));
    state = gameReducer(state, performNotationMove('7a'));
    state = gameReducer(state, performNotationMove('17'));
    state = gameReducer(state, performNotationMove('57'));
    state = gameReducer(state, performNotationMove('75'));
    state = gameReducer(state, performNotationMove('1h'));
    state = gameReducer(state, performNotationMove('15'));
    state = gameReducer(state, performNotationMove('17'));
    state = gameReducer(state, performNotationMove('1b'));
    state = gameReducer(state, performNotationMove('71'));
    state = gameReducer(state, performNotationMove('71'));
    state = gameReducer(state, performNotationMove('51'));
    state = gameReducer(state, performNotationMove('8c'));
    state = gameReducer(state, performNotationMove('27'));
    state = gameReducer(state, performNotationMove('8d'));
    state = gameReducer(state, performNotationMove('63'));
    state = gameReducer(state, performNotationMove('6h'));
    expect(state.cell[2]).toBeEmpty();
    state = gameReducer(state, performNotationMove('46'));
    state = gameReducer(state, performNotationMove('4c'));
    state = gameReducer(state, performNotationMove('58'));
    state = gameReducer(state, performNotationMove('48'));
    state = gameReducer(state, performNotationMove('58'));
    state = gameReducer(state, performNotationMove('68'));
    state = gameReducer(state, performNotationMove('c4'));
    state = gameReducer(state, performNotationMove('d4'));
    state = gameReducer(state, performNotationMove('35'));
    state = gameReducer(state, performNotationMove('3c'));
    state = gameReducer(state, performNotationMove('37'));
    state = gameReducer(state, performNotationMove('34'));
    state = gameReducer(state, performNotationMove('3d'));
    state = gameReducer(state, performNotationMove('63'));
    state = gameReducer(state, performNotationMove('2a'));

    expect(isGameFinished(state)).toBeTrue();

    expect(isCardsCountValid(state)).toBeTrue();
  });
});
