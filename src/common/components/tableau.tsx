import React from 'react';

import styled from 'styled-components';
import { Cell } from './cell';
import { getCardsGrid } from '../styles';
import { connect } from 'react-redux';
import { Cell as CellType } from '../utils/consts';
import { State } from '../state/modules';

const TableauContainer = styled.div`
  ${getCardsGrid(8)};
`;

interface Props {
  tableau: CellType[]
}

export function Tableau(props: Props) {
  const { tableau } = props;

  return (
    <TableauContainer>
      {tableau.map((stack, i) => <Cell key={i} stack={stack}/>)}
    </TableauContainer>
  );
}


export default connect((state: State) => ({ tableau: state.board.tableau }))(Tableau);
