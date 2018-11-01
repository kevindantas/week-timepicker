import React from 'react';
import './styles/CalendarCell.scss';

const rowHeight = 48;
const minuteHeight = rowHeight / 60;
function CalendarCell({ initialTime, finalTime }) {

  const [ initialHour, initialMinute ] = initialTime.split(':');
  const hourPosition = Number(initialHour) * rowHeight;
  const minutePosition = Number(initialMinute) * minuteHeight;
  const cellPosition = hourPosition + minutePosition;

  const [ finalHour, finalMinute ] = finalTime.split(':');
  const hourCellHeight = Number(finalHour) * rowHeight;
  const minuteCellHeight = Number(finalMinute) * minuteHeight;
  const cellHeight = (hourCellHeight + minuteCellHeight) - cellPosition;

  const cellStyle = {
    top: `${cellPosition}px`,
    height: `${cellHeight}px`,
  }
  return (
    <div role="button" tabIndex={0} className="CalendarCell" style={cellStyle}>
      <span>{initialTime} - {finalTime}</span>
      <div className="CalendarCell-handle"></div>
    </div>
  );
}

export default CalendarCell;
