import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import {} from 'semantic-ui-react';
import styled from 'styled-components';
import { TopRow } from './top-row';
import { Table } from './table';
@connect()
export class Board extends React.PureComponent {
  static propTypes = {};
  static defaultProps = {};
  render() {
    return (
      <div>
        <TopRow />
        <Table />
      </div>
    );
  }
}
