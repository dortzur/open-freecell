import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import styled from 'styled-components';
@connect()
export class Header extends React.PureComponent {
  static propTypes = {};
  static defaultProps = {};
  render() {
    return (
      <AppBar position="static">
        <Toolbar>

          <Typography variant="h6" color="inherit" >
            Open Freecell
          </Typography>

        </Toolbar>
      </AppBar>
    );
  }
}

export default Header;
