import React, { PureComponent } from 'react';
import WeekDay from './WeekDay';
import { keyBy } from 'lodash';
import './styles/WeekDaysList.scss';

class WeekDaysList extends PureComponent {
  weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Friday', 'Saturday'];

  renderRowLines() {
    const { hoursRange } = this.props;
    hoursRange.pop();
    return hoursRange.map(row => <div key={row} className="rowLine" />);
  }

  renderDays() {
    const {
      weekDays,
      props: { selectedRanges },
    } = this;
    const ranges = keyBy(selectedRanges, 'day');
    return weekDays.map((day, i) => (
      <WeekDay
        key={day}
        label={weekDays[i]}
        selectedHours={ranges[i] ? ranges[i].hours : undefined}
      />
    ));
  }

  render() {
    return (
      <div className="WeekDaysList">
        <div className="rowLines" aria-hidden="true">
          {this.renderRowLines()}
        </div>
        {this.renderDays()}
      </div>
    );
  }
}

export default WeekDaysList;
