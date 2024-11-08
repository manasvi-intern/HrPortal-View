import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Layouts/Navbar';

function LevelTwoFb() {
  const [backgroundRating, setBackgroundRating] = useState(null);
  const [technicalRating, setTechnicalRating] = useState(null);
  const [accomplishmentRating, setAccomplishmentRating] = useState(null);
  const [leadershipRating, setLeadershipRating] = useState(null);
  const [presentationRating, setPresentationRating] = useState(null);
  const [planningRating, setPlanningRating] = useState(null);
  const [culturalFitRating, setCulturalFitRating] = useState(null);
  const [motivationRating, setMotivationRating] = useState(null);
  const [professionalRating, setProfessionalRating] = useState(null);

  // Function to calculate the total rating
  const calculateTotalRating = () => {
    const ratings = [
      backgroundRating,
      technicalRating,
      accomplishmentRating,
      leadershipRating,
      presentationRating,
      planningRating,
      culturalFitRating,
      motivationRating,
      professionalRating,
    ];
    const validRatings = ratings.filter((rating) => rating !== null); // Filter out null values
    const total = validRatings.reduce((acc, rating) => acc + rating, 0);
    const average = validRatings.length ? total / validRatings.length : 0; // Calculate average
    return average.toFixed(1); // Round to one decimal places
  };

  useEffect(() => {
    // Trigger re-render on any rating change
    calculateTotalRating();
  }, [
    backgroundRating,
    technicalRating,
    accomplishmentRating,
    leadershipRating,
    presentationRating,
    planningRating,
    culturalFitRating,
    motivationRating,
    professionalRating,
  ]);

  const navigate = useNavigate();
  const handleNavigation = () => {
    navigate('/tracker');
  };

  return (
    <div>
      <Navbar />
    <div className="w-full max-w-screen-2xl mx-auto p-4" style={{ fontFamily: 'Inria Sans, sans-serif' }}>
      {/* Form Heading */}
      <div className="mb-8">
      </div>

        <div className="p-6 bg-gray-100 min-h-screen font-sans" style={{ fontFamily: 'Inria Sans, sans-serif' }}>
            <h2 className="text-3xl font-semibold mb-8 text-[#055484]">Technical Interview Evaluation Form</h2>

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

        {/* Background Rating */}
        <div className="flex items-center mb-4">
          <label className="font-semibold w-1/4 text-lg mr-4">Background :</label>
          <div className="flex items-center w-3/4 justify-end">
            {[1, 2, 3, 4, 5, 6].map((value, index) => (
              <React.Fragment key={value}>
                <label className="flex items-center">
                  <input
                    type="radio"
                    value={value}
                    checked={backgroundRating === value}
                    onChange={() => setBackgroundRating(value)} // Update only the background rating
                    className="hidden"
                  />
                  <span
                    className={`w-5 h-5 rounded-full flex items-center justify-center border-2 cursor-pointer mx-0 ${
                      backgroundRating >= value
                        ? backgroundRating >= 5
                          ? 'bg-green-500 border-black'
                          : backgroundRating >= 3
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

        {/* Technical Knowledge & Prior working experience  Rating */}
      <div className="flex items-center mb-4">
        <label className="font-semibold w-1/4 text-lg mr-4">Technical Knowledge & Prior working experience :</label>
        <div className="flex items-center w-3/4 justify-end">
          {[1, 2, 3, 4, 5, 6].map((value, index) => (
            <React.Fragment key={value}>
              <label className="flex items-center">
                <input
                  type="radio"
                  value={value}
                  checked={technicalRating === value}
                  onChange={() => setTechnicalRating(value)} // Update only the Tehnical knowledge and prior working rating
                  className="hidden"
                />
                <span
                  className={`w-5 h-5 rounded-full flex items-center justify-center border-2 cursor-pointer mx-0 ${
                    technicalRating >= value
                      ?  technicalRating >= 5
                        ? 'bg-green-500 border-black'
                        : technicalRating >= 3
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
     
     
     {/* Accomplishments and Strength  Rating */}
     <div className="flex items-center mb-4">
        <label className="font-semibold w-1/4 text-lg mr-4">Accomplishments and Strength :</label>
        <div className="flex items-center w-3/4 justify-end">
          {[1, 2, 3, 4, 5, 6].map((value, index) => (
            <React.Fragment key={value}>
              <label className="flex items-center">
                <input
                  type="radio"
                  value={value}
                  checked={accomplishmentRating === value}
                  onChange={() => setAccomplishmentRating(value)} // Update only the travel flexibility rating
                  className="hidden"
                />
                <span
                  className={`w-5 h-5 rounded-full flex items-center justify-center border-2 cursor-pointer mx-0 ${
                    accomplishmentRating >= value
                      ?  accomplishmentRating >= 5
                        ? 'bg-green-500 border-black'
                        :  accomplishmentRating >= 3
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

      {/* People and Leadership Skills Rating */}
      <div className="flex items-center mb-4">
        <label className="font-semibold w-1/4 text-lg mr-4">People and Leadership Skills:</label>
        <div className="flex items-center w-3/4 justify-end">
          {[1, 2, 3, 4, 5, 6].map((value, index) => (
            <React.Fragment key={value}>
              <label className="flex items-center">
                <input
                  type="radio"
                  value={value}
                  checked={leadershipRating === value}
                  onChange={() => setLeadershipRating(value)} // Update only the leadershipRating rating
                  className="hidden"
                />
                <span
                  className={`w-5 h-5 rounded-full flex items-center justify-center border-2 cursor-pointer mx-0 ${
                    leadershipRating >= value
                      ?  leadershipRating >= 5
                        ? 'bg-green-500 border-black'
                        : leadershipRating >= 3
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
        
        {/* Presentation / Communication Skills Rating */}
      <div className="flex items-center mb-4">
        <label className="font-semibold w-1/4 text-lg mr-4">Presentation / Communication Skills:</label>
        <div className="flex items-center w-3/4 justify-end">
          {[1, 2, 3, 4, 5, 6].map((value, index) => (
            <React.Fragment key={value}>
              <label className="flex items-center">
                <input
                  type="radio"
                  value={value}
                  checked={presentationRating === value}
                  onChange={() => setPresentationRating(value)} // Update only the leadershipRating rating
                  className="hidden"
                />
                <span
                  className={`w-5 h-5 rounded-full flex items-center justify-center border-2 cursor-pointer mx-0 ${
                    presentationRating >= value
                      ?  presentationRating >= 5
                        ? 'bg-green-500 border-black'
                        : presentationRating >= 3
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
        
    {/* Flexibility / Planning and Organizing  Rating */}
      <div className="flex items-center mb-4">
        <label className="font-semibold w-1/4 text-lg mr-4">Flexibility / Planning and Organizing :</label>
        <div className="flex items-center w-3/4 justify-end">
          {[1, 2, 3, 4, 5, 6].map((value, index) => (
            <React.Fragment key={value}>
              <label className="flex items-center">
                <input
                  type="radio"
                  value={value}
                  checked={planningRating === value}
                  onChange={() => setPlanningRating(value)} // Update only the leadershipRating rating
                  className="hidden"
                />
                <span
                  className={`w-5 h-5 rounded-full flex items-center justify-center border-2 cursor-pointer mx-0 ${
                    planningRating >= value
                      ?   planningRating >= 5
                        ? 'bg-green-500 border-black'
                        :  planningRating >= 3
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
              
              
    {/* Organizational/Cultural fit Rating */}
    <div className="flex items-center mb-4">
        <label className="font-semibold w-1/4 text-lg mr-4">Organizational/Cultural fit:</label>
        <div className="flex items-center w-3/4 justify-end">
            {[1, 2, 3, 4, 5, 6].map((value, index) => (
            <React.Fragment key={value}>
              <label className="flex items-center">
                <input
                  type="radio"
                  value={value}
                  checked={culturalFitRating === value}
                  onChange={() => setCulturalFitRating(value)} // Update only the leadershipRating rating
                  className="hidden"
                />
                <span
                  className={`w-5 h-5 rounded-full flex items-center justify-center border-2 cursor-pointer mx-0 ${
                    culturalFitRating >= value
                      ?  culturalFitRating >= 5
                        ? 'bg-green-500 border-black'
                        : culturalFitRating >= 3
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



    {/*  Motivation / Initiative Rating */}
    <div className="flex items-center mb-4">
        <label className="font-semibold w-1/4 text-lg mr-4"> Motivation / Initiative :</label>
        <div className="flex items-center w-3/4 justify-end">
          {[1, 2, 3, 4, 5, 6].map((value, index) => (
            <React.Fragment key={value}>
              <label className="flex items-center">
                <input
                  type="radio"
                  value={value}
                  checked={motivationRating === value}
                  onChange={() => setMotivationRating(value)} // Update only the leadershipRating rating
                  className="hidden"
                />
                <span
                  className={`w-5 h-5 rounded-full flex items-center justify-center border-2 cursor-pointer mx-0 ${
                    motivationRating >= value
                      ?  motivationRating >= 5
                        ? 'bg-green-500 border-black'
                        : motivationRating >= 3
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


    {/* Professional Impression and Enthusiasm  Rating */}
    <div className="flex items-center mb-4">
        <label className="font-semibold w-1/4 text-lg mr-4">Professional Impression and Enthusiasm  :</label>
        <div className="flex items-center w-3/4 justify-end">
          {[1, 2, 3, 4, 5, 6].map((value, index) => (
            <React.Fragment key={value}>
              <label className="flex items-center">
                <input
                  type="radio"
                  value={value}
                  checked={professionalRating === value}
                  onChange={() => setProfessionalRating(value)} // Update only the leadershipRating rating
                  className="hidden"
                />
                <span
                  className={`w-5 h-5 rounded-full flex items-center justify-center border-2 cursor-pointer mx-0 ${
                    professionalRating >= value
                      ?   professionalRating >= 5
                        ? 'bg-green-500 border-black'
                        :  professionalRating >= 3
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


        {/* Total Rating */}
        <div className="flex items-center mb-4">
          <label className="font-semibold w-1/4 text-lg mr-4">Total Rating:</label>
          <span className="text-lg font-semibold text-[#055484]">{calculateTotalRating()}</span>
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
            className="bg-[#055484] text-white py-2 px-6 rounded-full shadow-md hover:bg-gray-100 hover:text-orange-500 transition duration-200 ease-in-out text-lg"
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

export default LevelTwoFb;