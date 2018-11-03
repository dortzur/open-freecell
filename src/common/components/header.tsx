import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

export function Header() {
  return (
    <AppBar position="static">
      <Toolbar>

        <Typography variant="h6" color="inherit">
          Open Freecell
        </Typography>

      </Toolbar>
    </AppBar>
  );
}

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
