import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Layouts/Navbar';
import CandidateForm from '../../components/Forms/CIF1';
import Rating from '../../components/Forms/Rating';
import Textarea from '../../components/Forms/Textarea';

function LevelOneFb() {
  const [communicationRating, setCommunicationRating] = useState(null);
  const [profileFitmentRating, setProfileFitmentRating] = useState(null);
  const [travelFlexibilityRating, setTravelFlexibilityRating] = useState(null);
  const [budgetFitmentRating, setBudgetFitmentRating] = useState(null);
  const navigate = useNavigate();
  const handleNavigation = () => {
    navigate('/tracker');
  };

  return (
    <div>
      <Navbar />
      <div className="w-full max-w-screen-2xl mx-auto p-4" style={{ fontFamily: 'Inria Sans, sans-serif' }}>
        <div className="p-6 bg-gray-100 min-h-screen font-sans">
          <h2 className="text-3xl font-semibold mb-8 text-[#055484]">Talent Acquisition Feedback Form (Level - 1)</h2>
          <CandidateForm />
          <div>
            <h2 className="font-semibold text-xl">Rating Scale Definition</h2>
            <p className="text-lg text-gray-800">KEY 0 - Abysmal, 1 - Poor, 2 - Fair, 3 - Good, 4 - Very Good, 5 - Excellent</p>
          </div>
          <Rating label="Communication Skill" value={communicationRating} setValue={setCommunicationRating} />
          <Textarea label="Remarks if any" placeholder="Remarks on Communication" rows="2" />
          <Rating label="Profile fitment for the position" value={profileFitmentRating} setValue={setProfileFitmentRating} />
          <Textarea label="Remarks if any" placeholder="Remarks on Profile Fitment" rows="2" />
          <Rating label="Candidate Shift & Travel flexibility" value={travelFlexibilityRating} setValue={setTravelFlexibilityRating} />
          <Textarea label="Remarks if any" placeholder="Remarks on Travel Flexibility" rows="2" />
          <Rating label="Budget fitment" value={budgetFitmentRating} setValue={setBudgetFitmentRating} />
          <Textarea label="Remarks if any" placeholder="Remarks on Budget Fitment" rows="2" />
          <Textarea label="Job Gaps (if any)" placeholder="Enter details of job gaps" rows="2" />
          <Textarea label="Education (Regular / Distance)" placeholder="Enter education details" rows="2" />
          <Textarea label="Overall Comments" placeholder="Provide overall feedback" rows="4" />
          <div className="flex justify-end mt-8">
            <button type="submit" className="bg-[#055484] text-white py-2 px-6 rounded-full shadow-md hover:bg-gray-100 hover:text-orange-500 transition duration-200 ease-in-out text-lg">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LevelOneFb;