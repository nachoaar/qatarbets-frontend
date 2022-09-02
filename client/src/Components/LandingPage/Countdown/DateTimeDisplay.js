import React from 'react';

const DateTimeDisplay = ({ value, type, isDanger }) => {
  return (
    <div className="text-center">
      <p className="translate-y-1 text-3xl">{value}</p>
      <span>{type}</span>
    </div>
  );
};

export default DateTimeDisplay;
