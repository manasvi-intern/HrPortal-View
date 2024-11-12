// src/components/HrFeedbackForm.js
import React, { useState } from 'react';
import Navbar from '../../components/Layouts/Navbar';
import Textarea from '../../components/Forms/Textarea';
import Dropdown from '../../components/Forms/Dropdown';
import CandidateForm from '../../components/Forms/CIF1';

const LevelFourFb = () => {
  const [formData, setFormData] = useState({
    communication: '',
    attitude: '',
    fitmentToWork: '',
    cctc: '',
    ectc: '',
    reasonForLeaving: '',
    proceedToNextLevel: '', // New state for the radio button
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Handle form submission logic here
  };

  return (
    <div>
      <Navbar />
      <div className="container mx-auto mt-10 p-6 mb-10 bg-gray-100 min-h-screen font-sans" style={{ fontFamily: 'Inria Sans, sans-serif' }}>
        <h1 className="text-3xl font-semibold mb-8 text-[#055484] p-6">HR Evaluation (Level - 4)</h1>
        <form className="space-y-8" onSubmit={handleSubmit}>
          
          <CandidateForm />

          {/* Communication */}
          <Textarea label="Communication" placeholder="Describe communication skills" rows={4} name="communication" value={formData.communication} onChange={handleInputChange} />

          {/* Attitude */}
          <Textarea label="Attitude" placeholder="Describe attitude" rows={4} name="attitude" value={formData.attitude} onChange={handleInputChange} />

          {/* Fitment to Work */}
          <Textarea label="Fitment to Work" placeholder="Describe fitment to work" rows={4} name="fitmentToWork" value={formData.fitmentToWork} onChange={handleInputChange} />

          {/* CCTC */}
          <Dropdown label="CCTC" name="cctc" options={["Option 1", "Option 2", "Option 3"]} value={formData.cctc} onChange={handleInputChange} />

          {/* ECTC */}
          <Textarea label="ECTC:" placeholder="Provide ECTC" rows={1} name="ectc" value={formData.ectc} onChange={handleInputChange} />

          {/* Reason for Leaving */}
          <Textarea label="Reason for Leaving Current Company" placeholder="Provide reason for leaving" rows={4} name="reasonForLeaving" value={formData.reasonForLeaving} onChange={handleInputChange} />

          {/* Proceed to Next Level Question */}
          <div className="flex items-center mb-4">
            <label className="font-semibold w-1/4 text-lg mr-4">Can the candidate proceed to the next level?</label>
            <div className="flex items-center space-x-6">
              <label className="flex items-center space-x-2">
                <input type="radio" name="proceedToNextLevel" value="yes" checked={formData.proceedToNextLevel === 'yes'} onChange={handleInputChange} className="form-radio text-[#055484]" style={{ accentColor: '#055484' }}  />
                <span>Yes</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="radio" name="proceedToNextLevel" value="no" checked={formData.proceedToNextLevel === 'no'} onChange={handleInputChange} className="form-radio text-[#055484]" style={{ accentColor: '#055484' }} />
                <span>No</span>
              </label>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end">
            <button type="submit" className="py-2 px-6 bg-[#055484] font-semibold text-white rounded-full shadow-2xl hover:bg-gray-200 hover:text-orange-500">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LevelFourFb;
