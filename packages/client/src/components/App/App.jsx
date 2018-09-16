// @flow

import React from 'react';
import styled from 'styled-components';
import PersonalInfo from 'shared/domain/PersonalInfo';
import NavBar from '../NavBar/NavBar';
import MapWrapper from '../MapWrapper/MapWrapper';

declare type T = {};
declare type State = {
  associatedPeople: Array<PersonalInfo>,
};
const AppContainer = styled.div`
  overflow: hidden;
`;
export default class App extends React.Component<T, State> {
  static async fetchPeople(country: string): Promise<Array<PersonalInfo>> {
    const response = await fetch(`http://localhost:8080/people/${country}`);
    return response.json();
  }

  state = {
    associatedPeople: [],
  };

  handleCountrySelect(country: string): void {
    App.fetchPeople(country).then((data: Array<PersonalInfo>) => {
      this.setState({ associatedPeople: data });
    });
  }

  render() {
    const { associatedPeople } = this.state;

    return (
      <AppContainer>
        <NavBar onClick={country => this.handleCountrySelect(country)} {...this.props} />
        <MapWrapper associatedPeople={associatedPeople} />
      </AppContainer>
    );
  }
}
