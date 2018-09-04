// @flow

import Binding from './Binding';

export default class {
  bindings: Array<Binding>;

  constructor(bindings: Array<Binding>) {
    this.bindings = bindings;
  }
}
