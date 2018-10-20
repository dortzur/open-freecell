import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import styled from 'styled-components';

const HomeCellsContainer = styled.div`
  ${getCardsGrid(4)};
`;
import { Cell } from './cell';
import { getCardsGrid } from '../styles';
@connect()
export class HomeCells extends React.PureComponent {
  static propTypes = {};
  static defaultProps = {};
  render() {
    return (
      <HomeCellsContainer>
        <Cell />
        <Cell />
        <Cell />
        <Cell />
      </HomeCellsContainer>
    );
  }
}
