import React, { useState } from 'react';
import Navbar from '../../components/Layouts/Navbar';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const OfferLetterRelease = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showSearch, setShowSearch] = useState(false);
  const navigate = useNavigate();

  const candidates = [
    { candidateId: 1, candidateName: 'Person 1', location: 'Location 1', position: 'Position 1' },
    { candidateId: 2, candidateName: 'Person 2', location: 'Location 2', position: 'Position 2' },
    { candidateId: 3, candidateName: 'Person 3', location: 'Location 3', position: 'Position 3' },
  ];

  const filteredCandidates = candidates.filter((candidate) =>
    candidate.candidateName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearchClick = () => {
    setShowSearch(true); // Show search box on click
  };

  const handleOfferLetterRelease = (candidateId) => {
    navigate(`/offer-letter/${candidateId}`);
  };

  return (
    <div>
      <Navbar />
      <div className="offer-letter-release container mx-auto p-20 mb-40 font-sans" style={{ fontFamily: 'Inria Sans, sans-serif' }}>
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-semibold text-[#055484]">Offer Letter Release</h1>
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
              <th className="border px-16 py-2">Location</th>
              <th className="border px-16 py-2">Position</th>
              <th className="border px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredCandidates.map((candidate) => (
              <tr key={candidate.candidateId}>
                <td className="border px-4 py-2">{candidate.candidateName}</td>
                <td className="border px-4 py-2">{candidate.location}</td>
                <td className="border px-4 py-2">{candidate.position}</td>
                <td className="border px-4 py-2">
                  <button
                    className="bg-[#025686] text-white px-4 py-2 rounded hover:bg-gray-100 hover:text-orange-500"
                    onClick={() => handleOfferLetterRelease(candidate.candidateId)}
                  >
                    Release Offer Letter
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

export default OfferLetterRelease;
