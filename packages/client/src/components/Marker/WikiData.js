// @flow

import WikiResultHead from './WikiResultHead';

export default class {
  coords: WikiResultHead;

  article: WikiResultHead;

  fullName: WikiResultHead;

  placeOfBirth: WikiResultHead;

  constructor(
    coords: WikiResultHead,
    article: WikiResultHead,
    fullName: WikiResultHead,
    placeOfBirth: WikiResultHead
  ) {
    this.coords = coords;
    this.article = article;
    this.fullName = fullName;
    this.placeOfBirth = placeOfBirth;
  }
}
