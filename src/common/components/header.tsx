//@ts-ignore
import React, { useState, useEffect, ChangeEvent } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { TextField } from '@material-ui/core';
import { connect } from 'react-redux';
import { performNotationMove } from '../state/modules/board-module/actions/perform-notation-move';

interface Props {
  performNotationMove: Function,
}

export const Header: React.SFC<Props> = (props) => {

  const [notation, setNotation] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => setNotation(e.target.value);

  useEffect(() => {
    if (notation.length === 2) {
      try {
        props.performNotationMove(notation);
      } catch (e) {

      }

      setNotation('');

    }
  }, [notation]);


  return (
    <React.Fragment>
      <AppBar position="static">
        <Toolbar>

          <Typography variant="h6" color="inherit">
            Open Freecell
          </Typography>

        </Toolbar>
      </AppBar>

      <TextField

        label="Move"
        value={notation}
        onChange={handleChange}
        margin="normal"
      />
    </React.Fragment>
  );
};

export default connect(null, {
  performNotationMove,
})(Header);

