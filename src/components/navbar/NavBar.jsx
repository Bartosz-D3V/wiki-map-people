import React from 'react';
import styled from 'styled-components';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

const AppNavBarWrapper = styled.div`
  flex-grow: 1;
  width: 100vw;
`;
export default () => (
  <AppNavBarWrapper>
    <AppBar position="static" color="primary">
      <Toolbar />
    </AppBar>
  </AppNavBarWrapper>
);
