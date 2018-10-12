import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import styled from 'styled-components';
@connect()
export class Cell extends React.PureComponent {
  static propTypes = {};
  static defaultProps = {};
  render() {
    return <div>cell</div>;
  }
}
