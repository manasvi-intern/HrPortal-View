import React, { useState } from 'react';

const Dropdown = ({ label, name, options, value, onChange, placeholder }) => {
  const [search, setSearch] = useState(''); // State for search input
  const [isOpen, setIsOpen] = useState(false); // State to manage dropdown visibility

  // Filter options based on search input
  const filteredOptions = options.filter((option) =>
    option.label.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex items-center mb-4">
      <label className="font-semibold w-1/4 text-lg mr-4">{label}:</label>
      <div
        className="relative w-3/4"
        onBlur={() => setTimeout(() => setIsOpen(false), 200)} // Close dropdown on blur with delay
      >
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="w-full p-2 border border-gray-300 rounded bg-white text-start shadow-inner cursor-pointer"
        >
          {value ? options.find((opt) => opt.value === value)?.label : placeholder || 'Select an option'}
        </div>

        {isOpen && (
          <div className="absolute z-10 w-full mt-1 bg-white border text-start border-gray-300 rounded shadow-lg">
            <input
              type="text"
              placeholder="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full px-3 p-1 border-b border-gray-300 outline-none"
            />
            <ul className="max-h-48 overflow-y-auto">
              {filteredOptions.map((option) => (
                <li
                  key={option.key}
                  onClick={() => {
                    onChange({ target: { name, value: option.value } });
                    setIsOpen(false); // Close dropdown
                  }}
                  className="p-1 px-3 hover:bg-gray-100 cursor-pointer"
                >
                  {option.label}
                </li>
              ))}
              {filteredOptions.length === 0 && (
                <li className="p-2 text-gray-500">No options found</li>
              )}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dropdown;