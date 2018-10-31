import React from 'react';
import { mount } from 'enzyme';
import WeekCalendar from '../WeekCalendar';

describe('<WeekCalendar />', () => {
  it('should mount', () => {
    const wrapper = mount(<WeekCalendar />);
    expect(wrapper);
  });
})