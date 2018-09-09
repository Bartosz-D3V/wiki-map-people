// @flow

import Coords from './Coords';

export default class {
  coords: Coords;

  article: string;

  fullName: string;

  placeOfBirth: string;

  constructor(coords: Coords, article: string, fullName: string, placeOfBirth: string) {
    this.coords = coords;
    this.article = article;
    this.fullName = fullName;
    this.placeOfBirth = placeOfBirth;
  }
}
