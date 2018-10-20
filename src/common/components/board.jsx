import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { TopRow } from './top-row';
import { Tableau } from './tableau';
import { RANKS, SUITS, Card } from 'react-playing-cards';


@connect()
export class Board extends React.PureComponent {
  static propTypes = {};
  static defaultProps = {};
  render() {
    return (
      <div>
        <TopRow />
        <Tableau />
      </div>
    );
  }
}
