import { createRangeArray, calculatePositionFromTime, calculateTimeFromPosition } from '../utils';

describe('utils createRangeArray', () => {
  it('should create a array of numbers', () => {
    const rangeArray = createRangeArray(0, 5);
    const expectedRangeArray = [0, 1, 2, 3, 4, 5];
    expect(rangeArray).toEqual(expectedRangeArray);
  });

  it('should throw an error on missing parameters', () => {
    expect(() => createRangeArray()).toThrow();
  });

  it('initialValue should be greather than the finalValue', () => {
    expect(() => createRangeArray(8, 2)).toThrow();
  });
});


describe('calculatePositionFromTime', () => {
  it('should calculate cell position from hours', () => {
    const cellPosition = calculatePositionFromTime('08:00');
    const expectedCellPosition = 48 * 8;
    expect(cellPosition).toEqual(expectedCellPosition);
  });

  it('should calculate cell position from minutes', () => {
    const cellPosition = calculatePositionFromTime('08:50');
    const rowHeight = 48;
    const hourPosition = rowHeight * 8;
    const minutePosition = rowHeight / 60 * 50
    const expectedCellPosition = hourPosition + minutePosition;
    expect(cellPosition).toEqual(expectedCellPosition);
  });
});


describe('calculateTimeFromPosition', () => {
  it('should calculate cell position from hours', () => {
    const cellHour = calculateTimeFromPosition(0);
    const expectedHour = '00:00';
    expect(cellHour).toEqual(expectedHour);
  });


  it('should calculate cell position from hours and minutes', () => {
    const cellHour = calculateTimeFromPosition(72);
    const expectedHour = '01:30';
    expect(cellHour).toEqual(expectedHour);
  });
});

