import React from 'react';

import styled from 'styled-components';
import FreeCells from './free-cells';
import { HomeCells } from './home-cells';


const TopRowContainer = styled.div`
  display: grid;  
  grid-template-columns: 600px auto;
  margin-bottom: 20px;
  //grid-template-rows: 300px 300px;
`;

export function TopRow() {
  return (
    <TopRowContainer>
      <FreeCells/>
      <HomeCells/>
    </TopRowContainer>
  );
}

TopRow.propTypes = {};

TopRow.defaultProps = {};
