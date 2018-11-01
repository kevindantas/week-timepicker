import React, { PureComponent } from 'react';
import './styles/WeekDay.scss';
import CalendarCell from './CalendarCell';

class WeekDay extends PureComponent {
  renderCells() {
    const { selectedHours = [] } = this.props;
    return selectedHours.map(hour => <CalendarCell key={hour.initialTime} {...hour} />);
  }
  render() {
    return (
      <div className="WeekDay">
        {this.renderCells()}
      </div>
    );
  }
}

export default WeekDay;
