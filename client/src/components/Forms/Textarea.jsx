import React, { useState } from 'react';

const Textarea = ({ label, name, value, onChange, placeholder, rows = 3, className = '' }) => {
  const [error, setError] = useState(''); // Stores error message

  const handleInputChange = (e) => {
    const inputValue = e.target.value;

    if (inputValue.length > 250) {
      setError('Should not exceed 250 characters');
    } else if (inputValue.length > 0) {
      setError('Should not exceed 250 characters'); // Show while typing
    } else {
      setError(''); // Clear if input is empty
    }

    if (inputValue.length <= 250) {
      onChange(e); // Propagate the input if within limit
    }
  };

  const handleBlur = (e) => {
    const inputValue = e.target.value;

    if (inputValue.length <= 250 && inputValue.length > 0) {
      setError(''); // Clear error on blur if within limit
    }
  };

  return (
    <div className="flex items-start mb-4">
      <label htmlFor={name} className="font-semibold w-1/4 text-lg mr-4">
        {label}
      </label>
      <div className="w-3/4">
        <textarea
          id={name}
          name={name}
          value={value}
          onChange={handleInputChange}
          onBlur={handleBlur}
          placeholder={placeholder || `Enter ${label.toLowerCase()}`}
          rows={rows}
          className={`border border-gray-300 p-3 rounded shadow-inner w-full ${className}`}
          maxLength={251} // Prevent typing beyond 250 characters
        />
        {error && <p className="text-red-500 text-sm mt-1">{error}</p>} {/* Error below */}
      </div>
    </div>
  );
};

export default Textarea;
