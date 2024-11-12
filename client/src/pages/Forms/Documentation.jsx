import React, { useState } from 'react';
import Navbar from '../../components/Layouts/Navbar.jsx';
import CandidateForm from '../../components/Forms/CIF1.jsx';
// import { useNavigate } from 'react-router-dom';

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

  return (
    <div>
      <Navbar />
      {/* Navigation Button */}
      

      {/* Form Section */}
      <div className="container mx-auto mt-10 p-6 mb-10 bg-gray-100 min-h-screen font-sans" style={{ fontFamily: 'Inria Sans, sans-serif' }}>
        <h1 className="text-3xl text-center font-semibold mb-8 text-[#055484]">Documentation</h1>
        <form className="space-y-8" onSubmit={handleSubmit}>

        <CandidateForm />

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
