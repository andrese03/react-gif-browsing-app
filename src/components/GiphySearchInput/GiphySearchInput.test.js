/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import jest from 'jest-mock';
import { shallow, mount } from 'enzyme';

import GiphySearchInput from './GiphySearchInput';

describe('<GiphySearchInput />', () => {
  test('renders without crashing', async () => {
    const onChange = jest.fn();
    const wrapper = shallow(<GiphySearchInput onChange={onChange} />);
    expect(wrapper).toBeTruthy();
  });

  test('fire the search without problems', async () => {
    const onChange = jest.fn();
    const wrapper = mount(<GiphySearchInput onChange={onChange} />);
    const input = wrapper.find('input#giphy-search-input');
    input.simulate('change', { target: { value: 'love' } });
    input.simulate('submit');
    expect(onChange.mock.calls.length).toEqual(2);
  });
});
