import React, { useState, useEffect } from 'react';
// import Navbar from '../Layouts/Navbar';
// import axios from 'axios'; 

const ApprovalPage = () => {
    const [acceptedCandidates, setAcceptedCandidates] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
//   const [candidates, setCandidates] = useState([]);
  
  useEffect(() => {
    // Fetch only candidates who have accepted the offer letter
//     const fetchCandidates = async () => {
//       try {
//         const response = await axios.get('/api/candidates?status=accepted'); 
//         setCandidates(response.data);
//       } catch (error) {
//         console.error('Error fetching candidates:', error);
//       }
//     };
//     fetchCandidates();
//   }, []);

    const fetchAcceptedCandidates = async () => {
    const candidates = [
      { id: 1, name: 'Person 1', email: 'person1@example.com', position: 'Position 1' },
      { id: 2, name: 'Person 2', email: 'person2@example.com', position: 'Position 2' },
      { id: 3, name: 'Person 3', email: 'person3@example.com', position: 'Position 3' },
    ];

    setAcceptedCandidates(candidates);
  };

  fetchAcceptedCandidates();
}, []);

const filteredCandidates = acceptedCandidates.filter(candidate => {
  if (searchTerm === '') {
    // When search term is empty, return all candidates
    return true;
  }
  // Otherwise, return candidates with names matching the search term
  return candidate.name.toLowerCase().includes(searchTerm.toLowerCase());
});

// Filter to get the exact match when the search term matches a candidate's full name
const exactMatchCandidate = acceptedCandidates.filter(candidate =>
  candidate.name.toLowerCase() === searchTerm.toLowerCase()
);

// Display either exact matches or filtered results
const displayCandidates = exactMatchCandidate.length > 0 ? exactMatchCandidate : filteredCandidates;

  return (
    <div>
        {/* <Navbar /> */}
    <div className="container mx-auto p-20 mb-40 font-sans" style={{ fontFamily: 'Inria Sans, sans-serif' }}>
      <h1 className="text-3xl font-semibold mb-8 text-[#055484]">COO Approval</h1>

      {/* Search bar */}
      <div className="flex items-center justify-end mb-4">
        <input
          type="text"
          placeholder="Search by candidate"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border rounded-lg px-4 py-2 mr-2"
        />
        <span className="material-icons text-gray-500">search</span>
      </div>

      {/* Table */}
      <table className="min-w-full bg-white border rounded-lg shadow-md">
        <thead>
          <tr>
            <th className="px-4 py-2 border">Candidate Name</th>
            <th className="px-4 py-2 border">Position</th>
            <th className="px-4 py-2 border">Date Accepted</th>
            <th className="px-4 py-2 border">Approval Status</th>
            <th className="px-4 py-2 border">Action</th>
          </tr>
        </thead>
        <tbody>
        {displayCandidates.length > 0 ? (
            displayCandidates.map(candidate => (
              <tr key={candidate.id} className="text-center">
                <td className="px-4 py-2 border">{candidate.name}</td>
                <td className="px-4 py-2 border">{candidate.position}</td>
                <td className="px-4 py-2 border">{candidate.dateAccepted}</td>
                <td className="px-4 py-2 border">
                  {candidate.approvalStatus ? 'Approved' : 'Pending'}
                </td>
                <td className="px-4 py-2 border">
                  <button
                    className="bg-green-500 hover:bg-green-600 text-white font-bold py-1 px-3 rounded"
                    onClick={() => handleApprove(candidate.id)}
                    disabled={candidate.approvalStatus === 'Approved'}
                  >
                    Approve
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="px-4 py-2 border text-center">
                No candidates found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
    </div>
  );

  // Function to approve candidate
  const handleApprove = async (id) => {
    try {
      await axios.post(`/api/candidates/approve/${id}`); // Adjust the API for approval
      setCandidates((prevCandidates) =>
        prevCandidates.map((candidate) =>
          candidate.id === id ? { ...candidate, approvalStatus: 'Approved' } : candidate
        )
      );
    } catch (error) {
      console.error('Error approving candidate:', error);
    }
  };
};

export default ApprovalPage;
