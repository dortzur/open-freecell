import { startGame } from '../state/modules/game-module/actions/start-game';
import gameReducer from '../state/modules/game-module';
import { performNotationMove } from '../state/modules/game-module/actions/perform-notation-move';
describe('engine', () => {
  let state = null;
  beforeEach(() => {
    state = gameReducer(undefined, startGame(100));
  });
  it('should perform legal cell moves', () => {
    state = gameReducer(state, performNotationMove('1a'));
    expect(state.tableau[0]).toHaveLength(6);
    expect(state.cell[0]).toHaveLength(1);

    state = expect(() => gameReducer(state, performNotationMove('1a'))).toThrow();
  });
});
