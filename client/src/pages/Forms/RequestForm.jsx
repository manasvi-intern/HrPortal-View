import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Layouts/Navbar';
import Dropdown from '../../components/Forms/Dropdown'
import Textarea from '../../components/Forms/Textarea';
import DateInput from '../../components/Forms/DateInput';
import DateTimeInput from '../../components/Forms/DateTimeInput';

const RequestForm = () => {
  const navigate = useNavigate();

  // State for form data
  const [formData, setFormData] = useState({
    raisedBy: '', location: '', dateOfRequest: '', clientProject: '', projectDetails: '', position: '', positionLevel: '', numOfPositions: '',
    replacement: '', replacementDetails: '', vacancyReason: '', experienceRange: '', salaryBudget: '', qualification: '', certification: '',
    skillset: '', otherBenefit: '', targetDate: '',
  });

  // Static dropdown options (replace these with dynamic options fetched from the backend as needed)
  const dropdownOptions = {
    raisedByOptions: [], 
    clientProjectOptions: [],
    positionOptions: [],
    positionLevelOptions: [],
    experienceRangeOptions: [],
    salaryBudgetOptions: [],
    qualificationOptions: [],
    certificationOptions: [],
  };

  // Handler for form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission logic
  const handleSubmit = (e) => {
    e.preventDefault();

    // Trigger form submission (send formData to the backend)
    console.log('Form data ready to be submitted:', formData);
  };

  return (
    <div>
      <Navbar />
      <div className="container mx-auto mt-10 p-6 mb-10 bg-gray-100 min-h-screen font-sans" style={{ fontFamily: 'Inria Sans, sans-serif' }}>
        <h2 className="text-3xl font-semibold mb-8 text-[#055484]">Manpower Requisition Form</h2>
        <form onSubmit={handleSubmit} className="space-y-8">
          <Dropdown label="Raised By" name="raisedBy" options={dropdownOptions.raisedByOptions} value={formData.raisedBy} onChange={handleInputChange} />
          <DateInput label="Date of Request" name="dateOfRequest" value={formData.dateOfRequest} onChange={handleInputChange} />
          <Textarea label="Location" name="location" value={formData.location} onChange={handleInputChange} rows={1} />
          <Dropdown label="Client/Project" name="clientProject" options={dropdownOptions.clientProjectOptions} value={formData.clientProject} onChange={handleInputChange} />
          <Textarea label="Please Specify Project Name/Site/Team etc for this Manpower Request" name="projectDetails" value={formData.projectDetails} onChange={handleInputChange} />

          <Dropdown label="Position/Designation for Requirement" name="position" options={dropdownOptions.positionOptions} value={formData.position} onChange={handleInputChange} />
          <Dropdown label="Position Level" name="positionLevel" options={dropdownOptions.positionLevelOptions} value={formData.positionLevel} onChange={handleInputChange} />
          <Textarea label="No. of Positions" name="numOfPositions" value={formData.numOfPositions} onChange={handleInputChange} rows={1} />
          <Dropdown label="Replacement or New Appointment" name="replacement" options={['Replacement', 'New Appointment']} value={formData.replacement} onChange={handleInputChange} />
          <Textarea label="If Replacement- (mention-Name/ DO Resignation/ LWD)" name="replacementDetails" value={formData.replacementDetails} onChange={handleInputChange} />
          <Textarea label="Specify Reason for Vacancy" name="vacancyReason" value={formData.vacancyReason} onChange={handleInputChange} />
          <Dropdown label="Experience Range" name="experienceRange" options={dropdownOptions.experienceRangeOptions} value={formData.experienceRange} onChange={handleInputChange} />
          <Dropdown label="CTC/ Salary Budget or Range" name="salaryBudget" options={dropdownOptions.salaryBudgetOptions} value={formData.salaryBudget} onChange={handleInputChange} />
          <Dropdown label="Qualification" name="qualification" options={dropdownOptions.qualificationOptions} value={formData.qualification} onChange={handleInputChange} />
          <Dropdown label="Certification" name="certification" options={dropdownOptions.certificationOptions} value={formData.certification} onChange={handleInputChange} />
          <Textarea label="Skills Set Summary" name="skillset" value={formData.skillset} onChange={handleInputChange} />
          <Textarea label="Any Other Benefit - specify" name="otherBenefit" value={formData.otherBenefit} onChange={handleInputChange} />
          <DateTimeInput label="Target Date to Refill" name="targetDate" value={formData.targetDate} onChange={handleInputChange} />

          <div className="flex justify-end">
            <button
              type="submit"
              className="py-2 px-6 bg-[#055484] font-semibold text-white rounded-full shadow-2xl hover:bg-gray-200 hover:text-orange-500"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RequestForm;
