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
  const navigate = useNavigate();
 
  // Fetch data from API
  useEffect(() => {
    const fetchCandidates = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/coo-approval/candidates');
        console.log('Updated candidates:', response.data); // Debug log to verify the data
        setCandidates(response.data); // This updates the state with the new list
      } catch (error) {
        console.error('Error fetching candidates:', error);
      }
    };  
    fetchCandidates();
  }, []);

  const filteredCandidates = candidates.filter((candidate) =>
    candidate.candidate_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearchClick = () => {
    setShowSearch(true);
  };

  const handleApprovalAction = async (candidateName, positionApplied, action, candidateId) => {
    try {
      // Save the action (Approve or Reject) in the database
      await axios.post('http://localhost:5000/api/coo-approval/action', {
        candidate_id: candidateId,
        candidate_name: candidateName,
        position_applied: positionApplied,
        action,
      });

      // Show the respective popup message
      setPopupMessage(
        action === 'Approved'
          ? 'Action saved. Candidate has been Approved!'
          : 'Action saved. Candidate has been Rejected!'
      );
      setShowPopup(true); // Show popup modal

      // Update the table to reflect the action (showing either Approved or Rejected)
      setCandidates((prevCandidates) =>
        prevCandidates.map((candidate) =>
          candidate.candidate_name === candidateName ? { ...candidate, action } : candidate
        )
      );

      // Redirect after 4 seconds
      setTimeout(() => {
        navigate('/Coo-db');
      }, 4000);
    } catch (error) {
      console.error('Error saving action:', error);
      setPopupMessage('Failed to save action. Please try again.');
      setShowPopup(true);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="coo-approval container mx-auto mb-40 font-sans" style={{ fontFamily: 'Inria Sans, sans-serif' }}>
        <div className="mb-8">
          <button
            onClick={() => navigate('/candidate-list')}
            className="flex items-center px-4 py-2 bg-white text-black-600 font-semibold hover:text-orange-500 hover:bg-gray-100 rounded shadow-md hover:shadow-lg transition duration-200 ease-in-out mb-4 mt-20"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 mr-0.5">
              <path d="M15 19l-7-7 7-7" />
            </svg>
            Access Hiring Process Overview
          </button>
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
              <th className="border px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredCandidates.map((candidate, index) => (
              <tr key={candidate.candidate_id}>
                <td className="border px-4 py-2">{index + 1}</td>
                <td className="border px-4 py-2">{candidate.candidate_name}</td>
                <td className="border px-4 py-2">{candidate.position_applied}</td>
                <td className="border px-4 py-2 flex space-x-2">
                  {candidate.action ? (
                    <span
                      className={
                        candidate.action === 'Rejected'
                          ? 'text-red-500' // Red color for rejected
                          : candidate.action === 'Approved'
                          ? 'text-green-500' // Green color for approved
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

        {/* Popup modal */}
        {showPopup && (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-10">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-lg font-semibold text-green-600">{popupMessage}</h3>
              <p className="text-gray-500 mt-2">You will be redirected shortly.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default COOApproval;
