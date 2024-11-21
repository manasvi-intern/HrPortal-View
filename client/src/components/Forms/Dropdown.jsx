import React from 'react';
const Dropdown = ({ label, name, options, value, onChange, placeholder  }) => {
  return (
  <div className="flex items-center mb-4">
    <label className="font-semibold w-1/4 text-lg mr-4">{label}:</label>
    <select
      name={name}
      value={value}
      onChange={onChange}
      className="w-3/4 p-3 border border-gray-300 rounded shadow-inner"
    >
       <option value="" disabled hidden>
       {placeholder}
        </option>
      {options.map((option) => (
      <option key={option.key} value={option.value}>
         {option.label} 
         </option>
      ))}
    </select>
  </div>
);
};


export default Dropdown;

