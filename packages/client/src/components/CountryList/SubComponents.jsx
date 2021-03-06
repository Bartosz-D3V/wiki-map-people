// @flow

import React from 'react';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';

const Img = styled.img`
  margin-right: 5px;
`;

const Option = (props: Object) => {
  const {
    innerRef,
    isFocused,
    isSelected,
    innerProps,
    children,
    data: { dataFlag, label },
  } = props;
  return (
    <MenuItem
      buttonRef={innerRef}
      selected={isFocused}
      component="div"
      style={{
        fontWeight: isSelected ? 500 : 400,
      }}
      {...innerProps}
    >
      {' '}
      <Img src={dataFlag} alt={label} />
      {children}
    </MenuItem>
  );
};

const inputComponent = ({ inputRef, ...props }) => <div ref={inputRef} {...props} />;

const Control = (props: Object) => {
  const { selectProps, innerRef, children, innerProps } = props;
  return (
    <TextField
      fullWidth
      InputProps={{
        inputComponent,
        inputProps: {
          className: selectProps.classes.input,
          inputRef: innerRef,
          children,
          ...innerProps,
        },
      }}
      {...selectProps.textFieldProps}
    />
  );
};

const NoOptionsMessage = (props: Object) => {
  const { selectProps, children, innerProps } = props;
  return (
    <Typography
      color="textSecondary"
      className={selectProps.classes.noOptionsMessage}
      {...innerProps}
    >
      {children}
    </Typography>
  );
};

const Placeholder = (props: Object) => {
  const { selectProps, children, innerProps } = props;
  return (
    <Typography color="textSecondary" className={selectProps.classes.placeholder} {...innerProps}>
      {children}
    </Typography>
  );
};

const SingleValue = (props: Object) => {
  const { selectProps, children, innerProps } = props;
  return (
    <Typography className={selectProps.classes.singleValue} {...innerProps}>
      {children}
    </Typography>
  );
};

const ValueContainer = (props: Object) => {
  const { selectProps, children } = props;
  return <div className={selectProps.classes.valueContainer}>{children}</div>;
};

const Menu = (props: Object) => {
  const { selectProps, children, innerProps } = props;
  return (
    <Paper square className={selectProps.classes.paper} {...innerProps}>
      {children}
    </Paper>
  );
};

export default {
  Option,
  Control,
  NoOptionsMessage,
  Placeholder,
  SingleValue,
  ValueContainer,
  Menu,
};
