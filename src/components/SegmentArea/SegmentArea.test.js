import React from 'react';
import { shallow } from 'enzyme';

import SegmentArea from './SegmentArea';

describe('<SegmentArea />', () => {
  test('renders without crashing', () => {
    const message = 'This is a test!';
    const wrapper = shallow(<SegmentArea message={message} />);
    expect(wrapper).toBeTruthy();
  });

  test('displays the content', () => {
    const message = 'This is a test!';
    const wrapper = shallow(<SegmentArea message={message} />);
    const span = wrapper.find('span#segment-area-message');
    expect(span.text()).toEqual(message);
  });
});
