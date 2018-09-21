// @flow

export default class {
  type: string;

  value: string;

  datatype: string;

  constructor(type: string, value: string, datatype: string) {
    this.type = type;
    this.value = value;
    this.datatype = datatype;
  }
}
