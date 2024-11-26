import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Layouts/Navbar';
import axios from 'axios' ;

const ViewRequestForm = () => {
    const [requests, setRequests] = useState([]);
    const navigate = useNavigate();

    // Fetch candidates from the backend
    useEffect(() => {
        axios.get('http://localhost:5000/api/requests') // Adjust URL as per your backend
            .then((res) => {
                console.log('fetched requests',res.data);
                setRequests(res.data);
                console.log('request state:', res.data); // Check if this logs the updated state

            })
           
            .catch((error) => console.error('Error fetching request:', error));
    }, []);

    const handleViewRequest = (requestId) => {
        navigate(`/request-list/${requestId}`); // Redirect to feedback form using CANDIDATE_ID
    };

    return (
        
        <div className="container mx-auto p-4">
            <Navbar />
            <h1 className="text-3xl font-semibold mb-10 mt-8 text-[#055484]">Manpower Request List</h1>
            <table className="table-auto w-full mb-8 border-collapse border border-gray-300">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="border border-gray-300 px-4 py-2">Sl No.</th>
                        <th className="border border-gray-300 px-4 py-2">Raised by</th>
                        <th className="border border-gray-300 px-4 py-2">Designation</th>
                        <th className="border border-gray-300 px-4 py-2">Project Name</th>
                        <th className="border border-gray-300 px-4 py-2">Action</th>
                    </tr>
                </thead>
                <tbody>
  {requests.length === 0 ? (
    <tr>
      <td colSpan="5" className="text-center py-4">No request found</td>
    </tr>
  ) : (
    requests.map((request, index) => (
      <tr key={request.request_id}>
        <td className="border border-gray-300 px-4 py-2">{index + 1}</td>
        <td className="border border-gray-300 px-4 py-2">{request.raisedBy}</td>
        <td className="border border-gray-300 px-4 py-2">{request.designation}</td>
        <td className="border border-gray-300 px-4 py-2">{request.projectName}</td>
        <td className="border border-gray-300 px-4 py-2">
          <button
            onClick={() => handleViewRequest(request.request_id)}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            View
          </button>
        </td>
      </tr>
    ))
  )}
</tbody>

            </table>
        </div>
    );
};

export default ViewRequestForm;