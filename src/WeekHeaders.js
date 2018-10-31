import React from 'react';
import './styles/WeekHeaders.scss';

function WeekHeaders({
  days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ],
}) {
  return (
    <div className="WeekHeaders" role="row">
      <div className="WeekHeaders-hours"></div>
      {days.map(day => (
        <div key={day} className="DayHeader">
          <h2 className="DayHeader-title">{day}</h2>
        </div>
      ))}
    </div>
  );
}

export default WeekHeaders;
