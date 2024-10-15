import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../../components/Dashboard/Sidebar';
import RightTask from '../../components/Dashboard/RightTask';

const CooDB = () => {
  const navigate = useNavigate();
  const [showFeedbackDropdown, setShowFeedbackDropdown] = useState(false);
  const dropdownRef = useRef(null); 

  const handleFeedbackClick = () => {
    setShowFeedbackDropdown((prev) => !prev); 
  };

  // Handle click outside to close the dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowFeedbackDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
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
          
          {/* Approve Status Update */}
          <div
            className="bg-white text-[#025686] p-6 shadow-lg rounded-lg cursor-pointer hover:bg-gray-200 hover:text-orange-500"
            onClick={() => navigate('/coo-approval')}
          >
            <h2 className="text-lg font-bold">Approve </h2>
          </div>

          {/* View current jobs */}
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

          {/* Project List */}
          <div
            className="bg-white text-[#025686] p-6 shadow-lg rounded-lg cursor-pointer hover:bg-gray-200 hover:text-orange-500"
            onClick={() => navigate('/project-list')}
          >
            <h2 className="text-lg font-bold">Project List</h2>
          </div>

          {/* Feedback Form with Dropdown */}
          <div className="relative bg-white text-[#025686] p-6 shadow-lg rounded-lg cursor-pointer hover:bg-gray-200 hover:text-orange-500">
            <div onClick={handleFeedbackClick}>
              <h2 className="text-lg font-bold">View Feedback (All Levels)</h2>
            </div>

            {showFeedbackDropdown && (
              <div
                ref={dropdownRef}
                className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-lg w-full"
              >
                <div
                  className="p-4 hover:bg-orange-500 hover:text-white cursor-pointer"
                  onClick={() => navigate('/form-view/level-one')}
                >
                  Level 1 Feedback
                </div>
                <div
                  className="p-4 hover:bg-orange-500 hover:text-white cursor-pointer"
                  onClick={() => navigate('/form-view/level-two')}
                >
                  Level 2 Feedback
                </div>
                <div
                  className="p-4 hover:bg-orange-500 hover:text-white cursor-pointer"
                  onClick={() => navigate('/form-view/level-three')}
                >
                  Level 3 Feedback
                </div>
                <div
                  className="p-4 hover:bg-orange-500 hover:text-white cursor-pointer"
                  onClick={() => navigate('/form-view/level-four')}
                >
                  Level 4 Feedback
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="hidden md:flex md:w-1/5">
        <RightTask />
      </div>
    </div>
  );
};

export default CooDB;
