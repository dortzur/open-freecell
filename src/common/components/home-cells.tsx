import React from 'react';

import styled from 'styled-components';
import { Cell } from './cell';
import { getCardsGrid } from '../styles';
import { connect } from 'react-redux';
import { State } from '../state/modules';
import { Cell as CellType } from '../utils/consts';

const HomeCellsContainer = styled.div`
  ${getCardsGrid(4)};
`;

interface Props {
  foundation: CellType[]
}

export function HomeCells(props: Props) {
  const { foundation } = props;

  return (
    <HomeCellsContainer>
      {foundation.map((stack, i) => <Cell key={i} stack={stack}/>)}
    </HomeCellsContainer>
  );
}

export default connect((state: State) => ({ foundation: state.board.foundation }))(HomeCells);
