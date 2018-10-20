import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { modularScale } from 'polished';
import { RANKS, SUITS, Card } from 'react-playing-cards';
const CellContainer = styled.div`
  border: 5px solid;
  height: ${modularScale(8)};
  width: ${modularScale(7)};
  border-radius: 8px;
  display: grid;
  grid-template-rows: 40px 40px 40px 40px 40px 40px 40px 40px;
  justify-content: center;
  align-content: center;
`;

@connect()
export class Cell extends React.PureComponent {
  static propTypes = {
    stack: PropTypes.array,
  };
  static defaultProps = {
    stack: [],
  };

  render() {
    return (
      <CellContainer>
        {this.props.stack.map((card) => (
          <Card size={4} rank={card.rank} suit={card.suit} key={card.id} />
        ))}
      </CellContainer>
    );
  }
}
