import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Layouts/Navbar';
function LevelOneFb() {

  const [communicationRating, setCommunicationRating] = useState(null);
  const [profileFitmentRating, setProfileFitmentRating] = useState(null);
  const [travelFlexibilityRating, setTravelFlexibilityRating] = useState(null);
  const [budgetFitmentRating, setBudgetFitmentRating] = useState(null);

  const handleRatingClick = (value) => {
    setRating(value);
  };

  const navigate = useNavigate();
  const handleNavigation = () => {
    navigate('/tracker');
  };

  return (
    <div>
      <Navbar />
    <div className="w-full max-w-screen-2xl mx-auto p-4" style={{ fontFamily: 'Inria Sans, sans-serif' }}>
      {/* Button Section */}
      <div className="mb-8">
        <button onClick={handleNavigation} className="flex items-center px-4 py-2 bg-white text-black-600 font-semibold hover:text-orange-500 hover:bg-gray-100 rounded shadow-md hover:shadow-lg transition duration-200 ease-in-out mb-4 mt-20">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 mr-0.5">
            <path d="M15 19l-7-7 7-7" />
          </svg>
          Access Hiring Process Overview
        </button>
      </div>

    <div className="p-6 bg-gray-100 min-h-screen font-sans" style={{ fontFamily: 'Inria Sans, sans-serif' }}>
      {/* Form Heading */}
      <h2 className="text-3xl font-semibold mb-8 text-[#055484]">Talent Acquisition Feedback Form</h2>

      <form className="space-y-8">
        {/* Candidate Name */}
        <div className="flex items-center mb-4">
          <label className="font-semibold w-1/4 text-lg mr-4">Name of the Candidate:</label>
          <input
            type="text"
            placeholder="Enter candidate's name"
            className="border border-gray-300 p-3 rounded shadow-inner w-3/4"
          />
        </div>

        {/* Role and Position Applied */}
        <div className="flex items-center mb-4">
          <label className="font-semibold w-1/4 text-lg mr-4">Position Applied:</label>
          <select className="border border-gray-300 p-3 rounded shadow-inner w-3/4">
            <option value="" disabled selected hidden>
              Select Position
            </option>
            <option value=" "></option>
            <option value=" "></option>
          </select>
        </div>
        
        <div className="flex items-center mb-4">
          <label className="font-semibold w-1/4 text-lg mr-4">Name of the Interviewer:</label>
          <select className="border border-gray-300 p-3 rounded shadow-inner w-3/4">
            <option value="" disabled selected hidden>
              Select Name of the Interviewer
            </option>
            <option value=" "></option>
            <option value=" "></option>
          </select>
        </div>
        
        {/* Date & Time of Interview */}
        <div className="flex items-center mb-4">
          <label className="font-semibold w-1/4 text-lg mr-4">Date & Time of Interview:</label>
          <input
            type="datetime-local"
            className="border border-gray-300 p-3 rounded shadow-inner w-3/4"
          />
        </div>
        {/* source */}
        <div className="flex items-center mb-4">
          <label className="font-semibold w-1/4 text-lg mr-4">Source of the Candidate:</label>
          <input
            type="text"
            placeholder="Enter Source"
            className="border border-gray-300 p-3 rounded shadow-inner w-3/4"
          />
        </div>

        {/* Rating Scale Definition */}
        <div>
          <h2 className="font-semibold text-xl">Rating Scale Definition</h2>
          <p className="text-lg text-gray-800">
            KEY 0 - Abysmal, 1 - Poor, 2 - Fair, 3 - Good, 4 - Very Good, 5 - Excellent
          </p>
        </div>

       {/* Communication Skill Rating */}
      <div className="flex items-center mb-4">
        <label className="font-semibold w-1/4 text-lg mr-4">Communication Skill:</label>
        <div className="flex items-center w-3/4 justify-end">
          {[1, 2, 3, 4, 5, 6].map((value, index) => (
            <React.Fragment key={value}>
              <label className="flex items-center">
                <input
                  type="radio"
                  value={value}
                  checked={communicationRating === value}
                  onChange={() => setCommunicationRating(value)} // Update only the communication rating
                  className="hidden"
                />
                <span
                  className={`w-5 h-5 rounded-full flex items-center justify-center border-2 cursor-pointer mx-0 ${
                    communicationRating >= value
                      ? communicationRating >= 5
                        ? 'bg-green-500 border-black'
                        : communicationRating >= 3
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

      {/* Additional Feedback */}
      <div className="flex items-start mb-4">
        <label className="font-semibold w-1/4 text-lg mr-4"></label>
        <textarea
          placeholder="Remarks if any"
          className="border border-gray-300 p-3 rounded shadow-inner w-3/4"
          rows="2"
        />
      </div>

      {/* Profile fitment for the position Rating */}
      <div className="flex items-center mb-4">
        <label className="font-semibold w-1/4 text-lg mr-4">Profile fitment for the position:</label>
        <div className="flex items-center w-3/4 justify-end">
          {[1, 2, 3, 4, 5, 6].map((value, index) => (
            <React.Fragment key={value}>
              <label className="flex items-center">
                <input
                  type="radio"
                  value={value}
                  checked={profileFitmentRating === value}
                  onChange={() => setProfileFitmentRating(value)} // Update only the profile fitment rating
                  className="hidden"
                />
                <span
                  className={`w-5 h-5 rounded-full flex items-center justify-center border-2 cursor-pointer mx-0 ${
                    profileFitmentRating >= value
                      ? profileFitmentRating >= 5
                        ? 'bg-green-500 border-black'
                        : profileFitmentRating >= 3
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

      {/* Additional Feedback */}
      <div className="flex items-start mb-4">
        <label className="font-semibold w-1/4 text-lg mr-4"></label>
        <textarea
          placeholder="Remarks if any"
          className="border border-gray-300 p-3 rounded shadow-inner w-3/4"
          rows="2"
        />
      </div>

      {/* Candidate Shift & Travel flexibility Rating */}
      <div className="flex items-center mb-4">
        <label className="font-semibold w-1/4 text-lg mr-4">Candidate Shift & Travel flexibility:</label>
        <div className="flex items-center w-3/4 justify-end">
          {[1, 2, 3, 4, 5, 6].map((value, index) => (
            <React.Fragment key={value}>
              <label className="flex items-center">
                <input
                  type="radio"
                  value={value}
                  checked={travelFlexibilityRating === value}
                  onChange={() => setTravelFlexibilityRating(value)} // Update only the travel flexibility rating
                  className="hidden"
                />
                <span
                  className={`w-5 h-5 rounded-full flex items-center justify-center border-2 cursor-pointer mx-0 ${
                    travelFlexibilityRating >= value
                      ? travelFlexibilityRating >= 5
                        ? 'bg-green-500 border-black'
                        : travelFlexibilityRating >= 3
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

      {/* Additional Feedback */}
      <div className="flex items-start mb-4">
        <label className="font-semibold w-1/4 text-lg mr-4"></label>
        <textarea
          placeholder="Remarks if any"
          className="border border-gray-300 p-3 rounded shadow-inner w-3/4"
          rows="2"
        />
      </div>

      {/* Budget fitment Rating */}
      <div className="flex items-center mb-4">
        <label className="font-semibold w-1/4 text-lg mr-4">Budget fitment:</label>
        <div className="flex items-center w-3/4 justify-end">
          {[1, 2, 3, 4, 5, 6].map((value, index) => (
            <React.Fragment key={value}>
              <label className="flex items-center">
                <input
                  type="radio"
                  value={value}
                  checked={budgetFitmentRating === value}
                  onChange={() => setBudgetFitmentRating(value)} // Update only the budget fitment rating
                  className="hidden"
                />
                <span
                  className={`w-5 h-5 rounded-full flex items-center justify-center border-2 cursor-pointer mx-0 ${
                    budgetFitmentRating >= value
                      ? budgetFitmentRating >= 5
                        ? 'bg-green-500 border-black'
                        : budgetFitmentRating >= 3
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

      {/* Additional Feedback */}
      <div className="flex items-start mb-4">
        <label className="font-semibold w-1/4 text-lg mr-4"></label>
        <textarea
          placeholder="Remarks if any"
          className="border border-gray-300 p-3 rounded shadow-inner w-3/4"
          rows="2"
        />
      </div>
        {/*job gaps*/}
        <div className="flex items-center mb-4">
          <label className="font-semibold w-1/4 text-lg mr-4">Job Gaps(if any):</label>
          <textarea
            placeholder=" "
            className="border border-gray-300 p-3 rounded shadow-inner w-3/4"
            rows="2"
          />
        </div>
        
        {/* Education ( Regular / Distance):*/}
        <div className="flex items-center mb-4">
          <label className="font-semibold w-1/4 text-lg mr-4">Education ( Regular / Distance):</label>
          <textarea
            placeholder=" "
            className="border border-gray-300 p-3 rounded shadow-inner w-3/4"
            rows="2"
          />
        </div>
        
        {/* Overall Comments :*/}
        <div className="flex items-center mb-4">
          <label className="font-semibold w-1/4 text-lg mr-4">Overall Comments:</label>
          <textarea
            placeholder=" "
            className="border border-gray-300 p-3 rounded shadow-inner w-3/4"
            rows="4"
          />
        </div>

        {/* Submit Button */}
        <div className="flex justify-end mt-8">
        <button
        type="submit"
        className="bg-[#055484] text-white py-2 px-6 rounded-full shadow-md  hover:bg-gray-100 hover:text-orange-500
        transition duration-200 ease-in-out text-lg"
        >
        Submit
         </button>
        </div>

      </form>
    </div>
    </div>
    </div>
  );
}

export default LevelOneFb;