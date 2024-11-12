import React from 'react';

const DateTimeInput = ({ label, name, value, onChange }) => (
  <div className="flex items-center mb-4">
    <label className="font-semibold w-1/4 text-lg mr-4">{label}:</label>
    <input
      type="datetime-local"
      name={name}
      value={value}
      onChange={onChange}
      className="w-3/4 p-3 border border-gray-300 rounded shadow-inner"
    />
  </div>
);

export default DateTimeInput;

