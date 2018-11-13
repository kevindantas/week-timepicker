import React, { PureComponent } from 'react';
import './styles/WeekDay.scss';
import CalendarCell from './CalendarCell';
import { calculateTimeFromPosition } from './utils';

class WeekDay extends PureComponent {
  state = {
    selectedHours: this.props.selectedHours || [],
    shouldDrawCell: false,
    newCellInitialTime: null,
    newCellFinalTime: null,
  };

  getCellTime(e) {
    const elementCoords = e.target
      .closest('.WeekDay')
      .getClientRects()
      .item(0);
    const { y } = elementCoords;
    const { clientY } = e;
    const newCellY = clientY - y;
    return calculateTimeFromPosition(newCellY);
  }

  addNewCell() {
    this.setState(
      ({ selectedHours, newCellInitialTime, newCellFinalTime }) => ({
        selectedHours: selectedHours.concat({
          initialTime: newCellInitialTime,
          finalTime: newCellFinalTime,
        }),
        newCellInitialTime: null,
      })
    );
  }

  handleConfirmTime = () => {
    this.addNewCell();
  };

  handleTimeChange = values => {
    const [newCellInitialTime, newCellFinalTime] = values;

    this.setState({
      newCellInitialTime,
      newCellFinalTime,
    });
  };

  cancelNewCell = e => {
    e.stopPropagation();
    this.setState({
      shouldDrawCell: false,
      newCellInitialTime: null,
      newCellFinalTime: null,
    });
  };

  startDrawNewCell = e => {
    e.persist();
    const newCellInitialTime = this.getCellTime(e);
    this.setState({
      shouldDrawCell: true,
      newCellInitialTime,
      newCellFinalTime: null,
    });
  };

  moveNewCell = e => {
    const { shouldDrawCell } = this.state;
    if (!shouldDrawCell) return;
    const newCellFinalTime = this.getCellTime(e);
    this.setState({
      newCellFinalTime,
    });
  };

  finishNewCell = e => {
    const { shouldDrawCell } = this.state;
    if (!shouldDrawCell) return;
    const newCellFinalTime = this.getCellTime(e);
    this.setState({
      shouldDrawCell: false,
      newCellFinalTime,
    });
  };

  renderCells() {
    const { selectedHours } = this.state;
    return selectedHours.map(hour => (
      <CalendarCell key={hour.initialTime} {...hour} />
    ));
  }

  renderNewCell() {
    const { newCellInitialTime, newCellFinalTime, shouldDrawCell } = this.state;
    if (!newCellInitialTime) return null;
    return (
      <CalendarCell
        isDraft
        onCancel={this.cancelNewCell}
        showModal={!shouldDrawCell}
        initialTime={newCellInitialTime}
        finalTime={newCellFinalTime}
        onTimeChange={this.handleTimeChange}
        onConfirmTime={this.handleConfirmTime}
      />
    );
  }

  render() {
    return (
      <div
        className="WeekDay"
        onMouseDown={this.startDrawNewCell}
        onMouseMove={this.moveNewCell}
        onMouseUp={this.finishNewCell}
      >
        {this.renderCells()}
        {this.renderNewCell()}
      </div>
    );
  }
}

export default WeekDay;
