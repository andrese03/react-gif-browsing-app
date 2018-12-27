/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import jest from 'jest-mock';
import { shallow, mount } from 'enzyme';

import { searchResult } from '../../services/giphy/giphy.mocks';
import GiphyItem from './GiphyItem';

describe('<GiphyItem />', () => {
  test('renders without crashing', async () => {
    const item = searchResult.data.shift();
    const onClick = jest.fn();
    const wrapper = shallow(<GiphyItem item={item} onClick={onClick} />);
    expect(wrapper).toBeTruthy();
  });

  test('displays a gif without problems', async () => {
    const item = searchResult.data.shift();
    const onClick = jest.fn();
    const wrapper = mount(<GiphyItem item={item} onClick={onClick} />);
    const selector = `#image-${item.id}`;
    expect(wrapper.find(selector)).toBeTruthy();
  });
});
