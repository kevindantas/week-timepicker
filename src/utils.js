export const createRangeArray = (initialValue, finalValue) => {
  if (
    (!initialValue && typeof initialValue !== 'number')
    || (!finalValue && typeof finalValue !== 'number')
  ) {
    throw Error('createRangeArray needs a valid `initialValue` and `finalValue`'                        );
  }
  const arrayLength = finalValue - initialValue + 1;
  if (arrayLength < 0) {
    throw Error('Invalid range!');
  }
  return Array(arrayLength)
    .fill()
    .map((item, index) => initialValue + index);
};
