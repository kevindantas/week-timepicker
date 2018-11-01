import React, { Component } from 'react';
import WeekCalendar from './WeekCalendar';
import './App.css';

const selectedRanges = [
  {
    day: 0,
    hours: [
      {
        initialTime: '10:00',
        finalTime: '17:00',
      },
      {
        initialTime: '20:00',
        finalTime: '23:00',
      },
    ],
  },
  {
    day: 1,
    hours: [
      {
        initialTime: '09:00',
        finalTime: '18:00',
      },
      {
        initialTime: '20:00',
        finalTime: '23:00',
      },
    ],
  },
  {
    day: 3,
    hours: [
      {
        initialTime: '09:00',
        finalTime: '18:00',
      },
      {
        initialTime: '20:00',
        finalTime: '23:00',
      },
    ],
  },
  {
    day: 4,
    hours: [
      {
        initialTime: '09:00',
        finalTime: '18:00',
      },
      {
        initialTime: '20:00',
        finalTime: '23:00',
      },
    ],
  },
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Week Calendar</h1>
          <WeekCalendar selectedRanges={selectedRanges} />
        </header>
      </div>
    );
  }
}

export default App;
