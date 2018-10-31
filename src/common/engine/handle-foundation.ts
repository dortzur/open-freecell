import _ from 'lodash/fp';
import { RANKS } from 'react-playing-cards';
import invariant from 'invariant';
import { getSuitFoundation, getTopCard, isFoundationStackable } from './utils';
import { Move } from '../utils/notation-parser';
import { BoardState } from '../state/modules/board-module';

export const handleFoundation = (state: BoardState, move: Move) => {
  const { source } = move;
  const card = getTopCard(source);
  const foundationCell = getSuitFoundation(state, card.suit);

  if (_.isEmpty(foundationCell)) {
    invariant(card.rank === RANKS.ACE, 'illegal move');
    foundationCell.push(source.value.pop());
  } else {
    invariant(isFoundationStackable(source, foundationCell), 'illegal move');
    foundationCell.push(source.value.pop());
  }
};
