// @flow

import React from 'react';
import styled from 'styled-components';
import Map from '../Map/Map';
import NavBar from '../NavBar/NavBar';

const AppContainer = styled.div`
  overflow: hidden;
`;

export default () => (
  <AppContainer>
    <NavBar />
    <Map />
  </AppContainer>
);
