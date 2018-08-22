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
      expect(wrapper.instance().getCountries('', countries)).toEqual([]);
      expect(wrapper.instance().getCountries(null, countries)).toEqual([]);
      expect(wrapper.instance().getCountries(undefined, countries)).toEqual([]);
    });

    it('should return filtered array', () => {
      const expectedCountries = [];
      expectedCountries.push({ label: 'North Korea' });
      expectedCountries.push({ label: 'South Korea' });

      expect(wrapper.instance().getCountries('Korea', countries)).toEqual(expectedCountries);
    });
  });
});
