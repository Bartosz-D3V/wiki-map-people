// @flow

import Head from './Head';
import Results from './Results';

export default class {
  head: Head;

  results: Results;

  constructor(head: Head, results: Results) {
    this.head = head;
    this.results = results;
  }
}
