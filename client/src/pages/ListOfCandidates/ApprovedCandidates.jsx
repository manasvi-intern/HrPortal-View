import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from '../../components/Layouts/Navbar';

const ApprovedCandidates = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Access the approved candidates data passed from the COOApproval page
  const approvedCandidates = location.state?.approvedCandidates || [];

  const handleViewFeedback = (candidateId) => {
    navigate(`/View-feedback/level-four/${candidateId}`);
  };

  return (
    <div>
      <Navbar />
      <div className="container mx-auto mt-10 mb-10 font-sans" style={{ fontFamily: 'Inria Sans, sans-serif' }}>
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl mt-10 font-semibold text-[#055484]">Approved Candidates</h1>
          <button
            onClick={() => navigate('/Coo-approval')}
            className="bg-white text-[#055484] px-4 py-2 mt-10 rounded-md hover:bg-gray-100 hover:text-orange-600 font-semibold shadow-md"
          >
            Back to COO Approval
          </button>
        </div>
        {approvedCandidates.length > 0 ? (
          <table className="min-w-full table-auto bg-white border rounded-lg shadow-md">
            <thead>
              <tr>
                <th className="border px-4 py-2">SL.No</th>
                <th className="border px-16 py-2">Candidate Name</th>
                <th className="border px-16 py-2">Position Applied</th>
                <th className="border px-16 py-2">HR Feedback</th>
              </tr>
            </thead>
            <tbody>
              {approvedCandidates.map((candidate, index) => (
                <tr key={index}>
                  <td className="border px-4 py-3">{index + 1}</td>
                  <td className="border px-4 py-3">{candidate.candidate_name}</td>
                  <td className="border px-4 py-3">{candidate.position_applied}</td>
                  <button
                    onClick={() => handleViewFeedback(candidate.candidate_id)}
                    className="bg-blue-500 text-white px-2 py-1 mt-2 items-center rounded hover:bg-blue-600"
                  >
                    View
                  </button>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-gray-500 text-center mt-10">No approved candidates found.</p>
        )}
      </div>
    </div>
  );
};

export default ApprovedCandidates;
