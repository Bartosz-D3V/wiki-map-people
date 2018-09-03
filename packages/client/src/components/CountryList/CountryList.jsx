// @flow

import React from 'react';
import Select from 'react-select';
import NoSsr from '@material-ui/core/NoSsr';
import styled from 'styled-components';
import { withStyles } from '@material-ui/core/styles';
import Countries from './Countries';
import SubComponents from './SubComponents';
import SubComponentsClasses from './SubComponentsClasses';

declare type T = {
  classes: Object,
  theme: Object,
  onClick: Function,
};
const SelectWrapper = styled.div`
  height: 50px;
  width: 300px;
  z-index: 2;
`;
class CountryList extends React.Component<T> {
  handleCountrySelect(event) {
    const { value } = event;
    const { onClick } = this.props;
    onClick(value);
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
            placeholder="Search a country"
            onChange={event => this.handleCountrySelect(event)}
            {...this.props}
          />
        </NoSsr>
      </SelectWrapper>
    );
  }
}
export default withStyles(SubComponentsClasses, { withTheme: true })(CountryList);
