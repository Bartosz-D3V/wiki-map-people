// @flow
import React from 'react';
import styled from 'styled-components';
import { Map, TileLayer } from 'react-leaflet';

const MapWrapper = styled(Map)`
  height: 100vh;
  width: 100vw;
  z-index: 1;
`;
const mapCenter = [39.9528, -75.1638];
const zoomLevel = 12;
const stamenTonerTiles = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';

export default () => (
  <MapWrapper center={mapCenter} zoom={zoomLevel}>
    <TileLayer url={stamenTonerTiles} />
  </MapWrapper>
);
