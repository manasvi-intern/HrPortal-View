import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Layouts/Navbar';
import axios from 'axios' ;

const ListOfCandidate = () => {
    const [candidates, setCandidates] = useState([]);
    const navigate = useNavigate();

    // Fetch candidates from the backend
    useEffect(() => {
        axios.get('http://localhost:5000/api/candidates') // Adjust URL as per your backend
            .then((res) => {
                console.log('Fetched candidates:',res.data);
                setCandidates(res.data);
                console.log('Candidates state:', res.data); // Check if this logs the updated state

            })
           
            .catch((error) => console.error('Error fetching candidates:', error));
    }, []);

    const handleWriteFeedback = (candidateId) => {
        navigate(`/feedback/level-four/${candidateId}`); // Redirect to feedback form using CANDIDATE_ID
    };

    return (
        
        <div className="container mx-auto p-4">
            <Navbar />
            <h1 className="text-2xl font-bold p-5 mb-4">Candidate List</h1>
            <table className="table-auto w-full border-collapse border border-gray-300">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="border border-gray-300 px-4 py-2">Sl No.</th>
                        <th className="border border-gray-300 px-4 py-2">Candidate Name</th>
                        <th className="border border-gray-300 px-4 py-2">Position Applied</th>
                        <th className="border border-gray-300 px-4 py-2">Action</th>
                    </tr>
                </thead>
                <tbody>
                  {candidates.length === 0 ? (
                 <tr>
                 <td colSpan="4" className="text-center py-4">No candidates found</td>
                 </tr>
                  ) : (
                 candidates.map((candidate, index) => {
                    return (
                <tr key={candidate.CANDIDATE_ID}>
                <td className="border border-gray-300 px-4 py-2">{index + 1}</td>
                <td className="border border-gray-300 px-4 py-2">{candidate.CANDIDATE_NAME}</td>
                <td className="border border-gray-300 px-4 py-2">{candidate.POSITION_APPLIED}</td>
                <td className="border border-gray-300 px-4 py-2">
                    <button
                        onClick={() => handleWriteFeedback(candidate.CANDIDATE_ID)}
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    >
                        Feedback
                    </button>
                </td>
            </tr>
        );
    } )
    )}
            </tbody>

            </table>
        </div>
    );
};

export default ListOfCandidate;