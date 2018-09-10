import { parseNotation } from './notation-parser';
import { startGame } from '../state/modules/game-module/actions/start-game';
import gameReducer from '../state/modules/game-module';
describe('notation-parser', () => {
  let state = null;
  beforeAll(() => {
    state = gameReducer(undefined, startGame(100));
  });

  it('should parse moves to home', function() {
    const result = parseNotation(state, '1h');
    expect(result.source.index).toEqual(0);
    expect(result.source).toMatchSnapshot();

    expect(result.target.index).toEqual(null);
    expect(result.target.value).toBeArray();
    expect(result.target).toMatchSnapshot();
    expect(() => parseNotation(state, 'h1')).toThrow();
  });

  it('should parse moves between tableau cells', function() {
    const result = parseNotation(state, '18');
    expect(result.source.index).toEqual(0);
    expect(result.source).toMatchSnapshot();
    expect(result.target.index).toEqual(7);
    expect(result.target).toMatchSnapshot();
  });
});
