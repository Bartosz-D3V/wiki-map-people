// @flow
import React from 'react';
import styled from 'styled-components';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import PersonalInfo from '../../domain/PersonalInfo';

const LeafletWrapper = styled(Map)`
  height: 100vh;
  width: 100vw;
  z-index: 1;
`;
const mapCenter = [39.9528, -75.1638];
const zoomLevel = 12;
const stamenTonerTiles = 'http://{s}.tile.osm.org/{z}/{x}/{y}.png';

declare type T = {
  associatedPeople: Array<PersonalInfo>,
};

export class MapWrapper extends React.Component<T> {
  static getMarkers(associatedPeople: Array<PersonalInfo>): any {
    if (!associatedPeople) return null;
    return associatedPeople.map((personalInfo: PersonalInfo, i: number) => {
      const { latitude, longtitude } = personalInfo.coords;
      return (
        <Marker key={`${personalInfo.article}-${i}`} position={[latitude, longtitude]}>
          <Popup>Test</Popup>
        </Marker>
      );
    });
  }

  render() {
    const { associatedPeople } = this.props;

    return (
      <LeafletWrapper center={mapCenter} zoom={zoomLevel}>
        <TileLayer url={stamenTonerTiles} />
        {MapWrapper.getMarkers(associatedPeople)}
      </LeafletWrapper>
    );
  }
}
