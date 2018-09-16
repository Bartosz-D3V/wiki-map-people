// @flow

import Coords from './Coords';

export default class {
  fullName: string;

  placeOfBirth: string;

  coords: Coords;

  article: string;

  constructor(fullName: string, placeOfBirth: string, coords: Coords, article: string) {
    this.fullName = fullName;
    this.placeOfBirth = placeOfBirth;
    this.coords = coords;
    this.article = article;
  }
}
