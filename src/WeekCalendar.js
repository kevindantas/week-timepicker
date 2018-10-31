import React from 'react';
import HourLabelList from './HourLabelList';
import WeekDaysList from './WeekDaysList';
import WeekHeaders from './WeekHeaders';
import { createRangeArray } from './utils';
import './styles/WeekCalendar.scss';

function WeekCalendar({ hoursRange = [0, 23] }) {
  const calendarHours = createRangeArray(...hoursRange);
  return (
    <div className="WeekCalendar">
      <WeekHeaders />
      <div className="WeekCalendar-content">
        <HourLabelList range={calendarHours} />
        <WeekDaysList hoursRange={calendarHours} />
      </div>
    </div>
  );
}

export default WeekCalendar;
