import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import styled from 'styled-components';

const TableauContainer = styled.div`
  ${getCardsGrid(8)};
`;
import { Cell } from './cell';
import { getCardsGrid } from '../styles';
@connect((state) => ({ tableau: state.board.tableau }))
export class Tableau extends React.PureComponent {
  static propTypes = {};
  static defaultProps = {};
  render() {
    const { tableau } = this.props;

    return (
      <TableauContainer>
        {tableau.map((stack, i) => <Cell key={i} stack={stack} />)}
      </TableauContainer>
    );
  }
}
