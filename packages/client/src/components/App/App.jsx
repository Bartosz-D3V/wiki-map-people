// @flow

import React from 'react';
import styled from 'styled-components';
import PersonalInfo from 'shared/domain/PersonalInfo';
import NavBar from '../NavBar/NavBar';
import MapWrapper from '../MapWrapper/MapWrapper';

declare type T = {
  baseUrl: string,
};
declare type State = {
  associatedPeople: Array<PersonalInfo>,
  isFetching: boolean,
};
const AppContainer = styled.div`
  overflow: hidden;
`;
export default class App extends React.Component<T, State> {
  state = {
    associatedPeople: [],
    isFetching: false,
  };

  async fetchPeople(country: string): Promise<Array<PersonalInfo>> {
    const { baseUrl } = this.props;
    const response = await fetch(`${baseUrl}/people/${country}`);
    return response.json();
  }

  handleCountrySelect(country: string): void {
    this.setState({ isFetching: true });
    this.fetchPeople(country).then((data: Array<PersonalInfo>) => {
      this.setState({ associatedPeople: data });
      this.setState({ isFetching: false });
    });
  }

  render() {
    const { associatedPeople, isFetching } = this.state;

    return (
      <AppContainer>
        <NavBar
          onClick={country => this.handleCountrySelect(country)}
          isFetching={isFetching}
          {...this.props}
        />
        <MapWrapper associatedPeople={associatedPeople} />
      </AppContainer>
    );
  }
}
