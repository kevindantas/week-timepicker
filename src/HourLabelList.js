import React from 'react';
import HourLabel from './HourLabel';
import './styles/HourLabelList.scss';

function HourLabels({ range }) {

  return (
    <div className="HourLabelList">
      {range.map(hour => (
        <HourLabel key={hour} label={`${hour}:00`.padStart(5, '0')} />
      ))}
    </div>
  );
}

export default HourLabels;
