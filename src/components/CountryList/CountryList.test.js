import React from 'react';
import ReactDOM from 'react-dom';
import CountryList from './CountryList';

describe('CountryList component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<CountryList />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
