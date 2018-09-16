// @flow

import WikiResultHead from './WikiResultHead';

export default class {
  fullName: WikiResultHead;

  placeOfBirth: WikiResultHead;

  coords: WikiResultHead;

  article: WikiResultHead;

  constructor(
    fullName: WikiResultHead,
    placeOfBirth: WikiResultHead,
    coords: WikiResultHead,
    article: WikiResultHead
  ) {
    this.fullName = fullName;
    this.placeOfBirth = placeOfBirth;
    this.coords = coords;
    this.article = article;
  }
}
