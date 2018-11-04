import React from 'react';
import 'react-playing-cards/lib/main.css';
import { Board } from './board';
import Header from './header';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Footer } from './footer';
import ErrorBoundary from 'react-error-boundary';
import { error } from 'util';


export function App() {
  const onError = (err: Error, stack: string) => {
    console.error(err);
  };
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

