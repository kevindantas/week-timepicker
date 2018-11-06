import React from 'react';
import { mount } from 'enzyme';
import WeekDay from '../WeekDay';
import CalendarCell from '../CalendarCell';

const target = {
  closest: () => ({ getClientRects: () => ({ item: () => ({ y: 0 }) }) }),
};

describe('<WeekDay />', () => {
  it('should render selectedHours prop', () => {
    const selectedHours = [
      {
        initialTime: '08:00',
        finalTime: '10:00',
      },
    ];
    const wrapper = mount(<WeekDay selectedHours={selectedHours} />);
    expect(wrapper.find(CalendarCell)).toHaveLength(selectedHours.length);
  });

  it('should draw a new cell', () => {
    const wrapper = mount(<WeekDay />);
    wrapper.simulate('mousedown', {
      persist() {},
      clientY: 0,
      target,
    });
    expect(wrapper.find(CalendarCell)).toHaveLength(1);

    wrapper.simulate('mousemove', {
      persist() {},
      clientY: 48, // Move Y 48 pixels
      target,
    });
    // Move one hour bellow
    expect(wrapper.find('.CalendarCell').props().style.height).toEqual('48px');

    wrapper.simulate('mouseup', {
      persist() {},
      clientY: 72, // Move Y 72 pixels
      target,
    });
    // Move half hour
    expect(wrapper.find('.CalendarCell').props().style.height).toEqual('72px');
  });

  it('should not update mousemove and mouseup without mousedown', () => {
    const wrapper = mount(<WeekDay />);
    wrapper.simulate('mousemove', {
      persist() {},
      clientY: 48,
      target,
    });
    expect(wrapper.find(CalendarCell)).toHaveLength(0);

    wrapper.simulate('mouseup', {
      persist() {},
      clientY: 72,
      target,
    });
    expect(wrapper.find(CalendarCell)).toHaveLength(0);
  });
});
