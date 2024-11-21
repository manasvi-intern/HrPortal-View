import React from 'react';

const Textarea = ({ label, name, value, onChange, placeholder, rows = 3, className = '' }) => {
  return (
    <div className="flex items-start mb-4">
      <label htmlFor={name} className="font-semibold w-1/4 text-lg mr-4">
        {label}
      </label>
      <textarea
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder || `Enter ${label.toLowerCase()}`}
        rows={rows}
        className={`border border-gray-300 p-3 rounded shadow-inner w-3/4 ${className}`}
      />
    </div>
  );
};

export default Textarea;
