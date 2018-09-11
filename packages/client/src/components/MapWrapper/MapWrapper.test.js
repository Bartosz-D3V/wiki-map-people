import React from 'react';
import ReactDOM from 'react-dom';
import { MapWrapper } from './MapWrapper';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MapWrapper />, div);
  ReactDOM.unmountComponentAtNode(div);
});
