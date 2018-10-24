import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import styled from 'styled-components';

const HomeCellsContainer = styled.div`
  ${getCardsGrid(4)};
`;
import { Cell } from './cell';
import { getCardsGrid } from '../styles';
@connect((state) => ({ foundation: state.board.foundation }))
export class HomeCells extends React.PureComponent {
  static propTypes = {};
  static defaultProps = {};
  render() {
    const { foundation } = this.props;

    return (
      <HomeCellsContainer>
        {foundation.map((stack, i) => <Cell key={i} stack={stack} />)}
      </HomeCellsContainer>
    );
  }
}
