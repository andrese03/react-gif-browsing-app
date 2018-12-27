/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import jest from 'jest-mock';
import { shallow } from 'enzyme';

import Lightbox from './Lightbox';

// Common functions
const onClose = jest.fn();

describe('<Lightbox />', () => {
  test('renders without crashing', async () => {
    const onMove = jest.fn();
    const wrapper = shallow(
      <Lightbox onPreviousItem={onMove} onNextItem={onMove} onClose={onClose} />,
    );
    expect(wrapper).toBeTruthy();
  });

  // TODO: Tests when users click on previous or next button
});
