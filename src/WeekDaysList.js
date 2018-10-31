import React, { PureComponent } from 'react';
import WeekDay from './WeekDay';
import './styles/WeekDaysList.scss';

class WeekDaysList extends PureComponent {
  render() {
    return (
      <div className="WeekDaysList">
        <WeekDay label="Sunday" />
        <WeekDay label="Monday" />
        <WeekDay label="Tuesday" />
        <WeekDay label="Wednesday" />
        <WeekDay label="Thursday" />
        <WeekDay label="Friday" />
        <WeekDay label="Saturday" />
      </div>
    );
  }
}

export default WeekDaysList;
