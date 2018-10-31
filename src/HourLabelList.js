import React from 'react';
import HourLabel from './HourLabel';
import { createRangeArray } from './utils';

function HourLabels({ range = [0, 23] }) {
  const hourRange = createRangeArray(...range);
  return (
    <div>
      {hourRange.map(hour => (
        <HourLabel key={hour} label={`${hour}:00`.padStart(5, '0')} />
      ))}
    </div>
  );
}

export default HourLabels;
