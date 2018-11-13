import React from 'react';
import { mount } from 'enzyme';
import CellModal from '../CellModal';

describe('<CellModal />', () => {
  it('should have the input values from the properties', () => {
    const initialTime = '08:00';
    const finalTime = '10:00';
    const wrapper = mount(
      <CellModal initialTime={initialTime} finalTime={finalTime} />
    );
    expect(
      wrapper
        .find('input')
        .at(0)
        .props().defaultValue
    ).toEqual(initialTime);
    expect(
      wrapper
        .find('input')
        .at(1)
        .props().defaultValue
    ).toEqual(finalTime);
  });

  it('should call onCancel when cancel the creation', () => {
    const onCancelMock = jest.fn();
    const wrapper = mount(<CellModal onCancel={onCancelMock} />);
    wrapper.find('.modal-wrapper').simulate('mousedown');
    expect(onCancelMock).toHaveBeenCalled();
  });

  it('should position the modal before the cell if cellX is greater than the modalWidth', () => {
    const gutter = 16;
    const modalWidth = 400;
    const cellBoundings = {
      x: 500,
    };
    const modalX = cellBoundings.x - modalWidth - gutter;
    const wrapper = mount(<CellModal cellBoundings={cellBoundings} />);
    expect(wrapper.find('.CellModal').props().style.marginLeft).toEqual(
      `${modalX}px`
    );
  });

  it('should position the modal after the cell if cellX is less than the modalWidth', () => {
    const gutter = 16;
    const cellBoundings = {
      x: 80,
      width: 80,
    };
    const modalX = cellBoundings.x + cellBoundings.width + gutter;
    const wrapper = mount(<CellModal cellBoundings={cellBoundings} />);
    expect(wrapper.find('.CellModal').props().style.marginLeft).toEqual(
      `${modalX}px`
    );
  });

  it('should stopPropagation onMouseDown on CellModal', () => {
    const wrapper = mount(<CellModal />);
    const event = {
      stopPropagation: jest.fn(),
    };
    wrapper.find('.CellModal').simulate('mousedown', event);
    expect(event.stopPropagation).toHaveBeenCalled();
  });

  it('should fire onTimeChange after edit the inputs', () => {
    const initialTime = '08:00';
    const finalTime = '10:00';
    const onTimeChangeMock = jest.fn();
    const wrapper = mount(
      <CellModal
        initialTime={initialTime}
        finalTime={finalTime}
        onTimeChange={onTimeChangeMock}
      />
    );

    const eventMock = {
      target: {
        value: '01:00',
      },
    };

    let expectValue = [eventMock.target.value, finalTime];
    wrapper
      .find('input')
      .at(0)
      .simulate('change', eventMock);
    expect(onTimeChangeMock).toHaveBeenCalledWith(expectValue);

    expectValue = [eventMock.target.value, eventMock.target.value];
    wrapper
      .find('input')
      .at(1)
      .simulate('change', eventMock);
    expect(onTimeChangeMock).toHaveBeenCalledWith(expectValue);
  });
});
