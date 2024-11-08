import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Layouts/Navbar';

const LevelFourFb = () => {
  const [formData, setFormData] = useState({
    communication: '',
    attitude: '',
    fitmentToWork: '',
    cctc: '',
    ectc: '',
    reasonForLeaving: '',
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
    // You can handle form submission logic here
  };

  const navigate = useNavigate();
  const handleNavigation = () => {
    navigate('/tracker');
  };

  return (
    <div>
      <Navbar />
      <div className="w-full max-w-screen-2xl mx-auto p-4 bg-gray-100 min-h-screen font-sans" style={{ fontFamily: 'Inria Sans, sans-serif' }}>
        <h1 className="text-3xl font-semibold mb-8 text-[#055484] p-6">HR Evaluation</h1>
        <form className="space-y-8" onSubmit={handleSubmit}>
          
          {/* Name of the Candidate */}
          <div className="flex items-center mb-4">
            <label className="font-semibold w-1/4 text-lg mr-4">Name of the Candidate:</label>
            <input
              type="text"
              placeholder="Enter candidate's name"
              className="border border-gray-300 p-3 rounded shadow-inner w-3/4"
            />
          </div>

          {/* Position Applied */}
          <div className="flex items-center mb-4">
            <label className="font-semibold w-1/4 text-lg mr-4">Position Applied:</label>
            <select className="border border-gray-300 p-3 rounded shadow-inner w-3/4">
              <option value="" disabled hidden>Select Position</option>
              <option value=" "></option>
              <option value=" "></option>
            </select>
          </div>

          {/* Name of the Interviewer */}
          <div className="flex items-center mb-4">
            <label className="font-semibold w-1/4 text-lg mr-4">Name of the Interviewer:</label>
            <select className="border border-gray-300 p-3 rounded shadow-inner w-3/4">
              <option value="" disabled hidden>Select Name of the Interviewer</option>
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

          {/* Source of the Candidate */}
          <div className="flex items-center mb-4">
            <label className="font-semibold w-1/4 text-lg mr-4">Source of the Candidate:</label>
            <input
              type="text"
              placeholder="Enter Source"
              className="border border-gray-300 p-3 rounded shadow-inner w-3/4"
            />
          </div>

          {/* Communication */}
          <div className="flex items-center mb-4">
            <label className="font-semibold w-1/4 text-lg mr-4" htmlFor="communication">Communication</label>
            <textarea
              id="communication"
              name="communication"
              className="border border-gray-300 p-3 rounded shadow-inner w-3/4"
              value={formData.communication}
              onChange={handleInputChange}
              required
            />
          </div>

          {/* Attitude */}
          <div className="flex items-center mb-4">
            <label className="font-semibold w-1/4 text-lg mr-4" htmlFor="attitude">Attitude</label>
            <textarea
              id="attitude"
              name="attitude"
              className="border border-gray-300 p-3 rounded shadow-inner w-3/4"
              value={formData.attitude}
              onChange={handleInputChange}
              required
            />
          </div>

          {/* Fitment to Work */}
          <div className="flex items-center mb-4">
            <label className="font-semibold w-1/4 text-lg mr-4" htmlFor="fitmentToWork">Fitment to Work</label>
            <textarea
              id="fitmentToWork"
              name="fitmentToWork"
              className="border border-gray-300 p-3 rounded shadow-inner w-3/4"
              value={formData.fitmentToWork}
              onChange={handleInputChange}
              required
            />
          </div>

          {/* CCTC */}
          <div className="flex items-center mb-4">
            <label className="font-semibold w-1/4 text-lg mr-4" htmlFor="cctc">CCTC</label>
            <select
              id="cctc"
              name="cctc"
              className="border border-gray-300 p-3 rounded shadow-inner w-3/4"
              value={formData.cctc}
              onChange={handleInputChange}
              required
            >
              <option value="" disabled hidden>Select CCTC</option>
              <option value=" "></option>
              <option value=" "></option>
            </select>
          </div>

          {/* ECTC */}
          <div className="flex items-center mb-4">
            <label className="font-semibold w-1/4 text-lg mr-4" htmlFor="ectc">ECTC</label>
            <input
              type="text"
              id="ectc"
              name="ectc"
              className="border border-gray-300 p-3 rounded shadow-inner w-3/4"
              value={formData.ectc}
              onChange={handleInputChange}
              required
            />
          </div>

          {/* Reason for Leaving */}
          <div className="flex items-center mb-4">
            <label className="font-semibold w-1/4 text-lg mr-4" htmlFor="reasonForLeaving">Reason for Leaving Current Company</label>
            <textarea
              id="reasonForLeaving"
              name="reasonForLeaving"
              className="border border-gray-300 p-3 rounded shadow-inner w-3/4"
              value={formData.reasonForLeaving}
              onChange={handleInputChange}
              required
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-end">
            <button type="submit" className="py-2 px-6 bg-[#055484] font-semibold bg-white-600 text-white rounded-full shadow-2xl hover:bg-gray-200 hover:text-orange-500">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LevelFourFb;
