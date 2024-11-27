import React, { useState, useEffect } from 'react';
import Navbar from '../components/Layouts/Navbar';
import { FaSearch } from 'react-icons/fa';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const COOApproval = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showSearch, setShowSearch] = useState(false);
  const [candidates, setCandidates] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');
  const [showDropdown, setShowDropdown] = useState(false); // State for dropdown
  const navigate = useNavigate();

  // Fetch data from API
  useEffect(() => {
    const fetchCandidates = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/coo-approval/candidates');
        setCandidates(response.data);
      } catch (error) {
        console.error('Error fetching candidates:', error);
      }
    };
    fetchCandidates();
  }, []);

  // Filter candidates that are not approved or rejected
  const filteredCandidates = candidates
    .filter((candidate) => candidate.action !== 'Approved' && candidate.action !== 'Rejected') // Filter both approved and rejected
    .filter((candidate) => candidate.candidate_name.toLowerCase().includes(searchTerm.toLowerCase()));

  const handleSearchClick = () => {
    setShowSearch(true);
  };


  const handleApprovalAction = async (candidateName, positionApplied, action, candidateId) => {
    try {
      await axios.post('http://localhost:5000/api/coo-approval/action', {
        candidate_id: candidateId,
        candidate_name: candidateName,
        position_applied: positionApplied,
        action,
      });
  
      setPopupMessage(
        action === 'Approved'
          ? 'Action saved. Candidate has been Approved!'
          : 'Action saved. Candidate has been Rejected!'
      );
      setShowPopup(true);
  
      // Update the candidates list with the approved/rejected action
      setCandidates((prevCandidates) =>
        prevCandidates.map((candidate) =>
          candidate.candidate_name === candidateName ? { ...candidate, action } : candidate
        )
      );
  
      // No navigation or timeout - stays on the same page
    } catch (error) {
      console.error('Error saving action:', error);
      setPopupMessage('Failed to save action. Please try again.');
      setShowPopup(true);
    }
  };

  const navigateToApprovedCandidates = () => {
    const approvedCandidates = candidates.filter((candidate) => candidate.action === 'Approved');
    navigate('/approved-candidates', { state: { approvedCandidates } });
  };

  const navigateToRejectedCandidates = () => {
    const rejectedCandidates = candidates.filter((candidate) => candidate.action === 'Rejected');
    navigate('/rejected-candidates', { state: { rejectedCandidates } });
  };

  const handleViewFeedback = (candidateId) => {
    navigate(`/View-feedback/level-four/${candidateId}`);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.dropdown-container')) {
        setShowDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div>
      <Navbar />
      <div
        className="coo-approval container mx-auto mb-40 font-sans"
        style={{ fontFamily: 'Inria Sans, sans-serif' }}
      >
        <div className="mb-8 flex justify-between items-center">
          <button
            onClick={() => navigate('/candidate-list')}
            className="flex items-center px-4 py-2 bg-white text-black-600 font-semibold hover:text-orange-500 hover:bg-gray-100 rounded shadow-md hover:shadow-lg transition duration-200 ease-in-out mb-4 mt-20"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-8 h-8 mr-0.5"
            >
              <path d="M15 19l-7-7 7-7" />
            </svg>
            Access Hiring Process Overview
          </button>
          <div className="relative dropdown-container">
            <button
              className="bg-white text-[#055484] font-semibold py-2 px-4 rounded inline-flex items-center shadow-lg"
              onClick={() => setShowDropdown(!showDropdown)} // Toggle dropdown
            >
              <span className="mr-1">Approved/Rejected Candidates</span>
              <svg
                className="fill-current h-4 w-4 "
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 10"
              >
                <path d="M0 0l10 10 10-10H0z" />
              </svg>
            </button>
            {showDropdown && (
              <ul className="dropdown-menu absolute bg-white text-[#055484] pt-1 shadow-lg border rounded w-full">
                <li>
                  <button
                    onClick={navigateToApprovedCandidates}
                    className="bg-white hover:bg-gray-100 hover:text-orange-600 py-2 px-4 block whitespace-no-wrap w-full text-left"
                  >
                    Approved Candidates
                  </button>
                </li>
                <li>
                  <button
                    onClick={navigateToRejectedCandidates}
                    className="bg-white hover:bg-gray-100 hover:text-orange-600 py-2 px-4 block whitespace-no-wrap w-full text-left"
                  >
                    Rejected Candidates
                  </button>
                </li>
              </ul>
            )}
          </div>
        </div>

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
              <th className="border px-8 py-2">SL.No</th>
              <th className="border px-16 py-2">Candidate Name</th>
              <th className="border px-16 py-2">Position Applied</th>
              <th className="border px-16 py-2">HR Feedback</th>
              <th className="border px-16 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredCandidates.map((candidate, index) => (
              <tr key={candidate.candidate_id}>
                <td className="border px-4 py-2">{index + 1}</td>
                <td className="border px-4 py-2">{candidate.candidate_name}</td>
                <td className="border px-4 py-2">{candidate.position_applied}</td>
                <td className="border px-4 py-2">
                  <button
                    onClick={() => handleViewFeedback(candidate.candidate_id)}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                  >
                    View
                  </button>
                </td>
                <td className="border px-4 py-2 flex space-x-2">
                  {candidate.action ? (
                    <span
                      className={
                        candidate.action === 'Rejected'
                          ? 'text-red-500'
                          : candidate.action === 'Approved'
                          ? 'text-green-500'
                          : ''
                      }
                    >
                      {candidate.action}
                    </span>
                  ) : (
                    <>
                      <button
                        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                        onClick={() =>
                          handleApprovalAction(candidate.candidate_name, candidate.position_applied, 'Approved', candidate.candidate_id)
                        }
                      >
                        Approve
                      </button>
                      <button
                        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                        onClick={() =>
                          handleApprovalAction(candidate.candidate_name, candidate.position_applied, 'Rejected', candidate.candidate_id)
                        }
                      >
                        Reject
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {showPopup && (
          <div className="popup fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded shadow-lg text-center">
              <p className="text-gray-800">{popupMessage}</p>
              <button
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                onClick={() => setShowPopup(false)}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default COOApproval;
