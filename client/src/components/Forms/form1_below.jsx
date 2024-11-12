// src/pages/CandidateEvaluationForm.js
import React, { useState } from 'react';
import Rating from './Rating';
import Textarea from './Textarea';

const CandidateEvaluationForm = () => {
  // State variables for ratings
  const [backgroundRating, setBackgroundRating] = useState(0);
  const [technicalRating, setTechnicalRating] = useState(0);
  const [accomplishmentRating, setAccomplishmentRating] = useState(0);
  const [leadershipRating, setLeadershipRating] = useState(0);
  const [presentationRating, setPresentationRating] = useState(0);
  const [planningRating, setPlanningRating] = useState(0);
  const [culturalFitRating, setCulturalFitRating] = useState(0);
  const [motivationRating, setMotivationRating] = useState(0);
  const [professionalRating, setProfessionalRating] = useState(0);

  // Function to calculate total rating (you can adjust based on your logic)
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
      professionalRating
    ];

    const total = ratings.reduce((acc, rating) => acc + rating, 0);
    return total / ratings.length;
  };

  return (
    <form>
      {/* Rating Sections */}
      <Rating label="Background" value={backgroundRating} setValue={setBackgroundRating} />
      <Textarea placeholder="Add comments here..." rows="2" />

      <Rating label="Technical Knowledge & Prior Working Experience" value={technicalRating} setValue={setTechnicalRating} />
      <Textarea placeholder="Add comments here..." rows="2" />

      <Rating label="Accomplishments and Strength" value={accomplishmentRating} setValue={setAccomplishmentRating} />
      <Textarea placeholder="Add comments here..." rows="2" />

      <Rating label="People and Leadership Skills" value={leadershipRating} setValue={setLeadershipRating} />
      <Textarea placeholder="Add comments here..." rows="2" />

      <Rating label="Presentation / Communication Skills" value={presentationRating} setValue={setPresentationRating} />
      <Textarea placeholder="Add comments here..." rows="2" />

      <Rating label="Flexibility / Planning and Organizing" value={planningRating} setValue={setPlanningRating} />
      <Textarea placeholder="Add comments here..." rows="2" />

      <Rating label="Organizational / Cultural Fit" value={culturalFitRating} setValue={setCulturalFitRating} />
      <Textarea placeholder="Add comments here..." rows="2" />

      <Rating label="Motivation / Initiative" value={motivationRating} setValue={setMotivationRating} />
      <Textarea placeholder="Add comments here..." rows="2" />

      <Rating label="Professional Impression and Enthusiasm" value={professionalRating} setValue={setProfessionalRating} />
      <Textarea placeholder="Add comments here..." rows="2" />

      {/* Feedback Sections */}
      <Textarea label="Overall Comments" placeholder="" rows={4} />

      {/* Total Rating */}
      <div className="flex items-center mb-4">
        <label className="font-semibold w-1/4 text-lg mr-4">Total Rating:</label>
        <span className="text-lg font-semibold text-[#055484]">{calculateTotalRating()}</span>
      </div>
    </form>
  );
};

export default CandidateEvaluationForm;