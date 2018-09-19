import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Countries from './Countries';
import CountryList from './CountryList';

describe('CountryList component', () => {
  let wrapper;
  let instance;

  beforeAll(() => {
    Enzyme.configure({ adapter: new Adapter() });
    wrapper = shallow(<CountryList />);
    instance = wrapper.dive().instance();
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<CountryList />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should contains sorted alphabetically countries', () => {
    instance.countryList.forEach((country, index) => {
      expect(country.label).toEqual(Countries[index].label);
    });
  });

  it('mapCountriesValues should add value property same as label', () => {
    const mockCountries = Countries.slice(0, 2);
    const actualCountryList = CountryList.mapCountriesValues(mockCountries);

    actualCountryList.forEach(country => {
      expect(country.value).toEqual(country.label);
    });
  });
});
