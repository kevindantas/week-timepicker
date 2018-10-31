import React, { PureComponent } from 'react';
import WeekDay from './WeekDay';
import './styles/WeekDaysList.scss';

class WeekDaysList extends PureComponent {
  renderRowLines() {
    const { hoursRange } = this.props;
    hoursRange.pop();
    return hoursRange.map(row => <div key={row} className="rowLine" />);
  }

  render() {
    return (
      <div className="WeekDaysList">
        <div className="rowLines" aria-hidden="true">
          {this.renderRowLines()}
        </div>
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
