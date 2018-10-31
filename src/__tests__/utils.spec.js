import { createRangeArray } from '../utils';

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
