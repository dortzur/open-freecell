import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { modularScale } from 'polished';
import { Card } from 'react-playing-cards';

export interface ContainerProps {
  cardsCount: number
}

export interface Props {
  stack: Array<any>
}


const CellContainer = styled.div<ContainerProps>`
  border: 5px solid;
  height: ${modularScale(8)};
  width: ${modularScale(7)};
  border-radius: 8px;
  display: grid;
  grid-template-rows: repeat(${(p) => p.cardsCount + 1}, 30px);
  justify-content: center;
  align-content: start;
`;


const CardContainer = styled(Card)`
  &&{
    margin-top: -100px;
  }
  
`;

//@ts-ignore
@connect()
export class Cell extends React.PureComponent<Props> {
  static defaultProps = {
    stack: [],
  };

  render() {
    const { stack } = this.props;
    return (
      <CellContainer cardsCount={stack.length}>
        {this.props.stack.map((card) => (
          <CardContainer size={4} rank={card.rank} suit={card.suit} key={card.id}/>
        ))}
      </CellContainer>
    );
  }
}
