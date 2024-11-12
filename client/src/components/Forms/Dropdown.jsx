import React from 'react';

const Dropdown = ({ label, name, options, value, onChange }) => (
  <div className="flex items-center mb-4">
    <label className="font-semibold w-1/4 text-lg mr-4">{label}:</label>
    <select
      name={name}
      value={value}
      onChange={onChange}
      className="w-3/4 p-3 border border-gray-300 rounded shadow-inner"
    >
      <option value="" disabled hidden>
        Select {label}
      </option>
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  </div>
);

export default Dropdown;
