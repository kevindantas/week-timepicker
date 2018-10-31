import React from 'react';
import { mount } from 'enzyme';
import HourLabelList from '../HourLabelList';
import HourLabel from '../HourLabel';

describe('<HourLabelList />', () => {
  it('should list HourLabel according to the range', () => {
    const wrapper = mount(<HourLabelList range={[0, 23]} />);
    expect(wrapper.find(HourLabel)).toHaveLength(24);
  });
})
