import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../../components/Dashboard/Sidebar';
import RightTask from '../../components/Dashboard/RightTask';

const HRDB = () => {
  const navigate = useNavigate(); 
  const [showFeedbackDropdown, setShowFeedbackDropdown] = useState(false);
  const dropdownRef = useRef(null); // To detect outside click

  const handleFeedbackClick = () => {
    setShowFeedbackDropdown((prev) => !prev); // Toggle dropdown visibility
  };

  // Handle click outside to close the dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowFeedbackDropdown(false);
      }
    };

    // Add event listener when dropdown is open
    document.addEventListener("mousedown", handleClickOutside);
    
    // Clean up the event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showFeedbackDropdown]);

  
  return (
    <div className="flex mb-10 font-sans" style={{ fontFamily: 'Inria Sans, sans-serif' }}>
      {/* Sidebar */}
      <Sidebar />

      {/* Middle Section */}
      <div className="flex-1 bg-gray-100 shadow-md p-8 font-sans" style={{ fontFamily: 'Inria Sans, sans-serif' }}>
        <h1 className="text-2xl font-bold">Welcome, [Person Name]!</h1>
        <div className="grid grid-cols-3 gap-10 mt-20">
          {/* Job Requirements */}
          <div
            className="bg-white text-[#025686] p-6 shadow-lg rounded-lg cursor-pointer hover:bg-gray-200 hover:text-orange-500"
            onClick={() => navigate('/list-of-candidate')}
          >
            <h2 className="text-lg font-bold">Level 4 feedback</h2>
          </div>

          {/* Current Jobs */}
          <div
            className="bg-white text-[#025686] p-6 shadow-lg rounded-lg cursor-pointer hover:bg-gray-200 hover:text-orange-500"
            onClick={() => navigate('/jobs/current-jobs')}
          >
            <h2 className="text-lg font-bold">Current Jobs</h2>
          </div>

          {/* Past Jobs */}
          <div
            className="bg-white text-[#025686] p-6 shadow-lg rounded-lg cursor-pointer hover:bg-gray-200 hover:text-orange-500"
            onClick={() => navigate('/jobs/past-jobs')}
          >
            <h2 className="text-lg font-bold">Past Jobs</h2>
          </div>

          {/* Feedback Form with Dropdown */}
          <div className="relative bg-white text-[#025686] p-6 shadow-lg rounded-lg cursor-pointer hover:bg-gray-200 hover:text-orange-500">
            <div onClick={handleFeedbackClick}>
              <h2 className="text-lg font-bold">Offer Letter Release & Status Update</h2>
            </div>

            {showFeedbackDropdown && (
              <div className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-lg w-full">
                <div
                  className="p-4 hover:bg-orange-500 hover:text-white cursor-pointer"
                  onClick={() => navigate('/offer-letter-release')}
                >
                  Offer Letter Release
                </div>
                <div
                  className="p-4 hover:bg-orange-500 hover:text-white cursor-pointer"
                  onClick={() => navigate('/status-update')}
                >
                  Status Update
                </div>
              </div>
            )}
          </div>

          {/* Documentation */}
          <div
            className="bg-white text-[#025686] p-6 shadow-lg rounded-lg cursor-pointer hover:bg-gray-200 hover:text-orange-500"
            onClick={() => navigate('/documentation')}
          >
            <h2 className="text-lg font-bold">Documentation</h2>
          </div>

          <div
            className="bg-white text-[#025686] p-6 shadow-lg rounded-lg cursor-pointer hover:bg-gray-200 hover:text-orange-500"
            onClick={() => navigate('/candidate-list')}
          >
            <h2 className="text-lg font-bold">Tracker</h2>
          </div>
        </div>
      </div>

      

      {/* Right Section - Left blank for now */}
      <div className="hidden md:flex md:w-1/5">
        <RightTask />
      </div>
    </div>
  );
};

export default HRDB;