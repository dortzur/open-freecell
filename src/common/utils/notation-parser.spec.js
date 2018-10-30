import { parseNotation } from './notation-parser';
import { startGame } from '../state/modules/board-module/actions/start-game';
import gameReducer from '../state/modules/board-module/index';
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

  it('should parse moves to open cell', function() {
    const resultA = parseNotation(state, '1a');
    expect(resultA.target.index).toEqual(0);
    expect(resultA.target.index).toEqual(0);
    expect(resultA.target).toMatchSnapshot();

    const resultB = parseNotation(state, 'b1');
    expect(resultB.source.index).toEqual(1);
    expect(resultB.target.index).toEqual(0);
    expect(resultB.target).toMatchSnapshot();
  });
});
