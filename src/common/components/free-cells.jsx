import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import styled from 'styled-components';
import { Cell } from './cell';
@connect()
export class FreeCells extends React.PureComponent {
  static propTypes = {};
  static defaultProps = {};
  render() {
    return (
      <div>
        <Cell />
        <Cell />
        <Cell />
        <Cell />
      </div>
    );
  }
}
