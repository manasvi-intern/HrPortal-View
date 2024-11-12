import React, { useState } from 'react';
import Navbar from '../../components/Layouts/Navbar';
import { FaSearch } from 'react-icons/fa';

const COOApproval = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showSearch, setShowSearch] = useState(false);

  const [candidates, setCandidates] = useState([
    { candidateId: 1, candidateName: 'Person 1', position: 'Position 1', approvalStatus: 'Pending' },
    { candidateId: 2, candidateName: 'Person 2', position: 'Position 2', approvalStatus: 'Pending' },
    { candidateId: 3, candidateName: 'Person 3', position: 'Position 3', approvalStatus: 'Pending' },
  ]);

  const filteredCandidates = candidates.filter((candidate) =>
    candidate.candidateName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearchClick = () => {
    setShowSearch(true);
  };

  const handleApprovalAction = (candidateId, newStatus) => {
    setCandidates((prevCandidates) =>
      prevCandidates.map((candidate) =>
        candidate.candidateId === candidateId ? { ...candidate, approvalStatus: newStatus } : candidate
      )
    );
  };

  return (
    <div>
      <Navbar />
      <div className="coo-approval container mx-auto p-20 mb-40 font-sans" style={{ fontFamily: 'Inria Sans, sans-serif' }}>
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-semibold text-[#055484]">COO Approval</h1>
          <div className="relative">
            {showSearch ? (
              <input
                type="text"
                placeholder="Search by name"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onBlur={() => setShowSearch(false)}
                className="p-2 border rounded-md shadow-lg focus:outline-none"
                style={{ width: '200px' }}
                autoFocus
              />
            ) : (
              <button
                onClick={handleSearchClick}
                className="bg-[#055484] text-white p-2 rounded-full hover:bg-[#034162] focus:outline-none"
              >
                <FaSearch />
              </button>
            )}
          </div>
        </div>

        <table className="min-w-full table-auto bg-white border rounded-lg shadow-md">
          <thead>
            <tr>
              <th className="border px-16 py-2">Candidate Name</th>
              <th className="border px-16 py-2">Position</th>
              <th className="border px-16 py-2">Approval Status</th>
              <th className="border px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredCandidates.map((candidate) => (
              <tr key={candidate.candidateId}>
                <td className="border px-4 py-2">{candidate.candidateName}</td>
                <td className="border px-4 py-2">{candidate.position}</td>
                <td className="border px-4 py-2">{candidate.approvalStatus}</td>
                <td className="border px-4 py-2 flex space-x-2">
                  <button
                    className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                    onClick={() => handleApprovalAction(candidate.candidateId, 'Approved')}
                  >
                    Approve
                  </button>
                  <button
                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                    onClick={() => handleApprovalAction(candidate.candidateId, 'Rejected')}
                  >
                    Reject
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

export default COOApproval;
