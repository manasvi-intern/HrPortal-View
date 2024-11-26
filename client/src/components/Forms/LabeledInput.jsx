import React from 'react';

const LabeledInput = ({ label, name, value, readOnly = true, className = '' }) => {
    return (
      <div className="flex items-center mb-4">
        <label htmlFor={name} className="font-semibold w-1/4 text-lg mr-4">
          {label}
        </label>
        <input
          id={name}
          name={name}
          value={value}
          readOnly={readOnly}
          className={`w-3/4 p-0 bg-transparent border-none focus:ring-0 text-black ${className}`}
        
        />
      </div>
    );
  };

export default LabeledInput;