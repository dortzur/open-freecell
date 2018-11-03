import React from 'react';

import styled from 'styled-components';
import { Cell } from './cell';
import { getCardsGrid } from '../styles';
import { connect } from 'react-redux';
import { Cell as CellType } from '../utils/consts';
import { State } from '../state/modules';

interface Props {
  cells: CellType[]
}


const FreeCellsContainer = styled.div`
  ${getCardsGrid(4)};
`;


export function FreeCells(props: Props) {
  const { cells } = props;
  return (
    <FreeCellsContainer>
      {cells.map((stack, i) => <Cell key={i} stack={stack}/>)}
    </FreeCellsContainer>
  );
}

export default connect((state: State) => ({ cells: state.board.cell }))(FreeCells);
