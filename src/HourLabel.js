import React from 'react';
import './styles/HourLabel.scss';

function HourLabel ({ label }) {
  return (
    <div className="HourLabel">
      <span>{label}</span>
    </div>
  );
}

export default HourLabel;
