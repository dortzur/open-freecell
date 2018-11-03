import React from 'react';
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


export function Cell(props: Props) {
  const { stack } = props;
  return (
    <CellContainer cardsCount={stack.length}>
      {props.stack.map((card) => (
        <CardContainer size={4} rank={card.rank} suit={card.suit} key={card.id}/>
      ))}
    </CellContainer>
  );
}
