import React from 'react';
import 'react-playing-cards/lib/main.css';
import { Board } from './board';
import Header from './header';
import CssBaseline from '@material-ui/core/CssBaseline';


export function App() {

  return (
    <React.Fragment>
      <CssBaseline>
        <React.Fragment>
          <Header/>
          <Board/>
        </React.Fragment>
      </CssBaseline>
    </React.Fragment>
  );
}

