import React from 'react';

import styled from 'styled-components';
import { Cell } from './cell';
import { getCardsGrid } from '../styles/index';
import { connect } from 'react-redux';

const FreeCellsContainer = styled.div`
  ${getCardsGrid(4)};
`;


export function FreeCells(props) {
  const { cells } = props;
  return (
    <FreeCellsContainer>
      {cells.map((stack, i) => <Cell key={i} stack={stack}/>)}
    </FreeCellsContainer>
  );
}

export default connect((state) => ({ cells: state.board.cell }))(FreeCells);

FreeCells.propTypes = {};

FreeCells.defaultProps = {};
