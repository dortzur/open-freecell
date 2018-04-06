import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import {} from 'semantic-ui-react';
import styled from 'styled-components';
import { FreeCells } from './free-cells';
import { HomeCells } from './home-cells';
@connect()
export class TopRow extends React.PureComponent {
  static propTypes = {};
  static defaultProps = {};
  render() {
    return (
      <div>
        <FreeCells />
        <HomeCells />
      </div>
    );
  }
}
