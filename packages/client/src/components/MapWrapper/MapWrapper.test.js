import React from 'react';
import ReactDOM from 'react-dom';
import PersonalInfo from 'shared/domain/PersonalInfo';
import Coords from 'shared/domain/Coords';
import MapWrapper from './MapWrapper';

describe('MapWrapper', () => {
  const person1 = new PersonalInfo('Donnie Darko', 'USA', new Coords(1, 1), 'localhost');

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<MapWrapper associatedPeople={[person1]} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
