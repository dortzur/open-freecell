import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import {} from 'semantic-ui-react';
import styled from 'styled-components';
import { TopRow } from './top-row';
import { Table } from './table';
import { RANKS, SUITS, Card } from 'react-playing-cards';


@connect()
export class Board extends React.PureComponent {
  static propTypes = {};
  static defaultProps = {};
  render() {
    return (
      <div>
        <Card suit={SUITS.HEARTS} rank={RANKS.JACK} />
        <TopRow />
        <Table />
      </div>
    );
  }
}
