// @flow

import React from 'react';
import styled from 'styled-components';
import Map from '../Map/Map';
import NavBar from '../NavBar/NavBar';
import Results from '../../shared/domain/Results';
import WikiData from '../../shared/domain/WikiData';

declare type T = {};
declare type State = {
  selectedCountry: string,
  associatedPeople: Array<WikiData>,
};
const AppContainer = styled.div`
  overflow: hidden;
`;
export default class App extends React.Component<T, State> {
  static async fetchPeople(country: string): Promise<Results> {
    const response = await fetch(`localhost:8080/people/${country}`);
    const data = await response.json();
    return data;
  }

  handleCountrySelect(country: string): void {
    // eslint-disable-next-line react/no-unused-state
    this.setState({ selectedCountry: country });
  }

  render() {
    return (
      <AppContainer>
        <NavBar onClick={country => this.handleCountrySelect(country)} {...this.props} />
        <Map />
      </AppContainer>
    );
  }
}
