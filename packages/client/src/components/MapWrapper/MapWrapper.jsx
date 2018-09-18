// @flow

import React from 'react';
import styled from 'styled-components';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-markercluster';
import PersonalInfo from 'shared/domain/PersonalInfo';

const LeafletWrapper = styled(Map)`
  height: 100vh;
  width: 100vw;
  z-index: 1;
`;
const mapCenter = [20, 0];
const zoomLevel = 3;
const minZoom = 3;
const maxZoom = 15;
const maxClusterRadius = 20;
const stamenTonerTiles = 'http://{s}.tile.osm.org/{z}/{x}/{y}.png';

declare type T = {
  associatedPeople: Array<PersonalInfo>,
};

const hStyle = {
  textAlign: 'center',
};

export default class MapWrapper extends React.Component<T> {
  static getMarkers(associatedPeople: Array<PersonalInfo>): any {
    if (!associatedPeople) return null;
    return associatedPeople.map((personalInfo: PersonalInfo, i: number) => {
      const { latitude, longtitude } = personalInfo.coords;
      return (
        <Marker key={`${personalInfo.article}-${i}`} position={[longtitude, latitude]}>
          <Popup>
            <h2 style={hStyle}>{personalInfo.fullName}</h2>
            <h3 style={hStyle}>{personalInfo.placeOfBirth}</h3>
            <h3 style={hStyle}>
              <a href={personalInfo.article}>Wikipedia article</a>
            </h3>
          </Popup>
        </Marker>
      );
    });
  }

  render() {
    const { associatedPeople = [] } = this.props;

    return (
      <LeafletWrapper
        center={mapCenter}
        zoom={zoomLevel}
        minZoom={minZoom}
        maxZoom={maxZoom}
        preferCanvas
      >
        <TileLayer url={stamenTonerTiles} />
        {associatedPeople.length > 1 ? (
          <MarkerClusterGroup maxClusterRadius={maxClusterRadius}>
            {MapWrapper.getMarkers(associatedPeople)}
          </MarkerClusterGroup>
        ) : (
          MapWrapper.getMarkers(associatedPeople)
        )}
      </LeafletWrapper>
    );
  }
}
