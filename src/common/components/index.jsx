import React from 'react';
import 'react-playing-cards/lib/main.css';
import { Board } from './board';
import Header from './header';
import CssBaseline from '@material-ui/core/CssBaseline';


export function App() {

  return (
    <React.Fragment>
      <CssBaseline>
        <Header/>
        <Board/>
        {/*<Footer/>*/}
      </CssBaseline>
    </React.Fragment>
  );
}
