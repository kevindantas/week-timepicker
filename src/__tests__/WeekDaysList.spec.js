import React from 'react';
import { mount } from 'enzyme';
import WeekDaysList from '../WeekDaysList';


describe('<WeekDaysList />', () => {
  it('should create a row for each hour', () => {
    const hoursRange = [5,6,7]
    const wrapper = mount(<WeekDaysList hoursRange={hoursRange} />);
    expect(wrapper.find('.rowLine')).toHaveLength(hoursRange.length);
  })
})