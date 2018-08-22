// @flow
import React from 'react';
import Select from 'react-select';
import NoSsr from '@material-ui/core/NoSsr';

type T = {};
export default class extends React.Component<T> {
  static getCountries(input: string, countries: Array<Object>): Array<Object> {
    return countries.filter(
      (val: Object): boolean =>
        !!input && val.label.toLowerCase().indexOf(input.toLowerCase()) !== -1
    );
  }

  render() {
    return (
      <NoSsr>
        <Select placeholder="Nationality" />
      </NoSsr>
    );
  }
}
