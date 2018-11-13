export const createRangeArray = (initialValue, finalValue) => {
  if (
    (!initialValue && typeof initialValue !== 'number')
    || (!finalValue && typeof finalValue !== 'number')
  ) {
    throw Error('createRangeArray needs a valid `initialValue` and `finalValue`');
  }
  const arrayLength = finalValue - initialValue + 1;
  if (arrayLength < 0) {
    throw Error('Invalid range!');
  }
  return Array(arrayLength)
    .fill()
    .map((item, index) => initialValue + index);
};

export function calculatePositionFromTime(time, options = {}) {
  const { rowHeight = 48, minuteHeight = rowHeight / 60 } = options;

  const [ initialHour, initialMinute ] = time.split(':');
  const hourPosition = Number(initialHour) * rowHeight;
  const minutePosition = Number(initialMinute) * minuteHeight;
  return hourPosition + minutePosition;
}

export function calculateTimeFromPosition(position, options = {}) {
  const { rowHeight = 48 } = options;
  const time = position / rowHeight;
  const hour = parseInt(time, 10);
  const minutes = parseInt((time - hour) * 60, 10)

  const hourString = String(hour).padStart(2, '0');
  const minuteString = String(minutes).padStart(2, '0');
  
  return `${hourString}:${minuteString}`
}

