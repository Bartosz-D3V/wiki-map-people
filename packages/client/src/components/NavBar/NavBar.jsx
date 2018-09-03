// @flow

import React from 'react';
import styled from 'styled-components';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CountryList from '../CountryList/CountryList';

declare type T = {};
const AppNavBarWrapper = styled.div`
  flex-grow: 1;
  width: 100vw;
`;
export default class NavBar extends React.Component<T> {
  static handleCountrySelect(country: string): string {
    return country;
  }

  render() {
    return (
      <AppNavBarWrapper>
        <AppBar position="static" color="primary">
          <Toolbar>
            <CountryList onClick={NavBar.handleCountrySelect} {...this.props} />
          </Toolbar>
        </AppBar>
      </AppNavBarWrapper>
    );
  }
}
