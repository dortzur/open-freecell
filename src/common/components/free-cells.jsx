import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import styled from 'styled-components';
import { Cell } from './cell';
import { getCardsGrid } from '../styles/index';

const FreeCellsContainer = styled.div`
  ${getCardsGrid(4)};
`;

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
