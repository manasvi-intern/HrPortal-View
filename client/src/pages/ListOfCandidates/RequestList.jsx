import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Layouts/Navbar";

const RequestList = () => {
  const [requests, setRequests] = useState([]);
  const navigate = useNavigate();

  // Fetch data from the backend
  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/requests");
        if (!response.ok) {
          throw new Error("Failed to fetch requests");
        }
        const data = await response.json();
  
        const dataWithSerial = data.map((request, index) => ({
          serial: index + 1, 
          ...request, 
        }));
  
        setRequests(dataWithSerial);
      } catch (error) {
        console.error("Error fetching requests:", error);
      }
    };
  
    fetchRequests();
  }, []);
  const handleViewRequest = (requestId) => {
    // Use the numeric request_id for navigation
    console.log("Navigating to view request with ID:", requestId); // Debugging log
    if (requestId) {
      navigate(`/view/${requestId}`);
    } else {
      console.error("ID is undefined or invalid");
    }
  };

  const handleUploadResume = (requestId) => {
    navigate(`/upload/${requestId}`);
  };

  return (
    <div className="container mx-auto mt-10 p-6 mb-10 bg-gray-100 min-h-screen font-sans" style={{ fontFamily: 'Inria Sans, sans-serif' }}>
      <Navbar />
      <h1 className="text-3xl mb-10 font-semibold text-[#055484]">Request Forms</h1>
      <div className="flex items-center justify-between mb-8">
        <table className="min-w-full table-auto bg-white border rounded-lg shadow-md">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="border px-16 py-2">Sl No</th>
              <th className="border px-16 py-2">Raised By</th>
              <th className="border px-16 py-2">Designation</th>
              <th className="border px-16 py-2">Project Name</th>
              <th className="border px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {requests.map((request, index) => (
              <tr
                key={request.request_id}  // Use request_id as the unique key for each row
                className={`${index % 2 === 0 ? "bg-white" : "bg-gray-50"} hover:bg-gray-100`}
              >
                <td className="border px-4 py-2">{request.serial}</td>  {/* Display MR01, MR02, ... */}
                <td className="border px-4 py-2">{request.raisedBy}</td>
                <td className="border px-4 py-2">{request.designation}</td>
                <td className="border px-4 py-2">{request.projectName}</td>
                <td className="border px-4 py-2 flex space-x-2">
                  <button
                    onClick={() => handleViewRequest(request.request_id)}  // Pass the actual request_id to navigate
                    className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600 transition mr-2"
                  >
                    View
                  </button>
                  <button
                    onClick={() => handleUploadResume(request.request_id)}  // Pass the actual request_id for upload
                    className="bg-green-500 text-white px-3 py-1 rounded-md hover:bg-green-600 transition"
                  >
                    Upload Resume
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

export default RequestList;
