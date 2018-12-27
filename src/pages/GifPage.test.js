/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { mount } from 'enzyme';

import GifsPage from './GifsPage';

describe('<GifsPage />', () => {
  test('renders without crashing', async () => {
    const wrapper = mount(
      <GifsPage />,
    );
    expect(wrapper).toBeTruthy();
  });
});
