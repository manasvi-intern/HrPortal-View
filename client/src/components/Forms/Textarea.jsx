import React from 'react';

const Textarea = ({ label, placeholder, rows, className }) => {
  return (
    <div className="flex items-start mb-4">
      <label className="font-semibold w-1/4 text-lg mr-4">{label}</label>
      <textarea
        placeholder={placeholder}
        className={`border border-gray-300 p-3 rounded shadow-inner w-3/4 ${className}`}
        rows={rows}
      /> <br />
    </div>
  );
};

export default Textarea;