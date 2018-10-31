import React from 'react';
import { mount } from 'enzyme';
import WeekDay from '../WeekDay';

describe('<WeekDay />', () => {
  it('should mount', () => {
    const wrapper = mount(<WeekDay />);
    expect(wrapper);
  });
});
