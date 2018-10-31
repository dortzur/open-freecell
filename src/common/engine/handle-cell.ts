import _ from 'lodash/fp';
import invariant from 'invariant';
import { Move } from '../utils/notation-parser';
import { BoardState } from '../state/modules/board-module';


export const handleCell = (state: BoardState, move: Move) => {
  const { source, target } = move;
  invariant(_.isEmpty(target.value), 'cell not empty');
  target.value.push(source.value.pop());
};
