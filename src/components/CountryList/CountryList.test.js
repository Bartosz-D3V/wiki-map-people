import React from 'react';
import ReactDOM from 'react-dom';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow } from 'enzyme';
import CountryList from './CountryList';

describe('CountryList component', () => {
  let wrapper;

  beforeAll(() => {
    configure({ adapter: new Adapter() });
    wrapper = shallow(<CountryList />);
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<CountryList />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  describe('getCountries', () => {
    const countries = [];

    beforeAll(() => {
      countries.push({ label: 'North Korea' });
      countries.push({ label: 'South Korea' });
      countries.push({ label: 'Azerbaijan' });
      countries.push({ label: 'Russia' });
    });

    it('should return empty array if provided value is empty', () => {
      expect(CountryList.getCountries('', countries)).toEqual([]);
      expect(CountryList.getCountries(null, countries)).toEqual([]);
      expect(CountryList.getCountries(undefined, countries)).toEqual([]);
    });

    it('should return filtered array', () => {
      const expectedCountries = [];
      expectedCountries.push({ label: 'North Korea' });
      expectedCountries.push({ label: 'South Korea' });

      expect(CountryList.getCountries('Korea', countries)).toEqual(expectedCountries);
    });
  });
});
