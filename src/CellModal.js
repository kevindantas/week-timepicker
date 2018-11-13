import React, { Component } from 'react';
import './styles/CellModal.scss';

/**
 * TODO: Use React portals to create the modal
 * @see https://reactjs.org/docs/portals.html
 */
class CellModal extends Component {
  state = {
    initialTime: this.props.initialTime,
    finalTime: this.props.finalTime,
  };

  stopPropagation = e => {
    e.stopPropagation();
  };

  handleTimeChange = (e, type) => {
    this.setState(
      {
        [`${type}Time`]: e.target.value,
      },
      this.updateTime
    );
  };

  updateTime = () => {
    const pattern = /\d{2}:\d{2}/;
    const { initialTime, finalTime } = this.state;
    if (pattern.test(initialTime) && pattern.test(finalTime)) {
      this.props.onTimeChange([initialTime, finalTime]);
    }
  };

  render() {
    const {
      cellBoundings: { y, x, width } = {},
      onConfirmTime,
      initialTime,
      finalTime,
      onCancel,
    } = this.props;

    const modalWidth = 400;
    const gutter = 16;
    let modalX = 0;
    if (modalWidth + gutter < x) {
      modalX = x - modalWidth - gutter;
    } else {
      modalX = x + width + gutter;
    }

    const spacerStyle = {
      maxHeight: `${y}px`,
    };

    const modalStyle = {
      marginLeft: `${modalX}px`,
    };

    const pattern = '\\d{2}:\\d{2}';
    return (
      <div
        className="modal-wrapper modal-wrapper--active"
        onMouseDown={onCancel}
      >
        <div className="modal-spacer" style={spacerStyle} />
        <div
          className="CellModal"
          role="dialog"
          style={modalStyle}
          onMouseDown={this.stopPropagation}
        >
          <form>
            <h4>Confirm selected time</h4>
            <div className="CellModal-inputs">
              <input
                maxLength={5}
                pattern={pattern}
                type="text"
                defaultValue={initialTime}
                onChange={e => this.handleTimeChange(e, 'initial')}
              />
              <input
                maxLength={5}
                pattern={pattern}
                type="text"
                defaultValue={finalTime}
                onChange={e => this.handleTimeChange(e, 'final')}
              />
            </div>
            <div className="CellModal-actions">
              <button
                className="CellModal-cancelButton"
                type="button"
                onClick={onCancel}
              >
                Cancel
              </button>
              <button
                className="CellModal-confirmButton"
                type="submit"
                onClick={onConfirmTime}
              >
                Confirm
              </button>
            </div>
          </form>
        </div>
        <div className="modal-bottom-spacing" />
      </div>
    );
  }
}

export default CellModal;
