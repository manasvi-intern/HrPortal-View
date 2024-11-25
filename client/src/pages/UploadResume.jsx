import React from "react";
import { useParams } from "react-router-dom";

const UploadResume = () => {
  const { id } = useParams();

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      alert(`File uploaded: ${file.name} for ID: ${id}`);
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Upload Resume</h1>
      <p className="mb-4 text-gray-700">Upload resume for request ID: MR{id}</p>
      <input
        type="file"
        className="block w-full text-sm text-gray-500
          file:mr-4 file:py-2 file:px-4
          file:rounded-full file:border-0
          file:text-sm file:font-semibold
          file:bg-blue-50 file:text-blue-700
          hover:file:bg-blue-100"
        onChange={handleFileUpload}
      />
    </div>
  );
};

export default UploadResume;
