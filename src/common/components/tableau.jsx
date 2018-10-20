import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import styled from 'styled-components';

const TableauContainer = styled.div`
  ${getCardsGrid(8)}
`;
import { Cell } from './cell';
import { getCardsGrid } from '../styles';
@connect()
export class Tableau extends React.PureComponent {
  static propTypes = {};
  static defaultProps = {};
  render() {
    return (
      <TableauContainer>
        <Cell />
        <Cell />
        <Cell />
        <Cell />
        <Cell />
        <Cell />
        <Cell />
        <Cell />
      </TableauContainer>
    );
  }
}
