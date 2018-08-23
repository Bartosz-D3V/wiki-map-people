// @flow
import React from 'react';
import Select from 'react-select';
import NoSsr from '@material-ui/core/NoSsr';
import styled from 'styled-components';
import { withStyles } from '@material-ui/core/styles';
import Countries from './Countries';
import SubComponents from './SubComponents';
import SubComponentsClasses from './SubComponentsClasses';

type T = {};
const SelectWrapper = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: flex-start;
`;
class CountryList extends React.Component<T> {
  static getCountries(input?: string, countries: Array<Object>): Array<Object> {
    return countries.filter(
      (val: Object): boolean =>
        !!input && val.label.toLowerCase().indexOf(input.toLowerCase()) !== -1
    );
  }

  render() {
    const { classes, theme } = this.props;

    const selectStyles = {
      input: base => ({
        ...base,
        color: theme.palette.text.primary,
      }),
    };

    return (
      <SelectWrapper>
        <NoSsr>
          <Select
            classes={classes}
            styles={selectStyles}
            options={Countries}
            components={SubComponents}
            onChange={() => CountryList.getCountries(Countries)}
            placeholder="Search a country"
          />
        </NoSsr>
      </SelectWrapper>
    );
  }
}
export default withStyles(SubComponentsClasses, { withTheme: true })(CountryList);
