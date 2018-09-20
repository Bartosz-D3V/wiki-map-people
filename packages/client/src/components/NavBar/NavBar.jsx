// @flow

import React from 'react';
import styled from 'styled-components';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CircularProgress from '@material-ui/core/CircularProgress';
import { withStyles } from '@material-ui/core/styles';
import CountryList from '../CountryList/CountryList';

const AppNavBarWrapper = styled.div`
  flex-grow: 1;
  width: 100vw;
`;

const styles = theme => ({
  progress: {
    margin: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 3,
    color: 'white',
  },
});

const NavBar = (props: Object) => {
  const { isFetching, onClick, classes } = props;

  return (
    <AppNavBarWrapper>
      <AppBar position="static" color="primary">
        <Toolbar>
          <CountryList onClick={onClick} {...props} />
          {isFetching && <CircularProgress className={classes.progress} size={25} />}
        </Toolbar>
      </AppBar>
    </AppNavBarWrapper>
  );
};
export default withStyles(styles)(NavBar);
