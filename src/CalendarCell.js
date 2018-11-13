import React, { Fragment, PureComponent, createRef } from 'react';
import { calculatePositionFromTime } from './utils';
import './styles/CalendarCell.scss';
import CellModal from './CellModal';

class CalendarCell extends PureComponent {
  cellElement = createRef();
  rAF = null; // store the requestAnimationFrame id used to update the cellBoundings

  handleTimeChange = values => {
    this.props.onTimeChange(values);
  };

  updateCellPosition() {
    // rAF wait the next tick get the correct cell boundings
    // and update the CellModal with the correct cell position
    this.rAF = window.requestAnimationFrame(() => {
      this.forceUpdate();
      window.cancelAnimationFrame(this.rAF);
    });
  }

  render() {
    const {
      isDraft,
      showModal,
      initialTime,
      finalTime,
      onCancel,
      onConfirmTime,
    } = this.props;
    const cellPosition = calculatePositionFromTime(initialTime);
    let cellHeight = 0;
    if (finalTime) {
      cellHeight = calculatePositionFromTime(finalTime) - cellPosition;
    }

    const cellStyle = {
      top: `${cellPosition}px`,
      height: `${cellHeight}px`,
    };
    const draftClass = isDraft ? 'CalendarCell--draft' : '';
    let cellBoundings;
    if (this.cellElement.current) {
      const { current } = this.cellElement;
      cellBoundings = current.getBoundingClientRect();
    }

    this.updateCellPosition();

    return (
      <Fragment>
        <div
          ref={this.cellElement}
          role="button"
          tabIndex={0}
          className={`CalendarCell ${draftClass}`}
          style={cellStyle}
        >
          <span>
            {initialTime}
            {finalTime && `- ${finalTime}`}
          </span>
          <div className="CalendarCell-handle" />
        </div>
        {showModal && (
          <CellModal
            onCancel={onCancel}
            cellBoundings={cellBoundings}
            finalTime={finalTime}
            initialTime={initialTime}
            cellElement={this.cellElement}
            onTimeChange={this.handleTimeChange}
            onConfirmTime={onConfirmTime}
          />
        )}
      </Fragment>
    );
  }
}

export default CalendarCell;
