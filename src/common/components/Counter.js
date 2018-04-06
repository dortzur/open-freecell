import React from "react";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as CounterActions from "../actions";

@connect(
  state => ({
    counter: state.counter
  }),
  bindActionCreators(CounterActions, dispatch)
)
export default class Counter extends React.PureComponent {
  static propTypes = {
    increment: PropTypes.func.isRequired,
    incrementIfOdd: PropTypes.func.isRequired,
    incrementAsync: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired,
    counter: PropTypes.number.isRequired
  };

  render() {
    const {
      increment,
      incrementIfOdd,
      incrementAsync,
      decrement,
      counter
    } = this.props;
    return (
      <p>
        Clicked: {counter} times <button onClick={increment}>+</button>{" "}
        <button onClick={decrement}>-</button>{" "}
        <button onClick={incrementIfOdd}>Increment if odd</button>{" "}
        <button onClick={() => incrementAsync()}>Increment async</button>
      </p>
    );
  }
}
