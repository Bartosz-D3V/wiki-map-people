// @flow

import Coords from '../domain/Coords';

export default (coords: string): Coords => {
  const splittedPoint: Array<string> = coords.split(' ');
  const latitude: number = Number(splittedPoint[0].substring(6));
  const longtitude: number = Number(splittedPoint[1].substring(0, splittedPoint[1].length - 1));
  return new Coords(latitude, longtitude);
};
