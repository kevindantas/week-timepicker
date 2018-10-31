import React from 'react';
import { mount } from 'enzyme';
import HourLabelList from '../HourLabelList';
import HourLabel from '../HourLabel';

describe('<HourLabelList />', () => {
  it('should list HourLabel according to the range', () => {
    const range = [0, 1];
    const wrapper = mount(<HourLabelList range={range} />);
    expect(wrapper.find(HourLabel)).toHaveLength(range.length);
  });
})
