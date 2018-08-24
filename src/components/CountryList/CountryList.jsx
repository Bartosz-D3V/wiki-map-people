// @flow
import React from 'react';
import Select from 'react-select';
import NoSsr from '@material-ui/core/NoSsr';
import styled from 'styled-components';
import { withStyles } from '@material-ui/core/styles';
import Countries from './Countries';
import SubComponents from './SubComponents';
import SubComponentsClasses from './SubComponentsClasses';

type T = {
  classes: Object,
  theme: Object,
};
const SelectWrapper = styled.div`
  height: 50px;
  width: 300px;
  z-index: 2;
`;
class CountryList extends React.Component<T> {
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
          />
        </NoSsr>
      </SelectWrapper>
    );
  }
}
export default withStyles(SubComponentsClasses, { withTheme: true })(CountryList);
