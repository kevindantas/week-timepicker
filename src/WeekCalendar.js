import React from 'react';
import HourLabelList from './HourLabelList';
import WeekDaysList from './WeekDaysList';
import './styles/WeekCalendar.scss';

function WeekCalendar({ hoursRange }) {

  return (
    <div className="WeekCalendar">
      <HourLabelList range={hoursRange} />
      <WeekDaysList />
    </div>
  );
}

export default WeekCalendar;
