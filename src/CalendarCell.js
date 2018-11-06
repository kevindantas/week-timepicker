import React from 'react';
import { calculatePositionFromTime } from './utils';
import './styles/CalendarCell.scss';

function CalendarCell({ isDraft, initialTime, finalTime }) {
  const cellPosition = calculatePositionFromTime(initialTime);
  let cellHeight = 0;
  if (finalTime) {
    cellHeight = calculatePositionFromTime(finalTime) - cellPosition;
  }

  const cellStyle = {
    top: `${cellPosition}px`,
    height: `${cellHeight}px`,
  };

  const draftClass = isDraft ? 'CalendarCell--draft' : '';
  return (
    <div role="button" tabIndex={0} className={`CalendarCell ${draftClass}`} style={cellStyle}>
      <span>
        {initialTime}
        {finalTime && `- ${finalTime}`}
      </span>
      <div className="CalendarCell-handle" />
    </div>
  );
}

export default CalendarCell;
