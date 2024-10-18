import React, { useEffect, useState } from 'react';
import Navbar from '../Layouts/Navbar';

const OfferLetterRelease = () => {
  const [candidates, setCandidates] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // This useEffect will fetch data from the backend later.
  useEffect(() => {
//     axios.get('/api/candidates/offered')
//     .then(response => {
//       setCandidates(response.data);
//     })
//     .catch(error => {
//       console.error("Error fetching offered candidates", error);
//     });
// }, []);
//     const handleStatusUpdate = (candidateId, status) => {
//     // Call backend API to update the status
//       axios.post(`/api/candidates/updateStatus/${candidateId}`, { status })
//         .then(response => {
//           alert('Status updated successfully!');
//           // Refresh candidate list after updating status
//           setCandidates(candidates.map(candidate =>
//           candidate.id === candidateId ? { ...candidate, status } : candidate
//       ));
//     })
//     .catch(error => {
//       console.error("Error updating status", error);
//     });
// };
    const fetchCandidates = async () => {
      // Mock data for frontend visualization
      const mockData = [
        { id: 1, name: 'Person 1', position: 'Position 1', location: 'location 1' },
        { id: 2, name: 'Person 2', position: 'Position 2', location: 'location 2' },
        { id: 3, name: 'Person 3', position: 'Position 3', location: 'location 2' },
      ];
      setCandidates(mockData);
    };

    fetchCandidates();
  }, []);

  const handleOfferRelease = (candidateId) => {
    alert(`Offer letter released for candidate ID: ${candidateId}`);
    // Future action: Call the backend API to release the offer letter
    // Example: axios.post('/api/release-offer', { candidateId })
  };

  // Filter candidates based on the search term
  const filteredCandidates = candidates.filter(candidate => {
    if (searchTerm === '') {
      // When search term is empty, return all candidates
      return true;
    }
    // Otherwise, return candidates with names matching the search term
    return candidate.name.toLowerCase().includes(searchTerm.toLowerCase());
  });
  
  // Filter to get the exact match when the search term matches a candidate's full name
  const exactMatchCandidate = candidates.filter(candidate =>
    candidate.name.toLowerCase() === searchTerm.toLowerCase()
  );
  
  // Display either exact matches or filtered results
  const displayCandidates = exactMatchCandidate.length > 0 ? exactMatchCandidate : filteredCandidates;
  
  return (
    <div>
      <Navbar />
    <div className="container mx-auto p-20 mb-40 font-sans" style={{ fontFamily: 'Inria Sans, sans-serif' }}>
      <h1 className="text-3xl text-start font-semibold mb-8 text-[#055484]">Offer Letter Release</h1>

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

      <table className="min-w-full table-auto bg-white border rounded-lg shadow-md">
        <thead>
          <tr>
            <th className="px-16 py-2">Candidate Name</th>
            <th className="px-16 py-2">Position</th>
            <th className="px-16 py-2">Location</th>
            <th className="px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
        {displayCandidates.length > 0 ? (
            displayCandidates.map(candidate => (
            <tr key={candidate.id}>
              <td className="border px-4 py-2">{candidate.name}</td>
              <td className="border px-4 py-2">{candidate.position}</td>
              <td className="border px-4 py-2">{candidate.location}</td>
              <td className="border px-4 py-2">
                <button
                  onClick={() => handleOfferRelease(candidate.id)}
                  className="bg-[#055484] text-white px-4 py-2 rounded hover:bg-gray-100 hover:text-orange-500"
                >
                  Release Offer Letter
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
};

export default OfferLetterRelease;