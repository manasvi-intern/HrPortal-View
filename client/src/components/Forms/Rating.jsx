// src/components/Rating.js
import React from 'react';

const Rating = ({ label, value, setValue }) => {
  return (
    <div className="flex items-center mb-4">
      <label className="font-semibold w-1/4 text-lg mr-4">{label}:</label>
      <div className="flex items-center w-3/4 justify-end">
        {[1, 2, 3, 4, 5, 6].map((ratingValue, index) => (
          <React.Fragment key={ratingValue}>
            <label className="flex items-center">
              <input
                type="radio"
                value={ratingValue}
                checked={value === ratingValue}
                onChange={() => setValue(ratingValue)}
                className="hidden"
              />
              <span
                className={`w-5 h-5 rounded-full flex items-center justify-center border-2 cursor-pointer mx-0 ${
                  value >= ratingValue
                    ? value >= 5
                      ? 'bg-green-500 border-black'
                      : value >= 3
                      ? 'bg-yellow-500 border-black'
                      : 'bg-red-500 border-black'
                    : 'bg-gray-200 border-black'
                }`}
              />
            </label>
            {index < 5 && <div className="w-10 h-0.5 bg-black mx-0" />}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Rating;