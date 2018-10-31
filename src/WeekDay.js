import React, { PureComponent } from 'react';
import './styles/WeekDay.scss';

class WeekDay extends PureComponent {
  render() {
    const {label}=this.props;
    return (
      <div>
        <h2 className="WeekDay-title">{label}</h2>
      </div>
    )
  }
}

export default WeekDay;
