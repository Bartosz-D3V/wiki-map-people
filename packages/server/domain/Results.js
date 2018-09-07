// @flow

import WikiData from './WikiData';

export default class {
  bindings: Array<WikiData>;

  constructor(bindings: Array<WikiData>) {
    this.bindings = bindings;
  }
}
