// @flow
import React from 'react';
import styled from 'styled-components';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CountryList from '../CountryList/CountryList';

const AppNavBarWrapper = styled.div`
  flex-grow: 1;
  width: 100vw;
`;
export default () => (
  <AppNavBarWrapper>
    <AppBar position="static" color="primary">
      <Toolbar>
        <CountryList />
      </Toolbar>
    </AppBar>
  </AppNavBarWrapper>
);