import React, { useState } from 'react';
import Navbar from '../../components/Layouts/Navbar';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const CandidateList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showSearch, setShowSearch] = useState(false);
  const navigate = useNavigate();

  const candidates = [
    { candidateId: 1, candidateName: 'Person 1', jobRole: 'Role 1' },
    { candidateId: 2, candidateName: 'Person 2', jobRole: 'Role 2' },
    { candidateId: 3, candidateName: 'Person 3', jobRole: 'Role 2' },
  ];

  const filteredCandidates = candidates.filter((candidate) =>
    candidate.candidateName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearchClick = () => {
    setShowSearch(true); // Show search box on click
  };

  const handleViewTracker = (candidateId) => {
    navigate(`/tracker/${candidateId}`);
  };

  return (
    <div>
      <Navbar />
      <div className="candidate-list container mx-auto p-20 mb-40 font-sans" style={{ fontFamily: 'Inria Sans, sans-serif' }}>
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-semibold text-[#055484]">Candidate List</h1>
          <div className="relative">
            {showSearch ? (
              <input
                type="text"
                placeholder="Search by name"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onBlur={() => setShowSearch(false)} // Hide input when it loses focus
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
              <th className="border px-16 py-2">Job Role</th>
              <th className="border px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredCandidates.map((candidate) => (
              <tr key={candidate.candidateId}>
                <td className="border px-4 py-2">{candidate.candidateName}</td>
                <td className="border px-4 py-2">{candidate.jobRole}</td>
                <td className="border px-4 py-2">
                  <button
                    className="bg-[#025686] text-white px-4 py-2 rounded hover:bg-gray-100 hover:text-orange-500"
                    onClick={() => handleViewTracker(candidate.candidateId)}
                  >
                    View Tracker
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

export default CandidateList;
