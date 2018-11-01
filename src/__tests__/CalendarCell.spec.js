import React from 'react';
import { mount } from 'enzyme';
import CalendarCell from '../CalendarCell';

describe('<CalendarCell>', () => {
  it('should use initialTime to calculate the cell position', () => {
    const wrapper = mount(<CalendarCell initialTime="08:00" finalTime="10:00" />);
    const rowHeight = 48;
    const cellPosition = 8 * rowHeight;
    expect(wrapper.find('.CalendarCell').props().style.top).toEqual(`${cellPosition}px`);
  });

  it('should use finalTime to calculate the cell height', () => {
    const wrapper = mount(<CalendarCell initialTime="08:00" finalTime="10:00" />);
    const rowHeight = 48;
    const cellPosition = 8 * rowHeight;
    const cellHeight = 10 * rowHeight - cellPosition;
    expect(wrapper.find('.CalendarCell').props().style.height).toEqual(`${cellHeight}px`);
  });
})
