import React, { useState } from 'react';
import Navbar from '../Layouts/Navbar';
import { useNavigate } from 'react-router-dom';

const Documentation = () => {
  // Uncomment this if you want to use navigation
  // const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    documents: {},
  });

  // Handle file changes
  const handleFileChange = (e) => {
    const { name } = e.target;
    const files = e.target.files;
    setFormData((prevData) => ({
      ...prevData,
      documents: {
        ...prevData.documents,
        [name]: files,
      },
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // You can add logic to send form data to a server here
  };

  const navigate = useNavigate();
  const handleNavigation = () => {
    navigate('/tracker');
  };

  return (
    <div>
      <Navbar />
      {/* Navigation Button */}
      

      {/* Form Section */}
      <div className="p-6 mb-10 ml-4 bg-gray-100 min-h-screen font-sans" style={{ fontFamily: 'Inria Sans, sans-serif' }}>
        <h1 className="text-3xl text-start font-semibold mb-8 text-[#055484]">Documentation</h1>
        <form className="space-y-8" onSubmit={handleSubmit}>

        <div className="flex items-center mb-4">
            <label className="font-semibold w-1/4 text-lg mr-4">Name of the Candidate:</label>
            <input
              type="text"
              placeholder="Enter candidate's name"
              className="border border-gray-300 p-3 rounded shadow-inner w-3/4"
            />
          </div>

          <div className="flex items-center mb-4">
            <label className="font-semibold w-1/4 text-lg mr-4">Position Applied:</label>
            <select className="border border-gray-300 p-3 rounded shadow-inner w-3/4">
              <option value="" disabled hidden>Select Position</option>
              <option value=" "></option>
              <option value=" "></option>
            </select>
          </div>

          <div className="flex items-center mb-4">
            <label className="font-semibold w-1/4 text-lg mr-4">Name of the Interviewer:</label>
            <select className="border border-gray-300 p-3 rounded shadow-inner w-3/4">
              <option value="" disabled hidden>Select Name of the Interviewer</option>
              <option value=" "></option>
              <option value=" "></option>
            </select>
          </div>

          <div className="flex items-center mb-4">
            <label className="font-semibold w-1/4 text-lg mr-4">Date & Time of Interview:</label>
            <input
              type="datetime-local"
              className="border border-gray-300 p-3 rounded shadow-inner w-3/4"
            />
          </div>

          <div className="flex items-center mb-4">
            <label className="font-semibold w-1/4 text-lg mr-4">Source of the Candidate:</label>
            <input
              type="text"
              placeholder="Enter Source"
              className="border border-gray-300 p-3 rounded shadow-inner w-3/4"
            />
          </div>

          {/* Upload Documents */}
          <div className="mb-6 text-start">
            {[
              '1. Photograph',
              '2. Resume',
              '3. Interview evaluation sheet',
              '4. HR evaluation sheet',
              '5. 10th Marksheet',
              '6. 12th Marksheet',
              '7. Degree marksheet',
              '8. Degree certificate/provisional degree certificate',
              '9. PG marksheet',
              '10. PG certificate',
              '11. Any other degree/certificate',
              '12. ID proof and DOB proof (DL/PAN card/Voter ID card)',
            ].map((label, index) => (
              <div key={index} className="mb-4">
                <label className="font-semibold w-1/4 text-lg mr-4">{label}</label>
                <input
                  type="file"
                  name={label.toLowerCase().replace(/\s+/g, '_')}
                  className="w-full p-2 border rounded-md"
                  onChange={handleFileChange}
                  multiple
                />
              </div>
            ))}
          </div>

          {/* Submit Button */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="py-2 px-6 bg-[#055484] font-semibold bg-white-600 text-white rounded-full shadow-2xl hover:bg-gray-200 hover:text-orange-500"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Documentation;
