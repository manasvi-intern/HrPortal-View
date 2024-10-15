import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Layouts/Navbar';

const LevelTwoView = () => {
  // const [candidates, setCandidates] = useState([]); 

  // // Function to fetch candidate details from the backend
  // const fetchCandidates = async () => {
  //   try {
  //     const response = await fetch('/api/feedback/level-one-candidates'); // Fetch from backend
  //     if (!response.ok) {
  //       throw new Error('Network response was not ok');
  //     }
  //     const data = await response.json();
  //     setCandidates(data); // Set candidate data
  //   } catch (error) {
  //     console.error('Error fetching candidates:', error); // Handle error
  //   }
  // };

  // // Fetch candidates on component mount
  // useEffect(() => {
  //   fetchCandidates();
  // }, []);

    const candidates = [
      { candidateId: 1, candidateName: 'Person 1', jobRole: 'Role 1', },
      { candidateId: 2, candidateName: 'Person 2', jobRole: 'Role 2', },
      { candidateId: 3, candidateName: 'Person 3', jobRole: 'Role 2',},

    ];
  
  // Handle view feedback PDF
  const handleViewFeedback = (candidateId) => {
    const feedbackUrl = `/api/pdf/view-feedback/level-one/${candidateId}`; // Generate PDF URL
    window.open(feedbackUrl, '_blank'); // Open PDF in new tab
  };

  return (
    <div>
      <Navbar />
      <div className="candidate-list container mx-auto p-20 mb-40 font-sans" style={{ fontFamily: 'Inria Sans, sans-serif' }}>
      <h1 className="text-3xl font-semibold mb-8 text-[#055484]">Level 2 Candidate Feedback</h1>
      <table className="min-w-full table-auto bg-white border rounded-lg shadow-md">
        <thead>
          <tr>
            <th className="border px-16 py-2">Candidate Name</th>
            <th className="border px-16 py-2">Job Role</th>
            <th className="border px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {candidates.map((candidate) => (
            <tr key={candidate.candidateId}>
              <td className="border px-4 py-2">{candidate.candidateName}</td>
              <td className="border px-4 py-2">{candidate.jobRole}</td>
              <td className="border px-4 py-2">
                <button
                  className="bg-[#025686] text-white px-4 py-2 rounded hover:bg-gray-100 hover:text-orange-500"
                  onClick={() => handleViewFeedback(candidate.candidateId)}
                >
                  View Feedback
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
};
export default LevelTwoView;
