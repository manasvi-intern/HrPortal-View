import React, { useState } from 'react';
import Navbar from '../Layouts/Navbar';

const LevelFourFb = () => {
  const [formData, setFormData] = useState({
    communication: '',
    attitude: '',
    fitmentToWork: '',
    cctc: '',
    ectc: '',
    reasonForLeaving: '',
    documents: {},
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    const { name } = e.target;
    const files = e.target.files;
    setFormData({
      ...formData,
      documents: {
        ...formData.documents,
        [name]: files,
      },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // You can handle form submission logic here
  };

  return (
    <div>
        <Navbar />

    <button className="flex items-center px-4 py-2 bg-white text-black-600 font-semibold hover:text-orange-500 hover:bg-gray-100 rounded shadow-md hover:shadow-lg transition duration-200 ease-in-out mb-4 mt-20 ml-2">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 mr-0.5">
      <path d="M15 19l-7-7 7-7" />
      </svg>
      Access Hiring Process Overview
    </button>

    <div className="p-6 mb-10 ml-4 bg-gray-100 min-h-screen font-sans" style={{ fontFamily: 'Inria Sans, sans-serif' }}>
      <h1 className="text-3xl font-semibold mb-8 text-[#055484]">HR Evaluation</h1>
      <form className="space-y-8" onSubmit={handleSubmit}>

        {/* Communication */}
        <div className="flex items-center mb-4">
          <label className="font-semibold w-1/4 text-lg mr-4" htmlFor="communication">
            Communication
          </label>
          <textarea
            id="communication"
            name="communication"
            className="w-full p-2 border rounded-md"
            value={formData.communication}
            onChange={handleInputChange}
            required
          />
        </div>

        {/* Attitude */}
        <div className="flex items-center mb-4">
          <label className="font-semibold w-1/4 text-lg mr-4" htmlFor="attitude">
            Attitude
          </label>
          <textarea
            id="attitude"
            name="attitude"
            className="w-full p-2 border rounded-md"
            value={formData.attitude}
            onChange={handleInputChange}
            required
          />
        </div>

        {/* Fitment to Work */}
        <div className="flex items-center mb-4">
          <label className="font-semibold w-1/4 text-lg mr-4" htmlFor="fitmentToWork">
            Fitment to Work
          </label>
          <textarea
            id="fitmentToWork"
            name="fitmentToWork"
            className="w-full p-2 border rounded-md"
            value={formData.fitmentToWork}
            onChange={handleInputChange}
            required
          />
        </div>

        {/* CCTC */}
        <div className="flex items-center mb-4">
          <label className="font-semibold w-1/4 text-lg mr-4" htmlFor="cctc">
            CCTC
          </label>
          <select
            id="cctc"
            name="cctc"
            className="w-full p-2 border rounded-md"
            value={formData.cctc}
            onChange={handleInputChange}
            required
          >
            <option value="" disabled selected hidden>
              Select CCTC
            </option>
            <option value=" "></option>
            <option value=" "></option>
          </select>
        </div>

        {/* ECTC */}
        <div className="flex items-center mb-4">
          <label className="font-semibold w-1/4 text-lg mr-4" htmlFor="ectc">
            ECTC
          </label>
          <input
            type="text"
            id="ectc"
            name="ectc"
            className="w-full p-2 border rounded-md"
            value={formData.ectc}
            onChange={handleInputChange}
            required
          />
        </div>

        {/* Reason for Leaving */}
        <div className="flex items-center mb-4">
          <label className="font-semibold w-1/4 text-lg mr-4" htmlFor="reasonForLeaving">
            Reason for Leaving Current Company
          </label>
          <textarea
            id="reasonForLeaving"
            name="reasonForLeaving"
            className="w-full p-2 border rounded-md"
            value={formData.reasonForLeaving}
            onChange={handleInputChange}
            required
          />
        </div>

        {/* Upload Documents */}
        <div className="mb-6">
          <label className="font-semibold w-1/4 text-lg mr-4 mb-4">Upload Documents</label>
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
            '12. Appointment letter for previous company',
            '13. Last salary slip',
            '14. Relieving letter from all previous employers',
            '15. Experience letter',
            '16. PAN card copy',
            '17. ID proof and DOB proof (DL/PAN card/Voter ID card)',
            '18. Offer Letter salary Acceptance',
            '19. Inknowtech-Email ID creation form',
            '20. Inknowtech- Onsite engineer Dos and Donts',
            '21. Inknowtech- undertaking on joining',
            '22. Medical Form',
            '23. Inknowtech- EPF- Declaration form',
            '24. Inknowtech- ESI Declaration form (NA for trainee, salary> 15k',
            '25. Appointment letter Acceptance',
            '26. Social Media Policy',
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
