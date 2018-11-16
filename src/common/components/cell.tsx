import React, { HTMLProps, ReactElement, ReactHTML, ReactHTMLElement } from 'react';
import styled, { StyledComponent, StyledFunction, ThemedStyledFunction } from 'styled-components';

import { modularScale } from 'polished';
import { Card } from 'react-playing-cards';
import { Card as CardType } from '../utils/consts';
import { CardProps } from 'react-playing-cards/lib/components/card';

export interface ContainerProps {
  cardsCount: number
}

export interface Props {
  stack: CardType[]
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


const CardContainer = styled(Card)<CardProps>`
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
