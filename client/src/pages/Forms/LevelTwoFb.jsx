import React from 'react';
// import { useNavigate } from 'react-router-dom';
import CandidateForm from '../../components/Forms/CIF1';
import Evaluations from '../../components/Forms/form1_below';
import Navbar from '../../components/Layouts/Navbar';

function LevelTwoFb() {
   return (
    <div>
        <Navbar />
    <div className="w-full max-w-screen-2xl mx-auto p-4" style={{ fontFamily: 'Inria Sans, sans-serif' }}>
      {/* Form Heading */}
      <div className="mb-8">
      </div>
        <div className="p-6 bg-gray-100 min-h-screen font-sans" style={{ fontFamily: 'Inria Sans, sans-serif' }}>
            <h2 className="text-3xl font-semibold mb-8 text-[#055484]">Technical Interview Evaluation Form (Level - 2)</h2>
      <CandidateForm />

      {/* Rating Scale Definition */}
        <div>
          <h2 className="font-semibold text-xl">Rating Scale Definition</h2>
          <p className="text-lg text-gray-800">
            KEY 0 - Abysmal, 1 - Poor, 2 - Fair, 3 - Good, 4 - Very Good, 5 - Excellent
          </p> <br />
        </div>

     <Evaluations />
        {/* Submit Button */}
        <div className="flex justify-end mt-8">
          <button
            type="submit"
            className="bg-[#055484] text-white py-2 px-6 rounded-full shadow-md hover:bg-gray-100 hover:text-orange-500 transition duration-200 ease-in-out text-lg"
          >
            Submit 
          </button>
        </div>
      </div>
    </div>
    </div>
  );
}

export default LevelTwoFb;