import React from 'react';

import styled from 'styled-components';
import { Cell } from './cell';
import { getCardsGrid } from '../styles';
import { connect } from 'react-redux';
import { Cell as CellType } from '../utils/consts';
import { State } from '../state/modules';

const Count = styled.div`
    font-weight: bold;
    text-align: center;
    margin-bottom: 5px;
`;
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
      {tableau.map((stack, i) => <div key={i}>
        <Count>{i + 1}</Count>
        <Cell key={i} stack={stack}/></div>)}
    </TableauContainer>
  );
}


export default connect((state: State) => ({ tableau: state.board.tableau }))(Tableau);
