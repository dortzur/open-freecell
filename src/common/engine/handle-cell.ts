import _ from 'lodash/fp';
import invariant from 'invariant';
import { Move } from '../utils/notation-parser';


export const handleCell = (state: object, move: Move) => {
  const { source, target } = move;
  invariant(_.isEmpty(target.value), 'cell not empty');
  target.value.push(source.value.pop());
};
