import _ from 'lodash/fp';
import { RANKS } from 'react-playing-cards';
import invariant from 'invariant';
import { getSuitFoundation, getTopCard, isFoundationStackable } from './utils';
import { Move } from '../utils/notation-parser';
import { BoardState } from '../state/modules/board-module';
import { Card } from '../utils/consts';

export const handleFoundation = (state: BoardState, move: Move) => {
  const { source } = move;
  const card = getTopCard(source.value);
  const foundationCell = move.target.value;

  if (_.isEmpty(foundationCell)) {
    invariant(card.rank === RANKS.ACE, 'illegal move');
    move.target.value = [...foundationCell, <Card>source.value.pop()];
  } else {
    invariant(isFoundationStackable(source.value, foundationCell), 'illegal move');
    move.target.value = [...foundationCell, <Card>source.value.pop()];
  }

};
