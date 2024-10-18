import React from 'react';
import { useNavigate } from 'react-router-dom';

const RequestForm = ({ formData, setFormData }) => {
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const navigate = useNavigate();
  const handleNavigation = () => {
    navigate('/tracker');
  };

  return (
  <div>
    {/* Button to redirect */}
    <button onClick={handleNavigation} className="flex items-center px-4 py-2 bg-white text-black-600 font-semibold hover:text-orange-500 hover:bg-gray-100 rounded shadow-md hover:shadow-lg transition duration-200 ease-in-out mb-4 mt-20 ml-2" >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 mr-0.5">
      <path d="M15 19l-7-7 7-7" />
      </svg>
        Access Hiring Process Overview
    </button>
    
    <div className="p-6 mb-10 bg-gray-100 min-h-screen font-sans" style={{ fontFamily: 'Inria Sans, sans-serif' }}>
      <h2 className="text-3xl font-semibold mb-8 text-[#055484]">Manpower Requisition Form</h2>

      {/* Form Fields */}
      <form className="space-y-8">

        {/* Raised By */}
        <div className="flex items-center mb-4">
          <label className="font-semibold w-1/4 text-lg mr-4">Raised by:</label>
          <select
            name="raisedBy"
            value={formData.raisedBy}
            onChange={handleInputChange}
            className="w-3/4 p-3 border border-gray-300 rounded shadow-inner"
          >
            <option value="" disabled selected hidden>
              Select Raised By
            </option>
            <option value=" "></option>
            <option value=" "></option>
          </select>
        </div>

        {/* Location */}
        <div className="flex items-center mb-4">
          <label className="font-semibold w-1/4 text-lg mr-4">Location:</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleInputChange}
            className="w-3/4 p-3 border border-gray-300 rounded shadow-inner"
            placeholder="Enter location"
          />
        </div>

        {/* Date of Request */}
        <div className="flex items-center mb-4">
          <label className="font-semibold w-1/4 text-lg mr-4">Date of request:</label>
          <input
            type="date"
            name="dateOfRequest"
            value={formData.dateOfRequest}
            onChange={handleInputChange}
            className="w-3/4 p-3 border border-gray-300 rounded shadow-inner"
          />
        </div>

        {/* Client/Project */}
        <div className="flex items-center mb-4">
          <label className="font-semibold w-1/4 text-lg mr-4">Client/Project:</label>
          <select
            name="clientProject"
            value={formData.clientProject}
            onChange={handleInputChange}
            className="w-3/4 p-3 border border-gray-300 rounded shadow-inner"
          >
            <option value="" disabled selected hidden>
              Select Client/project
            </option>
            <option value="Project A">Project A</option>
            <option value="Project B">Project B</option>
          </select>
        </div>

        {/* Specify Project Name/Site/Team etc for this Manpower Request */}
        <div className="flex items-center mb-4">
          <label className="font-semibold w-1/4 text-lg mr-4">Please Specify Project Name/Site/Team etc for this Manpower Request:</label>
          <textarea
            name="projectDetails"
            value={formData.projectDetails}
            onChange={handleInputChange}
            className="w-3/4 p-3 border border-gray-300 rounded shadow-inner resize-y"
            rows={3} 
            placeholder="Enter project details..."
          />
        </div>

        {/* Position/ Designation for Requirement */}
        <div className="flex items-center mb-4">
          <label className="font-semibold w-1/4 text-lg mr-4">Position/ Designation for Requirement:</label>
          <select
            name="position"
            value={formData.position}
            onChange={handleInputChange}
            className="w-3/4 p-3 border border-gray-300 rounded shadow-inner"
          >
            <option value="" disabled selected hidden>
              Select position/designation
            </option>
            <option value="Position 1">Position 1</option>
            <option value="Position 2">Position 2</option>
          </select>
        </div>

        {/* Position Level */}
        <div className="flex items-center mb-4">
          <label className="font-semibold w-1/4 text-lg mr-4">Position Level:</label>
          <select
            name="positionLevel"
            value={formData.positionLevel}
            onChange={handleInputChange}
            className="w-3/4 p-3 border border-gray-300 rounded shadow-inner"
          >
            <option value="" disabled selected hidden>
              Select position level
            </option>
            <option value="L1">L1</option>
            <option value="L2">L2</option>
          </select>
        </div>

        {/* Number of positions */}
        <div className="flex items-center mb-4">
          <label className="font-semibold w-1/4 text-lg mr-4">No. of Positions:</label>
          <input
            type="text"
            name="noPositions"
            value={formData.noPositions}
            onChange={handleInputChange}
            className="w-3/4 p-3 border border-gray-300 rounded shadow-inner"
            placeholder="Enter No. of  Positions"

          />
        </div>

        {/* Replacement or New Appointment */}
        <div className="flex items-center mb-4">
          <label className="font-semibold w-1/4 text-lg mr-4">Replacement or New Appointment:</label>
          <select
            name="replacement"
            value={formData.replacement}
            onChange={handleInputChange}
            className="w-3/4 p-3 border border-gray-300 rounded shadow-inner"
          >
            <option value="" disabled selected hidden>
              Select replacement/new appointment
            </option>
            <option value="Replacement">Replacement</option>
            <option value="New Appointment">New Appointment</option>
          </select>
        </div>

        {/* If Replacement- (mention-Name/ DO Resignation/ LWD) */}
        <div className="flex items-center mb-4">
          <label className="font-semibold w-1/4 text-lg mr-4">If Replacement- (mention-Name/ DO Resignation/ LWD):</label>
          <textarea
            name="replacementDetails"
            value={formData.replacementDetails}
            onChange={handleInputChange}
            className="w-3/4 p-3 border border-gray-300 rounded shadow-inner resize-y"
            rows={3} 
            placeholder="Enter replacement details..."
          />
        </div>

        {/* Specify Reason for vacancy */}
        <div className="flex items-center mb-4">
          <label className="font-semibold w-1/4 text-lg mr-4">Specify Reason for vacancy:</label>
          <textarea
            name="vacancyReason"
            value={formData.vacancyReason}
            onChange={handleInputChange}
            className="w-3/4 p-3 border border-gray-300 rounded shadow-inner resize-y"
            rows={3} 
            placeholder="Enter vacancy reason..."
          />
        </div>

        {/* Experience Range */}
        <div className="flex items-center mb-4">
          <label className="font-semibold w-1/4 text-lg mr-4">Experience Range:</label>
          <select
            name="experienceRange"
            value={formData.experienceRange}
            onChange={handleInputChange}
            className="w-3/4 p-3 border border-gray-300 rounded shadow-inner"
          >
            <option value="" disabled selected hidden>
              Select experience range
            </option>
            <option value=" "></option>
            <option value=" "></option>
          </select>
        </div>

        {/* CTC/ Salary Budget or Range */}
        <div className="flex items-center mb-4">
          <label className="font-semibold w-1/4 text-lg mr-4">CTC/ Salary Budget or Range:</label>
          <select
            name="salaryBudget"
            value={formData.salaryBudget}
            onChange={handleInputChange}
            className="w-3/4 p-3 border border-gray-300 rounded shadow-inner"
          >
            <option value="" disabled selected hidden>
              Select salary budget or range
            </option>
            <option value=" "></option>
            <option value=" "></option>
          </select>
        </div>

        {/* Qualification */}
        <div className="flex items-center mb-4">
          <label className="font-semibold w-1/4 text-lg mr-4">Qualification:</label>
          <select
            name="qualification"
            value={formData.qualification}
            onChange={handleInputChange}
            className="w-3/4 p-3 border border-gray-300 rounded shadow-inner"
          >
            <option value="" disabled selected hidden>
              Select Qualification
            </option>
            <option value=" "></option>
            <option value=" "></option>
          </select>
        </div>

        {/* Certification */}
        <div className="flex items-center mb-4">
          <label className="font-semibold w-1/4 text-lg mr-4">Certification:</label>
          <select
            name="certification"
            value={formData.certification}
            onChange={handleInputChange}
            className="w-3/4 p-3 border border-gray-300 rounded shadow-inner"
          >
            <option value="" disabled selected hidden>
              Select Certification
            </option>
            <option value=" "></option>
            <option value=" "></option>
          </select>
        </div>

        {/* Skills Set Summary */}
        <div className="flex items-center mb-4">
          <label className="font-semibold w-1/4 text-lg mr-4">Skills Set Summary:</label>
          <textarea
            name="skillset"
            value={formData.skillset}
            onChange={handleInputChange}
            className="w-3/4 p-3 border border-gray-300 rounded shadow-inner resize-y"
            rows={3} 
            
          />
        </div>

        {/* Any Other Benefit-  specify */}
        <div className="flex items-center mb-4">
          <label className="font-semibold w-1/4 text-lg mr-4">Any Other Benefit-  specify:</label>
          <textarea
            name="otherBenefit"
            value={formData.otherBenefit}
            onChange={handleInputChange}
            className="w-3/4 p-3 border border-gray-300 rounded shadow-inner resize-y"
            rows={3} 
          />
        </div>

        {/* Target Date to refill */}
        <div className="flex items-center mb-4">
          <label className="font-semibold w-1/4 text-lg mr-4">Target Date to refill:</label>
          <input
            type="datetime-local"
            name="targetDate"
            value={formData.targetDate}
            onChange={handleInputChange}
            className="w-3/4 p-3 border border-gray-300 rounded shadow-inner"
          />
        </div>

        {/* Submit Button */}
        <div className="flex justify-end">
          <button type="submit" className="py-2 px-6 bg-[#055484] font-semibold bg-white-600 text-white rounded-full shadow-2xl hover:bg-gray-200 hover:text-orange-500">
            Submit
          </button>
        </div>
      </form>
    </div>
  </div>
  );
};

export default RequestForm;
