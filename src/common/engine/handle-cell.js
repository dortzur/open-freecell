import _ from 'lodash/fp';
import invariant from 'invariant';

export const handleCell = (state, move) => {
  const { source, target } = move;
  invariant(_.isEmpty(target.value), 'cell not empty');
  target.value.push(source.value.pop());
};
