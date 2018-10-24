import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import styled from 'styled-components';

const FreeCellsContainer = styled.div`
  ${getCardsGrid(4)};
`;
import { Cell } from './cell';
import { getCardsGrid } from '../styles';
@connect((state) => ({ cells: state.board.cell }))
export class FreeCells extends React.PureComponent {
  static propTypes = {};
  static defaultProps = {};
  render() {
    const { cells } = this.props;
    return (
      <FreeCellsContainer>
        {cells.map((stack, i) => <Cell key={i} stack={stack} />)}
      </FreeCellsContainer>
    );
  }
}
