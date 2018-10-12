import PropTypes from 'prop-types';
import React from 'react';
import 'react-playing-cards/lib/main.css';
import { Board } from './board';
import Header  from './header';
import { Footer } from './footer';
import CssBaseline from '@material-ui/core/CssBaseline';

export class App extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <CssBaseline>
          <Header />
          {/*<Board/>*/}
          {/*<Footer/>*/}
        </CssBaseline>
      </React.Fragment>
    );
  }
}
