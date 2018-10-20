import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import styled from 'styled-components';

const FreeCellsContainer = styled.div`
  ${getCardsGrid(4)};
`;
import { Cell } from './cell';
import { getCardsGrid } from '../styles';
@connect()
export class FreeCells extends React.PureComponent {
  static propTypes = {};
  static defaultProps = {};
  render() {
    return (
      <FreeCellsContainer>
        <Cell />
        <Cell />
        <Cell />
        <Cell />
      </FreeCellsContainer>
    );
  }
}
