import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import styled from 'styled-components';
import { FreeCells } from './free-cells';
import { HomeCells } from './home-cells';


const TopRowContainer = styled.div`
  display: grid;  
  grid-template-columns: 600px auto;
  margin-bottom: 20px;
  //grid-template-rows: 300px 300px;
`;
@connect()
export class TopRow extends React.PureComponent {
  static propTypes = {};
  static defaultProps = {};
  render() {
    return (
      <TopRowContainer>
        <FreeCells />
        <HomeCells />
      </TopRowContainer>
    );
  }
}
